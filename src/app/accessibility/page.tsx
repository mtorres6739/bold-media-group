'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AccessibilityPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`text-center mb-12 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 mb-6">
              <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-medium text-white mb-6">
              Accessibility Statement
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Our commitment to digital accessibility for all users
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`space-y-12 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>

            {/* Compliance Badge */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-400 font-semibold">WCAG 2.1 Level AA Compliant</span>
              </div>
              <p className="text-zinc-400 text-sm">Last audited: January 7, 2026</p>
            </div>

            {/* Automated Test Results */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-2xl text-white mb-6">Automated Test Results</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                We use <strong className="text-white">axe-core</strong>, the industry-standard accessibility testing engine
                developed by Deque Systems, to continuously audit our website. Unlike overlay widgets that merely mask
                issues, we fix accessibility problems directly in our source code.
              </p>

              {/* Test Summary */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">0</div>
                  <div className="text-sm text-zinc-400">Violations</div>
                </div>
                <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">45</div>
                  <div className="text-sm text-zinc-400">Tests Passed</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-zinc-400">Pass Rate</div>
                </div>
              </div>

              {/* Tests Passed */}
              <h3 className="text-white font-medium mb-4">Key Tests Passed</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'aria-allowed-attr',
                  'aria-hidden-body',
                  'aria-required-attr',
                  'button-name',
                  'color-contrast',
                  'document-title',
                  'duplicate-id',
                  'form-field-multiple-labels',
                  'html-has-lang',
                  'image-alt',
                  'label',
                  'landmark-one-main',
                  'link-name',
                  'list',
                  'listitem',
                  'meta-viewport',
                  'region',
                  'tabindex'
                ].map((test, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 font-mono">{test}</span>
                  </div>
                ))}
              </div>

              {/* Testing Note */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-zinc-400 text-sm">
                  <strong className="text-white">Why we don&apos;t use overlay widgets:</strong> Accessibility overlays
                  like accessiBe add a JavaScript layer over broken HTML but don&apos;t fix the underlying issues.
                  Screen readers still encounter the same problems. We believe in fixing accessibility at the source
                  code level for genuine compliance.
                </p>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-2xl text-white mb-4">Our Commitment</h2>
              <p className="text-zinc-400 leading-relaxed">
                Bold Media Group is committed to ensuring digital accessibility for people with disabilities.
                We continually improve the user experience for everyone and apply the relevant accessibility
                standards to ensure we provide equal access to all users.
              </p>
            </div>

            {/* Conformance Status */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-2xl text-white mb-4">Conformance Status</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We aim to conform to the <strong className="text-white">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>,
                which is the internationally recognized standard for web accessibility and the de facto legal standard
                for ADA compliance in the United States.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Our website has been audited and remediated to meet these standards, with ongoing monitoring
                to maintain compliance.
              </p>
            </div>

            {/* Accessible Features */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-2xl text-white mb-6">Accessible Features</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Keyboard Navigation',
                    description: 'Full keyboard accessibility with visible focus indicators',
                    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  },
                  {
                    title: 'Screen Reader Support',
                    description: 'Proper ARIA labels and semantic HTML structure',
                    icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828'
                  },
                  {
                    title: 'Color Contrast',
                    description: 'Text meets WCAG contrast requirements (4.5:1 ratio)',
                    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                  },
                  {
                    title: 'Reduced Motion',
                    description: 'Respects user preferences for reduced animations',
                    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  },
                  {
                    title: 'Form Accessibility',
                    description: 'Properly labeled form fields with error identification',
                    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  },
                  {
                    title: 'Skip Navigation',
                    description: 'Skip link allows bypassing repetitive content',
                    icon: 'M13 5l7 7-7 7M5 5l7 7-7 7'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                      <p className="text-zinc-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-2xl text-white mb-4">Feedback & Contact</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                We welcome your feedback on the accessibility of our website. If you encounter any
                accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-black font-semibold rounded-lg hover:from-[#f4e4ba] hover:to-[#d4af37] transition-all duration-300"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="mailto:contact@boldmediagroup.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>

            {/* Standards */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-2xl text-white mb-4">Standards & Guidelines</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Our accessibility efforts are guided by:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">WCAG 2.1 Level AA</strong> - Web Content Accessibility Guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">ADA Title III</strong> - Americans with Disabilities Act</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">Section 508</strong> - Federal accessibility requirements</span>
                </li>
              </ul>
            </div>

            {/* Last Updated */}
            <p className="text-center text-zinc-400 text-sm">
              This accessibility statement was last updated on January 7, 2026.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
