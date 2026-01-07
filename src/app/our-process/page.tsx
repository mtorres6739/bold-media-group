'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    subtitle: 'Understanding Your Vision',
    description: 'We start by understanding your goals, audience, and brand. Through our comprehensive discovery questionnaire and strategy session, we develop a customized plan for your podcast.',
    features: [
      'Complete discovery questionnaire',
      'Strategy consultation call',
      'Content planning and format development',
      'Target audience analysis',
    ],
    quote: 'The foundation of a successful podcast is a clear strategy aligned with your business goals.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Branding & Setup',
    subtitle: 'Crafting Your Identity',
    description: 'We create your podcast\'s visual identity and set up all the technical infrastructure needed for success.',
    features: [
      'Custom podcast artwork and thumbnails',
      'Intro/outro music creation',
      'Hosting platform setup',
      'Distribution to all major platforms',
    ],
    quote: 'Your brand identity should shine through in every aspect of your podcast.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Recording',
    subtitle: 'Capturing Your Voice',
    description: 'Record your content in our professional studio in Mesa, AZ. We handle all the technical details so you can focus on your message.',
    features: [
      'Professional studio recording',
      'Video and audio capture',
      'Guest coordination and management',
      'Acoustic-treated environment',
    ],
    quote: 'Focus on your message - we\'ll handle the technology.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Production & Editing',
    subtitle: 'Perfecting Your Content',
    description: 'Our expert team polishes your content to perfection, ensuring professional quality that reflects your brand.',
    features: [
      'Professional audio editing and mastering',
      'Video editing and color grading',
      'Noise reduction and enhancement',
      'Filler word removal',
    ],
    quote: 'Professional editing transforms good content into great content.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Content Creation',
    subtitle: 'Maximizing Your Reach',
    description: 'We create all the supporting content you need to maximize your podcast\'s reach and impact.',
    features: [
      'SEO-optimized show notes',
      'Social media clips and graphics',
      'Blog posts and transcripts',
      'Custom thumbnails for YouTube and Spotify',
    ],
    quote: 'One episode becomes dozens of pieces of content across all platforms.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Publishing & Distribution',
    subtitle: 'Launching to the World',
    description: 'We handle all aspects of publishing and distributing your content across platforms.',
    features: [
      'Distribution to Apple Podcasts, Spotify, and more',
      'YouTube upload and optimization',
      'Social media scheduling',
      'Analytics and performance tracking',
    ],
    quote: 'Strategic distribution ensures your content reaches the right audience.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const timelineItems = [
  { days: '3-7 Days', package: 'Starter Spark', description: 'Standard turnaround for our entry-level package' },
  { days: '5 Days', package: 'Growth Pro', description: 'Faster delivery for growing podcasts', featured: true },
  { days: '3 Days', package: 'Studio Premier', description: 'Expedited service for premium clients' },
];

export default function OurProcessPage() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#d4af37]/5 to-transparent blur-3xl" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />

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
                Proven Production Workflow
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.1] tracking-tight ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              <span className="block text-white">Our</span>
              <span className="block text-gradient-gold-animated">Process</span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.3s' }}
            >
              A streamlined, six-step approach to creating professional podcast content that amplifies your voice and drives measurable results.
            </p>

            {/* Scroll indicator */}
            <div
              className={`flex flex-col items-center gap-2 ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              <span className="text-xs text-zinc-400 uppercase tracking-widest">Explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Interactive Timeline */}
      <section className="relative py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 text-white ${mounted ? 'animate-fadeInUp' : ''}`}
            >
              Simple. Effective. <span className="text-gradient-gold">Professional.</span>
            </h2>
            <p className={`text-lg text-zinc-400 max-w-2xl mx-auto ${mounted ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.1s' }}>
              We&apos;ve refined our process to make podcast production effortless for you
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
              {processSteps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-black'
                      : 'glass text-zinc-400 hover:text-white hover:border-[#d4af37]/30'
                  }`}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div
              className={`${mounted ? 'animate-slideInLeft' : ''}`}
              key={activeStep}
            >
              <div className="glass-card rounded-2xl p-8 sm:p-10 luxury-highlight">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center text-[#d4af37]">
                    {processSteps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">Step {processSteps[activeStep].number}</span>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">{processSteps[activeStep].title}</h3>
                  </div>
                </div>

                <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <ul className="space-y-4">
                  {processSteps[activeStep].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-[#d4af37]/40 transition-colors">
                        <svg className="w-3 h-3 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Quote Card */}
            <div className={`${mounted ? 'animate-slideInRight' : ''}`} key={`quote-${activeStep}`}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#d4af37]/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-3xl" />

                <div className="relative glass-card rounded-2xl p-8 sm:p-10 text-center">
                  {/* Large quote mark */}
                  <div className="text-[#d4af37]/20 text-8xl font-serif absolute top-4 left-6">&ldquo;</div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                      {processSteps[activeStep].icon}
                    </div>
                    <p className="text-xl sm:text-2xl text-zinc-300 italic leading-relaxed mb-6 font-display">
                      {processSteps[activeStep].quote}
                    </p>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step Progress Bar */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-zinc-400">Progress</span>
              <span className="text-sm text-[#d4af37]">{activeStep + 1} of {processSteps.length}</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#d4af37] to-[#b8960c] rounded-full transition-all duration-500"
                style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Steps Overview - Vertical Timeline */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4 text-white">
              The Complete <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="text-zinc-400">From concept to publication, every step matters</p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37]/50 via-[#d4af37]/20 to-transparent" />

            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4af37] shadow-lg shadow-[#d4af37]/30 z-10" />

                {/* Content card */}
                <div className={`ml-20 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <div
                    className="glass-card glass-card-hover rounded-xl p-6 cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#d4af37] text-xs font-bold tracking-wider">{step.number}</span>
                      <h3 className="text-lg font-medium text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-zinc-400">{step.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}

      {/* CTA Section */}
      <section className="relative py-24">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.1)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#d4af37]/10 to-transparent blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className={`${mounted ? 'animate-fadeInUp' : ''}`}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-white">
              Ready to Get <span className="text-gradient-gold-animated">Started?</span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Start your podcast journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/podcast-discovery"
                className="btn-premium px-8 py-4 text-base tracking-wide inline-block"
              >
                Start Your Podcast
              </Link>
              <Link
                href="/contact"
                className="btn-secondary px-8 py-4 text-base tracking-wide inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom gradient fade */}
      <div className="h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
}
