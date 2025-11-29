import { ArrowRight, Check, Layers, Gauge, Search, PenTool } from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: "Custom, On-Brand Design",
    description: "We don't use templates. Our team designs a unique website that captures your brand's identity and tells your story, ensuring you stand out from the competition."
  },
  {
    icon: Gauge,
    title: "Blazing-Fast Performance",
    description: "A slow website costs you customers. We build on modern frameworks like Next.js to deliver instant-loading pages that keep visitors engaged."
  },
  {
    icon: Search,
    title: "SEO-Ready from Day One",
    description: "We build your site with search engine optimization (SEO) best practices from the ground up, helping you rank higher on Google and attract more organic traffic."
  },
  {
    icon: Layers,
    title: "Content Management Made Simple",
    description: "Need to update text or add a blog post? We can integrate a simple, user-friendly Content Management System (CMS) so you can manage your content with ease."
  }
];

export function BusinessWebsitesDetails() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="typo-headline text-3xl text-platinum mb-4">
            Your Digital First Impression, Perfected
          </h2>
          <p className="typo-body text-tungsten mb-12">
            Your website is often the first interaction a customer has with your business. We make it count. By combining bespoke design with our AI-accelerated development process, we deliver a professional, high-performance website that builds trust and drives growth.
          </p>
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-6">
                <div className="w-12 h-12 bg-carbon flex items-center justify-center rounded-sm mt-1 shrink-0">
                  <feature.icon className="w-6 h-6 text-signal" />
                </div>
                <div>
                  <h4 className="typo-subhead text-platinum text-lg">
                    {feature.title}
                  </h4>
                  <p className="typo-body text-sm text-tungsten mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-24 h-fit">
            <div className="bg-carbon border border-tungsten/10 rounded-sm p-8">
                <h3 className="typo-headline text-xl text-platinum mb-4">
                    Starting from just ₹10,000
                </h3>
                <p className="typo-body text-tungsten text-sm mb-6">
                    Get a world-class website at a price that makes sense for your business.
                </p>

                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">First Draft in 24 Hours</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Mobile & Tablet Responsive</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Google Analytics Setup</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Secure Hosting</span>
                    </li>
                </ul>

                <a
                    href="https://wa.me/919008898642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-signal text-obsidian px-10 py-3 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)] flex items-center justify-center gap-2"
                >
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
