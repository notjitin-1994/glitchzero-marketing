import { Footer } from '@/components/landing-page/footer';
import { IotHero } from '@/components/service-pages/iot-hero';
import { IotFeatures } from '@/components/service-pages/iot-features';
import { ConsultationCta } from '@/components/service-pages/consultation-cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IoT & Embedded Systems | GlitchZero',
  description: 'End-to-end IoT development from firmware to cloud. Custom embedded systems, real-time monitoring, and intelligent automation for smart devices and industrial applications.',
  openGraph: {
    title: 'IoT & Embedded Systems | GlitchZero',
    description: 'End-to-end IoT development from firmware to cloud. Custom embedded systems, real-time monitoring, and intelligent automation.',
    type: 'website',
  },
  twitter: {
    title: 'IoT & Embedded Systems | GlitchZero',
    description: 'End-to-end IoT development from firmware to cloud. Custom embedded systems, real-time monitoring, and intelligent automation.',
  }
};

export default function IotPage() {
  return (
    <>
      <main>
        <IotHero />
        <IotFeatures />
        <ConsultationCta
          headline="Bring Your Hardware Vision to Life"
          subheadline="Whether you're prototyping a new product or scaling an existing system, we'll help you navigate the complexities of IoT development."
          benefits={[
            'Free feasibility assessment',
            'Hardware recommendations',
            'Proof-of-concept development',
            'Full stack expertise',
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
