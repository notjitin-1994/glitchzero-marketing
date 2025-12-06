'use client';

import { TransitionLink } from '@/components/ui/page-transition';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { SafariFrame } from '@/components/ui/safari';
import { Search, CheckCircle2, Eye } from 'lucide-react';

export function BusinessWebsitesHero() {
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
              Professional Websites,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
                {' '}
                Delivered Instantly.
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.3} direction="up">
            <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
              Establish a powerful online presence with a stunning, high-speed website. We design and deploy beautiful sites that are optimized for search engines and all devices, getting your business in front of customers with unprecedented speed.
            </p>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.3} direction="right" className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <SafariFrame url="yourbusiness.com" glowOnHover={true}>
            {/* Website Preview */}
            <div className="p-6 space-y-4">
              <div className="h-24 bg-gradient-to-r from-signal/20 to-orange-400/20 rounded flex items-center justify-center">
                <span className="typo-headline text-xl text-platinum">Your Brand</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 bg-carbon/50 rounded border border-tungsten/10"></div>
                <div className="h-16 bg-carbon/50 rounded border border-tungsten/10"></div>
                <div className="h-16 bg-carbon/50 rounded border border-tungsten/10"></div>
              </div>

              <div className="space-y-2">
                <div className="h-3 bg-carbon/50 rounded w-full"></div>
                <div className="h-3 bg-carbon/50 rounded w-4/5"></div>
                <div className="h-3 bg-carbon/50 rounded w-3/5"></div>
              </div>

              <div className="flex gap-3 items-center bg-terminal/10 p-3 rounded border border-terminal/20 mt-4">
                <CheckCircle2 className="w-4 h-4 text-terminal" />
                <span className="text-terminal text-sm font-medium">Page Speed: 98/100</span>
              </div>
            </div>
          </SafariFrame>

          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl">
            <div className="typo-tech text-[10px] text-tungsten mb-1">SEO Ready</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              <Search className="w-4 h-4 text-signal" /> Optimized
            </div>
          </div>

          <div className="absolute -top-4 -left-4 bg-carbon border border-tungsten/20 p-3 shadow-xl">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-signal" />
              <span className="typo-tech text-xs text-platinum">1.2k visitors/day</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
