'use client';

import { FadeInSection, StaggerContainer, StaggerItem, BlurFadeIn } from '@/components/ui/fade-in-section';
import {
  Layers,
  Zap,
  Shield,
  BarChart3,
  Users,
  Workflow,
  Database,
  Globe,
  Lock,
  RefreshCw,
  Plug,
  HeadphonesIcon
} from 'lucide-react';

const capabilities = [
  {
    icon: Layers,
    title: 'Complex Business Logic',
    description: 'Multi-tenant architectures, role-based access, and intricate workflows tailored to how your team actually works.',
  },
  {
    icon: Database,
    title: 'Data-Intensive Applications',
    description: 'Handle millions of records with ease. Real-time dashboards, advanced filtering, and lightning-fast queries.',
  },
  {
    icon: Plug,
    title: 'Third-Party Integrations',
    description: 'Seamlessly connect with your existing tools—CRMs, ERPs, payment gateways, and custom APIs.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, audit trails, and compliance-ready infrastructure from day one.',
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Collaboration',
    description: 'Live updates, instant notifications, and multi-user editing that keeps your team in sync.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Transform raw data into actionable insights with custom reporting and visualization tools.',
  },
];

const useCases = [
  'Customer Portals & Dashboards',
  'Inventory Management Systems',
  'CRM & Sales Platforms',
  'Booking & Scheduling Apps',
  'E-commerce Backends',
  'Internal Operations Tools',
  'SaaS Products',
  'Data Management Platforms',
];

export function WebappsFeatures() {
  return (
    <section className="py-24 md:py-32 px-6 bg-carbon relative">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-signal/5 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeInSection delay={0.1} direction="up">
            <span className="typo-tech text-signal text-xs inline-flex items-center gap-2 mb-4">
              <Workflow className="w-3 h-3" />
              What We Build
            </span>
          </FadeInSection>

          <BlurFadeIn delay={0.15}>
            <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
              Tailored to Your Exact Needs
            </h2>
          </BlurFadeIn>

          <FadeInSection delay={0.25} direction="up">
            <p className="typo-body text-tungsten max-w-2xl mx-auto text-lg">
              No two businesses are alike. That's why cookie-cutter solutions fall short. We dive deep into your operations, understand your pain points, and craft applications that feel like they were built by someone who truly gets your business—because they were.
            </p>
          </FadeInSection>
        </div>

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
                <span className="typo-tech text-signal text-xs mb-4 block">Common Applications</span>
                <h3 className="typo-headline text-3xl text-platinum mb-4">
                  Built for Your Industry
                </h3>
                <p className="typo-body text-tungsten leading-relaxed">
                  Whether you're streamlining internal operations or launching a customer-facing platform, we've helped businesses across industries transform their ideas into powerful web applications.
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

        {/* Why Private */}
        <FadeInSection delay={0.4} direction="up" className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-signal/10 border border-signal/20 px-4 py-2 rounded-sm mb-6">
              <Lock className="w-4 h-4 text-signal" />
              <span className="typo-tech text-xs text-signal">Confidential by Design</span>
            </div>
            <h3 className="typo-headline text-2xl text-platinum mb-4">
              Your Competitive Advantage Stays Yours
            </h3>
            <p className="typo-body text-tungsten leading-relaxed">
              Every application we build contains proprietary business logic, sensitive data flows, and strategic workflows unique to your organization. That's why our work remains confidential—your competitive edge is safe with us. Ready to see what's possible? Let's talk.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
