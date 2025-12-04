# Khaled Mohamed Portfolio Website Implementation Plan

## Overview

Build a modern, professional portfolio website for Khaled Mohamed (Backend & Mobile Engineer) using Next.js 14+ (App Router) with TypeScript and Tailwind CSS. The site will showcase his 3+ years of experience, highlight key projects, demonstrate technical skills, and provide contact functionality with a clean, minimalist design aesthetic.

## Current State Analysis

The project already has a Next.js 16 foundation with:

- React 19, TypeScript 5, Tailwind CSS v4 configured
- App Router structure with basic layout.tsx and page.tsx
- Geist fonts (Sans and Mono) from Google Fonts
- Dark mode support via CSS media queries
- ESLint configuration
- Vercel-ready deployment setup

## Desired End State

A complete, production-ready portfolio website with:

- Responsive design (mobile-first)
- Interactive elements and animations
- GitHub API integration for project showcase
- Contact form with email functionality
- SEO optimization with structured data
- Bilingual Arabic/English support
- Dark/light mode toggle
- Professional tech-focused aesthetic

---

## Dependencies to Install

### Core Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "react-hook-form": "^7.48.0",
    "react-hot-toast": "^2.4.1",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "resend": "^3.0.0"
  }
}
```

### Development Dependencies

```json
{
  "devDependencies": {
    "@types/node": "^20",
    "@tailwindcss/typography": "^0.5.0"
  }
}
```

---

## File Structure & Component Architecture

### App Router Structure

```
src/app/
├── layout.tsx (modify - update metadata, add theme provider)
├── page.tsx (rebuild - main portfolio page)
├── globals.css (modify - add custom animations, utility classes)
├── api/
│   ├── github/
│   │   └── route.ts (new - GitHub API proxy)
│   └── contact/
│       └── route.ts (new - Contact form handler)
├── components/
│   ├── ui/
│   │   ├── Button.tsx (new - Reusable button component)
│   │   ├── Card.tsx (new - Reusable card component)
│   │   ├── Input.tsx (new - Reusable input component)
│   │   └── ThemeToggle.tsx (new - Dark/light mode toggle)
│   ├── layout/
│   │   ├── Header.tsx (new - Navigation header)
│   │   └── Footer.tsx (new - Footer section)
│   ├── sections/
│   │   ├── Hero.tsx (new - Hero/introduction section)
│   │   ├── Projects.tsx (new - Projects showcase)
│   │   ├── Skills.tsx (new - Skills visualization)
│   │   ├── Experience.tsx (new - Timeline experience)
│   │   └── Contact.tsx (new - Contact form)
│   └── providers/
│       └── ThemeProvider.tsx (new - Theme context provider)
├── lib/
│   ├── types.ts (new - TypeScript interfaces)
│   ├── github.ts (new - GitHub API functions)
│   ├── email.ts (new - Email service functions)
│   ├── utils.ts (new - Utility functions)
│   └── constants.ts (new - App constants and content)
├── hooks/
│   ├── useTheme.ts (new - Theme management hook)
│   └── useGitHub.ts (new - GitHub data hook)
└── styles/
    └── animations.css (new - Custom animations)
```

---

## Core Components Specification

### 1. Root Layout Enhancement

**File:** `src/app/layout.tsx`
**Purpose:** Update metadata, add theme provider, optimize for SEO

**Changes:**

- Update metadata.title to "Khaled Mohamed - Backend & Mobile Engineer"
- Update metadata.description to professional portfolio description
- Add keywords meta tag
- Add open graph and twitter card metadata
- Wrap children with ThemeProvider
- Set lang attribute dynamically (for bilingual support)
- Add structured data (JSON-LD) for person schema

### 2. Theme Provider

**File:** `src/app/components/providers/ThemeProvider.tsx`
**Purpose:** Manage dark/light theme state with localStorage persistence

**Implementation:**

- Context-based theme management
- localStorage persistence for user preference
- System preference detection as fallback
- CSS class toggling on html element
- SSR-safe theme detection

### 3. Header Component

**File:** `src/app/components/layout/Header.tsx`
**Purpose:** Navigation with smooth scrolling and theme toggle

**Features:**

- Sticky header with blur backdrop on scroll
- Navigation links: Home, Projects, Skills, Experience, Contact
- Dark/light mode toggle button
- Mobile responsive hamburger menu
- Smooth scroll to section anchors
- Active section highlighting
- Logo/brand area with "Khaled Mohamed"

**Styling:**

- Transparent background, gains backdrop-blur on scroll
- Clean minimalist design
- Hover effects on navigation items
- Mobile-first responsive approach

### 4. Hero Section

**File:** `src/app/components/sections/Hero.tsx`
**Purpose:** Professional introduction with call-to-action

**Content:**

- Headline: "Backend & Mobile Engineer"
- Subtitle: "Building robust solutions with Go, Flutter, and Cloud Technologies"
- Brief professional bio (2-3 sentences)
- Location: "Based in UAE"
- CTA buttons: "View Projects", "Get in Touch", "Download Resume"
- Professional avatar/profile image placeholder

**Animations:**

- Fade-in on mount
- Staggered text animation
- Button hover effects with scale transforms
- Floating animation for avatar

### 5. Projects Showcase

**File:** `src/app/components/sections/Projects.tsx`
**Purpose:** Display 6 key projects with GitHub integration

**Project Data Structure:**

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'mobile' | 'backend' | 'fullstack';
}
```

**Features:**

- Grid layout (responsive: 1 column mobile, 2 tablet, 3 desktop)
- Project cards with hover effects
- Technology tags with proper styling
- GitHub repository integration (fetches stars, forks, last updated)
- Filter by category (mobile, backend, fullstack)
- "View on GitHub" and "Live Demo" buttons
- Image placeholders for each project
- Search/filter functionality

**API Integration:**

- Fetch repository data from GitHub API via proxy route
- Cache repository data to avoid rate limits
- Handle API errors gracefully with fallback data

### 6. Skills Visualization

**File:** `src/app/components/sections/Skills.tsx`
**Purpose:** Visual representation of technical skills by category

**Skill Categories:**

1. **Backend Development**: Go, Microservices, REST APIs, Gin, gRPC, Protobuf
2. **Mobile Development**: Flutter, Provider, Bloc, Riverpod, iOS/Android
3. **Cloud & DevOps**: AWS, Firebase, Vercel, Docker, Kubernetes
4. **Databases**: PostgreSQL, MySQL, MongoDB, Redis
5. **Languages**: Go, TypeScript, JavaScript, PHP

**Visualization:**

- Circular progress bars for skill proficiency levels
- Category-based grouping with expand/collapse
- Interactive hover effects showing skill details
- Color-coded by category
- Animated skill bars on scroll intersection
- Search/filter skills functionality

### 7. Experience Timeline

**File:** `src/app/components/sections/Experience.tsx`
**Purpose:** Professional experience timeline

**Experience Data:**

```typescript
interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined for current position
  description: string[];
  technologies: string[];
}
```

**Features:**

- Vertical timeline design with alternating left/right layout on desktop
- Current position highlighted
- Company logos placeholders
- Achievement bullet points
- Technology stack tags
- Date formatting (MMM YYYY - Present)
- Mobile-optimized single column layout

### 8. Contact Section

**File:** `src/app/components/sections/Contact.tsx`
**Purpose:** Contact form with email integration and social links

**Contact Form Fields:**

- Name (required, text input)
- Email (required, email validation)
- Subject (required, text input)
- Message (required, textarea, min 20 chars)
- Submit button with loading state

**Form Features:**

- React Hook Form with Zod validation
- Real-time validation feedback
- Success/error toast notifications
- Loading state during submission
- Form reset on successful submission

**Email Integration:**

- Use Resend for email delivery
- Send to personal email address
- Include timestamp and user information
- Handle rate limiting (max 5 emails per hour per IP)

**Social Links:**

- GitHub: github.com/mo7amed4522
- LinkedIn (placeholder if available)
- Email contact button
- Phone number (optional)

### 9. Footer Component

**File:** `src/app/components/layout/Footer.tsx`
**Purpose:** Footer with additional links and information

**Content:**

- Copyright notice with current year
- Quick navigation links
- Social media links
- "Built with Next.js & ❤️" credit
- Back to top button
- Language toggle (Arabic/English) placeholder

---

## API Routes Implementation

### GitHub API Proxy

**File:** `src/app/api/github/route.ts`
**Purpose:** Proxy GitHub API requests to avoid CORS and rate limiting

**Endpoints:**

- GET /api/github?user=mo7amed4522 - Fetch user profile and repositories

**Features:**

- Fetch user profile data
- Fetch public repositories with basic stats
- Cache responses for 5 minutes to avoid rate limits
- Error handling with appropriate HTTP status codes
- Repository filtering (exclude forks, include language stats)

### Contact Form Handler

**File:** `src/app/api/contact/route.ts`
**Purpose:** Handle contact form submissions and send emails

**Features:**

- POST endpoint for form submissions
- Rate limiting (5 requests per hour per IP)
- Input validation with Zod schema
- Email sending via Resend
- Error handling and success responses
- Request logging for monitoring

**Email Template:**

- Professional HTML email template
- Include all form fields
- Add timestamp and IP address
- Responsive design for mobile clients

---

## Styling & Design System

### Color Palette

**Light Mode:**

- Primary: #3b82f6 (Blue 500)
- Secondary: #64748b (Slate 500)
- Background: #ffffff (White)
- Surface: #f8fafc (Slate 50)
- Text: #1e293b (Slate 800)
- Text Secondary: #64748b (Slate 500)

**Dark Mode:**

- Primary: #60a5fa (Blue 400)
- Secondary: #94a3b8 (Slate 400)
- Background: #0f172a (Slate 900)
- Surface: #1e293b (Slate 800)
- Text: #f1f5f9 (Slate 100)
- Text Secondary: #cbd5e1 (Slate 300)

### Typography Scale

Using Geist Sans and Geist Mono fonts:

- Display: text-4xl md:text-6xl font-bold
- Headline: text-2xl md:text-4xl font-semibold
- Title: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Caption: text-sm md:text-base

### Spacing System

- Container padding: 4rem 1rem (mobile), 6rem 2rem (desktop)
- Section spacing: 6rem (mobile), 8rem (desktop)
- Card spacing: 1.5rem
- Component spacing: 2rem

### Animation System

**Framer Motion Presets:**

- Fade In: fadeInUp, fadeInLeft, fadeInRight
- Scale: scaleIn, scaleUp
- Slide: slideInLeft, slideInRight
- Stagger: container with child variants

**Custom CSS Animations:**

- Floating animation for hero avatar
- Glow effect on buttons
- Pulse for loading states
- Shimmer for skeleton loading

### Responsive Design

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

**Breakpoint Strategy:**

- Mobile-first approach
- Use Tailwind responsive prefixes (sm:, md:, lg:, xl:)
- Consider touch interactions on mobile
- Optimize typography for each breakpoint

---

## SEO Optimization

### Meta Tags Strategy

```typescript
// Dynamic metadata based on page content
export const metadata: Metadata = {
  title: "Khaled Mohamed - Backend & Mobile Engineer | Go | Flutter",
  description: "Experienced Backend & Mobile Engineer specializing in Go, Flutter, and cloud technologies. 3+ years building scalable solutions.",
  keywords: ["Go developer", "Flutter developer", "Backend engineer", "Mobile developer", "AWS", "Docker"],
  authors: [{ name: "Khaled Mohamed" }],
  openGraph: {
    title: "Khaled Mohamed - Backend & Mobile Engineer",
    description: "Building robust solutions with Go, Flutter, and Cloud Technologies",
    type: "website",
    url: "https://khaled-portfolio.vercel.app",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaled Mohamed - Backend & Mobile Engineer",
    description: "Experienced Backend & Mobile Engineer specializing in Go, Flutter, and cloud technologies",
    images: ["/og-image.jpg"]
  }
}
```

### Structured Data

**Person Schema (JSON-LD):**

- Name: Khaled Mohamed
- Job Title: Backend & Mobile Engineer
- WorksFor: Hera Sawda Technologies Co
- KnowsAbout: Go, Flutter, AWS, Docker, etc.
- Url: Portfolio website URL
- SameAs: GitHub profile URL

### Performance Optimization

- Next.js Image optimization for all images
- Component lazy loading with React.lazy
- Font optimization with Next.js font optimization
- Critical CSS inlining for above-fold content
- Gzip compression (handled by Vercel)

---

## Content Strategy

### Professional Bio Content

```typescript
const heroContent = {
  title: "Backend & Mobile Engineer",
  subtitle: "Building robust solutions with Go, Flutter, and Cloud Technologies",
  bio: "Passionate software engineer with 3+ years of experience developing scalable backend systems and cross-platform mobile applications. Specialized in Go microservices architecture and Flutter development.",
  location: "Based in UAE",
  currentRole: "Backend Developer at Hera Sawda Technologies Co"
}
```

### Projects Content

All 6 projects with detailed descriptions:

1. **Life Line** - Hospital Management & Emergency Response App
2. **My Eye** - Voice-Controlled Accessible Travel Booking App
3. **HOTELO ERP** - Hotel Management Backend
4. **Food GO** - Home-Cooked Meals Marketplace (User App)
5. **My Dress ERP** - E-commerce Dress Store Backend
6. **Additional Project** - To be determined or personal website

### Skills Categorization

Detailed skill breakdown with proficiency levels for visual representation.

### Experience Timeline

Current role at Hera Sawda Technologies with detailed responsibilities and achievements.

---

## Bilingual Support Implementation

### Language Strategy

- Primary: English (default)
- Secondary: Arabic (toggle via language switcher)
- Right-to-left (RTL) support for Arabic
- Language-agnostic component structure

### Implementation Plan

**Phase 1:** English-only (initial launch)
**Phase 2:** Add Arabic translation support

- Create translation files for all content
- Implement RTL layout adjustments
- Add language toggle in header
- Update routing to support /ar paths

---

## Testing Strategy

### Manual Testing Checklist

**Responsive Design:**

- Test on mobile (320px, 375px, 414px)
- Test on tablet (768px, 1024px)
- Test on desktop (1920px+)

**Functionality:**

- Theme toggle persistence
- Form validation and submission
- GitHub API integration
- Smooth scroll navigation
- Interactive hover effects

**Performance:**

- Page load speed under 3 seconds
- Lighthouse scores >90
- No layout shifts (CLS < 0.1)

**Browser Compatibility:**

- Chrome, Firefox, Safari latest versions
- Edge browser
- Mobile Safari (iOS)
- Mobile Chrome (Android)

---

## Deployment & Environment Setup

### Vercel Deployment

**Environment Variables:**

- `NEXT_PUBLIC_GITHUB_TOKEN` - GitHub API token (optional, for higher rate limits)
- `RESEND_API_KEY` - Resend API key for email functionality
- `CONTACT_EMAIL` - Destination email for contact form
- `NEXT_PUBLIC_SITE_URL` - Production site URL

**Build Configuration:**

- Next.js build with static generation where possible
- Optimize images and assets
- Configure custom headers for security

### Local Development

**Setup Steps:**

1. Clone repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env.local`
4. Add environment variables
5. Run `npm run dev` for development server
6. Run `npm run build` to test production build

---

## Success Criteria

**Functional Requirements:**
✅ All sections render correctly on all devices
✅ Contact form sends emails successfully
✅ GitHub integration displays repository data
✅ Theme toggle works and persists
✅ Navigation smooth scrolls to sections

**Performance Requirements:**
✅ Page load time < 3 seconds
✅ Lighthouse performance score > 90
✅ First Contentful Paint < 1.5 seconds
✅ No layout shifts during loading

**SEO Requirements:**
✅ Meta tags optimized for search engines
✅ Structured data properly implemented
✅ All images have alt text
✅ Page titles are descriptive

**User Experience:**
✅ Mobile-first responsive design
✅ Accessible color contrast ratios
✅ Keyboard navigation support
✅ Loading states and error handling

---

## Timeline Estimate

**Development Phases:**

1. **Setup & Dependencies** (0.5 day) - Install packages, configure environment
2. **Core Components** (2 days) - Header, Hero, Footer, Theme system
3. **Content Sections** (3 days) - Projects, Skills, Experience, Contact
4. **API Integration** (1 day) - GitHub API, Contact form handling
5. **Styling & Animations** (1.5 days) - Responsive design, interactions
6. **SEO & Optimization** (0.5 day) - Meta tags, performance optimization
7. **Testing & Deployment** (0.5 day) - Manual testing, Vercel deployment

**Total Estimated Time:** 9 days

---

This comprehensive plan provides a complete roadmap for building Khaled Mohamed's professional portfolio website with all requested features and modern best practices.