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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <ScrollReveal delay={100}>
              <Card className="h-full transform transition-transform duration-300 hover:scale-[1.02]">
                <CardContent className="h-full flex flex-col p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Basic pack</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-green-500">free</span>
                    </div>
                    <p className="text-muted-foreground mb-6">Best for: Anyone exploring AI automation but unsure where to start.</p>

                    <h4 className="font-semibold mb-2">What’s included:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Complete PRD (Product Requirement Document)",
                        "System audit & workflow analysis",
                        "Automation roadmap",
                        "Cost & efficiency projection",
                        "Tech stack & architecture recommendation",
                      ].map((f) => (
                        <li key={f} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant="secondary" size="lg" className="w-full" asChild>
                      <Link to="/contact">Book Free Call</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full transform transition-transform duration-300 hover:scale-[1.02] relative">
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">POPULAR</span>
                </div>
                <CardContent className="h-full flex flex-col p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Starter Pack</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">$4999</span>
                      <span className="text-muted-foreground"> (one-time)</span>
                    </div>
                    <p className="text-muted-foreground mb-6">Best for: Businesses starting their AI automation journey who want one solid automation built perfectly.</p>

                    <h4 className="font-semibold mb-2">What’s included:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "1 complete AI automation solution",
                        "2-week development cycle",
                        "Full documentation & user guides",
                        "14-day post-launch support",
                        "3 revision rounds",
                        "Performance metrics dashboard",
                        "Hosting, deployment & testing included",
                      ].map((f) => (
                        <li key={f} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full transform transition-transform duration-300 hover:scale-[1.02]">
                <CardContent className="h-full flex flex-col p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Business Partner</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">Custom</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground mb-6">Best for: Companies that need ongoing development, continuous improvements, and long-term strategy.</p>

                    <h4 className="font-semibold mb-2">What’s included:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Dedicated AI Engineer",
                        "VIP support queue",
                        "Live debugging & solution management",
                        "Documentation & user guides",
                        "Access to client portal",
                        "Monthly strategy + optimization sessions",
                        "Unlimited improvements/iterations",
                        "Chatbots, workflow automation, agents, integration work",
                      ].map((f) => (
                        <li key={f} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant="secondary" size="lg" className="w-full" asChild>
                      <Link to="/contact">Let's Automate</Link>
                    </Button>
                  </div>
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