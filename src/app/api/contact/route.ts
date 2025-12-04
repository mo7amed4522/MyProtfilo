import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormData, APIResponse } from '@/lib/types';

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // 5 requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Zod schema for input validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIP || 'unknown';
  return ip;
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const clientData = rateLimitStore.get(ip);

  if (!clientData) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (now > clientData.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (clientData.count >= RATE_LIMIT) {
    return false;
  }

  clientData.count++;
  return true;
}

// Email template
function createEmailTemplate(data: ContactFormData & { timestamp: string; ip?: string }): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .container {
          background: white;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #2563eb;
          margin: 0;
          font-size: 24px;
        }
        .field {
          margin-bottom: 20px;
        }
        .label {
          font-weight: 600;
          color: #6b7280;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .value {
          font-size: 16px;
          color: #1f2937;
          word-wrap: break-word;
        }
        .message {
          background: #f8f9fa;
          border-left: 4px solid #2563eb;
          padding: 20px;
          border-radius: 0 8px 8px 0;
          white-space: pre-wrap;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
          font-size: 12px;
          color: #6b7280;
        }
        .timestamp {
          color: #9ca3af;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 New Contact Form Submission</h1>
          <p>You've received a new message from your portfolio website.</p>
        </div>

        <div class="field">
          <div class="label">Name</div>
          <div class="value">${data.name}</div>
        </div>

        <div class="field">
          <div class="label">Email Address</div>
          <div class="value">
            <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
          </div>
        </div>

        <div class="field">
          <div class="label">Subject</div>
          <div class="value">${data.subject}</div>
        </div>

        <div class="field">
          <div class="label">Message</div>
          <div class="message">${data.message}</div>
        </div>

        <div class="field">
          <div class="label">Submission Details</div>
          <div class="value">
            <div>📅 ${data.timestamp}</div>
            ${data.ip ? `<div>🌐 IP: ${data.ip}</div>` : ''}
          </div>
        </div>

        <div class="footer">
          <p>This message was sent from your portfolio contact form.</p>
          <p class="timestamp">Generated on ${new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Dubai',
            dateStyle: 'long',
            timeStyle: 'medium'
          })} (GST)</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIP(request);

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded',
          message: 'Too many requests. Please try again later.'
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Get environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.error('Missing environment variables for email service');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service not configured',
          message: 'Unable to send message at this time'
        },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Prepare email data
    const timestamp = new Date().toISOString();
    const emailData = {
      ...validatedData,
      timestamp,
      ip: ip !== 'unknown' ? ip : undefined
    };

    // Send email
    const { error, data } = await resend.emails.send({
      from: 'Portfolio Contact <noreply@khaled-portfolio.vercel.app>',
      to: [contactEmail],
      replyTo: validatedData.email,
      subject: `New Contact: ${validatedData.subject}`,
      html: createEmailTemplate(emailData),
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    // Log successful submission
    console.log('Contact form submission successful:', {
      id: data?.id,
      from: validatedData.email,
      subject: validatedData.subject,
      timestamp,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      data: { id: data?.id }
    });

  } catch (error) {
    console.error('Contact form error:', error);

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          message: 'Please check your input and try again',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Unable to send message. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// Clean up expired rate limit entries
export function GET() {
  const now = Date.now();
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now > data.resetTime) {
      rateLimitStore.delete(ip);
    }
  }

  return NextResponse.json({
    success: true,
    message: 'Rate limit cleanup completed',
    activeLimits: rateLimitStore.size
  });
}