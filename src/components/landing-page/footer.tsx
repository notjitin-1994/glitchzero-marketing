import { TrendingUp, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-carbon pt-16 pb-8 border-t border-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-signal flex items-center justify-center">
                <span className="typo-headline text-lg text-obsidian font-bold">G0</span>
              </div>
              <span className="typo-headline text-lg text-platinum">GlitchZero</span>
            </Link>
            <p className="typo-body text-tungsten text-sm">
              Helping Indian businesses go digital. <br />Based in Bengaluru & Delhi.
            </p>
          </div>
          
          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/ecommerce-apps" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">E-commerce Apps</Link></li>
              <li><Link href="/services/business-websites" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Business Websites</Link></li>
              <li><Link href="/services/business-software" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Business Software</Link></li>
              <li><Link href="/services/app-maintenance" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Website/App Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/919008898964" target="_blank" rel="noopener noreferrer" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Contact via WhatsApp</a></li>
              <li><a href="mailto:not.jitin@gmail.com" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Contact via Email</a></li>
              <li><Link href="/faq" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tungsten/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="typo-tech text-[10px] text-tungsten text-center md:text-left">© 2024 GlitchZero. Proudly Made in India. 🇮🇳</span>
          <div className="flex gap-4">
            <a href="#" className="text-tungsten hover:text-platinum transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-tungsten hover:text-platinum transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-tungsten hover:text-platinum transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
