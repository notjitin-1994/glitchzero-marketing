import { Footer } from '@/components/landing-page/footer';
import { ServicesHero } from '@/components/services-page/services-hero';
import { ServicesDetails } from '@/components/services-page/services-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our digital solutions: modern websites, custom web and mobile apps, business software, and IoT systems. Built faster with our AI-accelerated development platform.',
  openGraph: {
    title: 'Our Services | GlitchZero',
    description: 'Explore our digital solutions: modern websites, custom web and mobile apps, business software, and IoT systems. Built faster with our AI-accelerated development platform.',
  },
  twitter: {
    title: 'Our Services | GlitchZero',
    description: 'Explore our digital solutions: modern websites, custom web and mobile apps, business software, and IoT systems. Built faster with our AI-accelerated development platform.',
  }
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <ServicesHero />
        <ServicesDetails />
      </main>
      <Footer />
    </>
  );
}
