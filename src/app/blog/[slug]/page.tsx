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

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-black">Home</Link>
              <span>→</span>
              <Link href="/blog" className="hover:text-black">Blog</Link>
              <span>→</span>
              <span className="text-black">{post.category}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <time dateTime={post.date} className="text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{post.readTime}</span>
              </div>
              <h1 className="text-5xl font-bold text-black mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600">
                {post.description}
              </p>
              <div className="mt-4 text-sm text-gray-500">
                By {post.author}
              </div>
            </header>

            {/* Content - Render MDX */}
            <div
              className="prose prose-lg max-w-none
                [&_*]:text-black
                [&_h1]:text-black [&_h1]:font-bold [&_h1]:text-4xl [&_h1]:mt-12 [&_h1]:mb-6
                [&_h2]:text-black [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-6
                [&_h3]:text-black [&_h3]:font-bold [&_h3]:text-2xl [&_h3]:mt-8 [&_h3]:mb-4
                [&_p]:text-black [&_p]:leading-relaxed [&_p]:mb-6
                [&_a]:text-yellow-600 [&_a]:no-underline hover:[&_a]:underline
                [&_strong]:text-black [&_strong]:font-bold
                [&_ul]:my-6 [&_li]:text-black [&_li]:mb-2
                [&_ol]:my-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className="mt-16 bg-yellow-400 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Ready to Start Your Podcast?
              </h3>
              <p className="text-black mb-6">
                Contact Bold Media Group for professional podcast production services in Mesa, Arizona
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/podcast-discovery"
                  className="inline-block px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors border-2 border-black"
                >
                  Contact Us
                </Link>
              </div>
              <p className="mt-4 text-sm text-black">
                📍 {siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip} | 📞 {siteConfig.location.phone}
              </p>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Share this article:</p>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-black mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-yellow-600 text-sm font-semibold">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-black mt-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                      {relatedPost.description}
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      {relatedPost.readTime}
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
