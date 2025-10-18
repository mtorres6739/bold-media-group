import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Bold Media Group',
  description: 'Explore our portfolio of podcast and video production work.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing the podcasts and content we&apos;ve helped bring to life
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-lg p-12">
            <div className="text-6xl mb-6">🎬</div>
            <h2 className="text-4xl font-bold text-black mb-6">Portfolio Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re currently curating our best work to showcase here. Check back soon to see examples of the podcasts and video content we&apos;ve produced for our clients.
            </p>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <p className="text-gray-700">
                <span className="font-bold text-black">What you&apos;ll find here:</span>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Featured podcast episodes from various industries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Video production samples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Social media content examples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Client success stories and testimonials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Before and after transformations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-gray-300">Episodes Produced</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-gray-300">Active Podcasts</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">1M+</div>
              <p className="text-gray-300">Total Downloads</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">15+</div>
              <p className="text-gray-300">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              We&apos;ve worked with businesses across diverse sectors
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Technology & SaaS',
              'Healthcare & Wellness',
              'Finance & Insurance',
              'Real Estate',
              'Marketing & Advertising',
              'Education & Training',
              'Legal Services',
              'Consulting',
              'E-commerce',
              'Manufacturing',
              'Hospitality',
              'Non-Profit'
            ].map((industry) => (
              <div key={industry} className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="font-semibold text-black">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Want to Be Featured in Our Portfolio?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s create something worth showcasing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/our-process"
              className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn Our Process
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

