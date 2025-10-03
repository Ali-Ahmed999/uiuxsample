import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Search, Palette, Smartphone, Globe } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "UX Research",
      description: "We do deep research in your business's niche, analyze your competitors, and the market. With an industry-level UX method to gain insights that help make designs that convert",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Our UI/UX design skills are a perfect blend of user requirements and business goals, creating interfaces that click and function the best. We prefer usability and accessibility above everything, ensuring you that our designs are intuitive and will serve the needs of a wide range of user groups.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Smartphone,
      title: "Mobile App/ Website design",
      description: "We create user interactive mobile app design that clicks and holds the user's attention, an ideal approach for your business to get more conversions",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Globe,
      title: "Landing Page design",
      description: "Our expertise in designing visually stunning and performance-optimized landing pages makes visitors into buyers. Whether it's for a product launch, lead capture, or a sales funnel",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[rgba(25,60,184,1)] mb-6 font-bold">
              Our Services
            </h2>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                {/* Service Image */}
                <div className="p-0">
                  <ImageWithFallback
                    src={service.image}
                    alt={`${service.title} service illustration`}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}