import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { AppMaintenanceHero } from '@/components/service-pages/app-maintenance-hero';
import { AppMaintenanceDetails } from '@/components/service-pages/app-maintenance-details';

export default function AppMaintenancePage() {
  return (
    <>
      <Header />
      <main>
        <AppMaintenanceHero />
        <AppMaintenanceDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
