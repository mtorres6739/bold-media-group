import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/seo';

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

// Get all blog posts at build time
const blogPosts = getAllPosts();

// Extract unique categories from blog posts
const allCategories = Array.from(
  new Set(blogPosts.map(post => post.category))
).sort();
const categories = ['All', ...allCategories];

export default function BlogPage() {
  // Get featured post (first one marked as featured, or just the first post)
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter(post => post.slug !== featuredPost?.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Bold Media <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights, tips, and strategies for podcasting success from {siteConfig.location.city}, {siteConfig.location.state}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-yellow-400 flex items-center justify-center p-12">
                  {featuredPost.image ? (
                    <div className="text-9xl">🎙️</div>
                  ) : (
                    <div className="text-9xl">📝</div>
                  )}
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.description}</p>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-0 z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-yellow-400 hover:text-black transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {otherPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gray-100 p-12 flex items-center justify-center">
                    <div className="text-6xl">
                      {post.category === 'Studio Rental' ? '🎙️' :
                       post.category === 'Podcast Production' ? '🎧' :
                       post.category === 'Getting Started' ? '🚀' : '📝'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-yellow-600 text-sm font-semibold">{post.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-black font-semibold hover:text-yellow-600 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest podcasting tips and insights delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

