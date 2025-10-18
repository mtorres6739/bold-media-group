import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Content Services | Bold Media Group',
  description: 'Transform your podcast into engaging social media content that drives engagement and growth.',
};

export default function SocialMediaContentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-yellow-400">Social Media Content</span> Creation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Maximize your podcast&apos;s reach with professionally crafted social media content.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What We Create</h2>
            <p className="text-xl text-gray-600">Turn one episode into dozens of social media posts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-black mb-3">Short-Form Videos</h3>
              <p className="text-gray-700">Instagram Reels, TikTok videos, and YouTube Shorts optimized for maximum engagement.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-black mb-3">Graphics & Quotes</h3>
              <p className="text-gray-700">Eye-catching quote cards and graphics featuring key moments from your episodes.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-black mb-3">Audiograms</h3>
              <p className="text-gray-700">Animated waveform videos with captions for audio-first content.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-black mb-3">Thumbnails</h3>
              <p className="text-gray-700">Custom thumbnails for YouTube, Spotify, and social media platforms.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-black mb-3">Captions & Copy</h3>
              <p className="text-gray-700">Engaging captions and post copy that drive clicks and conversations.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-black mb-3">Stories & Carousels</h3>
              <p className="text-gray-700">Instagram Stories, LinkedIn carousels, and multi-slide content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Social Media Content Matters</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Expand Your Reach</h3>
              <p className="text-gray-700 mb-6">
                Social media clips reach people who might never find your full podcast, expanding your audience exponentially.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">Drive Engagement</h3>
              <p className="text-gray-700 mb-6">
                Short, engaging content encourages likes, shares, and comments, building community around your brand.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">Increase Discoverability</h3>
              <p className="text-gray-700">
                Algorithm-friendly content helps new audiences discover your podcast through social platforms.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Save Time</h3>
              <p className="text-gray-700 mb-6">
                We handle all the editing, formatting, and optimization so you can focus on creating content.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">Consistent Posting</h3>
              <p className="text-gray-700 mb-6">
                Maintain an active social presence with a steady stream of high-quality content.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4">Professional Quality</h3>
              <p className="text-gray-700">
                Stand out with professionally edited content that reflects your brand&apos;s quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Volume */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Content Packages</h2>
            <p className="text-xl text-gray-600">Choose the volume that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Starter</h3>
              <div className="text-5xl font-bold text-yellow-400 mb-2">10</div>
              <p className="text-gray-600 mb-6">Clips per episode</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>5 Short videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>3 Quote graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>2 Audiograms</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-4 border-yellow-400 rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Growth</h3>
              <div className="text-5xl font-bold text-yellow-400 mb-2">30</div>
              <p className="text-gray-600 mb-6">Clips per episode</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>15 Short videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>10 Quote graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>5 Audiograms</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Premier</h3>
              <div className="text-5xl font-bold text-yellow-400 mb-2">45</div>
              <p className="text-gray-600 mb-6">Clips per episode</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>25 Short videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>15 Quote graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>5 Audiograms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Optimized for All Platforms</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Facebook', 'Twitter', 'Pinterest', 'Snapchat'].map((platform) => (
              <div key={platform} className="bg-white p-6 rounded-lg text-center font-semibold text-black">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Amplify Your Podcast on Social Media</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s turn your podcast into a social media powerhouse
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

