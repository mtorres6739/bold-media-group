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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Two Microphones',
      description: 'High-quality studio microphones for pristine audio capture',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      name: 'Audio Mixer',
      description: 'Professional mixing board for perfect audio balance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      name: 'Lighting Setup',
      description: 'Professional three-point lighting for perfect illumination',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: 'Acoustic-Treated Studio',
      description: 'Sound-treated environment for optimal audio quality',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Dedicated Producer',
      description: 'Expert producer who handles setup, tech, and ensures everything runs smoothly',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-black text-white" id="studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${mounted ? 'animate-fadeInUp' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Professional Studio Setup
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We use top-tier equipment to ensure your podcast looks and sounds incredible.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {equipment.map((item, index) => (
            <div
              key={item.name}
              className={`bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${mounted ? 'animate-fadeInUp' : ''}`}
              style={mounted ? { animationDelay: `${index * 0.1}s` } : {}}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6 text-yellow-400">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Studio Image Placeholder */}
        <div className={`relative rounded-2xl overflow-hidden mb-16 ${mounted ? 'animate-fadeInUp' : ''}`}>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional Recording Studio</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                State-of-the-art facility designed for professional podcast production
              </p>
            </div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={mounted ? 'animate-slideInLeft' : undefined}>
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Studio?</h3>
            <ul className="space-y-4">
              {[
                'Professional-grade equipment',
                'Acoustically treated environment',
                'Experienced audio engineers',
                '4K video production capabilities',
                'Comfortable recording space',
                'Easy parking and accessibility'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={mounted ? 'animate-slideInLeft' : undefined} style={mounted ? { animationDelay: '0.2s' } : {}}>
            <h3 className="text-2xl font-bold text-white mb-6">Studio Amenities</h3>
            <ul className="space-y-4">
              {[
                'High-speed WiFi',
                'Complimentary beverages',
                'Green room for guests',
                'Makeup station',
                ' wardrobe area',
                'Post-production suite'
              ].map((amenity, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}