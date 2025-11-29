import { Button } from '@/components/ui/button';
import { TranslatableText } from '../translatable-text';

export function Hero() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-card to-background"
      />
      <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl font-extrabold uppercase tracking-wide text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <TranslatableText>Digitalize Your Bharat Business</TranslatableText>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          <TranslatableText>
            Custom-built apps and websites to bring your local business into the digital age. We serve the heart of India, one business at a time.
          </TranslatableText>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#contact">
            <Button size="lg">
              <TranslatableText>Start Your Project</TranslatableText>
            </Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="outline">
              <TranslatableText>Explore Services</TranslatableText>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
