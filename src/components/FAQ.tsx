'use client';

import { useState, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "How long does it take to produce one episode?",
      answer: "Production time varies by package: Starter Spark has a 7-day turnaround, Growth Pro offers 5-day delivery, and Studio Premier provides expedited 3-day service. This includes recording, editing, and distribution."
    },
    {
      question: "What's included in the social media content?",
      answer: "We create short-form video clips optimized for platforms like Instagram Reels, TikTok, and YouTube Shorts. Starter Spark includes 10 clips, Growth Pro provides 30, and Studio Premier offers 45 clips per episode, all with custom branding."
    },
    {
      question: "Do you help with podcast strategy and content planning?",
      answer: "Yes! All packages include access to our dedicated producers who help with content strategy. Studio Premier includes quarterly strategy and design consultations for comprehensive podcast planning and brand development."
    },
    {
      question: "Can I use my own recording equipment?",
      answer: "Absolutely! While we offer a professional studio setup with a Dedicated Producer who helps set everything up and handles all the technical aspects, you can also record using your own equipment and we'll handle the post-production, editing, and distribution."
    },
    {
      question: "How do you distribute podcasts to major platforms?",
      answer: "We handle all distribution logistics, submitting your podcast to Spotify, Apple Podcasts, Google Podcasts, Amazon Music, and other major platforms. We also manage your RSS feed and ensure proper metadata and SEO optimization."
    },
    {
      question: "What if I need to make changes to an episode after it's published?",
      answer: "We offer one round of revisions included in each package. Additional revisions can be arranged for a fee. For critical updates, we provide expedited service to ensure your content stays accurate."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#d4af37]/3 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-16 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#d4af37] text-sm font-medium tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about our podcast production services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'border-[#d4af37]/30' : ''
              } ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 focus:outline-none"
              >
                <span className="text-base font-medium text-white pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#d4af37]/20' : ''}`}>
                  <svg
                    className={`w-4 h-4 transition-all duration-300 ${
                      openIndex === index ? 'text-[#d4af37] rotate-180' : 'text-zinc-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-zinc-400 text-sm leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-16 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.7s' }}
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 rounded-2xl" />

            <div className="relative m-px bg-[#111] rounded-2xl p-10 text-center">
              <h3 className="font-display text-2xl text-white mb-3">Still have questions?</h3>
              <p className="text-zinc-500 mb-8 max-w-lg mx-auto">
                Our team is here to help. Schedule a free consultation to discuss your podcast needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-premium px-8 py-3.5">
                  Schedule a Call
                </button>
                <button className="btn-secondary px-8 py-3.5">
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
