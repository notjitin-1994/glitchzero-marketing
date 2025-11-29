import { Header } from '@/components/landing-page/header';
import { Hero } from '@/components/landing-page/hero';
import { Services } from '@/components/landing-page/services';
import { Platforms } from '@/components/landing-page/platforms';
import { WhyUs } from '@/components/landing-page/why-us';
import { Testimonials } from '@/components/landing-page/testimonials';
import { Contact } from '@/components/landing-page/contact';
import { Footer } from '@/components/landing-page/footer';

export default function DigitalDishaLandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Platforms />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
