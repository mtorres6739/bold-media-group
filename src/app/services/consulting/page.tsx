import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Podcast Consulting Services | Bold Media Group',
  description: 'Expert podcast consulting to help you grow your show, monetize your content, and achieve your goals.',
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Podcast <span className="text-yellow-400">Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Strategic guidance to help you launch, grow, and monetize your podcast successfully.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Consulting Services</h2>
            <p className="text-xl text-gray-600">Expert guidance for every stage of your podcast journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-black mb-3">Launch Strategy</h3>
              <p className="text-gray-700">
                Complete launch planning including positioning, format development, and go-to-market strategy.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-black mb-3">Growth Strategy</h3>
              <p className="text-gray-700">
                Proven tactics to increase downloads, expand your audience, and boost engagement.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-black mb-3">Monetization</h3>
              <p className="text-gray-700">
                Develop revenue streams through sponsorships, products, services, and premium content.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-black mb-3">Content Strategy</h3>
              <p className="text-gray-700">
                Create a content calendar and strategy that resonates with your target audience.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-black mb-3">SEO & Discovery</h3>
              <p className="text-gray-700">
                Optimize your podcast for search and discovery across all platforms.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-black mb-3">Analytics & Optimization</h3>
              <p className="text-gray-700">
                Understand your metrics and make data-driven decisions to improve performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Who Is This For?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">New Podcasters</h3>
              <p className="text-gray-700">
                Starting from scratch? We&apos;ll help you avoid common mistakes and launch successfully from day one.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Growing Shows</h3>
              <p className="text-gray-700">
                Hit a plateau? We&apos;ll identify growth opportunities and create a plan to reach the next level.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Established Podcasts</h3>
              <p className="text-gray-700">
                Ready to monetize? We&apos;ll help you develop revenue streams and maximize your podcast&apos;s value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">What You Get</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">One-on-one strategy sessions with podcast experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Customized action plan tailored to your goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Competitive analysis and market research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Content calendar and episode planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Marketing and promotion strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Ongoing support and accountability</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-16 rounded-lg text-center">
              <div className="text-9xl">💡</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Consulting Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-2">Single Session</h3>
              <p className="text-gray-600 mb-6">Perfect for specific questions</p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-black">$297</div>
                <p className="text-gray-600">per session</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>90-minute strategy session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Action plan document</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Email follow-up support</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                Book Now
              </Link>
            </div>

            <div className="bg-white border-4 border-yellow-400 rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Monthly Retainer</h3>
              <p className="text-gray-600 mb-6">Ongoing strategic support</p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-black">$997</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>4 strategy sessions per month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Unlimited email support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Monthly performance reports</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-2">VIP Intensive</h3>
              <p className="text-gray-600 mb-6">Complete podcast overhaul</p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-black">$4,997</div>
                <p className="text-gray-600">one-time</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Full-day intensive session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Complete strategy overhaul</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>90 days of implementation support</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Your Podcast to the Next Level?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free 30-minute discovery call to discuss your goals
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
            Schedule Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}

