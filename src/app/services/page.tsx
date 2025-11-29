import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { ServicesHero } from '@/components/services-page/services-hero';
import { ServicesDetails } from '@/components/services-page/services-details';
import { Cta } from '@/components/landing-page/cta';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
