"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does 'AI-Accelerated Development' actually mean?",
    answer: "It means we use proprietary AI tools and workflows to automate many parts of the development process, like writing boilerplate code, running tests, and optimizing performance. This allows our expert developers to focus on high-value tasks, creativity, and building a flawless user experience. The result is a 60% average reduction in development time, which means you get your product faster and at a lower cost."
  },
  {
    question: "How can you deliver a website draft in 24 hours?",
    answer: "For simple website projects with clear requirements, our AI platform can generate a complete, production-quality first draft in as little as 24 hours. This draft isn't just a design; it's a functional website. More complex projects with custom features will naturally take longer, but our process is always significantly faster than traditional agencies."
  },
  {
    question: "What is your pricing model? Are there any hidden fees?",
    answer: "We believe in transparent, upfront pricing. Our simple websites start at just ₹10,000. For more complex apps and software, we provide a custom quote based on your specific requirements after our initial consultation. The price we quote is the price you pay. There are no hidden fees or surprise charges."
  },
  {
    question: "Who are your services for?",
    answer: "Our services are designed specifically for small and medium-sized businesses, startups, and agencies across India. Whether you own a local shop, a growing e-commerce brand, or a B2B company, we provide digital solutions that are affordable, fast, and built to scale."
  },
  {
    question: "What kind of support do you offer after my project is launched?",
    answer: "Every project comes with a 30-day post-launch support window to ensure a smooth transition. We also offer ongoing Website/App Maintenance plans that include proactive security updates, performance monitoring, and priority support via WhatsApp to keep your digital assets running flawlessly."
  },
  {
    question: "Can you build for both Android and iOS?",
    answer: "Yes. We specialize in cross-platform development using technologies like React Native. This allows us to build and deploy your app on both the Google Play Store (Android) and the Apple App Store (iOS) from a single, efficient codebase, saving you time and money."
  },
  {
    question: "I don't have any technical knowledge. Is that a problem?",
    answer: "Not at all. Our process is designed for non-technical business owners. We handle all the complexities of design, development, and deployment. We'll guide you through every step and provide training so you can manage your new digital product with ease."
  }
];


export function FaqContent() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="typo-subhead text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="typo-body text-tungsten leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
