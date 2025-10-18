import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process | Bold Media Group',
  description: 'Discover our streamlined podcast production process - from concept to distribution.',
};

export default function OurProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Process</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven, streamlined approach to creating professional podcast content that drives results.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Simple, Effective, Professional</h2>
            <p className="text-xl text-gray-600">
              We&apos;ve refined our process to make podcast production effortless for you
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-4">
                  Step 1
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Discovery & Strategy</h3>
                <p className="text-gray-700 mb-4">
                  We start by understanding your goals, audience, and brand. Through our comprehensive discovery questionnaire and strategy session, we develop a customized plan for your podcast.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Complete discovery questionnaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Strategy consultation call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Content planning and format development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Target audience analysis</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-100 p-8 rounded-lg">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-gray-600 italic">
                  &quot;The foundation of a successful podcast is a clear strategy aligned with your business goals.&quot;
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-gray-600 italic">
                  &quot;Your brand identity should shine through in every aspect of your podcast.&quot;
                </p>
              </div>
              <div>
                <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-4">
                  Step 2
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Branding & Setup</h3>
                <p className="text-gray-700 mb-4">
                  We create your podcast&apos;s visual identity and set up all the technical infrastructure needed for success.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Custom podcast artwork and thumbnails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Intro/outro music creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Hosting platform setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Distribution to all major platforms</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-4">
                  Step 3
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Recording</h3>
                <p className="text-gray-700 mb-4">
                  Record your content in our professional studio or remotely - whatever works best for you. We handle all the technical details.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Professional studio recording available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Remote recording support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Video and audio capture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Guest coordination and management</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-100 p-8 rounded-lg">
                <div className="text-6xl mb-4">🎙️</div>
                <p className="text-gray-600 italic">
                  &quot;Focus on your message - we&apos;ll handle the technology.&quot;
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="text-6xl mb-4">✂️</div>
                <p className="text-gray-600 italic">
                  &quot;Professional editing transforms good content into great content.&quot;
                </p>
              </div>
              <div>
                <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-4">
                  Step 4
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Production & Editing</h3>
                <p className="text-gray-700 mb-4">
                  Our expert team polishes your content to perfection, ensuring professional quality that reflects your brand.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Professional audio editing and mastering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Video editing and color grading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Noise reduction and enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Filler word removal</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-4">
                  Step 5
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Content Creation</h3>
                <p className="text-gray-700 mb-4">
                  We create all the supporting content you need to maximize your podcast&apos;s reach and impact.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>SEO-optimized show notes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Social media clips and graphics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Blog posts and transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Custom thumbnails for YouTube and Spotify</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-100 p-8 rounded-lg">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-gray-600 italic">
                  &quot;One episode becomes dozens of pieces of content across all platforms.&quot;
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-600 italic">
                  &quot;Strategic distribution ensures your content reaches the right audience.&quot;
                </p>
              </div>
              <div>
                <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-4">
                  Step 6
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Publishing & Distribution</h3>
                <p className="text-gray-700 mb-4">
                  We handle all aspects of publishing and distributing your content across platforms.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Distribution to Apple Podcasts, Spotify, and more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>YouTube upload and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Social media scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Analytics and performance tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Typical Timeline</h2>
            <p className="text-xl text-gray-600">From recording to publishing</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">3-7 Days</div>
              <h3 className="text-xl font-bold text-black mb-2">Starter Spark</h3>
              <p className="text-gray-600">Standard turnaround for our entry-level package</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border-2 border-yellow-400">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5 Days</div>
              <h3 className="text-xl font-bold text-black mb-2">Growth Pro</h3>
              <p className="text-gray-600">Faster delivery for growing podcasts</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">3 Days</div>
              <h3 className="text-xl font-bold text-black mb-2">Studio Premier</h3>
              <p className="text-gray-600">Expedited service for premium clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s create something amazing together
          </p>
          <a
            href="/podcast-discovery"
            className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Start Your Podcast
          </a>
        </div>
      </section>
    </div>
  );
}

