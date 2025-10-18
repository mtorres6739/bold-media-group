import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Bold Media Group',
  description: 'Tips, insights, and strategies for successful podcasting and content creation.',
};

const blogPosts = [
  {
    id: 1,
    slug: '10-reasons-your-business-needs-podcast',
    title: '10 Reasons Why Your Business Needs a Podcast in 2025',
    excerpt: 'Discover how podcasting can transform your business marketing strategy and help you connect with your audience in meaningful ways.',
    category: 'Business Strategy',
    date: 'January 15, 2025',
    readTime: '8 min read',
    image: '📊'
  },
  {
    id: 2,
    slug: 'podcast-equipment-guide-beginners',
    title: 'The Ultimate Podcast Equipment Guide for Beginners',
    excerpt: 'Everything you need to know about microphones, interfaces, and recording software to start your podcast journey.',
    category: 'Equipment',
    date: 'January 10, 2025',
    readTime: '12 min read',
    image: '🎙️'
  },
  {
    id: 3,
    slug: 'how-to-grow-podcast-audience',
    title: 'How to Grow Your Podcast Audience: 15 Proven Strategies',
    excerpt: 'Learn the tactics that successful podcasters use to attract and retain listeners, from SEO to social media marketing.',
    category: 'Growth',
    date: 'January 5, 2025',
    readTime: '10 min read',
    image: '📈'
  },
  {
    id: 4,
    slug: 'podcast-seo-complete-guide',
    title: 'Podcast SEO: The Complete Guide to Getting Discovered',
    excerpt: 'Master the art of podcast SEO to ensure your show appears in search results and reaches your target audience.',
    category: 'SEO',
    date: 'December 28, 2024',
    readTime: '15 min read',
    image: '🔍'
  },
  {
    id: 5,
    slug: 'monetize-your-podcast',
    title: '7 Ways to Monetize Your Podcast (Beyond Sponsorships)',
    excerpt: 'Explore diverse revenue streams for your podcast, from premium content to consulting services.',
    category: 'Monetization',
    date: 'December 20, 2024',
    readTime: '9 min read',
    image: '💰'
  },
  {
    id: 6,
    slug: 'interview-techniques-podcasters',
    title: 'Master Interview Techniques: A Guide for Podcasters',
    excerpt: 'Learn how to conduct engaging interviews that captivate your audience and provide real value.',
    category: 'Content Creation',
    date: 'December 15, 2024',
    readTime: '11 min read',
    image: '🎤'
  },
  {
    id: 7,
    slug: 'repurpose-podcast-content',
    title: 'How to Repurpose Your Podcast Content for Maximum Reach',
    excerpt: 'Turn one podcast episode into dozens of pieces of content across multiple platforms.',
    category: 'Content Strategy',
    date: 'December 10, 2024',
    readTime: '7 min read',
    image: '♻️'
  },
  {
    id: 8,
    slug: 'podcast-analytics-metrics-matter',
    title: 'Podcast Analytics: Which Metrics Actually Matter?',
    excerpt: 'Cut through the noise and focus on the analytics that truly indicate your podcast&apos;s success.',
    category: 'Analytics',
    date: 'December 5, 2024',
    readTime: '8 min read',
    image: '📊'
  },
  {
    id: 9,
    slug: 'video-podcasting-guide',
    title: 'Video Podcasting: Should You Make the Switch?',
    excerpt: 'Explore the pros and cons of video podcasting and learn if it&apos;s the right move for your show.',
    category: 'Video',
    date: 'November 28, 2024',
    readTime: '10 min read',
    image: '🎥'
  }
];

const categories = ['All', 'Business Strategy', 'Equipment', 'Growth', 'SEO', 'Monetization', 'Content Creation', 'Content Strategy', 'Analytics', 'Video'];

export default function BlogPage() {
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
              Expert insights, tips, and strategies for podcasting success
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-yellow-400 flex items-center justify-center p-12">
                <div className="text-9xl">{blogPosts[0].image}</div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 p-12 flex items-center justify-center">
                  <div className="text-6xl">{post.image}</div>
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
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
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

