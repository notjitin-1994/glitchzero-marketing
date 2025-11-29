import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { TermsOfServiceHero } from '@/components/legal-pages/terms-of-service-hero';
import { TermsOfServiceContent } from '@/components/legal-pages/terms-of-service-content';

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
