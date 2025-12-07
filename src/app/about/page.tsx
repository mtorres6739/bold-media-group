import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Bold Media Group',
  description: 'Learn about Bold Media Group - your partner in professional podcast and video production.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About <span className="text-yellow-400">Bold Media Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re on a mission to help businesses amplify their voice through professional podcast and video production.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Bold Media Group was founded with a simple belief: every business has a story worth telling, and podcasting is one of the most powerful ways to share it.
                </p>
                <p>
                  We started as podcasters ourselves, experiencing firsthand the challenges of producing high-quality content while running a business. The technical complexities, time constraints, and learning curve were overwhelming.
                </p>
                <p>
                  That&apos;s why we created Bold Media Group - to handle all the technical details so you can focus on what you do best: sharing your expertise and connecting with your audience.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower businesses with professional media production that drives growth, builds authority, and creates meaningful connections.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    A world where every business can leverage the power of podcasting and video content without the technical barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-black mb-3">Excellence</h3>
              <p className="text-gray-700">
                We&apos;re committed to delivering the highest quality production in every project, treating your content as if it were our own.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-black mb-3">Partnership</h3>
              <p className="text-gray-700">
                Your success is our success. We work alongside you as a true partner, invested in your growth and goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-black mb-3">Innovation</h3>
              <p className="text-gray-700">
                We stay ahead of industry trends and technology to ensure your content stands out in a crowded market.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-black mb-3">Creativity</h3>
              <p className="text-gray-700">
                Every brand is unique. We bring creative solutions tailored to your specific voice and audience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-black mb-3">Education</h3>
              <p className="text-gray-700">
                We empower our clients with knowledge, helping you understand the process and make informed decisions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-black mb-3">Reliability</h3>
              <p className="text-gray-700">
                Consistent quality, on-time delivery, and dependable communication - that&apos;s our promise to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="bg-gray-100 p-12 rounded-lg text-center">
            <p className="text-xl text-gray-700 mb-6">
              Our team brings together expertise in audio engineering, video production, content strategy, and digital marketing.
            </p>
            <p className="text-lg text-gray-600">
              With decades of combined experience, we&apos;ve produced hundreds of episodes for businesses across industries, from startups to established enterprises.
            </p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Start Your Podcast Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how we can help you create content that resonates with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Get Started
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

