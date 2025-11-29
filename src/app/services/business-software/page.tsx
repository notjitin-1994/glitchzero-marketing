import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { BusinessSoftwareHero } from '@/components/service-pages/business-software-hero';
import { BusinessSoftwareDetails } from '@/components/service-pages/business-software-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Business Software',
  description: 'Custom desktop software for your unique workflow. We rapidly build solutions for inventory, billing, CRM, and more for Windows & Mac, with no monthly fees.',
  openGraph: {
    title: 'Custom Business Software | GlitchZero',
    description: 'Custom desktop software for your unique workflow. We rapidly build solutions for inventory, billing, CRM, and more for Windows & Mac, with no monthly fees.',
  },
  twitter: {
    title: 'Custom Business Software | GlitchZero',
    description: 'Custom desktop software for your unique workflow. We rapidly build solutions for inventory, billing, CRM, and more for Windows & Mac, with no monthly fees.',
  }
};

export default function BusinessSoftwarePage() {
  return (
    <>
      <main>
        <BusinessSoftwareHero />
        <BusinessSoftwareDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
