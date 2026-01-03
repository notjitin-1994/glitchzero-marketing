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
              <span className="typo-tech text-signal text-xs">Why Choose Us</span>
              <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Why India's Growth-Stage Companies Choose Us</h2>
            </div>
          </FadeInSection>

          <StaggerContainer staggerDelay={0.1} className="space-y-6">
            <StaggerItem>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BrainCircuit className="w-5 h-5 text-tungsten" />
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum mb-1">Startup Speed, Enterprise Standards</h4>
                  <p className="typo-body text-tungsten text-sm">We move 60% faster than traditional agencies through AI-accelerated workflows—but never compromise on architecture, security, or scalability. Every line of code is written to handle your next growth phase, not just today's requirements.</p>
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
                  <h4 className="typo-subhead text-platinum mb-1">India-First Product Engineering</h4>
                  <p className="typo-body text-tungsten text-sm">We understand what it takes to build for the Indian market: UPI integration, Aadhaar verification, multilingual support, and DPDP Act compliance. Plus performance optimization for Indian internet conditions and device diversity.</p>
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
                  <h4 className="typo-subhead text-platinum mb-1">Founder-Led, Always Accessible</h4>
                  <p className="typo-body text-tungsten text-sm">Work directly with our founder and lead engineer, not a sales team. Get technical answers in hours via WhatsApp or email. 60% of our clients are referrals—because we deliver on our commitments.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <FadeInSection direction="right" delay={0.2} className="h-full">
          <div id="process" className="bg-carbon border border-tungsten/10 p-8 rounded-sm relative h-full">
            <h3 className="typo-headline text-lg text-platinum mb-6">Our 3-Step Rapid Process</h3>

            <div className="space-y-8 relative">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-tungsten/20"></div>

              <div className="relative flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-obsidian border border-signal flex items-center justify-center shrink-0 z-10">
                  <span className="text-signal text-[10px] font-bold">1</span>
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum text-sm">Consult & Strategize (Day 1)</h4>
                  <p className="typo-body text-xs text-tungsten mt-1">We discuss your needs and finalize a plan on our first call.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-obsidian border border-tungsten flex items-center justify-center shrink-0 z-10">
                  <span className="text-platinum text-[10px] font-bold">2</span>
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum text-sm">Build & Review (1-2 Weeks)</h4>
                  <p className="typo-body text-xs text-tungsten mt-1">Our team codes at high speed. You get weekly updates, not monthly.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-obsidian border border-tungsten flex items-center justify-center shrink-0 z-10">
                  <span className="text-platinum text-[10px] font-bold">3</span>
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum text-sm">Launch & Train (Final Day)</h4>
                  <p className="typo-body text-xs text-tungsten mt-1">We deploy your app and train you, ensuring you're ready for business.</p>
                </div>
              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
