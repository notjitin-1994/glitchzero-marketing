'use client';

import { useState } from 'react';
import { FadeInSection, BlurFadeIn } from '@/components/ui/fade-in-section';
import { ContactFormModal } from '@/components/contact-form-modal';
import {
  Cpu,
  ArrowRight,
  MessageCircle,
  Radio,
  Wifi,
  Activity,
  Shield,
  Zap,
  Thermometer
} from 'lucide-react';

export function IotHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-carbon/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <FadeInSection delay={0.1} direction="up">
            <div className="inline-flex items-center gap-3 bg-carbon border border-tungsten/20 px-3 py-1.5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-terminal animate-pulse"></span>
              <span className="typo-tech text-xs text-tungsten">Hardware + Software Integration</span>
            </div>
          </FadeInSection>

          <BlurFadeIn delay={0.2}>
            <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
              Connect the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">Physical World.</span>
            </h1>
          </BlurFadeIn>

          <FadeInSection delay={0.3} direction="up">
            <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
              From sensors to dashboards, we build the complete stack. Turn your hardware concepts into intelligent, connected systems that collect data, automate processes, and give you unprecedented control.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-signal text-obsidian px-8 py-4 typo-headline text-sm hover:bg-white hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,79,0,0.4)]"
              >
                Discuss Your Project
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
        </div>

        {/* Right Content - IoT Dashboard Mockup */}
        <FadeInSection delay={0.3} direction="right" className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <div className="relative bg-obsidian border border-carbon rounded-sm p-6 shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 border-b border-carbon pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-signal/10 rounded-full flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-signal" />
                </div>
                <div>
                  <span className="typo-subhead text-sm text-platinum block">IoT Command Center</span>
                  <span className="typo-tech text-[10px] text-terminal">● 24 Devices Online</span>
                </div>
              </div>
              <Wifi className="w-4 h-4 text-terminal" />
            </div>

            {/* Device Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-carbon/50 p-3 rounded border border-tungsten/10 text-center">
                <Thermometer className="w-4 h-4 text-signal mx-auto mb-1" />
                <span className="typo-headline text-lg text-platinum block">24°C</span>
                <span className="typo-tech text-[10px] text-tungsten">Temp</span>
              </div>
              <div className="bg-carbon/50 p-3 rounded border border-tungsten/10 text-center">
                <Activity className="w-4 h-4 text-terminal mx-auto mb-1" />
                <span className="typo-headline text-lg text-platinum block">98%</span>
                <span className="typo-tech text-[10px] text-tungsten">Uptime</span>
              </div>
              <div className="bg-carbon/50 p-3 rounded border border-tungsten/10 text-center">
                <Zap className="w-4 h-4 text-signal mx-auto mb-1" />
                <span className="typo-headline text-lg text-platinum block">1.2kW</span>
                <span className="typo-tech text-[10px] text-tungsten">Power</span>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 p-2 bg-carbon/30 rounded text-xs">
                <div className="w-2 h-2 bg-terminal rounded-full"></div>
                <span className="text-tungsten">Sensor #12 reported</span>
                <span className="text-platinum ml-auto">2s ago</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-carbon/30 rounded text-xs">
                <div className="w-2 h-2 bg-signal rounded-full"></div>
                <span className="text-tungsten">OTA update deployed</span>
                <span className="text-platinum ml-auto">1m ago</span>
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex gap-3 items-center bg-terminal/10 p-3 rounded border border-terminal/20">
              <Shield className="w-4 h-4 text-terminal" />
              <span className="text-terminal text-sm font-medium">All Systems Operational</span>
            </div>
          </div>

          {/* Floating badge - bottom right */}
          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl">
            <div className="typo-tech text-[10px] text-tungsten mb-1">Communication</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              <Radio className="w-4 h-4 text-signal" /> E2E Secure
            </div>
          </div>

          {/* Floating badge - top left */}
          <div className="absolute -top-4 -left-4 bg-carbon border border-tungsten/20 p-3 shadow-xl">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-terminal" />
              <span className="typo-tech text-xs text-platinum">Real-time Data</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
