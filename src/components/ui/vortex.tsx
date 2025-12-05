"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  rangeHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  // Particle configuration - optimized for ultra-smooth, slow animation
  const particleCount = props.particleCount || 800;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 150;
  const baseTTL = 120; // Even longer lifetime for smoother trails
  const rangeTTL = 250;
  const baseSpeed = props.baseSpeed || 0.05; // 40% slower - ultra slow base movement
  const rangeSpeed = props.rangeSpeed || 0.35; // 40% slower - reduced speed range
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 1.5;
  // Brand signal orange: #FF4F00 is hue 18-19, keeping it pure orange not yellow
  const baseHue = props.baseHue || 18;
  const rangeHue = props.rangeHue || 8; // Very tight range to stay pure orange
  const noiseSteps = 1.5; // Further reduced for ultra-smooth flow
  const xOff = 0.0005; // Even lower frequency for gentler curves
  const yOff = 0.0005;
  const zOff = 0.00012; // 40% slower time evolution
  const backgroundColor = props.backgroundColor || "#121212";

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tick = 0;
    const noise3D = createNoise3D();
    let particleProps = new Float32Array(particlePropsLength);
    let center: [number, number] = [0, 0];
    let width = 0;
    let height = 0;

    const TAU = 2 * Math.PI;
    const rand = (n: number) => n * Math.random();
    const randRange = (n: number) => n - rand(2 * n);
    const fadeInOut = (t: number, m: number) => {
      const hm = 0.5 * m;
      return Math.abs(((t + hm) % m) - hm) / hm;
    };
    // Smoother interpolation for gentler movement
    const lerp = (n1: number, n2: number, speed: number) =>
      (1 - speed) * n1 + speed * n2;
    const smoothLerpFactor = 0.3; // Lower = smoother velocity changes

    const initParticle = (i: number) => {
      const x = rand(width);
      const y = center[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);
      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const initParticles = () => {
      tick = 0;
      particleProps = new Float32Array(particlePropsLength);
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Reset transform before scaling
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      center = [width / 2, height / 2];
    };

    const drawParticle = (
      x: number, y: number, x2: number, y2: number,
      life: number, ttl: number, radius: number, hue: number
    ) => {
      const alpha = fadeInOut(life, ttl);
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineWidth = radius;
      // Pure brand signal orange (#FF4F00) - high saturation, vibrant
      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${alpha * 0.85})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    };

    const checkBounds = (x: number, y: number) => {
      return x > width || x < 0 || y > height || y < 0;
    };

    const updateParticle = (i: number) => {
      const x = particleProps[i];
      const y = particleProps[i + 1];
      const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
      // Use smoother lerp factor for gentler velocity changes
      const vx = lerp(particleProps[i + 2], Math.cos(n), smoothLerpFactor);
      const vy = lerp(particleProps[i + 3], Math.sin(n), smoothLerpFactor);
      let life = particleProps[i + 4];
      const ttl = particleProps[i + 5];
      const speed = particleProps[i + 6];
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;
      const radius = particleProps[i + 7];
      const hue = particleProps[i + 8];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue);

      life++;
      particleProps[i] = x2;
      particleProps[i + 1] = y2;
      particleProps[i + 2] = vx;
      particleProps[i + 3] = vy;
      particleProps[i + 4] = life;

      if (checkBounds(x, y) || life > ttl) {
        initParticle(i);
      }
    };

    const renderGlow = () => {
      const dpr = window.devicePixelRatio || 1;

      // Outer soft glow - subtle and warm
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.filter = "blur(12px) brightness(120%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.4; // Subtle outer glow
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Inner sharper glow - slightly brighter
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.filter = "blur(4px) brightness(140%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.5; // Moderate inner glow
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const renderToScreen = () => {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    const draw = () => {
      tick++;

      // Clear to transparent - background color is handled by the wrapper div
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
      }

      renderGlow();
      renderToScreen();

      animationFrameId.current = requestAnimationFrame(draw);
    };

    // Initialize
    resize();
    initParticles();
    draw();

    const handleResize = () => {
      resize();
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [backgroundColor, baseHue, rangeHue, baseRadius, rangeRadius, baseSpeed, rangeSpeed, rangeY, particlePropsLength, particleCount]);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative w-full", props.containerClassName)}
      style={{ backgroundColor }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <canvas ref={canvasRef} className="absolute inset-0" />
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
