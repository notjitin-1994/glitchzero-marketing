import { TrendingUp, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-carbon pt-16 pb-8 border-t border-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-signal flex items-center justify-center">
                <TrendingUp className="text-obsidian w-3 h-3 fill-current" />
              </div>
              <span className="typo-headline text-lg text-platinum">GlitchZero</span>
            </div>
            <p className="typo-body text-tungsten text-sm">
              Helping Indian businesses go digital. <br />Based in Bengaluru & Delhi.
            </p>
          </div>
          
          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">E-commerce Apps</a></li>
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Business Websites</a></li>
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Billing Software</a></li>
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">App Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Contact via WhatsApp</a></li>
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="typo-tech text-platinum text-xs mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="typo-subhead text-tungsten text-sm hover:text-signal transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tungsten/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="typo-tech text-[10px] text-tungsten">© 2024 GlitchZero. Proudly Made in India. 🇮🇳</span>
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
