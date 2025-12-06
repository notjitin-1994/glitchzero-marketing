'use client';

import { TransitionLink } from '@/components/ui/page-transition';
import { FadeInSection, BlurFadeIn } from '@/components/ui/fade-in-section';
import { Globe, Award, Sparkles, TrendingUp, Eye, MousePointer, Zap } from 'lucide-react';
import { NeuroBackground } from '@/components/ui/neuro-background';
import { ContrastText, ContrastWrapper } from '@/components/ui/contrast-text';

export function WebsitesPortfolioHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <NeuroBackground colorTheme="signal" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60 pointer-events-none z-[1]" />
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-carbon/20 to-transparent pointer-events-none z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <ContrastWrapper className="space-y-8 z-10">
          <FadeInSection delay={0.1} direction="up">
            <div className="inline-flex items-center gap-3 bg-carbon border border-tungsten/20 px-3 py-1.5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-terminal animate-pulse"></span>
              <span className="typo-tech text-xs text-tungsten">25+ Projects Delivered Successfully</span>
            </div>
          </FadeInSection>

          <BlurFadeIn delay={0.2}>
            <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
              <ContrastText as="span" variant="monochrome">Websites We've</ContrastText><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">Brought to Life.</span>
            </h1>
          </BlurFadeIn>

          <FadeInSection delay={0.3} direction="up">
            <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
              Explore our portfolio of meticulously crafted digital experiences. Each project represents our commitment to exceptional design, seamless functionality, and measurable results.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.4} direction="up">
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-signal" />
                  <span className="typo-headline text-2xl text-platinum">100%</span>
                </div>
                <span className="typo-tech text-[10px] text-tungsten">Client Satisfaction</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-signal" />
                  <span className="typo-headline text-2xl text-platinum">98+</span>
                </div>
                <span className="typo-tech text-[10px] text-tungsten">Performance Score</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-signal" />
                  <span className="typo-headline text-2xl text-platinum">3x</span>
                </div>
                <span className="typo-tech text-[10px] text-tungsten">Avg. Growth</span>
              </div>
            </div>
          </FadeInSection>
        </ContrastWrapper>

        {/* Right Content - Animated Browser */}
        <FadeInSection delay={0.3} direction="right" className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <div className="relative bg-obsidian border border-carbon rounded-sm shadow-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-carbon/80 border-b border-tungsten/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-obsidian/50 rounded-sm px-3 py-1.5 flex items-center gap-2 text-xs text-tungsten">
                  <Globe className="w-3 h-3 text-signal" />
                  <span className="typo-tech">glitchzero.dev/portfolio</span>
                </div>
              </div>
            </div>

            {/* Browser Content */}
            <div className="p-6 space-y-4">
              {/* Header mockup */}
              <div className="h-16 bg-gradient-to-r from-signal/20 to-orange-400/20 rounded flex items-center justify-center border border-signal/20">
                <span className="typo-headline text-lg text-platinum">Featured Work</span>
              </div>

              {/* Project cards mockup */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="h-20 bg-carbon/50 rounded border border-tungsten/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-signal/10 to-transparent"></div>
                  </div>
                  <div className="h-2 bg-carbon/50 rounded w-3/4"></div>
                  <div className="h-2 bg-carbon/50 rounded w-1/2"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-carbon/50 rounded border border-tungsten/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent"></div>
                  </div>
                  <div className="h-2 bg-carbon/50 rounded w-3/4"></div>
                  <div className="h-2 bg-carbon/50 rounded w-1/2"></div>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex gap-3 items-center bg-signal/10 p-3 rounded border border-signal/20 mt-4">
                <Zap className="w-4 h-4 text-signal" />
                <span className="text-signal text-sm font-medium">All Projects: 98+ Lighthouse Score</span>
              </div>
            </div>
          </div>

          {/* Floating badge - bottom right */}
          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl">
            <div className="typo-tech text-[10px] text-tungsten mb-1">Live Visitors</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              <Eye className="w-4 h-4 text-signal" /> 2.4k/day
            </div>
          </div>

          {/* Floating badge - top left */}
          <div className="absolute -top-4 -left-4 bg-carbon border border-tungsten/20 p-3 shadow-xl">
            <div className="flex items-center gap-2">
              <MousePointer className="w-4 h-4 text-signal" />
              <span className="typo-tech text-xs text-platinum">+150% Engagement</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
