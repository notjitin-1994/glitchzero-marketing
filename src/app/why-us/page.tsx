import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { WhyUsHero } from '@/components/why-us-page/why-us-hero';
import { CorePillars } from '@/components/why-us-page/core-pillars';
import { ProcessDeepDive } from '@/components/why-us-page/process-deep-dive';
import { TechShowcase } from '@/components/why-us-page/tech-showcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Us',
  description: 'Discover the GlitchZero advantage: unmatched speed, intelligent affordability, and direct human support. Learn how our AI-powered process delivers superior digital products, faster.',
  openGraph: {
    title: 'Why Us | GlitchZero',
    description: 'Discover the GlitchZero advantage: unmatched speed, intelligent affordability, and direct human support. Learn how our AI-powered process delivers superior digital products, faster.',
  },
  twitter: {
    title: 'Why Us | GlitchZero',
    description: 'Discover the GlitchZero advantage: unmatched speed, intelligent affordability, and direct human support. Learn how our AI-powered process delivers superior digital products, faster.',
  }
};

export default function WhyUsPage() {
  return (
    <>
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
