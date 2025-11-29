'use client';

import {
  createContext,
  useContext,
  useRef,
  useEffect,
  ReactNode,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';

// ============================================================================
// FROZEN ROUTER - Preserves React context during exit animations
// This is the key to making exit animations work in Next.js App Router
// ============================================================================

function usePreviousValue<T>(value: T): T | undefined {
  const prevValue = useRef<T>();

  useEffect(() => {
    prevValue.current = value;
    return () => {
      prevValue.current = undefined;
    };
  });

  return prevValue.current;
}

function FrozenRouter({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) || null;

  const pathname = usePathname();
  const prevPathname = usePreviousValue(pathname);

  // Detect if route actually changed
  const changed =
    pathname !== prevPathname &&
    pathname !== undefined &&
    prevPathname !== undefined;

  // When route changes, freeze the context to the previous value
  // This keeps the old page rendered during exit animation
  return (
    <LayoutRouterContext.Provider value={changed ? prevContext : context}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

// ============================================================================
// ANIMATION CONFIGURATION - Smooth, world-class easing
// ============================================================================

// Custom cubic-bezier for smooth deceleration (used by Apple, Linear, etc.)
const smoothEase = [0.22, 1, 0.36, 1] as const;

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
      // Stagger the blur clearing slightly after opacity/position
      filter: { duration: 0.4, ease: smoothEase },
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    filter: 'blur(6px)',
    scale: 0.99,
    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },
};

// ============================================================================
// TRANSITION CONTEXT - For components that need to know transition state
// ============================================================================

interface TransitionContextType {
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

// ============================================================================
// PAGE TRANSITION PROVIDER - The main wrapper component
// ============================================================================

interface PageTransitionProviderProps {
  children: ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <TransitionContext.Provider value={{ isTransitioning }}>
      <AnimatePresence
        mode="wait" // Wait for exit to complete before enter starts
        initial={false} // Don't animate on initial page load
        onExitComplete={() => {
          // Scroll to top after exit animation completes
          window.scrollTo({ top: 0, behavior: 'instant' });
          setIsTransitioning(false);
        }}
      >
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationStart={(definition) => {
            if (definition === 'exit') {
              setIsTransitioning(true);
            }
          }}
          className="flex flex-col flex-1 min-h-screen"
          style={{ willChange: 'opacity, transform, filter' }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

// ============================================================================
// TRANSITION LINK - Custom Link component with scroll={false}
// ============================================================================

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TransitionLink({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow normal behavior for external links, special protocols, or modifier keys
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey
    ) {
      return;
    }

    // Call custom onClick handler if provided
    onClick?.();
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      scroll={false} // Critical: prevents scroll jump during transition
    >
      {children}
    </Link>
  );
}
