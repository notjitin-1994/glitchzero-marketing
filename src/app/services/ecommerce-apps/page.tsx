import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { EcommerceAppsHero } from '@/components/service-pages/ecommerce-apps-hero';
import { EcommerceAppsDetails } from '@/components/service-pages/ecommerce-apps-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Apps',
  description: 'Launch a high-performance online store on web, iOS, and Android. Our AI-accelerated process delivers feature-rich, scalable e-commerce platforms that convert visitors into loyal customers.',
  openGraph: {
    title: 'E-commerce Apps | GlitchZero',
    description: 'Launch a high-performance online store on web, iOS, and Android. Our AI-accelerated process delivers feature-rich, scalable e-commerce platforms that convert visitors into loyal customers.',
  },
  twitter: {
    title: 'E-commerce Apps | GlitchZero',
    description: 'Launch a high-performance online store on web, iOS, and Android. Our AI-accelerated process delivers feature-rich, scalable e-commerce platforms that convert visitors into loyal customers.',
  }
};

export default function EcommerceAppsPage() {
  return (
    <>
      <main>
        <EcommerceAppsHero />
        <EcommerceAppsDetails />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
