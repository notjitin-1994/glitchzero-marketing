'use client';

import { User, Star } from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem, ScaleIn } from '@/components/ui/fade-in-section';

const testimonials = [
  {
    name: 'Rakesh',
    company: "Rocky's Fruit Cafe",
    testimonial: "GlitchZero built our inventory and sales management system in 3 weeks—helping us reduce waste by 30% and increase revenue visibility. Their system now handles 5,000+ transactions daily across our 3 locations. What impressed us most was their understanding of F&B operations and ability to deliver fast without cutting corners."
  },
  {
    name: 'Megha Sreekumar',
    company: 'SmartSlate',
    testimonial: 'GlitchZero engineered our AI-powered learning platform that now serves 10,000+ students daily. They understood the complexities of EdTech compliance and built a scalable architecture that handled our 300% user growth in the first quarter. Their technical depth and execution speed gave us the competitive edge we needed.'
  },
  {
    name: 'Sid S',
    company: 'Stex',
    testimonial: "We started with a website rebuild and were so impressed that we engaged GlitchZero for our entire digital transformation—including a factory management ERP and customer portal. They've integrated our legacy systems, automated workflows that saved us 200+ hours monthly, and built mobile apps for field teams. True engineering partners."
  }
]

const clients = [
  { name: "Rocky's Fruit Cafe" },
  { name: 'SmartSlate' },
  { name: 'Stex' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-carbon border-y border-obsidian/50">
      <div className="max-w-7xl mx-auto">

        <FadeInSection direction="up" className="text-center mb-16 md:mb-20">
          <span className="typo-tech text-signal text-xs">Trusted By</span>
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Trusted by Companies Building the Future</h2>
          <p className="typo-subhead text-tungsten max-w-2xl mx-auto mt-4">From AI-powered platforms to enterprise management systems—our clients trust us to engineer products that drive real business outcomes.</p>
        </FadeInSection>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-obsidian border border-tungsten/10 p-8 rounded-sm flex flex-col h-full">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="typo-body text-tungsten flex-grow">"{item.testimonial}"</p>
                <div className="flex items-center gap-4 mt-8">
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
