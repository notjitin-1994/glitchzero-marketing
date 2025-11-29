import { Check } from 'lucide-react';

const technologies = [
  { name: 'Next.js & React', category: 'Web Frontend', description: 'For fast, scalable, and SEO-friendly web applications.' },
  { name: 'React Native', category: 'Cross-Platform Mobile', description: 'To build apps for Android & iOS from a single codebase.' },
  { name: 'Flutter', category: 'Cross-Platform Mobile', description: 'Google\'s UI toolkit for beautiful, natively compiled mobile applications.' },
  { name: 'Swift (iOS)', category: 'Native Mobile', description: 'Apple\'s powerful and intuitive language for native iOS and macOS apps.' },
  { name: 'Kotlin (Android)', category: 'Native Mobile', description: 'The modern, official language for native Android app development.' },
  { name: 'Node.js', category: 'Backend', description: 'The backbone of our fast and efficient server-side logic.' },
  { name: 'Firebase & Google Cloud', category: 'Backend & Infrastructure', description: 'Ensuring real-time data, authentication, and secure, scalable hosting.' },
  { name: 'Proprietary AI', category: 'Core Advantage', description: 'Our secret sauce for accelerated code generation, testing, and deployment.' },
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

        <div className="bg-carbon border border-tungsten/10 rounded-sm">
          <div className="p-6 border-b border-tungsten/10">
            <h3 className="typo-headline text-platinum text-lg">Core Technologies</h3>
          </div>
          <div className="divide-y divide-tungsten/10">
            {technologies.map((tech) => (
              <div key={tech.name} className="p-6 grid md:grid-cols-3 gap-4 group hover:bg-obsidian/50 transition-colors">
                <div className="md:col-span-1">
                  <h4 className="typo-subhead text-platinum group-hover:text-signal transition-colors">{tech.name}</h4>
                  <p className="typo-tech text-[10px] text-tungsten mt-1">{tech.category}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="typo-body text-tungsten text-sm">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
