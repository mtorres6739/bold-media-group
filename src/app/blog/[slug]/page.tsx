import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog';
import {
  generateBlogPostMetadata,
  generateArticleSchema,
  generateBreadcrumbSchema,
  siteConfig
} from '@/lib/seo';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Bold Media Group',
    };
  }

  return generateBlogPostMetadata(post);
}

// Simple markdown to HTML converter for basic formatting
function parseMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-semibold text-white mt-10 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-semibold text-white mt-12 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mt-12 mb-6">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="font-bold italic">$1</strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#d4af37] hover:text-[#e5c04b] underline underline-offset-2">$1</a>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2 text-zinc-300">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="my-6 list-disc list-outside">$&</ul>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 text-zinc-300">$1</li>')
    // Blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-[#d4af37] pl-6 my-6 italic text-zinc-400">$1</blockquote>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-6 overflow-x-auto"><code class="text-zinc-300 text-sm">$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-zinc-800 px-2 py-1 rounded text-[#d4af37] text-sm">$1</code>')
    // Paragraphs (must come last)
    .replace(/^(?!<[a-z])(.*$)/gim, (match) => {
      if (match.trim() === '') return '';
      if (match.startsWith('<')) return match;
      return `<p class="text-zinc-300 leading-relaxed mb-6">${match}</p>`;
    })
    // Clean up empty paragraphs
    .replace(/<p class="[^"]*"><\/p>/g, '')
    // Add spacing between sections
    .replace(/<\/ul>\s*<ul/g, '</ul>\n<ul')
    .replace(/<\/ol>\s*<ol/g, '</ol>\n<ol');
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(post.slug, 3);

  // Generate structured data
  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  // Parse the markdown content
  const htmlContent = parseMarkdown(post.content);

  return (
    <>
      {/* JSON-LD Structured Data for SEO and GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Hero/Header Section */}
        <section className="relative pt-12 pb-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_50%)]" />
          </div>

          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-[120px]" />

          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/blog" className="hover:text-[#d4af37] transition-colors">Blog</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-zinc-400">{post.category}</span>
            </nav>

            {/* Article Header */}
            <header>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-sm font-medium">
                  {post.category}
                </span>
                <time dateTime={post.date} className="text-zinc-500 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-500 text-sm">{post.readTime}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                {post.description}
              </p>

              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <span>By <span className="text-zinc-300">{post.author}</span></span>
              </div>
            </header>
          </div>
        </section>

        {/* Article Content */}
        <article className="relative pb-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Content */}
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* CTA */}
            <div className="mt-20 glass-card rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent" />
              <div className="relative">
                <h3 className="font-display text-2xl sm:text-3xl text-white mb-4">
                  Ready to Start Your Podcast?
                </h3>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                  Contact Bold Media Group for professional podcast production services in {siteConfig.location.city}, {siteConfig.location.state}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/podcast-discovery"
                    className="btn-premium px-8 py-4"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary px-8 py-4"
                  >
                    Contact Us
                  </Link>
                </div>
                <p className="mt-6 text-sm text-zinc-500">
                  {siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip} | {siteConfig.location.phone}
                </p>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-zinc-800">
                <h3 className="text-sm font-medium text-zinc-500 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 glass rounded-full text-zinc-400 text-sm hover:text-white hover:border-[#d4af37]/50 transition-colors"
                    >
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm mb-4">Share this article</p>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 glass rounded-xl hover:border-[#d4af37]/50 transition-all"
                >
                  <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#d4af37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">Twitter</span>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 glass rounded-xl hover:border-[#d4af37]/50 transition-all"
                >
                  <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#d4af37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 glass rounded-xl hover:border-[#d4af37]/50 transition-all"
                >
                  <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#d4af37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="relative py-20 border-t border-zinc-800">
            <div className="absolute inset-0">
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-12">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group glass-card glass-card-hover rounded-2xl p-6 transition-all"
                  >
                    <span className="text-[#d4af37] text-sm font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-3 mb-3 line-clamp-2 group-hover:text-[#d4af37] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
                      {relatedPost.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-sm">{relatedPost.readTime}</span>
                      <span className="text-[#d4af37] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
