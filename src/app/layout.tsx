import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ClientLayout } from '@/components/ui/client-layout';

export const metadata: Metadata = {
  metadataBase: new URL('https://glitchzerolabs.com'),
  title: {
    default: 'GlitchZero | Zero Glitches. Infinite Possibilities.',
    template: `%s | GlitchZero`,
  },
  description:
    'Product engineering for India\'s growth-stage companies. We build scalable digital platforms combining startup speed with enterprise-grade architecture. From MVP to market leader in 8-12 weeks.',
  keywords: [
    'Product Engineering India',
    'Enterprise App Development India',
    'Growth-Stage Startup Solutions',
    'Scalable Platform Development',
    'Custom Software India',
    'React Development',
    'Next.js Development',
    'AI-powered development',
  ],
  authors: [{ name: 'GlitchZero', url: 'https://glitchzerolabs.com' }],
  creator: 'GlitchZero',
  icons: {
    icon: [
      { url: '/glitchzero-logo.png', sizes: '500x500', type: 'image/png' },
    ],
    apple: [
      { url: '/glitchzero-logo.png', sizes: '500x500', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'GlitchZero | Zero Glitches. Infinite Possibilities.',
    description: 'Build your dream app with GlitchZero. Custom web & mobile solutions for Indian businesses - from idea to launch in weeks, not months.',
    url: 'https://glitchzerolabs.com',
    siteName: 'GlitchZero',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlitchZero | Zero Glitches. Infinite Possibilities.',
    description: 'Build your dream app with GlitchZero. Custom web & mobile solutions for Indian businesses - from idea to launch in weeks, not months.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: '#FF4F00',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Static title and favicon - loads before React hydration */}
        <title>GlitchZero | Zero Glitches. Infinite Possibilities.</title>
        <meta name="description" content="Build your dream app with GlitchZero. Custom web & mobile solutions for Indian businesses - from idea to launch in weeks, not months." />
        <link rel="icon" href="/glitchzero-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/glitchzero-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/glitchzero-logo.png" />

        {/* OG tags for social sharing - must be static HTML for crawlers */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glitchzerolabs.com" />
        <meta property="og:title" content="GlitchZero | Zero Glitches. Infinite Possibilities." />
        <meta property="og:description" content="Build your dream app with GlitchZero. Custom web & mobile solutions for Indian businesses - from idea to launch in weeks, not months." />
        <meta property="og:image" content="https://glitchzerolabs.com/opengraph-image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="GlitchZero" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GlitchZero | Zero Glitches. Infinite Possibilities." />
        <meta name="twitter:description" content="Build your dream app with GlitchZero. Custom web & mobile solutions for Indian businesses - from idea to launch in weeks, not months." />
        <meta name="twitter:image" content="https://glitchzerolabs.com/opengraph-image" />

        {/* Font preloading and optimization for better FCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Preload critical fonts for faster initial render */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggexSg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn('antialiased min-h-screen flex flex-col relative selection:bg-signal selection:text-white', 'font-sans bg-obsidian text-platinum')}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
