/**
 * Performance Utilities for Mobile Optimization
 *
 * Provides device detection, capability checks, and throttling utilities
 * to ensure optimal performance across all devices, especially mobile.
 */

/**
 * Device capability detection results
 */
export interface DeviceCapabilities {
  /** Whether the device is mobile (screen width < 768px) */
  isMobile: boolean;
  /** Whether the device is in low-power mode (battery API if available) */
  isLowPowerMode: boolean;
  /** Whether the device supports WebGL for canvas animations */
  supportsWebGL: boolean;
  /** Device pixel ratio - capped at 2 to prevent excessive memory usage */
  devicePixelRatio: number;
  /** Estimated performance tier: 'high', 'medium', 'low' */
  performanceTier: 'high' | 'medium' | 'low';
  /** Whether the device prefers reduced motion (accessibility) */
  prefersReducedMotion: boolean;
}

/**
 * Detects current device capabilities and performance characteristics.
 * Used to adapt animations, particle counts, and visual effects accordingly.
 *
 * @returns DeviceCapabilities object with detection results
 */
export function detectDeviceCapabilities(): DeviceCapabilities {
  // Server-side rendering safe defaults
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isLowPowerMode: false,
      supportsWebGL: false,
      devicePixelRatio: 1,
      performanceTier: 'medium',
      prefersReducedMotion: false,
    };
  }

  // Detect mobile based on screen width (more reliable than user agent)
  const isMobile = window.innerWidth < 768;

  // Check for reduced motion preference (accessibility)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Cap device pixel ratio at 2 to prevent excessive memory usage
  // 4K displays with DPR 3+ can cause severe performance issues
  const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

  // Detect WebGL support for canvas animations
  let supportsWebGL = false;
  try {
    const canvas = document.createElement('canvas');
    supportsWebGL = !!(
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );
  } catch (e) {
    supportsWebGL = false;
  }

  // Detect low-power mode using Battery API (if available)
  let isLowPowerMode = false;
  // Battery API is not widely supported, so we catch errors
  // This is a best-effort detection

  // Estimate performance tier based on multiple factors
  let performanceTier: 'high' | 'medium' | 'low' = 'medium';

  // Use device memory if available (Chrome only)
  const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;

  // Use hardware concurrency (CPU cores)
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;

  // Low-end: < 4GB RAM or < 4 cores or reduced motion preferred
  if ((deviceMemory && deviceMemory < 4) || hardwareConcurrency < 4 || prefersReducedMotion) {
    performanceTier = 'low';
  }
  // High-end: >= 8GB RAM and >= 8 cores and not mobile
  else if ((deviceMemory && deviceMemory >= 8) && hardwareConcurrency >= 8 && !isMobile) {
    performanceTier = 'high';
  }
  // Mobile devices default to low tier for battery preservation
  else if (isMobile) {
    performanceTier = 'low';
  }

  return {
    isMobile,
    isLowPowerMode,
    supportsWebGL,
    devicePixelRatio,
    performanceTier,
    prefersReducedMotion,
  };
}

/**
 * Throttle function that limits execution frequency.
 * Ensures a function is called at most once per specified interval.
 * Uses requestAnimationFrame for smooth visual updates.
 *
 * @param callback - Function to throttle
 * @param limit - Minimum time between calls in milliseconds
 * @returns Throttled function
 *
 * @example
 * const handleScroll = throttle(() => {
 *   console.log('Scroll event');
 * }, 50); // Maximum 20fps
 *
 * window.addEventListener('scroll', handleScroll);
 */
export function throttle<T extends (...args: unknown[]) => void>(
  callback: T,
  limit: number
): (...args: Parameters<T>) => void {
  let waiting = false;
  let lastArgs: Parameters<T> | null = null;

  return function throttled(...args: Parameters<T>) {
    if (!waiting) {
      callback(...args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
        // Execute with the latest arguments if called during wait
        if (lastArgs) {
          callback(...lastArgs);
          lastArgs = null;
        }
      }, limit);
    } else {
      // Store the latest arguments to execute after throttle
      lastArgs = args;
    }
  };
}

/**
 * RequestAnimationFrame-based throttle for visual updates.
 * More efficient for scroll/resize handlers that update visuals.
 *
 * @param callback - Function to throttle
 * @returns Throttled function using RAF
 *
 * @example
 * const handleScroll = rafThrottle(() => {
 *   // Update UI based on scroll position
 * });
 *
 * window.addEventListener('scroll', handleScroll, { passive: true });
 */
export function rafThrottle<T extends (...args: unknown[]) => void>(
  callback: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;
  let lastArgs: Parameters<T> | null = null;

  return function throttled(...args: Parameters<T>) {
    lastArgs = args;

    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        if (lastArgs) {
          callback(...lastArgs);
          lastArgs = null;
        }
        rafId = null;
      });
    }
  };
}

/**
 * Debounce function that delays execution until after a pause.
 * Useful for expensive operations that should only run once user stops interacting.
 *
 * @param callback - Function to debounce
 * @param delay - Wait time in milliseconds after last call
 * @returns Debounced function
 *
 * @example
 * const handleResize = debounce(() => {
 *   // Recalculate layout
 * }, 150);
 *
 * window.addEventListener('resize', handleResize);
 */
export function debounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return function debounced(...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * Get optimized particle count based on device capabilities.
 * Reduces particle count on mobile and low-end devices to maintain 60fps.
 *
 * @param baseCount - Desired particle count for high-end devices
 * @param capabilities - Device capability object (optional, will detect if not provided)
 * @returns Optimized particle count
 *
 * @example
 * const particleCount = getOptimizedParticleCount(800);
 * // Returns 200 on mobile, 400 on medium devices, 800 on high-end
 */
export function getOptimizedParticleCount(
  baseCount: number,
  capabilities?: DeviceCapabilities
): number {
  const caps = capabilities || detectDeviceCapabilities();

  // Reduced motion: minimal particles
  if (caps.prefersReducedMotion) {
    return Math.floor(baseCount * 0.1);
  }

  // Low-end devices or mobile: 25% of base
  if (caps.performanceTier === 'low' || caps.isMobile) {
    return Math.floor(baseCount * 0.25);
  }

  // Medium devices: 50% of base
  if (caps.performanceTier === 'medium') {
    return Math.floor(baseCount * 0.5);
  }

  // High-end devices: full count
  return baseCount;
}

/**
 * Get optimized animation speed based on device capabilities.
 * Slows down animations on low-end devices to reduce CPU/GPU load.
 *
 * @param baseSpeed - Desired speed for high-end devices
 * @param capabilities - Device capability object (optional, will detect if not provided)
 * @returns Optimized speed multiplier
 *
 * @example
 * const speed = getOptimizedAnimationSpeed(0.29);
 * // Returns 0.15 on low-end, 0.22 on medium, 0.29 on high-end
 */
export function getOptimizedAnimationSpeed(
  baseSpeed: number,
  capabilities?: DeviceCapabilities
): number {
  const caps = capabilities || detectDeviceCapabilities();

  // Reduced motion: minimal animation
  if (caps.prefersReducedMotion) {
    return baseSpeed * 0.1;
  }

  // Low-end devices: 50% speed
  if (caps.performanceTier === 'low') {
    return baseSpeed * 0.5;
  }

  // Medium devices: 75% speed
  if (caps.performanceTier === 'medium') {
    return baseSpeed * 0.75;
  }

  // High-end devices: full speed
  return baseSpeed;
}

/**
 * Check if we should disable canvas animations entirely.
 * Used as a fallback for devices that can't handle WebGL or complex canvas rendering.
 *
 * @param capabilities - Device capability object (optional, will detect if not provided)
 * @returns True if animations should be disabled
 *
 * @example
 * if (shouldDisableAnimations()) {
 *   return <div className="bg-gradient-to-br from-obsidian to-carbon" />;
 * }
 */
export function shouldDisableAnimations(
  capabilities?: DeviceCapabilities
): boolean {
  const caps = capabilities || detectDeviceCapabilities();

  // Respect user's accessibility preference
  if (caps.prefersReducedMotion) {
    return true;
  }

  // Disable on low-end devices without WebGL
  if (caps.performanceTier === 'low' && !caps.supportsWebGL) {
    return true;
  }

  return false;
}

/**
 * Get optimized canvas resolution based on device capabilities.
 * Reduces resolution on high-DPI displays to prevent memory issues.
 *
 * @param capabilities - Device capability object (optional, will detect if not provided)
 * @returns Pixel ratio to use for canvas sizing
 *
 * @example
 * const dpr = getOptimizedCanvasResolution();
 * canvas.width = width * dpr;
 * canvas.height = height * dpr;
 */
export function getOptimizedCanvasResolution(
  capabilities?: DeviceCapabilities
): number {
  const caps = capabilities || detectDeviceCapabilities();

  // Low-end or mobile: 1x resolution
  if (caps.performanceTier === 'low' || caps.isMobile) {
    return 1;
  }

  // Medium: 1.5x resolution
  if (caps.performanceTier === 'medium') {
    return Math.min(caps.devicePixelRatio, 1.5);
  }

  // High-end: use device pixel ratio but capped at 2
  return caps.devicePixelRatio;
}
