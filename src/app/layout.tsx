import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://glitchzero.dev'),
  title: {
    default: 'GlitchZero | Digital Solutions for Indian Businesses',
    template: `%s | GlitchZero`,
  },
  description:
    'Custom web and mobile applications for small businesses in India. We turn your vision into reality with bespoke digital solutions, delivered at speed.',
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
    title: 'GlitchZero | Digital Solutions for Indian Businesses',
    description: 'Custom web and mobile applications for small businesses in India, delivered at speed.',
    url: 'https://glitchzero.dev',
    siteName: 'GlitchZero',
    images: [
      {
        url: '/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlitchZero | Digital Solutions for Indian Businesses',
    description: 'Custom web and mobile applications for small businesses in India, delivered at speed.',
    images: ['/og-image.png'], // Must be an absolute URL
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
          {children}
          <Toaster />
      </body>
    </html>
  );
}
