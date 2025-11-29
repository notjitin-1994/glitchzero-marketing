import { ArrowRight, Check, Zap } from 'lucide-react';

export function PricingDetails() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2 bg-carbon border border-tungsten/10 rounded-sm p-8 md:p-12">
          <h2 className="typo-headline text-3xl text-platinum mb-4">
            How Our Pricing Works
          </h2>
          <p className="typo-body text-tungsten mb-8">
            We believe in simple, transparent pricing that aligns with your
            goals. We quote on a per-project basis, ensuring you only pay for
            what you need.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-obsidian flex items-center justify-center rounded-sm mt-1">
                <Check className="w-5 h-5 text-terminal" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum">
                  Simple Websites from Just ₹10,000
                </h4>
                <p className="typo-body text-sm text-tungsten mt-1">
                  Get a professional, high-quality online presence without the enterprise price tag. Pricing for more complex apps and software goes up from here, tailored to your specific needs.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-obsidian"></div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-obsidian flex items-center justify-center rounded-sm mt-1">
                <Zap className="w-5 h-5 text-signal" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum">
                  First Draft in as little as 24 Hours
                </h4>
                <p className="typo-body text-sm text-tungsten mt-1">
                  Our AI-powered platform enables us to deliver a first draft
                  for simple projects incredibly fast. More complex projects
                  may take up to 3 months for the initial draft, but we always
                  move 60% faster than traditional agencies.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-obsidian"></div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-obsidian flex items-center justify-center rounded-sm mt-1">
                <ArrowRight className="w-5 h-5 text-tungsten" />
              </div>
              <div>
                <h4 className="typo-subhead text-platinum">
                  Custom Quote for Every Project
                </h4>
                <p className="typo-body text-sm text-tungsten mt-1">
                  Your business is unique. We provide a detailed, no-obligation
                  quote based on your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-signal/5 border border-signal/20 rounded-sm p-8 text-center">
          <h3 className="typo-headline text-2xl text-platinum">
            Ready to Start?
          </h3>
          <p className="typo-body text-tungsten my-4">
            Let's discuss your vision. Get a free, personalized quote and see
            how quickly we can bring your idea to life.
          </p>
          <button className="w-full bg-signal text-obsidian px-10 py-3 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)]">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
