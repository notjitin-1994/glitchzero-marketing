import { Zap, Clock, Shield, TrendingUp, Gauge, Bot, ArrowDown } from 'lucide-react';

export function WhyUsHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-carbon/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-8 z-10">
          <span className="typo-tech text-signal text-xs">Why Choose GlitchZero</span>
          <h1 className="typo-headline text-5xl md:text-7xl leading-tight text-platinum">
            Built for Speed, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-orange-400">
              Designed for Growth.
            </span>
          </h1>
          <p className="typo-subhead text-lg text-tungsten max-w-lg leading-relaxed">
            In today's market, speed is your greatest competitive advantage. We've rebuilt the development process from the ground up with proprietary AI to deliver high-quality digital solutions faster than anyone else.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-signal to-carbon rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

          <div className="relative bg-obsidian border border-carbon rounded-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-carbon pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-carbon rounded-full flex items-center justify-center">
                  <Gauge className="w-4 h-4 text-platinum" />
                </div>
                <div>
                  <span className="typo-subhead text-sm text-platinum block">Performance Metrics</span>
                  <span className="typo-tech text-[10px] text-terminal">● Industry Leading</span>
                </div>
              </div>
              <Bot className="w-4 h-4 text-signal animate-pulse" />
            </div>

            <div className="space-y-4">
              <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="typo-tech text-xs text-tungsten flex items-center gap-2">
                    <Clock className="w-3 h-3" /> Delivery Time
                  </span>
                  <span className="typo-tech text-[10px] text-terminal flex items-center gap-1">
                    <ArrowDown className="w-3 h-3" /> 50% faster
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="typo-headline text-3xl text-platinum">2 Weeks</span>
                    <span className="typo-tech text-xs text-tungsten block mt-1">vs 4-6 weeks industry avg</span>
                  </div>
                  <Zap className="w-6 h-6 text-signal" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                  <span className="typo-tech text-xs text-tungsten flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Quality Score
                  </span>
                  <div className="typo-headline text-2xl text-platinum mt-2">99.9%</div>
                  <div className="w-full h-1 bg-carbon rounded-full overflow-hidden mt-2">
                    <div className="w-[99%] h-full bg-terminal rounded-full"></div>
                  </div>
                </div>
                <div className="bg-carbon/50 p-4 rounded border border-tungsten/10">
                  <span className="typo-tech text-xs text-tungsten flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Client Growth
                  </span>
                  <div className="typo-headline text-2xl text-platinum mt-2">+180%</div>
                  <div className="w-full h-1 bg-carbon rounded-full overflow-hidden mt-2">
                    <div className="w-full h-full bg-signal rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-terminal/10 p-4 rounded border border-terminal/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-terminal/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-terminal" />
                  </div>
                  <div>
                    <span className="typo-subhead text-sm text-platinum block">AI-Powered Development</span>
                    <span className="typo-tech text-[10px] text-terminal">Proprietary technology stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-carbon border border-tungsten/20 p-4 shadow-xl hidden md:block">
            <div className="typo-tech text-[10px] text-tungsten mb-1">Projects Delivered</div>
            <div className="typo-headline text-lg text-platinum flex items-center gap-2">
              50+ <span className="text-terminal">On Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
