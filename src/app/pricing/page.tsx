import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { PricingHero } from '@/components/pricing-page/pricing-hero';
import { PricingDetails } from '@/components/pricing-page/pricing-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Affordable and transparent pricing for websites, mobile apps, and custom software. See how our AI-driven efficiency offers an unfair advantage for Indian businesses.',
  openGraph: {
    title: 'Pricing | GlitchZero',
    description: 'Affordable and transparent pricing for websites, mobile apps, and custom software. See how our AI-driven efficiency offers an unfair advantage for Indian businesses.',
  },
  twitter: {
    title: 'Pricing | GlitchZero',
    description: 'Affordable and transparent pricing for websites, mobile apps, and custom software. See how our AI-driven efficiency offers an unfair advantage for Indian businesses.',
  }
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
