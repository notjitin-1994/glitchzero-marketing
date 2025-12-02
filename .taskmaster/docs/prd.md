# S-TEX Website Rebuild - Product Requirements Document

<context>
# Project Context

## Project Overview
S-TEX is India's pioneer luxury performance textile manufacturer, established in 2001. This project involves a complete website rebuild, transforming stex.co.in from a product-focused storefront into a premium B2B marketing website with NO e-commerce functionality.

## Business Objectives
1. Establish S-TEX as India's premier luxury performance textile brand
2. Communicate 20+ years of manufacturing excellence and global partnerships
3. Attract B2B inquiries from architects, designers, and hospitality professionals
4. Showcase pioneering innovations in outdoor fabrics, blackouts, and performance textiles
5. Create an aesthetic experience on par with global leaders like Sunbrella and Perennials

## Target Audience
- **Primary**: Architects and Interior Designers
- **Secondary**: Hospitality Groups (Hotels, Resorts, Restaurants)
- **Tertiary**: Furniture Manufacturers and Commercial Buyers
- **Focus**: B2B inquiries only - no direct consumer sales

## Brand Essence
"Where Heritage Meets Performance" - The intersection of India's rich textile heritage with cutting-edge performance innovation.

## Current State
- Existing website at stex.co.in with outdated design
- Product-focused storefront approach
- Limited brand storytelling
- Suboptimal B2B lead generation

## Desired Future State
- Premium B2B marketing website with luxury aesthetic
- Compelling brand narrative emphasizing pioneer status
- Streamlined inquiry process for professional buyers
- Visual experience matching global textile leaders
- Mobile-first, performance-optimized platform

## Key Stakeholders
- **Primary Contact**: S-TEX Marketing Team
- **Founder**: Mr. Srinith Sreedharan
- **Development**: GlitchZero Digital Agency
- **Target Users**: B2B Professionals (Architects, Designers, Hospitality)

## Success Metrics
- Increase in qualified B2B inquiries (target: 3x current)
- Time on site improvement (target: >3 minutes average)
- Bounce rate reduction (target: <40%)
- Core Web Vitals: All metrics in "Good" range
- Mobile usability score: 95+
- SEO visibility improvement for target keywords
</context>

<PRD>
# S-TEX Website Rebuild - Product Requirements Document
## Version 1.0 | December 2024

---

## 1. Overview

### 1.1 Project Summary
The S-TEX Website Rebuild project transforms the existing stex.co.in from a product-focused e-commerce storefront into a premium B2B marketing platform. This rebuild emphasizes brand storytelling, luxury aesthetics, and professional inquiry generation while explicitly removing all e-commerce functionality.

### 1.2 Problem Statement
The current S-TEX website fails to:
- Communicate the brand's 20+ year heritage and pioneer status in Indian textiles
- Appeal to the target B2B audience of architects, designers, and hospitality professionals
- Compete aesthetically with global textile leaders like Sunbrella and Perennials
- Generate qualified B2B leads through an optimized inquiry process
- Showcase the company's innovative achievements (India's first blackout jacquards, 100% PU leatherettes, 2000+ UV hour outdoor fabrics)

### 1.3 Proposed Solution
Build a completely new marketing-focused website using modern web technologies (Next.js 15, TypeScript, Tailwind CSS) with:
- Six primary pages focused on brand storytelling and B2B engagement
- Premium luxury visual design with cinematic animations
- Optimized contact and inquiry workflows
- Performance-first architecture meeting Core Web Vitals
- SEO optimization for B2B textile searches

### 1.4 Scope Boundaries

**In Scope:**
- Complete frontend development of 6 primary pages
- Responsive design (mobile, tablet, desktop)
- Animation system using GSAP and Framer Motion
- Contact form with email integration
- SEO implementation and structured data
- Performance optimization
- Analytics integration

**Out of Scope:**
- E-commerce functionality (explicitly excluded)
- Product catalog with pricing
- Shopping cart or checkout flows
- User authentication/accounts
- Payment processing
- Inventory management
- Backend CMS development (optional future phase)

### 1.5 Key Differentiators to Highlight
1. **First in India**: Jacquard Blackouts and Dim-Outs up to 114" width
2. **First in India**: 100% PU Indoor and Outdoor Leatherettes
3. **First in India**: Outdoor Fabrics with 2000+ hour UV guarantees
4. **Global Partnerships**: Crate and Barrel, Pottery Barn, West Elm, Dillard's, Anthropologie
5. **Heritage**: 20+ years of manufacturing excellence since 2001

---

## 2. Core Features

### 2.1 Site Architecture

#### 2.1.1 Primary Navigation Structure
```
Home
About Us
Our Collections
  ├── Indoor Upholstery Fabrics
  ├── Drapery & Curtain Fabrics
  ├── Jacquard Blackouts & Dim-Outs
  ├── Outdoor Performance Fabrics
  ├── Leatherette & PU Collection
  └── Cushion & Pillow Fabrics
Applications
  ├── Hospitality
  ├── Residential Luxury
  ├── Outdoor & Poolside
  ├── Marine
  ├── Shades & Awnings
  └── Corporate & Commercial
Why S-TEX
Contact
```

#### 2.1.2 Page Specifications

##### Page 1: Home
**Purpose**: Brand introduction, immediate value proposition establishment, and conversion path initiation.

**Required Sections**:
1. **Hero Section**
   - Full-viewport hero with video or high-resolution image background
   - Primary headline: "Crafting Excellence. Defining Performance."
   - Subheadline with brand essence
   - CTA button: "Explore Collections" or "Request Consultation"
   - Smooth scroll indicator

2. **Introduction Section**
   - "Where Heritage Meets Performance" tagline
   - Brief brand story paragraph (2-3 sentences)
   - Supporting visual (textile close-up with texture)

3. **Capabilities Showcase**
   - 4 capability cards with hover animations
   - Cards: Manufacturing Excellence, Global Standards, Custom Solutions, Innovation Leadership
   - Each card: Icon, title, brief description, subtle hover reveal

4. **Global Trust Section**
   - Partner logos in elegant grid or carousel
   - Partners: Crate and Barrel, Pottery Barn, West Elm, Dillard's, Anthropologie
   - Caption: "Trusted by World-Leading Brands"

5. **Pioneer Statement**
   - 3 credential blocks in horizontal layout
   - Block 1: "India's First Jacquard Blackouts" with 114" width specification
   - Block 2: "India's First 100% PU Leatherettes" for indoor/outdoor
   - Block 3: "2000+ Hour UV Guarantee" for outdoor fabrics
   - Visual treatment: Gold accent borders, subtle animation on scroll

6. **Testimonials Carousel**
   - Rotating testimonials from B2B clients
   - Include: Quote, company name, project type, optional image
   - Smooth auto-advance with manual navigation

7. **CTA Section**
   - Secondary conversion point before footer
   - "Ready to Transform Your Project?"
   - Inquiry button linking to Contact page

**Dependencies**: None (entry page)
**Priority**: Critical

##### Page 2: About Us
**Purpose**: Establish credibility, tell the brand story, and humanize the company through founder introduction.

**Required Sections**:
1. **Hero Section**
   - Page title: "Our Story"
   - Subheadline: "Two Decades of Textile Excellence"
   - Background: Factory or textile artisan imagery

2. **The S-TEX Story**
   - Full-width narrative section
   - Founding in 2001 narrative
   - Evolution from local manufacturer to global supplier
   - 2-3 paragraphs with supporting imagery

3. **Founder Section**
   - Mr. Srinith Sreedharan profile
   - Professional photograph
   - Brief biography and vision statement
   - Quote from founder

4. **Global Presence**
   - World map visualization showing export destinations
   - List of key markets served
   - Statistics: Countries served, global partners, projects completed

5. **Manufacturing Excellence**
   - Factory/facility showcase
   - Quality control processes
   - Certifications and standards
   - Supporting imagery or video

6. **Timeline/Milestones**
   - Interactive or scrolling timeline
   - Key dates: 2001 (founding), major partnerships, innovation milestones, present
   - Visual treatment: Horizontal scroll or vertical scroll-triggered

**Dependencies**: Shared UI components from Home page
**Priority**: High

##### Page 3: Our Collections
**Purpose**: Showcase fabric categories without e-commerce, emphasizing quality and applications.

**Required Sections**:
1. **Hero Section**
   - Page title: "Our Collections"
   - Subheadline: "Curated Excellence for Every Application"

2. **Collections Grid**
   - 6 collection cards in responsive grid
   - Each collection:
     - High-quality category image
     - Collection name
     - Brief description
     - Key specifications
     - "Learn More" link to expanded section

3. **Collection Detail Sections** (6 expandable or linked sections):

   **Indoor Upholstery Fabrics**
   - Description of indoor fabric offerings
   - Key features: Durability, stain resistance, texture variety
   - Application examples
   - Sample imagery gallery

   **Drapery & Curtain Fabrics**
   - Sheer and opaque options
   - Light filtering capabilities
   - Width and weight specifications
   - Sample imagery gallery

   **Jacquard Blackouts & Dim-Outs** (Pioneer Feature)
   - India's first achievement emphasis
   - Width specifications: Up to 114"
   - Light blocking percentages
   - Pattern variety showcase
   - Sample imagery gallery

   **Outdoor Performance Fabrics** (Pioneer Feature)
   - 2000+ UV hour guarantee highlight
   - Weather resistance specifications
   - Color fastness information
   - Sample imagery gallery

   **Leatherette & PU Collection** (Pioneer Feature)
   - India's first 100% PU achievement
   - Indoor and outdoor applications
   - Durability specifications
   - Sample imagery gallery

   **Cushion & Pillow Fabrics**
   - Comfort and durability features
   - Weather resistance for outdoor cushions
   - Care instructions
   - Sample imagery gallery

4. **Sample Request CTA**
   - Prominent call to action for sample requests
   - Link to Contact page with pre-filled subject

**Dependencies**: Home page components, image optimization system
**Priority**: High

##### Page 4: Applications
**Purpose**: Show real-world applications organized by industry to help B2B buyers visualize possibilities.

**Required Sections**:
1. **Hero Section**
   - Page title: "Applications"
   - Subheadline: "Excellence Across Industries"

2. **Industry Showcase** (6 sections):

   **Hospitality**
   - Hotels, resorts, restaurants
   - Key considerations: Durability, fire ratings, cleaning requirements
   - Featured projects or conceptual imagery
   - Relevant collections highlighted

   **Residential Luxury**
   - High-end residential interiors
   - Custom design possibilities
   - Interior designer collaboration emphasis
   - Relevant collections highlighted

   **Outdoor & Poolside**
   - Pool furniture, patios, outdoor living spaces
   - UV and water resistance emphasis
   - Relevant collections highlighted

   **Marine**
   - Boat and yacht upholstery
   - Salt water and sun exposure resistance
   - Relevant collections highlighted

   **Shades & Awnings**
   - Commercial and residential shade solutions
   - Weather durability emphasis
   - Relevant collections highlighted

   **Corporate & Commercial**
   - Office furniture, conference rooms, lobbies
   - High-traffic durability emphasis
   - Relevant collections highlighted

3. **Case Studies Section** (optional)
   - 2-3 featured project examples
   - Before/after or completion imagery
   - Client testimonials

4. **Inquiry CTA**
   - "Discuss Your Project" button
   - Link to Contact page

**Dependencies**: Collections page for cross-linking
**Priority**: Medium-High

##### Page 5: Why S-TEX
**Purpose**: Consolidate all differentiators and trust signals for decision-stage visitors.

**Required Sections**:
1. **Hero Section**
   - Page title: "Why S-TEX"
   - Subheadline: "Your Partner in Excellence"

2. **Differentiators Grid**
   - 6-8 key differentiators in card format
   - Examples:
     - 20+ Years of Excellence
     - Global Quality Standards
     - Pioneer Innovations
     - Custom Solutions
     - Sustainable Practices
     - Expert Consultation
   - Each with icon, title, and brief description

3. **Quality Assurance Section**
   - Certifications and standards met
   - Testing procedures
   - Quality control imagery

4. **Partnerships Section**
   - Expanded global partner showcase
   - Partner logos with brief relationship descriptions
   - Joint project highlights

5. **Sustainability Commitment** (if applicable)
   - Environmental initiatives
   - Sustainable material options
   - Industry certifications

6. **Awards & Recognition** (if applicable)
   - Industry awards
   - Media mentions
   - Professional associations

7. **CTA Section**
   - "Partner With Us" button
   - Link to Contact page

**Dependencies**: About page for story cross-referencing
**Priority**: Medium

##### Page 6: Contact
**Purpose**: Primary conversion point for B2B inquiry generation.

**Required Sections**:
1. **Hero Section**
   - Page title: "Contact Us"
   - Subheadline: "Let's Create Together"

2. **Inquiry Form**
   - Form fields:
     - Full Name (required)
     - Email Address (required, validated)
     - Phone Number (required, with country code)
     - Company Name (required)
     - Role/Designation (dropdown: Architect, Interior Designer, Hospitality Professional, Furniture Manufacturer, Procurement Manager, Other)
     - Project Type (dropdown: Hospitality, Residential, Commercial, Marine, Outdoor, Other)
     - Message (required, textarea)
     - Preferred Contact Method (radio: Email, Phone, Either)
   - Submit button with loading state
   - Success/error message handling
   - Form validation with clear error messages

3. **Contact Information**
   - Studio Address: #702, PAMA Arcade, HRBR Layout, Bangalore
   - Phone Numbers: +91 80 4166 3631, +91 80 4161 5159
   - Email: info@stex.co.in
   - Business Hours: Monday - Saturday, 10:00 AM - 7:00 PM IST

4. **Map Integration**
   - Embedded Google Map with studio location
   - Directions link

5. **Additional Contact Options**
   - WhatsApp business link (if applicable)
   - LinkedIn company page link
   - Alternative inquiry methods

**Dependencies**: Email service integration, form validation system
**Priority**: Critical

---

### 2.2 Global Components

#### 2.2.1 Header/Navigation
**Desktop Behavior**:
- Layout: Logo (left) | Navigation (center) | CTA Button (right)
- Height: 80-100px
- Initial state: Transparent background over hero
- Scroll behavior: Transitions to solid white/off-white with subtle shadow
- Navigation items: Home, About Us, Our Collections (dropdown), Applications (dropdown), Why S-TEX, Contact
- CTA button: "Request Samples" or "Get in Touch"

**Mobile Behavior**:
- Height: 60-70px
- Hamburger menu icon (right)
- Full-screen overlay menu on open
- Smooth animation for menu open/close
- Stacked navigation with nested dropdowns

**Dependencies**: None (foundational component)
**Priority**: Critical

#### 2.2.2 Footer
**Layout**: 4-column grid

**Column 1 - Brand**:
- S-TEX logo
- Brand tagline
- Social media links

**Column 2 - Quick Links**:
- Home
- About Us
- Contact
- Privacy Policy

**Column 3 - Collections**:
- All 6 collection category links

**Column 4 - Contact**:
- Address
- Phone numbers
- Email
- Business hours

**Design Specifications**:
- Background: Deep charcoal (#1a1a1a) or rich navy (#0a1628)
- Text: Light gray (#b0b0b0) for body, white for headings
- Hover accent: Gold (#c0a062)
- Copyright bar at bottom

**Dependencies**: None (foundational component)
**Priority**: Critical

#### 2.2.3 Common UI Elements
- **Buttons**: Primary (solid), Secondary (outline), Ghost (text only)
- **Cards**: Standard, Featured, Hover-reveal variants
- **Section containers**: Full-width, Contained (max-width), Split layouts
- **Image components**: Responsive, with blur placeholder, parallax-enabled
- **Typography**: Heading hierarchy (H1-H6), body variants, captions

---

### 2.3 Design System Specifications

#### 2.3.1 Color Palette
```
Primary Colors:
- Stex Navy: #0F2143 (primary brand color, headings, key UI)
- Stex White: #FFFFFF (text on dark, backgrounds)
- Ethereal Ivory: #E4E4DE (page backgrounds, cards)

Accent Colors:
- Burnished Copper: #D9B18E (CTAs, highlights, hover states)
- Forest Shadow: #164A24 (outdoor/nature sections, secondary accent)

Neutral Colors:
- Deep Charcoal: #1a1a1a (footer background)
- Rich Navy: #0a1628 (alternative footer, dark sections)
- Light Gray: #b0b0b0 (secondary text)
- Gold Accent: #c0a062 (hover states, premium touches)

Status Colors:
- Success: #22c55e
- Error: #ef4444
- Warning: #f59e0b
```

#### 2.3.2 Typography
```
Primary Heading Font: Playfair Display
- Weights: 400, 500, 600, 700
- Usage: H1, H2, H3 headings, hero text, brand statements

Body Font: Lato
- Weights: 300, 400, 500, 600, 700
- Usage: Body text, navigation, buttons, form labels

Font Sizes (Desktop):
- H1: 64-80px (Hero headings)
- H2: 48-56px (Section headings)
- H3: 32-40px (Subsection headings)
- H4: 24-28px (Card headings)
- H5: 20-22px (Small headings)
- H6: 16-18px (Labels, captions)
- Body Large: 18-20px
- Body: 16px
- Body Small: 14px
- Caption: 12px

Line Heights:
- Headings: 1.1-1.3
- Body: 1.5-1.7

Mobile Font Sizes:
- Scale down by approximately 20-30%
- Minimum body text: 16px for accessibility
```

#### 2.3.3 Spacing System
```
Base unit: 4px

Spacing scale:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px
- 5xl: 128px

Section Padding (Desktop):
- Top/Bottom: 80-120px

Section Padding (Mobile):
- Top/Bottom: 48-64px

Container:
- Max width: 1440px
- Side padding: 24px (mobile), 48px (tablet), 80px (desktop)
```

#### 2.3.4 Breakpoints
```
- Mobile: 0-639px
- Tablet: 640-1023px
- Desktop: 1024-1439px
- Large Desktop: 1440px+
```

---

### 2.4 Animation Specifications

#### 2.4.1 Animation Library Usage
- **GSAP**: Complex scroll-triggered animations, timeline sequences, SplitText effects
- **GSAP ScrollTrigger**: Parallax effects, section reveals, progress-based animations
- **Framer Motion**: Component-level animations, page transitions, micro-interactions
- **Lenis**: Smooth scroll behavior across entire site

#### 2.4.2 Animation Types

**Page Load Animations**:
- Hero content: Staggered reveal (0.1s delay between elements)
- Navigation: Fade in from top (0.3s duration)
- Content sections: Fade in on initial viewport

**Scroll Animations**:
- Section reveals: Fade up from 30px below (0.6s duration)
- Image parallax: Subtle vertical movement (0.5x scroll speed)
- Progress indicators: Width/height tied to scroll progress
- Text reveals: Word-by-word or line-by-line using SplitText

**Hover Interactions**:
- Buttons: Scale (1.02x) + subtle shadow increase (0.2s)
- Cards: Lift effect (translateY -8px) + shadow (0.3s)
- Links: Underline slide animation (0.2s)
- Images: Subtle zoom (1.05x scale) on container hover

**Page Transitions**:
- Fade transition between pages (0.3s)
- Optional: Slide transitions for collection navigation
- Loading state: Subtle progress indicator

#### 2.4.3 Performance Constraints
- Animations must not block main thread
- Use will-change sparingly and remove after animation
- Reduce motion for users with prefers-reduced-motion
- Target 60fps for all animations
- Lazy-initialize GSAP instances for below-fold content

---

## 3. User Experience

### 3.1 User Personas

#### Persona 1: The Architect
**Name**: Rahul Mehta
**Role**: Principal Architect at a leading Mumbai firm
**Age**: 42
**Experience**: 18 years

**Goals**:
- Find premium fabric suppliers for luxury residential and hospitality projects
- Access technical specifications and performance data
- View application examples in similar project types
- Request samples quickly and efficiently

**Pain Points**:
- Difficulty finding Indian suppliers matching international quality
- Limited information on fabric performance characteristics
- Slow response times from supplier inquiries
- Poor mobile experience when browsing on-site

**Journey on S-TEX Site**:
1. Lands on Home page from search or referral
2. Navigates to Collections to browse options
3. Reviews Applications for hospitality examples
4. Visits Why S-TEX to verify quality credentials
5. Submits inquiry via Contact form

#### Persona 2: The Interior Designer
**Name**: Priya Sharma
**Role**: Senior Interior Designer at boutique firm
**Age**: 35
**Experience**: 12 years

**Goals**:
- Discover unique and premium fabric options for clients
- View high-quality imagery for presentations
- Understand fabric care and durability
- Build relationship with reliable supplier

**Pain Points**:
- Generic fabric catalogs lacking inspiration
- Difficulty visualizing fabrics in situ
- Need for quick sample turnaround
- Price ambiguity in B2B relationships

**Journey on S-TEX Site**:
1. Discovers site through industry networks
2. Explores Collections for design inspiration
3. Views detailed imagery and specifications
4. Notes specific fabrics for client presentation
5. Requests samples via Contact

#### Persona 3: The Hospitality Procurement Manager
**Name**: Anil Kumar
**Role**: Procurement Head at hotel chain
**Age**: 48
**Experience**: 25 years in hospitality

**Goals**:
- Source high-volume fabric orders with consistent quality
- Verify supplier credentials and global experience
- Understand lead times and minimum orders
- Establish long-term supply relationships

**Pain Points**:
- Need for proven track record with major brands
- Quality consistency concerns across batches
- Complex approval processes requiring documentation
- Budget constraints balanced with quality requirements

**Journey on S-TEX Site**:
1. Arrives via B2B search or referral
2. Immediately checks About Us for credentials
3. Reviews global partnerships on Home page
4. Examines Why S-TEX for quality assurance
5. Submits detailed inquiry via Contact

### 3.2 User Flows

#### Flow 1: Collection Discovery to Inquiry
```
Home Page → Hero CTA Click → Collections Page → Browse Collection Categories →
Select Specific Collection → View Details & Gallery → "Request Sample" CTA →
Contact Page (Pre-filled Subject) → Complete Form → Submit → Confirmation
```

#### Flow 2: Credential Verification Journey
```
Home Page → About Us (Navigation) → Read Company Story → View Timeline →
Why S-TEX (Navigation) → Review Differentiators → View Partnerships →
Contact Page → Submit Inquiry
```

#### Flow 3: Application-Based Exploration
```
Home Page → Applications (Navigation) → Select Industry (e.g., Hospitality) →
View Application Details → Click Related Collection Link → Collections Page →
View Specific Collection → Contact for Samples
```

#### Flow 4: Direct Contact (Returning Visitor)
```
Home Page → Contact (Navigation) → Complete Inquiry Form → Submit → Confirmation
```

### 3.3 Information Architecture

```
Root (/)
├── Home (/)
├── About Us (/about)
├── Our Collections (/collections)
│   ├── Indoor Upholstery (/collections/indoor-upholstery)
│   ├── Drapery & Curtains (/collections/drapery-curtains)
│   ├── Jacquard Blackouts (/collections/jacquard-blackouts)
│   ├── Outdoor Performance (/collections/outdoor-performance)
│   ├── Leatherette & PU (/collections/leatherette-pu)
│   └── Cushion & Pillow (/collections/cushion-pillow)
├── Applications (/applications)
│   ├── Hospitality (/applications/hospitality)
│   ├── Residential Luxury (/applications/residential)
│   ├── Outdoor & Poolside (/applications/outdoor)
│   ├── Marine (/applications/marine)
│   ├── Shades & Awnings (/applications/shades-awnings)
│   └── Corporate & Commercial (/applications/corporate)
├── Why S-TEX (/why-stex)
├── Contact (/contact)
├── Privacy Policy (/privacy)
└── 404 (/404)
```

### 3.4 Accessibility Requirements

#### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus States**: Visible focus indicators on all interactive elements
- **Keyboard Navigation**: All functionality accessible via keyboard
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Alt Text**: Descriptive alt text for all images
- **Motion**: Respect prefers-reduced-motion preference
- **Form Labels**: Associated labels for all form inputs
- **Error Handling**: Clear, descriptive error messages
- **Skip Links**: Skip to main content link for keyboard users

### 3.5 Responsive Design Requirements

#### Mobile (0-639px)
- Single column layouts
- Touch-friendly tap targets (minimum 44x44px)
- Hamburger navigation with full-screen overlay
- Reduced animation complexity
- Optimized image sizes
- Sticky mobile header
- Bottom-anchored CTAs where appropriate

#### Tablet (640-1023px)
- Two-column layouts where appropriate
- Touch-optimized interactions
- Adapted navigation (can use hamburger or condensed horizontal)
- Medium image sizes

#### Desktop (1024px+)
- Full multi-column layouts
- Hover interactions enabled
- Full navigation visible
- High-resolution images
- Complex animations active

---

## 4. Technical Architecture

### 4.1 Technology Stack

#### Core Framework
```
Framework: Next.js 15
- App Router architecture
- React Server Components (RSC)
- Server Actions for form handling
- Image optimization with next/image
- Built-in API routes (if needed)

Language: TypeScript
- Strict mode enabled
- Comprehensive type definitions
- Zod for runtime validation
```

#### Styling
```
Primary: Tailwind CSS v3.4+
- Custom configuration for design system
- JIT compilation
- Responsive utilities

Secondary: CSS Modules
- Complex animations
- Component-specific overrides
- Keyframe definitions

CSS Variables:
- Design tokens
- Theme values
- Dynamic values
```

#### UI Component Library
```
Base: shadcn/ui
- Customized for S-TEX design system
- Accessible by default
- Composable components

Primitives: Radix UI
- Dropdown menus
- Dialog/modals
- Accordion
- Tabs
```

#### Animation
```
GSAP (GreenSock Animation Platform)
- ScrollTrigger plugin
- SplitText plugin (Club membership)
- Timeline sequences
- Complex scroll animations

Framer Motion
- Component transitions
- Page transitions
- Layout animations
- Gesture handling

Lenis
- Smooth scroll behavior
- Performance optimized
- Touch device support
```

#### Form Handling
```
React Hook Form
- Performance optimized
- Minimal re-renders
- Validation integration

Zod
- Schema validation
- Type inference
- Error messages
```

#### Email Integration
```
Resend
- Transactional emails
- Reliable delivery
- API integration

React Email
- Email templates
- React component syntax
- Responsive emails
```

### 4.2 Architecture Patterns

#### File Structure
```
src/
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── collections/
│   │   ├── page.tsx               # Collections overview
│   │   └── [slug]/
│   │       └── page.tsx           # Individual collection
│   ├── applications/
│   │   ├── page.tsx               # Applications overview
│   │   └── [slug]/
│   │       └── page.tsx           # Individual application
│   ├── why-stex/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts           # Contact form API
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/                  # Page sections
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   ├── CapabilitiesSection.tsx
│   │   │   ├── GlobalTrustSection.tsx
│   │   │   ├── PioneerSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   ├── about/
│   │   ├── collections/
│   │   ├── applications/
│   │   ├── why-stex/
│   │   └── contact/
│   └── shared/                    # Reusable components
│       ├── AnimatedSection.tsx
│       ├── ParallaxImage.tsx
│       ├── SectionHeading.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Container.tsx
├── lib/
│   ├── utils.ts                   # Utility functions
│   ├── animations.ts              # GSAP configurations
│   ├── validations.ts             # Zod schemas
│   └── constants.ts               # Site constants
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useMediaQuery.ts
│   └── useSmoothScroll.ts
├── types/
│   ├── index.ts
│   └── content.ts
├── styles/
│   ├── globals.css
│   └── animations.css
└── data/
    ├── collections.ts
    ├── applications.ts
    ├── testimonials.ts
    └── partners.ts
```

#### Component Architecture
```
Component Pattern: Compound Components + Composition

Example:
<Section>
  <Section.Container>
    <Section.Header>
      <Section.Title>Our Story</Section.Title>
      <Section.Subtitle>Since 2001</Section.Subtitle>
    </Section.Header>
    <Section.Content>
      {/* Content */}
    </Section.Content>
  </Section.Container>
</Section>
```

#### State Management
```
Approach: Minimal client state

- Server Components for data
- React Context for theme/UI state
- URL state for filters/navigation
- No external state library (Redux, Zustand) needed for this scope
```

### 4.3 Performance Requirements

#### Core Web Vitals Targets
```
Largest Contentful Paint (LCP): < 2.5s
First Input Delay (FID): < 100ms
Cumulative Layout Shift (CLS): < 0.1
First Contentful Paint (FCP): < 1.8s
Time to Interactive (TTI): < 3.5s
```

#### Optimization Strategies

**Image Optimization**:
- Next.js Image component for automatic optimization
- AVIF format primary, WebP fallback
- Responsive srcset for multiple sizes
- Blur placeholder for perceived performance
- Lazy loading for below-fold images
- Priority loading for hero/LCP images

**Code Optimization**:
- Route-based code splitting (automatic with App Router)
- Dynamic imports for heavy components
- Tree shaking for unused code
- Bundle analysis and monitoring

**Caching**:
- Static generation for content pages
- ISR (Incremental Static Regeneration) if CMS added
- Browser caching headers
- CDN caching via Vercel Edge Network

**Font Optimization**:
- next/font for Google Fonts
- Font subsetting
- Preload critical fonts
- Font display: swap

### 4.4 SEO Requirements

#### Technical SEO
```
- Server-side rendering for all pages
- Semantic HTML structure
- Proper heading hierarchy (single H1 per page)
- Meta title and description for all pages
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (Organization, LocalBusiness)
- XML sitemap generation
- robots.txt configuration
- Canonical URLs
- Hreflang tags (if multilingual future)
- 301 redirects from old URLs (if applicable)
```

#### Page-Specific Meta
```
Home:
- Title: "S-TEX | India's Premier Luxury Performance Textiles"
- Description: "Where Heritage Meets Performance. India's pioneer in luxury outdoor fabrics, jacquard blackouts, and performance textiles since 2001. Trusted by Crate and Barrel, Pottery Barn, West Elm."

About:
- Title: "About S-TEX | 20+ Years of Textile Excellence"
- Description: "Founded in 2001 by Mr. Srinith Sreedharan, S-TEX has grown from a local manufacturer to a global supplier of premium performance textiles."

Collections:
- Title: "Premium Fabric Collections | S-TEX Performance Textiles"
- Description: "Explore our curated collections: Indoor Upholstery, Drapery, Jacquard Blackouts, Outdoor Performance Fabrics, Leatherette, and Cushion Fabrics."

[Continue for each page...]
```

#### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "S-TEX",
  "description": "India's Pioneer Luxury Performance Textile Manufacturer",
  "url": "https://stex.co.in",
  "logo": "https://stex.co.in/logo.svg",
  "foundingDate": "2001",
  "founder": {
    "@type": "Person",
    "name": "Srinith Sreedharan"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#702, PAMA Arcade, HRBR Layout",
    "addressLocality": "Bangalore",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-80-4166-3631",
    "contactType": "sales"
  }
}
```

### 4.5 Hosting & Deployment

#### Platform: Vercel
```
Features Used:
- Edge Network (global CDN)
- Serverless Functions
- Image Optimization
- Analytics
- Preview Deployments
- Environment Variables

Domain: stex.co.in
```

#### Analytics
```
Primary: Vercel Analytics
- Web Vitals monitoring
- Page views
- User paths

Secondary: Google Analytics 4
- Detailed user behavior
- Goal tracking (form submissions)
- Audience insights
- Integration with Google Search Console
```

### 4.6 Integration Points

#### Email Service (Resend)
```
Purpose: Contact form submissions

Flow:
1. User submits contact form
2. Server Action validates data
3. Resend API sends confirmation email to user
4. Resend API sends notification email to S-TEX team
5. Response returned to client

Email Templates:
- User confirmation: "Thank you for your inquiry"
- Team notification: "New inquiry from [Name]"
```

#### Optional Future Integrations
```
CMS (Sanity):
- Content management for non-developers
- Image asset management
- Testimonial management
- Blog/news section

CRM (HubSpot/Salesforce):
- Lead tracking
- Follow-up automation
- Pipeline management

Chat (Intercom/Crisp):
- Real-time visitor engagement
- Lead capture
```

---

## 5. Development Roadmap

### 5.1 Phase Overview

**Note**: This roadmap defines scope and logical sequence only. Timelines are determined by project management, not this document.

#### Phase 1: Foundation
**Scope**: Core infrastructure, design system, and shared components

**Deliverables**:
- Project setup (Next.js 15, TypeScript, Tailwind)
- Design system implementation (colors, typography, spacing)
- Core UI components (Button, Card, Container, etc.)
- Layout components (Header, Footer, Navigation)
- Animation infrastructure (GSAP, Framer Motion, Lenis setup)
- Mobile navigation system

**Exit Criteria**:
- All shared components built and documented
- Header/Footer working on all breakpoints
- Smooth scroll functioning
- Animation utilities ready for use

#### Phase 2: Primary Pages - Core
**Scope**: Home page and Contact page (primary conversion pages)

**Deliverables**:
- Home page with all 7 sections
- Contact page with form and information
- Email integration (Resend)
- Form validation (React Hook Form + Zod)
- Page-level SEO meta tags
- Basic analytics integration

**Exit Criteria**:
- Home page complete with all animations
- Contact form submitting successfully
- Emails sending to both user and team
- Core Web Vitals passing

#### Phase 3: Primary Pages - Content
**Scope**: About Us, Collections, Applications, Why S-TEX pages

**Deliverables**:
- About Us page with all sections
- Collections overview and 6 individual collection pages
- Applications overview and 6 individual application pages
- Why S-TEX page with all sections
- Cross-linking between pages
- Image galleries and parallax effects

**Exit Criteria**:
- All 6 primary pages complete
- Internal linking functional
- All pages responsive
- Performance optimized

#### Phase 4: Enhancement & Polish
**Scope**: Advanced animations, SEO completion, testing, optimization

**Deliverables**:
- Advanced scroll animations
- Page transitions
- Testimonial carousel functionality
- Timeline/milestone interactivity
- Complete SEO implementation (sitemap, robots.txt, structured data)
- Accessibility audit and fixes
- Performance optimization
- Cross-browser testing
- Mobile device testing

**Exit Criteria**:
- All animations smooth at 60fps
- Lighthouse scores: Performance 90+, Accessibility 95+, SEO 95+
- WCAG 2.1 AA compliance verified
- All major browsers tested (Chrome, Safari, Firefox, Edge)
- Mobile iOS and Android tested

#### Phase 5: Launch Preparation
**Scope**: Final testing, content integration, deployment

**Deliverables**:
- Final content integration (copy, images)
- DNS configuration
- SSL certificate
- 301 redirects from old site (if applicable)
- Analytics verification
- Monitoring setup
- Documentation for client
- Launch checklist completion

**Exit Criteria**:
- Site live on stex.co.in
- All analytics tracking
- No console errors
- Forms tested in production
- Client training complete

### 5.2 Feature Priority Matrix

| Feature | Priority | Phase | Dependencies |
|---------|----------|-------|--------------|
| Project Setup | Critical | 1 | None |
| Design System | Critical | 1 | Project Setup |
| Header/Navigation | Critical | 1 | Design System |
| Footer | Critical | 1 | Design System |
| Smooth Scroll (Lenis) | High | 1 | Project Setup |
| Home - Hero | Critical | 2 | Header, Animation Utils |
| Home - All Sections | Critical | 2 | Design System, Animation Utils |
| Contact Page | Critical | 2 | Footer, Form Utils |
| Email Integration | Critical | 2 | Contact Form |
| About Us Page | High | 3 | Home Page Components |
| Collections Overview | High | 3 | Design System |
| Individual Collections | High | 3 | Collections Overview |
| Applications Overview | High | 3 | Design System |
| Individual Applications | High | 3 | Applications Overview |
| Why S-TEX Page | Medium | 3 | About Us Components |
| Testimonials Carousel | Medium | 4 | Home Page |
| Timeline Animation | Medium | 4 | About Us Page |
| Page Transitions | Medium | 4 | All Pages |
| SEO Implementation | High | 4 | All Pages |
| Performance Optimization | High | 4 | All Pages |
| Accessibility Audit | High | 4 | All Pages |

---

## 6. Logical Dependency Chain

### 6.1 Foundation Layer (Must Complete First)

```
1. Project Initialization
   ├── Next.js 15 App Router setup
   ├── TypeScript configuration
   ├── Tailwind CSS configuration
   ├── ESLint/Prettier setup
   └── Git repository structure

2. Design System Implementation
   ├── Depends on: Project Initialization
   ├── Color tokens in Tailwind config
   ├── Typography scale in Tailwind config
   ├── Spacing system
   ├── Breakpoint definitions
   └── CSS variables for animations

3. Core UI Components
   ├── Depends on: Design System
   ├── Button component (variants)
   ├── Container component
   ├── Section component
   ├── Typography components (Heading, Text)
   └── Card component (variants)

4. Animation Infrastructure
   ├── Depends on: Project Initialization
   ├── GSAP installation and registration
   ├── Framer Motion setup
   ├── Lenis smooth scroll initialization
   ├── useScrollAnimation hook
   └── AnimatedSection wrapper component
```

### 6.2 Layout Layer (Requires Foundation)

```
5. Header Component
   ├── Depends on: Core UI Components, Design System
   ├── Desktop navigation
   ├── Logo integration
   ├── CTA button
   ├── Scroll-based style transition
   └── Mobile hamburger trigger

6. Mobile Navigation
   ├── Depends on: Header Component, Animation Infrastructure
   ├── Full-screen overlay
   ├── Menu item animations
   ├── Nested dropdowns
   └── Close behavior

7. Footer Component
   ├── Depends on: Core UI Components, Design System
   ├── 4-column grid layout
   ├── Link components
   ├── Social icons
   └── Responsive collapse

8. Root Layout Assembly
   ├── Depends on: Header, Footer, Lenis
   ├── Provider wrappers
   ├── Font loading
   └── Global styles
```

### 6.3 Page Layer - Critical Path (Requires Layout)

```
9. Home Page - Hero Section
   ├── Depends on: Root Layout, Animation Infrastructure
   ├── Full-viewport layout
   ├── Background media (image/video)
   ├── Headline animations
   ├── CTA button
   └── Scroll indicator

10. Home Page - Remaining Sections
    ├── Depends on: Hero Section, Core UI Components
    ├── Introduction section
    ├── Capabilities showcase (card grid)
    ├── Global trust section (logo parade)
    ├── Pioneer statement (credential blocks)
    ├── Testimonials carousel
    └── CTA section

11. Contact Page
    ├── Depends on: Root Layout, Core UI Components
    ├── Form layout and fields
    ├── Validation setup (RHF + Zod)
    ├── Map integration
    ├── Contact information display
    └── Submit handling UI

12. Email Integration
    ├── Depends on: Contact Form
    ├── Resend API setup
    ├── Email templates (React Email)
    ├── Server Action for form submission
    ├── Success/error states
    └── Notification routing
```

### 6.4 Page Layer - Content Pages (Can Parallel After Critical Path)

```
13. About Us Page
    ├── Depends on: Core Section Components
    ├── Hero section
    ├── Story narrative section
    ├── Founder profile section
    ├── Global presence visualization
    ├── Manufacturing section
    └── Timeline component

14. Collections Overview Page
    ├── Depends on: Core Section Components
    ├── Hero section
    ├── Collection grid layout
    └── Collection card components

15. Individual Collection Pages (6 pages)
    ├── Depends on: Collections Overview
    ├── Dynamic routing setup
    ├── Collection data structure
    ├── Gallery component
    └── Related collections

16. Applications Overview Page
    ├── Depends on: Core Section Components
    ├── Hero section
    ├── Industry card grid
    └── Industry card components

17. Individual Application Pages (6 pages)
    ├── Depends on: Applications Overview
    ├── Dynamic routing setup
    ├── Application data structure
    ├── Related collections links
    └── Case study sections (if applicable)

18. Why S-TEX Page
    ├── Depends on: Core Section Components
    ├── Hero section
    ├── Differentiators grid
    ├── Quality assurance section
    ├── Partnerships section
    └── CTA section
```

### 6.5 Enhancement Layer (Requires All Pages)

```
19. Advanced Animations
    ├── Depends on: All page sections
    ├── Scroll-triggered section reveals
    ├── Parallax image effects
    ├── Text split animations
    └── Staggered element reveals

20. Page Transitions
    ├── Depends on: All pages
    ├── Transition wrapper component
    ├── Entry/exit animations
    └── Loading states

21. Interactive Components
    ├── Depends on: Specific page sections
    ├── Testimonials carousel functionality
    ├── Timeline/milestone interactions
    └── Image gallery lightbox
```

### 6.6 Finalization Layer (Requires Enhancement)

```
22. SEO Implementation
    ├── Depends on: All pages complete
    ├── Page-specific meta tags
    ├── Open Graph images
    ├── JSON-LD structured data
    ├── Sitemap generation
    └── robots.txt

23. Performance Optimization
    ├── Depends on: All features complete
    ├── Bundle analysis
    ├── Image audit and optimization
    ├── Font optimization
    ├── Core Web Vitals testing
    └── Lighthouse audits

24. Accessibility Audit
    ├── Depends on: All features complete
    ├── Color contrast verification
    ├── Keyboard navigation testing
    ├── Screen reader testing
    ├── ARIA label verification
    └── Focus state verification

25. Cross-Browser/Device Testing
    ├── Depends on: All features complete
    ├── Chrome, Safari, Firefox, Edge testing
    ├── iOS Safari testing
    ├── Android Chrome testing
    └── Responsive breakpoint testing
```

### 6.7 Dependency Graph Visualization

```
[Project Init]
      │
      ▼
[Design System] ───────────────────────────────────────┐
      │                                                │
      ▼                                                │
[Core UI Components] ◄─────────────────────────────────┤
      │                                                │
      ├──────────────┬──────────────┐                  │
      ▼              ▼              ▼                  │
[Header]       [Footer]      [Animation Utils] ◄───────┘
      │              │              │
      └──────────────┴──────────────┘
                     │
                     ▼
              [Root Layout]
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
[Home Page]    [Contact Page] [About Page] ...
      │              │              │
      │              ▼              │
      │       [Email Integration]  │
      │                            │
      └──────────────┬─────────────┘
                     ▼
         [All Content Pages Complete]
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
[Advanced Anim] [Page Trans]  [Interactive]
      │              │              │
      └──────────────┴──────────────┘
                     │
                     ▼
      [SEO + Performance + Accessibility]
                     │
                     ▼
                 [Launch]
```

---

## 7. Risks and Mitigations

### 7.1 Technical Risks

#### Risk 1: Animation Performance on Mobile Devices
**Severity**: High
**Probability**: Medium

**Description**: GSAP and complex scroll-triggered animations may cause performance issues on mid-range mobile devices, leading to janky scrolling and poor user experience.

**Mitigation Strategies**:
1. Implement device capability detection to reduce animation complexity on lower-powered devices
2. Use CSS transforms and opacity exclusively (GPU-accelerated)
3. Lazy-initialize GSAP instances for below-fold content
4. Set up performance budgets and monitor during development
5. Create simplified animation variants for mobile
6. Test on representative mid-range devices early and often

**Contingency**: If animations cannot be optimized sufficiently, create a "lite" experience with CSS-only animations for mobile devices.

---

#### Risk 2: Large Image Assets Impacting Load Time
**Severity**: High
**Probability**: High

**Description**: Luxury textile photography requires high-resolution images. Without proper optimization, this will negatively impact LCP and overall page load times.

**Mitigation Strategies**:
1. Mandatory use of Next.js Image component with automatic optimization
2. Define maximum image dimensions for each use case
3. Implement blur placeholders for all images
4. Use AVIF format with WebP fallback
5. Implement lazy loading for below-fold images
6. Create image optimization guidelines for content team
7. Set up automated image optimization in build pipeline

**Contingency**: If image sizes remain problematic, implement progressive image loading (low-res to high-res) for hero images.

---

#### Risk 3: Email Delivery Reliability
**Severity**: Medium
**Probability**: Low

**Description**: Contact form submissions are critical for business leads. Email delivery failures could result in lost inquiries.

**Mitigation Strategies**:
1. Use Resend's reliable email infrastructure
2. Implement proper email authentication (SPF, DKIM, DMARC)
3. Create retry logic for failed email sends
4. Log all form submissions to database/file as backup
5. Set up email delivery monitoring and alerts
6. Provide confirmation message with reference number

**Contingency**: Implement a backup notification system (SMS, webhook to CRM, or admin dashboard) if email delivery becomes unreliable.

---

#### Risk 4: Third-Party Dependency Changes
**Severity**: Medium
**Probability**: Low

**Description**: GSAP, shadcn/ui, or other libraries may introduce breaking changes that require significant refactoring.

**Mitigation Strategies**:
1. Pin exact versions in package.json
2. Regularly review changelogs before updates
3. Maintain comprehensive test coverage
4. Abstract third-party dependencies behind custom hooks/components
5. Document which features use which dependencies

**Contingency**: Maintain ability to roll back to previous versions; allocate time for major version updates in maintenance schedule.

---

### 7.2 Content Risks

#### Risk 5: Insufficient High-Quality Imagery
**Severity**: High
**Probability**: Medium

**Description**: The luxury aesthetic depends on premium photography. If S-TEX cannot provide sufficient high-quality images, the design impact will be diminished.

**Mitigation Strategies**:
1. Provide detailed image requirements document early
2. Recommend professional photography if needed
3. Create placeholder/mockup designs early to illustrate needs
4. Develop fallback design patterns that work with limited imagery
5. Plan for phased content replacement as images become available

**Contingency**: Source complementary stock photography that matches brand aesthetic; design sections that emphasize typography and texture over photography.

---

#### Risk 6: Content Delays Blocking Development
**Severity**: Medium
**Probability**: High

**Description**: Waiting for final copy and images could delay page completion and testing.

**Mitigation Strategies**:
1. Create comprehensive content brief early
2. Use representative placeholder content during development
3. Design flexible layouts that accommodate varying content lengths
4. Establish content deadlines aligned with development phases
5. Build CMS integration (Sanity) to allow post-launch content updates

**Contingency**: Launch with placeholder content in non-critical sections; implement content update workflow for post-launch refinement.

---

### 7.3 Design Risks

#### Risk 7: Animation Overload Affecting Usability
**Severity**: Medium
**Probability**: Medium

**Description**: In pursuit of the "luxury" aesthetic, excessive animations may make the site feel slow, distracting, or inaccessible.

**Mitigation Strategies**:
1. Follow "meaningful animation" principles - every animation should have purpose
2. Conduct usability testing with animation-heavy prototypes
3. Implement prefers-reduced-motion support from the start
4. Establish animation duration maximums (e.g., no animation > 0.6s)
5. Get stakeholder sign-off on animation direction early

**Contingency**: Create animation intensity toggle for user preference; reduce animation scope based on testing feedback.

---

#### Risk 8: Mobile Experience Degradation
**Severity**: High
**Probability**: Medium

**Description**: Complex desktop layouts and interactions may not translate well to mobile, resulting in poor mobile UX.

**Mitigation Strategies**:
1. Mobile-first development approach
2. Design mobile layouts concurrently with desktop
3. Test on real devices throughout development
4. Simplify interactions for touch interfaces
5. Prioritize core content and CTAs on mobile

**Contingency**: Create separate mobile-optimized components where responsive design is insufficient.

---

### 7.4 Project Risks

#### Risk 9: Scope Creep from Stakeholder Requests
**Severity**: Medium
**Probability**: High

**Description**: Additional features or pages may be requested during development, impacting delivery.

**Mitigation Strategies**:
1. Clearly document scope boundaries in this PRD
2. Establish change request process
3. Quantify impact of any additions
4. Prioritize ruthlessly based on MVP definition
5. Maintain "future enhancements" backlog for post-launch

**Contingency**: Implement phased delivery approach where MVP launches first, enhancements follow.

---

#### Risk 10: Browser Compatibility Issues
**Severity**: Medium
**Probability**: Low

**Description**: GSAP or modern CSS features may not work consistently across all target browsers.

**Mitigation Strategies**:
1. Define browser support matrix early (last 2 versions of major browsers)
2. Use PostCSS for CSS compatibility
3. Test on BrowserStack or similar during development
4. Implement feature detection for critical animations
5. Create graceful fallbacks for unsupported features

**Contingency**: Provide simplified experience for older browsers with core functionality intact.

---

### 7.5 Risk Summary Matrix

| Risk | Severity | Probability | Priority |
|------|----------|-------------|----------|
| Animation Performance on Mobile | High | Medium | 1 |
| Large Image Assets Impact | High | High | 2 |
| Insufficient Quality Imagery | High | Medium | 3 |
| Mobile Experience Degradation | High | Medium | 4 |
| Content Delays | Medium | High | 5 |
| Animation Overload | Medium | Medium | 6 |
| Scope Creep | Medium | High | 7 |
| Email Delivery | Medium | Low | 8 |
| Third-Party Dependencies | Medium | Low | 9 |
| Browser Compatibility | Medium | Low | 10 |

---

## 8. Appendix

### 8.1 Glossary

| Term | Definition |
|------|------------|
| B2B | Business-to-Business; refers to commercial transactions between companies |
| CTA | Call-to-Action; a prompt designed to encourage immediate response |
| GSAP | GreenSock Animation Platform; a JavaScript animation library |
| ISR | Incremental Static Regeneration; Next.js feature for updating static pages |
| LCP | Largest Contentful Paint; Core Web Vital measuring loading performance |
| PU | Polyurethane; a polymer used in leatherette manufacturing |
| RSC | React Server Components; components that render on the server |
| UV | Ultraviolet; refers to sun exposure ratings for outdoor fabrics |
| WCAG | Web Content Accessibility Guidelines |

### 8.2 Content Requirements Checklist

#### Home Page Content Needed:
- [ ] Hero headline and subheadline (approved copy)
- [ ] Brand introduction paragraph
- [ ] 4 capability card descriptions
- [ ] Partner logos (high-res, with permission)
- [ ] Pioneer credentials copy
- [ ] 3-5 testimonials with attribution
- [ ] Hero background image/video
- [ ] Section supporting images

#### About Us Page Content Needed:
- [ ] Company founding story (2-3 paragraphs)
- [ ] Founder biography and quote
- [ ] Founder professional photograph
- [ ] Global presence statistics
- [ ] Manufacturing excellence description
- [ ] Timeline milestones (dates and descriptions)
- [ ] Factory/facility photographs
- [ ] Team photographs (optional)

#### Collections Content Needed (per collection):
- [ ] Collection name and description
- [ ] Key features and specifications
- [ ] Application examples
- [ ] 5-10 high-quality fabric photographs
- [ ] Technical specifications (widths, weights, etc.)

#### Applications Content Needed (per industry):
- [ ] Industry overview description
- [ ] Key considerations for the industry
- [ ] Relevant S-TEX advantages
- [ ] Project photographs (if available)
- [ ] Case study content (if applicable)

#### Why S-TEX Content Needed:
- [ ] 6-8 differentiator descriptions
- [ ] Quality assurance process description
- [ ] Certifications and standards (with badges/logos)
- [ ] Partnership descriptions
- [ ] Awards and recognition (if applicable)

#### Contact Page Content Needed:
- [ ] Business hours confirmation
- [ ] Phone numbers (verified)
- [ ] Email addresses (verified)
- [ ] Physical address (verified)
- [ ] Google Maps embed coordinates
- [ ] WhatsApp number (if applicable)

### 8.3 Image Specifications

| Usage | Dimensions | Format | Max Size |
|-------|------------|--------|----------|
| Hero Background | 2560x1440px | AVIF/WebP | 500KB |
| Section Background | 1920x1080px | AVIF/WebP | 300KB |
| Collection Card | 800x600px | AVIF/WebP | 100KB |
| Gallery Image | 1200x900px | AVIF/WebP | 200KB |
| Logo (Partner) | 400x200px | SVG/PNG | 50KB |
| Portrait (Founder) | 600x800px | AVIF/WebP | 100KB |
| Icon/Badge | 100x100px | SVG | 10KB |

### 8.4 SEO Keyword Targets

**Primary Keywords**:
- Luxury performance textiles India
- Premium outdoor fabrics India
- Jacquard blackout fabrics
- B2B textile supplier India
- High-performance upholstery fabrics

**Secondary Keywords**:
- Indoor upholstery fabrics manufacturer
- Drapery fabrics supplier
- Outdoor UV resistant fabrics
- 100% PU leatherette India
- Hospitality textiles India
- Marine upholstery fabrics

**Long-tail Keywords**:
- Custom performance textiles for architects
- Luxury fabric supplier for interior designers
- Hotel furniture upholstery fabrics India
- 2000 hour UV guarantee outdoor fabrics
- Jacquard blackout curtain fabric 114 inch

### 8.5 Competitor References

**Global Benchmarks** (Aspiration for design/UX):
- Sunbrella (sunbrella.com) - Premium outdoor fabric leader
- Perennials (perennialsfabrics.com) - Luxury performance textiles
- Kravet (kravet.com) - High-end textile distributor
- Schumacher (fschumacher.com) - Luxury fabric house

**Key Observations for Reference**:
- Minimal, elegant layouts with emphasis on imagery
- Subtle animations that enhance rather than distract
- Clear B2B focus with sample request CTAs
- Strong brand storytelling
- Professional, refined typography
- Curated color palettes

### 8.6 Analytics Events to Track

| Event | Description | Page |
|-------|-------------|------|
| page_view | Standard page view | All |
| scroll_depth | 25%, 50%, 75%, 100% | All |
| cta_click | Primary CTA clicked | All |
| form_start | Contact form field focused | Contact |
| form_complete | Contact form submitted | Contact |
| form_error | Form validation error | Contact |
| collection_view | Collection card clicked | Collections |
| application_view | Application card clicked | Applications |
| partner_logo_view | Partner section scrolled into view | Home |
| testimonial_interaction | Testimonial carousel interacted | Home |
| external_link_click | External link clicked | All |

### 8.7 Launch Checklist

**Pre-Launch Technical**:
- [ ] All pages rendering correctly
- [ ] All forms submitting correctly
- [ ] Email notifications working
- [ ] Analytics tracking verified
- [ ] Core Web Vitals passing
- [ ] Lighthouse scores meeting targets
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete
- [ ] Accessibility audit passed
- [ ] SEO meta tags verified
- [ ] Structured data validated
- [ ] Sitemap generated and accessible
- [ ] robots.txt configured
- [ ] SSL certificate active
- [ ] Error pages (404, 500) styled

**Pre-Launch Content**:
- [ ] All copy proofread and approved
- [ ] All images optimized and loading
- [ ] All links verified (no 404s)
- [ ] Contact information accurate
- [ ] Legal/privacy policy present
- [ ] Testimonials approved for use
- [ ] Partner logos approved for use

**Launch Day**:
- [ ] DNS pointed to Vercel
- [ ] Old site 301 redirects configured
- [ ] Analytics real-time verified
- [ ] Form submission test in production
- [ ] Email delivery test in production
- [ ] Social sharing preview tested
- [ ] Stakeholder sign-off obtained

**Post-Launch**:
- [ ] Monitor analytics for anomalies
- [ ] Monitor form submissions
- [ ] Monitor Core Web Vitals (real user data)
- [ ] Check Search Console for crawl issues
- [ ] Collect initial user feedback
- [ ] Document any issues for sprint backlog

---

## 9. Website Copy - Complete Content

This section contains the final, production-ready copy for all pages of the S-TEX website. All content is crafted to reflect the luxury brand positioning while maintaining clarity for the B2B audience.

---

### 9.1 Home Page Copy

#### Hero Section

**Primary Headline:**
```
Crafting Excellence. Defining Performance.
```

**Subheadline:**
```
India's pioneer in luxury performance textiles — trusted by the world's finest furniture brands for over two decades.
```

**CTA Button:** `Discover Our Story`

**Secondary CTA:** `Explore Collections`

---

#### Introduction Section

**Section Heading:**
```
Where Heritage Meets Performance
```

**Body Copy:**
```
Since 2001, S-TEX has been weaving quality into every thread from our manufacturing facilities in Kerala and Tamil Nadu. What began as a visionary dream has evolved into a global textile house — supplying the world's most prestigious home furnishing brands while pioneering innovations in performance textiles for the Indian market.

Our fabrics dress the interiors of landmark hotels, grace the collections of international retailers, and transform outdoor spaces across four continents. Every yard we produce carries forward a legacy of craftsmanship refined over two decades.

From the intricate patterns of our jacquard blackouts to the weather-defying resilience of our outdoor performance fabrics, we create textiles that refuse to compromise. Beauty and durability, heritage and innovation, Indian craftsmanship and global standards — at S-TEX, these aren't contradictions. They're our everyday reality.
```

**CTA:** `Learn About Us →`

---

#### Capabilities Showcase Section

**Section Heading:**
```
Textiles for Every Vision
```

**Section Introduction:**
```
Whatever your project demands — from the gentlest hand-feel to the most rigorous performance standards — S-TEX delivers textiles engineered for excellence.
```

**Card 1 — Indoor Fabrics:**
```
Title: Indoor Fabrics
Description: Upholstery, drapery, and cushion fabrics in natural and performance yarns. Timeless patterns meet modern durability. From plush velvets that invite touch to textured weaves built for everyday life, our indoor collection transforms furniture into statements.
```

**Card 2 — Outdoor Performance:**
```
Title: Outdoor Performance
Description: UV-resistant, water-repellent fabrics engineered for poolside luxury, marine applications, and al fresco living. Tested to 2000+ hours of UV exposure. Colours that stay vivid, textures that stay true, season after demanding season.
```

**Card 3 — Blackouts & Dim-Outs:**
```
Title: Blackouts & Dim-Outs
Description: India's first jacquard blackout and dim-out fabrics in widths up to 114". Precision light control with design sophistication. Where most blackouts sacrifice aesthetics for function, we deliver both — complete darkness wrapped in elegance.
```

**Card 4 — Leatherette & PU:**
```
Title: Leatherette & PU
Description: Premium 100% PU leatherettes for indoor and outdoor applications. The look and feel of leather with superior performance. India's first true indoor-outdoor leatherette — luxury that lives beautifully, anywhere.
```

**CTA:** `Explore Collections →`

---

#### Global Trust Section

**Section Heading:**
```
Trusted by the World's Finest
```

**Body Copy:**
```
Our fabrics have found their way into homes and hospitality spaces across the USA, Europe, Japan, the Middle East, and beyond. We're proud to count among our partners some of the world's most discerning home furnishing brands.
```

**Partner List:**
```
Crate and Barrel | Pottery Barn | West Elm | Dillard's | Anthropologie
```

**Supporting Text:**
```
...and leading furniture manufacturers, architects, interior designers, and hospitality groups worldwide who demand nothing less than excellence.
```

---

#### Pioneer Statement Section

**Section Heading:**
```
Pioneering Performance in India
```

**Section Introduction:**
```
S-TEX doesn't follow the market — we define it. Our track record of industry firsts demonstrates an unwavering commitment to bringing world-class textile innovation to India.
```

**Pioneer Block 1:**
```
Icon: [Fabric/Weave Icon]
Headline: First in India
Subheadline: Jacquard Blackouts & Dim-Outs
Description: Revolutionary light-control fabrics in widths up to 114" — patterns and textures previously unavailable in the Indian market.
```

**Pioneer Block 2:**
```
Icon: [Leather/Material Icon]
Headline: First in India
Subheadline: 100% PU Indoor & Outdoor Leatherettes
Description: True performance leatherette that transitions seamlessly from living room to poolside, without compromising on luxury or durability.
```

**Pioneer Block 3:**
```
Icon: [Sun/UV Icon]
Headline: First in India
Subheadline: 2000+ Hour UV Guarantee
Description: Outdoor fabrics tested and certified to withstand over 2000 hours of UV exposure — colours that endure, performance that lasts.
```

**CTA:** `Discover Why S-TEX →`

---

#### Testimonials Section

**Section Heading:**
```
What Our Partners Say
```

**Testimonial 1:**
```
"We stumbled upon the S-TEX store and there's been no looking back. Their choice of fabrics is unique and of great quality. What really sets their team apart is their in-depth knowledge, informed suggestions, and committed effort to see a designer's vision realized. They understand that great design is a collaboration."

— Interior Design Studio, Bangalore
```

**Testimonial 2:**
```
"S-TEX has always been one of our go-to vendors. The extensive, exquisite range allows for an idyllic fabric solution for every project we undertake. We specifically applaud their outdoor performance fabric collection — not only durable but elegantly crafted in distinct patterns and vivid colours that our clients love."

— Architect & Design Firm, Mumbai
```

**Testimonial 3:**
```
"Working with S-TEX for our hotel renovation project was seamless. Their understanding of hospitality requirements — from fire ratings to cleanability to pure aesthetic impact — made them an invaluable partner. The fabrics have been performing beautifully for three years now."

— Hospitality Group, Delhi
```

---

#### Final CTA Section

**Headline:**
```
Ready to Transform Your Project?
```

**Body Copy:**
```
Whether you're designing a private residence, outfitting a luxury hotel, or creating the next iconic outdoor space — S-TEX is ready to be your textile partner. Let's discuss how our fabrics can bring your vision to life.
```

**Primary CTA:** `Get in Touch`

**Secondary CTA:** `Request Samples`

---

### 9.2 About Us Page Copy

#### Hero Section

**Primary Headline:**
```
Our Story
```

**Subheadline:**
```
Two decades of weaving excellence, from the looms of South India to living spaces across the world.
```

---

#### The S-TEX Story Section

**Section Heading:**
```
A Vision Woven Into Reality
```

**Body Copy (Paragraph 1):**
```
Established in 2001 and headquartered in Bangalore, S-TEX began with a singular vision: to create textiles that bridge the gap between India's rich weaving heritage and the performance demands of modern living.

In an industry where manufacturers often chose between beauty and durability, S-TEX founder Mr. Srinith Sreedharan saw a different path. Drawing on deep roots in India's textile manufacturing tradition and firsthand understanding of what global furniture brands demand, he set out to prove that compromise was unnecessary.
```

**Body Copy (Paragraph 2):**
```
Our manufacturing facilities in Kerala and Tamil Nadu have been weaving quality fabric since our inception. These aren't just production centers — they're workshops where tradition meets technology, where master weavers work alongside modern machinery, where every meter of fabric reflects generations of accumulated expertise.

What was then a nurtured dream turned into reality when we expanded our vision with our first studio in Bangalore in 2018, bringing our complete collection directly to the Indian design community. Today, that studio serves as a tactile library of possibilities — a space where architects, designers, and hospitality professionals can experience S-TEX quality firsthand.
```

**Body Copy (Paragraph 3):**
```
From a single manufacturing unit serving local furniture makers, S-TEX has grown into a global textile house. Our fabrics now dress the interiors of five-star hotels across continents, appear in the collections of America's most beloved home furnishing retailers, and transform outdoor spaces from Mumbai to Manhattan.

But growth hasn't changed our founding principle: every yard of fabric must meet the standard we'd want in our own homes. That's not marketing — it's the promise that's driven every decision for over two decades.
```

---

#### Founder Section

**Section Heading:**
```
Leadership
```

**Founder Name:**
```
Mr. Srinith Sreedharan
```

**Founder Title:**
```
Founder & Managing Director
```

**Biography:**
```
Mr. Srinith Sreedharan brings a unique dual perspective to S-TEX — deep roots in India's textile manufacturing tradition combined with firsthand understanding of what the world's leading furniture brands demand.

Before founding S-TEX, Mr. Sreedharan spent years understanding both sides of the textile industry: the intricate craftsmanship that makes Indian textiles special, and the rigorous quality standards that international markets require. This rare combination has shaped S-TEX's ability to consistently exceed expectations, whether serving a local boutique hotel or an international retail giant.

Under his leadership, S-TEX has pioneered multiple industry firsts — from jacquard blackouts to performance leatherettes — while building lasting partnerships with brands that define global home furnishing standards.
```

**Founder Quote:**
```
"When we started S-TEX, people said you couldn't have both — either you make beautiful fabrics or you make durable ones. We've spent twenty years proving that's a false choice. The best textiles don't ask you to compromise. They deliver beauty that performs and performance that inspires."

— Mr. Srinith Sreedharan, Founder
```

---

#### Global Presence Section

**Section Heading:**
```
A Global Footprint
```

**Introduction:**
```
From our roots in South India, S-TEX has grown to serve discerning clients across the world. Our presence spans continents, but our commitment to quality knows no borders.
```

**Presence Details:**

**India Operations:**
```
Headquarters: Bangalore, Karnataka
Manufacturing: Kerala & Tamil Nadu
Studio: HRBR Layout, Bangalore

Our Indian operations form the foundation of everything we do. Three manufacturing facilities across South India produce textiles that meet the most demanding international standards, while our Bangalore studio serves as the face of S-TEX for the Indian design community.
```

**Design & Development:**
```
USA Design Team

Our primary design team is situated in the United States, ensuring our collections resonate with international design sensibilities while honoring our Indian manufacturing heritage. This transatlantic collaboration — American trend awareness married to Indian craftsmanship — gives S-TEX a unique position in the global textile market.
```

**International Markets:**
```
Our clientele spans the globe:

United States & Europe — Major home furnishing retailers and furniture manufacturers who demand consistent quality at scale. Our fabrics appear in showrooms from New York to London to Paris.

Japan — Precision-focused design partnerships where attention to detail is paramount. Japanese clients appreciate the meticulous craftsmanship in every S-TEX fabric.

Middle East — Luxury hospitality and residential projects where opulence meets performance. From Dubai hotels to private villas, S-TEX fabrics define premium interiors.

Far East Asia — Growing markets with increasingly discerning taste. As Asian economies embrace premium home furnishing, S-TEX is there to meet the demand.

India — Architects, interior designers, hospitality groups, and retail partners who recognize that world-class textiles don't require an import stamp.
```

---

#### Manufacturing Excellence Section

**Section Heading:**
```
Where Craftsmanship Lives
```

**Body Copy:**
```
Our manufacturing facilities in Kerala and Tamil Nadu are where tradition meets technology. With over 20 years of textile manufacturing experience, current knowledge of industry standards, and a finger on the pulse of global design trends, every fabric that bears the S-TEX name represents the pinnacle of what's possible in performance textiles.

These aren't automated factories churning out generic yardage. They're production centers where quality is a culture, not a checkpoint. Where experienced craftspeople work alongside modern looms. Where every batch is tested, every roll is inspected, every meter is worthy of the S-TEX name.

Our collection of timeless, updated classics and authentic reproductions provides a unique look and feel — an unmatched combination of inspired design and unparalleled quality. Each season brings a wealth of new ideas culled from our partnerships with mills across the globe, allowing us to showcase unique products, passion, and vision.
```

**Quality Highlights:**
```
• State-of-the-art weaving technology paired with traditional expertise
• Rigorous quality control at every production stage
• In-house UV and durability testing facilities
• Direct sourcing relationships with premium yarn suppliers
• ISO-certified manufacturing processes
• Continuous investment in sustainable production methods
```

---

#### Timeline / Milestones Section

**Section Heading:**
```
Our Journey
```

**Timeline Entries:**

```
2001 — The Beginning
S-TEX founded in Bangalore. Manufacturing begins in Kerala and Tamil Nadu with a vision to create performance textiles worthy of global standards.

2005 — Going Global
First exports to USA; partnerships with major furniture importers established. American designers discover that world-class textiles can come from India.

2010 — European Expansion
Expansion into European and Japanese markets. S-TEX fabrics begin appearing in showrooms from London to Tokyo.

2015 — Pioneering Innovation
India's first Jacquard Blackouts and Dim-Outs launched — light control fabrics in widths up to 114" with designs that don't compromise aesthetics.

2017 — Material Revolution
Introduction of 100% PU Indoor/Outdoor Leatherettes — India's first true performance leatherette suitable for any environment.

2018 — Coming Home
First S-TEX studio opens in Bangalore (HRBR Layout) — bringing the complete collection directly to India's design community.

2020 — Performance Guaranteed
Launch of performance outdoor fabrics with 2000+ hour UV guarantee — setting a new standard for outdoor textiles in India.

Today — The Journey Continues
20+ years of excellence. Serving clients across four continents. Still weaving, still innovating, still refusing to compromise.
```

---

#### Values Section

**Section Heading:**
```
What We Believe
```

**Value 1 — Excellence Without Exception:**
```
Every yard of S-TEX fabric meets the same standard — whether it's destined for a private residence or a five-star hotel, for local delivery or international export. Excellence isn't reserved for special orders. It's the baseline.
```

**Value 2 — Innovation With Purpose:**
```
We don't innovate for headlines. We innovate because our clients face real challenges — light control, UV exposure, wear and tear, maintenance demands. Every S-TEX innovation solves a real problem.
```

**Value 3 — Partnership Over Transaction:**
```
We don't just sell fabric. We partner with architects, designers, and hospitality professionals to understand their vision and help them realize it. Your success is our success.
```

**Value 4 — Heritage Honored, Future Embraced:**
```
We're proud of India's textile heritage. We're also committed to pushing boundaries. At S-TEX, respecting tradition and embracing innovation aren't contradictions — they're complementary.
```

---

### 9.3 Our Collections Page Copy

#### Hero Section

**Primary Headline:**
```
Our Collections
```

**Subheadline:**
```
Curated textiles for spaces that demand both beauty and performance.
```

---

#### Introduction Section

**Body Copy:**
```
As a home furnishing fabric brand that aspires to encapsulate elegance, quality, and style through every piece, our fabrics are inspired by modern stories, an extensive range of textures, and dynamic colour palettes.

From vibrant statement pieces to understated classics, our collections serve varying style aspirations — always with the performance characteristics that discerning professionals demand. Whether you're seeking fabrics for indoor luxury or outdoor resilience, S-TEX delivers textiles that refuse to compromise.
```

---

#### Collection Category: Indoor Upholstery Fabrics

**Collection Title:**
```
Indoor Upholstery Fabrics
```

**Tagline:**
```
Where Comfort Meets Endurance
```

**Description:**
```
From plush velvets to textured weaves, our upholstery collection brings together natural and performance yarns for furniture that lives beautifully. Crafted to withstand daily life while maintaining their luxurious hand and appearance, these fabrics transform seating into statements.

Our indoor upholstery range spans the spectrum — from sumptuous solids that invite touch to intricate patterns that command attention. Each fabric is selected not just for beauty, but for how it performs under real-world conditions. Spills, sunlight, repeated use — our fabrics handle life gracefully.

Whether you're furnishing a private residence where elegance is paramount, a hospitality space where durability is essential, or a commercial environment where both matter equally — our upholstery collection delivers.
```

**Key Features:**
```
• Natural and performance yarn options
• Extensive colour palette from neutrals to bold statements
• Martindale abrasion ratings suitable for contract use
• Stain-resistant treatments available
• Variety of textures: velvets, linens, boucles, jacquards
• Widths suitable for most furniture applications
```

**Applications:**
```
Sofas | Armchairs | Dining Seating | Headboards | Ottomans | Banquettes | Custom Furniture
```

---

#### Collection Category: Drapery & Curtain Fabrics

**Collection Title:**
```
Drapery & Curtain Fabrics
```

**Tagline:**
```
Light, Transformed
```

**Description:**
```
Light-filtering sheers to dramatic statement fabrics. Our drapery collection transforms windows into design elements — offering precise light control, privacy, and aesthetic sophistication in equal measure.

Windows are more than openings — they're opportunities. Our drapery fabrics help you realize that opportunity, whether you're creating an ethereal veil of diffused light or a bold frame for a stunning view. From gossamer sheers that soften harsh sunlight to opulent jacquards that make a statement, our collection covers every window treatment need.

The right drapery fabric does more than hang at a window. It manages light, contributes to thermal comfort, provides privacy when needed, and adds a layer of luxury to any interior. Our collection is curated with all these functions in mind.
```

**Key Features:**
```
• Sheer, semi-sheer, and opaque options
• Light filtering and room darkening variants
• Fire-retardant options for commercial applications
• Various weights for different draping effects
• Solid colours and patterns available
• Multiple width options for seamless installations
```

**Applications:**
```
Window Treatments | Room Dividers | Theatrical Applications | Event Drapery | Ceiling Treatments | Layered Window Designs
```

---

#### Collection Category: Jacquard Blackouts & Dim-Outs

**Collection Title:**
```
Jacquard Blackouts & Dim-Outs
```

**Tagline:**
```
Complete Control. Complete Beauty.
```

**Pioneer Badge:**
```
India's First — Widths up to 114"
```

**Description:**
```
India's first jacquard blackout and dim-out fabrics in widths up to 114". Where most blackouts sacrifice aesthetics for function, our collection delivers complete light control without compromising on design. Available in patterns and textures that complement the most discerning interiors.

For too long, choosing blackout fabrics meant accepting aesthetic limitations. Plain weaves. Limited colours. Industrial appearance. S-TEX rejected that trade-off. Our pioneering jacquard blackout collection proves that complete darkness doesn't require design darkness.

These fabrics are engineered for environments where light control is critical — hotels where guests expect restful sleep, home theaters where ambient light ruins the experience, conference rooms where presentations demand attention, hospitals where patient recovery requires controlled environments. But they're designed for spaces where beauty matters just as much.
```

**Key Features:**
```
• Complete blackout (100% light blocking) and dim-out options
• Jacquard patterns — not just plain weaves
• Widths up to 114" for seamless large-window applications
• Thermal insulation properties
• Sound absorption benefits
• Fire-retardant options for hospitality compliance
• Easy care and maintenance
```

**Applications:**
```
Hotels & Resorts | Home Theaters | Bedrooms | Conference Rooms | Hospitals | Photography Studios | Sleep Clinics | Media Rooms
```

---

#### Collection Category: Outdoor Performance Fabrics

**Collection Title:**
```
Outdoor Performance Fabrics
```

**Tagline:**
```
Engineered for the Elements
```

**Pioneer Badge:**
```
India's First — 2000+ Hour UV Guarantee
```

**Description:**
```
Engineered to thrive in the harshest conditions. Our outdoor fabrics resist UV degradation, water, mold, and mildew — tested to 2000+ hours under UV exposure. Vivid colours that stay true, textures that remain inviting, season after demanding season.

Outdoor living deserves outdoor fabrics that actually perform outdoors. That simple idea drives our entire outdoor collection. These aren't indoor fabrics hoping for the best — they're purpose-engineered textiles designed to face sun, rain, salt spray, pool chemicals, and everything else the outdoor environment delivers.

Our 2000+ hour UV guarantee isn't marketing. It's a promise backed by rigorous testing in conditions that simulate years of sun exposure. When we say these colours stay true, we mean it — season after season, year after year.
```

**Key Features:**
```
• 2000+ hour UV exposure guarantee
• Water-repellent and quick-drying
• Mold and mildew resistant
• Fade-resistant dyes
• Easy cleaning — most stains rinse away
• Soft hand-feel despite performance characteristics
• Extensive colour range including bold outdoor hues
• Solution-dyed acrylic for through-and-through colour
```

**Applications:**
```
Poolside Furniture | Patio Cushions | Outdoor Drapes | Shade Sails | Awnings | Umbrellas | Marine Canvas | Garden Seating | Outdoor Dining | Resort Furnishings
```

---

#### Collection Category: Leatherette & PU Collection

**Collection Title:**
```
Leatherette & PU Collection
```

**Tagline:**
```
Luxury That Lives Anywhere
```

**Pioneer Badge:**
```
India's First — 100% PU Indoor & Outdoor Leatherettes
```

**Description:**
```
India's first 100% PU leatherettes suitable for both indoor and outdoor use. The aesthetic appeal and tactile pleasure of leather with superior durability, easy maintenance, and weather resistance. Luxury that performs beautifully, wherever life happens.

Traditional leather has limitations. It doesn't love sunlight. It doesn't love water. It doesn't love the demanding environments where modern furniture lives. Our 100% PU leatherette collection solves those problems while delivering the luxury aesthetic that leather lovers demand.

These are performance materials that don't announce themselves as substitutes. The hand-feel is rich. The appearance is sophisticated. The drape and texture satisfy the touch. But beneath that luxury exterior is engineering that handles UV exposure, resists water, cleans easily, and performs in environments where traditional leather would fail.
```

**Key Features:**
```
• 100% PU construction — no fabric backing exposure
• Indoor and outdoor suitable
• UV and water resistant
• Easy to clean and maintain
• Leather-like aesthetics and hand-feel
• Variety of textures from smooth to textured grains
• Extensive colour palette
• Superior abrasion resistance
• Animal-friendly alternative to traditional leather
```

**Applications:**
```
Contract Seating | Automotive Interiors | Hospitality Furniture | Outdoor Furniture | Marine Upholstery | Healthcare Seating | Residential Furniture | Retail Fixtures
```

---

#### Collection Category: Cushion & Pillow Fabrics

**Collection Title:**
```
Cushion & Pillow Fabrics
```

**Tagline:**
```
The Finishing Touches
```

**Description:**
```
The finishing touches that complete a space. Our cushion and pillow fabrics range from everyday performance to luxurious statement pieces — available in coordinating patterns and solids that tie your textile story together.

Great interior design is in the details. The cushions on a sofa. The pillows on a bed. The accents that add personality to outdoor furniture. These small elements make disproportionate impact — which is why they deserve fabrics that perform as well as your primary upholstery.

Our cushion and pillow fabric collection is designed for coordination. Patterns that play well with our upholstery solids. Outdoor performance options that match our patio furniture fabrics. Accent colours that complement our neutral foundations. Everything you need to complete the vision.
```

**Key Features:**
```
• Coordinating patterns and solids
• Indoor and outdoor performance options
• Various textures for accent interest
• Fade-resistant for sun-exposed applications
• Easy care and washability
• Multiple sizes and scales in patterns
• Statement prints and understated textures available
```

**Applications:**
```
Decorative Pillows | Seat Cushions | Floor Cushions | Outdoor Accent Pieces | Bolsters | Lumbar Supports | Daybed Cushions | Bench Seating
```

---

#### Sample Request CTA Section

**Heading:**
```
Experience S-TEX Quality
```

**Body Copy:**
```
Interested in our collections? Our team is ready to assist with fabric selection, technical specifications, and custom requirements. Request samples to experience the S-TEX difference firsthand — the weight, the hand-feel, the quality that photographs can only suggest.
```

**Primary CTA:** `Request Samples`

**Secondary CTA:** `Contact Us for Specifications →`

---

### 9.4 Applications Page Copy

#### Hero Section

**Primary Headline:**
```
Applications
```

**Subheadline:**
```
From five-star hotels to private residences, from yacht decks to corporate headquarters — S-TEX fabrics perform beautifully everywhere.
```

---

#### Introduction Section

**Body Copy:**
```
Our fabrics serve diverse industries and applications, each demanding its own balance of aesthetics, durability, and performance. Whatever your project requires, S-TEX delivers textiles engineered for the specific challenges of your environment.

We understand that a hotel lobby has different demands than a private living room. That poolside furniture faces challenges unknown to indoor seating. That marine applications test fabrics in ways land-based use never does. That's why we don't offer generic "performance fabrics" — we offer specific solutions for specific environments.

The following pages explore how S-TEX serves each industry we partner with.
```

---

#### Application Category: Hospitality

**Application Title:**
```
Hospitality
```

**Tagline:**
```
Where First Impressions Last
```

**Description:**
```
Hotels, resorts, and restaurants demand fabrics that can withstand heavy use while maintaining their luxury appearance day after day, guest after guest. Our hospitality-grade textiles meet international fire safety standards and are engineered for easy cleaning and long-term durability.

In hospitality, your fabrics are on stage constantly. They must look impeccable for the arrival of every guest, survive the demands of heavy traffic, clean easily when incidents occur, and maintain their beauty through cleaning cycle after cleaning cycle.

S-TEX hospitality textiles are specified by hotel groups and designers who understand these demands. Our fabrics pass the rigorous testing that hospitality applications require — fire ratings, abrasion resistance, cleanability, colorfastness — while delivering the aesthetic impact that transforms spaces into experiences.
```

**Key Considerations:**
```
• Fire safety compliance (contract standards)
• High abrasion resistance for heavy traffic
• Easy cleaning and stain removal
• Colour retention through commercial laundering
• Consistent quality for large-scale orders
• Coordinated collections for unified design
```

**We Serve:**
```
Hotels | Resorts | Restaurants | Bars & Lounges | Cafes | Spas & Wellness Centers | Cruise Ships | Casino Properties | Convention Centers | Airport Lounges
```

**Featured Collections:**
```
Indoor Upholstery | Drapery | Blackouts & Dim-Outs | Outdoor Performance
```

---

#### Application Category: Residential Luxury

**Application Title:**
```
Residential Luxury
```

**Tagline:**
```
Home, Elevated
```

**Description:**
```
For interior designers and homeowners who refuse to compromise, our residential collections offer the sophistication of high fashion with the durability of performance textiles. Family-friendly without sacrificing elegance — because life happens, and your fabrics should handle it gracefully.

The luxury residence is not a museum. It's a living space — where families gather, where life unfolds, where beautiful things must also be durable things. S-TEX residential fabrics embrace this reality. They're luxurious to the touch and the eye, but they're also engineered for real life.

Spilled wine. Pet claws. Children's adventures. Sunlight through south-facing windows. The demands of everyday living can compromise lesser fabrics. Ours are designed to maintain their beauty through it all — because luxury shouldn't require velvet ropes.
```

**Key Considerations:**
```
• Balance of luxury aesthetics and practical durability
• Family and pet-friendly performance treatments
• Light-fast colours for sun-exposed rooms
• Variety of textures for tactile interest
• Coordination across furniture, drapery, and accents
• Stain resistance for everyday incidents
```

**We Serve:**
```
Private Residences | Luxury Apartments | Villas | Penthouses | Interior Design Firms | Custom Furniture Makers | High-End Renovation Projects
```

**Featured Collections:**
```
Indoor Upholstery | Drapery | Cushion & Pillow | Leatherette & PU
```

---

#### Application Category: Outdoor & Poolside

**Application Title:**
```
Outdoor & Poolside
```

**Tagline:**
```
Living Under Open Skies
```

**Description:**
```
Sun, rain, chlorine, salt spray — our outdoor fabrics are engineered to thrive in challenging conditions. UV-tested to 2000+ hours, water-resistant, and fade-proof, they transform outdoor spaces into true extensions of indoor living.

Outdoor living is one of life's great pleasures. Mornings by the pool. Evenings on the terrace. Weekends in the garden. These spaces deserve fabrics that look and feel as luxurious as your indoor furniture — and perform even better.

S-TEX outdoor fabrics are engineered for exposure. They face the sun without fading. They shed water without staining. They resist mold and mildew without chemical harshness. And they remain soft, inviting, and beautiful through seasons of use. Because outdoor living shouldn't mean outdoor compromises.
```

**Key Considerations:**
```
• UV resistance — 2000+ hours guaranteed
• Water repellency and quick drying
• Mold and mildew resistance
• Chlorine and salt-water tolerance
• Easy cleaning — most stains rinse away
• Fade resistance through seasons of exposure
• Soft hand-feel despite performance characteristics
```

**We Serve:**
```
Pool Areas | Patios | Terraces | Garden Furniture | Outdoor Dining | Rooftop Spaces | Balconies | Resort Pool Decks | Beach Clubs | Country Clubs
```

**Featured Collections:**
```
Outdoor Performance | Leatherette & PU | Cushion & Pillow
```

---

#### Application Category: Marine

**Application Title:**
```
Marine
```

**Tagline:**
```
Born for the Water
```

**Description:**
```
From yacht upholstery to marine canvas, our fabrics are built to handle the unique demands of life on the water. Salt-resistant, quick-drying, and engineered for the marine environment where ordinary fabrics fail.

The marine environment is fabric's ultimate test. Salt water. Constant sun exposure. Humidity. Motion. Cleaning challenges. The fabrics that thrive on water are those specifically engineered for water — and that's exactly what S-TEX marine textiles deliver.

Our marine fabrics don't just survive on boats — they perform. They resist the salt spray that destroys ordinary fabrics. They dry quickly when wetted. They shrug off mildew that plagues humid environments. And they look beautiful doing it, because yacht aesthetics matter too.
```

**Key Considerations:**
```
• Salt water resistance
• Quick-drying performance
• UV protection for constant sun exposure
• Mold and mildew prevention in humid conditions
• Abrasion resistance for deck and dock contact
• Easy maintenance for onboard cleaning
• Aesthetic appeal for yacht interiors
```

**We Serve:**
```
Yachts | Boats | Marine Canvas | Deck Furniture | Dock Furniture | Sailboat Interiors | Fishing Vessels | Boat Covers | Marine Upholstery
```

**Featured Collections:**
```
Outdoor Performance | Leatherette & PU
```

---

#### Application Category: Shades & Awnings

**Application Title:**
```
Shades & Awnings
```

**Tagline:**
```
Protection with Presence
```

**Description:**
```
Shade sails, awnings, and umbrellas demand fabrics that can handle constant UV exposure while maintaining their structural integrity and colour. Our performance fabrics deliver year after year, providing protection that looks as good as it performs.

Shade structures are exposed to more UV radiation than any other application. They're the first line of defense against the sun, which means they absorb the punishment that would otherwise damage everything beneath them. That's why shading applications demand purpose-engineered performance fabrics.

S-TEX shade and awning fabrics are built for exposure. They're tested to withstand thousands of hours of UV bombardment while maintaining their colour and structural integrity. They shed water to prevent pooling. They resist the stretching and distortion that compromise lesser materials. And they look beautiful while working hard.
```

**Key Considerations:**
```
• Superior UV resistance for constant sun exposure
• Structural integrity under tension
• Water shedding to prevent pooling
• Colour retention through years of exposure
• Resistance to stretching and distortion
• Wind resistance and breathability balance
• Easy cleaning for outdoor installations
```

**We Serve:**
```
Commercial Shading | Residential Awnings | Umbrellas | Shade Structures | Pergola Covers | Patio Awnings | Restaurant Parasols | Resort Shade Solutions | Outdoor Markets
```

**Featured Collections:**
```
Outdoor Performance
```

---

#### Application Category: Corporate & Commercial

**Application Title:**
```
Corporate & Commercial
```

**Tagline:**
```
Professional Performance
```

**Description:**
```
Office environments, corporate cafeterias, and commercial spaces require fabrics that project professionalism while withstanding high-traffic use. Our contract-grade textiles meet the demanding specifications of commercial projects — durability, safety, and aesthetics in equal measure.

Commercial spaces present unique challenges. High traffic volumes. Varied users. Strict safety requirements. Budget considerations. The need to project brand identity through material choices. S-TEX contract textiles address all these demands without compromising on quality or aesthetics.

Whether you're outfitting a startup's first office or renovating a corporate headquarters, specifying fabrics for a hospital waiting room or a co-working space, our commercial collection delivers the performance specifications commercial projects require with the design options that make spaces worth inhabiting.
```

**Key Considerations:**
```
• Contract-grade durability for high-traffic areas
• Fire safety compliance for commercial spaces
• Easy cleaning for maintenance teams
• Consistent quality for large-scale orders
• Professional aesthetics across varied environments
• Extended warranties for commercial applications
• Wide colour range for brand coordination
```

**We Serve:**
```
Corporate Offices | Co-Working Spaces | Cafeterias | Waiting Areas | Healthcare Facilities | Educational Institutions | Retail Environments | Public Libraries | Government Buildings | Transportation Hubs
```

**Featured Collections:**
```
Indoor Upholstery | Drapery | Leatherette & PU | Blackouts & Dim-Outs
```

---

#### Client Categories Section

**Section Heading:**
```
We Partner With
```

**Client Types:**
```
Furniture Manufacturers — From production lines to custom workshops, we supply the fabrics that define furniture quality.

Architects — Specifying materials for projects from boutique residences to landmark hotels.

Interior Designers — Creating cohesive textile stories across residential and commercial projects.

Hospitality Groups — Outfitting hotels, resorts, and restaurants with performance textiles that maintain luxury through heavy use.

Retailers & Wholesalers — Providing inventory that meets the demands of design-focused customers.

Procurement Professionals — Sourcing quality textiles for large-scale commercial and institutional projects.
```

---

#### Project Inquiry CTA Section

**Heading:**
```
Discuss Your Project
```

**Body Copy:**
```
Whatever your application — hospitality, residential, outdoor, marine, commercial, or something we haven't covered — S-TEX has the expertise and the textiles to support your vision. Let's talk about your project and find the right fabric solutions together.
```

**Primary CTA:** `Discuss Your Project →`

**Secondary CTA:** `Request Samples`

---

### 9.5 Why S-TEX Page Copy

#### Hero Section

**Primary Headline:**
```
Why S-TEX
```

**Subheadline:**
```
What sets us apart in a world of textiles.
```

---

#### Pioneer Credentials Section

**Section Heading:**
```
Pioneering Performance in India
```

**Introduction:**
```
S-TEX doesn't follow the market — we define it. Our track record of industry firsts demonstrates our commitment to bringing world-class textile innovation to India.
```

**Pioneer Credential 1:**
```
First in India
Jacquard Blackouts and Dim-Outs in Widths up to 114"

When we introduced jacquard blackout fabrics to India, we didn't just bring a new product — we created a new category. Previously, architects and designers choosing blackout fabrics had to accept aesthetic limitations. Our jacquard blackouts proved that complete light control could come wrapped in beautiful design.

The 114" width capability was equally revolutionary. Wide windows and seamless installations that previously required imported fabrics could now be achieved with domestically manufactured textiles meeting international quality standards.
```

**Pioneer Credential 2:**
```
First in India
100% PU Indoor and Outdoor Leatherettes

Traditional leatherette had a problem: it was designed for indoors. Bring it outside, and UV damage, water exposure, and temperature fluctuations would quickly degrade the material. S-TEX developed India's first 100% PU leatherette specifically engineered for both indoor and outdoor use.

This wasn't a minor product variation — it was a fundamental rethinking of what leatherette could be. Our 100% PU construction means no fabric backing to absorb water, no delamination from UV exposure, no compromises for outdoor placement.
```

**Pioneer Credential 3:**
```
First in India
Outdoor Fabrics with Quality Assurance and Guarantees of 2000+ Hours Under UV

Claims about outdoor performance are easy to make. Guarantees backed by testing are another matter entirely. S-TEX was first in India to offer outdoor fabrics with a verified 2000+ hour UV guarantee — a promise backed by rigorous testing that simulates years of sun exposure.

This guarantee changed the conversation about outdoor fabrics in India. Instead of hoping for durability, specifiers could count on it.
```

---

#### Global Partnerships Section

**Section Heading:**
```
Trusted by Global Leaders
```

**Introduction:**
```
Our relationships with the world's leading home furnishing brands aren't just transactions — they're partnerships built on consistent quality, reliable delivery, and design excellence.
```

**Body Copy:**
```
When brands like Crate and Barrel, Pottery Barn, West Elm, Dillard's, and Anthropologie source from S-TEX, they're choosing a partner who understands the standards their customers expect. These aren't occasional orders — they're ongoing relationships built on years of consistent delivery.

What do these partnerships mean for you? They mean that when you specify S-TEX fabrics, you're choosing textiles that meet the same quality standards demanded by the world's most discerning retailers. They mean manufacturing processes refined through years of serving demanding clients. They mean a quality culture that doesn't distinguish between export and domestic orders.

Our global partnerships don't make us special — they make us better. Better at quality control. Better at design development. Better at meeting demanding specifications. And all of that "better" benefits every client we serve.
```

**Partner Logos:**
```
Crate and Barrel | Pottery Barn | West Elm | Dillard's | Anthropologie

...and leading furniture manufacturers, architects, interior designers, and hospitality groups worldwide.
```

---

#### Design Excellence Section

**Section Heading:**
```
Design That Serves
```

**Body Copy:**
```
With our design team based in the USA and manufacturing excellence rooted in India, S-TEX offers the best of both worlds. We don't just follow trends — we interpret global design movements through the lens of performance and practicality.

Our collection of timeless, updated classics and authentic reproductions provides a unique look and feel — an unmatched combination of inspired design and unparalleled quality. But beautiful design without performance is just decoration. At S-TEX, every aesthetic choice is validated against practical demands.

Each season brings a wealth of new ideas culled from our partnerships with mills across the globe, allowing us to showcase unique products, passion, and vision. Our design team doesn't work in isolation — they collaborate with architects, designers, and hospitality professionals to understand what's needed, not just what's trending.
```

**Design Philosophy:**
```
Trend-Aware, Not Trend-Dependent

We follow global design movements, but we don't chase every passing trend. Our collections balance timeless appeal with contemporary relevance — fabrics that feel current today and won't feel dated tomorrow.

Performance-Validated Aesthetics

A beautiful fabric that doesn't perform is a failed fabric. Every design decision at S-TEX is validated against practical requirements. Colour choices consider colorfastness. Pattern scales consider furniture dimensions. Texture choices consider maintenance realities.

Global Inspiration, Local Relevance

Our USA design team ensures international design sensibility. Our Indian manufacturing heritage ensures relevance for the markets we serve. The combination delivers collections that resonate globally while meeting local needs.
```

---

#### Manufacturing Heritage Section

**Section Heading:**
```
20+ Years of Manufacturing Excellence
```

**Body Copy:**
```
Our facilities in Kerala and Tamil Nadu have been weaving quality fabric since 2001. This isn't just experience — it's institutional knowledge, refined processes, and relationships with the finest yarn suppliers. Every meter of S-TEX fabric carries forward this legacy.

Twenty years of manufacturing means twenty years of learning. Twenty years of refining quality control processes. Twenty years of building relationships with premium yarn suppliers. Twenty years of training craftspeople who understand that quality is non-negotiable. Twenty years of investment in equipment and technology.

When you specify S-TEX, you're not just getting fabric — you're getting the accumulated expertise of two decades of textile manufacturing. The knowledge of what works and what doesn't. The relationships that ensure consistent raw material quality. The processes that catch problems before they become your problems.
```

**Manufacturing Highlights:**
```
• State-of-the-art weaving technology integrated with traditional expertise
• In-house quality control at every production stage
• Direct sourcing relationships with premium yarn suppliers
• ISO-certified manufacturing processes
• Continuous investment in equipment and training
• Sustainable production method development
• Capacity to serve both sample orders and production runs
```

---

#### Quality Assurance Section

**Section Heading:**
```
Uncompromising Quality
```

**Introduction:**
```
Quality at S-TEX isn't a department — it's a culture. From raw material selection to final inspection, every step of our process is designed to ensure the textiles you receive exceed your expectations.
```

**Quality Commitments:**

```
Rigorous UV Testing for Outdoor Fabrics
Our 2000+ hour UV guarantee isn't marketing — it's backed by accelerated weathering tests that simulate years of sun exposure. We test so you don't have to guess.

Colorfastness to International Standards
Colours that fade are colours that fail. Our testing ensures that S-TEX fabrics maintain their appearance through exposure to light, washing, and wear — meeting and exceeding international colorfastness standards.

Abrasion and Durability Testing for Contract Applications
Contract environments demand contract-grade durability. Our fabrics are tested to Martindale and Wyzenbeek standards, ensuring they can handle the demands of high-traffic commercial applications.

Fire Safety Compliance for Hospitality Specifications
Hotels and hospitality spaces have strict fire safety requirements. Our hospitality-grade fabrics meet the relevant fire safety standards, providing the documentation your projects require.

Batch-to-Batch Consistency
Colour matching across orders is essential for large projects. Our quality control processes ensure consistency between production runs, so the fabric you receive matches the fabric you approved.
```

---

#### Partnership Approach Section

**Section Heading:**
```
More Than a Supplier
```

**Body Copy:**
```
At S-TEX, we believe in partnership over transaction. Our team brings deep product knowledge, informed suggestions, and a genuine commitment to seeing your design vision realized. From fabric selection to technical specifications, we're invested in your project's success.

What does partnership mean in practice? It means our team takes time to understand your project before making recommendations. It means we proactively identify potential issues — fabric choices that might not perform in your specific application, specifications that could be optimized, alternatives that might serve you better.

It means we answer questions honestly — even when the honest answer is that a different fabric might be a better choice. It means we consider your long-term success, not just the immediate order. It means we measure ourselves by your project outcomes, not just our sales volume.
```

**Partnership Promise:**
```
Expert Consultation
Our team includes specialists who understand fabrics at the technical level. We can discuss yarn construction, weave patterns, performance characteristics, and application suitability with the depth your projects deserve.

Design Collaboration
Need help selecting fabrics for a complex project? Our team can review your specifications and suggest options you might not have considered — coordinating colours, alternative textures, performance upgrades.

Technical Support
From technical data sheets to installation recommendations, we provide the documentation and guidance your projects require. When questions arise, we're here to help find answers.

Sample Support
Fabric decisions require tactile experience. Our sample program ensures you and your clients can experience S-TEX quality before committing — because photographs only tell part of the story.

Project Continuity
For ongoing projects and repeat orders, we maintain records that ensure consistency. Same colours. Same specifications. Same quality. Order after order.
```

---

#### Final CTA Section

**Heading:**
```
Partner With Us
```

**Body Copy:**
```
Ready to experience the S-TEX difference? Whether you're specifying fabrics for a landmark project, seeking a reliable textile partner for ongoing production, or simply exploring what's possible in performance textiles — we're ready to start the conversation.
```

**Primary CTA:** `Partner With Us →`

**Secondary CTA:** `Request Samples`

---

### 9.6 Contact Page Copy

#### Hero Section

**Primary Headline:**
```
Let's Connect
```

**Subheadline:**
```
Whether you're an architect seeking the perfect fabric, a hospitality group planning a major project, or a designer with a vision — we're here to help.
```

---

#### Contact Introduction

**Body Copy:**
```
Every great textile partnership starts with a conversation. Tell us about your project, your challenges, and your vision. Our team will respond promptly with insights, recommendations, and next steps tailored to your specific needs.
```

---

#### Contact Form Section

**Section Heading:**
```
Get In Touch
```

**Form Introduction:**
```
Complete the form below and a member of our team will respond within one business day. For urgent inquiries, please call our studio directly.
```

**Form Field Labels & Placeholder Text:**

```
Full Name *
Placeholder: "Your full name"

Email Address *
Placeholder: "your@email.com"

Phone Number *
Placeholder: "+91 98XXX XXXXX"
Helper Text: "Include country code for international numbers"

Company / Organization *
Placeholder: "Your company or organization name"

I am a... *
Dropdown Options:
- Architect
- Interior Designer
- Furniture Manufacturer
- Hospitality Professional
- Procurement Manager
- Retailer / Wholesaler
- Other

Project Type *
Dropdown Options:
- Residential
- Hospitality
- Commercial / Corporate
- Marine
- Outdoor / Poolside
- Shading / Awnings
- Multiple / Mixed Use
- Other / General Inquiry

Preferred Contact Method
Radio Options:
- Email
- Phone
- Either

How did you hear about S-TEX?
Dropdown Options:
- Web Search
- Industry Referral
- Trade Show / Exhibition
- Social Media
- Existing Client
- Other

Message *
Placeholder: "Tell us about your project, timeline, and any specific requirements. The more detail you provide, the better we can assist."

Submit Button: "Send Inquiry"
```

**Form Validation Messages:**
```
Success: "Thank you for your inquiry. A member of our team will respond within one business day."

Error: "There was an issue submitting your inquiry. Please try again or contact us directly at +91 80 4166 3631."

Required Field: "This field is required"

Invalid Email: "Please enter a valid email address"

Invalid Phone: "Please enter a valid phone number with country code"
```

---

#### Studio Location Section

**Section Heading:**
```
Visit Our Studio
```

**Studio Name:**
```
S-TEX Studio — Bangalore
```

**Address:**
```
#702, PAMA Arcade
3rd Cross, 1st Block
HRBR Layout, Kalyan Nagar
Bangalore, Karnataka 560043
India
```

**Description:**
```
Experience our complete collection in person. Our Bangalore studio showcases the full range of S-TEX fabrics, leatherettes, and performance textiles — a tactile library where you can feel the weight, see the colours in natural light, and understand the quality that sets S-TEX apart.

Whether you're beginning a new project or seeking specific samples, our studio team is ready to assist. We encourage appointments to ensure we can dedicate focused attention to your needs, though walk-in visitors are always welcome during business hours.
```

**CTA:** `Schedule a Studio Visit`

---

#### Direct Contact Section

**Section Heading:**
```
Direct Contact
```

**Phone Numbers:**
```
Direct Line: +91 80 4166 3631
Office: +91 80 4161 5159
```

**Email:**
```
General Inquiries: info@stex.co.in
```

**Response Time:**
```
We respond to all inquiries within one business day. For urgent matters, please call our direct line during business hours.
```

---

#### Business Hours Section

**Section Heading:**
```
Business Hours
```

**Hours:**
```
Monday – Saturday: 10:00 AM – 7:00 PM IST
Sunday: By Appointment Only
```

**Note:**
```
Our studio observes Indian national holidays. For visits during holiday periods, please call ahead to confirm availability.
```

---

#### Additional Contact Options Section

**Section Heading:**
```
Other Ways to Connect
```

**WhatsApp:**
```
For quick questions or sample requests, reach us on WhatsApp at +91 80 4166 3631. We typically respond within a few hours during business hours.
```

**LinkedIn:**
```
Follow S-TEX on LinkedIn for industry insights, new collection announcements, and company updates.
[LinkedIn Button]
```

---

#### Map Section

**Map Caption:**
```
S-TEX Studio, HRBR Layout, Bangalore — easily accessible from Kalyan Nagar and Hennur Road.
```

**Directions Text:**
```
Located in the PAMA Arcade complex, our studio is easily accessible from major routes including Hennur Road and Outer Ring Road. Parking is available in the building complex. For detailed directions from your location, click the map above.
```

---

#### FAQ Section (Optional for Contact Page)

**Section Heading:**
```
Frequently Asked Questions
```

**FAQ 1:**
```
Q: How do I request samples?
A: Submit an inquiry through this form indicating the collections you're interested in, or call our studio directly. For registered trade professionals, we offer a complimentary sample program. Retail sample kits are available for purchase.
```

**FAQ 2:**
```
Q: What is your minimum order quantity?
A: Minimum order quantities vary by fabric type and application. For custom orders and production runs, please contact us to discuss your specific requirements. Sample orders and small-scale projects are welcome.
```

**FAQ 3:**
```
Q: Do you ship internationally?
A: Yes, we regularly export to the USA, Europe, Japan, the Middle East, and other markets. International shipping, documentation, and customs requirements are handled by our experienced export team.
```

**FAQ 4:**
```
Q: Can I visit your manufacturing facilities?
A: We welcome facility visits from trade partners and serious inquirers. Please contact us to arrange a visit to our manufacturing facilities in Kerala or Tamil Nadu.
```

**FAQ 5:**
```
Q: Do you offer custom fabric development?
A: Yes, for substantial orders, we offer custom colour matching, pattern development, and exclusive fabric development. Please contact us to discuss your custom requirements.
```

---

### 9.7 Global UI Copy

#### Navigation Labels

```
Home
About Us
Our Collections
Applications
Why S-TEX
Contact
```

#### Dropdown: Collections
```
Indoor Upholstery Fabrics
Drapery & Curtain Fabrics
Jacquard Blackouts & Dim-Outs
Outdoor Performance Fabrics
Leatherette & PU Collection
Cushion & Pillow Fabrics
View All Collections
```

#### Dropdown: Applications
```
Hospitality
Residential Luxury
Outdoor & Poolside
Marine
Shades & Awnings
Corporate & Commercial
View All Applications
```

#### CTA Button Variations
```
Primary CTAs:
- Get in Touch
- Request Samples
- Explore Collections
- Partner With Us
- Send Inquiry
- Schedule a Studio Visit

Secondary CTAs:
- Learn More →
- View Collection →
- Discover Our Story →
- See Applications →
- Contact Us →
```

#### Footer Copy

**Brand Column:**
```
S-TEX
Crafting Excellence. Defining Performance.

India's pioneer in luxury performance textiles since 2001. From our manufacturing facilities in South India to living spaces across the world.
```

**Copyright:**
```
© 2025 S-TEX. All Rights Reserved.
```

**Legal Links:**
```
Privacy Policy | Terms of Service
```

---

### 9.8 Meta Descriptions & SEO Copy

#### Home Page
```
Title: S-TEX | India's Premier Luxury Performance Textiles
Description: Where Heritage Meets Performance. India's pioneer in luxury outdoor fabrics, jacquard blackouts, and performance textiles since 2001. Trusted by Crate and Barrel, Pottery Barn, and West Elm. B2B inquiries welcome.
```

#### About Us
```
Title: About S-TEX | 20+ Years of Textile Excellence Since 2001
Description: Founded by Mr. Srinith Sreedharan, S-TEX has grown from South India manufacturing roots to a global textile house. Discover our story, our heritage, and our commitment to performance textiles.
```

#### Our Collections
```
Title: Premium Fabric Collections | S-TEX Performance Textiles India
Description: Explore S-TEX curated collections: Indoor Upholstery, Drapery, Jacquard Blackouts (up to 114"), Outdoor Performance Fabrics (2000+ UV hours), 100% PU Leatherette, and Cushion Fabrics.
```

#### Applications
```
Title: Textile Applications | Hospitality, Residential, Marine & More | S-TEX
Description: S-TEX performance textiles for every industry: luxury hospitality, residential interiors, poolside & outdoor, marine applications, shade structures, and corporate spaces. B2B solutions.
```

#### Why S-TEX
```
Title: Why Choose S-TEX | India's Pioneer Performance Textile Manufacturer
Description: Pioneer innovations: India's first jacquard blackouts, 100% PU leatherettes, 2000+ UV hour outdoor fabrics. Global partnerships with Pottery Barn, Crate and Barrel. 20+ years of excellence.
```

#### Contact
```
Title: Contact S-TEX | Bangalore Studio | B2B Textile Inquiries
Description: Connect with S-TEX for premium performance textile inquiries. Visit our Bangalore studio or request samples. Serving architects, interior designers, hospitality groups, and furniture manufacturers.
```

---

### 9.9 Email Templates Copy

#### User Confirmation Email

**Subject Line:**
```
Thank You for Contacting S-TEX
```

**Email Body:**
```
Dear [First Name],

Thank you for reaching out to S-TEX. We've received your inquiry and a member of our team will respond within one business day.

Your Inquiry Details:
- Project Type: [Project Type]
- Submitted: [Date/Time]

While you wait, you might find these resources helpful:
- Explore Our Collections: [Link]
- View Our Story: [Link]
- Download Our Catalog: [Link]

If your inquiry is urgent, please call our studio directly at +91 80 4166 3631.

We look forward to discussing how S-TEX can support your project.

Warm regards,

The S-TEX Team

---

S-TEX | Crafting Excellence. Defining Performance.
#702, PAMA Arcade, HRBR Layout, Bangalore 560043
+91 80 4166 3631 | info@stex.co.in
www.stex.co.in
```

#### Team Notification Email

**Subject Line:**
```
New Inquiry: [Project Type] from [Company Name]
```

**Email Body:**
```
NEW INQUIRY RECEIVED

Contact Information:
- Name: [Full Name]
- Company: [Company Name]
- Role: [Role]
- Email: [Email]
- Phone: [Phone]
- Preferred Contact: [Method]

Project Details:
- Type: [Project Type]
- Source: [How they heard about us]

Message:
[Full Message]

---

Submitted: [Date/Time]
Source: Website Contact Form
```

---

### 9.10 Error Page Copy

#### 404 Page

**Headline:**
```
Page Not Found
```

**Body:**
```
The page you're looking for doesn't exist or has been moved. This might have happened because:

- The link you clicked is outdated
- The page has been moved or renamed
- There's a typo in the URL

Let's get you back on track:
```

**CTAs:**
```
Go to Homepage | Explore Collections | Contact Us
```

#### 500 Page

**Headline:**
```
Something Went Wrong
```

**Body:**
```
We're experiencing technical difficulties. Our team has been notified and is working to resolve the issue.

Please try again in a few moments, or contact us directly:

Phone: +91 80 4166 3631
Email: info@stex.co.in
```

**CTA:**
```
Try Again | Go to Homepage
```

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | December 2024 | GlitchZero | Initial PRD creation |
| 1.1 | December 2024 | GlitchZero | Added comprehensive website copy for all pages |

---

*This PRD is designed for consumption by both human developers and AI coding agents. All specifications are intended to be unambiguous and actionable. When in doubt, refer to the design system specifications and competitor references for guidance.*
</PRD>
