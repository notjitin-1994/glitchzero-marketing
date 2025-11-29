import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rakesh',
    company: "Rocky's Fruit Cafe",
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-1')?.imageUrl || 'https://picsum.photos/seed/1/100/100',
    testimonial: 'GlitchZero built an app that doubled our online orders in three months. Their team understood our needs perfectly and delivered beyond our expectations. Truly a game-changer for our small cafe.'
  },
  {
    name: 'Megha Sreekumar',
    company: 'SmartSlate',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-2')?.imageUrl || 'https://picsum.photos/seed/2/100/100',
    testimonial: 'The website they developed is not only beautiful but also incredibly fast. Our user engagement has gone up by 40%. The WhatsApp support is a lifesaver for quick queries.'
  },
  {
    name: 'Sid S',
    company: 'Stex',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-3')?.imageUrl || 'https://picsum.photos/seed/3/100/100',
    testimonial: 'As a startup, we needed a reliable tech partner who could be flexible and affordable. GlitchZero delivered a secure and scalable platform that has been crucial for our growth.'
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
        
        <div className="text-center mb-20">
          <span className="typo-tech text-signal text-xs">Trusted By</span>
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Partners in Growth</h2>
          <p className="typo-subhead text-tungsten max-w-2xl mx-auto mt-4">We're proud to have helped businesses across India achieve their digital goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-obsidian border border-tungsten/10 p-8 rounded-sm flex flex-col">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="typo-body text-tungsten flex-grow">"{item.testimonial}"</p>
              <div className="flex items-center gap-4 mt-8">
                <Image 
                  src={item.avatar} 
                  alt={`Portrait of ${item.name}`} 
                  width={40} 
                  height={40} 
                  className="rounded-full object-cover" 
                  data-ai-hint="person portrait"
                />
                <div>
                  <h4 className="typo-subhead text-platinum">{item.name}</h4>
                  <p className="typo-tech text-xs text-tungsten">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-around items-center flex-wrap gap-8 md:gap-12 opacity-40">
          {clients.map((client, index) => (
            <div key={index} className="typo-headline text-lg md:text-xl text-tungsten text-center filter grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              {client.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
