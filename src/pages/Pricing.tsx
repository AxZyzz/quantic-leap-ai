import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const Pricing = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready To Scale?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the partnership level that fits your needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <Card className="relative hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    POPULAR
                  </span>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">Business Partner</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$25,000</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Ongoing development with strategy, custom automation, and optimization
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Dedicated AI Engineer",
                      "VIP support queue",
                      "Documentation and user guides",
                      "Live debugging and solution management",
                      "Client portal access",
                      "Monthly strategy sessions",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <Link to="/contact">Book Discovery Call</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">Enterprise Partner</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Large-scale operations with advanced infrastructure and compliance needs
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Everything in Business Partner",
                      "Multiple dedicated engineers",
                      "Priority deployment",
                      "Custom SLA agreements",
                      "Advanced security & compliance",
                      "Quarterly business reviews",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;