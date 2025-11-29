'use client';

import { TransitionLink } from '@/components/ui/page-transition';

export function BusinessSoftwareHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-carbon text-center">
      <div className="max-w-4xl mx-auto">
        <TransitionLink href="/services" className="typo-tech text-signal text-xs">Our Services</TransitionLink>
        <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum mt-4">
          Custom Business Software,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
            {' '}
            Built for Your Workflow.
          </span>
        </h1>
        <p className="typo-subhead text-lg text-tungsten max-w-3xl mx-auto mt-8 leading-relaxed">
          Replace clunky spreadsheets and expensive subscriptions with simple, powerful software designed for your exact business needs. We rapidly build and deploy custom solutions for desktop that streamline your operations.
        </p>
      </div>
    </section>
  );
}
