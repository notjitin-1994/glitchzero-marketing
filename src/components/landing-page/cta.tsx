"use client";

import { useState } from 'react';
import { ContactFormModal } from '@/components/contact-form-modal';

export function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-signal/5 -skew-y-3 transform scale-125 z-0 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-8">Launch in Weeks, Not Months.</h2>
        <p className="typo-body text-tungsten text-lg mb-10 max-w-xl mx-auto">
          Stop waiting. Start growing. Let's build the digital presence that brings you more customers, faster than you thought possible.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-signal text-obsidian px-10 py-4 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)]"
          >
            Start Your Project Today
          </button>
          <a
            href="https://wa.me/919008898642"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-tungsten/30 text-platinum px-10 py-4 typo-headline text-base hover:border-signal hover:text-signal transition-colors bg-obsidian"
          >
            Get Rapid Pricing
          </a>
        </div>

        <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </section>
  );
}
