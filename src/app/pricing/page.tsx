import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { PricingHero } from '@/components/pricing-page/pricing-hero';
import { PricingDetails } from '@/components/pricing-page/pricing-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Investment-grade engineering for India\'s growth-stage companies. Custom proposals for enterprise-grade platforms delivered in 8-12 weeks. Transparent pricing, fixed scope, no hidden fees.',
  openGraph: {
    title: 'Pricing | GlitchZero',
    description: 'Investment-grade engineering for India\'s growth-stage companies. Custom proposals for enterprise-grade platforms delivered in 8-12 weeks. Transparent pricing, fixed scope, no hidden fees.',
  },
  twitter: {
    title: 'Pricing | GlitchZero',
    description: 'Investment-grade engineering for India\'s growth-stage companies. Custom proposals for enterprise-grade platforms delivered in 8-12 weeks. Transparent pricing, fixed scope, no hidden fees.',
  }
};

export default function PricingPage() {
  return (
    <>
      <main>
        <PricingHero />
        <PricingDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
