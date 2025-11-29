import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { AppMaintenanceHero } from '@/components/service-pages/app-maintenance-hero';
import { AppMaintenanceDetails } from '@/components/service-pages/app-maintenance-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website & App Maintenance',
  description: 'Proactive maintenance plans for websites and apps. We use AI to monitor uptime, apply security patches, and ensure your digital products are always performing at their best.',
  openGraph: {
    title: 'Website & App Maintenance | GlitchZero',
    description: 'Proactive maintenance plans for websites and apps. We use AI to monitor uptime, apply security patches, and ensure your digital products are always performing at their best.',
  },
  twitter: {
    title: 'Website & App Maintenance | GlitchZero',
    description: 'Proactive maintenance plans for websites and apps. We use AI to monitor uptime, apply security patches, and ensure your digital products are always performing at their best.',
  }
};

export default function AppMaintenancePage() {
  return (
    <>
      <main>
        <AppMaintenanceHero />
        <AppMaintenanceDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
