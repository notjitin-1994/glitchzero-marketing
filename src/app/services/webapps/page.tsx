import { Footer } from '@/components/landing-page/footer';
import { WebappsHero } from '@/components/service-pages/webapps-hero';
import { WebappsFeatures } from '@/components/service-pages/webapps-features';
import { WebappsPortfolioShowcase } from '@/components/service-pages/webapps-portfolio-showcase';
import { ConsultationCta } from '@/components/service-pages/consultation-cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Web Applications | GlitchZero',
  description: 'Enterprise-grade web applications built for your unique business needs. Scalable architecture, real-time features, and seamless integrations—crafted to transform your operations.',
  openGraph: {
    title: 'Custom Web Applications | GlitchZero',
    description: 'Enterprise-grade web applications built for your unique business needs. Scalable architecture, real-time features, and seamless integrations.',
    type: 'website',
  },
  twitter: {
    title: 'Custom Web Applications | GlitchZero',
    description: 'Enterprise-grade web applications built for your unique business needs. Scalable architecture, real-time features, and seamless integrations.',
  }
};

export default function WebappsPage() {
  return (
    <>
      <main>
        <WebappsHero />
        <WebappsPortfolioShowcase />
        <WebappsFeatures />
        <ConsultationCta
          headline="Your Vision, Our Expertise"
          subheadline="Complex challenges deserve thoughtful solutions. Tell us about your project, and let's explore how a custom web application can transform your business."
          benefits={[
            'Free technical consultation',
            'Architecture recommendations',
            'Realistic timeline & budget',
            'No obligation—just clarity',
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
