import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { BillingSoftwareHero } from '@/components/service-pages/billing-software-hero';
import { BillingSoftwareDetails } from '@/components/service-pages/billing-software-details';

export default function BillingSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <BillingSoftwareHero />
        <BillingSoftwareDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
