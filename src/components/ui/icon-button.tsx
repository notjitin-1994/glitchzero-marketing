import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Touch-Optimized Icon Button Component
 *
 * Specialized button component for icon-only interactions with enhanced
 * touch targets meeting WCAG 2.5.8 Level AA requirements (48px minimum).
 *
 * Features:
 * - Minimum 48px touch targets (WCAG 2.5.8 compliant)
 * - Proper aria-label for accessibility
 * - Touch-action manipulation for responsive feel
 * - Active state feedback for mobile
 * - Disabled state styling
 *
 * @example
 * <IconButton
 *   icon={<ChevronLeft />}
 *   label="Previous"
 *   onClick={handlePrevious}
 *   size="md"
 *   variant="default"
 * />
 */

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-action-manipulation active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-carbon border border-tungsten/20 text-platinum hover:bg-signal hover:text-obsidian hover:border-signal",
        ghost: "text-platinum hover:bg-carbon hover:text-signal",
        signal: "bg-signal text-obsidian hover:bg-white",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-11 w-11",  // 44px - WCAG AAA
        md: "h-12 w-12",  // 48px - WCAG AA (default)
        lg: "h-14 w-14",  // 56px - Enhanced
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode
  label: string // Required for accessibility (used in aria-label)
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, icon, label, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        aria-label={label}
        {...props}
      >
        {icon}
      </button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
