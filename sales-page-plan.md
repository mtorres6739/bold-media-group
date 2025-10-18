# Bold Media Group Sales Page Architecture Plan

## Project Overview
Building a modern, clean sales page for Bold Media Group (Podcraft Pro) that helps business owners launch professional podcasts through full-service production.

## Technical Stack
- **Framework**: Next.js 15.5.4 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist (sans and mono)
- **Colors**: Black, Yellow, White brand scheme

## Page Structure & Sections

### 1. Hero Section
- Compelling headline: "Professional Podcast Production, Simplified"
- Subheadline: "From recording to release, we handle the technical details so you can focus on creating amazing content"
- Primary CTA: "Choose Your Package"
- Visual elements: Modern podcast studio imagery

### 2. Pricing Section
Three-tier pricing structure:
- **Starter Spark** ($299/mo): Entry-level package
- **Growth Pro** ($599/mo): Most popular option
- **Studio Premier** ($1499/mo): Premium solution

Each tier includes:
- Episode count
- Social media shorts
- Turnaround time
- Dedicated producer
- Additional features

### 3. Features Comparison Table
Detailed breakdown of:
- Core production features
- Content & distribution
- Marketing assets
- Support & workflow

### 4. Studio Showcase
Highlight professional equipment:
- Two camera setup
- Two microphones
- Audio mixer
- Lighting setup
- Acoustic-treated studio

### 5. FAQ Section
Common questions with expandable answers

### 6. Testimonials/Social Proof
Client success stories and testimonials

### 7. Footer
Contact information and links

## Design Principles
- **Modern & Clean**: Avoid generic AI website patterns
- **Brand Consistency**: Black/yellow/white color scheme
- **Responsive**: Mobile-first approach
- **Interactive**: Smooth animations and micro-interactions
- **Performance**: Optimized for speed and SEO

## Component Architecture
```
src/app/
├── page.tsx (main sales page)
├── components/
│   ├── Hero.tsx
│   ├── Pricing.tsx
│   ├── FeaturesTable.tsx
│   ├── StudioShowcase.tsx
│   ├── FAQ.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
└── globals.css (custom styling)
```

## Key Features to Implement
1. Interactive pricing cards with hover effects
2. Expandable FAQ items
3. Smooth scroll navigation
4. Mobile-responsive hamburger menu
5. Loading states and transitions
6. SEO optimization with proper meta tags

## Success Metrics
- Clear value proposition
- Easy pricing comparison
- Strong CTAs
- Professional appearance
- Mobile usability
- Fast loading times

## Next Steps
1. Set up component structure
2. Implement design system with brand colors
3. Build each section iteratively
4. Add animations and interactions
5. Optimize for performance
6. Test across devices and browsers