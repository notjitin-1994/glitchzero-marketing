import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { FaqHero } from '@/components/legal-pages/faq-hero';
import { FaqContent } from '@/components/legal-pages/faq-content';

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <FaqHero />
        <FaqContent />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
