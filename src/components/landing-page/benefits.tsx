import { BrainCircuit, IndianRupee, MessageSquare, ShieldCheck } from 'lucide-react';

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-10">
          <div>
            <span className="typo-tech text-signal text-xs">Why Choose Us</span>
            <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">From Idea to Launch, Faster.</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <BrainCircuit className="w-5 h-5 text-tungsten" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum mb-1">AI-Accelerated Development</h4>
                <p className="typo-body text-tungsten text-sm">We leverage secure, proprietary AI-powered workflows and frameworks to accelerate our development process by an average of 60%, delivering your project faster than traditional agencies.</p>
              </div>
            </div>

            <div className="w-full h-px bg-carbon"></div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <IndianRupee className="w-5 h-5 text-tungsten" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum mb-1">Affordable & Transparent</h4>
                <p className="typo-body text-tungsten text-sm">Our rapid, AI-driven cycle means lower costs. We offer clear packages designed for small businesses with no hidden fees.</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-carbon"></div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <MessageSquare className="w-5 h-5 text-tungsten" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum mb-1">Direct WhatsApp Support</h4>
                <p className="typo-body text-tungsten text-sm">No ticket delays. Get instant answers and updates directly from the team. We speak English, Kannada, Malayalam, and Hindi.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="process" className="bg-carbon border border-tungsten/10 p-8 rounded-sm relative">
          <h3 className="typo-headline text-lg text-platinum mb-6">Our 3-Step Rapid Process</h3>
          
          <div className="space-y-8 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-tungsten/20"></div>

            <div className="relative flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-obsidian border border-signal flex items-center justify-center shrink-0 z-10">
                <span className="text-signal text-[10px] font-bold">1</span>
              </div>
              <div>
                <h4 className="typo-subhead text-platinum text-sm">Consult & Strategize (Day 1)</h4>
                <p className="typo-body text-xs text-tungsten mt-1">We discuss your needs and finalize a plan on our first call.</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-obsidian border border-tungsten flex items-center justify-center shrink-0 z-10">
                <span className="text-platinum text-[10px] font-bold">2</span>
              </div>
              <div>
                <h4 className="typo-subhead text-platinum text-sm">Build & Review (1-2 Weeks)</h4>
                <p className="typo-body text-xs text-tungsten mt-1">Our team codes at high speed. You get weekly updates, not monthly.</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-obsidian border border-tungsten flex items-center justify-center shrink-0 z-10">
                <span className="text-platinum text-[10px] font-bold">3</span>
              </div>
              <div>
                <h4 className="typo-subhead text-platinum text-sm">Launch & Train (Final Day)</h4>
                <p className="typo-body text-xs text-tungsten mt-1">We deploy your app and train you, ensuring you're ready for business.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
