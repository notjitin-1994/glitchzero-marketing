import {
  Globe,
  AppWindow,
  MonitorSmartphone,
  Smartphone,
  Cpu,
} from 'lucide-react';

const services = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Modern Websites',
    description:
      "A website is your digital storefront. We build ultra-fast, mobile-first websites that look stunning and rank high on Google. Our AI-accelerated process means we can go from design to deployment in days, not months, giving you a professional online presence that converts visitors into customers.",
    features: [
      'Rapid design & deployment',
      'SEO optimized from day one',
      'Mobile-first and responsive',
      'Instant-loading pages',
    ],
  },
  {
    id: 'web-apps',
    icon: AppWindow,
    title: 'Custom Web Apps',
    description:
      'From complex e-commerce platforms to internal business dashboards, we build powerful web applications tailored to your exact needs. Our modular, AI-assisted framework allows for rapid feature development and scalable architecture, ensuring your application grows with your business.',
    features: [
      'E-commerce & payment integration',
      'Customer portals & dashboards',
      'Scalable and secure cloud architecture',
      'Real-time data synchronization',
    ],
  },
  {
    id: 'desktop-apps',
    icon: MonitorSmartphone,
    title: 'Desktop & Computer Apps',
    description:
      'Streamline your operations with custom desktop software for Windows and macOS. We rapidly develop applications for inventory management, point-of-sale (POS) systems, billing, and more. Our cross-platform expertise ensures a consistent, high-performance experience for your team.',
    features: [
      'Windows & macOS compatibility',
      'Offline-first functionality',
      'Custom inventory & billing systems',
      'High-speed, native performance',
    ],
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile & Tablet Apps',
    description:
      "Launch your brand on the Google Play Store and Apple App Store. We develop beautiful, intuitive, and high-performance apps for Android and iOS. By using unified codebases and AI-powered testing, we reduce development time and cost, getting your app into your customers' hands faster.",
    features: [
      'Android & iOS development',
      'Play Store & App Store submission',
      'Push notifications & engagement tools',
      'Seamless user experience (UX)',
    ],
  },
  {
    id: 'iot-apps',
    icon: Cpu,
    title: 'IoT & Embedded Systems',
    description:
      'Venture into the future with connected devices. We build software for IoT and embedded systems, enabling you to create smart products and automate processes. Our expertise in efficient code and secure communication protocols allows for rapid prototyping and reliable deployment of your IoT vision.',
    features: [
      'Hardware-software integration',
      'Real-time data monitoring',
      'Secure device communication',
      'Firmware and software development',
    ],
  },
];

export function ServicesDetails() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start scroll-mt-24"
            >
              <div className="md:col-span-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-carbon flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-signal" />
                  </div>
                  <h3 className="typo-headline text-xl text-platinum">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="typo-body text-tungsten leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-signal rounded-full shrink-0"></div>
                      <span className="typo-subhead text-platinum text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
