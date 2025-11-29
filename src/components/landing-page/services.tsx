'use client';

import { Smartphone, Laptop, Globe } from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem } from '@/components/ui/fade-in-section';

export function Services() {
  return (
    <section id="services" className="py-24 bg-carbon border-y border-obsidian/50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection direction="up" className="mb-16">
          <span className="typo-tech text-signal text-xs">What We Build, Fast.</span>
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Digital Solutions, Delivered at Speed</h2>
        </FadeInSection>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <div className="group bg-obsidian p-8 border border-transparent hover:border-signal/50 transition-all duration-300 relative overflow-hidden h-full">
              <div className="w-12 h-12 bg-carbon flex items-center justify-center mb-6 group-hover:bg-signal transition-colors duration-300">
                <Smartphone className="w-6 h-6 text-platinum group-hover:text-obsidian" />
              </div>
              <h3 className="typo-headline text-xl text-platinum mb-4">Mobile Apps</h3>
              <p className="typo-body text-tungsten leading-relaxed">
                Launch your branded app on Play Store & App Store in record time. Perfect for e-commerce, delivery, or customer loyalty.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-signal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="group bg-obsidian p-8 border border-transparent hover:border-signal/50 transition-all duration-300 relative overflow-hidden h-full">
              <div className="w-12 h-12 bg-carbon flex items-center justify-center mb-6 group-hover:bg-signal transition-colors duration-300">
                <Laptop className="w-6 h-6 text-platinum group-hover:text-obsidian" />
              </div>
              <h3 className="typo-headline text-xl text-platinum mb-4">Business Software</h3>
              <p className="typo-body text-tungsten leading-relaxed">
                We rapidly build simple, powerful software for Windows & Mac to manage inventory, billing, and staff.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-signal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-75"></div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="group bg-obsidian p-8 border border-transparent hover:border-signal/50 transition-all duration-300 relative overflow-hidden h-full">
              <div className="w-12 h-12 bg-carbon flex items-center justify-center mb-6 group-hover:bg-signal transition-colors duration-300">
                <Globe className="w-6 h-6 text-platinum group-hover:text-obsidian" />
              </div>
              <h3 className="typo-headline text-xl text-platinum mb-4">Modern Websites</h3>
              <p className="typo-body text-tungsten leading-relaxed">
               Need a professional website that loads instantly? We design and deploy it fast, optimized for all devices.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-signal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-150"></div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
