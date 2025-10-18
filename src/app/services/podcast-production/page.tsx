import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Podcast Production Services | Bold Media Group',
  description: 'Professional podcast production services - from recording to distribution. Let us handle the technical details.',
};

export default function PodcastProductionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-yellow-400">Podcast Production</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Full-service podcast production that handles everything from recording to distribution, so you can focus on creating great content.
            </p>
            <Link
              href="/podcast-discovery"
              className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Start Your Podcast
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">
              End-to-end podcast production services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎙️</div>
              <h3 className="text-2xl font-bold text-black mb-3">Recording</h3>
              <p className="text-gray-700">
                Professional studio recording or remote recording support with high-quality audio and video capture.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-2xl font-bold text-black mb-3">Editing</h3>
              <p className="text-gray-700">
                Expert audio editing, noise reduction, filler word removal, and professional mastering.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-black mb-3">Branding</h3>
              <p className="text-gray-700">
                Custom podcast artwork, intro/outro music, and visual identity that represents your brand.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-black mb-3">Show Notes</h3>
              <p className="text-gray-700">
                SEO-optimized show notes, transcripts, and episode descriptions that drive discovery.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-black mb-3">Distribution</h3>
              <p className="text-gray-700">
                Publishing to all major platforms including Apple Podcasts, Spotify, YouTube, and more.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-black mb-3">Analytics</h3>
              <p className="text-gray-700">
                Detailed performance tracking and insights to help you understand and grow your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Bold Media Group?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Professional Quality</h3>
              <p className="text-gray-700 mb-6">
                Our team of experienced audio engineers and producers ensures every episode meets the highest professional standards.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">Time Savings</h3>
              <p className="text-gray-700 mb-6">
                We handle all the technical work, saving you 10+ hours per episode so you can focus on your business.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">Consistent Delivery</h3>
              <p className="text-gray-700">
                Reliable turnaround times and consistent quality ensure your podcast stays on schedule.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Strategic Guidance</h3>
              <p className="text-gray-700 mb-6">
                Beyond production, we provide strategic advice on content, growth, and monetization.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">Full-Service Support</h3>
              <p className="text-gray-700 mb-6">
                From concept to distribution, we&apos;re with you every step of the way.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">Scalable Solutions</h3>
              <p className="text-gray-700">
                Our packages grow with you, from 1 episode per month to unlimited production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600">
              Flexible plans designed for businesses at every stage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-2">Starter Spark</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-black">Call for Pricing</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">1 Episode Per Month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">10 Social Media Shorts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">7-Day Turnaround</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white border-4 border-yellow-400 rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Growth Pro</h3>
              <p className="text-gray-600 mb-6">For growing podcasts</p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-black">Call for Pricing</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">2 Episodes Per Month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">30 Social Media Shorts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">5-Day Turnaround</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Choose Plan
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-2">Studio Premier</h3>
              <p className="text-gray-600 mb-6">Complete solution</p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-black">Call for Pricing</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">2 Episodes Per Month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">45 Social Media Shorts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span className="text-gray-700">3-Day Turnaround</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Podcast?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your podcast goals and create a plan that works for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/podcast-discovery"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Start Discovery Process
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

