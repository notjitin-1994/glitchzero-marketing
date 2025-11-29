import { DraftingCompass, Bot, Rocket, Puzzle } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    icon: DraftingCompass,
    title: "Discovery & AI-Powered Strategy",
    description: "We don't just listen; we analyze. On our first call, we map your vision to a technical blueprint. Our AI tools help identify market opportunities and optimal features, ensuring we're building the right product from the start. You leave with a clear plan, timeline, and quote."
  },
  {
    step: 2,
    icon: Bot,
    title: "AI-Accelerated Development Sprints",
    description: "This is where the magic happens. Our developers, augmented by proprietary AI co-pilots, build your application in rapid sprints. The AI handles boilerplate code, runs continuous tests, and optimizes performance, freeing our engineers to focus on crafting a flawless user experience. You get weekly builds to review—progress you can see."
  },
  {
    step: 3,
    icon: Rocket,
    title: "Seamless Launch & Intelligent Support",
    description: "Deployment is automated and seamless. We handle all App Store, Play Store, and server configurations. Post-launch, we provide hands-on training and a 30-day support window to ensure a smooth transition. Your success is our launch metric."
  }
];

export function ProcessDeepDive() {
  return (
    <section className="py-24 px-6 bg-carbon border-y border-obsidian/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="typo-tech text-signal text-xs">Our Blueprint for Speed</span>
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">From Idea to Impact, Systematized.</h2>
          <p className="typo-subhead text-tungsten max-w-2xl mx-auto mt-4">Our three-step process is engineered for clarity, speed, and exceptional outcomes.</p>
        </div>

        <div className="relative space-y-16">
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-tungsten/10 hidden md:block"></div>
          
          {processSteps.map((step, index) => (
            <div key={step.step} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-obsidian border-2 border-carbon flex items-center justify-center shadow-lg">
                  <step.icon className="w-12 h-12 text-platinum" />
                </div>
                <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-signal flex items-center justify-center typo-headline text-obsidian text-lg">{step.step}</div>
              </div>
              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                <h3 className="typo-headline text-2xl text-platinum mb-4">{step.title}</h3>
                <p className="typo-body text-tungsten leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
