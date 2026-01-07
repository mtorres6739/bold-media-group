'use client';

import React, { useState, useEffect } from 'react';

export default function FeaturesTable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      category: 'Production',
      items: [
        { name: 'Episodes Per Month', starter: '1', growth: '1', premier: '1' },
        { name: 'Professional Studio Recording', starter: true, growth: true, premier: true },
        { name: 'Raw Audio & Video Delivered', starter: true, growth: false, premier: false },
        { name: 'Professional Audio & Video Editing', starter: false, growth: true, premier: true },
        { name: 'Enhanced Audio Mastering', starter: false, growth: true, premier: true },
        { name: 'Show Notes & Transcripts', starter: false, growth: true, premier: true },
        { name: 'Chapter Indicators', starter: false, growth: true, premier: true },
        { name: 'Standard Audio Intro & Outro', starter: false, growth: true, premier: false },
        { name: 'Custom Audio Intro & Outro', starter: false, growth: false, premier: true },
        { name: 'Custom Video Intro & Outro', starter: false, growth: false, premier: true },
        { name: 'Podcast Launch Strategy Session', starter: false, growth: false, premier: true },
      ]
    },
    {
      category: 'Content & Distribution',
      items: [
        { name: 'Distribution to Major Platforms', starter: false, growth: true, premier: true },
        { name: 'YouTube Video Upload', starter: false, growth: false, premier: true },
        { name: 'Custom Graphics (YouTube & Cover Art)', starter: false, growth: false, premier: true },
        { name: 'Podcast Specific Website', starter: false, growth: false, premier: true },
        { name: 'Blog Post Per Episode', starter: false, growth: false, premier: true },
        { name: 'Social Media Content Captions', starter: false, growth: false, premier: true },
        { name: 'Social Channel Creation', starter: false, growth: false, premier: true },
      ]
    },
    {
      category: 'Clips & Shorts',
      items: [
        { name: 'Short Clips (60 sec)', starter: '5', growth: '10', premier: '15' },
        { name: 'Long Clips (2-3 min)', starter: '—', growth: '—', premier: '5' },
      ]
    },
    {
      category: 'Support',
      items: [
        { name: 'Dedicated Producer', starter: true, growth: true, premier: true },
        { name: 'Priority Support', starter: false, growth: false, premier: true },
        { name: 'White-Glove Service', starter: false, growth: false, premier: true },
      ]
    }
  ];

  const CheckIcon = () => (
    <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const CrossIcon = () => (
    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
      <svg className="w-3 h-3 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-16 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-4">
            Feature Comparison
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6">
            Compare Our Packages
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A detailed look at what&apos;s included in each plan
          </p>
        </div>

        {/* Table Container */}
        <div
          className={`glass-card rounded-2xl overflow-hidden ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-fixed min-w-[800px]" suppressHydrationWarning>
              {/* Header */}
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-6 px-6 font-medium text-zinc-400 text-sm uppercase tracking-wider w-2/5">
                    Features
                  </th>
                  <th className="text-center py-6 px-4 w-1/5">
                    <div className="flex flex-col items-center">
                      <span className="text-white font-semibold">Starter Spark</span>
                      <span className="text-xs text-zinc-400 mt-1">$399</span>
                    </div>
                  </th>
                  <th className="text-center py-6 px-4 bg-[#d4af37]/5 border-x border-[#d4af37]/10 w-1/5">
                    <div className="flex flex-col items-center">
                      <span className="text-white font-semibold">Growth Pro</span>
                      <span className="text-xs text-zinc-400 mt-1">$699</span>
                      <span className="inline-flex items-center gap-1 text-[10px] bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-black px-2.5 py-1 rounded-full mt-2 font-semibold">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Popular
                      </span>
                    </div>
                  </th>
                  <th className="text-center py-6 px-4 w-1/5">
                    <div className="flex flex-col items-center">
                      <span className="text-white font-semibold">Studio Premier</span>
                      <span className="text-xs text-zinc-400 mt-1">$1599</span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={category.category}>
                    {/* Category Header */}
                    <tr className="bg-white/[0.02]">
                      <td colSpan={4} className="py-4 px-6 border-b border-white/5">
                        <span className="text-[#d4af37] font-medium text-sm tracking-wide">
                          {category.category}
                        </span>
                      </td>
                    </tr>

                    {/* Category Items */}
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={item.name}
                        className="border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300"
                      >
                        <td className="py-4 px-6 text-zinc-400 text-sm">{item.name}</td>
                        <td className="py-4 px-4 text-center">
                          {typeof item.starter === 'boolean' ? (
                            <div className="flex items-center justify-center">
                              {item.starter ? <CheckIcon /> : <CrossIcon />}
                            </div>
                          ) : (
                            <span className="text-white font-medium text-sm">{item.starter}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center bg-[#d4af37]/5 border-x border-[#d4af37]/10">
                          {typeof item.growth === 'boolean' ? (
                            <div className="flex items-center justify-center">
                              {item.growth ? <CheckIcon /> : <CrossIcon />}
                            </div>
                          ) : (
                            <span className="text-[#d4af37] font-medium text-sm">{item.growth}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof item.premier === 'boolean' ? (
                            <div className="flex items-center justify-center">
                              {item.premier ? <CheckIcon /> : <CrossIcon />}
                            </div>
                          ) : (
                            <span className="text-white font-medium text-sm">{item.premier}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>

              {/* Footer */}
              <tfoot>
                <tr className="border-t border-white/10">
                  <td className="py-6 px-6"></td>
                  <td className="py-6 px-4 text-center">
                    <button className="px-6 py-3 bg-white/5 text-white border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-[#d4af37]/30 transition-all duration-300">
                      Get Started
                    </button>
                  </td>
                  <td className="py-6 px-4 text-center bg-[#d4af37]/5 border-x border-[#d4af37]/10">
                    <button className="btn-premium px-6 py-3 text-sm">
                      Choose Plan
                    </button>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <button className="px-6 py-3 bg-white/5 text-white border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-[#d4af37]/30 transition-all duration-300">
                      Contact Sales
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Mobile Note */}
        <div
          className={`mt-6 text-center ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-zinc-400 text-xs flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Scroll horizontally on mobile to view all features
          </p>
        </div>
      </div>
    </section>
  );
}
