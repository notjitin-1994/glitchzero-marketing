import { ArrowRight, Check, IndianRupee, Zap, FileText } from 'lucide-react';

const pricingPoints = [
  {
    icon: IndianRupee,
    title: "Simple Websites from Just ₹10,000",
    description: "Get a professional, high-quality online presence without the enterprise price tag. Pricing for more complex apps and software goes up from here, tailored to your specific needs."
  },
  {
    icon: Zap,
    title: "First Draft in as little as 24 Hours",
    description: "Our AI-powered platform enables us to deliver a first draft for simple projects incredibly fast. More complex projects may take up to 3 months for the initial draft, but we always move 60% faster than traditional agencies."
  },
  {
    icon: FileText,
    title: "Custom Quote for Every Project",
    description: "Your business is unique. We provide a detailed, no-obligation quote based on your specific requirements."
  }
];

export function PricingDetails() {
  return (
    <section className="py-24 px-6 bg-carbon border-y border-obsidian/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="typo-headline text-3xl text-platinum mb-4">
            How Our Pricing Works
          </h2>
          <p className="typo-body text-tungsten mb-12">
            We believe in simple, transparent pricing that aligns with your
            goals. We quote on a per-project basis, ensuring you only pay for
            what you need.
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
              Ready to Start?
            </h3>
            <p className="typo-body text-tungsten text-sm mb-6">
              Let's discuss your vision. Get a free, personalized quote and see
              how quickly we can bring your idea to life.
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
                <span className="typo-body text-platinum text-sm">60% Faster Delivery</span>
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
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
