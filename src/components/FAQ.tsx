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
      answer: "Absolutely! While we offer a professional studio setup with a Dedicated Producer who helps set everything up and handles all the technical aspects, you can also record using your own equipment and we'll handle the post-production, editing, and distribution. Our team will provide guidance on optimal recording settings."
    },
    {
      question: "How do you distribute podcasts to major platforms?",
      answer: "We handle all distribution logistics, submitting your podcast to Spotify, Apple Podcasts, Google Podcasts, Amazon Music, and other major platforms. We also manage your RSS feed and ensure proper metadata and SEO optimization."
    },
    {
      question: "What if I need to make changes to an episode after it's published?",
      answer: "We offer one round of revisions included in each package. Additional revisions can be arranged for a fee. For critical updates, we provide expedited service to ensure your content stays accurate."
    },
    {
      question: "Do you provide show notes and transcripts?",
      answer: "Growth Pro and Studio Premier packages include SEO-optimized show notes and full transcripts. Starter Spark includes basic show notes, with transcripts available as an add-on service."
    },
    {
      question: "Can you help with guest booking and interview coordination?",
      answer: "While we don't handle guest booking directly, we provide guidance on best practices and can help coordinate recording schedules with your guests. Studio Premier includes more comprehensive support in this area."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${mounted ? 'animate-fadeInUp' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We’ve got answers. Here are some of the most common things we get asked.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md ${mounted ? 'animate-fadeInUp' : ''}`}
              style={mounted ? { animationDelay: `${index * 0.1}s` } : {}}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
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
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`mt-16 text-center ${mounted ? 'animate-fadeInUp' : ''}`}>
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help. Contact us for a free consultation to discuss your podcast needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}