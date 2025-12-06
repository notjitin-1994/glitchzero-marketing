"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ElementType = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface ContrastTextProps {
  children: ReactNode;
  className?: string;
  /** HTML element to render */
  as?: ElementType;
  /**
   * Blend mode variant:
   * - "difference": Strong contrast, inverts colors (default)
   * - "exclusion": Softer version of difference
   * - "monochrome": Difference with desaturation for brand-neutral black/white result
   */
  variant?: "difference" | "exclusion" | "monochrome";
}

/**
 * ContrastText - Dynamic text that automatically adjusts for contrast
 * against animated backgrounds like WebGL canvases.
 *
 * Uses CSS mix-blend-mode for GPU-accelerated, real-time contrast adjustment.
 * The text will invert/adjust where bright background colors appear behind it.
 *
 * @example
 * ```tsx
 * <ContrastText as="h1" variant="monochrome">
 *   Headline over animated background
 * </ContrastText>
 * ```
 */
export function ContrastText({
  children,
  className,
  as: Component = "span",
  variant = "monochrome",
}: ContrastTextProps) {
  // Base styles with fallback text-shadow for older browsers
  const baseStyles = "text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]";

  // Blend mode and filter combinations for each variant
  const variantStyles = {
    // Pure difference - creates complementary colors (cyan over orange)
    difference: "mix-blend-difference supports-[mix-blend-mode]:shadow-none",

    // Softer exclusion - less harsh contrast, gray tones
    exclusion: "mix-blend-exclusion supports-[mix-blend-mode]:shadow-none",

    // Brand-compliant monochrome - difference + desaturation
    // Results in black/white/gray only, no colored artifacts
    monochrome: [
      "mix-blend-difference",
      "supports-[mix-blend-mode]:shadow-none",
      "supports-[mix-blend-mode]:[filter:saturate(0)_contrast(1.2)_brightness(1.1)]",
    ].join(" "),
  };

  return (
    <Component
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * ContrastWrapper - Wraps content in an isolation context for controlled blending.
 * Use this to prevent blend modes from affecting elements outside the wrapper.
 */
export function ContrastWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("isolate", className)}>
      {children}
    </div>
  );
}
