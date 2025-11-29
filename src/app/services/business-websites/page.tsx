import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { BusinessWebsitesHero } from '@/components/service-pages/business-websites-hero';
import { BusinessWebsitesDetails } from '@/components/service-pages/business-websites-details';

export default function BusinessWebsitesPage() {
  return (
    <>
      <Header />
      <main>
        <BusinessWebsitesHero />
        <BusinessWebsitesDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
