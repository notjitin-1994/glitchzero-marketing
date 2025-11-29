import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { TermsOfServiceHero } from '@/components/legal-pages/terms-of-service-hero';
import { TermsOfServiceContent } from '@/components/legal-pages/terms-of-service-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the GlitchZero terms of service. This binding contract governs your use of our development and maintenance services.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | GlitchZero',
    description: 'Review the GlitchZero terms of service. This binding contract governs your use of our development and maintenance services.',
  },
  twitter: {
    title: 'Terms of Service | GlitchZero',
    description: 'Review the GlitchZero terms of service. This binding contract governs your use of our development and maintenance services.',
  }
};


export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main>
        <TermsOfServiceHero />
        <TermsOfServiceContent />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
