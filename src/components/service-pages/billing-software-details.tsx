import { ArrowRight, Check, Receipt, Repeat, FileText, Database } from 'lucide-react';

const features = [
  {
    icon: Receipt,
    title: "Fast, Professional Invoicing",
    description: "Generate and send GST-compliant invoices in seconds. Our custom-built software removes unnecessary complexity, making your billing process faster and more professional."
  },
  {
    icon: Repeat,
    title: "Automated Recurring Billing",
    description: "Set up subscriptions and automate recurring invoices effortlessly. Save time, reduce manual errors, and ensure consistent cash flow for your business."
  },
  {
    icon: FileText,
    title: "Custom Reports & Dashboards",
    description: "Stop wrestling with complex reports. We build simple, clear dashboards that give you an instant overview of sales, outstanding payments, and tax liabilities."
  },
  {
    icon: Database,
    title: "Offline Functionality & Data Security",
    description: "Your business doesn't stop when the internet does. Our desktop applications work offline, syncing securely to the cloud whenever you're connected. Your data is always safe and accessible."
  }
];

export function BillingSoftwareDetails() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="typo-headline text-3xl text-platinum mb-4">
            Streamline Your Finances, Intelligently
          </h2>
          <p className="typo-body text-tungsten mb-12">
            Generic billing software forces you to change your workflow. We build software that adapts to you. Our AI-assisted process allows us to understand your unique requirements and quickly develop a custom desktop application for Windows or Mac that makes financial management simple, fast, and secure.
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
                    Own Your Software
                </h3>
                <p className="typo-body text-tungsten text-sm mb-6">
                    No monthly fees. No surprise price hikes. Get a lifetime license for your custom application.
                </p>

                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Windows & macOS Apps</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">GST & Tax Compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Secure Local Data Storage</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">30-Day Post-Launch Support</span>
                    </li>
                </ul>

                <button className="w-full bg-signal text-obsidian px-10 py-3 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)] flex items-center justify-center gap-2">
                    Build My Billing App
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
}
