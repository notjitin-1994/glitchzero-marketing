import Link from 'next/link';

export function AppMaintenanceHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-carbon text-center">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="typo-tech text-signal text-xs">Our Services</Link>
        <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum mt-4">
          Website & App Maintenance,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
            {' '}
            Intelligently Automated.
          </span>
        </h1>
        <p className="typo-subhead text-lg text-tungsten max-w-3xl mx-auto mt-8 leading-relaxed">
          Your digital presence is live, but the work isn't over. We provide proactive maintenance for websites and apps, using AI to monitor, update, and secure your products so you can focus on your business.
        </p>
      </div>
    </section>
  );
}
