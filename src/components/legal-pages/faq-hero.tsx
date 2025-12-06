"use client";

import { NeuroBackground } from '@/components/ui/neuro-background';
import { ContrastText, ContrastWrapper } from '@/components/ui/contrast-text';

export function FaqHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-carbon text-center overflow-hidden">
      <NeuroBackground colorTheme="signal" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60 pointer-events-none z-[1]" />
      <ContrastWrapper className="max-w-4xl mx-auto relative z-10">
        <span className="typo-tech text-signal text-xs">Support</span>
        <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum mt-4">
          <ContrastText as="span" variant="monochrome">Frequently Asked Questions</ContrastText>
        </h1>
        <p className="typo-subhead text-lg text-tungsten max-w-3xl mx-auto mt-8 leading-relaxed">
          Have questions? We've got answers. Here are some of the most common queries we receive about our process, pricing, and services.
        </p>
      </ContrastWrapper>
    </section>
  );
}
