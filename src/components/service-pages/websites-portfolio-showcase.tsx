'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
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
  Palette,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  GraduationCap,
  Layers,
  DollarSign,
  Target,
  Rocket,
  Brain,
  BarChart3,
  Shield
} from 'lucide-react';

// Smartslate Case Study Screenshots
interface SmartslateScreen {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
}

const smartslateScreenshots: SmartslateScreen[] = [
  {
    id: 'homepage',
    title: 'AI-Powered Platform',
    description: 'The hero section showcases Solara\'s promise: replacing 15 fragmented learning tools with one intelligent platform. Features product suite visualization with Polaris (live), Constellation, Nova, Orbit, Nebula, and Spectrum.',
    image: '/portfolio/smartslate1.png',
    icon: <Brain className="w-5 h-5" />,
    features: ['Product suite showcase', 'Conversion-optimized hero', 'Impact metrics display'],
  },
  {
    id: 'pricing',
    title: 'Dynamic Pricing',
    description: 'Multi-tier subscription model with Explorer, Navigator, and Voyager plans. Features monthly/annual toggle, USD/INR currency switch, and clear value proposition for each tier.',
    image: '/portfolio/smartslate2.png',
    icon: <DollarSign className="w-5 h-5" />,
    features: ['Tiered pricing structure', 'Multi-currency support', 'Feature comparison grid'],
  },
  {
    id: 'vision',
    title: 'Compelling Narrative',
    description: 'The Vision page tells India\'s talent paradox story with powerful economic data—$1.2T GDP impact, 30% lost productivity. Interactive tabs guide users through the challenge and Smartslate\'s solution.',
    image: '/portfolio/smartslate3.png',
    icon: <Target className="w-5 h-5" />,
    features: ['Data-driven storytelling', 'Interactive content tabs', 'Economic impact visualization'],
  },
];

const smartslateCapabilities = [
  { icon: <Rocket className="w-4 h-4" />, label: 'Launch Time', value: '4 weeks' },
  { icon: <BarChart3 className="w-4 h-4" />, label: 'Performance', value: '98/100' },
  { icon: <Users className="w-4 h-4" />, label: 'Lead Capture', value: '6 channels' },
  { icon: <Shield className="w-4 h-4" />, label: 'PWA Ready', value: 'Yes' },
];

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
    id: 'stex-decor',
    title: 'S-Tex Decor',
    subtitle: 'Luxury E-Commerce',
    description: 'An elegant luxury fabrics and home furnishings e-commerce platform. Features beautiful product carousels, sophisticated category navigation, and a refined aesthetic that matches the premium brand positioning.',
    categories: ['E-Commerce', 'Luxury', 'B2C'],
    image: '/portfolio/stex-heritage-section.png',
    link: 'https://stex.netlify.app/',
    metrics: [
      { label: 'Products', value: '500+', icon: <ShoppingBag className="w-4 h-4" /> },
      { label: 'Design Score', value: '98%', icon: <Palette className="w-4 h-4" /> },
      { label: 'Mobile UX', value: 'A+', icon: <Sparkles className="w-4 h-4" /> },
    ],
    technologies: ['React', 'E-Commerce', 'Responsive', 'Performance'],
    color: 'terminal',
  },
  {
    id: 'glitchzero',
    title: 'GlitchZero',
    subtitle: 'Digital Agency Website',
    description: 'Our own sleek, high-performance marketing website built for speed and conversion. Features a bold dark theme, animated hero sections, interactive service showcases, and seamless mobile responsiveness.',
    categories: ['Marketing', 'Agency', 'Web App'],
    image: '/portfolio/glitchzero-home.png',
    link: 'https://glitchzerolabs.com/',
    metrics: [
      { label: 'Delivery', value: '24 Hours*', icon: <Zap className="w-4 h-4" /> },
      { label: 'Performance', value: '98/100', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'Mobile UX', value: 'A+', icon: <Sparkles className="w-4 h-4" /> },
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'signal',
    featured: true,
  },
];

// Smartslate Case Study Component
function SmartslateShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const activeScreenshot = smartslateScreenshots[activeIndex];

  // Track if component is mounted for portal
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % smartslateScreenshots.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + smartslateScreenshots.length) % smartslateScreenshots.length);
  }, []);

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeFullscreen();
      }
      if (isFullscreen) {
        if (e.key === 'ArrowRight') nextSlide();
        else if (e.key === 'ArrowLeft') prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, closeFullscreen, nextSlide, prevSlide]);

  return (
    <FadeInSection delay={0.3} direction="up">
      <div className="bg-carbon border border-tungsten/10 rounded-sm overflow-hidden">
        {/* App Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-tungsten/10 bg-carbon/80">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-sm flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="typo-headline text-lg text-platinum">Smartslate</h3>
                  <span className="px-2 py-0.5 bg-signal text-obsidian typo-tech text-[9px] uppercase">Featured</span>
                </div>
                <p className="typo-tech text-[10px] text-terminal">AI-Powered Learning Platform</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {smartslateCapabilities.map((cap) => (
              <div key={cap.label} className="flex items-center gap-2">
                <span className="text-terminal">{cap.icon}</span>
                <div>
                  <span className="typo-tech text-[10px] text-tungsten block">{cap.label}</span>
                  <span className="typo-headline text-xs text-platinum">{cap.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Screenshot Gallery */}
          <div className="lg:col-span-8 relative bg-obsidian">
            {/* Main Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreenshot.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeScreenshot.image}
                    alt={activeScreenshot.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 66vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-obsidian/80 border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-terminal hover:text-obsidian hover:border-terminal transition-all duration-300"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-obsidian/80 border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-terminal hover:text-obsidian hover:border-terminal transition-all duration-300"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={openFullscreen}
                className="absolute top-4 right-4 w-10 h-10 bg-obsidian/80 border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-terminal hover:text-obsidian hover:border-terminal transition-all duration-300"
                aria-label="View fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>

              {/* Slide Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {smartslateScreenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-8 bg-terminal'
                        : 'w-2 bg-tungsten/40 hover:bg-tungsten/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 p-4 bg-carbon/50 border-t border-tungsten/10">
              {smartslateScreenshots.map((screenshot, idx) => (
                <button
                  key={screenshot.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-1 aspect-video overflow-hidden rounded-sm border-2 transition-all duration-300 ${
                    idx === activeIndex
                      ? 'border-terminal shadow-[0_0_10px_rgba(0,255,136,0.3)]'
                      : 'border-tungsten/20 opacity-60 hover:opacity-100 hover:border-tungsten/40'
                  }`}
                >
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Feature Details Panel */}
          <div className="lg:col-span-4 p-6 lg:p-8 bg-carbon border-l border-tungsten/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreenshot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Active Feature Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-terminal/10 flex items-center justify-center text-terminal">
                    {activeScreenshot.icon}
                  </div>
                  <div>
                    <span className="typo-tech text-[10px] text-terminal">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(smartslateScreenshots.length).padStart(2, '0')}
                    </span>
                    <h4 className="typo-headline text-xl text-platinum">
                      {activeScreenshot.title}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <p className="typo-body text-sm text-tungsten leading-relaxed">
                  {activeScreenshot.description}
                </p>

                {/* Feature List */}
                <div className="space-y-3">
                  <span className="typo-tech text-[10px] text-tungsten uppercase">Key Features</span>
                  <div className="space-y-2">
                    {activeScreenshot.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 p-3 bg-obsidian border border-tungsten/10">
                        <div className="w-1.5 h-1.5 bg-terminal rounded-full flex-shrink-0"></div>
                        <span className="typo-tech text-xs text-platinum">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="pt-4 border-t border-tungsten/10">
                  <span className="typo-tech text-[10px] text-tungsten uppercase mb-3 block">Explore Pages</span>
                  <div className="grid grid-cols-1 gap-2">
                    {smartslateScreenshots.map((screenshot, idx) => (
                      <button
                        key={screenshot.id}
                        onClick={() => setActiveIndex(idx)}
                        className={`flex items-center gap-2 p-2 text-left transition-all duration-300 ${
                          idx === activeIndex
                            ? 'bg-terminal/10 border border-terminal/30 text-terminal'
                            : 'bg-obsidian border border-tungsten/10 text-tungsten hover:text-platinum hover:border-tungsten/30'
                        }`}
                      >
                        {screenshot.icon}
                        <span className="typo-tech text-[10px]">{screenshot.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Visit Site CTA */}
                <a
                  href="https://www.smartslate.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-terminal text-obsidian typo-tech text-sm hover:bg-terminal/90 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Visit Live Site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Project Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* The Challenge */}
        <div className="bg-carbon border border-tungsten/10 p-6">
          <span className="typo-tech text-[10px] text-terminal uppercase mb-3 block">The Challenge</span>
          <h4 className="typo-headline text-lg text-platinum mb-2">Fragmented EdTech Tools</h4>
          <p className="typo-body text-sm text-tungsten leading-relaxed">
            Learning professionals juggling 15+ disconnected tools—wasting time, losing data cohesion, and watching engagement decline.
          </p>
        </div>

        {/* The Solution */}
        <div className="bg-carbon border border-tungsten/10 p-6">
          <span className="typo-tech text-[10px] text-signal uppercase mb-3 block">The Solution</span>
          <h4 className="typo-headline text-lg text-platinum mb-2">Unified AI Platform</h4>
          <p className="typo-body text-sm text-tungsten leading-relaxed">
            A comprehensive marketing website showcasing Solara's unified platform—from product demos to dynamic pricing and compelling vision narratives.
          </p>
        </div>

        {/* The Impact */}
        <div className="bg-carbon border border-tungsten/10 p-6">
          <span className="typo-tech text-[10px] text-terminal uppercase mb-3 block">The Impact</span>
          <h4 className="typo-headline text-lg text-platinum mb-2">Conversion-Ready Launch</h4>
          <p className="typo-body text-sm text-tungsten leading-relaxed">
            98/100 Lighthouse score, 6 lead capture channels, PWA-ready architecture, and a design that converts visitors into early adopters.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        <span className="typo-tech text-[10px] text-tungsten uppercase mr-2">Built With</span>
        {['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Material-UI'].map((tech) => (
          <span
            key={tech}
            className="typo-tech text-[10px] text-platinum bg-carbon px-3 py-1.5 border border-tungsten/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Fullscreen Modal - rendered via portal to escape parent transforms */}
      {isMounted && createPortal(
        <AnimatePresence>
          {isFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-obsidian/98 backdrop-blur-md flex items-center justify-center"
              onClick={closeFullscreen}
            >
              {/* Close Button */}
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-carbon border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-terminal hover:text-obsidian hover:border-terminal transition-all duration-300 z-10"
                aria-label="Close fullscreen"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                <span className="typo-tech text-xs md:text-sm text-platinum bg-carbon/80 px-3 py-1.5 md:px-4 md:py-2 border border-tungsten/20">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(smartslateScreenshots.length).padStart(2, '0')} — {activeScreenshot.title}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-carbon border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-terminal hover:text-obsidian hover:border-terminal transition-all duration-300 z-10"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-carbon border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-terminal hover:text-obsidian hover:border-terminal transition-all duration-300 z-10"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
              </button>

              {/* Fullscreen Image */}
              <motion.div
                key={activeScreenshot.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-[85vw] h-[60vh] md:w-[80vw] md:h-[70vh] max-w-[1400px]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activeScreenshot.image}
                  alt={activeScreenshot.title}
                  fill
                  className="object-contain"
                  sizes="85vw"
                  quality={100}
                  priority
                />
              </motion.div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 bg-carbon/80 p-2 md:p-3 border border-tungsten/20 z-10">
                {smartslateScreenshots.map((screenshot, idx) => (
                  <button
                    key={screenshot.id}
                    onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                    className={`relative w-16 h-10 md:w-24 md:h-14 overflow-hidden border-2 transition-all duration-300 ${
                      idx === activeIndex
                        ? 'border-terminal shadow-[0_0_10px_rgba(0,255,136,0.3)]'
                        : 'border-tungsten/20 opacity-60 hover:opacity-100 hover:border-tungsten/40'
                    }`}
                  >
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      fill
                      className="object-cover object-top"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>

              {/* Keyboard Hint */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 hidden md:block">
                <span className="typo-tech text-[10px] text-tungsten">
                  ESC to close • ← → to navigate
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </FadeInSection>
  );
}

export function WebsitesPortfolioShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 bg-carbon relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-signal/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-terminal/5 blur-[120px] rounded-full pointer-events-none"></div>

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

        {/* Smartslate Featured Case Study */}
        <div className="mb-24">
          <FadeInSection delay={0.2} direction="up">
            <span className="typo-tech text-terminal text-xs inline-flex items-center gap-2 mb-6">
              <Layers className="w-3 h-3" />
              Featured Projects
            </span>
          </FadeInSection>
          <SmartslateShowcase />
        </div>

        {/* Other Projects */}
        <FadeInSection delay={0.3} direction="up">
          <div className="border-t border-tungsten/10 pt-16 mb-8">
            <span className="typo-tech text-signal text-xs inline-flex items-center gap-2 mb-2">
              <Globe className="w-3 h-3" />
              More Projects
            </span>
          </div>
        </FadeInSection>

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

        {/* Footnote */}
        <FadeInSection delay={0.3} direction="up">
          <p className="typo-tech text-xs text-tungsten/60 text-left mt-16">
            *MVP ready in 24 hours. Additional iterations for complete satisfaction.
          </p>
        </FadeInSection>
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
  const isSelfSite = project.id === 'glitchzero';

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
              {!isSelfSite && (
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <span className={`inline-flex items-center gap-2 px-6 py-3 typo-tech text-sm ${isSignal ? 'bg-signal text-obsidian' : 'bg-terminal text-obsidian'}`}>
                    View Live Site
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              )}
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
        {!isSelfSite && (
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
        )}
      </div>
    </motion.article>
  );
}
