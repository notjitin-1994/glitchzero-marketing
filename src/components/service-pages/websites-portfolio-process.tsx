'use client';

import { FadeInSection, StaggerContainer, StaggerItem, BlurFadeIn } from '@/components/ui/fade-in-section';
import {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  MessageSquare,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business, audience, and goals to craft a strategic foundation.',
    icon: <Lightbulb className="w-6 h-6" />,
    highlights: ['Brand Analysis', 'Competitor Research', 'User Personas'],
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating stunning, user-centric designs that embody your brand and convert visitors.',
    icon: <Palette className="w-6 h-6" />,
    highlights: ['UI/UX Design', 'Responsive Layouts', 'Prototyping'],
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building with modern frameworks for blazing-fast performance and seamless functionality.',
    icon: <Code2 className="w-6 h-6" />,
    highlights: ['Next.js / React', 'Performance First', 'SEO Optimization'],
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploying your site with comprehensive testing and ongoing support for success.',
    icon: <Rocket className="w-6 h-6" />,
    highlights: ['QA Testing', 'Analytics Setup', 'Continuous Support'],
  },
];

const testimonial = {
  quote: "GlitchZero transformed our digital presence completely. The attention to detail, speed of delivery, and final product exceeded all our expectations.",
  author: "Megha Sreekumar",
  role: "Co-founder, Smartslate",
  avatar: "MS",
};

export function WebsitesPortfolioProcess() {
  return (
    <section className="py-24 md:py-32 px-6 bg-carbon relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-terminal/5 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-signal/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeInSection delay={0.1} direction="up">
            <span className="typo-tech text-terminal text-xs inline-flex items-center gap-2 mb-4">
              <MessageSquare className="w-3 h-3" />
              Our Approach
            </span>
          </FadeInSection>

          <BlurFadeIn delay={0.15}>
            <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
              From Vision to Reality
            </h2>
          </BlurFadeIn>

          <FadeInSection delay={0.25} direction="up">
            <p className="typo-body text-tungsten max-w-2xl mx-auto">
              Our proven process ensures every project delivers exceptional results, on time and beyond expectations.
            </p>
          </FadeInSection>
        </div>

        {/* Process Steps */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {processSteps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="group relative h-full">
                {/* Connection Line (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-tungsten/30 to-transparent z-0"></div>
                )}

                <div className="relative bg-obsidian border border-tungsten/10 p-6 h-full transition-all duration-500 hover:border-terminal/30 hover:shadow-[0_0_30px_rgba(48,209,88,0.1)]">
                  {/* Number */}
                  <div className="absolute -top-3 -left-3 bg-terminal text-obsidian typo-headline text-sm w-8 h-8 flex items-center justify-center">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-terminal/10 flex items-center justify-center mb-4 text-terminal group-hover:bg-terminal group-hover:text-obsidian transition-colors duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="typo-headline text-xl text-platinum mb-3">
                    {step.title}
                  </h3>
                  <p className="typo-body text-sm text-tungsten mb-4">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {step.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 typo-tech text-xs text-tungsten">
                        <CheckCircle2 className="w-3 h-3 text-terminal" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonial */}
        <FadeInSection delay={0.3} direction="up">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-obsidian border border-tungsten/10 p-8 md:p-12">
              {/* Quote Mark */}
              <div className="absolute -top-4 left-8 text-terminal text-6xl typo-headline opacity-30">
                "
              </div>

              <div className="relative z-10">
                <blockquote className="typo-body text-xl md:text-2xl text-platinum leading-relaxed mb-8">
                  {testimonial.quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-signal to-orange-400 flex items-center justify-center typo-headline text-obsidian">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="typo-headline text-platinum">
                      {testimonial.author}
                    </div>
                    <div className="typo-tech text-xs text-tungsten">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-4 -right-4 bg-carbon border border-tungsten/20 p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-signal" />
                  <div>
                    <div className="typo-headline text-lg text-platinum">+150%</div>
                    <div className="typo-tech text-[10px] text-tungsten">User Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
