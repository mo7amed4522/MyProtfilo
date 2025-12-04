import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords: string[];
  author: string;
}

export function generateStructuredData(config: SEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khaled Mohamed',
    url: config.url,
    image: config.image,
    jobTitle: 'Backend & Mobile Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Hera Sawda Technologies Co',
      location: 'Dubai, UAE'
    },
    description: config.description,
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
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Computer Science Degree'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'UAE'
    },
    email: 'khaled.mohamed@example.com',
    sameAs: [
      'https://github.com/mo7amed4522'
    ]
  };
}

export function generateWebsiteStructuredData(config: SEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Khaled Mohamed - Portfolio',
    url: config.url,
    description: config.description,
    author: {
      '@type': 'Person',
      name: 'Khaled Mohamed'
    },
    publisher: {
      '@type': 'Person',
      name: 'Khaled Mohamed'
    },
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${config.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateProjectStructuredData(projects: Array<{
  title: string;
  description: string;
  url: string;
  technologies: string[];
  category: string;
}>) {
  return projects.map((project, index) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    url: project.url,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    author: {
      '@type': 'Person',
      name: 'Khaled Mohamed'
    },
    keywords: project.technologies.join(', '),
    dateModified: new Date().toISOString(),
    position: index + 1
  }));
}

export function generateMetadata(config: Partial<SEOConfig> = {}): Metadata {
  const defaultConfig: SEOConfig = {
    title: 'Khaled Mohamed - Backend & Mobile Engineer | Go | Flutter',
    description: 'Experienced Backend & Mobile Engineer specializing in Go, Flutter, and cloud technologies. 3+ years building scalable solutions with microservices architecture and cross-platform mobile applications.',
    url: 'https://khaled-portfolio.vercel.app',
    image: '/og-image.jpg',
    keywords: [
      'Go developer',
      'Flutter developer',
      'Backend engineer',
      'Mobile developer',
      'AWS',
      'Docker',
      'Microservices',
      'TypeScript',
      'UAE',
      'Khaled Mohamed'
    ],
    author: 'Khaled Mohamed',
    ...config
  };

  return {
    title: defaultConfig.title,
    description: defaultConfig.description,
    keywords: defaultConfig.keywords,
    authors: [{ name: defaultConfig.author }],
    creator: defaultConfig.author,
    publisher: defaultConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(defaultConfig.url),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: defaultConfig.title,
      description: defaultConfig.description,
      type: 'website',
      url: defaultConfig.url,
      siteName: 'Khaled Mohamed Portfolio',
      locale: 'en_US',
      images: [
        {
          url: defaultConfig.image,
          width: 1200,
          height: 630,
          alt: defaultConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultConfig.title,
      description: defaultConfig.description,
      images: [defaultConfig.image],
      creator: '@mo7amed4522',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    other: {
      'theme-color': '#2563eb',
      'msapplication-TileColor': '#2563eb',
    },
  };
}

export function generateJsonLd(config: SEOConfig) {
  const structuredData = [
    generateStructuredData(config),
    generateWebsiteStructuredData(config)
  ];

  return {
    __html: structuredData.map(data => JSON.stringify(data, null, 2)).join('\n')
  };
}

// Sitemap generation utilities
export function generateSitemapEntry(url: string, lastModified: Date, changeFreq: string, priority: number) {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastModified.toISOString()}</lastmod>
      <changefreq>${changeFreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
}

export function generateSitemap(urls: Array<{
  url: string;
  lastModified?: Date;
  changeFreq?: string;
  priority?: number;
}>) {
  const baseUrl = 'https://khaled-portfolio.vercel.app';
  const today = new Date();

  const defaultUrls = [
    {
      url: '/',
      lastModified: today,
      changeFreq: 'weekly',
      priority: 1.0
    },
    {
      url: '/#projects',
      lastModified: today,
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/#skills',
      lastModified: today,
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/#experience',
      lastModified: today,
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/#contact',
      lastModified: today,
      changeFreq: 'yearly',
      priority: 0.7
    }
  ];

  const allUrls = [...defaultUrls, ...urls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.map(entry => generateSitemapEntry(
        baseUrl + entry.url,
        entry.lastModified || today,
        entry.changeFreq || 'monthly',
        entry.priority || 0.5
      )).join('')}
    </urlset>`;

  return sitemap;
}

// Robots.txt generation
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://khaled-portfolio.vercel.app/sitemap.xml

# Block unwanted crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Allow major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
}