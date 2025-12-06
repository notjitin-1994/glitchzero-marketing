"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Brand-compliant color themes for the neuro background effect.
 * Each theme uses a monochromatic palette based on GlitchZero brand colors.
 */
export type ColorTheme =
  | "signal"      // Signal orange (#FF4F00) - Primary brand, energy, action
  | "terminal"    // Terminal green (#30D158) - Success, reliability, uptime
  | "ember"       // Deep amber/rust - Warmth, value, trust
  | "cyber"       // Cool cyan/teal - Tech, connectivity, innovation
  | "purple"      // Deep purple - Premium, enterprise, software
  | "crimson";    // Deep red - Urgency, importance, alerts

interface ColorPalette {
  base: [number, number, number];
  dark: [number, number, number];
  bright: [number, number, number];
}

const COLOR_THEMES: Record<ColorTheme, ColorPalette> = {
  signal: {
    base: [1.0, 0.31, 0.0],      // #FF4F00
    dark: [0.6, 0.18, 0.0],
    bright: [1.0, 0.45, 0.1],
  },
  terminal: {
    base: [0.19, 0.82, 0.35],    // #30D158
    dark: [0.1, 0.5, 0.2],
    bright: [0.3, 0.95, 0.45],
  },
  ember: {
    base: [0.85, 0.35, 0.1],     // Deep amber
    dark: [0.5, 0.2, 0.05],
    bright: [1.0, 0.5, 0.2],
  },
  cyber: {
    base: [0.0, 0.7, 0.8],       // Cyan/teal
    dark: [0.0, 0.4, 0.5],
    bright: [0.2, 0.9, 1.0],
  },
  purple: {
    base: [0.5, 0.2, 0.8],       // Deep purple
    dark: [0.3, 0.1, 0.5],
    bright: [0.7, 0.4, 1.0],
  },
  crimson: {
    base: [0.8, 0.15, 0.2],      // Deep red
    dark: [0.5, 0.08, 0.1],
    bright: [1.0, 0.3, 0.35],
  },
};

interface NeuroBackgroundProps {
  /** Overall intensity of the effect (0-2, default 1.2) */
  intensity?: number;
  /** Speed of the animation (0.1-1, default 0.29) */
  speed?: number;
  /** Color theme for the effect */
  colorTheme?: ColorTheme;
  className?: string;
}

const vertexShader = `
  precision mediump float;

  attribute vec2 position;
  attribute vec2 uv;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;

  varying vec2 vUv;
  uniform float u_time;
  uniform float u_ratio;
  uniform float u_scroll_progress;
  uniform float u_intensity;
  uniform vec3 u_color_base;
  uniform vec3 u_color_dark;
  uniform vec3 u_color_bright;

  vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
  }

  float neuro_shape(vec2 uv, float t, float p) {
    vec2 sine_acc = vec2(0.);
    vec2 res = vec2(0.);
    float scale = 8.;

    for (int j = 0; j < 15; j++) {
      uv = rotate(uv, 1.);
      sine_acc = rotate(sine_acc, 1.);
      vec2 layer = uv * scale + float(j) + sine_acc - t;
      sine_acc += sin(layer) + 2.4 * p;
      res += (.5 + .5 * cos(layer)) / scale;
      scale *= (1.2);
    }
    return res.x + res.y;
  }

  void main() {
    vec2 uv = .5 * vUv;
    uv.x *= u_ratio;

    // Fixed organic movement without mouse interaction
    float p = 0.25;

    // Time progression for smooth animation
    float t = .0002 * u_time;

    float noise = neuro_shape(uv, t, p);

    noise = 1.2 * pow(noise, 3.);
    noise += pow(noise, 10.);
    noise = max(.0, noise - .5);
    noise *= (1. - length(vUv - .5));

    // Create depth by mixing between dark and bright based on noise intensity
    float colorMix = smoothstep(0.0, 1.0, noise * 2.0);
    vec3 baseColor = mix(u_color_dark, u_color_base, colorMix);

    // Add subtle brightness variation based on scroll
    float brightness = 0.8 + 0.2 * sin(u_scroll_progress * 2.0);

    // Apply intensity and noise
    vec3 color = baseColor * noise * u_intensity * brightness;

    // Subtle glow in brighter areas
    color += u_color_bright * pow(noise, 4.0) * 0.3;

    gl_FragColor = vec4(color, noise * 0.95);
  }
`;

interface WebGLState {
  gl: WebGLRenderingContext;
  program: WebGLProgram;
  positionBuffer: WebGLBuffer;
  uvBuffer: WebGLBuffer;
  uniforms: {
    u_time: WebGLUniformLocation | null;
    u_ratio: WebGLUniformLocation | null;
    u_scroll_progress: WebGLUniformLocation | null;
    u_intensity: WebGLUniformLocation | null;
    u_color_base: WebGLUniformLocation | null;
    u_color_dark: WebGLUniformLocation | null;
    u_color_bright: WebGLUniformLocation | null;
  };
  attributes: {
    position: number;
    uv: number;
  };
}

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

export function NeuroBackground({
  intensity = 1.2,
  speed = 0.29,
  colorTheme = "signal",
  className,
}: NeuroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const glStateRef = useRef<WebGLState | null>(null);
  const [isReady, setIsReady] = useState(false);
  const timeScaleRef = useRef(speed);
  const colorsRef = useRef(COLOR_THEMES[colorTheme]);

  // Update colors when theme changes
  useEffect(() => {
    colorsRef.current = COLOR_THEMES[colorTheme];
  }, [colorTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Wait for canvas to have dimensions
    const initTimeout = setTimeout(() => {
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;

      if (width === 0 || height === 0) return;

      const gl = canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: true,
        antialias: true,
      });

      if (!gl) {
        console.error("WebGL not supported");
        return;
      }

      // Create shaders
      const vShader = createShader(gl, gl.VERTEX_SHADER, vertexShader);
      const fShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);

      if (!vShader || !fShader) return;

      // Create program
      const program = createProgram(gl, vShader, fShader);
      if (!program) return;

      // Get attribute locations
      const positionAttr = gl.getAttribLocation(program, "position");
      const uvAttr = gl.getAttribLocation(program, "uv");

      // Get uniform locations
      const uniforms = {
        u_time: gl.getUniformLocation(program, "u_time"),
        u_ratio: gl.getUniformLocation(program, "u_ratio"),
        u_scroll_progress: gl.getUniformLocation(program, "u_scroll_progress"),
        u_intensity: gl.getUniformLocation(program, "u_intensity"),
        u_color_base: gl.getUniformLocation(program, "u_color_base"),
        u_color_dark: gl.getUniformLocation(program, "u_color_dark"),
        u_color_bright: gl.getUniformLocation(program, "u_color_bright"),
      };

      // Create position buffer (fullscreen quad)
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          -1, -1,
           1, -1,
          -1,  1,
          -1,  1,
           1, -1,
           1,  1,
        ]),
        gl.STATIC_DRAW
      );

      // Create UV buffer
      const uvBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          0, 0,
          1, 0,
          0, 1,
          0, 1,
          1, 0,
          1, 1,
        ]),
        gl.STATIC_DRAW
      );

      if (!positionBuffer || !uvBuffer) return;

      glStateRef.current = {
        gl,
        program,
        positionBuffer,
        uvBuffer,
        uniforms,
        attributes: {
          position: positionAttr,
          uv: uvAttr,
        },
      };

      // Set canvas size
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);

      // Enable blending for transparency
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      setIsReady(true);
    }, 100);

    return () => {
      clearTimeout(initTimeout);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    const state = glStateRef.current;
    if (!canvas || !state) return;

    const { gl, program, positionBuffer, uvBuffer, uniforms, attributes } = state;

    const render = () => {
      const currentTime = performance.now();
      const colors = colorsRef.current;

      // Clear
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Use program
      gl.useProgram(program);

      // Set uniforms - apply speed multiplier to time
      gl.uniform1f(uniforms.u_time, currentTime * timeScaleRef.current);
      gl.uniform1f(uniforms.u_ratio, canvas.width / canvas.height);
      gl.uniform1f(uniforms.u_scroll_progress, window.scrollY / (2 * window.innerHeight));
      gl.uniform1f(uniforms.u_intensity, intensity);

      // Set color uniforms
      gl.uniform3fv(uniforms.u_color_base, colors.base);
      gl.uniform3fv(uniforms.u_color_dark, colors.dark);
      gl.uniform3fv(uniforms.u_color_bright, colors.bright);

      // Bind position buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(attributes.position);
      gl.vertexAttribPointer(attributes.position, 2, gl.FLOAT, false, 0, 0);

      // Bind UV buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
      gl.enableVertexAttribArray(attributes.uv);
      gl.vertexAttribPointer(attributes.uv, 2, gl.FLOAT, false, 0, 0);

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationRef.current = requestAnimationFrame(render);
    };

    const handleResize = () => {
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    // Start animation
    render();

    // Add resize listener only
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isReady, intensity]);

  // Update speed ref when prop changes
  useEffect(() => {
    timeScaleRef.current = speed;
  }, [speed]);

  // Cleanup WebGL on unmount
  useEffect(() => {
    return () => {
      const state = glStateRef.current;
      if (state) {
        const { gl } = state;
        const ext = gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        className
      )}
      style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
    />
  );
}
