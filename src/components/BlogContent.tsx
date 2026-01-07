'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

interface BlogContentProps {
  posts: BlogPost[];
  categories: string[];
  location: { city: string; state: string };
}

export default function BlogContent({ posts, categories, location }: BlogContentProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get featured post (first one marked as featured, or just the first post)
  const featuredPost = posts.find(post => post.featured) || posts[0];
  const otherPosts = posts.filter(post => post.slug !== featuredPost?.slug);

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All'
    ? otherPosts
    : otherPosts.filter(post => post.category === selectedCategory);

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Studio Rental':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
        );
      case 'Podcast Production':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        );
      case 'Getting Started':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
                Insights & Tips
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6 leading-[1.1] tracking-tight ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              <span className="block text-white">Bold Media</span>
              <span className="block text-gradient-gold-animated">Blog</span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed ${mounted ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.3s' }}
            >
              Expert insights, tips, and strategies for podcasting success from {location.city}, {location.state}
            </p>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative py-16">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/3 rounded-full blur-[150px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div
              className={`glass-card rounded-3xl overflow-hidden ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="md:flex">
                {/* Left side - Icon/Visual */}
                <div className="md:w-2/5 relative bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center p-12 min-h-[300px]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)]" />
                  <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10 flex items-center justify-center">
                    <div className="text-[#d4af37]">
                      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-zinc-400 text-sm">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-400 text-sm">{featuredPost.readTime}</span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    {featuredPost.description}
                  </p>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group inline-flex items-center gap-2 text-[#d4af37] font-medium hover:text-[#e5c04b] transition-colors"
                  >
                    Read Article
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div
            className={`flex flex-wrap gap-3 justify-center ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#d4af37] text-black'
                    : 'glass text-zinc-400 hover:text-white hover:border-[#d4af37]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-zinc-800/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <p className="text-zinc-400 text-lg">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`group glass-card glass-card-hover rounded-2xl overflow-hidden ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {/* Card Header - Visual */}
                  <div className="relative h-48 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform duration-500">
                      {getCategoryIcon(post.category)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#d4af37] text-sm font-medium">{post.category}</span>
                      <span className="text-zinc-400">•</span>
                      <span className="text-zinc-400 text-sm">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-[#d4af37] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group/link inline-flex items-center gap-1 text-[#d4af37] font-medium text-sm hover:text-[#e5c04b] transition-colors"
                      >
                        Read
                        <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-block text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-4">
            Stay Updated
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-white mb-6">
            Get the Latest Insights
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Subscribe to receive podcasting tips, industry news, and exclusive content delivered to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="btn-premium px-8 py-4 text-base tracking-wide whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {/* Trust indicator */}
          <p className="mt-6 text-zinc-400 text-sm">
            No spam, unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </section>
    </div>
  );
}
