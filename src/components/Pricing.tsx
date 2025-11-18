'use client';

import { useState, useEffect } from 'react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export default function Pricing() {
  const billingCycle: 'monthly' | 'annual' = 'monthly';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter Spark',
      price: 'Call for Pricing',
      description: 'Perfect for getting started with all the essentials',
      features: [
        '1 Episode Included Per Month',
        'Dedicated producer',
        '10 Social Media Shorts',
        '7-Day Turnaround Time',
        'Basic audio enhancement',
        'Distribution to major platforms'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Growth Pro',
      price: 'Call for Pricing',
      description: 'Our most popular plan, designed for creators ready to grow',
      features: [
        '2 Episodes Included Per Month',
        'Dedicated producer',
        'SEO-Optimized Show Notes',
        '30 Social Media Shorts',
        '5-Day Turnaround Time',
        'Advanced audio mastering',
        'Custom intro/outro music',
        'Priority support'
      ],
      highlighted: true,
      cta: 'Choose Plan'
    },
    {
      name: 'Studio Premier',
      price: 'Call for Pricing',
      description: 'The complete, hands-off solution for established brands',
      features: [
        '3 Episodes Included Per Month',
        'Dedicated producer',
        'Custom Thumbnails (YouTube & Spotify)',
        'Blog post per episode',
        '3-Day Expedited Turnaround',
        'Quarterly Strategy & Design Consult',
        'Video recording & editing',
        'Premium audio equipment',
        'White-glove service',
        'Social accounts created (YouTube, LinkedIn, Facebook, Instagram, TikTok)',
        'Custom website for show with audio/video loaded',
        'Social clips scheduled & auto-posted to all platforms',
        '18"x12" acrylic sign for show set',
        'Custom mic boxes with logo'
      ],
      cta: 'Contact Sales'
    }
  ];

  const studioRental: PricingTier = {
    name: 'Studio Rental',
    price: '$150',
    description: 'Rent our professional studio space with equipment',
    features: [
      'Professional studio space',
      'Full equipment access',
      'High-quality microphones',
      'Recording & mixing equipment',
      'Self-service recording',
      'No engineer or production services'
    ],
    cta: 'Book Studio'
  };

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${mounted ? 'animate-fadeInUp' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The Perfect Plan for Your Podcast
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Transparent pricing for every stage of your podcasting journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                tier.highlighted
                  ? 'ring-2 ring-yellow-400 ring-offset-4 transform scale-105'
                  : 'border border-gray-200'
              } ${mounted ? 'animate-fadeInUp' : ''}`}
              style={mounted ? { animationDelay: `${index * 0.1}s` } : {}}
            >
              {/* Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black">{tier.price}</span>
                  {tier.price !== 'Call for Pricing' && (
                    <span className="text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                {/* Features */}
                <ul className="text-left mb-8 space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Rental Option */}
        <div className="flex justify-center">
          <div
            className={`w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-gray-300 ${
              mounted ? 'animate-fadeInUp' : ''
            }`}
            style={mounted ? { animationDelay: '0.3s' } : {}}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-2">{studioRental.name}</h3>
              <div className="mb-3">
                <span className="text-4xl font-bold text-black">{studioRental.price}</span>
                <span className="text-gray-500">/hour</span>
              </div>
              <p className="text-gray-600 mb-5">{studioRental.description}</p>

              {/* Features */}
              <ul className="text-left mb-6 space-y-2">
                {studioRental.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-black text-white hover:bg-gray-800"
              >
                {studioRental.cta}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}