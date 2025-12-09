/**
 * Haptic Feedback Utility
 *
 * Provides tactile feedback for touch interactions using the Vibration API.
 * Gracefully degrades on devices that don't support vibration.
 *
 * Browser Support:
 * - Chrome (Android): Full support
 * - Safari (iOS): Limited support (requires user gesture)
 * - Firefox (Android): Full support
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
 */

type HapticIntensity = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';

interface VibrationPattern {
  duration: number | number[];
  description: string;
}

// Vibration patterns (in milliseconds)
const HAPTIC_PATTERNS: Record<HapticIntensity, VibrationPattern> = {
  light: {
    duration: 10,
    description: 'Quick, subtle feedback for lightweight interactions',
  },
  medium: {
    duration: 20,
    description: 'Standard feedback for button taps and toggles',
  },
  heavy: {
    duration: 30,
    description: 'Strong feedback for important actions',
  },
  success: {
    duration: [10, 50, 10],
    description: 'Double pulse for successful operations',
  },
  warning: {
    duration: [20, 50, 20, 50, 20],
    description: 'Triple pulse for warnings',
  },
  error: {
    duration: [50, 100, 50],
    description: 'Strong double pulse for errors',
  },
};

/**
 * Check if the Vibration API is supported
 */
export function isHapticSupported(): boolean {
  return typeof navigator !== 'undefined' && 'vibrate' in navigator;
}

/**
 * Trigger haptic feedback
 *
 * @param intensity - The intensity/type of haptic feedback
 * @returns boolean - true if vibration was triggered, false if not supported
 *
 * @example
 * // Light tap feedback
 * triggerHaptic('light');
 *
 * @example
 * // Success feedback after form submission
 * if (formSubmitted) {
 *   triggerHaptic('success');
 * }
 */
export function triggerHaptic(intensity: HapticIntensity = 'medium'): boolean {
  if (!isHapticSupported()) {
    return false;
  }

  try {
    const pattern = HAPTIC_PATTERNS[intensity];
    return navigator.vibrate(pattern.duration);
  } catch (error) {
    console.warn('Haptic feedback failed:', error);
    return false;
  }
}

/**
 * Cancel any ongoing vibration
 */
export function cancelHaptic(): boolean {
  if (!isHapticSupported()) {
    return false;
  }

  try {
    return navigator.vibrate(0);
  } catch (error) {
    console.warn('Failed to cancel haptic feedback:', error);
    return false;
  }
}

/**
 * Custom haptic pattern
 *
 * @param pattern - Array of vibration durations [vibrate, pause, vibrate, ...]
 *
 * @example
 * // Custom SOS pattern
 * customHaptic([100, 30, 100, 30, 100, 100, 200, 30, 200, 30, 200, 100, 100, 30, 100, 30, 100]);
 */
export function customHaptic(pattern: number[]): boolean {
  if (!isHapticSupported()) {
    return false;
  }

  try {
    return navigator.vibrate(pattern);
  } catch (error) {
    console.warn('Custom haptic feedback failed:', error);
    return false;
  }
}

/**
 * React Hook for haptic feedback with memoization
 *
 * @example
 * function MyButton() {
 *   const triggerFeedback = useHaptic();
 *
 *   return (
 *     <button onClick={() => triggerFeedback('medium')}>
 *       Click me
 *     </button>
 *   );
 * }
 */
export function useHaptic() {
  return {
    trigger: triggerHaptic,
    cancel: cancelHaptic,
    isSupported: isHapticSupported(),
  };
}

/**
 * Haptic Feedback Helper for Common Interactions
 */
export const Haptics = {
  // Button interactions
  buttonTap: () => triggerHaptic('light'),
  buttonPress: () => triggerHaptic('medium'),

  // Navigation
  swipe: () => triggerHaptic('light'),
  pageChange: () => triggerHaptic('medium'),

  // Feedback
  success: () => triggerHaptic('success'),
  warning: () => triggerHaptic('warning'),
  error: () => triggerHaptic('error'),

  // Toggle/Switch
  toggle: () => triggerHaptic('medium'),
  switch: () => triggerHaptic('light'),

  // Selection
  select: () => triggerHaptic('light'),
  longPress: () => triggerHaptic('heavy'),

  // Notifications
  notification: () => triggerHaptic('medium'),
  alert: () => triggerHaptic('heavy'),

  // Cancel any haptic
  cancel: cancelHaptic,
} as const;

/**
 * Accessibility-aware haptic trigger
 *
 * Respects user's reduced motion preference
 */
export function triggerHapticA11y(intensity: HapticIntensity = 'medium'): boolean {
  if (typeof window === 'undefined') return false;

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return false;
  }

  return triggerHaptic(intensity);
}

/**
 * Haptic feedback with fallback visual feedback
 *
 * Useful for ensuring feedback even on devices without haptic support
 */
export function triggerHapticWithFallback(
  intensity: HapticIntensity = 'medium',
  fallback?: () => void
): void {
  const triggered = triggerHaptic(intensity);

  if (!triggered && fallback) {
    fallback();
  }
}

// Export types
export type { HapticIntensity, VibrationPattern };
