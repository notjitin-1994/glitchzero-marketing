import { User, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rakesh',
    company: "Rocky's Fruit Cafe",
    testimonial: "I was amazed at how fast GlitchZero delivered our inventory and sales management app. What I thought would take months was done in weeks. It's streamlined our operations, cut down waste, and given us clear insights. Truly exceptional speed and quality."
  },
  {
    name: 'Megha Sreekumar',
    company: 'SmartSlate',
    testimonial: 'We needed to build our new AI-powered applications quickly to stay ahead. GlitchZero\'s speed and expertise are unmatched. They are building robust web and desktop apps for us at a pace that is pushing the boundaries of our industry.'
  },
  {
    name: 'Sid S',
    company: 'Stex',
    testimonial: "The team at GlitchZero delivered a fantastic website for us in no time. We're now working with them to build a complex factory management system and customer-facing apps for all platforms. Their ability to execute quickly across such a wide range of technologies is impressive."
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
          <p className="typo-subhead text-tungsten max-w-2xl mx-auto mt-4">We're proud to have helped businesses across India achieve their digital goals at record speed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-obsidian border border-tungsten/10 p-8 rounded-sm flex flex-col">
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
