'use client';

import { useState, useEffect } from 'react';

export default function StudioShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const equipment = [
    {
      name: 'Two Camera Setup',
      description: 'Professional 4K cameras for crystal clear video quality',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Two Microphones',
      description: 'High-quality studio microphones for pristine audio capture',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      name: 'Audio Mixer',
      description: 'Professional mixing board for perfect audio balance',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      name: 'Lighting Setup',
      description: 'Professional three-point lighting for perfect illumination',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: 'Acoustic-Treated Studio',
      description: 'Sound-treated environment for optimal audio quality',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Dedicated Producer',
      description: 'Expert producer who handles setup, tech, and ensures everything runs smoothly',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  const studioFeatures = [
    'Professional-grade equipment',
    'Acoustically treated environment',
    'Experienced audio engineers',
    '4K video production capabilities',
    'Comfortable recording space',
    'Easy parking and accessibility'
  ];

  const studioAmenities = [
    'High-speed WiFi',
    'Complimentary beverages',
    'Green room for guests',
    'Makeup station',
    'Wardrobe area',
    'Post-production suite'
  ];

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden" id="studio">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-20 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-4">
            Our Studio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6">
            Professional Studio Setup
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We use top-tier equipment to ensure your podcast looks and sounds incredible
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {equipment.map((item, index) => (
            <div
              key={item.name}
              className={`group glass-card glass-card-hover rounded-2xl p-8 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 flex items-center justify-center mb-6 text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37]/40 transition-all duration-500">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#f4e4ba] transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Studio Image Placeholder */}
        <div
          className={`relative rounded-2xl overflow-hidden mb-20 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-[#d4af37]/10 rounded-2xl" />

          <div className="relative m-px rounded-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-[#111] via-[#0f0f0f] to-[#0a0a0a] flex items-center justify-center">
              <div className="text-center px-6">
                {/* Floating icon */}
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 bg-[#d4af37]/10 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-full h-full bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full border border-[#d4af37]/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-white mb-4">
                  Professional Recording Studio
                </h3>
                <p className="text-zinc-500 max-w-lg mx-auto">
                  State-of-the-art facility designed for professional podcast production
                </p>

                {/* CTA */}
                <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#d4af37] border border-[#d4af37]/30 rounded-lg hover:bg-[#d4af37]/10 hover:border-[#d4af37]/50 transition-all duration-300">
                  Schedule a Studio Tour
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#d4af37]/5 to-transparent" />
          </div>
        </div>

        {/* Features Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Why Choose Our Studio */}
          <div
            className={`glass-card rounded-2xl p-8 lg:p-10 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-white">Why Choose Our Studio?</h3>
            </div>

            <ul className="space-y-4">
              {studioFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#d4af37]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                    <svg className="w-3 h-3 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Amenities */}
          <div
            className={`glass-card rounded-2xl p-8 lg:p-10 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-white">Studio Amenities</h3>
            </div>

            <ul className="space-y-4">
              {studioAmenities.map((amenity, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#d4af37]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                    <svg className="w-3 h-3 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                    {amenity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
