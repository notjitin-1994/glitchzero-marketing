'use client';

import { TransitionLink } from '@/components/ui/page-transition';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { SafariFrame } from '@/components/ui/safari';
import { ShoppingCart, CreditCard, Package, TrendingUp, CheckCircle2, Smartphone } from 'lucide-react';
import { NeuroBackground } from '@/components/ui/neuro-background';
import { ContrastText, ContrastWrapper } from '@/components/ui/contrast-text';

export function EcommerceAppsHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-carbon overflow-hidden">
      <NeuroBackground colorTheme="signal" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60 pointer-events-none z-[1]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-carbon/20 to-transparent pointer-events-none z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ContrastWrapper className="space-y-6 z-10">
          <FadeInSection delay={0.1} direction="up">
            <TransitionLink href="/services" className="typo-tech text-signal text-xs">Our Services</TransitionLink>
          </FadeInSection>

          <FadeInSection delay={0.2} direction="up">
            <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
              <ContrastText as="span" variant="monochrome">E-commerce Apps,</ContrastText>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
                {' '}
                Built to Sell.
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.3} direction="up">
            <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
              Launch a high-performance online store on web, iOS, and Android. Our AI-accelerated process delivers a feature-rich, scalable e-commerce platform that converts visitors into loyal customers, faster than you thought possible.
            </p>
          </FadeInSection>
        </ContrastWrapper>

        <FadeInSection delay={0.3} direction="right" className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <SafariFrame url="store.yourbusiness.com" glowOnHover={true}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6 border-b border-carbon pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-platinum" />
                  </div>
                  <div>
                    <span className="typo-subhead text-sm text-platinum block">Your Store App</span>
                    <span className="typo-tech text-[10px] text-terminal">● Live</span>
                  </div>
                </div>
                <CreditCard className="w-4 h-4 text-tungsten" />
              </div>

              <div className="space-y-4">
                <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                  <span className="typo-tech text-xs text-tungsten">Today's Revenue</span>
                  <div className="flex items-end justify-between mt-1">
                    <span className="typo-headline text-2xl text-platinum">₹52,800</span>
                    <span className="text-terminal text-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +24%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                    <span className="typo-tech text-xs text-tungsten">Orders</span>
                    <div className="typo-headline text-xl text-platinum mt-1 flex items-center gap-2">
                      <Package className="w-4 h-4 text-signal" /> 87
                    </div>
                  </div>
                  <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                    <span className="typo-tech text-xs text-tungsten">Conversion</span>
                    <div className="typo-headline text-xl text-platinum mt-1">4.2%</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center bg-terminal/10 p-3 rounded border border-terminal/20 mt-4">
                  <CheckCircle2 className="w-4 h-4 text-terminal" />
                  <span className="text-terminal text-sm font-medium">New Order: ₹2,499</span>
                </div>
              </div>
            </div>
          </SafariFrame>

          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl">
            <div className="typo-tech text-[10px] text-tungsten mb-1">Platform</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              Web & Mobile <Smartphone className="w-4 h-4 text-signal" />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
