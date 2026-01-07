'use client';

import { useState } from 'react';
import { PRICE_IDS } from '@/lib/stripe';

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
  priceId: string;
}

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);
  const [addStrategySession, setAddStrategySession] = useState<Record<string, boolean>>({
    starter: false,
    growth: false,
  });
  // Unified feature list for easy comparison
  const allFeatures: PricingFeature[] = [
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
    { name: 'Distribution to Major Platforms', starter: false, growth: true, premier: true },
    { name: 'Short Clips (60 sec)', starter: '5', growth: '10', premier: '15' },
    { name: 'Long Clips (2-3 min)', starter: '—', growth: '—', premier: '5' },
    { name: 'YouTube Video Upload', starter: false, growth: false, premier: true },
    { name: 'Custom Graphics (YouTube & Cover Art)', starter: false, growth: false, premier: true },
    { name: 'Podcast Specific Website', starter: false, growth: false, premier: true },
    { name: 'Blog Post Per Episode', starter: false, growth: false, premier: true },
    { name: 'Social Media Content Captions', starter: false, growth: false, premier: true },
    { name: 'Social Channel Creation', starter: false, growth: false, premier: true },
    { name: 'Podcast Launch Strategy Session', starter: false, growth: false, premier: true },
    { name: 'Priority Support', starter: false, growth: false, premier: true },
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter Spark',
      price: '$399',
      description: 'DIY approach - walk away with raw recordings',
      cta: 'Get Started',
      tier: 'starter',
      priceId: PRICE_IDS.starterSpark,
    },
    {
      name: 'Growth Pro',
      price: '$699',
      description: 'We handle the editing and distribution',
      highlighted: true,
      cta: 'Choose Plan',
      tier: 'growth',
      priceId: PRICE_IDS.growthPro,
    },
    {
      name: 'Studio Premier',
      price: '$1599',
      description: 'Complete white-glove solution and strategy',
      cta: 'Get Started',
      tier: 'premier',
      priceId: PRICE_IDS.studioPremier,
    }
  ];

  const handleCheckout = async (priceId: string, mode: 'subscription' | 'payment', tier?: 'starter' | 'growth' | 'premier') => {
    setLoading(priceId);
    try {
      const priceIds = [priceId];

      // Add strategy session if selected for starter or growth
      if (tier && (tier === 'starter' || tier === 'growth') && addStrategySession[tier]) {
        priceIds.push(PRICE_IDS.strategySession);
      }

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceIds, mode }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Checkout error:', data.error);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(null);
    }
  };

  const getFeatureValue = (feature: PricingFeature, tier: 'starter' | 'growth' | 'premier') => {
    return feature[tier];
  };

  const renderFeatureValue = (value: boolean | string, highlighted: boolean = false) => {
    if (typeof value === 'string') {
      if (value === '—') {
        return <span className="text-zinc-400 text-sm">—</span>;
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
        <svg className="w-2.5 h-2.5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    );
  };

  const studioRental = {
    name: 'Studio Rental',
    price: '$99',
    description: 'Professional studio space (2 hour minimum booking)',
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

  const strategySession = {
    name: 'Podcast Launch Strategy Session',
    price: '$500',
    description: 'A deep dive into your business and brand to build a winning podcast plan',
    features: [
      'Business, brand, & identity consultation',
      'Target listener & competitor analysis',
      'Specific niche show concept & topic development',
      'Concept art (Main cover, per-episode, & YouTube)',
      'Full content plan & action strategy',
      'Recommended shooting & release schedule',
      'Printed reference guide'
    ],
    cta: 'Book Session'
  };

  const guestAppearance = {
    name: 'Guest Appearance Package',
    price: '$299',
    description: 'Be a guest on a Bold Media show and receive full content from your episode',
    features: [
      'Full audio & video of your episode',
      'Full transcript',
      '15 social short clips',
      '2-3 long-form clips',
      'Social captions & hashtags',
      'Blog post feature',
      'Custom cover art & thumbnail',
      'Episode shared on Bold Media channels'
    ],
    cta: 'Book Appearance'
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
                className={`relative h-full rounded-2xl p-8 transition-all duration-500 flex flex-col ${tier.highlighted
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
                  <p className="text-sm text-zinc-400">{tier.description}</p>
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

                {/* Strategy Session Add-on for Starter and Growth */}
                {(tier.tier === 'starter' || tier.tier === 'growth') && (
                  <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addStrategySession[tier.tier]}
                        onChange={(e) => setAddStrategySession(prev => ({
                          ...prev,
                          [tier.tier]: e.target.checked
                        }))}
                        className="mt-1 w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-[#d4af37] focus:ring-[#d4af37]/50"
                      />
                      <div>
                        <span className="text-sm text-white font-medium">Add Strategy Session</span>
                        <span className="text-xs text-[#d4af37] ml-2">+$500</span>
                        <p className="text-xs text-zinc-400 mt-1">Includes concept art, content plan & printed guide</p>
                      </div>
                    </label>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => handleCheckout(tier.priceId, 'subscription', tier.tier)}
                  disabled={loading === tier.priceId}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-sm transition-all duration-300 mt-auto disabled:opacity-50 disabled:cursor-not-allowed ${tier.highlighted
                    ? 'btn-premium'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[#d4af37]/30'
                    }`}
                >
                  {loading === tier.priceId ? 'Processing...' : tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Runtime Note */}
        <p className="text-center text-sm text-zinc-400 mb-12">
          * All packages include episodes up to 40-50 minutes in length
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Studio Rental Option */}
          <div
            className="animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="glass-card glass-card-hover rounded-2xl p-8 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{studioRental.name}</h3>
                  <span className="px-2 py-0.5 text-xs font-medium text-[#d4af37] bg-[#d4af37]/10 rounded-full">
                    Hourly
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mb-6">{studioRental.description}</p>
                <div className="grid grid-cols-1 gap-2 mb-8">
                  {studioRental.features.map((feature, index) => (
                    <span key={index} className="inline-flex items-center gap-2 text-xs text-zinc-400">
                      <svg className="w-3.5 h-3.5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div>
                  <span className="text-2xl font-bold text-white">{studioRental.price}</span>
                  <span className="text-zinc-400 text-xs">/hour</span>
                </div>
                <button
                  onClick={() => handleCheckout(PRICE_IDS.studioRental, 'payment')}
                  disabled={loading === PRICE_IDS.studioRental}
                  className="px-6 py-2.5 bg-white/5 text-white border border-white/10 rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-[#d4af37]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading === PRICE_IDS.studioRental ? 'Processing...' : studioRental.cta}
                </button>
              </div>
            </div>
          </div>

          {/* Strategy Session Option */}
          <div
            className="animate-fadeInUp"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="glass-card glass-card-hover rounded-2xl p-8 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{strategySession.name}</h3>
                  <span className="px-2 py-0.5 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full">
                    One-Time
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mb-6">{strategySession.description}</p>
                <div className="grid grid-cols-1 gap-2 mb-8">
                  {strategySession.features.map((feature, index) => (
                    <span key={index} className="inline-flex items-center gap-2 text-xs text-zinc-400">
                      <svg className="w-3.5 h-3.5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div>
                  <span className="text-2xl font-bold text-white">{strategySession.price}</span>
                  <span className="text-zinc-400 text-xs"> once</span>
                </div>
                <button
                  onClick={() => handleCheckout(PRICE_IDS.strategySession, 'payment')}
                  disabled={loading === PRICE_IDS.strategySession}
                  className="px-6 py-2.5 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 rounded-lg font-semibold text-sm hover:bg-[#d4af37]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading === PRICE_IDS.strategySession ? 'Processing...' : strategySession.cta}
                </button>
              </div>
            </div>
          </div>

          {/* Guest Appearance Package */}
          <div
            className="animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="glass-card glass-card-hover rounded-2xl p-8 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{guestAppearance.name}</h3>
                  <span className="px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                    One-Time
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mb-6">{guestAppearance.description}</p>
                <div className="grid grid-cols-1 gap-2 mb-8">
                  {guestAppearance.features.map((feature, index) => (
                    <span key={index} className="inline-flex items-center gap-2 text-xs text-zinc-400">
                      <svg className="w-3.5 h-3.5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div>
                  <span className="text-2xl font-bold text-white">{guestAppearance.price}</span>
                  <span className="text-zinc-400 text-xs"> once</span>
                </div>
                <button
                  onClick={() => handleCheckout(PRICE_IDS.guestAppearance, 'payment')}
                  disabled={loading === PRICE_IDS.guestAppearance}
                  className="px-6 py-2.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg font-semibold text-sm hover:bg-emerald-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading === PRICE_IDS.guestAppearance ? 'Processing...' : guestAppearance.cta}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
