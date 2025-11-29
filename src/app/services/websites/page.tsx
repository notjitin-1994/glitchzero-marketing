import { Footer } from '@/components/landing-page/footer';
import { Cta } from '@/components/landing-page/cta';
import { WebsitesPortfolioHero } from '@/components/service-pages/websites-portfolio-hero';
import { WebsitesPortfolioShowcase } from '@/components/service-pages/websites-portfolio-showcase';
import { WebsitesPortfolioProcess } from '@/components/service-pages/websites-portfolio-process';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Website Portfolio | GlitchZero',
  description: 'Explore our portfolio of meticulously crafted websites. From SaaS platforms to e-commerce solutions, discover how we bring digital visions to life with exceptional design and performance.',
  openGraph: {
    title: 'Website Portfolio | GlitchZero',
    description: 'Explore our portfolio of meticulously crafted websites. From SaaS platforms to e-commerce solutions, discover how we bring digital visions to life.',
    type: 'website',
  },
  twitter: {
    title: 'Website Portfolio | GlitchZero',
    description: 'Explore our portfolio of meticulously crafted websites. From SaaS platforms to e-commerce solutions, discover how we bring digital visions to life.',
  }
};

export default function WebsitesPortfolioPage() {
  return (
    <>
      <main>
        <WebsitesPortfolioHero />
        <WebsitesPortfolioShowcase />
        <WebsitesPortfolioProcess />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
