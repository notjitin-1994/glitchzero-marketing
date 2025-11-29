'use client';

import { FadeInSection, StaggerContainer, StaggerItem, BlurFadeIn } from '@/components/ui/fade-in-section';
import {
  Monitor,
  Zap,
  WifiOff,
  HardDrive,
  Printer,
  Barcode,
  Shield,
  RefreshCw,
  Settings,
  Database,
  Lock,
  Laptop
} from 'lucide-react';

const capabilities = [
  {
    icon: WifiOff,
    title: 'Offline-First Design',
    description: 'Critical operations shouldn\'t stop when the internet does. Full functionality without connectivity, with smart sync when back online.',
  },
  {
    icon: Zap,
    title: 'Native Performance',
    description: 'Instant response times, smooth animations, and efficient resource usage. Your software feels snappy, not sluggish.',
  },
  {
    icon: Printer,
    title: 'Hardware Integration',
    description: 'Seamlessly connect to printers, barcode scanners, POS terminals, and specialized equipment your business relies on.',
  },
  {
    icon: HardDrive,
    title: 'Local Data Security',
    description: 'Sensitive data stays on your machines. Encrypted local storage with your data under your control.',
  },
  {
    icon: RefreshCw,
    title: 'Background Sync',
    description: 'Automatic data synchronization across devices when connected. Always up-to-date, never disruptive.',
  },
  {
    icon: Settings,
    title: 'System Integration',
    description: 'Deep OS integration—file system access, system notifications, keyboard shortcuts, and native menus.',
  },
];

const platforms = [
  {
    name: 'Windows',
    description: 'Windows 10/11 compatible',
    icon: Monitor,
  },
  {
    name: 'macOS',
    description: 'Intel & Apple Silicon',
    icon: Laptop,
  },
];

const useCases = [
  'Point of Sale (POS) Systems',
  'Inventory Management',
  'Billing & Invoicing',
  'Warehouse Operations',
  'Manufacturing Control',
  'Medical Practice Software',
  'Accounting Tools',
  'Field Service Apps',
];

export function DesktopAppsFeatures() {
  return (
    <section className="py-24 md:py-32 px-6 bg-carbon relative">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-signal/5 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeInSection delay={0.1} direction="up">
            <span className="typo-tech text-signal text-xs inline-flex items-center gap-2 mb-4">
              <Monitor className="w-3 h-3" />
              Desktop Excellence
            </span>
          </FadeInSection>

          <BlurFadeIn delay={0.15}>
            <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
              Built for Real Work Environments
            </h2>
          </BlurFadeIn>

          <FadeInSection delay={0.25} direction="up">
            <p className="typo-body text-tungsten max-w-2xl mx-auto text-lg">
              Retail counters. Factory floors. Medical clinics. Field operations. When reliability isn't optional and browser limitations won't cut it, desktop software delivers the power and control your business needs.
            </p>
          </FadeInSection>
        </div>

        {/* Platform Support */}
        <FadeInSection delay={0.2} direction="up" className="mb-16">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="flex items-center gap-4 bg-carbon border border-tungsten/10 px-6 py-4"
                >
                  <div className="w-12 h-12 bg-signal/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-signal" />
                  </div>
                  <div>
                    <h4 className="typo-headline text-lg text-platinum">{platform.name}</h4>
                    <p className="typo-tech text-xs text-tungsten">{platform.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInSection>

        {/* Capabilities Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <StaggerItem key={capability.title}>
                <div className="group h-full bg-carbon border border-tungsten/10 p-6 transition-all duration-500 hover:border-signal/30 hover:shadow-[0_0_30px_rgba(255,79,0,0.1)]">
                  <div className="w-12 h-12 bg-signal/10 flex items-center justify-center mb-4 text-signal group-hover:bg-signal group-hover:text-obsidian transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="typo-headline text-xl text-platinum mb-3">
                    {capability.title}
                  </h3>
                  <p className="typo-body text-sm text-tungsten leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Use Cases */}
        <FadeInSection delay={0.3} direction="up">
          <div className="bg-carbon border border-tungsten/10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="typo-tech text-signal text-xs mb-4 block">Perfect For</span>
                <h3 className="typo-headline text-3xl text-platinum mb-4">
                  Operations That Can't Afford Downtime
                </h3>
                <p className="typo-body text-tungsten leading-relaxed">
                  When your business runs on speed, reliability, and efficiency, you need software that won't let you down. We build desktop applications for the workflows where every second counts and every transaction matters.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-3 p-3 bg-obsidian border border-tungsten/10"
                  >
                    <div className="w-2 h-2 bg-signal rounded-full flex-shrink-0"></div>
                    <span className="typo-tech text-xs text-platinum">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Confidentiality Note */}
        <FadeInSection delay={0.4} direction="up" className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-signal/10 border border-signal/20 px-4 py-2 rounded-sm mb-6">
              <Lock className="w-4 h-4 text-signal" />
              <span className="typo-tech text-xs text-signal">Built for Your Business Alone</span>
            </div>
            <h3 className="typo-headline text-2xl text-platinum mb-4">
              Custom Software, Complete Confidentiality
            </h3>
            <p className="typo-body text-tungsten leading-relaxed">
              The desktop applications we develop contain your proprietary processes, pricing strategies, and operational workflows. This isn't template software—it's your competitive advantage, built exclusively for you. Want to see what's possible for your operations?
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
