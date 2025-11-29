import { Zap, Wallet, MessageCircle, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Unmatched Speed",
    description: "Our AI-powered workflow is our superpower. By automating repetitive tasks and optimizing code, we cut development time by an average of 60%. This means you launch faster, iterate quicker, and start generating revenue sooner."
  },
  {
    icon: Wallet,
    title: "Intelligent Affordability",
    description: "Faster development isn't just about time; it's about cost. Our efficiency translates directly into savings for you. Get enterprise-grade solutions at a startup-friendly price, with transparent pricing and no surprises."
  },
  {
    icon: MessageCircle,
    title: "Direct, Human Support",
    description: "Technology is only as good as the people behind it. Get direct access to our team via WhatsApp. No ticketing systems, no long waits. Just clear, quick communication in English, Kannada, Malayalam, and Hindi."
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description: "We build speed on a foundation of security. Our frameworks include robust, up-to-date security protocols from day one. We handle the complexities of data protection so you can have peace of mind."
  }
];

export function CorePillars() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum">The GlitchZero Advantage</h2>
          <p className="typo-subhead text-tungsten max-w-2xl mx-auto mt-4">We operate on four core principles that ensure your success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-carbon border border-tungsten/10 p-8 rounded-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-obsidian border border-signal/20 rounded-full mb-6">
                <pillar.icon className="w-8 h-8 text-signal" />
              </div>
              <h3 className="typo-headline text-xl text-platinum mb-4">{pillar.title}</h3>
              <p className="typo-body text-tungsten text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
