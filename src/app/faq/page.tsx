import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { FaqHero } from '@/components/legal-pages/faq-hero';
import { FaqContent } from '@/components/legal-pages/faq-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to frequently asked questions about our AI-accelerated development process, pricing, timelines, and post-launch support.',
  openGraph: {
    title: 'FAQ | GlitchZero',
    description: 'Find answers to frequently asked questions about our AI-accelerated development process, pricing, timelines, and post-launch support.',
  },
  twitter: {
    title: 'FAQ | GlitchZero',
    description: 'Find answers to frequently asked questions about our AI-accelerated development process, pricing, timelines, and post-launch support.',
  }
};

export default function FaqPage() {
  return (
    <>
      <main>
        <FaqHero />
        <FaqContent />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
