import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/seo';
import BlogContent from '@/components/BlogContent';

export const metadata: Metadata = {
  title: 'Blog | Bold Media Group - Podcast & Video Production Tips',
  description: 'Expert insights, tips, and strategies for podcasting and video production success from Bold Media Group in Mesa, Arizona. Learn about podcast production, studio rental, and content creation.',
  openGraph: {
    title: 'Blog | Bold Media Group',
    description: 'Expert insights, tips, and strategies for podcasting success from Mesa, Arizona',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bold Media Group Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Bold Media Group',
    description: 'Expert insights, tips, and strategies for podcasting success',
  },
};

export default function BlogPage() {
  // Get all blog posts at build time (server-side)
  const blogPosts = getAllPosts();

  // Extract unique categories from blog posts
  const allCategories = Array.from(
    new Set(blogPosts.map(post => post.category))
  ).sort();
  const categories = ['All', ...allCategories];

  // Serialize posts for client component (remove content to reduce payload)
  const serializedPosts = blogPosts.map(({ slug, title, description, date, category, readTime, featured }) => ({
    slug,
    title,
    description,
    date,
    category,
    readTime,
    featured,
  }));

  return (
    <BlogContent
      posts={serializedPosts}
      categories={categories}
      location={siteConfig.location}
    />
  );
}
