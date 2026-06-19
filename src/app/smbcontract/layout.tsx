import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Contract | GlitchZero Labs',
  description: 'Review and accept the fixed-scope service agreement for your Digital Storefront project with GlitchZero Labs.',
  openGraph: {
    title: 'Service Contract | GlitchZero Labs',
    description: 'Review and accept the fixed-scope service agreement for your Digital Storefront project with GlitchZero Labs.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Contract | GlitchZero Labs',
    description: 'Review and accept the fixed-scope service agreement for your Digital Storefront project with GlitchZero Labs.',
  },
};

export default function SmbContractLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
