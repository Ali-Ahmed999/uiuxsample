"use client";

import { motion } from "framer-motion";

export function ClientsSection() {
  const clients = [
    {
      name: "TechVision Inc.",
      industry: "Enterprise Software"
    },
    {
      name: "GlobalReach Solutions",
      industry: "Digital Marketing"
    },
    {
      name: "InnovateCore",
      industry: "Healthcare Technology"
    },
    {
      name: "NextGen Dynamics",
      industry: "Financial Services"
    },
    {
      name: "CloudFirst Systems",
      industry: "Cloud Infrastructure"
    },
    {
      name: "DataStream Analytics",
      industry: "Business Intelligence"
    },
    {
      name: "RetailPro Solutions",
      industry: "E-commerce Platform"
    },
    {
      name: "EduTech Innovations",
      industry: "Educational Technology"
    },
    {
      name: "MedConnect Solutions",
      industry: "Healthcare Platform"
    },
    {
      name: "FinanceFlow Systems",
      industry: "Banking Technology"
    },
    {
      name: "LogisticsPro",
      industry: "Supply Chain"
    },
    {
      name: "SmartCity Technologies",
      industry: "Urban Solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}


      <div className="w-full px-4 relative z-10">

        {/* Clean Section Header */}
        <motion.div 
          className="text-center mb-20 max-w-6xl mx-auto"
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
            <span className="text-sm text-foreground font-medium uppercase tracking-wide">Trusted Partners</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-bold">
            Trusted by{" "}
            <span className="text-primary">
              Leading Companies
            </span>
          </h3>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We've partnered with innovative companies across various industries to deliver exceptional UI/UX design solutions that drive business growth and user engagement
          </p>
        </motion.div>
        
        {/* Clean Client Names Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden py-16 px-2 px-[7px] py-[12px] mt-[0px] mr-[0px] mb-[-9px] ml-[0px]">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -3600],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="w-96 h-36 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm">
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <h4 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                        {client.name}
                      </h4>
                      <p className="text-base text-muted-foreground font-medium">
                        {client.industry}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Clean Stats Section */}
        <motion.div 
          className="grid grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "Happy Clients", icon: "👥" },
            { number: "200+", label: "Projects Delivered", icon: "🚀" },
            { number: "98%", label: "Client Satisfaction", icon: "⭐" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="p-8 bg-card/70 backdrop-blur-sm rounded-2xl border border-border shadow-sm">
                <div className="text-3xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
                  {stat.number}
                </div>
                <div className="text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Clean Testimonial Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-card/70 backdrop-blur-sm rounded-2xl border border-border shadow-sm p-12">
              <div className="text-4xl text-muted-foreground/40 mb-6 text-center">
                "
              </div>
              
              <blockquote 
                className="text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8"
              >
                Functions Global transformed our digital presence with their{" "}
                <span className="text-primary font-semibold">
                  exceptional UI/UX design
                </span>
                . The user engagement on our platform increased by{" "}
                <span className="text-accent font-semibold">
                  300%
                </span>{" "}
                after the redesign.
              </blockquote>
              
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="text-xl text-white font-semibold">AS</span>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground mb-1">
                    Arham Siddiqui
                  </div>
                  <div className="text-muted-foreground font-medium">CEO, Functions Global</div>
                  
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}