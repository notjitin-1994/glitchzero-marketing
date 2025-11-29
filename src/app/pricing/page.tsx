import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { PricingHero } from '@/components/pricing-page/pricing-hero';
import { PricingDetails } from '@/components/pricing-page/pricing-details';

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
