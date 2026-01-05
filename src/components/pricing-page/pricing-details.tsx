import { ArrowRight, Check, IndianRupee, Zap, FileText } from 'lucide-react';

const pricingPoints = [
  {
    icon: IndianRupee,
    title: "Transparent, Outcome-Based Pricing",
    description: "Our engagements typically range from ₹15 lakhs to ₹1 crore depending on product complexity, platform coverage, and business requirements. We provide fixed-scope proposals after understanding your specific needs—no hourly rates, no scope creep."
  },
  {
    icon: Zap,
    title: "8-12 Week Timeline to Market-Ready Product",
    description: "From initial discovery to production deployment, we deliver in 8-12 weeks for most engagements—60% faster than traditional agencies. We use agile methodology with weekly iterations, so you see progress continuously, not just at the end."
  },
  {
    icon: FileText,
    title: "What Determines Your Investment",
    description: "Pricing depends on: product complexity, platform coverage (web/iOS/Android), integrations required, compliance needs, expected user scale, and ongoing support requirements. After our discovery call, we provide a detailed proposal with fixed scope and investment within 48 hours."
  }
];

export function PricingDetails() {
  return (
    <section className="py-10 px-6 bg-carbon border-y border-obsidian/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="typo-headline text-3xl text-platinum mb-4">
            Investment-Based Custom Solutions
          </h2>
          <p className="typo-body text-tungsten mb-12">
            Every business has unique challenges and opportunities. We provide custom
            proposals based on your specific requirements, timeline, and desired outcomes.
            No cookie-cutter packages—just solutions engineered for your goals.
          </p>

          <div className="space-y-8">
            {pricingPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-6">
                <div className="w-12 h-12 bg-carbon flex items-center justify-center rounded-sm mt-1 shrink-0">
                  <point.icon className="w-6 h-6 text-signal" />
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum text-lg">
                    {point.title}
                  </h4>
                  <p className="typo-body text-sm text-tungsten mt-1">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-24 h-fit">
          <div className="bg-carbon border border-tungsten/10 rounded-sm p-8">
            <h3 className="typo-headline text-xl text-platinum mb-4">
              Start with a Discovery Call
            </h3>
            <p className="typo-body text-tungsten text-sm mb-6">
              30-minute technical consultation with our founder. We'll discuss your
              goals, challenges, and provide honest recommendations—even if it means
              we're not the right fit.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-terminal" />
                <span className="typo-body text-platinum text-sm">No Hidden Fees</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-terminal" />
                <span className="typo-body text-platinum text-sm">Pay Per Project</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-terminal" />
                <span className="typo-body text-platinum text-sm">Fixed Scope & Timeline</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-terminal" />
                <span className="typo-body text-platinum text-sm">30-Day Post-Launch Support</span>
              </li>
            </ul>

            <a
              href="https://wa.me/919008898642"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-signal text-obsidian px-10 py-3 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)] flex items-center justify-center gap-2"
            >
              Schedule Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
