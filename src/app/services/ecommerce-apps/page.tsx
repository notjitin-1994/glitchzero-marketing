import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { EcommerceAppsHero } from '@/components/service-pages/ecommerce-apps-hero';
import { EcommerceAppsDetails } from '@/components/service-pages/ecommerce-apps-details';

export default function EcommerceAppsPage() {
  return (
    <>
      <Header />
      <main>
        <EcommerceAppsHero />
        <EcommerceAppsDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
