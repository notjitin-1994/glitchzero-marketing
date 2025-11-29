import { Header } from '@/components/landing-page/header';
import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { WhyUsHero } from '@/components/why-us-page/why-us-hero';
import { CorePillars } from '@/components/why-us-page/core-pillars';
import { ProcessDeepDive } from '@/components/why-us-page/process-deep-dive';
import { TechShowcase } from '@/components/why-us-page/tech-showcase';

export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main>
        <WhyUsHero />
        <CorePillars />
        <ProcessDeepDive />
        <TechShowcase />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
