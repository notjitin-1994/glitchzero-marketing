"use client";

import { Receipt, CheckCircle2, IndianRupee, Sparkles, Ban, FileText } from 'lucide-react';
import { NeuroBackground } from '@/components/ui/neuro-background';
import { ContrastText, ContrastWrapper } from '@/components/ui/contrast-text';

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <NeuroBackground colorTheme="ember" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60 pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-carbon/20 to-transparent pointer-events-none z-[1]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <ContrastWrapper className="space-y-8 z-10 order-2 lg:order-1">
          <span className="typo-tech text-signal text-xs">Transparent Pricing</span>
          <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
            <ContrastText as="span" variant="monochrome">Fair Prices,</ContrastText>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
              {' '}
              Unfair Advantage.
            </span>
          </h1>
          <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
            Our AI-driven efficiency means we deliver enterprise-grade digital
            products at prices that make sense for small and growing businesses
            in India. No complex retainers, no hidden fees—just clear, upfront
            pricing.
          </p>
        </ContrastWrapper>

        <div className="relative group order-1 lg:order-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <div className="relative bg-obsidian border border-carbon rounded-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-carbon pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-platinum" />
                </div>
                <div>
                  <span className="typo-subhead text-sm text-platinum block">Project Estimate</span>
                  <span className="typo-tech text-[10px] text-terminal">● All Inclusive</span>
                </div>
              </div>
              <Receipt className="w-4 h-4 text-tungsten" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-carbon/50">
                <span className="typo-subhead text-sm text-tungsten">Design & UI/UX</span>
                <span className="typo-subhead text-sm text-platinum flex items-center">
                  <CheckCircle2 className="w-3 h-3 text-terminal mr-2" /> Included
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-carbon/50">
                <span className="typo-subhead text-sm text-tungsten">Development</span>
                <span className="typo-subhead text-sm text-platinum flex items-center">
                  <CheckCircle2 className="w-3 h-3 text-terminal mr-2" /> Included
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-carbon/50">
                <span className="typo-subhead text-sm text-tungsten">Testing & QA</span>
                <span className="typo-subhead text-sm text-platinum flex items-center">
                  <CheckCircle2 className="w-3 h-3 text-terminal mr-2" /> Included
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-carbon/50">
                <span className="typo-subhead text-sm text-tungsten">Deployment</span>
                <span className="typo-subhead text-sm text-platinum flex items-center">
                  <CheckCircle2 className="w-3 h-3 text-terminal mr-2" /> Included
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-carbon/50">
                <span className="typo-subhead text-sm text-tungsten line-through opacity-50">Hidden Fees</span>
                <span className="typo-subhead text-sm text-platinum flex items-center">
                  <Ban className="w-3 h-3 text-signal mr-2" /> None
                </span>
              </div>

              <div className="bg-signal/10 p-4 rounded border border-signal/20 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="typo-tech text-xs text-tungsten block">Starting From</span>
                    <div className="flex items-center gap-1 mt-1">
                      <IndianRupee className="w-5 h-5 text-signal" />
                      <span className="typo-headline text-2xl text-platinum">15,000</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-carbon px-3 py-2 rounded">
                    <Sparkles className="w-4 h-4 text-signal" />
                    <span className="typo-tech text-xs text-platinum">Best Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
