import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Store, Wifi, TrendingUp, CheckCircle2, Smartphone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-carbon/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-3 bg-carbon border border-tungsten/20 px-3 py-1.5 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-terminal animate-pulse"></span>
            <span className="typo-tech text-xs text-tungsten">Average Project Delivery: 2 Weeks</span>
          </div>

          <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
            Your Custom App, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">50% Faster.</span><br/>
          </h1>

          <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
            Why wait months? We build and launch high-quality custom apps and websites for your Indian business at least 50% faster than the industry average. No technical knowledge required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-signal text-obsidian px-8 py-4 typo-headline text-sm hover:bg-white hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,79,0,0.4)]">
              Start Building Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-tungsten/30 text-platinum px-8 py-4 typo-headline text-sm hover:bg-carbon hover:border-platinum transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>
          
          <div className="relative bg-obsidian border border-carbon rounded-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-carbon pb-4">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                    <Store className="w-4 h-4 text-platinum" />
                 </div>
                 <div>
                    <span className="typo-subhead text-sm text-platinum block">Your Business App</span>
                    <span className="typo-tech text-[10px] text-terminal">● Live</span>
                 </div>
              </div>
              <Wifi className="w-4 h-4 text-tungsten" />
            </div>

            <div className="space-y-4">
              <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                <span className="typo-tech text-xs text-tungsten">Today's Sales</span>
                <div className="flex items-end justify-between mt-1">
                  <span className="typo-headline text-2xl text-platinum">₹24,500</span>
                  <span className="text-terminal text-xs flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +12%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                  <span className="typo-tech text-xs text-tungsten">New Orders</span>
                  <div className="typo-headline text-xl text-platinum mt-1">42</div>
                </div>
                <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                  <span className="typo-tech text-xs text-tungsten">Customers</span>
                  <div className="typo-headline text-xl text-platinum mt-1">1.2k</div>
                </div>
              </div>

              <div className="flex gap-3 items-center bg-terminal/10 p-3 rounded border border-terminal/20 mt-4">
                <CheckCircle2 className="w-4 h-4 text-terminal" />
                <span className="text-terminal text-sm font-medium">Payment Received: ₹1,500</span>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl hidden md:block">
            <div className="typo-tech text-[10px] text-tungsten mb-1">Platform</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              Android & iOS <Smartphone className="w-4 h-4 text-signal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
