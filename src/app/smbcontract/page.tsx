"use client";

import React, { useState } from 'react';
import { FileText, CheckCircle2, Clock, Shield, ArrowRight, Zap, Globe, MessageCircle, Search, MapPin, Database, Smartphone } from 'lucide-react';
import { FadeInSection, BlurFadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in-section';

const SmbContractPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '', agreed: false });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agreed) setIsSubmitted(true);
  };

  const deliverables = [
    { icon: Smartphone, label: 'Landing Page (Mobile Optimized)' },
    { icon: Globe, label: 'Products/Services/Offers Page' },
    { icon: FileText, label: 'Contact Details Page' },
    { icon: MessageCircle, label: 'Direct Booking & WhatsApp Integration' },
    { icon: Search, label: 'SEO & GEO Foundation Setup' },
    { icon: MapPin, label: 'Google Maps Integration' },
    { icon: Database, label: 'Standard Data Collection' },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-tungsten font-body selection:bg-signal selection:text-obsidian">
      <div className="max-w-5xl mx-auto pt-28 pb-16 px-6 md:pt-32 md:pb-20">

        {/* ─── Header ─── */}
        <FadeInSection delay={0.05} direction="up">
          <header className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-carbon border border-tungsten/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-signal" />
              </div>
              <span className="font-mono text-[11px] tracking-tags text-tungsten/60 uppercase">Service Agreement</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-platinum tracking-headlines leading-tight mb-4">
              Digital Storefront<br />
              <span className="text-signal">Service Contract</span>
            </h1>
            <p className="font-body text-base md:text-lg text-tungsten max-w-xl leading-relaxed">
              A fixed-scope engagement to design, develop, and deploy a comprehensive digital storefront for your business.
            </p>
            <div className="mt-6 h-px bg-carbon w-full" />
          </header>
        </FadeInSection>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>

            {/* ─── Deliverables Grid ─── */}
            <BlurFadeIn delay={0.15}>
              <div className="mb-16">
                <SectionLabel number="01" title="Project Scope & Deliverables" />
                <p className="font-body text-sm text-tungsten leading-relaxed mb-8 max-w-2xl">
                  GlitchZero Labs agrees to design, develop, and deploy a comprehensive digital storefront. The engagement includes the following deliverables:
                </p>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.06}>
                  {deliverables.map((item) => (
                    <StaggerItem key={item.label}>
                      <div className="group bg-carbon border border-tungsten/10 p-4 hover:border-signal/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-obsidian border border-tungsten/10 flex items-center justify-center flex-shrink-0 group-hover:border-signal/20 transition-colors duration-300">
                            <item.icon className="w-4 h-4 text-tungsten group-hover:text-signal transition-colors duration-300" />
                          </div>
                          <span className="font-mono text-xs text-platinum/80 leading-relaxed pt-1.5">{item.label}</span>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </BlurFadeIn>

            {/* ─── Financial + Timeline Row ─── */}
            <FadeInSection delay={0.2} direction="up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

                {/* Financial Terms */}
                <div className="bg-carbon border border-tungsten/10 p-6 md:p-8">
                  <SectionLabel number="02" title="Financial Terms" />
                  <div className="mt-6 space-y-6">
                    <div>
                      <span className="font-mono text-[10px] tracking-tags text-tungsten/50 uppercase block mb-1">Total Setup Fee</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-headline text-3xl md:text-4xl font-extrabold text-platinum">₹4,000</span>
                      </div>
                    </div>
                    <div className="h-px bg-tungsten/10" />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-tungsten">Build Fee</span>
                        <span className="font-mono text-sm text-platinum">₹2,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-tungsten">Hosting / SSL / Domain <span className="text-tungsten/40">(1 Year)</span></span>
                        <span className="font-mono text-sm text-platinum">₹2,000</span>
                      </div>
                    </div>
                    <div className="h-px bg-tungsten/10" />
                    <div className="flex items-center gap-2 text-tungsten/50">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-body text-xs italic">Annual renewal of ₹2,000 required after year one.</span>
                    </div>
                  </div>
                </div>

                {/* Timeline + Guarantee */}
                <div className="bg-carbon border border-tungsten/10 p-6 md:p-8">
                  <SectionLabel number="03" title="Delivery Timeline" />
                  <div className="mt-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-signal/10 border border-signal/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-signal" />
                      </div>
                      <div>
                        <span className="font-headline text-lg font-bold text-platinum block mb-1">24-Hour Guarantee</span>
                        <span className="font-body text-sm text-tungsten leading-relaxed">Functional delivery within 24 hours of asset receipt and payment clearing.</span>
                      </div>
                    </div>
                    <div className="h-px bg-tungsten/10" />

                    {/* Milestones */}
                    <div className="space-y-4">
                      {[
                        { step: '01', label: 'Payment & Asset Receipt', status: 'Pending' },
                        { step: '02', label: 'Build & Deploy', status: '< 24hrs' },
                        { step: '03', label: 'Handover & Go Live', status: 'Final' },
                      ].map((milestone) => (
                        <div key={milestone.step} className="flex items-center gap-4">
                          <span className="font-mono text-[10px] text-signal w-5">{milestone.step}</span>
                          <div className="h-px bg-tungsten/10 flex-1" />
                          <span className="font-body text-sm text-platinum">{milestone.label}</span>
                          <span className="font-mono text-[10px] text-tungsten/50 tracking-tags uppercase">{milestone.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* ─── Policies Row ─── */}
            <FadeInSection delay={0.25} direction="up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

                {/* No Rework Policy */}
                <div className="bg-carbon border border-tungsten/10 p-6 md:p-8">
                  <SectionLabel number="04" title="Revisions & Development Policy" />
                  <div className="mt-6">
                    <div className="border-l-2 border-signal pl-5 py-1">
                      <span className="font-headline text-sm font-bold text-platinum block mb-2">No Rework Policy</span>
                      <p className="font-body text-sm text-tungsten leading-relaxed">
                        This is a streamlined, &apos;done-for-you&apos; product. We do not engage in iterative back-and-forth design cycles or structural rework.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Client Responsibilities */}
                <div className="bg-carbon border border-tungsten/10 p-6 md:p-8">
                  <SectionLabel number="05" title="Client Responsibilities" />
                  <div className="mt-6 space-y-4">
                    {[
                      'Client warrants ownership of all provided media and assets.',
                      'Accuracy of provided copy is the sole responsibility of the Client.',
                      'Assets must be delivered in usable digital formats.',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-terminal mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-tungsten leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* ─── Client Credentials Form ─── */}
            <FadeInSection delay={0.3} direction="up">
              <div className="bg-carbon border border-tungsten/10 p-6 md:p-10">

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-obsidian border border-tungsten/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-signal" />
                  </div>
                  <div>
                    <h3 className="font-headline text-sm font-bold text-platinum uppercase tracking-tags">Client Credentials</h3>
                    <span className="font-mono text-[10px] text-tungsten/40">Required to proceed</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-200 font-mono text-[10px] tracking-tags uppercase pointer-events-none ${
                      focusedField === 'name' || formData.name ? 'top-2 text-signal' : 'top-1/2 -translate-y-1/2 text-tungsten/40'
                    }`}>
                      Full Name
                    </label>
                    <input
                      required
                      className="w-full bg-obsidian border border-tungsten/10 p-4 pt-6 text-platinum font-body text-sm outline-none focus:border-signal/40 transition-colors duration-300"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                      value={formData.name}
                    />
                  </div>
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-200 font-mono text-[10px] tracking-tags uppercase pointer-events-none ${
                      focusedField === 'company' || formData.company ? 'top-2 text-signal' : 'top-1/2 -translate-y-1/2 text-tungsten/40'
                    }`}>
                      Business Name
                    </label>
                    <input
                      required
                      className="w-full bg-obsidian border border-tungsten/10 p-4 pt-6 text-platinum font-body text-sm outline-none focus:border-signal/40 transition-colors duration-300"
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, company: e.target.value})}
                      value={formData.company}
                    />
                  </div>
                  <div className="relative md:col-span-2">
                    <label className={`absolute left-4 transition-all duration-200 font-mono text-[10px] tracking-tags uppercase pointer-events-none ${
                      focusedField === 'phone' || formData.phone ? 'top-2 text-signal' : 'top-1/2 -translate-y-1/2 text-tungsten/40'
                    }`}>
                      WhatsApp Number
                    </label>
                    <input
                      required
                      className="w-full bg-obsidian border border-tungsten/10 p-4 pt-6 text-platinum font-body text-sm outline-none focus:border-signal/40 transition-colors duration-300"
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})}
                      value={formData.phone}
                    />
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <label className="flex items-start gap-4 cursor-pointer group mb-8 p-4 bg-obsidian border border-tungsten/10 hover:border-tungsten/20 transition-colors duration-300">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      required
                      className="sr-only peer"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, agreed: e.target.checked})}
                    />
                    <div className="w-5 h-5 border border-tungsten/20 bg-carbon peer-checked:bg-signal peer-checked:border-signal flex items-center justify-center transition-all duration-200">
                      {formData.agreed && (
                        <svg className="w-3 h-3 text-obsidian" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="font-body text-xs text-tungsten leading-relaxed group-hover:text-platinum/70 transition-colors duration-200">
                    By clicking &quot;Accept &amp; Proceed&quot;, the Client acknowledges and agrees to the finalized scope, pricing, and the strict 24-hour, zero-rework delivery policy outlined in this service agreement.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  disabled={!formData.agreed}
                  className="w-full py-5 bg-signal text-obsidian font-headline font-extrabold text-sm uppercase tracking-tags flex items-center justify-center gap-3 hover:bg-platinum disabled:bg-carbon disabled:text-tungsten/30 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Accept Agreement & Proceed
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </FadeInSection>
          </form>
        ) : (
          /* ─── Post-Submit: Payment Pending ─── */
          <FadeInSection delay={0.1} direction="up">
            <div className="bg-carbon border border-tungsten/10 p-10 md:p-16 text-center">
              <div className="w-16 h-16 bg-signal/10 border border-signal/20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-8 h-8 text-signal" />
              </div>
              <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-platinum uppercase tracking-headlines mb-3">Agreement Accepted</h2>
              <p className="font-body text-sm text-tungsten mb-10 max-w-md mx-auto">Scan the code below to initiate payment and begin your project build.</p>

              <div className="w-44 h-44 bg-platinum mx-auto mb-8 flex items-center justify-center border-4 border-tungsten/10">
                <span className="font-mono text-[10px] text-obsidian tracking-tags uppercase">Payment QR</span>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 font-mono text-xs text-signal hover:text-platinum tracking-tags uppercase transition-colors duration-200"
              >
                <ArrowRight className="w-3 h-3 rotate-180" />
                Reset Form
              </button>
            </div>
          </FadeInSection>
        )}

        {/* ─── Footer Signature ─── */}
        <FadeInSection delay={0.35} direction="up">
          <footer className="mt-16 pt-8 border-t border-carbon">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="font-headline text-sm font-bold text-platinum tracking-headlines">GlitchZero</span>
                <span className="font-headline text-sm font-bold text-signal tracking-headlines"> Labs</span>
              </div>
              <span className="font-mono text-[10px] text-tungsten/30 tracking-tags uppercase">Service Agreement // Digital Storefront // v1.0</span>
            </div>
          </footer>
        </FadeInSection>
      </div>
    </div>
  );
};

/* ─── Section Label Component ─── */
const SectionLabel = ({ number, title }: { number: string, title: string }) => (
  <div className="flex items-center gap-3 mb-1">
    <span className="font-mono text-[10px] text-signal tracking-tags">{number}</span>
    <div className="h-px bg-tungsten/10 w-6" />
    <h2 className="font-headline text-xs font-bold text-platinum uppercase tracking-tags">{title}</h2>
  </div>
);

export default SmbContractPage;
