'use client';

import { useState } from 'react';

interface AIAssistantProps {
  onGenerateContent: (content: string) => void;
  currentContent: string;
  fieldName: string;
}

const contentStarters = {
  targetAudience: [
    "Small business owners aged 25-45 looking to scale their operations",
    "Marketing professionals in B2B tech companies",
    "Entrepreneurs seeking work-life balance strategies",
    "Healthcare administrators interested in digital transformation",
    "Financial advisors serving high-net-worth clients"
  ],
  listenerTakeaway: [
    "Actionable business strategies they can implement immediately",
    "Inspiration from real-world success stories and failures",
    "Practical tools and frameworks for professional growth",
    "Industry insights that give them a competitive edge",
    "Mindset shifts to overcome common business challenges"
  ],
  successMetrics: [
    "Generate 50 qualified leads per month through podcast mentions",
    "Establish thought leadership with 10,000 monthly downloads",
    "Build a community of 1,000 engaged email subscribers",
    "Secure 5 new client partnerships per quarter",
    "Increase website traffic by 40% through podcast content"
  ],
  podcastName: [
    "Business Growth Accelerator",
    "The Innovation Edge",
    "Leadership Legacy",
    "Scale Up Strategies",
    "The Entrepreneur's Journey"
  ],
  tagline: [
    "Where business leaders share their breakthrough moments",
    "Practical insights for ambitious entrepreneurs",
    "Transforming challenges into opportunities",
    "Your weekly dose of business wisdom",
    "Conversations that drive results"
  ],
  visualIdentity: [
    "Modern minimalist design with bold typography and a vibrant color palette",
    "Professional corporate aesthetic with clean lines and muted colors",
    "Creative and artistic approach with hand-drawn elements and warm tones",
    "Tech-inspired design with digital elements and a futuristic feel",
    "Classic and timeless look with elegant typography and sophisticated colors"
  ],
  musicStyle: [
    "Upbeat corporate music with motivational undertones",
    "Modern electronic beats with subtle energy",
    "Classical instrumental pieces with professional polish",
    "Acoustic guitar melodies with warm, inviting tones",
    "Jazz-infused tracks with sophisticated rhythm"
  ],
  episodeLength: [
    "20-30 minutes for focused, digestible content",
    "45-60 minutes for in-depth discussions and interviews",
    "10-15 minutes for quick tips and daily insights",
    "90+ minutes for comprehensive masterclass-style content",
    "Variable length based on topic complexity"
  ],
  frequency: [
    "Weekly episodes to maintain consistent audience engagement",
    "Bi-weekly releases to allow for deeper content preparation",
    "Monthly episodes for high-value, comprehensive topics",
    "Daily short episodes for habit formation and retention",
    "Seasonal releases with binge-able content drops"
  ],
  style: [
    "Solo host sharing expertise and insights",
    "Interview format with industry experts and thought leaders",
    "Co-hosted discussions with complementary perspectives",
    "Panel discussions with multiple expert viewpoints",
    "Storytelling format with narrative arcs and case studies"
  ],
  segments: [
    "Opening insights, guest interview, actionable takeaways, and resource spotlight",
    "Industry news deep dive, expert panel discussion, Q&A session, and trend forecast",
    "Success story showcase, strategy breakdown, implementation guide, and next steps",
    "Market analysis, guest expertise, practical application, and community highlights",
    "Challenge of the week, solution framework, case study, and growth opportunity"
  ],
  callToAction: [
    "Visit our website for exclusive resources and show notes",
    "Subscribe to our newsletter for additional insights and tips",
    "Join our community forum to connect with fellow listeners",
    "Schedule a consultation to discuss your specific challenges",
    "Download our free podcast resource guide"
  ],
  coreThemes: [
    "Digital transformation strategies, leadership development, and market expansion",
    "Customer experience innovation, team building, and sustainable growth",
    "Industry disruption, technology trends, and future-proofing businesses",
    "Financial literacy, investment strategies, and wealth creation",
    "Personal branding, networking mastery, and career advancement"
  ],
  dreamGuests: [
    "Industry CEOs, bestselling authors, and venture capitalists",
    "Tech innovators, marketing gurus, and business consultants",
    "Successful entrepreneurs, thought leaders, and industry analysts",
    "Award-winning executives, startup founders, and business coaches",
    "Market experts, research specialists, and business journalists"
  ],
  tone: [
    "Conversational and approachable with expert insights",
    "Professional and authoritative with data-driven content",
    "Inspirational and motivational with storytelling elements",
    "Educational and informative with practical applications",
    "Humorous and engaging with entertainment value"
  ],
  sensitiveTopics: [
    "Client confidentiality protocols and anonymization strategies",
    "Industry compliance requirements and legal considerations",
    "Personal privacy protection and consent procedures",
    "Controversial topic handling and balanced perspective maintenance",
    "Company policy adherence and internal information boundaries"
  ],
  recordingLocation: [
    "Professional studio with high-end equipment and soundproofing",
    "Home office setup with quality microphone and acoustic treatment",
    "In-studio recording at our professional Mesa, AZ facility",
    "Hybrid approach with studio for interviews and home for solo content",
    "On-location recording at events or client sites"
  ],
  equipmentNeeds: [
    "Professional microphone, audio interface, and acoustic treatment",
    "Video recording setup with lighting and camera equipment",
    "Professional studio equipment including cameras, microphones, and mixers",
    "Basic starter package with upgrade path as audience grows",
    "Complete production suite with editing and streaming capabilities"
  ],
  editingPreferences: [
    "Light touch editing with minimal post-production",
    "Polished production with music, transitions, and sound design",
    "Premium editing with custom intros, outros, and branded elements",
    "Documentary style with extensive research and fact-checking",
    "Live-to-tape recording with authentic, unedited conversations"
  ],
  publishingChannels: [
    "Spotify, Apple Podcasts, Google Podcasts, and Amazon Music",
    "YouTube video version with additional visual content",
    "Website embed with exclusive content and community features",
    "LinkedIn and other professional platforms for B2B audience",
    "Email newsletter with episode summaries and exclusive insights"
  ],
  hostingPlatform: [
    "Buzzsprout for user-friendly analytics and distribution",
    "Transistor for unlimited shows and advanced analytics",
    "Libsyn for reliable hosting and monetization options",
    "Podbean for all-in-one solution with live streaming",
    "Custom hosting for complete control and branding"
  ],
  promotionMethods: [
    "LinkedIn content strategy, email newsletter features, and collaborative cross-promotion",
    "Social media clips, blog post summaries, and community engagement campaigns",
    "Paid advertising on podcast platforms, influencer partnerships, and SEO optimization",
    "YouTube video versions, Instagram reels, and Twitter thread summaries",
    "Email marketing, guest appearances on other shows, and speaking event promotion"
  ],
  repurposingContent: [
    "Video clips for YouTube Shorts and Instagram Reels",
    "Blog posts summarizing key insights and takeaways",
    "Quote graphics and shareable social media content",
    "Email newsletter series with expanded content",
    "Downloadable resources and templates for audience"
  ],
  schedulingHandling: [
    "In-house team managing all aspects of production and promotion",
    "Hybrid approach with internal coordination and external production",
    "Full-service management by professional podcast agency",
    "DIY approach with tools and templates for self-management",
    "Collaborative model with shared responsibilities"
  ],
  marketingBudget: [
    "Bootstrap approach with organic growth and minimal investment",
    "Modest budget focused on essential tools and basic promotion",
    "Strategic investment in quality production and targeted advertising",
    "Comprehensive budget covering production, promotion, and growth initiatives",
    "Premium investment with full-service management and aggressive growth strategy"
  ],
  industryRegulations: [
    "Financial services compliance with SEC regulations and disclosure requirements",
    "Healthcare industry adherence to HIPAA and patient privacy standards",
    "Legal profession compliance with bar association rules and attorney-client privilege",
    "Educational sector adherence to FERPA and student privacy regulations",
    "General business compliance with FTC guidelines and advertising regulations"
  ],
  guestReleaseForms: [
    "Standard release form granting permission to use recording and likeness",
    "Comprehensive agreement covering content rights, distribution, and promotion",
    "Simple consent form with basic usage permissions",
    "Customized agreements for different guest types and content formats",
    "Digital consent system with automated tracking and management"
  ],
  copyrightConcerns: [
    "Royalty-free music library with commercial licensing",
    "Custom composed music with exclusive rights",
    "Creative Commons content with proper attribution",
    "Licensed mainstream music with appropriate permissions",
    "Original content creation to avoid copyright issues"
  ],
  roiMeasurement: [
    "Lead generation tracking with custom landing pages and conversion metrics",
    "Audience growth analytics with download numbers and engagement rates",
    "Brand awareness measurement through social media mentions and website traffic",
    "Customer acquisition cost analysis and lifetime value calculation",
    "Qualitative feedback through surveys and testimonials"
  ],
  transcriptsNeed: [
    "Full transcripts for accessibility and SEO optimization",
    "Summary transcripts with key points and takeaways",
    "Time-stamped transcripts for easy navigation and reference",
    "Multilingual transcripts for global audience reach",
    "No transcripts to focus on audio-only experience"
  ],
  monetizationPlans: [
    "Premium subscription content, exclusive workshops, and consulting services",
    "Sponsorship packages, affiliate partnerships, and product endorsements",
    "Online courses, mastermind groups, and paid newsletter subscriptions",
    "Live events, corporate training programs, and book deals",
    "Merchandise, licensing deals, and content syndication"
  ],
  businessIntegration: [
    "Content marketing funnel driving traffic to products and services",
    "Thought leadership platform establishing industry expertise",
    "Community building tool for customer engagement and retention",
    "Lead generation system for sales pipeline development",
    "Brand awareness vehicle for market positioning and growth"
  ]
};

export default function AIAssistant({ onGenerateContent, currentContent, fieldName }: AIAssistantProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showStarters, setShowStarters] = useState(false);

  const generateContent = async (prompt: string) => {
    setIsLoading(true);
    
    try {
      // Simulate AI generation - in a real implementation, this would call an AI API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      let generatedContent = '';
      
      // Generate content based on field name and prompt
      switch (fieldName) {
        case 'targetAudience':
          generatedContent = `${prompt} This audience consists of professionals who are actively seeking solutions to their daily challenges. They value practical advice, real-world examples, and strategies that have been proven to work in similar situations. They're typically time-poor but results-driven, preferring concise, actionable content over theoretical discussions. They appreciate content that respects their expertise while offering fresh perspectives.`;
          break;
        case 'listenerTakeaway':
          generatedContent = `Each episode will provide listeners with ${prompt.toLowerCase()}. The content is designed to be immediately applicable, with clear frameworks and step-by-step guidance. Listeners will walk away feeling empowered and equipped with tangible tools they can implement in their professional lives. The focus is on transformation, not just information, ensuring that each episode creates meaningful change in how they approach their work and challenges.`;
          break;
        case 'successMetrics':
          generatedContent = `Success will be measured through ${prompt.toLowerCase()}. We'll track download numbers, audience engagement rates, website traffic from podcast mentions, and lead generation metrics. Additionally, we'll monitor social media engagement, email newsletter growth, and client acquisition attributed to the podcast. Regular surveys will help us understand audience satisfaction and content relevance, ensuring we're delivering value that translates into business growth.`;
          break;
        case 'podcastName':
          generatedContent = prompt;
          break;
        case 'tagline':
          generatedContent = prompt;
          break;
        case 'visualIdentity':
          generatedContent = `${prompt} This visual approach will create a strong brand presence that resonates with your target audience. The design elements will be consistently applied across all touchpoints, including cover art, website, social media profiles, and promotional materials. This cohesive visual identity will help your podcast stand out in a crowded market while communicating the essence of your content at a glance.`;
          break;
        case 'musicStyle':
          generatedContent = `${prompt} This musical direction will set the tone for your podcast and create an emotional connection with listeners. The music will be carefully selected to complement your content style without overwhelming it. We'll ensure all music is properly licensed and can be consistently used across episodes to build audio brand recognition. The sound will help establish the mood and energy level of your show from the first moment listeners press play.`;
          break;
        case 'episodeLength':
          generatedContent = `${prompt} This duration allows for optimal content delivery while respecting your audience's time constraints. The length is carefully chosen to provide substantial value without losing listener attention. We'll structure each episode to make the most of this timeframe, ensuring a perfect balance between depth of content and engagement. This approach will help build listener habits and increase completion rates.`;
          break;
        case 'frequency':
          generatedContent = `${prompt} This release schedule will help build audience anticipation while maintaining content quality. The frequency is designed to keep your podcast top-of-mind without overwhelming your production capacity. We'll establish a consistent rhythm that listeners can rely on, helping to build a loyal audience base. This schedule also allows for adequate content preparation and promotion between episodes.`;
          break;
        case 'style':
          generatedContent = `${prompt} This format will create a unique listening experience that aligns with your content goals and audience preferences. We'll develop a consistent approach that listeners can expect while keeping each episode fresh and engaging. The style will be reflected in everything from episode structure to conversation flow, creating a signature sound for your podcast. This approach will help differentiate your show in a competitive landscape.`;
          break;
        case 'segments':
          generatedContent = `Each episode will feature ${prompt.toLowerCase()}. This structure provides a predictable rhythm that listeners can rely on while keeping the content engaging and dynamic. Segments are designed to build upon each other, creating a cohesive narrative that takes listeners on a journey from problem to solution. The format allows for natural breaks in longer discussions while maintaining momentum throughout the episode.`;
          break;
        case 'callToAction':
          generatedContent = `${prompt} This call-to-action strategy will drive meaningful engagement beyond just listening. We'll implement a clear, compelling approach that encourages specific audience behaviors without feeling overly promotional. The CTA will be naturally integrated into each episode and reinforced through additional channels. This will help convert passive listeners into active community members and potential customers.`;
          break;
        case 'coreThemes':
          generatedContent = `The podcast will explore ${prompt.toLowerCase()}. Each theme will be examined through multiple lenses, providing listeners with comprehensive insights. We'll feature expert interviews, case studies, and practical applications that demonstrate how these concepts apply in real-world scenarios. The content will balance evergreen principles with cutting-edge developments, ensuring long-term relevance while staying current with industry trends.`;
          break;
        case 'dreamGuests':
          generatedContent = `Ideal guests include ${prompt.toLowerCase()}. These individuals bring credibility, diverse perspectives, and valuable insights that enrich our content. They should be thought leaders who can share both successes and failures, providing listeners with authentic learning experiences. We'll prioritize guests who are excellent communicators and can break down complex topics into accessible, actionable advice.`;
          break;
        case 'tone':
          generatedContent = `${prompt} This tone will create a consistent personality for your podcast that resonates with your target audience. We'll maintain this voice throughout all episodes while allowing for natural variation based on topic and guest. The tone will guide everything from word choice to conversation style, helping to build a strong connection with listeners. This approach will make your podcast feel like a trusted friend or mentor to your audience.`;
          break;
        case 'sensitiveTopics':
          generatedContent = `${prompt} This approach will ensure your podcast navigates complex subjects with appropriate care and professionalism. We'll establish clear guidelines for discussing sensitive topics that balance transparency with responsibility. The strategy will include pre-recording briefings, post-production review, and when necessary, legal consultation. This will protect both your guests and your audience while maintaining the integrity of your content.`;
          break;
        case 'recordingLocation':
          generatedContent = `${prompt} This recording setup will ensure consistent audio quality and production value. We'll optimize the environment for excellent sound capture while maintaining comfort for hosts and guests. The location choice will reflect your brand image and practical needs, whether that's professional polish or authentic intimacy. We'll implement backup systems and quality control measures to guarantee reliable recording sessions.`;
          break;
        case 'equipmentNeeds':
          generatedContent = `${prompt} This equipment configuration will deliver professional audio quality that meets industry standards. We'll select tools that balance performance, ease of use, and budget considerations. The setup will be scalable to grow with your podcast while maintaining consistent quality. We'll also provide training and support to ensure comfortable operation of all equipment. This investment will signal professionalism to both guests and listeners.`;
          break;
        case 'editingPreferences':
          generatedContent = `${prompt} This editing approach will shape the final sound and feel of your podcast. We'll establish a consistent style that enhances content while maintaining authenticity. The editing will include quality control, content optimization, and brand element integration. We'll create templates and workflows to ensure efficiency while allowing for creative flexibility. This will result in a polished product that sounds professional and engaging.`;
          break;
        case 'publishingChannels':
          generatedContent = `${prompt} This distribution strategy will maximize your podcast's reach and accessibility. We'll optimize content for each platform while maintaining consistent branding. The multi-channel approach will meet listeners where they already consume content, lowering barriers to discovery. We'll implement platform-specific strategies to leverage each channel's unique features and audience behaviors. This comprehensive approach will help grow your audience across multiple ecosystems.`;
          break;
        case 'hostingPlatform':
          generatedContent = `${prompt} This hosting solution will provide reliable distribution and valuable analytics for your podcast. We'll select a platform that offers the right balance of features, usability, and scalability. The hosting will ensure fast delivery, comprehensive analytics, and monetization options. We'll also implement proper SEO and discovery tools to maximize visibility across podcast directories. This foundation will support your podcast's growth and technical requirements.`;
          break;
        case 'promotionMethods':
          generatedContent = `Promotion will focus on ${prompt.toLowerCase()}. We'll create a comprehensive strategy that maximizes reach while maintaining authenticity. Content will be repurposed across multiple platforms to meet audiences where they are most active. We'll leverage guest networks, cross-promotion opportunities, and community building to create sustainable growth. All promotional efforts will be tracked and optimized based on performance data.`;
          break;
        case 'repurposingContent':
          generatedContent = `${prompt} This content repurposing strategy will extend the value of each episode across multiple formats and platforms. We'll create a systematic approach to transform audio content into visual, text, and interactive formats. This will maximize reach while reinforcing key messages through different media types. The repurposed content will drive traffic back to the full episodes while building a comprehensive content ecosystem around your podcast.`;
          break;
        case 'schedulingHandling':
          generatedContent = `${prompt} This approach to scheduling and management will ensure consistent, high-quality episode production. We'll establish clear workflows, responsibilities, and timelines for all aspects of podcast creation. The system will include content planning, guest coordination, recording, editing, and publication processes. We'll implement project management tools and communication protocols to keep everything running smoothly. This will create a sustainable production model that can scale with your podcast.`;
          break;
        case 'marketingBudget':
          generatedContent = `${prompt} This budget allocation will support strategic growth while maximizing return on investment. We'll prioritize spending on activities that directly contribute to audience growth and business objectives. The budget will be flexible to allow for experimentation and optimization based on performance data. We'll implement tracking systems to measure the effectiveness of each expenditure and adjust strategy accordingly. This will ensure your marketing dollars are working efficiently to grow your podcast.`;
          break;
        case 'industryRegulations':
          generatedContent = `${prompt} This regulatory awareness will ensure your podcast operates within all applicable legal and ethical boundaries. We'll implement compliance checks and content review processes specific to your industry. The approach will include documentation, staff training, and when necessary, legal consultation. We'll stay current on evolving regulations and adapt content practices accordingly. This will protect your business while maintaining audience trust and credibility.`;
          break;
        case 'guestReleaseForms':
          generatedContent = `${prompt} This approach to guest permissions will ensure proper legal coverage while maintaining positive relationships. We'll implement a streamlined process for obtaining and managing release forms that protects both parties. The system will include digital signatures, centralized storage, and expiration tracking. We'll customize forms to address specific content types and usage scenarios. This will provide legal protection while demonstrating professionalism to your guests.`;
          break;
        case 'copyrightConcerns':
          generatedContent = `${prompt} This copyright strategy will ensure all content is properly licensed and protected. We'll implement clear guidelines for using third-party content and establish systems for tracking permissions. The approach will include music licensing, image rights, and content attribution protocols. We'll also develop strategies for protecting your original content from unauthorized use. This will prevent legal issues while respecting intellectual property rights.`;
          break;
        case 'roiMeasurement':
          generatedContent = `${prompt} This measurement framework will provide clear insights into your podcast's performance and business impact. We'll implement tracking systems that connect podcast activities to specific business outcomes. The approach will include both quantitative metrics and qualitative assessments. We'll establish regular reporting processes to analyze performance and optimize strategy. This will demonstrate the value of your podcast investment while identifying improvement opportunities.`;
          break;
        case 'transcriptsNeed':
          generatedContent = `${prompt} This transcript strategy will enhance accessibility and searchability of your podcast content. We'll implement a systematic approach to creating, formatting, and distributing episode transcripts. The transcripts will be optimized for SEO while providing value to hearing-impaired audiences and those who prefer text content. We'll also explore ways to leverage transcripts for additional content creation and audience engagement. This will make your podcast more accessible and discoverable.`;
          break;
        case 'monetizationPlans':
          generatedContent = `Monetization will be achieved through ${prompt.toLowerCase()}. We'll prioritize revenue streams that align with your audience's needs and provide genuine value. All monetization will be implemented gradually to maintain trust and audience experience. We'll focus on building long-term relationships rather than short-term gains, ensuring sustainable growth that benefits both the podcast and our listeners.`;
          break;
        case 'businessIntegration':
          generatedContent = `${prompt} This integration strategy will ensure your podcast supports and enhances your broader business objectives. We'll create clear connections between podcast content and business offerings without being overly promotional. The approach will include cross-promotion, content synergy, and audience flow between podcast and other business channels. We'll measure the impact on business metrics to demonstrate the podcast's value beyond just audience numbers.`;
          break;
        default:
          generatedContent = `Based on your input about ${prompt}, here's an expanded version that provides more detail and context: ${prompt} This approach ensures comprehensive coverage of the topic while maintaining clarity and focus. The content is structured to be both informative and engaging, providing value to listeners while supporting your overall podcast objectives.`;
      }
      
      onGenerateContent(generatedContent);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const expandOnCurrentContent = async () => {
    if (!currentContent.trim()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate AI expansion - in a real implementation, this would call an AI API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const expandedContent = `${currentContent} 

Building on this foundation, let's explore the key implications and opportunities. This approach opens up several important considerations that deserve deeper attention. 

First, the strategic alignment with your business objectives creates a natural synergy that amplifies impact. By focusing on these core elements, you create a cohesive narrative that resonates with your target audience while supporting your broader goals.

Second, the implementation framework should be both systematic and flexible. This allows for consistent execution while adapting to feedback and changing circumstances. The key is establishing clear metrics and regular review points to ensure continuous improvement.

Finally, consider the long-term sustainability of this approach. Building in mechanisms for evolution and growth ensures that your efforts remain relevant and effective over time. This forward-thinking perspective positions you for sustained success and meaningful impact.`;
      
      onGenerateContent(expandedContent);
    } catch (error) {
      console.error('Error expanding content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarterClick = (starter: string) => {
    generateContent(starter);
    setShowStarters(false);
  };

  return (
    <div className="relative">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setShowStarters(!showStarters)}
          className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors duration-200"
          disabled={isLoading}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {isLoading ? 'Generating...' : 'AI Starters'}
        </button>
        
        {currentContent.trim() && (
          <button
            type="button"
            onClick={expandOnCurrentContent}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-200"
            disabled={isLoading}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {isLoading ? 'Expanding...' : 'Expand'}
          </button>
        )}
      </div>

      {showStarters && contentStarters[fieldName as keyof typeof contentStarters] && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50 p-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Click to use a starter:</h4>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {contentStarters[fieldName as keyof typeof contentStarters].map((starter, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleStarterClick(starter)}
                className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors duration-200"
              >
                {starter}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}