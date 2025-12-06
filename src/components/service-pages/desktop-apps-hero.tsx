'use client';

import { useState } from 'react';
import { FadeInSection, BlurFadeIn } from '@/components/ui/fade-in-section';
import { ContactFormModal } from '@/components/contact-form-modal';
import {
  MonitorSmartphone,
  ArrowRight,
  MessageCircle,
  HardDrive,
  Cpu,
  WifiOff,
  Settings,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { NeuroBackground } from '@/components/ui/neuro-background';
import { ContrastText, ContrastWrapper } from '@/components/ui/contrast-text';

export function DesktopAppsHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <NeuroBackground colorTheme="purple" />
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
              <span className="typo-tech text-xs text-tungsten">Windows & macOS Native</span>
            </div>
          </FadeInSection>

          <BlurFadeIn delay={0.2}>
            <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
              <ContrastText as="span" variant="monochrome">Desktop Software</ContrastText><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">That Just Works.</span>
            </h1>
          </BlurFadeIn>

          <FadeInSection delay={0.3} direction="up">
            <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
              Some workflows demand more than a browser tab. We build powerful desktop applications with native performance, offline capability, and deep system integration—software that your team will actually love using.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-signal text-obsidian px-8 py-4 typo-headline text-sm hover:bg-white hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,79,0,0.4)]"
              >
                Discuss Your Needs
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

        {/* Right Content - Desktop App Mockup */}
        <FadeInSection delay={0.3} direction="right" className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <div className="relative bg-obsidian border border-carbon rounded-sm shadow-2xl overflow-hidden">
            {/* Window Chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-carbon/80 border-b border-tungsten/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="typo-tech text-xs text-tungsten ml-4">Business Manager Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-tungsten" />
              </div>
            </div>

            {/* App Content */}
            <div className="p-6">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-tungsten/10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-signal/10 rounded flex items-center justify-center">
                    <MonitorSmartphone className="w-4 h-4 text-signal" />
                  </div>
                  <div>
                    <span className="typo-subhead text-sm text-platinum block">Inventory Dashboard</span>
                    <span className="typo-tech text-[10px] text-terminal">● Synced</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-tungsten">
                  <WifiOff className="w-3 h-3" />
                  <span className="typo-tech">Offline Ready</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-carbon/50 p-3 rounded border border-tungsten/10 text-center">
                  <span className="typo-headline text-lg text-platinum block">2,847</span>
                  <span className="typo-tech text-[10px] text-tungsten">Items</span>
                </div>
                <div className="bg-carbon/50 p-3 rounded border border-tungsten/10 text-center">
                  <span className="typo-headline text-lg text-signal block">₹4.2L</span>
                  <span className="typo-tech text-[10px] text-tungsten">Today</span>
                </div>
                <div className="bg-carbon/50 p-3 rounded border border-tungsten/10 text-center">
                  <span className="typo-headline text-lg text-terminal block">12</span>
                  <span className="typo-tech text-[10px] text-tungsten">Pending</span>
                </div>
              </div>

              {/* Action completed */}
              <div className="flex gap-3 items-center bg-terminal/10 p-3 rounded border border-terminal/20">
                <CheckCircle2 className="w-4 h-4 text-terminal" />
                <span className="text-terminal text-sm font-medium">Invoice #4521 Generated</span>
              </div>
            </div>
          </div>

          {/* Floating badge - bottom right */}
          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl">
            <div className="typo-tech text-[10px] text-tungsten mb-1">Performance</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              <Cpu className="w-4 h-4 text-signal" /> Native Speed
            </div>
          </div>

          {/* Floating badge - top left */}
          <div className="absolute -top-4 -left-4 bg-carbon border border-tungsten/20 p-3 shadow-xl">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-signal" />
              <span className="typo-tech text-xs text-platinum">Local Storage</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
