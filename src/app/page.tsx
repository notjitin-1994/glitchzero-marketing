import { Header } from '@/components/landing-page/header';
import { Hero } from '@/components/landing-page/hero';
import { Services } from '@/components/landing-page/services';
import { Benefits } from '@/components/landing-page/benefits';
import { Metrics } from '@/components/landing-page/metrics';
import { Cta } from '@/components/landing-page/cta';
import { Footer } from '@/components/landing-page/footer';

export default function GlitchZeroLandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Metrics />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
