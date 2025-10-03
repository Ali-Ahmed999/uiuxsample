import { Button } from "@/app/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
// import healthcareImage from 'figma:asset/2b685fb2a5b4f20a0a488ad4c059ff247df3a0d3.png';

export function PortfolioSection() {
  const portfolioItems = [
    {
      title: "E-commerce Mobile App",
      category: "Mobile App Design",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Banking App Interface",
      category: "Fintech Design",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Food Delivery Platform",
      category: "Mobile & Web",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Healthcare Portal",
      category: "Healthcare Design",
      // image: healthcareImage
    },
    {
      title: "Travel Booking App",
      category: "Travel & Tourism",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[rgba(25,60,184,1)] mb-8 font-bold">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Discover our latest work and successful projects across various industries
            </p>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
                  <div className="relative">
                    {/* <ImageWithFallback */}
                      // src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    {/* /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-primary mb-2 group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get on a Free call with our design expert
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}