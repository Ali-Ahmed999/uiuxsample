"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Eye, UserCheck, TrendingUp, Clock, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function SignificanceSection() {
  const benefits = [
    {
      icon: Eye,
      title: "First Impressions Count",
      description: "To capture your users as soon as they open your site. A good, intuitive style helps in building early reputation and trust."
    },
    {
      icon: UserCheck,
      title: "Increased User Retention",
      description: "UX handles functionality, user flows, and making the entire experience smooth, logical, and fun"
    },
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "An effective, organized layout directs users to perform things, be it buying, registration, or further navigation."
    },
    {
      icon: Clock,
      title: "Saves Time & Cost in the Long Run",
      description: "We use tools like Figma UI UX to design the blueprint before the true development, saving you from expensive fixes later."
    },
    {
      icon: Zap,
      title: "Have an edge in the competition",
      description: "Gives you the right edge over other brands. Working with an experienced UI UX design agency gives you a competitive edge in both function and aesthetics."
    },
    {
      icon: Shield,
      title: "Builds Brand Trust & Credibility",
      description: "Professional UI/UX design instills confidence in your users, establishing your brand as trustworthy and reliable, which is crucial for long-term success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 relative overflow-hidden">
      {/* Enhanced rotating background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/8 to-blue-600/4 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/6 to-orange-600/3 rounded-full blur-3xl"
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-orange-400/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Additional geometric shapes */}
        <motion.div
          className="absolute top-32 right-1/4 w-16 h-16 bg-gradient-to-br from-orange-500/25 to-orange-700/12"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-700/10 rounded-lg"
          animate={{ rotate: -360, x: [0, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
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
              Significance of UI and UX Design
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8">
              Your UI UX design for your brand isn't merely about looks and aesthetics; it's something greater: how it feels, performs, and most of all, drives performance. If you're planning to launch a mobile app, a website, or a software business like SaaS, a good UI UX design agency can really help boost your user experience and brand.
            </p>
            <motion.h3 
              className="text-xl text-blue-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              This is why investing in the best UI UX design is necessary:
            </motion.h3>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Floating background elements for each card */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-orange-500/15 rounded-xl z-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15 + index * 2, repeat: Infinity, ease: "linear" }}
                />
                
                <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-blue-50/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] h-full">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-white/95 to-blue-50/70 rounded-xl backdrop-blur-xl" />
                  
                  <div className="relative z-10">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-2">
                        <motion.div 
                          className="p-3 bg-gradient-to-br from-blue-500/15 to-orange-500/10 rounded-2xl group-hover:from-blue-500/25 group-hover:to-orange-500/15 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <benefit.icon className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <CardTitle className="text-lg text-blue-800">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{benefit.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enhanced bottom message */}
          <motion.div 
            className="text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-white/90 to-orange-50/70 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl">
              {/* Subtle animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-orange-500/5 to-blue-500/5 rounded-2xl"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <p className="text-slate-600 max-w-4xl mx-auto">
                  At Functions Global, we go beyond visuals. Our team focuses on solving real user problems, aligning every pixel with your business goals using tools like Figma UI UX and best practices from the best UI UX design experts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}