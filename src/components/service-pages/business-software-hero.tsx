'use client';

import { TransitionLink } from '@/components/ui/page-transition';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { SafariFrame } from '@/components/ui/safari';
import { Database, Settings, BarChart3, CheckCircle2, Cpu, FileSpreadsheet } from 'lucide-react';

export function BusinessSoftwareHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-carbon">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-carbon/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 z-10">
          <FadeInSection delay={0.1} direction="up">
            <TransitionLink href="/services" className="typo-tech text-signal text-xs">Our Services</TransitionLink>
          </FadeInSection>

          <FadeInSection delay={0.2} direction="up">
            <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
              Custom Business Software,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
                {' '}
                Built for Your Workflow.
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.3} direction="up">
            <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
              Replace clunky spreadsheets and expensive subscriptions with simple, powerful software designed for your exact business needs. We rapidly build and deploy custom solutions for desktop that streamline your operations.
            </p>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.3} direction="right" className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <SafariFrame url="erp.yourbusiness.com" glowOnHover={true}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6 border-b border-carbon pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-platinum" />
                  </div>
                  <div>
                    <span className="typo-subhead text-sm text-platinum block">Custom ERP System</span>
                    <span className="typo-tech text-[10px] text-terminal">● Active</span>
                  </div>
                </div>
                <Settings className="w-4 h-4 text-tungsten animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              <div className="space-y-4">
                <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                  <span className="typo-tech text-xs text-tungsten">Data Processed</span>
                  <div className="flex items-end justify-between mt-1">
                    <span className="typo-headline text-2xl text-platinum">12,450</span>
                    <span className="text-terminal text-xs flex items-center gap-1">
                      <BarChart3 className="w-3 h-3" /> entries
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                    <span className="typo-tech text-xs text-tungsten">Modules</span>
                    <div className="typo-headline text-xl text-platinum mt-1 flex items-center gap-2">
                      <Database className="w-4 h-4 text-signal" /> 8
                    </div>
                  </div>
                  <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                    <span className="typo-tech text-xs text-tungsten">Users</span>
                    <div className="typo-headline text-xl text-platinum mt-1">24</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center bg-terminal/10 p-3 rounded border border-terminal/20 mt-4">
                  <CheckCircle2 className="w-4 h-4 text-terminal" />
                  <span className="text-terminal text-sm font-medium">Report Generated Successfully</span>
                </div>
              </div>
            </div>
          </SafariFrame>

          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl">
            <div className="typo-tech text-[10px] text-tungsten mb-1">Replaces</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              Spreadsheets <FileSpreadsheet className="w-4 h-4 text-signal" />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
