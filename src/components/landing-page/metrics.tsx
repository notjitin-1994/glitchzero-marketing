export function Metrics() {
  return (
    <section className="border-y border-carbon bg-obsidian">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-carbon">
        <div className="p-8 text-center group hover:bg-carbon/50 transition-colors">
          <div className="typo-headline text-3xl text-platinum group-hover:text-signal transition-colors">2 Weeks</div>
          <div className="typo-tech text-xs text-tungsten mt-2">Average Delivery Time</div>
        </div>
        <div className="p-8 text-center group hover:bg-carbon/50 transition-colors">
          <div className="typo-headline text-3xl text-platinum group-hover:text-signal transition-colors">100%</div>
          <div className="typo-tech text-xs text-tungsten mt-2">Mobile Friendly</div>
        </div>
        <div className="p-8 text-center group hover:bg-carbon/50 transition-colors">
          <div className="typo-headline text-3xl text-platinum group-hover:text-signal transition-colors">24/7</div>
          <div className="typo-tech text-xs text-tungsten mt-2">System Uptime</div>
        </div>
        <div className="p-8 text-center group hover:bg-carbon/50 transition-colors">
          <div className="typo-headline text-3xl text-platinum group-hover:text-signal transition-colors">Zero</div>
          <div className="typo-tech text-xs text-tungsten mt-2">Tech Skills Needed</div>
        </div>
      </div>
    </section>
  );
}
