import { useEffect, useRef, useState } from 'react';

/**
 * Touch Swipe Gesture Hook
 *
 * Detects swipe gestures on touch devices with configurable callbacks
 * for each direction. Uses passive event listeners for optimal performance.
 *
 * @example
 * const swipeHandlers = useSwipe({
 *   onSwipeLeft: () => nextSlide(),
 *   onSwipeRight: () => prevSlide(),
 *   minSwipeDistance: 50
 * });
 *
 * return <div {...swipeHandlers}>Swipeable content</div>
 */

export interface SwipeConfig {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  minSwipeDistance?: number; // Minimum distance in pixels to trigger swipe (default: 50)
  maxSwipeTime?: number;     // Maximum time in ms for swipe gesture (default: 300)
}

interface TouchPosition {
  x: number;
  y: number;
  time: number;
}

export function useSwipe(config: SwipeConfig) {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    minSwipeDistance = 50,
    maxSwipeTime = 300,
  } = config;

  const touchStart = useRef<TouchPosition | null>(null);
  const touchEnd = useRef<TouchPosition | null>(null);

  // Handle touch start
  const handleTouchStart = (e: TouchEvent) => {
    touchEnd.current = null; // Reset touch end
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    };
  };

  // Handle touch move
  const handleTouchMove = (e: TouchEvent) => {
    touchEnd.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    };
  };

  // Handle touch end - determine swipe direction
  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const deltaX = touchEnd.current.x - touchStart.current.x;
    const deltaY = touchEnd.current.y - touchStart.current.y;
    const deltaTime = touchEnd.current.time - touchStart.current.time;

    // Check if swipe was fast enough
    if (deltaTime > maxSwipeTime) return;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    // Determine if horizontal or vertical swipe
    if (absX > absY) {
      // Horizontal swipe
      if (absX > minSwipeDistance) {
        if (deltaX > 0) {
          onSwipeRight?.();
        } else {
          onSwipeLeft?.();
        }
      }
    } else {
      // Vertical swipe
      if (absY > minSwipeDistance) {
        if (deltaY > 0) {
          onSwipeDown?.();
        } else {
          onSwipeUp?.();
        }
      }
    }

    // Reset
    touchStart.current = null;
    touchEnd.current = null;
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
}

/**
 * Enhanced Swipe Hook with Element Ref
 *
 * Alternative hook that attaches event listeners directly to a ref element.
 * Useful when you can't spread props on the element.
 *
 * @example
 * const containerRef = useSwipeRef({
 *   onSwipeLeft: () => nextSlide(),
 *   onSwipeRight: () => prevSlide()
 * });
 *
 * return <div ref={containerRef}>Swipeable content</div>
 */
export function useSwipeRef<T extends HTMLElement = HTMLDivElement>(
  config: SwipeConfig
) {
  const ref = useRef<T>(null);
  const touchStart = useRef<TouchPosition | null>(null);
  const touchEnd = useRef<TouchPosition | null>(null);

  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    minSwipeDistance = 50,
    maxSwipeTime = 300,
  } = config;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchEnd.current = null;
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEnd.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    };

    const handleTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return;

      const deltaX = touchEnd.current.x - touchStart.current.x;
      const deltaY = touchEnd.current.y - touchStart.current.y;
      const deltaTime = touchEnd.current.time - touchStart.current.time;

      if (deltaTime > maxSwipeTime) return;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX > absY) {
        if (absX > minSwipeDistance) {
          if (deltaX > 0) {
            onSwipeRight?.();
          } else {
            onSwipeLeft?.();
          }
        }
      } else {
        if (absY > minSwipeDistance) {
          if (deltaY > 0) {
            onSwipeDown?.();
          } else {
            onSwipeUp?.();
          }
        }
      }

      touchStart.current = null;
      touchEnd.current = null;
    };

    // Add event listeners with passive flag for better scroll performance
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, minSwipeDistance, maxSwipeTime]);

  return ref;
}
