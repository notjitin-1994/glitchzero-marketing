import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ClientLayout } from '@/components/ui/client-layout';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FF4F00' },
    { media: '(prefers-color-scheme: dark)', color: '#FF4F00' },
  ],
};

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
