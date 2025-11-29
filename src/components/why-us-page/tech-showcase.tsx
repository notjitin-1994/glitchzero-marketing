import { Check, Code, Database, Fingerprint, Globe, Layers, Server, Smartphone } from 'lucide-react';

const techCategories = [
  {
    category: 'Web & Backend',
    icon: Globe,
    technologies: ['Next.js', 'React', 'Node.js', 'Typescript'],
  },
  {
    category: 'Mobile Apps',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'],
  },
  {
    category: 'Cloud & Database',
    icon: Server,
    technologies: ['Firebase', 'Google Cloud', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Core Advantage',
    icon: Fingerprint,
    technologies: ['Proprietary AI', 'Genkit', 'Secure Workflows'],
  },
];

export function TechShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="typo-tech text-signal text-xs">Our Toolkit</span>
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Built on a Modern, Battle-Tested Stack</h2>
          <p className="typo-subhead text-tungsten max-w-3xl mx-auto mt-4">We use a curated set of industry-leading technologies that allow for maximum speed, security, and scalability. This means your product is built to last and ready to grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat) => (
            <div key={cat.category} className="bg-carbon border border-tungsten/10 rounded-sm p-8 group hover:border-signal/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-obsidian flex items-center justify-center rounded-sm border border-tungsten/10 group-hover:border-signal/30 transition-colors">
                  <cat.icon className="w-6 h-6 text-tungsten group-hover:text-signal transition-colors" />
                </div>
                <h3 className="typo-headline text-xl text-platinum">{cat.category}</h3>
              </div>
              <ul className="space-y-3">
                {cat.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-terminal" />
                    <span className="typo-code text-platinum text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
