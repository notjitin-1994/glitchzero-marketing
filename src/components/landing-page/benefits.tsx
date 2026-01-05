'use client';

import { BrainCircuit, IndianRupee, MessageSquare, ShieldCheck } from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem } from '@/components/ui/fade-in-section';

export function Benefits() {
  return (
    <section id="benefits" className="py-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-10">
          <FadeInSection direction="up">
            <div>
              <span className="typo-tech text-signal text-xs">Why Industry Leaders Choose GlitchZero</span>
              <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Why Industry Leaders Choose GlitchZero</h2>
            </div>
          </FadeInSection>

          <StaggerContainer staggerDelay={0.1} className="space-y-6">
            <StaggerItem>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BrainCircuit className="w-5 h-5 text-tungsten" />
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum mb-1">Enterprise-Grade Engineering, Startup Agility</h4>
                  <p className="typo-body text-tungsten text-sm">We don’t just write code; we architect assets. Our systems are built to handle millions of transactions and users from Day 1. We combine the agility of a modern tech stack with the security and governance required by serious enterprises.</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="w-full h-px bg-carbon"></div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <IndianRupee className="w-5 h-5 text-tungsten" />
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum mb-1">India-Specific Digital Dominance</h4>
                  <p className="typo-body text-tungsten text-sm">Winning in India requires more than just translation. We engineer for the unique complexities of the Indian digital economy—deep UPI integration, DPDP Act compliance, and optimization for diverse device landscapes. We build products that work flawlessly for every Indian user.</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="w-full h-px bg-carbon"></div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MessageSquare className="w-5 h-5 text-tungsten" />
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum mb-1">Direct Access to Technical Leadership</h4>
                  <p className="typo-body text-tungsten text-sm">Stop playing telephone with account managers. You partner directly with our senior engineering architects. We translate your business goals into technical reality with zero "lost in translation" errors.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <FadeInSection direction="right" delay={0.2} className="h-full">
          <div id="process" className="bg-carbon border border-tungsten/10 p-8 rounded-sm relative h-full">
            <h3 className="typo-headline text-lg text-platinum mb-6">The GlitchZero Engineering Protocol</h3>

            <div className="space-y-8 relative">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-tungsten/20"></div>

              <div className="relative flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-obsidian border border-signal flex items-center justify-center shrink-0 z-10">
                  <span className="text-signal text-[10px] font-bold">1</span>
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum text-sm">Deep-Dive Discovery & Architecture</h4>
                  <p className="typo-body text-xs text-tungsten mt-1">We don’t guess; we blueprint. We analyze your business model, user flows, and technical requirements to create a roadmap that guarantees ROI before a single line of code is written.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-obsidian border border-tungsten flex items-center justify-center shrink-0 z-10">
                  <span className="text-platinum text-[10px] font-bold">2</span>
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum text-sm">Agile Development & Iteration</h4>
                  <p className="typo-body text-xs text-tungsten mt-1">Deploying our AI-accelerated workflow to cut development cycles by 40% without compromising code quality. You receive weekly executive briefings and tangible progress—no black boxes.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-obsidian border border-tungsten flex items-center justify-center shrink-0 z-10">
                  <span className="text-platinum text-[10px] font-bold">3</span>
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum text-sm">Scale-Ready Launch & Handover</h4>
                  <p className="typo-body text-xs text-tungsten mt-1">We execute a seamless deployment, ensuring 99.9% uptime. Post-launch, we provide comprehensive training and documentation, empowering your internal teams to take full ownership.</p>
                </div>
              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
