export function PricingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-carbon text-center">
      <div className="max-w-4xl mx-auto">
        <span className="typo-tech text-signal text-xs">Transparent Pricing</span>
        <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum mt-4">
          Fair Prices,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
            {' '}
            Unfair Advantage.
          </span>
        </h1>
        <p className="typo-subhead text-lg text-tungsten max-w-3xl mx-auto mt-8 leading-relaxed">
          Our AI-driven efficiency means we deliver enterprise-grade digital
          products at prices that make sense for small and growing businesses
          in India. No complex retainers, no hidden fees—just clear, upfront
          pricing that gets you to market faster.
        </p>
      </div>
    </section>
  );
}
