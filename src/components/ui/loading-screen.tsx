'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number;
}

// Smooth easing curve for elegant animations
const smoothEase = [0.22, 1, 0.36, 1];

export function LoadingScreen({ onLoadingComplete, minDuration = 2800 }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation to complete before calling onLoadingComplete
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 800); // Match exit animation duration
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-obsidian flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: smoothEase }
          }}
        >
          {/* Background grid pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={isExiting ? { opacity: 0, scale: 1.1 } : { opacity: 0.05 }}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 79, 0, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 79, 0, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </motion.div>

          {/* Radial glow behind logo */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,79,0,0.15) 0%, transparent 70%)',
            }}
            animate={isExiting
              ? { scale: 2, opacity: 0 }
              : { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }
            }
            transition={isExiting
              ? { duration: 0.8, ease: smoothEase }
              : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }
          />

          {/* Main logo container */}
          <motion.div
            className="relative flex flex-col items-center"
            animate={isExiting
              ? { y: -30, opacity: 0, scale: 0.9, filter: 'blur(10px)' }
              : { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }
            }
            transition={{ duration: 0.7, ease: smoothEase }}
          >
            {/* G0 Logo with glitch effect */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: smoothEase
                }
              }}
            >
              {/* Glitch layers - using CSS animation for steps effect */}
              <div className="absolute inset-0 flex items-center justify-center animate-glitch-cyan">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#00ffff] flex items-center justify-center">
                  <span className="typo-headline text-4xl md:text-5xl text-obsidian font-bold">G0</span>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center animate-glitch-magenta">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#ff00ff] flex items-center justify-center">
                  <span className="typo-headline text-4xl md:text-5xl text-obsidian font-bold">G0</span>
                </div>
              </div>

              {/* Main logo */}
              <motion.div
                className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-signal flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(255, 79, 0, 0)',
                    '0 0 40px rgba(255, 79, 0, 0.6)',
                    '0 0 80px rgba(255, 79, 0, 0.3)',
                    '0 0 40px rgba(255, 79, 0, 0.6)',
                    '0 0 0px rgba(255, 79, 0, 0)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="typo-headline text-4xl md:text-5xl text-obsidian font-bold">G0</span>
              </motion.div>
            </motion.div>

            {/* GlitchZero text */}
            <motion.div
              className="mt-6 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.6,
                  ease: smoothEase
                }
              }}
            >
              <span className="typo-headline text-2xl md:text-3xl text-platinum">
                <span className="glitch" data-text="Glitch">Glitch</span>
                <span className="text-platinum">Zero</span>
              </span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-8 w-56 h-[3px] bg-carbon/50 overflow-hidden rounded-full"
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: 224,
                transition: { delay: 0.5, duration: 0.5, ease: smoothEase }
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-signal via-orange-400 to-signal rounded-full"
                initial={{ width: '0%', x: '-10%' }}
                animate={{
                  width: '100%',
                  x: '0%',
                  transition: {
                    duration: (minDuration / 1000) - 0.3,
                    ease: [0.4, 0, 0.2, 1] // Slower, more gradual ease
                  }
                }}
              />
            </motion.div>

            {/* Initializing text */}
            <motion.p
              className="mt-5 typo-tech text-xs text-tungsten tracking-[0.2em]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.7, duration: 0.4 }
              }}
            >
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                INITIALIZING
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              >.</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              >.</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              >.</motion.span>
            </motion.p>
          </motion.div>

          {/* Bottom scan line effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-signal to-transparent"
            animate={isExiting
              ? { opacity: 0, scaleX: 0 }
              : { opacity: [0, 0.5, 0], x: ['-100%', '100%'] }
            }
            transition={isExiting
              ? { duration: 0.3 }
              : { duration: 2, repeat: Infinity, ease: 'linear' }
            }
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
