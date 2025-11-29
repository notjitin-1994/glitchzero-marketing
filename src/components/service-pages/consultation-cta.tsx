'use client';

import { useState } from 'react';
import { FadeInSection, BlurFadeIn } from '@/components/ui/fade-in-section';
import { ContactFormModal } from '@/components/contact-form-modal';
import {
  ArrowRight,
  MessageCircle,
  Calendar,
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
    <section className="py-24 md:py-32 px-6 bg-obsidian relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-signal/5 -skew-y-3 transform scale-125 z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-signal/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <FadeInSection delay={0.1} direction="up">
              <div className="inline-flex items-center gap-3 bg-obsidian border border-tungsten/20 px-3 py-1.5 rounded-sm mb-6">
                <Sparkles className="w-4 h-4 text-signal" />
                <span className="typo-tech text-xs text-tungsten">Start Your Journey</span>
              </div>
            </FadeInSection>

            <BlurFadeIn delay={0.15}>
              <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
                {headline}
              </h2>
            </BlurFadeIn>

            <FadeInSection delay={0.25} direction="up">
              <p className="typo-body text-lg text-tungsten mb-8 leading-relaxed">
                {subheadline}
              </p>
            </FadeInSection>

            <FadeInSection delay={0.35} direction="up">
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
                  className="border border-tungsten/30 text-platinum px-8 py-4 typo-headline text-sm hover:bg-obsidian hover:border-signal transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </FadeInSection>

            <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
          </div>

          {/* Right - Benefits Card */}
          <FadeInSection delay={0.3} direction="left">
            <div className="bg-obsidian border border-tungsten/20 p-8 relative">
              <div className="absolute -top-3 -left-3 bg-signal text-obsidian px-3 py-1 typo-tech text-[10px] uppercase tracking-wider">
                What You Get
              </div>

              <div className="space-y-4 mt-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 p-4 bg-carbon/50 border border-tungsten/10"
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
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
