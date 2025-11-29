'use client';

import { FadeInSection, StaggerContainer, StaggerItem, BlurFadeIn } from '@/components/ui/fade-in-section';
import {
  Cpu,
  Radio,
  Cloud,
  Shield,
  Activity,
  Settings,
  Zap,
  RefreshCw,
  Lock,
  Gauge,
  Wifi,
  Server
} from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: 'Firmware Development',
    description: 'Custom embedded software for microcontrollers and single-board computers. Optimized for your specific hardware requirements.',
  },
  {
    icon: Radio,
    title: 'Wireless Communication',
    description: 'WiFi, Bluetooth, LoRa, Zigbee, and cellular connectivity. We choose the right protocol for your range, power, and data needs.',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Secure data pipelines to AWS, Azure, or GCP. Real-time data ingestion, storage, and processing at scale.',
  },
  {
    icon: Shield,
    title: 'End-to-End Security',
    description: 'TLS encryption, secure boot, device authentication, and encrypted storage. Your data is protected at every layer.',
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Live dashboards showing device status, sensor readings, and system health. Instant alerts when something needs attention.',
  },
  {
    icon: RefreshCw,
    title: 'OTA Updates',
    description: 'Deploy firmware updates remotely to thousands of devices. Rollback capability and staged deployments for safety.',
  },
];

const techStack = [
  { name: 'ESP32 / ESP8266', category: 'Microcontrollers' },
  { name: 'Raspberry Pi', category: 'SBCs' },
  { name: 'Arduino', category: 'Prototyping' },
  { name: 'STM32', category: 'Industrial' },
  { name: 'MQTT / CoAP', category: 'Protocols' },
  { name: 'AWS IoT Core', category: 'Cloud' },
];

const useCases = [
  'Smart Home Automation',
  'Industrial Monitoring',
  'Asset Tracking',
  'Environmental Sensors',
  'Smart Agriculture',
  'Energy Management',
  'Healthcare Devices',
  'Retail Analytics',
];

export function IotFeatures() {
  return (
    <section className="py-24 md:py-32 px-6 bg-carbon relative">
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-signal/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-terminal/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeInSection delay={0.1} direction="up">
            <span className="typo-tech text-signal text-xs inline-flex items-center gap-2 mb-4">
              <Cpu className="w-3 h-3" />
              Full-Stack IoT
            </span>
          </FadeInSection>

          <BlurFadeIn delay={0.15}>
            <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
              From Sensor to Dashboard
            </h2>
          </BlurFadeIn>

          <FadeInSection delay={0.25} direction="up">
            <p className="typo-body text-tungsten max-w-2xl mx-auto text-lg">
              IoT isn't just about connecting things—it's about making sense of the physical world. We build the complete stack: embedded firmware, communication layers, cloud infrastructure, and the interfaces that turn raw data into actionable intelligence.
            </p>
          </FadeInSection>
        </div>

        {/* Tech Stack Pills */}
        <FadeInSection delay={0.2} direction="up" className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-carbon border border-tungsten/10 px-4 py-2"
              >
                <span className="typo-tech text-xs text-signal">{tech.name}</span>
                <span className="typo-tech text-[10px] text-tungsten">/ {tech.category}</span>
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
                <span className="typo-tech text-signal text-xs mb-4 block">Applications</span>
                <h3 className="typo-headline text-3xl text-platinum mb-4">
                  Intelligence for Every Industry
                </h3>
                <p className="typo-body text-tungsten leading-relaxed">
                  Whether you're monitoring a single room or managing thousands of devices across continents, we architect IoT solutions that scale. From proof-of-concept to production deployment, we're with you every step of the way.
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

        {/* Proprietary Note */}
        <FadeInSection delay={0.4} direction="up" className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-signal/10 border border-signal/20 px-4 py-2 rounded-sm mb-6">
              <Lock className="w-4 h-4 text-signal" />
              <span className="typo-tech text-xs text-signal">Proprietary Hardware Integration</span>
            </div>
            <h3 className="typo-headline text-2xl text-platinum mb-4">
              Your Innovation, Protected
            </h3>
            <p className="typo-body text-tungsten leading-relaxed">
              IoT projects often involve proprietary hardware designs, custom protocols, and trade secrets that give you a market edge. We treat every project with strict confidentiality—your intellectual property remains yours alone. Have a concept in mind? Let's explore it together.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
