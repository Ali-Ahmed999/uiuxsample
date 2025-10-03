import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Heart, Figma, Globe, Target, Workflow, TrendingUp } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Heart,
      title: "Human-Centered Approach",
      description: "We understand your audience first and then start developing according to your users' needs, psychology, and behavior to increase user interest and engagement"
    },
    {
      icon: Figma,
      title: "Pixel-Perfect Design in Figma",
      description: "We use tools like Figma UI UX to create creative, intuitive, and professional designs that keep your users' eyes"
    },
    {
      icon: Globe,
      title: "Cross-Industry skills",
      description: "From SaaS platforms and mobile apps to ecommerce and corporate websites, we've built clean, functional UI/UX for over 100+ clients."
    },
    {
      icon: Target,
      title: "Business-Focused Strategy",
      description: "They are not only about beauty, but about conversion, retention, and business growth. Our team designs with your KPIs and ROI in mind."
    },
    {
      icon: Workflow,
      title: "Complete Workflow",
      description: "From user research and wireframes to interactive prototypes and developer handoff, we take care of everything in-house, which makes us your one-stop-shop UI UX design company. and full end-to-end service"
    },
    {
      icon: TrendingUp,
      title: "Always on par with Trends",
      description: "We always stand on top of UI/UX trends and design systems, making your product work well, and futuristic"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[rgba(25,60,184,1)] mb-6 font-bold">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              At Functions Global, we don't only design interfaces; we craft meaningful platforms that generate results. As a modern UI UX design agency, we combine creativity, usability, and strategy to turn your ideas into intuitive, high-performing products.
            </p>
            <p className="text-lg text-primary mt-4">
              Here's what makes us the best UI UX design partner:
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}