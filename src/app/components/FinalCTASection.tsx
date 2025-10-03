import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center"
          alt="Team collaboration background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Final CTA */}
          <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-12 border border-border shadow-lg">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl md:text-3xl text-primary">
                Let's talk about your project today
              </h3>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your ideas into stunning, user-centered designs? Get in touch with our expert team and let's create something amazing together.
              </p>
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Contact us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}