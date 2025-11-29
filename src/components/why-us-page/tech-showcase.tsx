const technologies = [
  { name: 'Next.js', category: 'Frontend', description: 'For fast, scalable, and SEO-friendly React applications.' },
  { name: 'React Native', category: 'Mobile', description: 'To build native apps for Android & iOS from a single codebase.' },
  { name: 'Tailwind CSS', category: 'Styling', description: 'For rapid, utility-first UI development and consistent design.' },
  { name: 'Firebase', category: 'Backend', description: 'Powers our real-time databases, authentication, and cloud functions.' },
  { name: 'Node.js', category: 'Backend', description: 'The backbone of our fast and efficient server-side logic.' },
  { name: 'Google Cloud', category: 'Infrastructure', description: 'Ensures secure, scalable, and reliable hosting for all our applications.' },
  { name: 'Proprietary AI', category: 'Core', description: 'Our secret sauce for code generation, testing, and deployment.' },
  { name: 'Figma', category: 'Design', description: 'Where we prototype and design user experiences before a line of code is written.' },
];

export function TechShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="typo-tech text-signal text-xs">Our Toolkit</span>
          <h2 className="typo-headline text-3xl md:text-4xl text-platinum mt-3">Built on Modern, Battle-Tested Technology</h2>
          <p className="typo-subhead text-tungsten max-w-2xl mx-auto mt-4">We use a curated set of modern technologies that allow for maximum speed, security, and scalability. This means your product is built to last and ready to grow.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="group relative bg-carbon border border-tungsten/10 rounded-sm p-6 overflow-hidden transition-all hover:border-signal/50 hover:-translate-y-1">
              <div className="absolute top-4 right-4 bg-obsidian px-2 py-0.5 rounded-full">
                <span className="typo-tech text-[10px] text-tungsten group-hover:text-signal transition-colors">{tech.category}</span>
              </div>
              <h3 className="typo-headline text-xl text-platinum mb-2">{tech.name}</h3>
              <p className="typo-body text-tungsten text-sm leading-relaxed">{tech.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-px bg-signal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
