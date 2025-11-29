import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { BusinessSoftwareHero } from '@/components/service-pages/business-software-hero';
import { BusinessSoftwareDetails } from '@/components/service-pages/business-software-details';

export default function BusinessSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <BusinessSoftwareHero />
        <BusinessSoftwareDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
