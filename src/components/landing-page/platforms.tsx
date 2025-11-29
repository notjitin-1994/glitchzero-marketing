import { Apple, Monitor, Smartphone, Globe } from 'lucide-react';
import { TranslatableText } from '../translatable-text';

const platforms = [
  { name: 'iOS', icon: <Apple className="h-10 w-10" /> },
  { name: 'Android', icon: <Smartphone className="h-10 w-10" /> },
  { name: 'Windows', icon: <Monitor className="h-10 w-10" /> },
  { name: 'MacOS', icon: <Apple className="h-10 w-10" /> },
  { name: 'Web', icon: <Globe className="h-10 w-10" /> },
];

export function Platforms() {
  return (
    <section id="platforms" className="w-full py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
            <TranslatableText>We Build For All Platforms</TranslatableText>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <TranslatableText>
              Wherever your customers are, we can build an experience for them. Your business, available everywhere.
            </TranslatableText>
          </p>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
              {platform.icon}
              <span className="font-code text-sm font-medium uppercase tracking-wider">
                <TranslatableText>{platform.name}</TranslatableText>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
