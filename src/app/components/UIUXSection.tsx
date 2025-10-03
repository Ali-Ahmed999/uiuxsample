"use client";

import { Card } from "@/app/components/ui/card";
import { Palette, Users, Zap, CheckCircle, ArrowRight, Brain, Eye } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "framer-motion";

export function UIUXSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-orange-100 relative overflow-hidden">
      {/* Enhanced rotating background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/8 to-blue-600/4 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/6 to-orange-600/3 rounded-full blur-3xl"
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-orange-400/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Additional geometric shapes */}
        <motion.div
          className="absolute top-32 right-1/4 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-700/15"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/25 to-blue-700/12 rounded-lg"
          animate={{ rotate: -360, x: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-blue-800 mb-6 font-bold">
              What is UI and UX Design?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              UI, aka (User Interference), and UX, also (User Experience), are both the primary pillars for a successful brand, platform, or product, from mobile apps and websites to software; they both play a crucial role in user interaction and engagement for lasting achievement
            </p>
          </motion.div>

          <div className="mb-12">
            <motion.h3 
              className="text-center text-xl text-blue-700 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's differentiate between them
            </motion.h3>
            
            {/* Modern UI vs UX Comparison */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16 lg:items-stretch">
              {/* UX Design Card - Modern Glass Design */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative flex h-full"
              >
                <div className="relative flex-1 flex flex-col">
                  {/* Enhanced floating background elements */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl z-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl z-0"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-blue-50/60 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-white/95 to-blue-50/70 rounded-xl backdrop-blur-xl" />
                    
                    <div className="relative z-10 p-8 flex-1 flex flex-col">
                      {/* UX Image with modern overlay */}
                      <div className="relative mb-6 overflow-hidden rounded-2xl">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=500&h=280&fit=crop&crop=center"
                          alt="UX Research and User Flow Design"
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/40 via-transparent to-transparent" />
                        
                        {/* Floating icon */}
                        <motion.div 
                          className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <Brain className="w-6 h-6 text-blue-600" />
                        </motion.div>
                      </div>

                      {/* Header with animated icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="p-3 bg-gradient-to-br from-blue-500/15 to-orange-500/10 rounded-2xl group-hover:from-blue-500/25 group-hover:to-orange-500/15 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Users className="w-7 h-7 text-blue-600" />
                        </motion.div>
                        <div>
                          <h4 className="text-2xl text-blue-800 mb-1">UX Design</h4>
                          <p className="text-blue-600/80 text-sm uppercase tracking-wide">User Experience</p>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 text-lg">
                        UX Design is all about a product's function and how it feels
                      </p>

                      {/* Modern feature list */}
                      <div className="space-y-4 flex-1">
                        {[
                          "Emphasizes user research, behavior, and requirements",
                          "Take care of functionality, user flow, and structures",
                          "Making a product is intuitive and workable without any flaws",
                          "Example: Responsible for making the payment process on the app successful"
                        ].map((feature, index) => (
                          <motion.div 
                            key={index}
                            className="flex items-start gap-3 group/item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className="mt-1 p-1 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                            </motion.div>
                            <p className="text-sm group-hover/item:text-blue-700 transition-colors duration-200">
                              {feature.includes("Example:") ? (
                                <>
                                  <span className="text-blue-700 font-medium">Example:</span>
                                  {feature.replace("Example:", "")}
                                </>
                              ) : feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* UI Design Card - Modern Glass Design */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="group relative flex h-full"
              >
                <div className="relative flex-1 flex flex-col">
                  {/* Enhanced floating background elements */}
                  <motion.div 
                    className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl z-0"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl z-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-orange-50/60 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-white/95 to-orange-50/70 rounded-xl backdrop-blur-xl" />
                    
                    <div className="relative z-10 p-8 flex-1 flex flex-col">
                      {/* UI Image with modern overlay */}
                      <div className="relative mb-6 overflow-hidden rounded-2xl">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=280&fit=crop&crop=center"
                          alt="UI Design Elements and Visual Interface"
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-800/40 via-transparent to-transparent" />
                        
                        {/* Floating icon */}
                        <motion.div 
                          className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          animate={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <Eye className="w-6 h-6 text-orange-600" />
                        </motion.div>
                      </div>

                      {/* Header with animated icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="p-3 bg-gradient-to-br from-orange-500/15 to-blue-500/10 rounded-2xl group-hover:from-orange-500/25 group-hover:to-blue-500/15 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          animate={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity }}
                        >
                          <Palette className="w-7 h-7 text-orange-600" />
                        </motion.div>
                        <div>
                          <h4 className="text-2xl text-orange-800 mb-1">UI Design</h4>
                          <p className="text-orange-600/80 text-sm uppercase tracking-wide">User Interface</p>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 text-lg">
                        On the other hand, UI Design is about how products look and interact
                      </p>

                      {/* Modern feature list */}
                      <div className="space-y-4 flex-1">
                        {[
                          "Works on the visible part, such as colors, typography, and layout",
                          "Responsible for crafting buttons, icons, and screens that users interact with",
                          "Ensures consistency and brand alignment across the interface",
                          "Example: Choosing the right font and color scheme for a mobile app"
                        ].map((feature, index) => (
                          <motion.div 
                            key={index}
                            className="flex items-start gap-3 group/item"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className="mt-1 p-1 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full"
                              animate={{ rotate: -360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                              <CheckCircle className="w-4 h-4 text-orange-600" />
                            </motion.div>
                            <p className="text-sm group-hover/item:text-orange-700 transition-colors duration-200">
                              {feature.includes("Example:") ? (
                                <>
                                  <span className="text-orange-700 font-medium">Example:</span>
                                  {feature.replace("Example:", "")}
                                </>
                              ) : feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced blend message with modern design */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent h-px top-1/2" />
            </div>
            
            <motion.div 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/90 to-orange-50/70 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-6 h-6 text-orange-600" />
              </motion.div>
              <span className="text-blue-700 text-lg font-medium">Their blend generates delightful outcomes</span>
              <ArrowRight className="w-5 h-5 text-orange-600/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}