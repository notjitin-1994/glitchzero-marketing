import Link from 'next/link';

export function EcommerceAppsHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-carbon text-center">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="typo-tech text-signal text-xs">Our Services</Link>
        <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum mt-4">
          E-commerce Apps,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
            {' '}
            Built to Sell.
          </span>
        </h1>
        <p className="typo-subhead text-lg text-tungsten max-w-3xl mx-auto mt-8 leading-relaxed">
          Launch a high-performance online store on web, iOS, and Android. Our AI-accelerated process delivers a feature-rich, scalable e-commerce platform that converts visitors into loyal customers, faster than you thought possible.
        </p>
      </div>
    </section>
  );
}
