'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInSection, StaggerContainer, StaggerItem, BlurFadeIn } from '@/components/ui/fade-in-section';
import {
  ExternalLink,
  Globe,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  ShoppingBag,
  GraduationCap,
  Palette,
  ArrowUpRight
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  image: string;
  link: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  technologies: string[];
  color: 'signal' | 'terminal';
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'smartslate',
    title: 'Smartslate',
    subtitle: 'EdTech SaaS Platform',
    description: 'A revolutionary AI-powered learning platform transforming educational technology. Built with Next.js and modern design principles, featuring dynamic pricing pages, product showcases, and seamless user experiences.',
    categories: ['SaaS', 'EdTech', 'Web App'],
    image: '/portfolio/smartslate-home.png',
    link: 'https://www.smartslate.io/',
    metrics: [
      { label: 'Performance', value: '98/100', icon: <Zap className="w-4 h-4" /> },
      { label: 'Engagement', value: '+150%', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'Users', value: '10K+', icon: <Users className="w-4 h-4" /> },
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'signal',
    featured: true,
  },
  {
    id: 'stex-decor',
    title: 'S-Tex Decor',
    subtitle: 'Luxury E-Commerce',
    description: 'An elegant luxury fabrics and home furnishings e-commerce platform. Features beautiful product carousels, sophisticated category navigation, and a refined aesthetic that matches the premium brand positioning.',
    categories: ['E-Commerce', 'Luxury', 'B2C'],
    image: '/portfolio/stexcoin-home.png',
    link: 'https://stexcoin.netlify.app/',
    metrics: [
      { label: 'Products', value: '500+', icon: <ShoppingBag className="w-4 h-4" /> },
      { label: 'Design Score', value: '98%', icon: <Palette className="w-4 h-4" /> },
      { label: 'Mobile UX', value: 'A+', icon: <Sparkles className="w-4 h-4" /> },
    ],
    technologies: ['React', 'E-Commerce', 'Responsive', 'Performance'],
    color: 'terminal',
  },
  {
    id: 'solara',
    title: 'Solara Learning Engine',
    subtitle: 'AI Learning Ecosystem',
    description: 'The world\'s first AI-native learning platform featuring six integrated modules. Stunning dark-themed design with interactive product showcases, animated statistics, and enterprise-grade architecture.',
    categories: ['SaaS', 'AI Platform', 'Enterprise'],
    image: '/portfolio/solara-home.png',
    link: 'https://solara.smartslate.io/',
    metrics: [
      { label: 'Faster Dev', value: '70-80%', icon: <Zap className="w-4 h-4" /> },
      { label: 'Completion', value: '3-5x', icon: <GraduationCap className="w-4 h-4" /> },
      { label: 'Tools Replaced', value: '7-15', icon: <Sparkles className="w-4 h-4" /> },
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'AI Integration'],
    color: 'signal',
    featured: true,
  },
];

export function WebsitesPortfolioShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 bg-obsidian relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-signal/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInSection delay={0.1} direction="up">
            <span className="typo-tech text-signal text-xs inline-flex items-center gap-2 mb-4">
              <Globe className="w-3 h-3" />
              Featured Projects
            </span>
          </FadeInSection>

          <BlurFadeIn delay={0.15}>
            <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
              Crafted with Precision
            </h2>
          </BlurFadeIn>

          <FadeInSection delay={0.25} direction="up">
            <p className="typo-body text-tungsten max-w-2xl mx-auto">
              Every project tells a story of collaboration, innovation, and excellence. Discover how we transform ideas into exceptional digital experiences.
            </p>
          </FadeInSection>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <StaggerContainer staggerDelay={0.15} className="space-y-24">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <ProjectCard
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatePresence>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ProjectCard({ project, index, isHovered, onHover, onLeave }: ProjectCardProps) {
  const isReversed = index % 2 !== 0;
  const isSignal = project.color === 'signal';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image Section */}
      <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative"
        >
          {/* Browser Frame */}
          <div className="relative bg-carbon border border-tungsten/20 rounded-lg overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-signal/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-carbon/90 border-b border-tungsten/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-obsidian/50 rounded-sm px-3 py-1.5 flex items-center gap-2 text-xs text-tungsten max-w-xs">
                  <Globe className="w-3 h-3" />
                  <span className="typo-tech truncate">{project.link.replace('https://', '')}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-tungsten/50 group-hover:text-signal transition-colors" />
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className={`inline-flex items-center gap-2 px-6 py-3 typo-tech text-sm ${isSignal ? 'bg-signal text-obsidian' : 'bg-terminal text-obsidian'}`}>
                  View Live Site
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute -top-3 -right-3 z-10">
              <div className={`text-obsidian px-3 py-1 typo-tech text-[10px] uppercase tracking-wider shadow-lg ${isSignal ? 'bg-signal' : 'bg-terminal'}`}>
                Featured
              </div>
            </div>
          )}
        </a>
      </div>

      {/* Content Section */}
      <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1 lg:text-right' : ''}`}>
        {/* Categories */}
        <div className={`flex flex-wrap gap-2 ${isReversed ? 'lg:justify-end' : ''}`}>
          {project.categories.map((category) => (
            <span
              key={category}
              className={`typo-tech text-[10px] uppercase tracking-wider px-2 py-1 ${isSignal ? 'text-signal border border-signal/30' : 'text-terminal border border-terminal/30'}`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="typo-headline text-3xl md:text-4xl text-platinum mb-2">
            {project.title}
          </h3>
          <p className={`typo-tech text-sm mb-4 ${isSignal ? 'text-signal' : 'text-terminal'}`}>
            {project.subtitle}
          </p>
          <p className="typo-body text-tungsten leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Metrics */}
        <div className={`grid grid-cols-3 gap-4 py-6 border-y border-tungsten/10 ${isReversed ? 'lg:text-center' : ''}`}>
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className={`flex items-center gap-2 mb-1 ${isReversed ? 'lg:justify-center' : ''}`}>
                <span className={isSignal ? 'text-signal' : 'text-terminal'}>{metric.icon}</span>
                <span className="typo-headline text-xl text-platinum">{metric.value}</span>
              </div>
              <span className="typo-tech text-[10px] text-tungsten uppercase">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className={`flex flex-wrap gap-2 ${isReversed ? 'lg:justify-end' : ''}`}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="typo-tech text-[10px] text-tungsten bg-carbon px-3 py-1.5 border border-tungsten/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className={isReversed ? 'lg:text-right' : ''}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 typo-tech text-sm hover:gap-3 transition-all duration-300 group ${isSignal ? 'text-signal' : 'text-terminal'}`}
          >
            Explore Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
