'use client';

import { FadeInSection, StaggerContainer, StaggerItem, BlurFadeIn } from '@/components/ui/fade-in-section';
import {
  Smartphone,
  Zap,
  Shield,
  RefreshCw,
  Cloud,
  Bell,
  Fingerprint,
  Wifi,
  Battery,
  Download,
  Code2,
  Rocket
} from 'lucide-react';

const capabilities = [
  {
    icon: Code2,
    title: 'Unified Codebase',
    description: 'One codebase for iOS and Android using Flutter. Faster development, consistent experience, and reduced maintenance costs.',
  },
  {
    icon: Zap,
    title: 'Native Performance',
    description: 'Compiled to native ARM code for buttery-smooth 60fps animations and instant responsiveness users expect.',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless backend connectivity with Firebase, AWS, or your existing infrastructure. Real-time sync that just works.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Keep users engaged with timely, relevant notifications. Segment audiences and automate messaging workflows.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Security',
    description: 'Face ID, Touch ID, and fingerprint authentication. Secure sessions and encrypted data storage out of the box.',
  },
  {
    icon: Wifi,
    title: 'Offline-First Design',
    description: 'Apps that work without internet. Automatic sync when connection returns—no data loss, no frustrated users.',
  },
];

const useCases = [
  'Restaurant & F&B Management',
  'Inventory Tracking Systems',
  'Customer Loyalty Apps',
  'Field Service Applications',
  'E-commerce Mobile Stores',
  'Internal Team Tools',
  'Booking & Scheduling',
  'Healthcare & Fitness Apps',
];

const platforms = [
  { name: 'iOS', icon: '🍎', description: 'iPhone & iPad' },
  { name: 'Android', icon: '🤖', description: 'Phones & Tablets' },
];

export function MobileappsFeatures() {
  return (
    <section className="py-24 md:py-32 px-6 bg-obsidian relative">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-terminal/5 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeInSection delay={0.1} direction="up">
            <span className="typo-tech text-terminal text-xs inline-flex items-center gap-2 mb-4">
              <Smartphone className="w-3 h-3" />
              What We Deliver
            </span>
          </FadeInSection>

          <BlurFadeIn delay={0.15}>
            <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
              Built for the Modern Mobile Era
            </h2>
          </BlurFadeIn>

          <FadeInSection delay={0.25} direction="up">
            <p className="typo-body text-tungsten max-w-2xl mx-auto text-lg">
              Your users live on their phones. We build apps that feel native, perform flawlessly, and scale with your business—without the overhead of maintaining separate iOS and Android teams.
            </p>
          </FadeInSection>
        </div>

        {/* Platform Support */}
        <FadeInSection delay={0.2} direction="up" className="mb-16">
          <div className="flex justify-center gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-4 bg-carbon border border-tungsten/10 px-6 py-4 hover:border-terminal/30 transition-all duration-300"
              >
                <span className="text-3xl">{platform.icon}</span>
                <div>
                  <span className="typo-headline text-lg text-platinum block">{platform.name}</span>
                  <span className="typo-tech text-[10px] text-tungsten">{platform.description}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Capabilities Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <StaggerItem key={capability.title}>
                <div className="group h-full bg-carbon border border-tungsten/10 p-6 transition-all duration-500 hover:border-terminal/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                  <div className="w-12 h-12 bg-terminal/10 flex items-center justify-center mb-4 text-terminal group-hover:bg-terminal group-hover:text-obsidian transition-colors duration-300">
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
                <span className="typo-tech text-terminal text-xs mb-4 block">Common Applications</span>
                <h3 className="typo-headline text-3xl text-platinum mb-4">
                  Apps for Every Industry
                </h3>
                <p className="typo-body text-tungsten leading-relaxed">
                  From restaurant management to healthcare, we've built mobile solutions that transform how businesses operate. Your idea deserves an app that users love.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-3 p-3 bg-obsidian border border-tungsten/10"
                  >
                    <div className="w-2 h-2 bg-terminal rounded-full flex-shrink-0"></div>
                    <span className="typo-tech text-xs text-platinum">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Development Process */}
        <FadeInSection delay={0.4} direction="up" className="mt-16">
          <div className="bg-gradient-to-r from-terminal/5 to-teal-500/5 border border-tungsten/10 p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="typo-tech text-terminal text-xs mb-2 block">Our Process</span>
              <h3 className="typo-headline text-2xl md:text-3xl text-platinum">
                From Idea to App Store in Weeks
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understand your vision, users, and goals' },
                { step: '02', title: 'Design', desc: 'Craft intuitive UI/UX that users love' },
                { step: '03', title: 'Development', desc: 'Build with Flutter for both platforms' },
                { step: '04', title: 'Launch', desc: 'Deploy to App Store & Play Store' },
              ].map((phase, idx) => (
                <div key={phase.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-terminal/10 border border-terminal/30 flex items-center justify-center mb-4">
                      <span className="typo-headline text-terminal">{phase.step}</span>
                    </div>
                    <h4 className="typo-headline text-lg text-platinum mb-2">{phase.title}</h4>
                    <p className="typo-body text-sm text-tungsten">{phase.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+30px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-terminal/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* App Store Ready */}
        <FadeInSection delay={0.5} direction="up" className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-terminal/10 border border-terminal/20 px-4 py-2 rounded-sm mb-6">
              <Rocket className="w-4 h-4 text-terminal" />
              <span className="typo-tech text-xs text-terminal">Store Ready</span>
            </div>
            <h3 className="typo-headline text-2xl text-platinum mb-4">
              We Handle the Entire Journey
            </h3>
            <p className="typo-body text-tungsten leading-relaxed">
              From initial concept through App Store and Play Store submission—we manage app signing, screenshots, descriptions, and the review process. Your app launches smoothly while you focus on your business.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
