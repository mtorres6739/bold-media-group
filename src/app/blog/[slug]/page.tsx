import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Post | Bold Media Group',
  description: 'Read our latest insights on podcasting and content creation.',
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-black">Blog</Link>
            <span>→</span>
            <span className="text-black">Article</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Business Strategy
              </span>
              <span className="text-gray-500">January 15, 2025</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">8 min read</span>
            </div>
            <h1 className="text-5xl font-bold text-black mb-6">
              10 Reasons Why Your Business Needs a Podcast in 2025
            </h1>
            <p className="text-xl text-gray-600">
              Discover how podcasting can transform your business marketing strategy and help you connect with your audience in meaningful ways.
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className="bg-gray-100 rounded-lg p-24 mb-12 text-center">
            <div className="text-9xl">📊</div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              In today&apos;s digital landscape, businesses are constantly searching for new ways to connect with their audience. While social media and blogs remain important, podcasting has emerged as one of the most powerful tools for building authority, generating leads, and creating lasting relationships with customers.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">1. Build Authentic Connections</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike written content, podcasts allow your audience to hear your voice, understand your personality, and connect with you on a deeper level. This authenticity builds trust faster than any other medium.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">2. Establish Thought Leadership</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Regular podcast episodes position you as an expert in your field. By sharing valuable insights and interviewing industry leaders, you demonstrate your knowledge and build credibility.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">3. Reach a Growing Audience</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Podcast listenership continues to grow year over year. In 2025, over 160 million Americans listen to podcasts regularly, and that number is expected to keep rising.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">4. Generate Quality Leads</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Podcast listeners are highly engaged and often become qualified leads. They&apos;ve invested time in listening to your content, which indicates genuine interest in your expertise.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">5. Repurpose Content Efficiently</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              One podcast episode can be transformed into blog posts, social media content, email newsletters, and more. This maximizes your content ROI and extends your reach across multiple platforms.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">6. Network with Industry Leaders</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Inviting guests to your podcast opens doors to valuable relationships. It&apos;s a win-win: they get exposure to your audience, and you gain access to their expertise and network.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">7. Improve SEO and Online Visibility</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Podcast show notes, transcripts, and episode pages create valuable SEO content. This helps your business rank for relevant keywords and increases organic traffic to your website.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">8. Create a Loyal Community</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Regular listeners become part of your community. They feel connected to your brand and are more likely to become customers, advocates, and repeat buyers.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">9. Stand Out from Competitors</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While many businesses have blogs and social media, fewer have podcasts. Starting a podcast helps you differentiate your brand and capture attention in your industry.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">10. Flexible Content Consumption</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Podcasts fit into people&apos;s busy lives. Listeners can consume your content while commuting, exercising, or doing household chores - times when they can&apos;t read or watch videos.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Getting Started</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Starting a podcast might seem daunting, but with the right partner, it&apos;s easier than you think. At Bold Media Group, we handle all the technical details - from recording and editing to distribution and promotion - so you can focus on creating great content.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ready to start your podcast journey? Let&apos;s talk about how we can help you launch a show that drives real business results.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-yellow-400 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Start Your Podcast?
            </h3>
            <p className="text-black mb-6">
              Let&apos;s create a podcast that grows your business
            </p>
            <Link
              href="/podcast-discovery"
              className="inline-block px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Started Today
            </Link>
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Share this article:</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Twitter
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                LinkedIn
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Grow Your Podcast Audience',
                category: 'Growth',
                slug: 'how-to-grow-podcast-audience'
              },
              {
                title: 'Podcast SEO: Complete Guide',
                category: 'SEO',
                slug: 'podcast-seo-complete-guide'
              },
              {
                title: '7 Ways to Monetize Your Podcast',
                category: 'Monetization',
                slug: 'monetize-your-podcast'
              }
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-yellow-600 text-sm font-semibold">{post.category}</span>
                <h3 className="text-xl font-bold text-black mt-2">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

