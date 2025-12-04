import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { generateMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Khaled Mohamed',
      url: 'https://khaled-portfolio.vercel.app',
      image: '/og-image.jpg',
      jobTitle: 'Backend & Mobile Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Hera Sawda Technologies Co',
        location: 'Dubai, UAE'
      },
      description: 'Experienced Backend & Mobile Engineer specializing in Go, Flutter, and cloud technologies. 3+ years building scalable solutions with microservices architecture and cross-platform mobile applications.',
      knowsAbout: [
        'Go',
        'Flutter',
        'TypeScript',
        'Node.js',
        'React',
        'Next.js',
        'AWS',
        'Docker',
        'Kubernetes',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Redis',
        'REST APIs',
        'gRPC',
        'Microservices'
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'UAE'
      },
      email: 'khaled.mohamed@example.com',
      sameAs: [
        'https://github.com/mo7amed4522'
      ]
    })
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
