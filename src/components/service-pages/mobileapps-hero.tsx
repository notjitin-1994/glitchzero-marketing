'use client';

import { useState } from 'react';
import { FadeInSection, BlurFadeIn } from '@/components/ui/fade-in-section';
import { ContactFormModal } from '@/components/contact-form-modal';
import { NeuroBackground } from '@/components/ui/neuro-background';
import { ContrastText, ContrastWrapper } from '@/components/ui/contrast-text';
import { Android } from '@/components/ui/android';
import {
  Smartphone,
  ArrowRight,
  MessageCircle,
  Shield,
  Zap,
  TrendingUp,
  Bell,
  Download,
  Layers
} from 'lucide-react';

export function MobileappsHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <NeuroBackground colorTheme="signal" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60 pointer-events-none z-[1]" />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-carbon/20 to-transparent pointer-events-none z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none z-[1]"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <ContrastWrapper className="space-y-8">
          <FadeInSection delay={0.1} direction="up">
            <div className="inline-flex items-center gap-3 bg-carbon border border-tungsten/20 px-3 py-1.5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulse"></span>
              <span className="typo-tech text-xs text-tungsten">iOS & Android Development</span>
            </div>
          </FadeInSection>

          <BlurFadeIn delay={0.2}>
            <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
              <ContrastText as="span" variant="monochrome">Apps That Users</ContrastText><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">Actually Love.</span>
            </h1>
          </BlurFadeIn>

          <FadeInSection delay={0.3} direction="up">
            <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
              Launch your brand on Play Store and App Store. We build beautiful, intuitive mobile apps using unified codebases—halving development time without compromising quality.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-signal text-obsidian px-8 py-4 typo-headline text-sm hover:bg-white hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,79,0,0.4)]"
              >
                Start Your App Journey
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919008898642"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-tungsten/30 text-platinum px-8 py-4 typo-headline text-sm hover:bg-carbon hover:border-platinum transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Quick Chat
              </a>
            </div>
          </FadeInSection>

          <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </ContrastWrapper>

        {/* Right Content - Mobile App in Device Mockup */}
        <FadeInSection delay={0.3} direction="right" className="relative group hidden lg:flex justify-center">
          {/* Glow effect behind phone */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[500px] bg-gradient-to-b from-signal/20 via-orange-500/10 to-transparent blur-[60px] rounded-full"></div>
          </div>

          {/* Phone Mockup with Screenshot */}
          <div className="relative">
            <Android
              src="/portfolio/02_dashboard_dark.png"
              width={280}
              height={570}
              className="drop-shadow-[0_0_40px_rgba(255,79,0,0.2)] relative z-10"
            />

            {/* Floating badge - bottom right */}
            <div className="absolute -bottom-4 -right-8 bg-carbon border border-tungsten/20 p-4 shadow-xl z-20">
              <div className="typo-tech text-[10px] text-tungsten mb-1">Platform</div>
              <div className="typo-headline text-lg text-platinum flex items-center gap-2">
                <Layers className="w-4 h-4 text-signal" /> Cross-Platform
              </div>
            </div>

            {/* Floating badge - top left */}
            <div className="absolute -top-2 -left-8 bg-carbon border border-tungsten/20 p-3 shadow-xl z-20">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-signal" />
                <span className="typo-tech text-xs text-platinum">Store Ready</span>
              </div>
            </div>

            {/* Stats floating card - right side */}
            <div className="absolute top-1/3 -right-16 bg-carbon/90 border border-tungsten/20 p-3 shadow-xl z-20 hidden xl:block">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Download className="w-3 h-3 text-signal" />
                  <span className="typo-tech text-[10px] text-tungsten">Downloads</span>
                </div>
                <div className="typo-headline text-lg text-platinum">12.5K+</div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
