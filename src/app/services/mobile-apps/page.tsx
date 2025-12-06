import { Footer } from '@/components/landing-page/footer';
import { MobileappsHero } from '@/components/service-pages/mobileapps-hero';
import { MobileappsPortfolioShowcase } from '@/components/service-pages/mobileapps-portfolio-showcase';
import { MobileappsFeatures } from '@/components/service-pages/mobileapps-features';
import { ConsultationCta } from '@/components/service-pages/consultation-cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development | iOS & Android | GlitchZero',
  description: 'Launch your brand on Play Store and App Store. We develop beautiful, intuitive mobile apps using Flutter with AI-powered development to reduce time and cost.',
  openGraph: {
    title: 'Mobile App Development | iOS & Android | GlitchZero',
    description: 'Launch your brand on Play Store and App Store. Beautiful, intuitive mobile apps with unified codebases for iOS and Android.',
    type: 'website',
  },
  twitter: {
    title: 'Mobile App Development | iOS & Android | GlitchZero',
    description: 'Launch your brand on Play Store and App Store. Beautiful, intuitive mobile apps with unified codebases for iOS and Android.',
  }
};

export default function MobileAppsPage() {
  return (
    <>
      <main>
        <MobileappsHero />
        <MobileappsPortfolioShowcase />
        <MobileappsFeatures />
        <ConsultationCta
          headline="Ready to Launch Your App?"
          subheadline="From concept to App Store—we'll guide you through every step. Share your vision, and let's create something your users will love."
          benefits={[
            'Free app strategy consultation',
            'Platform recommendations (iOS, Android, or both)',
            'Realistic timeline & investment',
            'Post-launch support planning',
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
