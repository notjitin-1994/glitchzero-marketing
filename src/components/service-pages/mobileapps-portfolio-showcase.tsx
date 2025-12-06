'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInSection, BlurFadeIn } from '@/components/ui/fade-in-section';
import { Android } from '@/components/ui/android';
import {
  Smartphone,
  LayoutDashboard,
  ShoppingBag,
  BarChart3,
  Sparkles,
  PackageSearch,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Maximize2,
  X,
  Star,
} from 'lucide-react';

interface Screenshot {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
}

const screenshots: Screenshot[] = [
  {
    id: 'login',
    title: 'Secure Authentication',
    description: 'Sleek, branded login experience with role-based access. Restaurant staff get instant access while your business data stays protected with enterprise-grade security.',
    image: '/portfolio/01_login_dark.png',
    icon: <Shield className="w-5 h-5" />,
    features: ['Role-based permissions', 'Biometric login', 'Branded experience'],
  },
  {
    id: 'dashboard',
    title: 'Command Center Dashboard',
    description: 'Everything at a glance—menu items, stock levels, daily sales, and team management. Make informed decisions in seconds with an intuitive navigation system.',
    image: '/portfolio/02_dashboard_dark.png',
    icon: <LayoutDashboard className="w-5 h-5" />,
    features: ['Quick access tiles', 'Real-time metrics', 'Team management'],
  },
  {
    id: 'products',
    title: 'Product Management',
    description: 'Manage your entire menu catalog with ease. Add, edit, and organize products with categories, pricing, and availability controls—all from your pocket.',
    image: '/portfolio/03_products_dark.png',
    icon: <ShoppingBag className="w-5 h-5" />,
    features: ['Category filtering', 'Price management', 'Quick search'],
  },
  {
    id: 'sales-analytics',
    title: 'Sales Analytics',
    description: 'Track revenue, orders, and items sold with powerful time-based filtering. Daily, weekly, monthly, and yearly views give you complete visibility into business performance.',
    image: '/portfolio/04_sales_analytics_dark.png',
    icon: <BarChart3 className="w-5 h-5" />,
    features: ['Time-based filters', 'Revenue tracking', 'Trend visualization'],
  },
  {
    id: 'ai-insights',
    title: 'AI-Powered Insights',
    description: 'Get intelligent summaries of your business performance. AI analyzes sales patterns, identifies top performers, and highlights areas needing attention—automatically.',
    image: '/portfolio/current_screen.png',
    icon: <Sparkles className="w-5 h-5" />,
    features: ['Smart summaries', 'Pattern detection', 'Action recommendations'],
  },
  {
    id: 'inventory',
    title: 'Real-time Inventory Tracking',
    description: 'Never run out of stock again. Track additions, deductions, and transfers in real-time. Complete audit trail with timestamps and user attribution.',
    image: '/portfolio/stock_report.png',
    icon: <PackageSearch className="w-5 h-5" />,
    features: ['Live stock updates', 'Audit trail', 'Transfer tracking'],
  },
];

const capabilities = [
  { icon: <Clock className="w-4 h-4" />, label: 'Development', value: '8 weeks' },
  { icon: <Star className="w-4 h-4" />, label: 'App Rating', value: '4.9 ★' },
  { icon: <Users className="w-4 h-4" />, label: 'Daily Users', value: '100+' },
  { icon: <TrendingUp className="w-4 h-4" />, label: 'Efficiency', value: '+40%' },
];

export function MobileappsPortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const activeScreenshot = screenshots[activeIndex];

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
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
        if (e.key === 'ArrowRight') {
          nextSlide();
        } else if (e.key === 'ArrowLeft') {
          prevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, closeFullscreen, nextSlide, prevSlide]);

  return (
    <section className="py-24 md:py-32 px-6 bg-carbon relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-signal/5 blur-[180px] rounded-full -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInSection delay={0.1} direction="up">
            <span className="typo-tech text-signal text-xs inline-flex items-center gap-2 mb-4">
              <Smartphone className="w-3 h-3" />
              Featured Project
            </span>
          </FadeInSection>

          <BlurFadeIn delay={0.15}>
            <h2 className="typo-headline text-4xl md:text-5xl text-platinum mb-6">
              LeinDein: Restaurant Intelligence
            </h2>
          </BlurFadeIn>

          <FadeInSection delay={0.25} direction="up">
            <p className="typo-body text-tungsten max-w-2xl mx-auto">
              A comprehensive inventory and order management system that transforms how restaurants operate.
              Built with Flutter for seamless cross-platform performance.
            </p>
          </FadeInSection>
        </div>

        {/* Main Showcase */}
        <FadeInSection delay={0.3} direction="up">
          <div className="bg-carbon border border-tungsten/10 rounded-sm overflow-hidden">
            {/* App Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-tungsten/10 bg-carbon/80">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="typo-headline text-sm text-white">LD</span>
                  </div>
                  <div>
                    <h3 className="typo-headline text-lg text-platinum">LeinDein</h3>
                    <p className="typo-tech text-[10px] text-signal">Smart Inventory & Order Management</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {capabilities.map((cap) => (
                  <div key={cap.label} className="flex items-center gap-2">
                    <span className="text-signal">{cap.icon}</span>
                    <div>
                      <span className="typo-tech text-[10px] text-tungsten block">{cap.label}</span>
                      <span className="typo-headline text-xs text-platinum">{cap.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Screenshot Gallery with Device Mockup */}
              <div className="lg:col-span-8 relative bg-obsidian py-8">
                {/* Main Device Mockup */}
                <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreenshot.id}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-center"
                    >
                      <Android
                        src={activeScreenshot.image}
                        width={260}
                        height={530}
                        className="drop-shadow-[0_0_40px_rgba(255,79,0,0.15)]"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-obsidian/80 border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-signal hover:text-obsidian hover:border-signal transition-all duration-300 z-10"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-obsidian/80 border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-signal hover:text-obsidian hover:border-signal transition-all duration-300 z-10"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Fullscreen Button */}
                  <button
                    onClick={openFullscreen}
                    className="absolute top-4 right-4 w-10 h-10 bg-obsidian/80 border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-signal hover:text-obsidian hover:border-signal transition-all duration-300 z-10"
                    aria-label="View fullscreen"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>

                  {/* Slide Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    {screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === activeIndex
                            ? 'w-8 bg-signal'
                            : 'w-2 bg-tungsten/40 hover:bg-tungsten/60'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Strip with Phone Mockups */}
                <div className="flex gap-4 p-4 bg-carbon/50 border-t border-tungsten/10 overflow-x-auto justify-center">
                  {screenshots.map((screenshot, idx) => (
                    <button
                      key={screenshot.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative flex-shrink-0 transition-all duration-300 ${
                        idx === activeIndex
                          ? 'scale-110 drop-shadow-[0_0_10px_rgba(255,79,0,0.4)]'
                          : 'opacity-50 hover:opacity-80 hover:scale-105'
                      }`}
                    >
                      <Android
                        src={screenshot.image}
                        width={50}
                        height={102}
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
                      <div className="w-10 h-10 bg-signal/10 flex items-center justify-center text-signal">
                        {activeScreenshot.icon}
                      </div>
                      <div>
                        <span className="typo-tech text-[10px] text-signal">
                          {String(activeIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
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
                      <span className="typo-tech text-[10px] text-tungsten uppercase">Key Capabilities</span>
                      <div className="space-y-2">
                        {activeScreenshot.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 p-3 bg-obsidian border border-tungsten/10">
                            <div className="w-1.5 h-1.5 bg-signal rounded-full flex-shrink-0"></div>
                            <span className="typo-tech text-xs text-platinum">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="pt-4 border-t border-tungsten/10">
                      <span className="typo-tech text-[10px] text-tungsten uppercase mb-3 block">Explore Screens</span>
                      <div className="grid grid-cols-2 gap-2">
                        {screenshots.map((screenshot, idx) => (
                          <button
                            key={screenshot.id}
                            onClick={() => setActiveIndex(idx)}
                            className={`flex items-center gap-2 p-2 text-left transition-all duration-300 ${
                              idx === activeIndex
                                ? 'bg-signal/10 border border-signal/30 text-signal'
                                : 'bg-obsidian border border-tungsten/10 text-tungsten hover:text-platinum hover:border-tungsten/30'
                            }`}
                          >
                            {screenshot.icon}
                            <span className="typo-tech text-[10px] truncate">{screenshot.title.split(' ')[0]}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Project Summary */}
        <FadeInSection delay={0.4} direction="up" className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* The Challenge */}
            <div className="bg-carbon border border-tungsten/10 p-6">
              <span className="typo-tech text-[10px] text-signal uppercase mb-3 block">The Challenge</span>
              <h4 className="typo-headline text-lg text-platinum mb-2">Operational Chaos</h4>
              <p className="typo-body text-sm text-tungsten leading-relaxed">
                Restaurant owners juggling paper logs, spreadsheets, and mental math.
                Stock running out without warning, sales data scattered, and no visibility into business performance.
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-carbon border border-tungsten/10 p-6">
              <span className="typo-tech text-[10px] text-orange-400 uppercase mb-3 block">The Solution</span>
              <h4 className="typo-headline text-lg text-platinum mb-2">Pocket Command Center</h4>
              <p className="typo-body text-sm text-tungsten leading-relaxed">
                A unified mobile platform that puts inventory, sales, and AI-powered insights
                in the palm of their hand—available on both iOS and Android from a single codebase.
              </p>
            </div>

            {/* The Impact */}
            <div className="bg-carbon border border-tungsten/10 p-6">
              <span className="typo-tech text-[10px] text-signal uppercase mb-3 block">The Impact</span>
              <h4 className="typo-headline text-lg text-platinum mb-2">40% Efficiency Boost</h4>
              <p className="typo-body text-sm text-tungsten leading-relaxed">
                Zero stock surprises, instant sales visibility, AI-generated business insights,
                and restaurant operations streamlined from order to inventory in real-time.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Tech Stack */}
        <FadeInSection delay={0.5} direction="up" className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="typo-tech text-[10px] text-tungsten uppercase mr-2">Built With</span>
            {['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Cloud Functions', 'Firestore'].map((tech) => (
              <span
                key={tech}
                className="typo-tech text-[10px] text-platinum bg-carbon px-3 py-1.5 border border-tungsten/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeInSection>
      </div>

      {/* Fullscreen Modal with Device Mockup */}
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
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-carbon border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-signal hover:text-obsidian hover:border-signal transition-all duration-300 z-10"
                aria-label="Close fullscreen"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                <span className="typo-tech text-xs md:text-sm text-platinum bg-carbon/80 px-3 py-1.5 md:px-4 md:py-2 border border-tungsten/20">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')} — {activeScreenshot.title}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-carbon border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-signal hover:text-obsidian hover:border-signal transition-all duration-300 z-10"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-carbon border border-tungsten/20 flex items-center justify-center text-platinum hover:bg-signal hover:text-obsidian hover:border-signal transition-all duration-300 z-10"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
              </button>

              {/* Fullscreen Device Mockup */}
              <motion.div
                key={activeScreenshot.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Android
                  src={activeScreenshot.image}
                  width={350}
                  height={712}
                  className="drop-shadow-[0_0_60px_rgba(255,79,0,0.2)]"
                />
              </motion.div>

              {/* Thumbnail Strip with Phone Mockups */}
              <div className="absolute bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 bg-carbon/80 p-2 md:p-3 border border-tungsten/20 z-10">
                {screenshots.map((screenshot, idx) => (
                  <button
                    key={screenshot.id}
                    onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                    className={`relative flex-shrink-0 transition-all duration-300 ${
                      idx === activeIndex
                        ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,79,0,0.5)]'
                        : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <Android
                      src={screenshot.image}
                      width={40}
                      height={81}
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
    </section>
  );
}
