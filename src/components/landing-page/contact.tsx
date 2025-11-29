import { ContactForm } from '@/components/contact-form';
import { TranslatableText } from '../translatable-text';

export function Contact() {
  return (
    <section id="contact" className="w-full bg-card py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
              <TranslatableText>Ready to Start?</TranslatableText>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              <TranslatableText>
                Let's talk about your business goals and how we can help you achieve them with technology. Fill out the form, and we'll be in touch for a free consultation.
              </TranslatableText>
            </p>
            <div className="mt-8 space-y-4 text-base text-muted-foreground">
                <p><TranslatableText>No obligations, just a friendly chat about your idea.</TranslatableText></p>
                <p><TranslatableText>We are based in India and work with businesses across the country.</TranslatableText></p>
            </div>
          </div>
          <div className="rounded-lg bg-background p-8 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
