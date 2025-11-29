'use client';

import { TrendingUp, Facebook, Instagram, Linkedin } from 'lucide-react';
import { TransitionLink } from '@/components/ui/page-transition';

export function Footer() {
  return (
    <footer className="bg-carbon pt-16 pb-8 border-t border-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <TransitionLink href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-signal flex items-center justify-center">
                <span className="typo-headline text-lg text-obsidian font-bold">G0</span>
              </div>
              <span className="typo-headline text-lg text-platinum">GlitchZero</span>
            </TransitionLink>
            <p className="typo-body text-tungsten text-sm">
              Your vision, flawlessly executed.
            </p>
          </div>

          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><TransitionLink href="/services/business-software" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Business Software</TransitionLink></li>
              <li><TransitionLink href="/services/business-websites" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Business Websites</TransitionLink></li>
              <li><TransitionLink href="/services/ecommerce-apps" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">E-commerce Apps</TransitionLink></li>
              <li><TransitionLink href="/services/app-maintenance" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Website/App Maintenance</TransitionLink></li>
            </ul>
          </div>

          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="mailto:jitin@glitchzerolabs.com" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Contact via Email</a></li>
              <li><a href="https://wa.me/919008898642" target="_blank" rel="noopener noreferrer" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Contact via WhatsApp</a></li>
              <li><TransitionLink href="/faq" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">FAQs</TransitionLink></li>
            </ul>
          </div>

          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><TransitionLink href="/privacy-policy" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Privacy Policy</TransitionLink></li>
              <li><TransitionLink href="/terms-of-service" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Terms of Service</TransitionLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tungsten/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="typo-tech text-[10px] text-signal text-center md:text-left">© 2025 GlitchZero. Proudly Made in India.</span>
          <div className="flex gap-4">
            <a href="#" className="text-signal hover:text-platinum transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-signal hover:text-platinum transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-signal hover:text-platinum transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
