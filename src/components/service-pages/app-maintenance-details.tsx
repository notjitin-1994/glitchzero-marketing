import { ArrowRight, Check, ShieldCheck, Server, BrainCircuit, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Proactive Security Patching",
    description: "We don't wait for threats. Our systems continuously scan for vulnerabilities and apply security patches to your website or app's framework and dependencies, keeping your data and customers safe."
  },
  {
    icon: Server,
    title: "24/7 Uptime & Performance Monitoring",
    description: "Our AI-powered monitors watch your digital assets around the clock. We detect and resolve performance bottlenecks or downtime on your website or app before they impact your customers."
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Updates & Backups",
    description: "We handle regular software updates, CMS patches, and plugin upgrades. All data is backed up automatically, ensuring your business continuity and peace of mind across all platforms."
  },
  {
    icon: MessageCircle,
    title: "Priority WhatsApp Support",
    description: "Have a question or need a minor tweak on your site or app? Our maintenance clients get priority access to our support team directly via WhatsApp for rapid assistance."
  }
];

export function AppMaintenanceDetails() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="typo-headline text-3xl text-platinum mb-4">
            Keep Your Digital Presence Flawless
          </h2>
          <p className="typo-body text-tungsten mb-12">
            Focus on your business, not on technical upkeep. Our Maintenance plans provide comprehensive, proactive care for your digital products. We leverage AI-driven automation to ensure your website, mobile app, or software remains secure, fast, and up-to-date, minimizing risks and maximizing performance.
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
                    Simple Maintenance Plans
                </h3>
                <p className="typo-body text-tungsten text-sm mb-6">
                    Choose a plan that fits your needs. We offer clear, affordable pricing to protect your investment.
                </p>

                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Monthly Health Reports</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Automated Backups</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Security & Performance Scans</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-terminal" />
                        <span className="typo-body text-platinum text-sm">Priority Feature Requests</span>
                    </li>
                </ul>

                <a
                    href="https://wa.me/919008898642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-signal text-obsidian px-10 py-3 typo-headline text-base hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,79,0,0.5)] hover:shadow-[0_0_30px_rgba(255,79,0,0.5)] flex items-center justify-center gap-2"
                >
                    From ₹25,000/year
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
