'use client';

import {
  Globe,
  AppWindow,
  MonitorSmartphone,
  Smartphone,
  Cpu,
  ArrowRight,
  Check,
  Zap,
  Clock,
  Shield,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';

interface ServiceFeature {
  text: string;
  icon: LucideIcon;
}

interface ServiceStat {
  value: string;
  label: string;
}

interface Service {
  id: string;
  icon: LucideIcon;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: ServiceFeature[];
  stats: ServiceStat[];
  isTerminal: boolean;
  ctaText: string;
  ctaLink?: string;
}

const services: Service[] = [
  {
    id: 'websites',
    icon: Globe,
    number: '01',
    title: 'Modern Websites',
    tagline: 'Your Digital Storefront',
    description:
      "We build ultra-fast, mobile-first websites that look stunning and rank high on Google. Our AI-accelerated process means we can go from design to deployment in days, not months.",
    features: [
      { text: 'Rapid design & deployment', icon: Zap },
      { text: 'SEO optimized from day one', icon: TrendingUp },
      { text: 'Mobile-first and responsive', icon: Smartphone },
      { text: 'Instant-loading pages', icon: Clock },
    ],
    stats: [
      { value: '< 2s', label: 'Load Time' },
      { value: '100%', label: 'Mobile Ready' },
      { value: 'A+', label: 'SEO Score' },
    ],
    isTerminal: false,
    ctaText: 'View Portfolio',
    ctaLink: '/services/websites',
  },
  {
    id: 'web-apps',
    icon: AppWindow,
    number: '02',
    title: 'Custom Web Apps',
    tagline: 'Powerful & Scalable',
    description:
      'From complex e-commerce platforms to internal business dashboards, we build powerful web applications tailored to your exact needs with scalable architecture.',
    features: [
      { text: 'E-commerce & payment integration', icon: Shield },
      { text: 'Customer portals & dashboards', icon: AppWindow },
      { text: 'Scalable cloud architecture', icon: TrendingUp },
      { text: 'Real-time data sync', icon: Zap },
    ],
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '10x', label: 'Faster Dev' },
      { value: '∞', label: 'Scalable' },
    ],
    isTerminal: true,
    ctaText: 'Explore',
    ctaLink: '/services/webapps',
  },
  {
    id: 'desktop-apps',
    icon: MonitorSmartphone,
    number: '03',
    title: 'Desktop Apps',
    tagline: 'Windows & macOS',
    description:
      'Streamline your operations with custom desktop software. We rapidly develop applications for inventory management, POS systems, billing, and more.',
    features: [
      { text: 'Windows & macOS compatible', icon: MonitorSmartphone },
      { text: 'Offline-first functionality', icon: Shield },
      { text: 'Custom inventory & billing', icon: AppWindow },
      { text: 'Native performance', icon: Zap },
    ],
    stats: [
      { value: '2x', label: 'Platforms' },
      { value: '100%', label: 'Offline Ready' },
      { value: '60%', label: 'Faster' },
    ],
    isTerminal: false,
    ctaText: 'Explore',
    ctaLink: '/services/desktop-apps',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    number: '04',
    title: 'Mobile Apps',
    tagline: 'iOS & Android',
    description:
      "Launch your brand on Play Store and App Store. We develop beautiful, intuitive apps using unified codebases and AI-powered testing to reduce time and cost.",
    features: [
      { text: 'Android & iOS development', icon: Smartphone },
      { text: 'App Store submission', icon: Check },
      { text: 'Push notifications', icon: Zap },
      { text: 'Seamless UX design', icon: TrendingUp },
    ],
    stats: [
      { value: '2', label: 'Platforms' },
      { value: '1', label: 'Codebase' },
      { value: '50%', label: 'Cost Saved' },
    ],
    isTerminal: true,
    ctaText: 'View Portfolio',
  },
  {
    id: 'iot-apps',
    icon: Cpu,
    number: '05',
    title: 'IoT Systems',
    tagline: 'Connected Devices',
    description:
      'Build software for IoT and embedded systems. Create smart products and automate processes with secure communication protocols and rapid prototyping.',
    features: [
      { text: 'Hardware-software integration', icon: Cpu },
      { text: 'Real-time monitoring', icon: TrendingUp },
      { text: 'Secure communication', icon: Shield },
      { text: 'Firmware development', icon: Zap },
    ],
    stats: [
      { value: '24/7', label: 'Monitoring' },
      { value: 'E2E', label: 'Encrypted' },
      { value: 'OTA', label: 'Updates' },
    ],
    isTerminal: false,
    ctaText: 'Explore',
    ctaLink: '/services/iot',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isReversed = index % 2 === 1;
  const Icon = service.icon;
  const accentColor = service.isTerminal ? 'terminal' : 'signal';

  return (
    <FadeInSection
      id={service.id}
      direction={isReversed ? 'right' : 'left'}
      className="scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Content Side */}
        <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
          {/* Number & Title Row */}
          <div className="flex items-start gap-6 mb-8">
            <div className="relative hidden sm:block">
              <span className="typo-headline text-7xl md:text-8xl font-bold text-platinum/20 select-none">
                {service.number}
              </span>
              <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${service.isTerminal ? 'bg-terminal/10' : 'bg-signal/10'} rounded-full blur-xl`}></div>
            </div>
            <div className="sm:pt-4">
              <div className="flex items-center gap-3 sm:hidden mb-2">
                <span className={`typo-headline text-3xl font-bold ${service.isTerminal ? 'text-terminal' : 'text-signal'}`}>
                  {service.number}
                </span>
                <div className={`w-8 h-px ${service.isTerminal ? 'bg-terminal/50' : 'bg-signal/50'}`}></div>
              </div>
              <span className={`typo-tech text-xs ${service.isTerminal ? 'text-terminal' : 'text-signal'} tracking-widest uppercase`}>
                {service.tagline}
              </span>
              <h3 className="typo-headline text-3xl md:text-4xl text-platinum mt-1">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="typo-body text-tungsten text-lg leading-relaxed mb-8 max-w-xl">
            {service.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {service.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.text}
                  className="group flex items-center gap-3 p-3 bg-obsidian/50 border border-tungsten/10 hover:border-signal/30 transition-all duration-300 rounded-sm"
                >
                  <div className={`w-8 h-8 flex items-center justify-center ${service.isTerminal ? 'bg-terminal/10 group-hover:bg-terminal/20' : 'bg-signal/10 group-hover:bg-signal/20'} rounded-sm transition-colors`}>
                    <FeatureIcon className={`w-4 h-4 ${service.isTerminal ? 'text-terminal' : 'text-signal'}`} />
                  </div>
                  <span className="typo-body text-platinum text-sm">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href={service.ctaLink || '#'}
            className={`inline-flex items-center gap-2 typo-tech text-sm ${service.isTerminal ? 'text-terminal' : 'text-signal'} hover:underline underline-offset-4 group`}
          >
            {service.ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Visual Side - Stats Card */}
        <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : ''}`}>
          <div className="relative">
            {/* Background Decoration */}
            <div className={`absolute inset-0 ${service.isTerminal ? 'bg-gradient-to-br from-terminal/5' : 'bg-gradient-to-br from-signal/5'} to-transparent rounded-sm transform ${isReversed ? '-rotate-3' : 'rotate-3'}`}></div>

            {/* Main Card */}
            <div className="relative bg-obsidian border border-tungsten/20 p-8 rounded-sm overflow-hidden">
              {/* Icon Header */}
              <div className="flex items-center justify-between mb-8">
                <div className={`w-16 h-16 flex items-center justify-center ${service.isTerminal ? 'bg-terminal/10 border-terminal/30' : 'bg-signal/10 border-signal/30'} border rounded-sm`}>
                  <Icon className={`w-8 h-8 ${service.isTerminal ? 'text-terminal' : 'text-signal'}`} />
                </div>
                <div className={`w-20 h-1 ${service.isTerminal ? 'bg-gradient-to-r from-terminal to-transparent' : 'bg-gradient-to-r from-signal to-transparent'}`}></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {service.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`typo-headline text-2xl md:text-3xl ${service.isTerminal ? 'text-terminal' : 'text-signal'} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="typo-tech text-xs text-tungsten uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Lines */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className={`absolute top-4 right-4 w-full h-px ${service.isTerminal ? 'bg-gradient-to-l from-terminal/30' : 'bg-gradient-to-l from-signal/30'} to-transparent`}></div>
                <div className={`absolute top-4 right-4 w-px h-full ${service.isTerminal ? 'bg-gradient-to-b from-terminal/30' : 'bg-gradient-to-b from-signal/30'} to-transparent`}></div>
              </div>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.isTerminal ? 'bg-gradient-to-r from-terminal via-terminal/50 to-transparent' : 'bg-gradient-to-r from-signal via-signal/50 to-transparent'}`}></div>
            </div>

            {/* Floating Badge */}
            <div className={`absolute -top-3 -right-3 ${service.isTerminal ? 'bg-terminal' : 'bg-signal'} text-obsidian px-3 py-1 typo-tech text-xs rounded-sm shadow-lg`}>
              {service.number}
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      {index < services.length - 1 && (
        <div className="flex items-center justify-center mt-24">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-tungsten/30 to-transparent"></div>
          <div className="w-2 h-2 bg-signal/30 rounded-full mx-4"></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-tungsten/30 to-transparent"></div>
        </div>
      )}
    </FadeInSection>
  );
}

export function ServicesDetails() {
  return (
    <section className="py-24 bg-carbon border-y border-obsidian/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeInSection direction="up" className="text-center mb-20">
          <span className="typo-tech text-signal text-xs tracking-widest uppercase">Our Expertise</span>
          <h2 className="typo-headline text-4xl md:text-5xl text-platinum mt-4 mb-6">
            Solutions That <span className="text-signal">Transform</span> Business
          </h2>
          <p className="typo-body text-tungsten max-w-2xl mx-auto text-lg">
            From concept to deployment, we craft digital experiences that drive growth and delight users.
          </p>
        </FadeInSection>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>

      {/* Bottom CTA Section - Full Width */}
      <FadeInSection direction="up" className="mt-32">
        <div className="bg-obsidian border-y border-tungsten/20 py-16 md:py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h3 className="typo-headline text-2xl md:text-3xl text-platinum mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="typo-body text-tungsten mb-8 max-w-lg mx-auto">
              Let's discuss your project. We'll help you identify the perfect solution for your business goals.
            </p>
            <a
              href="https://wa.me/919008898642"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-signal text-obsidian px-8 py-4 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)]"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
