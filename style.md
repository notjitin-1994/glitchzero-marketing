# GlitchZero Design System

## Complete Cross-Platform Style Guide

**Version:** 1.0.0
**Last Updated:** November 2025

---

## Table of Contents

1. [Brand Identity & Philosophy](#1-brand-identity--philosophy)
2. [Design Tokens](#2-design-tokens)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Spacing System](#5-spacing-system)
6. [Border Radius & Shapes](#6-border-radius--shapes)
7. [Elevation & Shadows](#7-elevation--shadows)
8. [Animation & Motion](#8-animation--motion)
9. [Iconography](#9-iconography)
10. [Component Library](#10-component-library)
11. [Layout Patterns](#11-layout-patterns)
12. [Accessibility Guidelines](#12-accessibility-guidelines)
13. [Platform-Specific Implementations](#13-platform-specific-implementations)
14. [Code Examples](#14-code-examples)

---

## 1. Brand Identity & Philosophy

### Brand Essence

GlitchZero embodies a **dark-first, high-contrast, technical aesthetic** that conveys precision, innovation, and digital excellence. The design system prioritizes:

- **Clarity**: Clear visual hierarchy and readable content
- **Technical Feel**: Monospace fonts for code, uppercase styling for emphasis
- **Smooth Interactions**: Apple-inspired easing curves for polished animations
- **Accessibility**: WCAG AA compliance across all components
- **Performance**: CSS variables for efficient theme switching

### Visual DNA

| Attribute | Description |
|-----------|-------------|
| **Primary Palette** | Dark obsidian backgrounds with signal orange accents |
| **Typography** | Manrope for headlines/body, JetBrains Mono for code |
| **Aesthetic** | Clean, minimalist with subtle glitch effects |
| **Motion** | Smooth, purposeful animations with spring physics |
| **Texture** | Subtle gradients, glow effects, grid patterns |

### Design Principles

1. **Dark-First Design**: Build for dark mode first, adapt for light
2. **High Contrast**: Platinum text on obsidian backgrounds
3. **Signal Hierarchy**: Use orange strategically for CTAs and emphasis
4. **Technical Precision**: Sharp edges, monospace accents, grid alignment
5. **Purposeful Motion**: Every animation serves a purpose

---

## 2. Design Tokens

### Token Architecture (Three-Tier Model)

```
Raw Values --> Primitives (Global) --> Semantic (Alias) --> Component Tokens
```

| Tier | Description | Example |
|------|-------------|---------|
| **Raw Values** | Actual design values | `#FF4F00` |
| **Primitives** | Platform-agnostic base tokens | `signal`, `obsidian` |
| **Semantic** | Purpose-based references | `color-primary`, `bg-default` |
| **Component** | UI component specific | `button-bg-primary` |

### Naming Convention

```
{namespace}-{category}-{role}-{modifier}-{state}
```

**Examples:**
- `gz-color-text-primary`
- `gz-color-bg-surface-hover`
- `gz-spacing-inset-lg`
- `gz-radius-md`

### Design Tokens JSON (DTCG Format)

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "brand": {
      "signal": {
        "$type": "color",
        "$value": "#FF4F00",
        "$description": "Primary brand color - GlitchZero Signal Orange"
      },
      "obsidian": {
        "$type": "color",
        "$value": "#121212",
        "$description": "Primary dark background"
      },
      "carbon": {
        "$type": "color",
        "$value": "#1C1C1E",
        "$description": "Secondary dark surface"
      },
      "platinum": {
        "$type": "color",
        "$value": "#E5E5E7",
        "$description": "Primary light text"
      },
      "tungsten": {
        "$type": "color",
        "$value": "#8E8E93",
        "$description": "Muted text and borders"
      },
      "terminal": {
        "$type": "color",
        "$value": "#30D158",
        "$description": "Success and positive states"
      }
    },
    "semantic": {
      "text": {
        "primary": { "$value": "{color.brand.platinum}" },
        "secondary": { "$value": "{color.brand.tungsten}" },
        "muted": { "$value": "hsl(240 5% 64.9%)" },
        "inverse": { "$value": "{color.brand.obsidian}" },
        "accent": { "$value": "{color.brand.signal}" }
      },
      "background": {
        "default": { "$value": "{color.brand.obsidian}" },
        "surface": { "$value": "{color.brand.carbon}" },
        "elevated": { "$value": "hsl(240 4% 11%)" },
        "overlay": { "$value": "rgba(18, 18, 18, 0.8)" }
      },
      "border": {
        "default": { "$value": "{color.brand.carbon}" },
        "subtle": { "$value": "rgba(142, 142, 147, 0.2)" },
        "strong": { "$value": "rgba(142, 142, 147, 0.3)" },
        "focus": { "$value": "{color.brand.signal}" }
      },
      "status": {
        "success": { "$value": "{color.brand.terminal}" },
        "warning": { "$value": "#F59E0B" },
        "error": { "$value": "#EF4444" },
        "info": { "$value": "#3B82F6" }
      }
    }
  },
  "spacing": {
    "0": { "$type": "dimension", "$value": "0" },
    "0.5": { "$type": "dimension", "$value": "0.125rem" },
    "1": { "$type": "dimension", "$value": "0.25rem" },
    "1.5": { "$type": "dimension", "$value": "0.375rem" },
    "2": { "$type": "dimension", "$value": "0.5rem" },
    "3": { "$type": "dimension", "$value": "0.75rem" },
    "4": { "$type": "dimension", "$value": "1rem" },
    "5": { "$type": "dimension", "$value": "1.25rem" },
    "6": { "$type": "dimension", "$value": "1.5rem" },
    "8": { "$type": "dimension", "$value": "2rem" },
    "10": { "$type": "dimension", "$value": "2.5rem" },
    "12": { "$type": "dimension", "$value": "3rem" },
    "16": { "$type": "dimension", "$value": "4rem" },
    "20": { "$type": "dimension", "$value": "5rem" },
    "24": { "$type": "dimension", "$value": "6rem" },
    "32": { "$type": "dimension", "$value": "8rem" }
  },
  "typography": {
    "fontFamily": {
      "sans": { "$value": "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
      "mono": { "$value": "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }
    },
    "fontSize": {
      "xs": { "$value": "0.75rem" },
      "sm": { "$value": "0.875rem" },
      "base": { "$value": "1rem" },
      "lg": { "$value": "1.125rem" },
      "xl": { "$value": "1.25rem" },
      "2xl": { "$value": "1.5rem" },
      "3xl": { "$value": "1.875rem" },
      "4xl": { "$value": "2.25rem" },
      "5xl": { "$value": "3rem" },
      "6xl": { "$value": "3.75rem" }
    },
    "fontWeight": {
      "regular": { "$value": "400" },
      "medium": { "$value": "500" },
      "semibold": { "$value": "600" },
      "bold": { "$value": "700" },
      "extrabold": { "$value": "800" }
    },
    "lineHeight": {
      "tight": { "$value": "1.25" },
      "snug": { "$value": "1.375" },
      "normal": { "$value": "1.5" },
      "relaxed": { "$value": "1.7" }
    },
    "letterSpacing": {
      "tight": { "$value": "-0.025em" },
      "normal": { "$value": "0" },
      "headlines": { "$value": "0.02em" },
      "tags": { "$value": "0.05em" }
    }
  },
  "borderRadius": {
    "none": { "$type": "dimension", "$value": "0" },
    "sm": { "$type": "dimension", "$value": "0.25rem" },
    "md": { "$type": "dimension", "$value": "0.5rem" },
    "lg": { "$type": "dimension", "$value": "0.75rem" },
    "xl": { "$type": "dimension", "$value": "1rem" },
    "2xl": { "$type": "dimension", "$value": "1.5rem" },
    "full": { "$type": "dimension", "$value": "9999px" }
  },
  "shadow": {
    "sm": {
      "$type": "shadow",
      "$value": {
        "offsetX": "0",
        "offsetY": "1px",
        "blur": "2px",
        "spread": "0",
        "color": "rgba(0, 0, 0, 0.05)"
      }
    },
    "md": {
      "$type": "shadow",
      "$value": {
        "offsetX": "0",
        "offsetY": "4px",
        "blur": "6px",
        "spread": "-1px",
        "color": "rgba(0, 0, 0, 0.1)"
      }
    },
    "lg": {
      "$type": "shadow",
      "$value": {
        "offsetX": "0",
        "offsetY": "10px",
        "blur": "15px",
        "spread": "-3px",
        "color": "rgba(0, 0, 0, 0.1)"
      }
    },
    "xl": {
      "$type": "shadow",
      "$value": {
        "offsetX": "0",
        "offsetY": "20px",
        "blur": "25px",
        "spread": "-5px",
        "color": "rgba(0, 0, 0, 0.1)"
      }
    },
    "glow": {
      "signal": {
        "$type": "shadow",
        "$value": {
          "offsetX": "0",
          "offsetY": "0",
          "blur": "15px",
          "spread": "0",
          "color": "rgba(255, 79, 0, 0.4)"
        }
      },
      "signalStrong": {
        "$type": "shadow",
        "$value": {
          "offsetX": "0",
          "offsetY": "0",
          "blur": "30px",
          "spread": "0",
          "color": "rgba(255, 79, 0, 0.5)"
        }
      }
    }
  },
  "motion": {
    "duration": {
      "instant": { "$type": "duration", "$value": "0ms" },
      "fast": { "$type": "duration", "$value": "150ms" },
      "normal": { "$type": "duration", "$value": "300ms" },
      "slow": { "$type": "duration", "$value": "500ms" },
      "slower": { "$type": "duration", "$value": "700ms" }
    },
    "easing": {
      "linear": { "$value": "linear" },
      "easeIn": { "$value": "cubic-bezier(0.4, 0, 1, 1)" },
      "easeOut": { "$value": "cubic-bezier(0, 0, 0.2, 1)" },
      "easeInOut": { "$value": "cubic-bezier(0.4, 0, 0.2, 1)" },
      "smooth": { "$value": "cubic-bezier(0.22, 1, 0.36, 1)" }
    }
  }
}
```

---

## 3. Color System

### Brand Colors

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| **Signal** | `#FF4F00` | `19 100% 50%` | Primary accent, CTAs, links |
| **Obsidian** | `#121212` | `0 0% 7.1%` | Primary background |
| **Carbon** | `#1C1C1E` | `240 3.3% 11%` | Secondary surfaces, cards |
| **Platinum** | `#E5E5E7` | `60 4.8% 95.9%` | Primary text |
| **Tungsten** | `#8E8E93` | `240 2.1% 56.7%` | Muted text, borders |
| **Terminal** | `#30D158` | `145 63.4% 45.4%` | Success states |

### Semantic Color Mapping

```css
:root {
  /* Background Colors */
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 4% 11%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;

  /* Interactive Colors */
  --primary: 19 100% 50%;
  --primary-foreground: 240 10% 3.9%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;

  /* Neutral Colors */
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;

  /* Status Colors */
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --success: 145 63.4% 45.4%;
  --success-foreground: 0 0% 98%;

  /* Border & Input */
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 19 100% 50%;

  /* Named Colors */
  --obsidian: #121212;
  --carbon: #1C1C1E;
  --platinum: #E5E5E7;
  --tungsten: #8E8E93;
  --signal: #FF4F00;
  --terminal: #30D158;

  /* Base Radius */
  --radius: 0.5rem;
}
```

### Dark Mode (Default)

The GlitchZero design system is **dark-first**. The default theme IS the dark theme.

```css
.dark,
:root {
  --background: 0 0% 7.1%;
  --foreground: 60 4.8% 95.9%;
  --card: 240 3.3% 11%;
  --muted-foreground: 240 2.1% 56.7%;
  --border: 240 3.3% 11%;
}
```

### Light Mode (Optional)

```css
.light {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 98%;
  --card-foreground: 240 10% 3.9%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --border: 240 5.9% 90%;
}
```

### Color Accessibility

| Combination | Contrast Ratio | WCAG Level |
|-------------|----------------|------------|
| Signal on Obsidian | 4.8:1 | AA |
| Platinum on Obsidian | 15.2:1 | AAA |
| Platinum on Carbon | 13.1:1 | AAA |
| Tungsten on Obsidian | 5.9:1 | AA |
| Terminal on Obsidian | 7.8:1 | AAA |

### Color Usage Guidelines

**DO:**
- Use Signal orange for primary CTAs and interactive elements
- Use Platinum for primary body text
- Use Tungsten for secondary/muted content
- Use Terminal green for success states

**DON'T:**
- Use Signal orange for large blocks of text
- Use low-contrast color combinations
- Mix too many accent colors in one view

---

## 4. Typography

### Font Families

| Purpose | Font | Fallback Stack |
|---------|------|----------------|
| **Headlines/Body** | Manrope | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| **Code/Technical** | JetBrains Mono | `'Fira Code', 'Consolas', monospace` |

### Type Scale

| Name | Size | Line Height | Weight | Use Case |
|------|------|-------------|--------|----------|
| `display` | 3.75rem (60px) | 1.1 | 800 | Hero headlines |
| `h1` | 3rem (48px) | 1.2 | 800 | Page titles |
| `h2` | 2.25rem (36px) | 1.25 | 800 | Section headers |
| `h3` | 1.875rem (30px) | 1.3 | 700 | Subsection headers |
| `h4` | 1.5rem (24px) | 1.35 | 600 | Card titles |
| `h5` | 1.25rem (20px) | 1.4 | 600 | Labels |
| `h6` | 1.125rem (18px) | 1.4 | 500 | Overlines |
| `body-lg` | 1.125rem (18px) | 1.7 | 400 | Lead paragraphs |
| `body` | 1rem (16px) | 1.7 | 400 | Body text |
| `body-sm` | 0.875rem (14px) | 1.5 | 400 | Secondary text |
| `caption` | 0.75rem (12px) | 1.4 | 400 | Captions |

### Typography Classes

```css
/* Headlines - Manrope ExtraBold, Uppercase */
.typo-headline {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* Subheads - Manrope Medium */
.typo-subhead {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
}

/* Body - Manrope Regular */
.typo-body {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  line-height: 1.7;
}

/* Technical - JetBrains Mono, Uppercase */
.typo-tech {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Code - JetBrains Mono Regular */
.typo-code {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
}
```

### Responsive Typography

```css
/* Fluid typography using clamp() */
:root {
  --font-size-display: clamp(2.5rem, 5vw + 1rem, 3.75rem);
  --font-size-h1: clamp(2rem, 4vw + 0.5rem, 3rem);
  --font-size-h2: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);
  --font-size-h3: clamp(1.25rem, 2vw + 0.5rem, 1.875rem);
  --font-size-body-lg: clamp(1rem, 1vw + 0.5rem, 1.125rem);
  --font-size-body: clamp(0.875rem, 0.5vw + 0.5rem, 1rem);
}
```

---

## 5. Spacing System

### 8-Point Grid

GlitchZero uses an 8-point grid system for consistent spacing:

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `0` | 0 | 0px | No spacing |
| `0.5` | 0.125rem | 2px | Micro adjustments |
| `1` | 0.25rem | 4px | Icon gaps |
| `1.5` | 0.375rem | 6px | Tight padding |
| `2` | 0.5rem | 8px | Small gaps |
| `3` | 0.75rem | 12px | Input padding |
| `4` | 1rem | 16px | Standard spacing |
| `5` | 1.25rem | 20px | Medium spacing |
| `6` | 1.5rem | 24px | Card padding |
| `8` | 2rem | 32px | Large gaps |
| `10` | 2.5rem | 40px | Section spacing |
| `12` | 3rem | 48px | Major sections |
| `16` | 4rem | 64px | Hero spacing |
| `20` | 5rem | 80px | Large sections |
| `24` | 6rem | 96px | Section padding |
| `32` | 8rem | 128px | Hero padding |

### Semantic Spacing

```css
/* Component Inset (padding) */
--spacing-inset-xs: 0.5rem;     /* 8px - badges, tags */
--spacing-inset-sm: 0.75rem;    /* 12px - small buttons */
--spacing-inset-md: 1rem;       /* 16px - standard components */
--spacing-inset-lg: 1.5rem;     /* 24px - cards */
--spacing-inset-xl: 2rem;       /* 32px - large cards */

/* Stack Spacing (vertical gaps) */
--spacing-stack-xs: 0.25rem;    /* 4px - tight stacks */
--spacing-stack-sm: 0.5rem;     /* 8px - list items */
--spacing-stack-md: 1rem;       /* 16px - paragraphs */
--spacing-stack-lg: 1.5rem;     /* 24px - sections */
--spacing-stack-xl: 2rem;       /* 32px - major sections */

/* Inline Spacing (horizontal gaps) */
--spacing-inline-xs: 0.25rem;   /* 4px - icon + text */
--spacing-inline-sm: 0.5rem;    /* 8px - button groups */
--spacing-inline-md: 1rem;      /* 16px - nav items */
--spacing-inline-lg: 1.5rem;    /* 24px - card grids */
--spacing-inline-xl: 2rem;      /* 32px - major layouts */
```

### Common Spacing Patterns

```css
/* Hero Section */
.hero {
  padding-top: 8rem;      /* pt-32 */
  padding-bottom: 5rem;   /* pb-20 */
  padding-left: 1.5rem;   /* px-6 */
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .hero {
    padding-top: 12rem;   /* md:pt-48 */
    padding-bottom: 8rem; /* md:pb-32 */
  }
}

/* Section */
.section {
  padding-top: 6rem;      /* py-24 */
  padding-bottom: 6rem;
  padding-left: 1.5rem;   /* px-6 */
  padding-right: 1.5rem;
}

/* Card */
.card {
  padding: 1.5rem;        /* p-6 */
}

/* Button */
.button {
  padding: 0.5rem 1rem;   /* py-2 px-4 */
}

.button-lg {
  padding: 1rem 2rem;     /* py-4 px-8 */
}
```

---

## 6. Border Radius & Shapes

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `none` | 0 | Sharp corners, tables |
| `sm` | 0.25rem (4px) | Small elements, tags |
| `md` | 0.5rem (8px) | Standard components |
| `lg` | 0.75rem (12px) | Cards, modals |
| `xl` | 1rem (16px) | Large cards |
| `2xl` | 1.5rem (24px) | Feature cards |
| `full` | 9999px | Pills, avatars |

### Component Border Radius

| Component | Border Radius |
|-----------|---------------|
| Button | `md` (8px) |
| Input | `md` (8px) |
| Card | `lg` (12px) |
| Badge | `full` (pill) |
| Dialog | `lg` (12px) |
| Avatar | `full` (circle) |
| Tag | `full` (pill) |
| Tooltip | `md` (8px) |

### CSS Variables

```css
:root {
  --radius: 0.5rem;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-full: 9999px;
}
```

---

## 7. Elevation & Shadows

### Shadow Scale

| Level | Shadow | Usage |
|-------|--------|-------|
| `sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Cards, dropdowns |
| `lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | Modals, popovers |
| `xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | Dialogs |
| `2xl` | `0 25px 50px -12px rgba(0,0,0,0.25)` | Prominent overlays |

### Glow Effects (Signature GlitchZero Effect)

```css
/* Signal Glow */
.glow-signal {
  box-shadow: 0 0 15px rgba(255, 79, 0, 0.4);
}

.glow-signal-md {
  box-shadow: 0 0 20px rgba(255, 79, 0, 0.3);
}

.glow-signal-lg {
  box-shadow: 0 0 30px rgba(255, 79, 0, 0.5);
}

/* Pulsing Glow Animation */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 79, 0, 0.4),
                0 0 20px rgba(255, 79, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 79, 0, 0.6),
                0 0 40px rgba(255, 79, 0, 0.3);
  }
}

.animate-glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}
```

### Hover Effects

```css
/* Lift on Hover */
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}
```

---

## 8. Animation & Motion

### Duration Scale

| Token | Duration | Use Case |
|-------|----------|----------|
| `instant` | 0ms | No animation |
| `fast` | 150ms | Hover states, micro-interactions |
| `normal` | 300ms | Component transitions |
| `slow` | 500ms | Page transitions |
| `slower` | 700ms | Complex animations |

### Easing Functions

| Name | Curve | Use Case |
|------|-------|----------|
| `linear` | `linear` | Continuous animations |
| `easeIn` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `easeOut` | `cubic-bezier(0, 0, 0.2, 1)` | Entrance animations |
| `easeInOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | State changes |
| `smooth` | `cubic-bezier(0.22, 1, 0.36, 1)` | Signature GlitchZero ease |

### Core Animations

#### Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

#### Blur Fade In

```css
@keyframes blurFadeIn {
  from {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
  }
}

.animate-blur-fade-in {
  animation: blurFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

#### Scale Fade In

```css
@keyframes scaleFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-fade-in {
  animation: scaleFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

#### Glitch Effect (Signature)

```css
@keyframes glitchCyan {
  0%, 100% { opacity: 0; transform: translate(0); }
  20% { opacity: 0.8; transform: translate(-2px, 2px); }
  40% { opacity: 0; transform: translate(2px, -2px); }
  60% { opacity: 0.8; transform: translate(-1px, 1px); }
  80% { opacity: 0; transform: translate(1px, -1px); }
}

@keyframes glitchMagenta {
  0%, 100% { opacity: 0; transform: translate(0); }
  20% { opacity: 0.8; transform: translate(2px, -2px); }
  40% { opacity: 0; transform: translate(-2px, 2px); }
  60% { opacity: 0.8; transform: translate(1px, -1px); }
  80% { opacity: 0; transform: translate(-1px, 1px); }
}

.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  color: #00ffff;
  animation: glitchCyan 0.3s steps(5) infinite;
  text-shadow: -1px 0 #00ffff;
  animation-delay: 0;
}

.glitch::after {
  color: #ff00ff;
  animation: glitchMagenta 0.3s steps(5) infinite;
  text-shadow: 1px 0 #ff00ff;
  animation-delay: 0.1s;
}
```

#### Float Animation

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### Stagger Animation Pattern

```tsx
// React/Framer Motion
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Iconography

### Icon Library

GlitchZero uses **Lucide React** for consistent, tree-shakeable icons.

### Icon Sizes

| Size | Pixels | Tailwind | Usage |
|------|--------|----------|-------|
| `xs` | 12px | `w-3 h-3` | Inline badges |
| `sm` | 16px | `w-4 h-4` | Form fields, badges |
| `md` | 20px | `w-5 h-5` | Buttons, navigation |
| `lg` | 24px | `w-6 h-6` | Section headers |
| `xl` | 32px | `w-8 h-8` | Feature icons |
| `2xl` | 48px | `w-12 h-12` | Hero sections |

### Icon Colors

```css
/* Primary Action */
.icon-primary { color: var(--signal); }

/* Text Icons */
.icon-default { color: var(--platinum); }
.icon-muted { color: var(--tungsten); }

/* Status Icons */
.icon-success { color: var(--terminal); }
.icon-warning { color: #F59E0B; }
.icon-error { color: #EF4444; }

/* Interactive States */
.icon-hover:hover { color: var(--signal); }
```

### Common Icons

| Icon | Component | Usage |
|------|-----------|-------|
| `Menu` | Navigation toggle | Mobile menu |
| `X` | Close button | Modals, alerts |
| `ArrowRight` | CTA indicator | Buttons, links |
| `ChevronDown` | Dropdown | Accordions, selects |
| `Check` | Success/Complete | Checkboxes, lists |
| `AlertCircle` | Warning/Error | Form validation |
| `Loader2` | Loading | Async operations |

---

## 10. Component Library

### Button

#### Variants

| Variant | Description | Background | Text |
|---------|-------------|------------|------|
| `primary` | Main CTA | Signal | Obsidian |
| `secondary` | Alternative action | Transparent | Signal (border) |
| `ghost` | Subtle action | Transparent | Signal |
| `destructive` | Danger action | Error | White |
| `outline` | Bordered | Transparent | Foreground |

#### Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| `sm` | 36px | `8px 12px` | 14px |
| `md` | 40px | `8px 16px` | 14px |
| `lg` | 44px | `16px 32px` | 16px |
| `icon` | 40px | 0 (square) | - |

#### Implementation

```tsx
// React Component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

// CSS Classes
const buttonVariants = {
  base: `
    inline-flex items-center justify-center gap-2
    rounded-md font-medium
    transition-colors duration-150
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
  `,
  variants: {
    primary: 'bg-signal text-obsidian hover:bg-signal/90',
    secondary: 'border-2 border-signal text-signal hover:bg-signal/10',
    ghost: 'text-signal hover:bg-signal/10',
    destructive: 'bg-destructive text-white hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent',
  },
  sizes: {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-8 text-base',
    icon: 'h-10 w-10',
  },
};
```

### Card

```tsx
// Structure
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    {/* Actions */}
  </CardFooter>
</Card>

// Styling
.card {
  background: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border-radius: var(--radius-lg);
  border: 1px solid hsl(var(--border));
  box-shadow: var(--shadow-sm);
}

.card-header {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.card-content {
  padding: 1.5rem;
  padding-top: 0;
}

.card-footer {
  padding: 1.5rem;
  padding-top: 0;
  display: flex;
  align-items: center;
}
```

### Input

```tsx
// Styling
.input {
  height: 40px;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  font-size: 0.875rem;
  transition: border-color 150ms, box-shadow 150ms;
}

.input::placeholder {
  color: hsl(var(--muted-foreground));
}

.input:focus {
  outline: none;
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Badge

```tsx
// Variants
const badgeVariants = {
  base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  variants: {
    default: 'bg-signal text-obsidian',
    secondary: 'bg-secondary text-secondary-foreground',
    destructive: 'bg-destructive text-destructive-foreground',
    outline: 'border border-input text-foreground',
    success: 'bg-terminal/20 text-terminal border border-terminal/30',
  },
};
```

### Dialog/Modal

```tsx
// Overlay
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(4px);
  z-index: 50;
}

// Content
.dialog-content {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 32rem;
  width: 100%;
  padding: 1.5rem;
  background: hsl(var(--card));
  border-radius: var(--radius-lg);
  border: 1px solid hsl(var(--border));
  box-shadow: var(--shadow-xl);
  z-index: 50;
}

// Animations
.dialog-content[data-state="open"] {
  animation: dialogEnter 200ms ease-out;
}

.dialog-content[data-state="closed"] {
  animation: dialogExit 150ms ease-in;
}

@keyframes dialogEnter {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes dialogExit {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.96);
  }
}
```

### Accordion

```tsx
.accordion-item {
  border-bottom: 1px solid hsl(var(--border));
}

.accordion-trigger {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  font-weight: 500;
  transition: all 150ms;
}

.accordion-trigger:hover {
  color: var(--signal);
}

.accordion-trigger[data-state="open"] .accordion-chevron {
  transform: rotate(180deg);
}

.accordion-content {
  overflow: hidden;
  font-size: 0.875rem;
  transition: height 200ms ease-out;
}

.accordion-content[data-state="open"] {
  animation: accordionDown 200ms ease-out;
}

.accordion-content[data-state="closed"] {
  animation: accordionUp 200ms ease-out;
}
```

---

## 11. Layout Patterns

### Container

```css
.container {
  width: 100%;
  max-width: 80rem; /* 1280px */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

### Grid Systems

```css
/* 2-Column Layout */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
}

/* 3-Column Layout */
.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 4-Column Metrics Grid */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}

@media (min-width: 768px) {
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Section Patterns

```css
/* Standard Section */
.section {
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Section with Background */
.section-alt {
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background: var(--carbon);
  border-top: 1px solid rgba(18, 18, 18, 0.5);
  border-bottom: 1px solid rgba(18, 18, 18, 0.5);
}

/* Hero Section */
.section-hero {
  padding-top: 8rem;
  padding-bottom: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .section-hero {
    padding-top: 12rem;
    padding-bottom: 8rem;
  }
}
```

### Sticky Elements

```css
/* Fixed Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: rgba(18, 18, 18, 0.8);
}

/* Sticky Sidebar */
.sidebar-sticky {
  position: sticky;
  top: 6rem;
  height: fit-content;
}
```

### Breakpoints

| Breakpoint | Width | Prefix |
|------------|-------|--------|
| Mobile | 0-639px | (default) |
| Small | 640px | `sm:` |
| Medium | 768px | `md:` |
| Large | 1024px | `lg:` |
| XL | 1280px | `xl:` |
| 2XL | 1536px | `2xl:` |

---

## 12. Accessibility Guidelines

### Color Contrast

| Element | Minimum Ratio | Target |
|---------|---------------|--------|
| Body text | 4.5:1 (AA) | 7:1 (AAA) |
| Large text (18px+) | 3:1 (AA) | 4.5:1 (AAA) |
| UI components | 3:1 (AA) | - |
| Non-decorative graphics | 3:1 (AA) | - |

### Focus States

```css
/* Default Focus Ring */
.focus-ring {
  outline: none;
}

.focus-ring:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 2px;
}

/* Alternative Focus Styles */
.focus-within-ring:focus-within {
  ring: 2px;
  ring-color: var(--signal);
  ring-offset: 2px;
  ring-offset-color: var(--obsidian);
}
```

### Touch Targets

| Minimum Size | Recommended | Usage |
|--------------|-------------|-------|
| 24×24 CSS px | 44×44 CSS px | All touch targets |

```css
/* Ensure minimum touch target */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### Keyboard Navigation

- All interactive elements must be focusable
- Focus order follows visual order
- Focus is visible at all times
- Escape closes modals/overlays
- Arrow keys navigate within components

### Screen Reader Support

```tsx
// ARIA labels for icons
<button aria-label="Close modal">
  <X className="w-5 h-5" aria-hidden="true" />
</button>

// Loading states
<button aria-busy={loading} aria-disabled={loading}>
  {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
  Submit
</button>

// Live regions for dynamic content
<div role="status" aria-live="polite">
  {message}
</div>
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 13. Platform-Specific Implementations

### Web (CSS/Tailwind)

```css
/* Custom Properties */
:root {
  --signal: #FF4F00;
  --obsidian: #121212;
  --carbon: #1C1C1E;
  --platinum: #E5E5E7;
  --tungsten: #8E8E93;
  --terminal: #30D158;

  --font-sans: 'Manrope', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### iOS (SwiftUI)

```swift
// Colors.swift
import SwiftUI

extension Color {
    static let signal = Color(hex: "#FF4F00")
    static let obsidian = Color(hex: "#121212")
    static let carbon = Color(hex: "#1C1C1E")
    static let platinum = Color(hex: "#E5E5E7")
    static let tungsten = Color(hex: "#8E8E93")
    static let terminal = Color(hex: "#30D158")
}

// Typography.swift
enum GZFont {
    static func headline(_ size: CGFloat) -> Font {
        .custom("Manrope-ExtraBold", size: size)
    }

    static func body(_ size: CGFloat) -> Font {
        .custom("Manrope-Regular", size: size)
    }

    static func mono(_ size: CGFloat) -> Font {
        .custom("JetBrainsMono-Regular", size: size)
    }
}

// Spacing.swift
enum GZSpacing {
    static let xs: CGFloat = 4
    static let sm: CGFloat = 8
    static let md: CGFloat = 16
    static let lg: CGFloat = 24
    static let xl: CGFloat = 32
}
```

### Android (Jetpack Compose)

```kotlin
// Colors.kt
package com.glitchzero.design

import androidx.compose.ui.graphics.Color

object GZColors {
    val Signal = Color(0xFFFF4F00)
    val Obsidian = Color(0xFF121212)
    val Carbon = Color(0xFF1C1C1E)
    val Platinum = Color(0xFFE5E5E7)
    val Tungsten = Color(0xFF8E8E93)
    val Terminal = Color(0xFF30D158)
}

// Typography.kt
val GZTypography = Typography(
    displayLarge = TextStyle(
        fontFamily = FontFamily(Font(R.font.manrope_extrabold)),
        fontWeight = FontWeight.ExtraBold,
        fontSize = 57.sp
    ),
    bodyLarge = TextStyle(
        fontFamily = FontFamily(Font(R.font.manrope_regular)),
        fontWeight = FontWeight.Normal,
        fontSize = 16.sp,
        lineHeight = 24.sp
    )
)

// Spacing.kt
object GZSpacing {
    val xs = 4.dp
    val sm = 8.dp
    val md = 16.dp
    val lg = 24.dp
    val xl = 32.dp
}
```

### React Native

```typescript
// tokens.ts
export const colors = {
  signal: '#FF4F00',
  obsidian: '#121212',
  carbon: '#1C1C1E',
  platinum: '#E5E5E7',
  tungsten: '#8E8E93',
  terminal: '#30D158',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  fontFamily: {
    sans: 'Manrope',
    mono: 'JetBrainsMono',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
  },
};

// shadows.ts
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
};
```

### Flutter

```dart
// tokens.dart
import 'package:flutter/material.dart';

class GZColors {
  static const Color signal = Color(0xFFFF4F00);
  static const Color obsidian = Color(0xFF121212);
  static const Color carbon = Color(0xFF1C1C1E);
  static const Color platinum = Color(0xFFE5E5E7);
  static const Color tungsten = Color(0xFF8E8E93);
  static const Color terminal = Color(0xFF30D158);
}

class GZSpacing {
  static const double xs = 4;
  static const double sm = 8;
  static const double md = 16;
  static const double lg = 24;
  static const double xl = 32;
}

class GZRadius {
  static const double sm = 4;
  static const double md = 8;
  static const double lg = 12;
  static const double full = 999;
}

// theme.dart
ThemeData glitchZeroTheme() {
  return ThemeData(
    brightness: Brightness.dark,
    primaryColor: GZColors.signal,
    scaffoldBackgroundColor: GZColors.obsidian,
    cardColor: GZColors.carbon,
    textTheme: TextTheme(
      displayLarge: TextStyle(
        fontFamily: 'Manrope',
        fontWeight: FontWeight.w800,
        fontSize: 57,
        color: GZColors.platinum,
      ),
      bodyLarge: TextStyle(
        fontFamily: 'Manrope',
        fontWeight: FontWeight.w400,
        fontSize: 16,
        height: 1.7,
        color: GZColors.platinum,
      ),
    ),
  );
}
```

---

## 14. Code Examples

### Complete Button Component (React/TypeScript)

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap
   rounded-md text-sm font-medium transition-colors
   focus-visible:outline-none focus-visible:ring-2
   focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50
   [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: 'bg-signal text-obsidian hover:bg-signal/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-signal underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" />}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

### Complete Card Component (React/TypeScript)

```tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border border-border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

### React Native Button Component

```tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, spacing } from './tokens';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  children: string;
}

const sizeStyles: Record<ButtonSize, { container: ViewStyle; text: TextStyle }> = {
  sm: {
    container: { paddingVertical: spacing.xs, paddingHorizontal: spacing.sm, height: 36 },
    text: { fontSize: 14 },
  },
  md: {
    container: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md, height: 44 },
    text: { fontSize: 16 },
  },
  lg: {
    container: { paddingVertical: spacing.md, paddingHorizontal: spacing.lg, height: 52 },
    text: { fontSize: 18 },
  },
};

const variantStyles: Record<ButtonVariant, { container: ViewStyle; text: TextStyle }> = {
  primary: {
    container: { backgroundColor: colors.signal },
    text: { color: colors.obsidian },
  },
  secondary: {
    container: { backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.signal },
    text: { color: colors.signal },
  },
  ghost: {
    container: { backgroundColor: 'transparent' },
    text: { color: colors.signal },
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        sizeStyles[size].container,
        variantStyles[variant].container,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
    >
      {loading ? (
        <ActivityIndicator color={variantStyles[variant].text.color} size="small" />
      ) : (
        <Text style={[styles.text, sizeStyles[size].text, variantStyles[variant].text]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontFamily: 'Manrope-Medium',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
```

### Flutter Button Widget

```dart
import 'package:flutter/material.dart';

enum GZButtonVariant { primary, secondary, ghost }
enum GZButtonSize { sm, md, lg }

class GZButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final GZButtonVariant variant;
  final GZButtonSize size;
  final bool loading;
  final IconData? leftIcon;

  const GZButton({
    super.key,
    required this.label,
    this.onPressed,
    this.variant = GZButtonVariant.primary,
    this.size = GZButtonSize.md,
    this.loading = false,
    this.leftIcon,
  });

  @override
  Widget build(BuildContext context) {
    final height = switch (size) {
      GZButtonSize.sm => 36.0,
      GZButtonSize.md => 44.0,
      GZButtonSize.lg => 52.0,
    };

    final horizontalPadding = switch (size) {
      GZButtonSize.sm => 12.0,
      GZButtonSize.md => 16.0,
      GZButtonSize.lg => 24.0,
    };

    final fontSize = switch (size) {
      GZButtonSize.sm => 14.0,
      GZButtonSize.md => 16.0,
      GZButtonSize.lg => 18.0,
    };

    final (bgColor, textColor, borderColor) = switch (variant) {
      GZButtonVariant.primary => (
        GZColors.signal,
        GZColors.obsidian,
        Colors.transparent,
      ),
      GZButtonVariant.secondary => (
        Colors.transparent,
        GZColors.signal,
        GZColors.signal,
      ),
      GZButtonVariant.ghost => (
        Colors.transparent,
        GZColors.signal,
        Colors.transparent,
      ),
    };

    return SizedBox(
      height: height,
      child: ElevatedButton(
        onPressed: loading ? null : onPressed,
        style: ElevatedButton.styleFrom(
          backgroundColor: bgColor,
          foregroundColor: textColor,
          elevation: 0,
          padding: EdgeInsets.symmetric(horizontal: horizontalPadding),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
            side: BorderSide(color: borderColor, width: 2),
          ),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (loading)
              Padding(
                padding: const EdgeInsets.only(right: 8),
                child: SizedBox(
                  width: 16,
                  height: 16,
                  child: CircularProgressIndicator(
                    strokeWidth: 2,
                    valueColor: AlwaysStoppedAnimation<Color>(textColor),
                  ),
                ),
              )
            else if (leftIcon != null) ...[
              Icon(leftIcon, size: 18),
              const SizedBox(width: 8),
            ],
            Text(
              label,
              style: TextStyle(
                fontFamily: 'Manrope',
                fontWeight: FontWeight.w500,
                fontSize: fontSize,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

### SwiftUI Button Component

```swift
import SwiftUI

enum GZButtonVariant {
    case primary
    case secondary
    case ghost
}

enum GZButtonSize {
    case sm
    case md
    case lg

    var height: CGFloat {
        switch self {
        case .sm: return 36
        case .md: return 44
        case .lg: return 52
        }
    }

    var horizontalPadding: CGFloat {
        switch self {
        case .sm: return 12
        case .md: return 16
        case .lg: return 24
        }
    }

    var fontSize: CGFloat {
        switch self {
        case .sm: return 14
        case .md: return 16
        case .lg: return 18
        }
    }
}

struct GZButton: View {
    let label: String
    let action: () -> Void
    var variant: GZButtonVariant = .primary
    var size: GZButtonSize = .md
    var isDisabled: Bool = false
    var isLoading: Bool = false
    var leftIcon: String? = nil

    var body: some View {
        Button(action: action) {
            HStack(spacing: 8) {
                if isLoading {
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: textColor))
                        .scaleEffect(0.8)
                } else if let leftIcon = leftIcon {
                    Image(systemName: leftIcon)
                        .font(.system(size: size.fontSize - 2))
                }

                Text(label)
                    .font(.custom("Manrope-Medium", size: size.fontSize))
            }
            .padding(.horizontal, size.horizontalPadding)
            .frame(height: size.height)
            .foregroundColor(textColor)
            .background(backgroundColor)
            .cornerRadius(8)
            .overlay(
                RoundedRectangle(cornerRadius: 8)
                    .stroke(borderColor, lineWidth: borderWidth)
            )
        }
        .disabled(isDisabled || isLoading)
        .opacity(isDisabled ? 0.5 : 1.0)
    }

    private var backgroundColor: Color {
        switch variant {
        case .primary: return Color.signal
        case .secondary, .ghost: return .clear
        }
    }

    private var textColor: Color {
        switch variant {
        case .primary: return Color.obsidian
        case .secondary, .ghost: return Color.signal
        }
    }

    private var borderColor: Color {
        switch variant {
        case .secondary: return Color.signal
        default: return .clear
        }
    }

    private var borderWidth: CGFloat {
        variant == .secondary ? 2 : 0
    }
}

// Usage
struct ContentView: View {
    var body: some View {
        VStack(spacing: 16) {
            GZButton(label: "Primary Button", action: {})

            GZButton(label: "Secondary", action: {}, variant: .secondary)

            GZButton(label: "Loading", action: {}, isLoading: true)

            GZButton(
                label: "With Icon",
                action: {},
                leftIcon: "arrow.right"
            )
        }
        .padding()
        .background(Color.obsidian)
    }
}
```

### Jetpack Compose Button

```kotlin
package com.glitchzero.design.components

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.glitchzero.design.GZColors
import com.glitchzero.design.GZSpacing

enum class GZButtonVariant { Primary, Secondary, Ghost }
enum class GZButtonSize { SM, MD, LG }

@Composable
fun GZButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    variant: GZButtonVariant = GZButtonVariant.Primary,
    size: GZButtonSize = GZButtonSize.MD,
    enabled: Boolean = true,
    loading: Boolean = false,
    leadingIcon: ImageVector? = null,
) {
    val height = when (size) {
        GZButtonSize.SM -> 36.dp
        GZButtonSize.MD -> 44.dp
        GZButtonSize.LG -> 52.dp
    }

    val horizontalPadding = when (size) {
        GZButtonSize.SM -> GZSpacing.sm
        GZButtonSize.MD -> GZSpacing.md
        GZButtonSize.LG -> GZSpacing.lg
    }

    val fontSize = when (size) {
        GZButtonSize.SM -> 14.sp
        GZButtonSize.MD -> 16.sp
        GZButtonSize.LG -> 18.sp
    }

    val (containerColor, contentColor) = when (variant) {
        GZButtonVariant.Primary -> GZColors.Signal to GZColors.Obsidian
        GZButtonVariant.Secondary -> Color.Transparent to GZColors.Signal
        GZButtonVariant.Ghost -> Color.Transparent to GZColors.Signal
    }

    when (variant) {
        GZButtonVariant.Primary -> {
            Button(
                onClick = onClick,
                modifier = modifier.height(height),
                enabled = enabled && !loading,
                colors = ButtonDefaults.buttonColors(
                    containerColor = containerColor,
                    contentColor = contentColor
                ),
                shape = androidx.compose.foundation.shape.RoundedCornerShape(8.dp),
                contentPadding = PaddingValues(horizontal = horizontalPadding)
            ) {
                ButtonContent(
                    text = text,
                    fontSize = fontSize,
                    loading = loading,
                    leadingIcon = leadingIcon,
                    contentColor = contentColor
                )
            }
        }
        GZButtonVariant.Secondary -> {
            OutlinedButton(
                onClick = onClick,
                modifier = modifier.height(height),
                enabled = enabled && !loading,
                colors = ButtonDefaults.outlinedButtonColors(
                    contentColor = contentColor
                ),
                border = ButtonDefaults.outlinedButtonBorder.copy(width = 2.dp),
                shape = androidx.compose.foundation.shape.RoundedCornerShape(8.dp),
                contentPadding = PaddingValues(horizontal = horizontalPadding)
            ) {
                ButtonContent(
                    text = text,
                    fontSize = fontSize,
                    loading = loading,
                    leadingIcon = leadingIcon,
                    contentColor = contentColor
                )
            }
        }
        GZButtonVariant.Ghost -> {
            TextButton(
                onClick = onClick,
                modifier = modifier.height(height),
                enabled = enabled && !loading,
                colors = ButtonDefaults.textButtonColors(
                    contentColor = contentColor
                ),
                shape = androidx.compose.foundation.shape.RoundedCornerShape(8.dp),
                contentPadding = PaddingValues(horizontal = horizontalPadding)
            ) {
                ButtonContent(
                    text = text,
                    fontSize = fontSize,
                    loading = loading,
                    leadingIcon = leadingIcon,
                    contentColor = contentColor
                )
            }
        }
    }
}

@Composable
private fun RowScope.ButtonContent(
    text: String,
    fontSize: androidx.compose.ui.unit.TextUnit,
    loading: Boolean,
    leadingIcon: ImageVector?,
    contentColor: Color,
) {
    if (loading) {
        CircularProgressIndicator(
            modifier = Modifier.size(16.dp),
            strokeWidth = 2.dp,
            color = contentColor
        )
        Spacer(modifier = Modifier.width(8.dp))
    } else if (leadingIcon != null) {
        Icon(
            imageVector = leadingIcon,
            contentDescription = null,
            modifier = Modifier.size(18.dp)
        )
        Spacer(modifier = Modifier.width(8.dp))
    }

    Text(
        text = text,
        style = TextStyle(
            fontSize = fontSize,
            fontWeight = FontWeight.Medium
        )
    )
}
```

### Animation Component (React/Framer Motion)

```tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

const smoothEasing = [0.22, 1, 0.36, 1];

export function FadeInSection({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  distance = 30,
  className = '',
  once = true,
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: smoothEasing,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayStart?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayStart = 0,
  className = '',
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStart,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function StaggerItem({
  children,
  direction = 'up',
  className = '',
}: StaggerItemProps) {
  const getInitialPosition = () => {
    const distance = 20;
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: smoothEasing,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export function BlurFadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)', y: 0 }
          : { opacity: 0, filter: 'blur(10px)', y: 20 }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: smoothEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

## Quick Reference

### Color Palette

| Color | Hex | Variable |
|-------|-----|----------|
| Signal | `#FF4F00` | `--signal` |
| Obsidian | `#121212` | `--obsidian` |
| Carbon | `#1C1C1E` | `--carbon` |
| Platinum | `#E5E5E7` | `--platinum` |
| Tungsten | `#8E8E93` | `--tungsten` |
| Terminal | `#30D158` | `--terminal` |

### Spacing

| Size | Value | Pixels |
|------|-------|--------|
| xs | 0.25rem | 4px |
| sm | 0.5rem | 8px |
| md | 1rem | 16px |
| lg | 1.5rem | 24px |
| xl | 2rem | 32px |

### Typography

| Style | Font | Weight | Size |
|-------|------|--------|------|
| Headline | Manrope | 800 | Variable |
| Subhead | Manrope | 500 | Variable |
| Body | Manrope | 400 | 16px |
| Tech | JetBrains Mono | 500 | Variable |
| Code | JetBrains Mono | 400 | Variable |

### Animation

| Timing | Duration | Easing |
|--------|----------|--------|
| Fast | 150ms | ease-out |
| Normal | 300ms | smooth |
| Slow | 500ms | smooth |

**Smooth Easing:** `cubic-bezier(0.22, 1, 0.36, 1)`

---

## Changelog

### v1.0.0 (November 2025)
- Initial release
- Complete design token system
- Cross-platform component library
- Animation guidelines
- Accessibility standards

---

*GlitchZero Design System - Building the future, one pixel at a time.*
