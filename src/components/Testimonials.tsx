'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Innovators Inc.",
      content: "Podcraft Pro transformed our content strategy. The quality is exceptional and the team makes the entire process seamless. Our podcast has become a key lead generation tool.",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Agency",
      content: "We've tried other podcast production services, but Podcraft Pro is in a league of their own. The attention to detail and professional quality exceeded our expectations.",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Wellness Brands Co.",
      content: "As someone who's time-poor, having Podcraft Pro handle everything from recording to distribution has been a game-changer. Worth every penny!",
      avatar: "ER",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Business Coach",
      company: "Thompson Consulting",
      content: "The social media content they create alongside each episode has helped us reach new audiences. Our downloads have increased 300% since working with them.",
      avatar: "DT",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      role: "Author & Speaker",
      company: "Lisa Anderson Media",
      content: "Professional, reliable, and talented. The team understands our brand voice and consistently delivers content that resonates with our audience.",
      avatar: "LA",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${mounted ? 'animate-fadeInUp' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don’t just take our word for it. Here’s what business owners and creators think about working with Podcraft Pro.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`max-w-4xl mx-auto mb-16 ${mounted ? 'animate-fadeInUp' : ''}`}>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-yellow-400/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                “{testimonials[activeIndex].content}”
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-bold text-black text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`View testimonial ${index + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-yellow-400 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${mounted ? 'animate-fadeInUp' : ''}`}
              style={mounted ? { animationDelay: `${index * 0.1}s` } : {}}
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                “{testimonial.content.length > 150 
                  ? testimonial.content.substring(0, 150) + '…' 
                  : testimonial.content}”
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${mounted ? 'animate-fadeInUp' : ''}`}>
          <div>
            <div className="text-3xl font-bold text-black mb-2">500+</div>
            <div className="text-gray-600">Episodes Produced</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">100+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">50M+</div>
            <div className="text-gray-600">Total Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">4.9/5</div>
            <div className="text-gray-600">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}