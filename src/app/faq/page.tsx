'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      category: "General",
      question: "What is Bold Media Group?",
      answer: "Bold Media Group is a professional podcast production company that helps creators and businesses produce high-quality podcast content. We handle everything from recording and editing to distribution and marketing."
    },
    {
      category: "General",
      question: "Who is Bold Media Group for?",
      answer: "Our services are perfect for business owners, content creators, brands, and anyone who wants to start or grow their podcast without dealing with the technical complexities of production."
    },
    {
      category: "Services",
      question: "What services do you offer?",
      answer: "We offer comprehensive podcast production services including audio/video recording, editing, show notes creation, social media content generation, distribution to major platforms, and strategic consulting."
    },
    {
      category: "Services",
      question: "Do you work with video podcasts?",
      answer: "Yes! We offer full video podcast production services including multi-camera setups, professional lighting, video editing, and distribution to YouTube and other video platforms."
    },
    {
      category: "Pricing",
      question: "How much do your services cost?",
      answer: "We offer three pricing tiers: Starter Spark at $299/month, Growth Pro at $599/month, and Studio Premier at $1499/month. Each tier includes different levels of service and deliverables."
    },
    {
      category: "Pricing",
      question: "Can I customize a package?",
      answer: "Absolutely! While our standard packages work for most clients, we're happy to create custom solutions tailored to your specific needs and budget."
    },
    {
      category: "Process",
      question: "How does the podcast production process work?",
      answer: "Our process is simple: you record your content (either in our studio or remotely), and we handle everything else - editing, show notes, social media content, and distribution. You just focus on creating great content."
    },
    {
      category: "Process",
      question: "How long does it take to produce one episode?",
      answer: "Production time varies by package: Starter Spark has a 7-day turnaround, Growth Pro offers 5-day delivery, and Studio Premier provides expedited 3-day service."
    },
    {
      category: "Process",
      question: "Do I need to come to your studio?",
      answer: "Not necessarily! While we have a professional studio available, we also work with remote recording setups and can produce high-quality podcasts regardless of your location."
    },
    {
      category: "Technical",
      question: "What equipment do you use?",
      answer: "We use professional-grade equipment including 4K cameras, studio-quality microphones, professional audio mixers, and acoustic-treated recording environments to ensure the highest quality production."
    },
    {
      category: "Technical",
      question: "What platforms do you distribute to?",
      answer: "We distribute to all major podcast platforms including Spotify, Apple Podcasts, Google Podcasts, Amazon Music, and dozens more through our distribution network."
    },
    {
      category: "Technical",
      question: "Do you provide transcripts?",
      answer: "Yes, transcripts are included in our Growth Pro and Studio Premier packages. They're also available as an add-on for our Starter Spark package."
    },
    {
      category: "Content",
      question: "What kind of social media content do you create?",
      answer: "We create short-form video clips optimized for platforms like Instagram Reels, TikTok, and YouTube Shorts. The number of clips varies by package: 10 for Starter Spark, 30 for Growth Pro, and 45 for Studio Premier."
    },
    {
      category: "Content",
      question: "Can you help with podcast strategy and content planning?",
      answer: "Yes! All packages include access to our dedicated producers who help with content strategy. Studio Premier includes quarterly strategy and design consultations for comprehensive podcast planning."
    },
    {
      category: "Content",
      question: "Do you help with guest booking?",
      answer: "While we don't handle guest booking directly, we provide guidance on best practices and can help coordinate recording schedules with your guests."
    },
    {
      category: "Support",
      question: "What kind of support do you offer?",
      answer: "All clients receive dedicated producer support. Response times vary by package, but we typically respond within 24 hours. Studio Premier clients receive priority support."
    },
    {
      category: "Support",
      question: "What if I need to make changes to an episode after it's published?",
      answer: "We offer one round of revisions included in each package. Additional revisions can be arranged for a fee. For critical updates, we provide expedited service."
    },
    {
      category: "Billing",
      question: "How does billing work?",
      answer: "We bill monthly on a subscription basis. You can cancel or change your plan at any time with 30 days' notice. We also offer annual billing with a discount."
    },
    {
      category: "Billing",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and bank transfers. All payments are processed securely through our payment system."
    },
    {
      category: "Getting Started",
      question: "How do I get started?",
      answer: "Getting started is easy! Simply contact us through our website, schedule a free consultation, and we'll help you choose the right package for your needs."
    },
    {
      category: "Getting Started",
      question: "Do I need to have a podcast idea already?",
      answer: "Not at all! We work with clients at all stages, from those just exploring the idea of starting a podcast to established shows looking to level up their production quality."
    }
  ];

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fadeInUp">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Have questions about our podcast production services? We’ve got answers.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fadeInUp">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-sm border border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-700 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800"
                >
                  <div className="flex items-center">
                    <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full mr-3">
                      {faq.category}
                    </span>
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-yellow-400 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center animate-fadeInUp">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our team is here to help. Contact us for a free consultation to discuss your podcast needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                  Schedule a Call
                </a>
                <a
                  href="mailto:hello@boldmediagroup.com"
                  className="px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 inline-block text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}