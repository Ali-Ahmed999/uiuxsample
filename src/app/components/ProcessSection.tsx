"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Search, FileText, Palette, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      step: "Step one:",
      title: "Research",
      icon: Search,
      description: "We start with understanding your audience, business, and niche. We research and strategize to create a design that aligns with your goals.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop&crop=center"
    },
    {
      step: "Step two:",
      title: "Blueprint",
      icon: FileText,
      description: "After researching and finalizing a design, we begin to create a blueprint of your design, mapping out user interference and flows, ensuring a smooth experience",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=350&fit=crop&crop=center"
    },
    {
      step: "Step three:",
      title: "Design",
      icon: Palette,
      description: "After the feedback, we begin to bring life to your brand, with visually appealing and interactive design that keeps your audience locked and engaged",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=350&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-orange-100 relative overflow-hidden">
      {/* Enhanced section background elements with design-focused decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/8 to-blue-600/4 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/6 to-orange-600/3 rounded-full blur-3xl"
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/4 to-orange-400/4 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Design-inspired floating elements */}
        <motion.div
          className="absolute top-20 right-1/4 w-16 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/15 rounded-lg shadow-lg"
          animate={{ 
            rotate: [0, 5, -5, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/5 w-12 h-16 bg-gradient-to-b from-orange-500/25 to-orange-600/20 rounded-xl shadow-lg"
          animate={{ 
            rotate: [0, -10, 10, 0],
            x: [0, 15, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/6 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-orange-400/25 rounded-full shadow-md"
          animate={{ 
            scale: [1, 1.2, 0.8, 1],
            rotate: 360
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced section header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-full border border-blue-500/20 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Palette className="w-5 h-5 text-blue-600" />
              </motion.div>
              <span className="text-sm text-blue-700 font-medium uppercase tracking-wide">Our Process</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl text-blue-800 mb-8 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              How we{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700">
                proceed
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our design journey starts with deep research and analysis, followed by wireframes and flow mapping. We craft every detail based on user interaction, ensuring the final project is appealing and intuitive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-xl px-10 py-7 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                Let's Design Together
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Process cards */}
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >

                <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-sm h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Simple step number */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center z-20 shadow-sm">
                      <span className="text-lg font-semibold text-white">{index + 1}</span>
                    </div>
                    
                    {/* Clean step image */}
                    <div className="relative overflow-hidden rounded-t-xl">
                      <ImageWithFallback
                        src={step.image}
                        alt={`${step.title} process illustration`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      
                      {/* Simple icon overlay */}
                      <div className="absolute bottom-4 left-4 p-3 bg-card/95 backdrop-blur-sm rounded-2xl shadow-sm border border-border">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    {/* Content area that grows to fill available space */}
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="pb-4 pt-6">
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-accent uppercase tracking-wider">
                            {step.step}
                          </p>
                          <CardTitle className="text-2xl text-foreground">
                            {step.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pb-8 flex-grow flex items-center">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {step.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}