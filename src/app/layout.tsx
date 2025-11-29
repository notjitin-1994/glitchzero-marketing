import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ClientLayout } from '@/components/ui/client-layout';

export const metadata: Metadata = {
  metadataBase: new URL('https://glitchzero.dev'),
  title: {
    default: 'GlitchZero | Zero Glitches. Infinite Possibilities.',
    template: `%s | GlitchZero`,
  },
  description:
    'Build your dream app with GlitchZero. Custom web & mobile solutions for Indian businesses - from idea to launch in weeks, not months. AI-powered development, pixel-perfect design, zero bugs.',
  keywords: [
    'Web Development India',
    'Mobile App Development India',
    'Small Business Websites',
    'E-commerce Solutions',
    'Custom Software India',
    'React Development',
    'Next.js Development',
    'AI-powered development',
  ],
  authors: [{ name: 'GlitchZero', url: 'https://glitchzero.dev' }],
  creator: 'GlitchZero',
  openGraph: {
    title: 'GlitchZero | Zero Glitches. Infinite Possibilities.',
    description: 'Build your dream app with GlitchZero. Custom web & mobile solutions for Indian businesses - from idea to launch in weeks, not months.',
    url: 'https://glitchzero.dev',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
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
