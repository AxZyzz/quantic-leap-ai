import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "A2B AI Technologies",
  "description": "Custom AI automation solutions from free audits to long-term operational support partnerships.",
  "brand": { "@type": "Organization", "name": "A2B AI Technologies" },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "0",
    "priceCurrency": "USD",
    "offerCount": "3",
    "offers": [
      { "@type": "Offer", "name": "FREE AUDIT", "price": "0", "priceCurrency": "USD", "description": "Free workflow audit and opportunity analysis session" },
      { "@type": "Offer", "name": "BOOK A CALL", "price": "0", "priceCurrency": "USD", "description": "Project-based custom AI automation solution discussion" },
      { "@type": "Offer", "name": "CUSTOM PARTNERSHIP", "price": "0", "priceCurrency": "USD", "description": "Custom monthly partnership with dedicated AI engineer" }
    ]
  }
};

const Pricing = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="AI Automation Pricing | Free Audit & Consulting | A2B AI Technologies"
        description="Explore A2B's AI automation pricing: Free AI audits, project-based estimates, and custom monthly partnerships. Start scaling your business today."
        canonical="https://a2b.services/pricing"
        schema={pricingSchema}
      />
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ready To Scale?</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the partnership level that fits your needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* FREE AUDIT */}
            <ScrollReveal delay={100}>
              <Card className="h-full transform transition-transform duration-300 hover:scale-[1.02]">
                <CardContent className="h-full flex flex-col p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-wide text-foreground">FREE AUDIT</h3>
                    <div className="mb-6 h-[40px] flex items-baseline">
                      <span className="text-4xl font-bold text-green-500">Free</span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-sm">
                      Best for: Businesses exploring AI automation and looking for the right starting point.
                    </p>

                    <h4 className="font-semibold mb-2 text-sm text-foreground">What’s included:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Workflow & operations discussion",
                        "AI opportunity analysis",
                        "High-level automation strategy",
                        "Feasibility guidance",
                        "Recommended solution direction",
                      ].map((f) => (
                        <li key={f} className="flex items-start text-sm">
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

            {/* BOOK A CALL */}
            <ScrollReveal delay={200}>
              <Card className="h-full transform transition-transform duration-300 hover:scale-[1.02] relative">
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">POPULAR</span>
                </div>
                <CardContent className="h-full flex flex-col p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-wide text-foreground">BOOK A CALL</h3>
                    <div className="mb-6 h-[40px] flex items-baseline">
                      <span className="text-4xl font-bold text-blue-500">Custom</span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-sm">
                      Best for: Companies ready to discuss a custom AI automation solution tailored to their workflow.
                    </p>

                    <h4 className="font-semibold mb-2 text-sm text-foreground">What’s included:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Requirement & workflow discussion",
                        "Product and process evaluation",
                        "Solution planning session",
                        "Scope estimation",
                        "Custom proposal & pricing",
                      ].map((f) => (
                        <li key={f} className="flex items-start text-sm">
                          <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/contact">Schedule Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* CUSTOM PARTNERSHIP */}
            <ScrollReveal delay={300}>
              <Card className="h-full transform transition-transform duration-300 hover:scale-[1.02]">
                <CardContent className="h-full flex flex-col p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-wide text-foreground">CUSTOM PARTNERSHIP</h3>
                    <div className="mb-6 h-[40px] flex items-baseline">
                      <span className="text-4xl font-bold text-blue-500">Custom</span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-sm">
                      Best for: Businesses needing long-term AI development, optimization, and operational support.
                    </p>

                    <h4 className="font-semibold mb-2 text-sm text-foreground">What’s included:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Dedicated AI engineer",
                        "Continuous workflow improvements",
                        "AI system scaling & expansion",
                        "Priority support & debugging",
                        "Monthly strategy sessions",
                        "Ongoing optimization & maintenance",
                      ].map((f) => (
                        <li key={f} className="flex items-start text-sm">
                          <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant="secondary" size="lg" className="w-full" asChild>
                      <Link to="/contact">Contact Us</Link>
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