import { ArrowRight, Check, Package, CreditCard, ShoppingCart, BarChart, Zap } from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: "Beautiful, High-Converting Storefront",
    description: "We design and build a custom storefront that reflects your brand and makes it easy for customers to find and purchase your products."
  },
  {
    icon: Package,
    title: "Effortless Product & Inventory Management",
    description: "Our intuitive admin panel allows you to easily add products, manage stock levels, and track inventory across all your sales channels."
  },
  {
    icon: CreditCard,
    title: "Secure & Seamless Payment Integration",
    description: "We integrate with all major Indian payment gateways like Razorpay, PayU, and Cashfree, ensuring secure and reliable transactions for your customers."
  },
  {
    icon: BarChart,
    title: "Powerful Sales & Analytics Dashboard",
    description: "Get a clear view of your business performance. Track sales, monitor customer behavior, and gain insights to optimize your strategy."
  }
];

export function EcommerceAppsDetails() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="typo-headline text-3xl text-platinum mb-4">
            Everything You Need to Sell Online
          </h2>
          <p className="typo-body text-tungsten mb-12">
            From a stunning storefront to a powerful backend, we provide a complete, end-to-end e-commerce solution. Our AI-powered platform allows us to build and launch your custom application with incredible speed, integrating all the essential features your business needs to thrive online.
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
                    Launch Your Store Faster
                </h3>
                <p className="typo-body text-tungsten text-sm mb-6">
                    Our AI-accelerated approach means you get to market in weeks, not months.
                </p>

                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Web, Android & iOS Apps</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Custom Branding</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Scalable Cloud Hosting</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Dedicated WhatsApp Support</span>
                    </li>
                </ul>

                <a
                    href="https://wa.me/919008898642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-signal text-obsidian px-10 py-3 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)] flex items-center justify-center gap-2"
                >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
