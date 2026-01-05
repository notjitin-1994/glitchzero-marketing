'use client';

import { StaggerContainer, StaggerItem } from '@/components/ui/fade-in-section';

const metrics = [
  { value: '8-12 Weeks', label: 'Concept to Enterprise Launch' },
  { value: '300%', label: 'Proven Growth Capacity' },
  { value: '99.9%', label: 'Enterprise-Grade Uptime' },
  { value: '60%', label: 'Faster Time-to-Revenue' },
];

export function Metrics() {
  return (
    <section className="border-y border-carbon bg-obsidian">
      <StaggerContainer staggerDelay={0.1} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-carbon">
        {metrics.map((metric, index) => (
          <StaggerItem key={index} direction="up">
            <div className="p-4 text-center group hover:bg-carbon/50 transition-colors">
              <div className="typo-headline text-3xl text-platinum group-hover:text-signal transition-colors">{metric.value}</div>
              <div className="typo-tech text-xs text-tungsten mt-2">{metric.label}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
