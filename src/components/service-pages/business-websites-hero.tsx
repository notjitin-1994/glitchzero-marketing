import Link from 'next/link';

export function BusinessWebsitesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-carbon text-center">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="typo-tech text-signal text-xs">Our Services</Link>
        <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum mt-4">
          Professional Websites,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
            {' '}
            Delivered Instantly.
          </span>
        </h1>
        <p className="typo-subhead text-lg text-tungsten max-w-3xl mx-auto mt-8 leading-relaxed">
          Establish a powerful online presence with a stunning, high-speed website. We design and deploy beautiful sites that are optimized for search engines and all devices, getting your business in front of customers with unprecedented speed.
        </p>
      </div>
    </section>
  );
}
