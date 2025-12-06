"use client";

import { Globe, Smartphone, ShoppingCart, Wrench, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { NeuroBackground } from '@/components/ui/neuro-background';
import { ContrastText, ContrastWrapper } from '@/components/ui/contrast-text';

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <NeuroBackground colorTheme="signal" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60 pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-carbon/20 to-transparent pointer-events-none z-[1]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <ContrastWrapper className="space-y-8 z-10 order-2 lg:order-1">
          <span className="typo-tech text-signal text-xs">Our Services</span>
          <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
            <ContrastText as="span" variant="monochrome">Custom Digital Solutions,</ContrastText> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
              Delivered Faster.
            </span>
          </h1>
          <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
            We leverage our AI-powered development platform to build, deploy, and
            maintain high-quality digital products for your business at a speed
            that traditional agencies can't match.
          </p>
        </ContrastWrapper>

        <div className="relative group order-1 lg:order-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <div className="relative bg-obsidian border border-carbon rounded-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-carbon pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                  <Layers className="w-4 h-4 text-platinum" />
                </div>
                <div>
                  <span className="typo-subhead text-sm text-platinum block">Development Pipeline</span>
                  <span className="typo-tech text-[10px] text-terminal">● 4 Services Active</span>
                </div>
              </div>
              <Cpu className="w-4 h-4 text-signal animate-pulse" />
            </div>

            <div className="space-y-3">
              <div className="bg-carbon/50 p-4 rounded border border-tungsten/10 flex items-center gap-4">
                <div className="w-10 h-10 bg-signal/10 rounded flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-signal" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="typo-subhead text-sm text-platinum block">Business Websites</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-carbon rounded-full overflow-hidden">
                      <div className="w-full h-full bg-terminal rounded-full"></div>
                    </div>
                    <CheckCircle2 className="w-3 h-3 text-terminal shrink-0" />
                  </div>
                </div>
              </div>

              <div className="bg-carbon/50 p-4 rounded border border-tungsten/10 flex items-center gap-4">
                <div className="w-10 h-10 bg-signal/10 rounded flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-signal" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="typo-subhead text-sm text-platinum block">Mobile Apps</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-carbon rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-signal rounded-full"></div>
                    </div>
                    <span className="typo-tech text-[10px] text-tungsten shrink-0">80%</span>
                  </div>
                </div>
              </div>

              <div className="bg-carbon/50 p-4 rounded border border-tungsten/10 flex items-center gap-4">
                <div className="w-10 h-10 bg-signal/10 rounded flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-5 h-5 text-signal" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="typo-subhead text-sm text-platinum block">E-Commerce Apps</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-carbon rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-signal rounded-full"></div>
                    </div>
                    <span className="typo-tech text-[10px] text-tungsten shrink-0">60%</span>
                  </div>
                </div>
              </div>

              <div className="bg-carbon/50 p-4 rounded border border-tungsten/10 flex items-center gap-4">
                <div className="w-10 h-10 bg-signal/10 rounded flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-signal" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="typo-subhead text-sm text-platinum block">App Maintenance</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-carbon rounded-full overflow-hidden">
                      <div className="w-2/5 h-full bg-signal rounded-full"></div>
                    </div>
                    <span className="typo-tech text-[10px] text-tungsten shrink-0">40%</span>
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
