/**
 * Optimized Framer Motion Components
 *
 * Uses LazyMotion with domAnimation for reduced bundle size.
 * Reduces Framer Motion bundle from ~60KB to ~30KB by loading only DOM animations.
 *
 * Usage: Replace framer-motion imports with these optimized components.
 */

"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

/**
 * LazyMotion Provider Component
 *
 * Wrap your app or page sections with this to enable optimized animations.
 * Only loads DOM-based animations (transform, opacity) which are GPU-accelerated.
 *
 * @example
 * <OptimizedMotionProvider>
 *   <OptimizedMotion.div animate={{ opacity: 1 }}>
 *     Content
 *   </OptimizedMotion.div>
 * </OptimizedMotionProvider>
 */
export function OptimizedMotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

/**
 * Optimized Motion Components
 *
 * Drop-in replacement for motion.* components from framer-motion.
 * These use the lazy-loaded domAnimation features for smaller bundle size.
 *
 * @example
 * import { OptimizedMotion } from '@/components/ui/optimized-motion';
 *
 * <OptimizedMotion.div
 *   initial={{ opacity: 0, y: 20 }}
 *   animate={{ opacity: 1, y: 0 }}
 *   transition={{ duration: 0.5 }}
 * >
 *   Content
 * </OptimizedMotion.div>
 */
export const OptimizedMotion = {
  div: m.div,
  span: m.span,
  p: m.p,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  h4: m.h4,
  h5: m.h5,
  h6: m.h6,
  a: m.a,
  button: m.button,
  section: m.section,
  article: m.article,
  nav: m.nav,
  aside: m.aside,
  header: m.header,
  footer: m.footer,
  main: m.main,
  ul: m.ul,
  ol: m.ol,
  li: m.li,
  img: m.img,
  svg: m.svg,
  path: m.path,
  form: m.form,
  input: m.input,
  textarea: m.textarea,
  select: m.select,
  label: m.label,
};

/**
 * Performance-Optimized Animation Variants
 *
 * Pre-defined animation configurations that use only GPU-accelerated properties
 * (transform, opacity) for 60fps performance.
 */

/** Fade in animation */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/** Fade in from bottom */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

/** Fade in from top */
export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

/** Fade in from left */
export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

/** Fade in from right */
export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

/** Scale up animation */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

/** Scale down animation */
export const scaleOut = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
};

/** Smooth spring transition (default) */
export const smoothTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
};

/** Fast transition for immediate feedback */
export const fastTransition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

/** Slow, smooth transition for emphasis */
export const slowTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

/** Bouncy spring for playful interactions */
export const bouncyTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10,
};

/**
 * Stagger Children Animation Helper
 *
 * Creates a stagger effect for animating multiple children sequentially.
 *
 * @example
 * <OptimizedMotion.ul variants={staggerContainer}>
 *   <OptimizedMotion.li variants={staggerItem}>Item 1</OptimizedMotion.li>
 *   <OptimizedMotion.li variants={staggerItem}>Item 2</OptimizedMotion.li>
 * </OptimizedMotion.ul>
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
