import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Video Production Services | Bold Media Group',
  description: 'Professional video production for podcasts, social media, and marketing content.',
};

export default function VideoProductionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-yellow-400">Video Production</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional video production that brings your content to life across all platforms.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Video Production Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold text-black mb-3">Video Podcasts</h3>
              <p className="text-gray-700">Multi-camera video podcast recording and editing for YouTube and social platforms.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-black mb-3">Social Media Videos</h3>
              <p className="text-gray-700">Short-form video content optimized for Instagram, TikTok, and LinkedIn.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-black mb-3">Promotional Videos</h3>
              <p className="text-gray-700">Engaging promotional content for your products, services, and brand.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-black mb-3">Educational Content</h3>
              <p className="text-gray-700">Tutorial videos, courses, and training materials for your audience.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-black mb-3">Corporate Videos</h3>
              <p className="text-gray-700">Professional corporate communications, testimonials, and case studies.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-black mb-3">Post-Production</h3>
              <p className="text-gray-700">Expert editing, color grading, motion graphics, and visual effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Professional Video Production</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Multi-camera setup for dynamic shots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Professional lighting and audio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">4K video recording</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Color grading and correction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Motion graphics and animations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Platform-specific optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 p-16 rounded-lg text-center">
              <div className="text-9xl">🎬</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-black mb-2">Planning</h3>
              <p className="text-gray-600">Concept development and storyboarding</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-black mb-2">Production</h3>
              <p className="text-gray-600">Professional filming with our team</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-black mb-2">Post-Production</h3>
              <p className="text-gray-600">Editing, effects, and refinement</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-black mb-2">Delivery</h3>
              <p className="text-gray-600">Final files optimized for your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Stunning Video Content?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s bring your vision to life with professional video production
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

