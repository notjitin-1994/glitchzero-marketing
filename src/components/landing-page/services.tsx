import { Smartphone, Laptop, Globe } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 bg-carbon border-y border-obsidian/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="typo-tech text-signal text-xs">What We Do</span>
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Everything You Need to Grow</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-obsidian p-8 border border-transparent hover:border-signal/50 transition-all duration-300 relative overflow-hidden">
            <div className="w-12 h-12 bg-carbon flex items-center justify-center mb-6 group-hover:bg-signal transition-colors duration-300">
              <Smartphone className="w-6 h-6 text-platinum group-hover:text-obsidian" />
            </div>
            <h3 className="typo-headline text-xl text-platinum mb-4">Mobile Apps</h3>
            <p className="typo-body text-tungsten leading-relaxed">
              Get your own branded app on Play Store and App Store. Perfect for e-commerce, food delivery, or customer loyalty.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-signal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </div>

          <div className="group bg-obsidian p-8 border border-transparent hover:border-signal/50 transition-all duration-300 relative overflow-hidden">
            <div className="w-12 h-12 bg-carbon flex items-center justify-center mb-6 group-hover:bg-signal transition-colors duration-300">
              <Laptop className="w-6 h-6 text-platinum group-hover:text-obsidian" />
            </div>
            <h3 className="typo-headline text-xl text-platinum mb-4">Business Software</h3>
            <p className="typo-body text-tungsten leading-relaxed">
              Manage inventory, billing, and staff from your computer. We build simple software that works on Windows and Mac.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-signal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-75"></div>
          </div>

          <div className="group bg-obsidian p-8 border border-transparent hover:border-signal/50 transition-all duration-300 relative overflow-hidden">
            <div className="w-12 h-12 bg-carbon flex items-center justify-center mb-6 group-hover:bg-signal transition-colors duration-300">
              <Globe className="w-6 h-6 text-platinum group-hover:text-obsidian" />
            </div>
            <h3 className="typo-headline text-xl text-platinum mb-4">Modern Websites</h3>
            <p className="typo-body text-tungsten leading-relaxed">
              A professional website that loads fast on every mobile network. Showcase your products to the whole world.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-signal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
