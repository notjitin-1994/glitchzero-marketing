'use client';

import { TransitionLink } from '@/components/ui/page-transition';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { Shield, Activity, RefreshCw, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export function AppMaintenanceHero() {
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
              Website & App Maintenance,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
                {' '}
                Intelligently Automated.
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.3} direction="up">
            <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
              Your digital presence is live, but the work isn't over. We provide proactive maintenance for websites and apps, using AI to monitor, update, and secure your products so you can focus on your business.
            </p>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.3} direction="right" className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <div className="relative bg-obsidian border border-carbon rounded-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-carbon pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-platinum" />
                </div>
                <div>
                  <span className="typo-subhead text-sm text-platinum block">Maintenance Dashboard</span>
                  <span className="typo-tech text-[10px] text-terminal">● All Systems Healthy</span>
                </div>
              </div>
              <RefreshCw className="w-4 h-4 text-tungsten animate-spin" style={{ animationDuration: '4s' }} />
            </div>

            <div className="space-y-4">
              <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                <span className="typo-tech text-xs text-tungsten">Uptime</span>
                <div className="flex items-end justify-between mt-1">
                  <span className="typo-headline text-2xl text-platinum">99.98%</span>
                  <span className="text-terminal text-xs flex items-center gap-1">
                    <Activity className="w-3 h-3" /> 30 days
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                  <span className="typo-tech text-xs text-tungsten">Security</span>
                  <div className="typo-headline text-xl text-platinum mt-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-terminal" /> Protected
                  </div>
                </div>
                <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                  <span className="typo-tech text-xs text-tungsten">Updates</span>
                  <div className="typo-headline text-xl text-platinum mt-1">Current</div>
                </div>
              </div>

              <div className="flex gap-3 items-center bg-terminal/10 p-3 rounded border border-terminal/20 mt-4">
                <CheckCircle2 className="w-4 h-4 text-terminal" />
                <span className="text-terminal text-sm font-medium">Auto-backup completed</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl">
            <div className="typo-tech text-[10px] text-tungsten mb-1">Monitoring</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              24/7 Active <Clock className="w-4 h-4 text-signal" />
            </div>
          </div>

          <div className="absolute -top-4 -left-4 bg-carbon border border-tungsten/20 p-3 shadow-xl">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              <span className="typo-tech text-xs text-platinum">0 issues</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
