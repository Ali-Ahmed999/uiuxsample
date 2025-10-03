"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "Do you offer custom designs?",
      answer: "Yes, although every design is custom and tailored to your business's goal and audience, if you have something in mind for design, book a call with our experts, and we'll bring that to reality."
    },
    {
      question: "How quickly is a design completed?",
      answer: "Each design project varies in time frame based on complexity and format, but in general, our projects are completed between 1-4 weeks."
    },
    {
      question: "Is Functions Global only a mobile app design agency?",
      answer: "NO, our services are not limited only to mobile apps UI and UX designs, along with mobile apps, we also do high-converting, intuitive designs for websites, landing pages, software, and digital platforms."
    },
    {
      question: "What perks will I get by choosing you?",
      answer: "Choosing Functions Global means you're not just hiring a UI UX design service company, you're gaining a strategic design partner. Here's what you get with us: Custom-Fit Designs, Figma-Based Collaboration, User-Centered Strategy, Mobile & Web Expertise, Speed & Scalability, Post-Delivery Support, Pixel-Perfect Quality, and a support team"
    },
    {
      question: "How should I begin with your services?",
      answer: "Steps are simple: all you gotta do is book a call or free consultation from the contact us page, and our team will reach out to you within 48 hours. After getting on a call, we'll understand your business's goals, audience, and niche and craft a tailored design draft for you"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/60 backdrop-blur-sm rounded-full border border-border mb-8">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-accent rounded-full" />
              </div>
              <span className="text-sm text-foreground font-medium uppercase tracking-wide">Questions & Answers</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-bold">
              Frequently Asked{" "}
              <span className="text-primary">
                Questions
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers. Here are the most common questions our clients ask about our UI/UX design services.
            </p>
          </motion.div>

          {/* Enhanced FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="group border-0 bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left hover:no-underline px-8 py-6 [&[data-state=open]>.chevron]:rotate-45">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-left">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="chevron flex-shrink-0 w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center transition-transform duration-300">
                        <Plus className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8 pt-0">
                      <div className="pl-16">
                        <div className="h-px bg-border mb-6" />
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/70 backdrop-blur-sm rounded-2xl border border-border shadow-sm p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 cursor-pointer">
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}