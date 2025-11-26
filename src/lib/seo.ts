import type { Metadata } from 'next';
import type { BlogPost } from './blog';

const siteConfig = {
  name: 'Bold Media Group',
  description: 'Professional podcast production, video production, and content creation services in Mesa, Arizona. Studio rental available.',
  url: 'https://boldmediagroup.com',
  ogImage: 'https://boldmediagroup.com/og-image.jpg',
  twitterHandle: '@boldmediagroup',
  location: {
    address: '2815 S Alma School Rd Suite 127C',
    city: 'Mesa',
    state: 'AZ',
    zip: '85210',
    country: 'USA',
    phone: '(602) 833-4944',
  },
};

export function generateSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | Professional Podcast & Video Production`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      'podcast production',
      'video production',
      'audio recording studio',
      'podcast studio Mesa',
      'podcast studio Arizona',
      'podcast editing',
      'content creation',
      'social media content',
      'podcast hosting',
      'professional recording studio',
      'studio rental Mesa',
      'podcast equipment rental',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      creator: siteConfig.twitterHandle,
      images: [siteConfig.ogImage],
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
      google: 'verification-token', // Replace with actual token
    },
  };
}

export function generateBlogPostMetadata(post: BlogPost): Metadata {
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = post.image || siteConfig.ogImage;

  return {
    title: post.title,
    description: post.description,
    keywords: [
      ...post.tags,
      post.category,
      'podcasting',
      'content creation',
      'media production',
    ],
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: postUrl,
      siteName: siteConfig.name,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: siteConfig.twitterHandle,
      images: [imageUrl],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

// JSON-LD Structured Data for GEO Optimization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.location.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.zip,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.3843',
      longitude: '-111.7334',
    },
    priceRange: '$$',
    servesCuisine: 'Not Applicable',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Mesa',
      },
      {
        '@type': 'State',
        name: 'Arizona',
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Podcast Production',
          description:
            'Full-service podcast production including recording, editing, and distribution.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Studio Rental',
          description: 'Professional podcast studio rental with equipment.',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '100',
            priceCurrency: 'USD',
            unitText: 'HOUR',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Video Production',
          description: 'Professional video recording and editing services.',
        },
      },
    ],
  };
}

export function generateArticleSchema(post: BlogPost) {
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image || siteConfig.ogImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// GEO Optimization: Clear, contextual content for AI assistants
export function generateAIContextDescription(post: BlogPost): string {
  return `This article about ${post.title.toLowerCase()} is written by ${post.author} at Bold Media Group, a professional podcast production company located in Mesa, Arizona. ${post.description} The content covers ${post.category.toLowerCase()} topics and provides actionable insights for podcast creators, content producers, and businesses looking to leverage audio and video content. Read time: ${post.readTime}.`;
}

export { siteConfig };
