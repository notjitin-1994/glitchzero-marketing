import { Footer } from '@/components/landing-page/footer';
import { DesktopAppsHero } from '@/components/service-pages/desktop-apps-hero';
import { DesktopAppsFeatures } from '@/components/service-pages/desktop-apps-features';
import { ConsultationCta } from '@/components/service-pages/consultation-cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desktop Applications | GlitchZero',
  description: 'Native desktop software for Windows and macOS. Offline-capable, blazing-fast applications for POS systems, inventory management, billing, and business operations.',
  openGraph: {
    title: 'Desktop Applications | GlitchZero',
    description: 'Native desktop software for Windows and macOS. Offline-capable, blazing-fast applications for POS systems, inventory management, and business operations.',
    type: 'website',
  },
  twitter: {
    title: 'Desktop Applications | GlitchZero',
    description: 'Native desktop software for Windows and macOS. Offline-capable, blazing-fast applications for POS systems, inventory management, and business operations.',
  }
};

export default function DesktopAppsPage() {
  return (
    <>
      <main>
        <DesktopAppsHero />
        <DesktopAppsFeatures />
        <ConsultationCta
          headline="Ready to Modernize Your Operations?"
          subheadline="Whether you're replacing legacy software or building something new, we'll help you create a desktop application that transforms how your team works."
          benefits={[
            'Free workflow analysis',
            'Hardware compatibility assessment',
            'Migration strategy included',
            'Training & support plans',
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
