"use client";

import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { TransitionLink } from '@/components/ui/page-transition';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/pricing', label: 'Pricing' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-obsidian/90 backdrop-blur-md border-b border-carbon">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <TransitionLink href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-signal flex items-center justify-center">
            <span className="typo-headline text-lg text-obsidian font-bold">G0</span>
          </div>
          <span className="typo-headline text-xl text-platinum group-hover:text-signal transition-colors">
            <span className="glitch" data-text="Glitch">Glitch</span>
            <span style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.5), 0 0 16px rgba(255, 255, 255, 0.25)' }}>Zero</span>
          </span>
        </TransitionLink>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <TransitionLink key={link.href} href={link.href} className="typo-subhead text-tungsten hover:text-platinum transition-colors text-sm">
              {link.label}
            </TransitionLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
            <a
              href="mailto:hello@glitchzerolabs.com"
              className="hidden md:flex items-center gap-2 border border-tungsten/30 text-platinum hover:border-signal hover:text-signal hover:bg-carbon px-3 py-1.5 rounded-md transition-colors group"
            >
                <Mail className="w-4 h-4 text-tungsten group-hover:text-signal" />
                <span className="typo-tech text-xs text-platinum group-hover:text-signal">Contact Us</span>
            </a>

            <div className="md:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-platinum hover:text-signal hover:bg-carbon">
                        <Menu className="w-6 h-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-obsidian border-carbon w-[280px] p-0">
                    <div className="flex flex-col h-full">
                        <div className="p-6 border-b border-carbon flex items-center justify-between">
                             <TransitionLink href="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsSheetOpen(false)}>
                                <div className="w-8 h-8 bg-signal flex items-center justify-center">
                                    <span className="typo-headline text-lg text-obsidian font-bold">G0</span>
                                </div>
                                <span className="typo-headline text-xl text-platinum">
                                  Glitch<span style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.5), 0 0 16px rgba(255, 255, 255, 0.25)' }}>Zero</span>
                                </span>
                            </TransitionLink>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon" className="text-tungsten hover:text-signal hover:bg-carbon">
                                    <X className="w-5 h-5"/>
                                </Button>
                            </SheetClose>
                        </div>
                        <div className="flex-1 flex flex-col justify-center p-6">
                            <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <TransitionLink
                                  key={link.href}
                                  href={link.href}
                                  className="typo-headline text-2xl text-platinum hover:text-signal transition-colors"
                                  onClick={() => setIsSheetOpen(false)}
                                >
                                    {link.label}
                                </TransitionLink>
                            ))}
                            </nav>
                        </div>
                        <div className="p-6 mt-auto">
                             <a
                               href="mailto:hello@glitchzerolabs.com"
                               className="w-full flex items-center justify-center gap-2 border border-tungsten/30 text-platinum hover:border-signal hover:text-signal hover:bg-carbon px-4 py-2.5 rounded-md transition-colors group"
                             >
                                <Mail className="w-4 h-4 text-tungsten group-hover:text-signal" />
                                <span className="typo-tech text-xs text-platinum group-hover:text-signal">Contact Us</span>
                            </a>
                        </div>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
