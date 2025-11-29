import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { TranslatableText } from '../translatable-text';

const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'Digital Disha built us an amazing app that our customers love! Our sales have doubled since we launched.',
    name: 'Rohan Patel',
    company: 'Patel\'s Kirana',
  },
  {
    id: 'testimonial-2',
    quote: 'We were new to the digital world, but the team at Digital Disha guided us at every step. Highly recommended!',
    name: 'Priya Sharma',
    company: 'Sharma Sweets',
  },
  {
    id: 'testimonial-3',
    quote: 'Our new website is beautiful and so easy to manage. It has helped us reach customers all over the city.',
    name: 'Amit Singh',
    company: 'Singh\'s Handlooms',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
            <TranslatableText>Trusted by Businesses Like Yours</TranslatableText>
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
            return (
              <Card key={testimonial.name} className="bg-card">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Portrait of ${testimonial.name}`}
                      width={80}
                      height={80}
                      className="rounded-full"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <blockquote className="mt-6 text-lg font-medium text-primary-foreground">
                    <p>"<TranslatableText>{testimonial.quote}</TranslatableText>"</p>
                  </blockquote>
                  <footer className="mt-6">
                    <p className="font-semibold text-muted-foreground">
                      <TranslatableText>{testimonial.name}</TranslatableText>
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      <TranslatableText>{testimonial.company}</TranslatableText>
                    </p>
                  </footer>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
