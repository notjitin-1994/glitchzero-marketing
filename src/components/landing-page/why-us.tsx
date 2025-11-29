import { CheckCircle } from 'lucide-react';
import { TranslatableText } from '../translatable-text';

const features = [
  {
    name: 'Built From Scratch, For You',
    description: 'We don\'t use templates. Every line of code is written to meet your unique business needs, ensuring a perfect fit.',
  },
  {
    name: 'Focus on Indian Businesses',
    description: 'We understand the challenges and opportunities for small businesses in India, from local payments to regional languages.',
  },
  {
    name: 'Simple and Transparent Process',
    description: 'No technical jargon. We guide you from idea to launch with clear communication and a focus on your goals.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="w-full bg-card py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
            <TranslatableText>Your Vision, Our Code</TranslatableText>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <TranslatableText>
              We are more than just developers; we are your partners in building a digital future for your business.
            </TranslatableText>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckCircle className="absolute h-6 w-6 text-success" />
                  <p className="ml-9 text-lg font-bold leading-6 text-primary-foreground">
                    <TranslatableText>{feature.name}</TranslatableText>
                  </p>
                </dt>
                <dd className="ml-9 mt-2 text-base text-muted-foreground">
                  <TranslatableText>{feature.description}</TranslatableText>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
