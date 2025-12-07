import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import StudioShowcase from '@/components/StudioShowcase';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Pricing />
      <StudioShowcase />
      <FAQ />
    </main>
  );
}
