import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { BusinessWebsitesHero } from '@/components/service-pages/business-websites-hero';
import { BusinessWebsitesDetails } from '@/components/service-pages/business-websites-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modern Business Websites',
  description: 'Get a professional, high-performance website delivered in record time. We build custom, on-brand sites on modern frameworks like Next.js, optimized for speed and SEO.',
  openGraph: {
    title: 'Modern Business Websites | GlitchZero',
    description: 'Get a professional, high-performance website delivered in record time. We build custom, on-brand sites on modern frameworks like Next.js, optimized for speed and SEO.',
  },
  twitter: {
    title: 'Modern Business Websites | GlitchZero',
    description: 'Get a professional, high-performance website delivered in record time. We build custom, on-brand sites on modern frameworks like Next.js, optimized for speed and SEO.',
  }
};

export default function BusinessWebsitesPage() {
  return (
    <>
      <main>
        <BusinessWebsitesHero />
        <BusinessWebsitesDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
