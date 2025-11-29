'use client';

import { useState, useEffect } from 'react';
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

  // Don't render anything until we've checked sessionStorage (prevents hydration mismatch)
  if (!isReady) {
    return (
      <div className="fixed inset-0 z-[9999] bg-obsidian" />
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
