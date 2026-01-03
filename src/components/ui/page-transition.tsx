'use client';

import {
  createContext,
  useContext,
  useRef,
  useEffect,
  ReactNode,
  useState,
  ComponentProps,
} from 'react';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
// ... (lines 16-157 remain unchanged)
interface TransitionLinkProps extends ComponentProps<typeof Link> {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function TransitionLink({
  href,
  children,
  className,
  onClick,
  ...props
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
    onClick?.(e);
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      scroll={false} // Critical: prevents scroll jump during transition
      {...props}
    >
      {children}
    </Link>
  );
}
