import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Smartphone, Globe, ShoppingCart } from 'lucide-react';
import { TranslatableText } from '../translatable-text';

const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile App Creation',
    description: 'Beautiful, fast, and easy-to-use apps for Android and iOS that your customers will love.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Custom Web Development',
    description: 'From simple informational sites to complex web applications, we build your online presence from scratch.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: 'E-commerce Solutions',
    description: 'Sell your products online with a secure and powerful e-commerce store tailored for the Indian market.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full bg-card py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
            <TranslatableText>Our Services</TranslatableText>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <TranslatableText>
              Digital tools designed to help your business grow and thrive online.
            </TranslatableText>
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="transform border-border bg-background/50 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="p-8">
                {service.icon}
                <CardTitle className="mt-4 text-xl font-bold text-primary-foreground">
                  <TranslatableText>{service.title}</TranslatableText>
                </CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">
                  <TranslatableText>{service.description}</TranslatableText>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
