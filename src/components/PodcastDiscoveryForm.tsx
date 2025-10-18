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
    { title: 'Vision & Goals', icon: '🎯' },
    { title: 'Podcast Details', icon: '🎙️' },
    { title: 'Content & Production', icon: '💡' },
    { title: 'Contact Information', icon: '📞' }
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
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className={`max-w-2xl mx-auto text-center ${mounted ? 'animate-fadeInUp' : ''}`}>
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Thank You!</h2>
          <p className="text-xl text-gray-300 mb-6">
            Your podcast discovery questionnaire has been submitted successfully.
          </p>
          <p className="text-lg text-gray-400">
            Our team will review your responses and create a customized podcast blueprint for your business. We'll be in touch within 24-48 hours to discuss your podcast strategy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-yellow-400">Podcast Discovery Questionnaire</h1>
            {mounted && (
              <span className="text-sm text-gray-400">
                Section {currentSection + 1} of {sections.length}
              </span>
            )}
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
              style={{ width: mounted ? `${((currentSection + 1) / sections.length) * 100}%` : '25%' }}
            ></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSection(index)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  index === currentSection
                    ? 'bg-yellow-400 text-black'
                    : index < currentSection
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <span className="mr-1">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Vision & Goals */}
        {currentSection === 0 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">{sections[0].icon} {sections[0].title}</h2>
              <p className="text-gray-400">Let's understand the foundation of your podcast vision</p>
            </div>

            <div>
              <label htmlFor="whyPodcast" className="block text-sm font-medium mb-2">
                Why do you want a podcast? *
              </label>
              <select
                id="whyPodcast"
                name="whyPodcast"
                required
                value={formData.whyPodcast}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
              >
                <option value="" className="bg-gray-800">Select primary motivation</option>
                <option value="brand-authority" className="bg-gray-800">Brand Authority</option>
                <option value="lead-generation" className="bg-gray-800">Lead Generation</option>
                <option value="education" className="bg-gray-800">Education</option>
                <option value="networking" className="bg-gray-800">Networking</option>
                <option value="entertainment" className="bg-gray-800">Entertainment</option>
                <option value="multiple" className="bg-gray-800">Multiple Reasons</option>
              </select>
            </div>

            <div>
              <label htmlFor="targetAudience" className="block text-sm font-medium mb-2">
                Who is your target audience? *
              </label>
              <div className="space-y-2">
                <div className="relative">
                  <textarea
                    id="targetAudience"
                    name="targetAudience"
                    required
                    rows={3}
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300 pr-12"
                    placeholder="Describe your ideal listeners (clients, prospects, peers, local community, national reach, etc.)"
                  ></textarea>
                  <div className="absolute bottom-2 right-2">
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
              <label htmlFor="successMetrics" className="block text-sm font-medium mb-2">
                What does success look like after 6-12 months?
              </label>
              <div className="space-y-2">
                <div className="relative">
                  <textarea
                    id="successMetrics"
                    name="successMetrics"
                    rows={3}
                    value={formData.successMetrics}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300 pr-12"
                    placeholder="Download numbers, lead generation, brand recognition, etc."
                  ></textarea>
                  <div className="absolute bottom-2 right-2">
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
        )}




        {/* Section 2: Podcast Details */}
        {currentSection === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">{sections[1].icon} {sections[1].title}</h2>
              <p className="text-gray-400">Tell us about your podcast format and structure</p>
            </div>

            <div>
              <label htmlFor="podcastName" className="block text-sm font-medium mb-2">
                Podcast name ideas
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  id="podcastName"
                  name="podcastName"
                  value={formData.podcastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="List your top podcast name ideas"
                />
                <AIAssistant
                  onGenerateContent={(content) => setFormData(prev => ({ ...prev, podcastName: content }))}
                  currentContent={formData.podcastName}
                  fieldName="podcastName"
                />
              </div>
            </div>

            <div>
              <label htmlFor="episodeLength" className="block text-sm font-medium mb-2">
                Episode length
              </label>
              <div className="space-y-2">
                <select
                  id="episodeLength"
                  name="episodeLength"
                  value={formData.episodeLength}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select episode length</option>
                  <option value="15-min" className="bg-gray-800">15 minutes (quick hits)</option>
                  <option value="30-min" className="bg-gray-800">30-40 minutes (standard)</option>
                  <option value="60-min" className="bg-gray-800">60+ minutes (deep dives)</option>
                  <option value="variable" className="bg-gray-800">Variable length</option>
                </select>
                <AIAssistant
                  onGenerateContent={(content) => setFormData(prev => ({ ...prev, episodeLength: content }))}
                  currentContent={formData.episodeLength}
                  fieldName="episodeLength"
                />
              </div>
            </div>

            <div>
              <label htmlFor="frequency" className="block text-sm font-medium mb-2">
                Publishing frequency
              </label>
              <div className="space-y-2">
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select frequency</option>
                  <option value="weekly" className="bg-gray-800">Weekly</option>
                  <option value="bi-weekly" className="bg-gray-800">Bi-weekly</option>
                  <option value="monthly" className="bg-gray-800">Monthly</option>
                  <option value="seasonal" className="bg-gray-800">Seasonal (batches)</option>
                </select>
                <AIAssistant
                  onGenerateContent={(content) => setFormData(prev => ({ ...prev, frequency: content }))}
                  currentContent={formData.frequency}
                  fieldName="frequency"
                />
              </div>
            </div>

            <div>
              <label htmlFor="style" className="block text-sm font-medium mb-2">
                Podcast style
              </label>
              <div className="space-y-2">
                <select
                  id="style"
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select style</option>
                  <option value="solo" className="bg-gray-800">Solo host</option>
                  <option value="interviews" className="bg-gray-800">Interviews</option>
                  <option value="co-hosts" className="bg-gray-800">Co-hosts</option>
                  <option value="panel" className="bg-gray-800">Panel discussions</option>
                  <option value="mixed" className="bg-gray-800">Mixed format</option>
                </select>
                <AIAssistant
                  onGenerateContent={(content) => setFormData(prev => ({ ...prev, style: content }))}
                  currentContent={formData.style}
                  fieldName="style"
                />
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Content & Production */}
        {currentSection === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">{sections[2].icon} {sections[2].title}</h2>
              <p className="text-gray-400">Let's plan your content and production needs</p>
            </div>

            <div>
              <label htmlFor="coreThemes" className="block text-sm font-medium mb-2">
                Core themes or topics
              </label>
              <div className="space-y-2">
                <div className="relative">
                  <textarea
                    id="coreThemes"
                    name="coreThemes"
                    rows={3}
                    value={formData.coreThemes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300 pr-12"
                    placeholder="Industry trends, business tips, personal stories, client case studies, etc."
                  ></textarea>
                  <div className="absolute bottom-2 right-2">
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

            <div>
              <label htmlFor="recordingLocation" className="block text-sm font-medium mb-2">
                Recording location
              </label>
              <div className="space-y-2">
                <select
                  id="recordingLocation"
                  name="recordingLocation"
                  value={formData.recordingLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select recording location</option>
                  <option value="in-office" className="bg-gray-800">In-office</option>
                  <option value="studio" className="bg-gray-800">Professional studio</option>
                  <option value="remote" className="bg-gray-800">Remote/Zoom</option>
                  <option value="mixed" className="bg-gray-800">Mixed locations</option>
                </select>
                <AIAssistant
                  onGenerateContent={(content) => setFormData(prev => ({ ...prev, recordingLocation: content }))}
                  currentContent={formData.recordingLocation}
                  fieldName="recordingLocation"
                />
              </div>
            </div>
          </div>
        )}


        {/* Section 4: Contact Information */}
        {currentSection === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">{sections[3].icon} {sections[3].title}</h2>
              <p className="text-gray-400">How can we reach you?</p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <button
            type="button"
            onClick={prevSection}
            disabled={currentSection === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              currentSection === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            ← Previous
          </button>

          {currentSection < sections.length - 1 ? (
            <button
              type="button"
              onClick={nextSection}
              className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-all duration-300"
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all duration-300"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

