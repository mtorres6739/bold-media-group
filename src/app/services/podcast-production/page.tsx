'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

const metadata = {
  title: 'Podcast Production Services | Bold Media Group',
  description: 'Professional podcast production services - from recording to distribution. Let us handle the technical details.',
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'Studio Recording',
    description: 'Professional multi-camera studio setup with broadcast-quality audio capture and real-time monitoring.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Expert Editing',
    description: 'Meticulous audio engineering with noise reduction, dynamic leveling, and cinematic sound design.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Brand Identity',
    description: 'Custom artwork, animated intros, and cohesive visual elements that define your unique podcast brand.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Show Notes & SEO',
    description: 'AI-enhanced transcripts, keyword-optimized descriptions, and blog content to maximize discoverability.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Multi-Platform Distribution',
    description: 'Seamless publishing to Apple, Spotify, YouTube, and 20+ platforms with optimized metadata.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Analytics & Growth',
    description: 'Comprehensive dashboards tracking downloads, engagement, and audience demographics for data-driven growth.',
  },
];

const whyChooseUs = [
  {
    stat: '10+',
    label: 'Hours Saved',
    description: 'Per episode with our full-service production',
  },
  {
    stat: '100%',
    label: 'On-Time Delivery',
    description: 'Reliable turnaround you can count on',
  },
  {
    stat: '20+',
    label: 'Platforms',
    description: 'Distribution to all major podcast networks',
  },
  {
    stat: '4K',
    label: 'Video Quality',
    description: 'Broadcast-grade video production',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your vision, audience, and goals to craft the perfect production plan.',
  },
  {
    number: '02',
    title: 'Production',
    description: 'Record in our premium studio with expert guidance and state-of-the-art equipment.',
  },
  {
    number: '03',
    title: 'Post-Production',
    description: 'Our team edits, enhances, and polishes every episode to broadcast quality.',
  },
  {
    number: '04',
    title: 'Distribution',
    description: 'We handle publishing, promotion, and analytics so you can focus on content.',
  },
];

const pricingTiers = [
  {
    name: 'Starter Spark',
    description: 'DIY approach - walk away with raw recordings',
    price: '$399',
    features: [
      '1 Episode Per Month',
      'Professional Studio Recording',
      'Raw Audio & Video Delivered',
      'Do Your Own Editing',
      '5 Short Clips (60 sec)',
    ],
    highlighted: false,
  },
  {
    name: 'Growth Pro',
    description: 'We handle the editing and distribution',
    price: '$699',
    features: [
      '1 Episode Per Month',
      'Professional Audio & Video Editing',
      'Enhanced Audio & Video',
      'Show Notes & Transcripts',
      'Chapter Indicators',
      'Standard Audio Intro & Outro',
      'Distribution & Syndication',
      '10 Short Clips (60 sec)',
    ],
    highlighted: true,
  },
  {
    name: 'Studio Premier',
    description: 'Complete white-glove solution and strategy',
    price: '$1599',
    features: [
      '1 Episode Per Month',
      'White-Glove Service',
      'Full Distribution (incl. YouTube)',
      'Custom Graphics & Artwork',
      'Custom Audio/Video Intro & Outro',
      'Podcast Specific Website',
      'Blog Post & Social Captions',
      '15 Short & 5 Long Clips',
      'Social Channel Creation',
      'Launch Strategy Session ($500 Value)',
    ],
    highlighted: false,
  },
];

export default function PodcastProductionPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#d4af37]/5 to-transparent blur-3xl" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/3 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />

        {/* Grain overlay */}
        <div className="absolute inset-0 grain-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className={`${mounted ? 'opacity-100' : 'opacity-0'}`}>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-zinc-300">
                Full-Service Production
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6 leading-[1.1] tracking-tight ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              <span className="block text-white">Podcast</span>
              <span className="block text-gradient-gold-animated">Production</span>
            </h1>

            {/* Tagline */}
            <p
              className={`text-xl sm:text-2xl lg:text-3xl font-light text-zinc-400 mb-4 tracking-wide ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.3s' }}
            >
              From Concept to Audience
            </p>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >
              Full-service podcast production that handles everything from recording to distribution.
              Focus on your message while we perfect every detail.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.5s' }}
            >
              <Link href="/podcast-discovery" className="btn-premium px-8 py-4 text-base tracking-wide">
                Start Your Podcast
              </Link>
              <Link href="#services" className="btn-secondary px-8 py-4 text-base tracking-wide">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-400 uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/3 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-4">
              What We Do
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6">
              End-to-End Production
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Every aspect of podcast creation, expertly handled
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group glass-card glass-card-hover rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-4">
              Our Process
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A streamlined journey from idea to audience
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-[#d4af37]/30 to-transparent" />
                )}

                <div className="glass-card glass-card-hover rounded-2xl p-8 h-full">
                  <span className="text-5xl font-bold text-gradient-gold opacity-30 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-block text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-4">
            Ready to Begin?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6">
            Launch Your Podcast Today
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and create a podcast that resonates with your audience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/podcast-discovery" className="btn-premium px-10 py-5 text-lg tracking-wide">
              Start Discovery Process
            </Link>
            <Link href="/contact" className="btn-secondary px-10 py-5 text-lg tracking-wide">
              Contact Us
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-zinc-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Same-day response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
