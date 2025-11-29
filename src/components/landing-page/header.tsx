import { TrendingUp, Mail, Menu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <nav className="fixed w-full z-50 bg-obsidian/90 backdrop-blur-md border-b border-carbon">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-signal flex items-center justify-center">
            <TrendingUp className="text-obsidian w-5 h-5 fill-current" />
          </div>
          <span className="typo-headline text-xl text-platinum group-hover:text-signal transition-colors">
            <span className="glitch" data-text="Glitch">Glitch</span>Zero
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="typo-subhead text-tungsten hover:text-platinum transition-colors text-sm">Services</Link>
          <Link href="/why-us" className="typo-subhead text-tungsten hover:text-platinum transition-colors text-sm">Why Us</Link>
          <Link href="/pricing" className="typo-subhead text-tungsten hover:text-platinum transition-colors text-sm">Pricing</Link>
        </div>

        <button className="hidden md:flex items-center gap-2 border border-tungsten/30 px-5 py-2 hover:border-signal transition-colors group">
          <Mail className="w-4 h-4 text-tungsten group-hover:text-signal" />
          <span className="typo-tech text-xs text-platinum group-hover:text-signal">Contact Us</span>
        </button>
        
        <button className="md:hidden text-platinum hover:text-signal">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
