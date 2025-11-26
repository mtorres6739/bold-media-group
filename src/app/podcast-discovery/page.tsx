import PodcastDiscoveryForm from '@/components/PodcastDiscoveryForm';
import { Metadata } from 'next';

// Force dynamic rendering to prevent stale cache
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Podcast Discovery Questionnaire | Bold Media Group',
  description: 'Complete our comprehensive podcast discovery questionnaire to help us create a customized podcast blueprint for your business.',
  keywords: 'podcast discovery, podcast questionnaire, podcast strategy, podcast planning, Bold Media Group',
  openGraph: {
    title: 'Podcast Discovery Questionnaire | Bold Media Group',
    description: 'Complete our comprehensive podcast discovery questionnaire to help us create a customized podcast blueprint for your business.',
    url: 'https://boldmediagroup.com/podcast-discovery',
    siteName: 'Bold Media Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bold Media Group - Podcast Discovery Questionnaire',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast Discovery Questionnaire | Bold Media Group',
    description: 'Complete our comprehensive podcast discovery questionnaire to help us create a customized podcast blueprint for your business.',
    images: ['/og-image.jpg'],
  },
};

export default function PodcastDiscoveryPage() {
  return <PodcastDiscoveryForm />;
}