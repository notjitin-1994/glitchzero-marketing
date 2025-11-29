'use client';

import { StaggerContainer, StaggerItem } from '@/components/ui/fade-in-section';

const metrics = [
  { value: '2 Weeks', label: 'Average Delivery Time' },
  { value: '100%', label: 'Mobile Friendly' },
  { value: '24/7', label: 'System Uptime' },
  { value: 'Zero', label: 'Tech Skills Needed' },
];

export function Metrics() {
  return (
    <section className="border-y border-carbon bg-obsidian">
      <StaggerContainer staggerDelay={0.1} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-carbon">
        {metrics.map((metric, index) => (
          <StaggerItem key={index} direction="up">
            <div className="p-8 text-center group hover:bg-carbon/50 transition-colors">
              <div className="typo-headline text-3xl text-platinum group-hover:text-signal transition-colors">{metric.value}</div>
              <div className="typo-tech text-xs text-tungsten mt-2">{metric.label}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
