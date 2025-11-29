import { IndianRupee, MessageSquare, ShieldCheck } from 'lucide-react';

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-10">
          <div>
            <span className="typo-tech text-signal text-xs">Why Choose Us</span>
            <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Technology Made Simple.</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <IndianRupee className="w-5 h-5 text-tungsten" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum mb-1">Affordable Pricing</h4>
                <p className="typo-body text-tungsten text-sm">We offer packages designed for small businesses. No hidden fees, clear payment terms.</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-carbon"></div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <MessageSquare className="w-5 h-5 text-tungsten" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum mb-1">WhatsApp Support</h4>
                <p className="typo-body text-tungsten text-sm">Have a question? Just message us. We speak English, Hindi, and Hinglish.</p>
              </div>
            </div>

            <div className="w-full h-px bg-carbon"></div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <ShieldCheck className="w-5 h-5 text-tungsten" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum mb-1">Secure & Reliable</h4>
                <p className="typo-body text-tungsten text-sm">Your customer data is safe. We use the latest security standards so you can focus on sales.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="process" className="bg-carbon border border-tungsten/10 p-8 rounded-sm relative">
          <h3 className="typo-headline text-lg text-platinum mb-6">How It Works</h3>
          
          <div className="space-y-8 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-tungsten/20"></div>

            <div className="relative flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-obsidian border border-signal flex items-center justify-center shrink-0 z-10">
                <span className="text-signal text-[10px] font-bold">1</span>
              </div>
              <div>
                <h4 className="typo-subhead text-platinum text-sm">You tell us your idea</h4>
                <p className="typo-body text-xs text-tungsten mt-1">We discuss what your business needs over a call.</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-obsidian border border-tungsten flex items-center justify-center shrink-0 z-10">
                <span className="text-platinum text-[10px] font-bold">2</span>
              </div>
              <div>
                <h4 className="typo-subhead text-platinum text-sm">We build your app/site</h4>
                <p className="typo-body text-xs text-tungsten mt-1">Our team codes everything from scratch. You see progress weekly.</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-obsidian border border-tungsten flex items-center justify-center shrink-0 z-10">
                <span className="text-platinum text-[10px] font-bold">3</span>
              </div>
              <div>
                <h4 className="typo-subhead text-platinum text-sm">Launch & Training</h4>
                <p className="typo-body text-xs text-tungsten mt-1">We put it on the App Store and teach you how to use it.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
