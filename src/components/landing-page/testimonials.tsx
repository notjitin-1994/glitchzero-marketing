'use client';

import { User, Star } from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem, ScaleIn } from '@/components/ui/fade-in-section';

const testimonials = [
  {
    name: 'Rakesh',
    company: "Rocky's Fruit Cafe",
    headline: "Reduced Waste by 30% & Scaled to 5,000+ Daily Transactions",
    testimonial: "GlitchZero didn't just build software; they solved our operational bottlenecks. Their inventory system handles massive volume across multiple locations seamlessly. They understand business operations as well as they understand code."
  },
  {
    name: 'Megha Sreekumar',
    company: 'SmartSlate',
    headline: "Architected for 300% Growth in One Quarter",
    testimonial: "Scaling an EdTech platform requires zero latency and high reliability. GlitchZero delivered a compliant, robust architecture that handled our surge to 10,000+ daily students without a hitch."
  },
  {
    name: 'Sid S',
    company: 'Stex',
    headline: "Saved 200+ Hours Monthly via Automation",
    testimonial: "We engaged GlitchZero for a complete digital transformation. They integrated legacy systems with modern ERPs, saving us hundreds of man-hours. Truly a partner invested in our efficiency."
  }
]

const clients = [
  { name: "Rocky's Fruit Cafe" },
  { name: 'SmartSlate' },
  { name: 'Stex' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-10 px-6 bg-carbon border-y border-obsidian/50">
      <div className="max-w-7xl mx-auto">

        <FadeInSection direction="up" className="text-center mb-10 md:mb-10">
          <span className="typo-tech text-signal text-xs">Real Engineering. Tangible ROI.</span>
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Trusted by Companies Building the Future</h2>
          <p className="typo-subhead text-tungsten max-w-2xl mx-auto mt-4">From AI-powered platforms to enterprise management systems—our clients trust us to engineer products that drive real business outcomes.</p>
        </FadeInSection>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {testimonials.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-obsidian border border-tungsten/10 p-8 rounded-sm flex flex-col h-full">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <h4 className="typo-subhead text-platinum text-lg mb-3 leading-tight min-h-[3.5rem]">{item.headline}</h4>
                <p className="typo-body text-tungsten flex-grow mb-6">"{item.testimonial}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-carbon border border-tungsten/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-tungsten" />
                  </div>
                  <div>
                    <h4 className="typo-subhead text-platinum">{item.name}</h4>
                    <p className="typo-tech text-xs text-tungsten">{item.company}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInSection delay={0.3} direction="up">
          <div className="flex justify-around items-center flex-wrap gap-8 md:gap-12 opacity-40">
            {clients.map((client, index) => (
              <div key={index} className="typo-headline text-lg md:text-xl text-tungsten text-center filter grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                {client.name}
              </div>
            ))}
          </div>
        </FadeInSection>

      </div>
    </section>
  )
}
