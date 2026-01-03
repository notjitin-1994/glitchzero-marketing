"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Menu, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { TransitionLink } from '@/components/ui/page-transition';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinks = [
  { href: '/why-us', label: 'Why Us' },
  { href: '/pricing', label: 'Pricing' },
];

const serviceLinks = [
  { href: '/services/websites', label: 'Modern Websites' },
  { href: '/services/webapps', label: 'Custom Webapps' },
  { href: '/services/desktop-apps', label: 'Desktop Apps' },
  { href: '/services/mobile-apps', label: 'Mobile Apps' },
  { href: '/services/iot', label: 'IOT Systems' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
        ? "bg-obsidian/80 backdrop-blur-xl border-white/10 py-0"
        : "bg-transparent backdrop-blur-none border-transparent py-2"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <TransitionLink href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-signal/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/glitchzero-logo.png"
                alt="GlitchZero Logo"
                width={32}
                height={32}
                className="w-8 h-8 relative z-10 transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <span className="typo-headline text-xl text-platinum group-hover:text-signal transition-colors duration-300">
              <span className="glitch" data-text="Glitch">Glitch</span>
              <span className="relative">
                Zero
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-signal transition-all duration-300 group-hover:w-full"></span>
              </span>
            </span>
          </TransitionLink>
        </div>

        <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-0 h-full -translate-x-1/2">
          {/* Services Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <DropdownMenu open={isServicesOpen} modal={false}>
              <DropdownMenuTrigger asChild>
                <div className="relative typo-subhead text-sm text-tungsten hover:text-platinum transition-colors duration-300 group py-2 flex items-center gap-1 outline-none cursor-pointer h-full">
                  <TransitionLink href="/services" className="flex items-center gap-1">
                    Services
                  </TransitionLink>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-1.5 left-1/2 w-0 h-[1px] bg-signal transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-obsidian/95 backdrop-blur-xl border-white/10 p-2 min-w-[200px] mt-2"
                align="center"
                sideOffset={0}
              >
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <TransitionLink
                      href={service.href}
                      className="w-full typo-subhead text-sm text-tungsten hover:text-signal hover:bg-white/5 cursor-pointer rounded-sm py-2 px-3 transition-colors"
                    >
                      {service.label}
                    </TransitionLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {navLinks.map((link) => (
            <div key={link.href} className="relative h-full flex items-center">
              <TransitionLink
                href={link.href}
                className="relative typo-subhead text-sm text-tungsten hover:text-platinum transition-colors duration-300 group py-2 flex items-center"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-1/2 w-0 h-[1px] bg-signal transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
              </TransitionLink>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@glitchzerolabs.com"
            className="hidden md:flex items-center gap-2 bg-signal text-obsidian px-5 py-2.5 rounded-sm transition-all duration-300 group shadow-[0_4px_15px_rgba(255,79,0,0.3)] hover:shadow-[0_8px_25px_rgba(255,79,0,0.5)] hover:-translate-y-0.5 relative overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Mail className="w-4 h-4 relative z-10" />
            <span className="typo-headline text-xs font-bold relative z-10 tracking-wider">CONTACT US</span>
          </a>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-platinum hover:text-signal hover:bg-white/5">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-obsidian/95 backdrop-blur-xl border-l border-white/10 w-[300px] p-0 shadow-2xl overflow-y-auto">
                <div className="flex flex-col min-h-full relative overflow-hidden">
                  {/* Mobile Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-signal/5 blur-[80px] rounded-full pointer-events-none"></div>

                  <div className="p-6 border-b border-white/5 flex items-center justify-between relative z-10">
                    <TransitionLink href="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsSheetOpen(false)}>
                      <span className="typo-headline text-xl text-platinum">
                        Glitch<span className="text-signal">Zero</span>
                      </span>
                    </TransitionLink>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-tungsten hover:text-signal hover:bg-white/5 rounded-full">
                        <X className="w-5 h-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  <div className="flex-1 flex flex-col p-8 relative z-10">
                    <nav className="flex flex-col gap-6">
                      <Accordion type="single" collapsible className="w-full border-none">
                        <AccordionItem value="services" className="border-none">
                          <AccordionTrigger className="typo-headline text-2xl text-tungsten hover:text-platinum hover:no-underline py-2">
                            Services
                          </AccordionTrigger>
                          <AccordionContent className="flex flex-col gap-4 pl-4 pt-2">
                            {serviceLinks.map((service) => (
                              <TransitionLink
                                key={service.href}
                                href={service.href}
                                className="text-lg !text-white hover:text-signal transition-colors block py-1 relative z-20 opacity-100 font-medium"
                                style={{ color: 'white' }}
                                onClick={() => setIsSheetOpen(false)}
                              >
                                {service.label}
                              </TransitionLink>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      {navLinks.map((link) => (
                        <TransitionLink
                          key={link.href}
                          href={link.href}
                          className="typo-headline text-2xl text-tungsten hover:text-platinum hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-signal py-2"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {link.label}
                        </TransitionLink>
                      ))}
                    </nav>
                  </div>
                  <div className="p-8 mt-auto relative z-10">
                    <a
                      href="mailto:hello@glitchzerolabs.com"
                      className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-platinum hover:bg-signal hover:text-obsidian hover:border-signal px-6 py-4 rounded-sm transition-all duration-300 group"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="typo-headline text-xs tracking-wider">Contact Us</span>
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
