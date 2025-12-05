'use client';

import { useState } from 'react';
import { FadeInSection, BlurFadeIn } from '@/components/ui/fade-in-section';
import { ContactFormModal } from '@/components/contact-form-modal';
import { Vortex } from '@/components/ui/vortex';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

interface ConsultationCtaProps {
  headline?: string;
  subheadline?: string;
  benefits?: string[];
}

export function ConsultationCta({
  headline = "Let's Build Something Remarkable",
  subheadline = "Every great project starts with a conversation. Share your vision, and we'll show you how to make it reality.",
  benefits = [
    'Free 30-minute discovery call',
    'Custom solution roadmap',
    'Transparent pricing—no surprises',
    'Response within 24 hours',
  ],
}: ConsultationCtaProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden border-y border-tungsten/20">
      <Vortex
        backgroundColor="#121212"
        particleCount={600}
        baseRadius={1}
        rangeRadius={2}
        className="px-6 py-24 md:py-32 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content with Glassmorphic Card - subtle blur */}
            <FadeInSection delay={0.1} direction="up">
              <div className="relative rounded-2xl border border-tungsten/20 p-[2px] md:rounded-3xl">
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  variant="orange"
                />
                <div className="bg-obsidian/30 backdrop-blur-[8px] rounded-xl md:rounded-2xl p-8 md:p-10 shadow-2xl h-full">
                <div className="inline-flex items-center gap-3 bg-obsidian/40 backdrop-blur-[4px] border border-tungsten/30 px-3 py-1.5 rounded-sm mb-6">
                  <Sparkles className="w-4 h-4 text-signal" />
                  <span className="typo-tech text-xs text-tungsten">Start Your Journey</span>
                </div>

                <BlurFadeIn delay={0.15}>
                  <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
                    {headline}
                  </h2>
                </BlurFadeIn>

                <p className="typo-body text-lg text-tungsten mb-8 leading-relaxed">
                  {subheadline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-signal text-obsidian px-8 py-4 typo-headline text-sm hover:bg-white hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,79,0,0.4)]"
                  >
                    Start a Conversation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/919008898642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-tungsten/30 text-platinum px-8 py-4 typo-headline text-sm hover:bg-obsidian/80 hover:border-signal transition-all duration-300 flex items-center justify-center gap-2 bg-obsidian/60 backdrop-blur-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>

                <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
                </div>
              </div>
            </FadeInSection>

            {/* Right - Benefits Card with Glassmorphic styling - subtle blur */}
            <FadeInSection delay={0.3} direction="left">
              <div className="relative rounded-2xl border border-tungsten/20 p-[2px] md:rounded-3xl">
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  variant="orange"
                />
                <div className="bg-obsidian/30 backdrop-blur-[8px] rounded-xl md:rounded-2xl p-8 relative shadow-2xl h-full">
                  <div className="absolute -top-3 -left-3 bg-signal text-obsidian px-3 py-1 typo-tech text-[10px] uppercase tracking-wider rounded-sm z-10">
                    What You Get
                  </div>

                  <div className="space-y-4 mt-4">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-4 p-4 bg-obsidian/50 backdrop-blur-sm border border-tungsten/10 rounded-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-signal flex-shrink-0 mt-0.5" />
                        <span className="typo-body text-platinum">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-tungsten/10 flex items-center gap-3">
                    <Clock className="w-4 h-4 text-terminal" />
                    <span className="typo-tech text-xs text-tungsten">
                      Average response time: <span className="text-terminal">Under 2 hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Vortex>
    </section>
  );
}
