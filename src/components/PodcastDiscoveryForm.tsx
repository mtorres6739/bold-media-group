'use client';

import { useState, useEffect } from 'react';
import VoiceInput from '@/components/VoiceInput';
import AIAssistant from '@/components/AIAssistant';

interface FormData {
  // Vision & Goals
  whyPodcast: string;
  targetAudience: string;
  successMetrics: string;

  // Podcast Details
  podcastName: string;
  episodeLength: string;
  frequency: string;
  style: string;

  // Content & Production
  coreThemes: string;
  recordingLocation: string;

  // Contact Information
  name: string;
  email: string;
  company: string;
  phone: string;
}

const sectionIcons = {
  vision: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  podcast: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  content: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  contact: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
};

export default function PodcastDiscoveryForm() {
  const [formData, setFormData] = useState<FormData>({
    whyPodcast: '',
    targetAudience: '',
    successMetrics: '',
    podcastName: '',
    episodeLength: '',
    frequency: '',
    style: '',
    coreThemes: '',
    recordingLocation: '',
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sections = [
    { title: 'Vision & Goals', shortTitle: 'Vision', icon: sectionIcons.vision },
    { title: 'Podcast Details', shortTitle: 'Details', icon: sectionIcons.podcast },
    { title: 'Content & Production', shortTitle: 'Content', icon: sectionIcons.content },
    { title: 'Contact Information', shortTitle: 'Contact', icon: sectionIcons.contact }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Podcast Discovery Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentSection(0);
      setFormData({
        whyPodcast: '',
        targetAudience: '',
        successMetrics: '',
        podcastName: '',
        episodeLength: '',
        frequency: '',
        style: '',
        coreThemes: '',
        recordingLocation: '',
        name: '',
        email: '',
        company: '',
        phone: ''
      });
    }, 5000);
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[150px]" />
        </div>

        <div className={`relative z-10 max-w-2xl mx-auto text-center ${mounted ? 'animate-fadeInUp' : ''}`}>
          {/* Success checkmark */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#b8960c] rounded-full opacity-20 animate-pulse-gold" />
            <div className="absolute inset-2 bg-gradient-to-br from-[#d4af37] to-[#b8960c] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <h2 className="font-display text-5xl font-medium mb-4 text-gradient-gold-animated">
            Thank You
          </h2>
          <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
            Your podcast discovery questionnaire has been submitted successfully.
          </p>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-lg mx-auto">
            Our team will review your responses and create a customized podcast blueprint for your business. We&apos;ll be in touch within 24-48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#d4af37]/5 to-transparent blur-3xl" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[180px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* Sticky header with progress */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Title and progress */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-medium text-gradient-gold">
                Podcast Discovery
              </h1>
              <p className="text-sm text-zinc-500 mt-1">Tell us about your vision</p>
            </div>
            {mounted && (
              <div className="text-right">
                <span className="text-3xl font-light text-[#d4af37]">{currentSection + 1}</span>
                <span className="text-lg text-zinc-600"> / {sections.length}</span>
              </div>
            )}
          </div>

          {/* Section navigation - sleek pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {sections.map((section, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSection(index)}
                className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-500 whitespace-nowrap ${
                  index === currentSection
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-black shadow-lg shadow-[#d4af37]/20'
                    : index < currentSection
                    ? 'bg-white/5 text-[#d4af37] border border-[#d4af37]/30'
                    : 'bg-white/5 text-zinc-400 border border-white/5 hover:border-white/10 hover:bg-white/8'
                }`}
              >
                <span className={`transition-transform duration-300 ${index === currentSection ? 'scale-110' : ''}`}>
                  {section.icon}
                </span>
                <span className="hidden sm:inline">{section.title}</span>
                <span className="sm:hidden">{section.shortTitle}</span>

                {/* Completed indicator */}
                {index < currentSection && (
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-0.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#d4af37] to-[#f4e4ba] transition-all duration-700 ease-out rounded-full"
              style={{ width: mounted ? `${((currentSection + 1) / sections.length) * 100}%` : '25%' }}
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: Vision & Goals */}
        {currentSection === 0 && (
          <div className={`space-y-8 ${mounted ? 'animate-fadeInUp' : ''}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 mb-6">
                {sections[0].icon}
              </div>
              <h2 className="font-display text-4xl font-medium mb-3 text-white">{sections[0].title}</h2>
              <p className="text-zinc-400 text-lg">Let&apos;s understand the foundation of your podcast vision</p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <label htmlFor="whyPodcast" className="block text-sm font-medium text-zinc-300 mb-3">
                  Why do you want a podcast? <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="whyPodcast"
                    name="whyPodcast"
                    required
                    value={formData.whyPodcast}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1a1a1a]">Select your primary motivation</option>
                    <option value="brand-authority" className="bg-[#1a1a1a]">Brand Authority</option>
                    <option value="lead-generation" className="bg-[#1a1a1a]">Lead Generation</option>
                    <option value="education" className="bg-[#1a1a1a]">Education</option>
                    <option value="networking" className="bg-[#1a1a1a]">Networking</option>
                    <option value="entertainment" className="bg-[#1a1a1a]">Entertainment</option>
                    <option value="multiple" className="bg-[#1a1a1a]">Multiple Reasons</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="targetAudience" className="block text-sm font-medium text-zinc-300 mb-3">
                  Who is your target audience? <span className="text-[#d4af37]">*</span>
                </label>
                <div className="space-y-3">
                  <div className="relative group">
                    <textarea
                      id="targetAudience"
                      name="targetAudience"
                      required
                      rows={4}
                      value={formData.targetAudience}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300 resize-none pr-14"
                      placeholder="Describe your ideal listeners (clients, prospects, peers, local community, national reach, etc.)"
                    />
                    <div className="absolute bottom-3 right-3">
                      <VoiceInput
                        onTranscript={(text) => {
                          setFormData(prev => ({
                            ...prev,
                            targetAudience: prev.targetAudience ? `${prev.targetAudience} ${text}` : text
                          }));
                        }}
                        placeholder="Click to speak about your target audience"
                      />
                    </div>
                  </div>
                  <AIAssistant
                    onGenerateContent={(content) => setFormData(prev => ({ ...prev, targetAudience: content }))}
                    currentContent={formData.targetAudience}
                    fieldName="targetAudience"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="successMetrics" className="block text-sm font-medium text-zinc-300 mb-3">
                  What does success look like after 6-12 months?
                </label>
                <div className="space-y-3">
                  <div className="relative group">
                    <textarea
                      id="successMetrics"
                      name="successMetrics"
                      rows={4}
                      value={formData.successMetrics}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300 resize-none pr-14"
                      placeholder="Download numbers, lead generation, brand recognition, etc."
                    />
                    <div className="absolute bottom-3 right-3">
                      <VoiceInput
                        onTranscript={(text) => {
                          setFormData(prev => ({
                            ...prev,
                            successMetrics: prev.successMetrics ? `${prev.successMetrics} ${text}` : text
                          }));
                        }}
                        placeholder="Click to speak about success metrics"
                      />
                    </div>
                  </div>
                  <AIAssistant
                    onGenerateContent={(content) => setFormData(prev => ({ ...prev, successMetrics: content }))}
                    currentContent={formData.successMetrics}
                    fieldName="successMetrics"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Podcast Details */}
        {currentSection === 1 && (
          <div className={`space-y-8 ${mounted ? 'animate-fadeInUp' : ''}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 mb-6">
                {sections[1].icon}
              </div>
              <h2 className="font-display text-4xl font-medium mb-3 text-white">{sections[1].title}</h2>
              <p className="text-zinc-400 text-lg">Tell us about your podcast format and structure</p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <label htmlFor="podcastName" className="block text-sm font-medium text-zinc-300 mb-3">
                  Podcast name ideas
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    id="podcastName"
                    name="podcastName"
                    value={formData.podcastName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300"
                    placeholder="List your top podcast name ideas"
                  />
                  <AIAssistant
                    onGenerateContent={(content) => setFormData(prev => ({ ...prev, podcastName: content }))}
                    currentContent={formData.podcastName}
                    fieldName="podcastName"
                  />
                </div>
              </div>

              {/* Stylish option cards for episode length */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-3">
                  Episode length
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: '15-min', label: '15 min', desc: 'Quick hits' },
                    { value: '30-min', label: '30-40 min', desc: 'Standard' },
                    { value: '60-min', label: '60+ min', desc: 'Deep dives' },
                    { value: 'variable', label: 'Variable', desc: 'Flexible' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, episodeLength: option.value }))}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                        formData.episodeLength === option.value
                          ? 'bg-[#d4af37]/10 border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                          : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8'
                      }`}
                    >
                      <div className={`text-lg font-medium ${formData.episodeLength === option.value ? 'text-[#d4af37]' : 'text-white'}`}>
                        {option.label}
                      </div>
                      <div className="text-sm text-zinc-500">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency selection */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-3">
                  Publishing frequency
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'weekly', label: 'Weekly', desc: 'High engagement' },
                    { value: 'bi-weekly', label: 'Bi-weekly', desc: 'Balanced' },
                    { value: 'monthly', label: 'Monthly', desc: 'Quality focus' },
                    { value: 'seasonal', label: 'Seasonal', desc: 'Batched releases' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, frequency: option.value }))}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                        formData.frequency === option.value
                          ? 'bg-[#d4af37]/10 border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                          : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8'
                      }`}
                    >
                      <div className={`text-lg font-medium ${formData.frequency === option.value ? 'text-[#d4af37]' : 'text-white'}`}>
                        {option.label}
                      </div>
                      <div className="text-sm text-zinc-500">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Style selection */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-3">
                  Podcast style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'solo', label: 'Solo', icon: '🎤' },
                    { value: 'interviews', label: 'Interviews', icon: '🗣️' },
                    { value: 'co-hosts', label: 'Co-hosts', icon: '👥' },
                    { value: 'panel', label: 'Panel', icon: '🎪' },
                    { value: 'mixed', label: 'Mixed', icon: '🎬' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, style: option.value }))}
                      className={`p-4 rounded-xl border text-center transition-all duration-300 ${
                        formData.style === option.value
                          ? 'bg-[#d4af37]/10 border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                          : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8'
                      }`}
                    >
                      <div className="text-2xl mb-1">{option.icon}</div>
                      <div className={`text-sm font-medium ${formData.style === option.value ? 'text-[#d4af37]' : 'text-white'}`}>
                        {option.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Content & Production */}
        {currentSection === 2 && (
          <div className={`space-y-8 ${mounted ? 'animate-fadeInUp' : ''}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 mb-6">
                {sections[2].icon}
              </div>
              <h2 className="font-display text-4xl font-medium mb-3 text-white">{sections[2].title}</h2>
              <p className="text-zinc-400 text-lg">Let&apos;s plan your content and production needs</p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <label htmlFor="coreThemes" className="block text-sm font-medium text-zinc-300 mb-3">
                  Core themes or topics
                </label>
                <div className="space-y-3">
                  <div className="relative group">
                    <textarea
                      id="coreThemes"
                      name="coreThemes"
                      rows={4}
                      value={formData.coreThemes}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300 resize-none pr-14"
                      placeholder="Industry trends, business tips, personal stories, client case studies, etc."
                    />
                    <div className="absolute bottom-3 right-3">
                      <VoiceInput
                        onTranscript={(text) => {
                          setFormData(prev => ({
                            ...prev,
                            coreThemes: prev.coreThemes ? `${prev.coreThemes} ${text}` : text
                          }));
                        }}
                        placeholder="Click to speak about core themes"
                      />
                    </div>
                  </div>
                  <AIAssistant
                    onGenerateContent={(content) => setFormData(prev => ({ ...prev, coreThemes: content }))}
                    currentContent={formData.coreThemes}
                    fieldName="coreThemes"
                  />
                </div>
              </div>

              {/* Recording location with icons */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-3">
                  Recording location
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'in-office', label: 'In-office', icon: '🏢' },
                    { value: 'studio', label: 'Professional Studio', icon: '🎙️' },
                    { value: 'remote', label: 'Remote/Zoom', icon: '💻' },
                    { value: 'mixed', label: 'Mixed', icon: '🔄' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, recordingLocation: option.value }))}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 ${
                        formData.recordingLocation === option.value
                          ? 'bg-[#d4af37]/10 border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                          : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8'
                      }`}
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className={`font-medium ${formData.recordingLocation === option.value ? 'text-[#d4af37]' : 'text-white'}`}>
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 4: Contact Information */}
        {currentSection === 3 && (
          <div className={`space-y-8 ${mounted ? 'animate-fadeInUp' : ''}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 mb-6">
                {sections[3].icon}
              </div>
              <h2 className="font-display text-4xl font-medium mb-3 text-white">{sections[3].title}</h2>
              <p className="text-zinc-400 text-lg">How can we reach you?</p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-3">
                    Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-3">
                    Email Address <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-[#d4af37] focus:bg-white/8 transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <div className="text-center text-sm text-zinc-500">
              <p>By submitting this form, you agree to our privacy policy. Your information will only be used to contact you about your podcast project.</p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
          <button
            type="button"
            onClick={prevSection}
            disabled={currentSection === 0}
            className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              currentSection === 0
                ? 'bg-white/5 text-zinc-600 cursor-not-allowed'
                : 'bg-white/5 text-white border border-white/10 hover:border-white/20 hover:bg-white/8'
            }`}
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          {currentSection < sections.length - 1 ? (
            <button
              type="button"
              onClick={nextSection}
              className="group flex items-center gap-2 btn-premium px-8 py-3 text-base"
            >
              Next
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              className="group relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Submit</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
