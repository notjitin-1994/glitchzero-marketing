'use client';

import { useState, useEffect, useMemo } from 'react';
import { LoadingScreen } from './loading-screen';
import { PageTransitionProvider } from './page-transition';
import { Header } from '@/components/landing-page/header';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // On mount, check if we need to show loading screen
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('g0-loaded');

    if (hasLoaded) {
      // Already loaded before - skip loading screen
      setShowContent(true);
    } else {
      // First visit - show loading screen
      setShowLoadingScreen(true);
    }
    setIsReady(true);
  }, []);

  const handleLoadingComplete = () => {
    // Mark as loaded in session storage
    sessionStorage.setItem('g0-loaded', 'true');
    setShowLoadingScreen(false);
    // Small delay to ensure smooth transition
    requestAnimationFrame(() => {
      setShowContent(true);
    });
  };

  // Render a minimal placeholder that doesn't block metadata display
  // The static <title> and favicon in layout.tsx head will still show
  if (!isReady) {
    return (
      <div className="fixed inset-0 z-[9999] bg-obsidian flex items-center justify-center">
        {/* Minimal loading indicator that matches the loading screen */}
        <div className="w-24 h-24 md:w-32 md:h-32 bg-signal animate-pulse" />
      </div>
    );
  }

  return (
    <>
      {showLoadingScreen && (
        <LoadingScreen
          onLoadingComplete={handleLoadingComplete}
          minDuration={2500}
        />
      )}

      {showContent && (
        <>
          <Header />
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
        </>
      )}
    </>
  );
}
