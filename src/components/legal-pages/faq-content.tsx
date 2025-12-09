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
    answer: "We use AI-powered tools to accelerate routine development tasks—code generation, testing automation, and optimization. This allows our engineers to focus on architecture, business logic, and user experience. The result: 60% faster delivery while maintaining enterprise-grade quality. Every project still gets hands-on engineering oversight and custom solutions for your specific needs."
  },
  {
    question: "How can you deliver a website draft in 24 hours?",
    answer: "For simple website projects with clear requirements, our AI platform can generate a complete, production-quality first draft in as little as 24 hours. This draft isn't just a design; it's a functional website. More complex projects with custom features will naturally take longer, but our process is always significantly faster than traditional agencies."
  },
  {
    question: "What is your pricing model? Are there any hidden fees?",
    answer: "We provide custom proposals based on your specific requirements. Typical engagements range from ₹15 lakhs to ₹1 crore depending on product complexity, platform coverage, integrations, and scale requirements. After our discovery call, we provide a detailed fixed-scope proposal within 48 hours. The investment we propose is what you pay—no hidden fees or scope creep."
  },
  {
    question: "Who are your services for?",
    answer: "We work with growth-stage companies, funded startups (Series A-C), and established businesses undergoing digital transformation across India's metro markets. Our ideal clients are ambitious companies in fintech, edtech, healthtech, SaaS, and e-commerce that need to move fast without compromising on quality, security, or scalability."
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
  },
  {
    question: "Do you work with funded startups and enterprise clients?",
    answer: "Yes. While we started serving small businesses, we now primarily work with Series A-C funded startups and growth-stage companies across fintech, edtech, healthtech, and SaaS. We've helped engineering teams scale products from MVP to serving 100,000+ users, and we understand the unique challenges of building for India's digital economy."
  },
  {
    question: "How do you ensure security and compliance?",
    answer: "We follow industry-standard security practices including encrypted data storage, secure authentication, role-based access control, and regular security audits. For regulated industries (fintech, healthtech), we ensure compliance with RBI guidelines, DPDP Act, and industry-specific requirements. We provide detailed security documentation for your technical due diligence process."
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Absolutely. We work in three models: (1) Full product engineering where we handle everything, (2) Team augmentation for specific expertise, or (3) Technical consulting and architecture design. We use modern collaboration tools (GitHub, Slack, Jira), maintain clean documentation, and ensure smooth handoff or ongoing collaboration with your internal team."
  },
  {
    question: "What's your typical engagement timeline and process?",
    answer: "Most engagements follow this timeline: Week 1 - Technical discovery and requirements finalization; Weeks 2-10 - Iterative development with weekly demos; Week 11-12 - Testing, optimization, and deployment; Post-launch - 30 days of support included. We use agile methodology, so you see working software weekly, not just at the end."
  },
  {
    question: "How do you handle intellectual property and code ownership?",
    answer: "All code, designs, and intellectual property created for your project belong to you from day one. We use GitHub/GitLab for version control with full client access throughout development. We sign NDAs and can work within your specific IP agreements. You own everything—we're just your engineering partners."
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
