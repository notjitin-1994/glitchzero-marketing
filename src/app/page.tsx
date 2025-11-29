import { Hero } from '@/components/landing-page/hero';
import { Services } from '@/components/landing-page/services';
import { Benefits } from '@/components/landing-page/benefits';
import { Testimonials } from '@/components/landing-page/testimonials';
import { Metrics } from '@/components/landing-page/metrics';
import { Cta } from '@/components/landing-page/cta';
import { Footer } from '@/components/landing-page/footer';

export default function GlitchZeroLandingPage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <Metrics />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
