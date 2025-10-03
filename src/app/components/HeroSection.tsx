"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight, Sparkles, Palette, Monitor, Figma, Grid3X3, Eye } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/80 via-background to-orange-50/60">
      {/* Modern Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 via-accent/3 to-primary/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: 360,
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-accent/4 via-primary/3 to-accent/6 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1.3, 1],
            rotate: -360,
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Floating particles grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-4 opacity-40">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-primary/60' : i % 3 === 1 ? 'bg-accent/60' : 'bg-blue-400/40'
              }`}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-8 lg:pr-8"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Floating Badge */}
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-xl border border-primary/20 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(37, 99, 235, 0.2)"
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-base font-semibold text-primary">
                  UI UX design services
                </span>
                <motion.div
                  className="w-2 h-2 bg-accent rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              {/* Main Headline - Modern Typography */}
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative">
                    {"That Take User Experience to the Next Level".split(" ").map((word, index) => (
                      <motion.span 
                        key={index} 
                        className="inline-block mr-4 mb-2"
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <motion.span
                          className="relative inline-block text-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary transition-all duration-300 cursor-default"
                          whileHover={{ 
                            scale: 1.05,
                            y: -2
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 15 
                          }}
                        >
                          {word}
                          {/* Subtle underline animation */}
                          <motion.div
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0"
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.span>
                      </motion.span>
                    ))}
                  </div>
                </motion.h1>
              </div>

              {/* Subheading with Enhanced Styling */}
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-accent mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                Designs that grab eyes
              </motion.h2>

              {/* Description in Modern Card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="relative bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
                  <p className="relative text-lg text-muted-foreground leading-relaxed">
                    At Function Global, we don't just design beautiful interference but craft an intuitive user-centered experience that catches users' attention, keeps eyes locked on your platform, boosts engagement, and starts real growth. Mobile apps, web dashboard, or SaaS platform, our UI UX design services are perfect for your users and goals
                  </p>
                </div>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  className="relative group inline-block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <Button 
                    size="lg" 
                    className="relative text-xl px-10 py-7 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-2xl shadow-2xl border-0 font-semibold tracking-wide overflow-hidden mt-[-36px] mr-[0px] mb-[1px] ml-[0px] px-[35px] py-[27px]"
                  >
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <span className="relative z-10">Let's Design Together</span>
                    
                    <motion.div
                      className="relative z-10 ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 group-hover:rotate-[-10deg] transition-transform duration-300" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Visual */}
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Main Image Container with 3D Effect */}
              <div className="relative group">
                
                {/* 3D Container */}
                <motion.div
                  className="relative w-full max-w-lg mx-auto"
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 2,
                    scale: 1.02
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 30 
                  }}
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  {/* Glowing border effect */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-[3rem] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Glass morphism container */}
                  <div className="relative bg-card/40 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] shadow-2xl overflow-hidden">
                    <div className="p-6">
                      <ImageWithFallback
                        src="/" // This now correctly points to the public directory
                        alt="UI/UX Design Process"
                        className="rounded-2xl w-full object-cover shadow-xl group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      
                      {/* Floating UI indicators */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Color palette indicator */}
                        <motion.div 
                          className="absolute top-8 right-8 bg-card/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-border/60"
                          animate={{ 
                            y: [0, -8, 0],
                            rotate: [0, 2, -2, 0]
                          }}
                          transition={{ duration: 5, repeat: Infinity }}
                        >
                          <div className="flex gap-2">
                            <motion.div 
                              className="w-3 h-3 bg-primary rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div 
                              className="w-3 h-3 bg-accent rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            />
                            <motion.div 
                              className="w-3 h-3 bg-purple-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            />
                          </div>
                        </motion.div>
                        
                        {/* Grid tool indicator */}
                        <motion.div 
                          className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-border/60"
                          animate={{ 
                            x: [0, 8, 0],
                            rotate: [0, -3, 3, 0]
                          }}
                          transition={{ duration: 6, repeat: Infinity }}
                        >
                          <Grid3X3 className="w-4 h-4 text-primary" />
                        </motion.div>

                        {/* Progress indicators */}
                        <motion.div
                          className="absolute top-1/2 right-6 bg-card/90 backdrop-blur-xl rounded-xl p-3 shadow-xl border border-border/50"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <div className="space-y-2">
                            <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-primary rounded-full"
                                animate={{ width: ["20%", "80%", "20%"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                            </div>
                            <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-accent rounded-full"
                                animate={{ width: ["30%", "90%", "30%"] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Design Tools Ecosystem */}
              
              {/* Figma Tool */}
              <motion.div 
                className="absolute -top-16 -right-16 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground p-5 rounded-3xl shadow-2xl z-20"
                animate={{ 
                  rotate: 360,
                  y: [0, -12, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity },
                  scale: { duration: 3, repeat: Infinity }
                }}
                whileHover={{ scale: 1.2, rotate: 45 }}
              >
                <Figma className="w-7 h-7" />
              </motion.div>
              
              {/* Palette Tool */}
              <motion.div 
                className="absolute -top-8 -left-20 bg-gradient-to-br from-accent to-orange-600 text-accent-foreground p-5 rounded-3xl shadow-2xl z-20"
                animate={{ 
                  rotate: -360,
                  x: [0, 15, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  x: { duration: 5, repeat: Infinity },
                  scale: { duration: 4, repeat: Infinity }
                }}
                whileHover={{ scale: 1.25, rotate: -45 }}
              >
                <Palette className="w-7 h-7" />
              </motion.div>
              
              {/* Monitor */}
              <motion.div 
                className="absolute top-1/4 -right-24 bg-card/95 backdrop-blur-xl border border-border/60 p-4 rounded-2xl shadow-2xl z-15"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity 
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Monitor className="w-6 h-6 text-primary mb-1" />
                <motion.div 
                  className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  animate={{ width: ["20px", "35px", "20px"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
              

              
              {/* Eye Icon */}
              <motion.div 
                className="absolute top-1/2 -left-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl z-20"
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.2, 1],
                  y: [0, -8, 0]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity },
                  y: { duration: 4, repeat: Infinity }
                }}
                whileHover={{ scale: 1.3 }}
              >
                <Eye className="w-6 h-6" />
              </motion.div>
              

              
              {/* Additional Floating Geometric Elements */}
              <motion.div 
                className="absolute -top-12 left-1/3 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/15 rounded-3xl backdrop-blur-sm border border-primary/30 z-5"
                animate={{ 
                  rotate: 360, 
                  scale: [1, 1.15, 1],
                  y: [0, -12, 0]
                }}
                transition={{ 
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity },
                  y: { duration: 4, repeat: Infinity }
                }}
              />
              <motion.div 
                className="absolute -bottom-16 -right-8 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/15 rounded-2xl backdrop-blur-sm border border-accent/40 z-5"
                animate={{ 
                  rotate: -360, 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity },
                  scale: { duration: 3, repeat: Infinity }
                }}
              />
              <motion.div 
                className="absolute top-1/3 -left-8 w-12 h-12 bg-gradient-to-br from-purple-400/25 to-pink-400/20 rounded-full backdrop-blur-sm border border-purple-300/40 z-5"
                animate={{ 
                  rotate: 360, 
                  x: [0, 12, 0],
                  scale: [1, 1.25, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  x: { duration: 3, repeat: Infinity },
                  scale: { duration: 2, repeat: Infinity }
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}