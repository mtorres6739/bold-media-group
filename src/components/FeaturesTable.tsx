'use client';

import React, { useState, useEffect } from 'react';

export default function FeaturesTable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      category: 'Core Production',
      items: [
        { name: 'Up to 50 minutes raw audio/video', starter: true, growth: true, premier: true },
        { name: 'Noise Reduction & Audio Enhancement', starter: true, growth: true, premier: true },
        { name: 'Removal of Filler Words (ums, ahs)', starter: true, growth: true, premier: true },
        { name: 'Professional Audio Mastering (EQ & Loudness)', starter: true, growth: true, premier: true },
        { name: 'Basic Video Editing', starter: true, growth: true, premier: true },
        { name: 'Advanced Video Editing & Color Grading', starter: false, growth: true, premier: true },
        { name: 'Custom Intro & Outro', starter: false, growth: false, premier: true }
      ]
    },
    {
      category: 'Content & Distribution',
      items: [
        { name: 'Episodes Included Per Month', starter: '1', growth: '2', premier: '3' },
        { name: 'Transcript generation', starter: false, growth: true, premier: true },
        { name: 'SEO-Optimized Show Notes', starter: false, growth: true, premier: true },
        { name: 'Blog post per episode', starter: false, growth: false, premier: true },
        { name: 'Distribution to Major Platforms', starter: true, growth: true, premier: true },
        { name: 'ID3 Tagging & Metadata', starter: true, growth: true, premier: true }
      ]
    },
    {
      category: 'Advanced Marketing & Branding',
      items: [
        { name: 'Social accounts created (YouTube, LinkedIn, Facebook, Instagram, TikTok)', starter: false, growth: false, premier: true },
        { name: 'Custom website for show with audio/video loaded', starter: false, growth: false, premier: true },
        { name: 'Social clips scheduled & auto-posted to all platforms', starter: false, growth: false, premier: true },
        { name: '18"x12" acrylic sign for show set', starter: false, growth: false, premier: true },
        { name: 'Custom mic boxes with logo', starter: false, growth: false, premier: true }
      ]
    },
    {
      category: 'Marketing Assets',
      items: [
        { name: 'Social Media Shorts', starter: '10', growth: '30', premier: '45' },
        { name: 'Social Media Clips', starter: '10', growth: '30', premier: '45' },
        { name: 'Logo Integration in Video', starter: false, growth: true, premier: true },
        { name: 'Custom Thumbnails (YouTube & Spotify)', starter: false, growth: false, premier: true },
        { name: 'Standard Podcast Website', starter: false, growth: true, premier: false },
        { name: 'Custom Podcast Website', starter: false, growth: false, premier: true },
        { name: 'Custom Branding', starter: false, growth: false, premier: true }
      ]
    },
    {
      category: 'Support & Workflow',
      items: [
        { name: 'Dedicated producer', starter: true, growth: true, premier: true },
        { name: 'Turnaround Time', starter: '7-Day', growth: '5-Day', premier: '3-Day' },
        { name: 'Quarterly Strategy & Design Consult', starter: false, growth: false, premier: true },
        { name: 'Secure Cloud File Storage', starter: true, growth: true, premier: true }
      ]
    }
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const CrossIcon = () => (
    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${mounted ? 'animate-fadeInUp' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Compare Our Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A detailed look at what’s included in each plan.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-fixed" suppressHydrationWarning>
            {/* Header */}
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-black w-2/5">Features</th>
                <th className="text-center py-4 px-6 font-semibold text-black w-1/5">
                  <div className="flex flex-col items-center">
                    <span className="text-lg">Starter Spark</span>
                    <span className="text-sm text-gray-500 font-normal">Call for Pricing</span>
                  </div>
                </th>
                <th className="text-center py-4 px-6 font-semibold text-black bg-yellow-50 w-1/5">
                  <div className="flex flex-col items-center">
                    <span className="text-lg">Growth Pro</span>
                    <span className="text-sm text-gray-500 font-normal">Call for Pricing</span>
                    <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full mt-1">Most Popular</span>
                  </div>
                </th>
                <th className="text-center py-4 px-6 font-semibold text-black w-1/5">
                  <div className="flex flex-col items-center">
                    <span className="text-lg">Studio Premier</span>
                    <span className="text-sm text-gray-500 font-normal">Call for Pricing</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((category) => (
                <React.Fragment key={category.category}>
                  {/* Category Header */}
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-3 px-6 font-semibold text-black border-b">
                      {category.category}
                    </td>
                  </tr>
                  
                  {/* Category Items */}
                  {category.items.map((item) => (
                    <tr key={item.name} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-gray-700 w-2/5">{item.name}</td>
                      <td className="py-4 px-6 text-center w-1/5">
                        {typeof item.starter === 'boolean' ? (
                          <div className="flex items-center justify-center">
                            {item.starter ? <CheckIcon /> : <CrossIcon />}
                          </div>
                        ) : (
                          <span className="text-gray-700 font-medium">{item.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center bg-yellow-50">
                        {typeof item.growth === 'boolean' ? (
                          <div className="flex items-center justify-center">
                            {item.growth ? <CheckIcon /> : <CrossIcon />}
                          </div>
                        ) : (
                          <span className="text-gray-700 font-medium">{item.growth}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof item.premier === 'boolean' ? (
                          <div className="flex items-center justify-center">
                            {item.premier ? <CheckIcon /> : <CrossIcon />}
                          </div>
                        ) : (
                          <span className="text-gray-700 font-medium">{item.premier}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>

            {/* Footer */}
            <tfoot>
              <tr className="bg-gray-50">
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6 text-center">
                  <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Get Started
                  </button>
                </td>
                <td className="py-4 px-6 text-center bg-yellow-50">
                  <button className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors">
                    Choose Plan
                  </button>
                </td>
                <td className="py-4 px-6 text-center">
                  <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Contact Sales
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile Responsive Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Swipe horizontally on mobile to view all features</p>
        </div>
      </div>
    </section>
  );
}