'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Cinematic background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />

        {/* Subtle top light */}
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
              Premium Podcast Production
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6 leading-[1.1] tracking-tight ${mounted ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block text-white">Your Voice.</span>
            <span className="block text-gradient-gold-animated">Your Brand.</span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-2xl sm:text-3xl lg:text-4xl font-light text-zinc-400 mb-4 tracking-wide ${mounted ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            Boldly Amplified.
          </p>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed ${mounted ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            Professional podcast production that transforms your ideas into captivating content.
            From concept to publication, we handle every detail.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${mounted ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.5s' }}
            suppressHydrationWarning
          >
            <button className="btn-premium px-8 py-4 text-base tracking-wide">
              View Packages
            </button>
            {mounted && (
              <Link
                href="/podcast-discovery"
                className="btn-secondary px-8 py-4 text-base tracking-wide"
              >
                Start Discovery
              </Link>
            )}
          </div>

          {/* Email capture */}
          <div
            className={`max-w-lg mx-auto ${mounted ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-zinc-500 text-sm mb-4 tracking-wide uppercase">
              Schedule a complimentary consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300 text-base"
              />
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-300 whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}
        style={{ animationDelay: '1s' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
