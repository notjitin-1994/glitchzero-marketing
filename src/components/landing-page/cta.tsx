"use client";

import { useState } from 'react';
import { ContactFormModal } from '@/components/contact-form-modal';
import { FadeInSection, BlurFadeIn } from '@/components/ui/fade-in-section';
import { Vortex } from '@/components/ui/vortex';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden border-y border-tungsten/20">
      <Vortex
        backgroundColor="#121212"
        particleCount={600}
        baseRadius={1}
        rangeRadius={2}
        className="flex items-center justify-center px-6 py-32 w-full"
      >
        <div className="text-center max-w-3xl mx-auto">
          {/* Glassmorphic Card - subtle blur to see animation through */}
          <div className="relative rounded-2xl border border-tungsten/20 p-[2px] md:rounded-3xl">
            <GlowingEffect
              blur={0}
              borderWidth={1.5}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              variant="orange"
            />
            <div className="bg-obsidian/30 backdrop-blur-[3px] rounded-xl md:rounded-2xl px-8 py-12 md:px-12 md:py-14 shadow-2xl">
              <BlurFadeIn>
                <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-8">Ready to Build Your Competitive Advantage?</h2>
              </BlurFadeIn>

              <FadeInSection delay={0.15} direction="up">
                <p className="typo-body text-tungsten text-lg mb-10 max-w-xl mx-auto">
                  Your competitors aren't waiting. Let's engineer a scalable platform that positions you for market leadership—delivered in weeks, built to last years.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.3} direction="up">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-signal text-obsidian px-10 py-4 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)]"
                  >
                    Schedule Technical Discovery
                  </button>
                  <a
                    href="https://wa.me/919008898642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-tungsten/30 text-platinum px-10 py-4 typo-headline text-base hover:border-signal hover:text-signal transition-colors bg-obsidian/80 backdrop-blur-sm"
                  >
                    Message Our Founder
                  </a>
                </div>
              </FadeInSection>
            </div>
          </div>

          <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </div>
      </Vortex>
    </section>
  );
}
