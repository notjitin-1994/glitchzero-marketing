import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { PrivacyPolicyHero } from '@/components/legal-pages/privacy-policy-hero';
import { PrivacyPolicyContent } from '@/components/legal-pages/privacy-policy-content';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicyHero />
        <PrivacyPolicyContent />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
