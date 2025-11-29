import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { PrivacyPolicyHero } from '@/components/legal-pages/privacy-policy-hero';
import { PrivacyPolicyContent } from '@/components/legal-pages/privacy-policy-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the GlitchZero privacy policy to understand how we collect, use, and protect your personal and project information.',
   robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | GlitchZero',
    description: 'Read the GlitchZero privacy policy to understand how we collect, use, and protect your personal and project information.',
  },
  twitter: {
    title: 'Privacy Policy | GlitchZero',
    description: 'Read the GlitchZero privacy policy to understand how we collect, use, and protect your personal and project information.',
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main>
        <PrivacyPolicyHero />
        <PrivacyPolicyContent />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
