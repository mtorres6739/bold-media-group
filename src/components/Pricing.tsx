'use client';

interface PricingFeature {
  name: string;
  starter: boolean | string;
  growth: boolean | string;
  premier: boolean | string;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  highlighted?: boolean;
  cta: string;
  tier: 'starter' | 'growth' | 'premier';
}

export default function Pricing() {
  // Unified feature list for easy comparison
  const allFeatures: PricingFeature[] = [
    { name: 'Episodes Per Month', starter: '1', growth: '1', premier: '1' },
    { name: 'Professional Studio Recording', starter: true, growth: true, premier: true },
    { name: 'Dedicated Producer', starter: true, growth: true, premier: true },
    { name: 'Raw Audio Delivered', starter: true, growth: false, premier: false },
    { name: 'Raw Video Delivered', starter: true, growth: false, premier: false },
    { name: 'Edited Video Production', starter: false, growth: true, premier: true },
    { name: 'Enhanced Audio Mastering', starter: false, growth: true, premier: true },
    { name: 'Social Media Shorts', starter: '5', growth: '10', premier: '15' },
    { name: '2-3 Minute Clips', starter: '—', growth: '—', premier: '5' },
    { name: 'Distribution to Major Platforms', starter: false, growth: true, premier: true },
    { name: 'SEO-Optimized Show Notes', starter: false, growth: true, premier: true },
    { name: 'Standard Intro & Outro (Audio)', starter: false, growth: true, premier: false },
    { name: 'Custom Intro & Outro (Audio)', starter: false, growth: false, premier: true },
    { name: 'Custom Intro & Outro (Video)', starter: false, growth: false, premier: true },
    { name: 'Company Logo in Video', starter: false, growth: false, premier: true },
    { name: 'Names in Lower Thirds', starter: false, growth: false, premier: true },
    { name: 'Custom Studio Sign', starter: false, growth: false, premier: true },
    { name: 'Custom Cover Art', starter: false, growth: false, premier: true },
    { name: 'Custom Thumbnails', starter: false, growth: false, premier: true },
    { name: 'Blog Post Per Episode', starter: false, growth: false, premier: true },
    { name: 'Custom Website', starter: false, growth: false, premier: true },
    { name: 'Support', starter: false, growth: true, premier: false },
    { name: 'Priority Support', starter: false, growth: false, premier: true },
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter Spark',
      price: 'Call for Pricing',
      description: 'Perfect for getting started with raw recordings',
      cta: 'Get Started',
      tier: 'starter'
    },
    {
      name: 'Growth Pro',
      price: 'Call for Pricing',
      description: 'Our most popular plan for creators ready to grow',
      highlighted: true,
      cta: 'Choose Plan',
      tier: 'growth'
    },
    {
      name: 'Studio Premier',
      price: 'Call for Pricing',
      description: 'Complete, hands-off solution for established brands',
      cta: 'Contact Sales',
      tier: 'premier'
    }
  ];

  const getFeatureValue = (feature: PricingFeature, tier: 'starter' | 'growth' | 'premier') => {
    return feature[tier];
  };

  const renderFeatureValue = (value: boolean | string, highlighted: boolean = false) => {
    if (typeof value === 'string') {
      if (value === '—') {
        return <span className="text-zinc-600 text-sm">—</span>;
      }
      return <span className={`text-sm font-medium ${highlighted ? 'text-[#d4af37]' : 'text-white'}`}>{value}</span>;
    }
    if (value) {
      return (
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${highlighted ? 'bg-[#d4af37]/20' : 'bg-white/10'}`}>
          <svg className={`w-3 h-3 ${highlighted ? 'text-[#d4af37]' : 'text-green-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    }
    return (
      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
        <svg className="w-2.5 h-2.5 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    );
  };

  const studioRental = {
    name: 'Studio Rental',
    price: 'Call for Pricing',
    description: 'Professional studio space with full equipment access',
    features: [
      'Professional studio space',
      'Full equipment access',
      'Two-camera setup',
      'High-quality microphones',
      'Recording & mixing equipment',
      'Self-service recording',
      'No engineer included'
    ],
    cta: 'Book Studio'
  };

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden" id="pricing">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#d4af37]/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <span className="inline-block text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6">
            Choose Your Package
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Transparent pricing for every stage of your podcasting journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className="relative group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Highlighted glow effect */}
              {tier.highlighted && (
                <div className="absolute -inset-[1px] bg-gradient-to-b from-[#d4af37]/50 via-[#d4af37]/20 to-transparent rounded-2xl blur-sm" />
              )}

              <div
                className={`relative h-full rounded-2xl p-8 transition-all duration-500 flex flex-col ${
                  tier.highlighted
                    ? 'bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-[#d4af37]/30'
                    : 'glass-card glass-card-hover'
                }`}
              >
                {/* Popular Badge */}
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-black text-xs font-semibold rounded-full shadow-lg shadow-[#d4af37]/30">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <div className="mb-3">
                    <span className={`text-3xl font-bold ${tier.highlighted ? 'text-gradient-gold' : 'text-white'}`}>
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500">{tier.description}</p>
                </div>

                {/* Divider */}
                <div className="divider-gold mb-6 opacity-30" />

                {/* Features - Only show included features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {allFeatures
                    .filter((feature) => {
                      const value = getFeatureValue(feature, tier.tier);
                      return value !== false && value !== '—';
                    })
                    .map((feature, featureIndex) => {
                      const value = getFeatureValue(feature, tier.tier);
                      return (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 flex justify-center">
                            {renderFeatureValue(value, tier.highlighted)}
                          </div>
                          <span className="text-sm text-zinc-400">
                            {feature.name}
                          </span>
                        </li>
                      );
                    })}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-sm transition-all duration-300 mt-auto ${
                    tier.highlighted
                      ? 'btn-premium'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[#d4af37]/30'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Runtime Note */}
        <p className="text-center text-sm text-zinc-500 mb-12">
          * All packages include episodes up to 40-50 minutes in length
        </p>

        {/* Studio Rental Option */}
        <div
          className="max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="glass-card glass-card-hover rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{studioRental.name}</h3>
                  <span className="px-2 py-0.5 text-xs font-medium text-[#d4af37] bg-[#d4af37]/10 rounded-full">
                    Hourly
                  </span>
                </div>
                <p className="text-sm text-zinc-500 mb-4">{studioRental.description}</p>
                <div className="flex flex-wrap gap-2">
                  {studioRental.features.slice(0, 4).map((feature, index) => (
                    <span key={index} className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                      <svg className="w-3 h-3 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3">
                <div>
                  <span className="text-3xl font-bold text-white">{studioRental.price}</span>
                  <span className="text-zinc-500 text-sm">/hour</span>
                </div>
                <a href="/contact" className="px-6 py-3 bg-white/5 text-white border border-white/10 rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-[#d4af37]/30 transition-all duration-300">
                  {studioRental.cta}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
