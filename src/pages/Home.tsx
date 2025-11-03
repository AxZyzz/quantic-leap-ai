import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Workflow,
  Brain,
  Database,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const solutions = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Transform manual processes into intelligent, automated workflows that save time and reduce errors.",
    },
    {
      icon: Brain,
      title: "Custom AI Agents",
      description:
        "Deploy specialized AI agents that handle complex tasks, make decisions, and learn from interactions.",
    },
    {
      icon: Database,
      title: "Intelligent Data Systems",
      description:
        "Turn raw data into actionable insights with advanced analytics and pattern recognition.",
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description:
        "Identify bottlenecks and optimize operations with AI-powered process mining and analysis.",
    },
    {
      icon: Target,
      title: "AI Strategy & Consulting",
      description:
        "Get expert guidance on AI implementation roadmaps, ROI analysis, and strategic planning.",
    },
    {
      icon: Zap,
      title: "System Integration",
      description:
        "Seamlessly connect AI solutions with your existing tech stack for unified operations.",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Get More Output From Less",
      description:
        "AI systems that identify patterns and turn overlooked inputs into profit-driving outputs.",
    },
    {
      icon: Users,
      title: "Scale Without Increasing Headcount",
      description: "Grow operations without adding payroll through intelligent automation.",
    },
    {
      icon: Zap,
      title: "Build Fast Without Breaking Systems",
      description: "Launch AI solutions in weeks with modular architecture and rapid deployment.",
    },
    {
      icon: Shield,
      title: "Deploy Securely With Confidence",
      description: "Enterprise-grade security with API controls, access management, and compliance.",
    },
  ];

  const caseStudies = [
    {
      industry: "Insurance",
      challenge: "Manual claims processing taking 5-7 days per claim",
      result: "Reduced to 2 hours with 95% accuracy",
      roi: "300% ROI in 6 months",
    },
    {
      industry: "E-commerce",
      challenge: "Customer support overwhelmed with repetitive queries",
      result: "85% of queries handled by AI, 40% faster response time",
      roi: "$2M annual savings",
    },
    {
      industry: "Healthcare",
      challenge: "Patient data scattered across multiple systems",
      result: "Unified data system with real-time analytics",
      roi: "50% improvement in patient outcomes",
    },
  ];

  const testimonials = [
    {
      quote:
        "A2B transformed our operations completely. What used to take our team days now happens automatically in hours.",
      author: "Sarah Johnson",
      role: "COO",
      company: "TechCorp",
      rating: 5,
    },
    {
      quote:
        "The ROI was incredible. We recovered our investment in 4 months and continue to see compound benefits.",
      author: "Michael Chen",
      role: "CEO",
      company: "DataFlow Inc",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Scale Without Increasing
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  {" "}
                  Headcount
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Automate operations, maximize ROI, and grow your business with custom AI solutions
                built by expert engineers.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book Discovery Call</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-sm text-muted-foreground mt-8">
                Trusted by category leaders across industries
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything You Need to Automate, Scale, and Grow
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                      <solution.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-accent hover:underline mt-4 text-sm font-medium"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Real Businesses. Real Automation ROI
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how we've helped companies transform their operations
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.industry} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                      {study.industry}
                    </div>
                    <h3 className="font-semibold mb-3 text-lg">Challenge</h3>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>
                    <h3 className="font-semibold mb-3 text-lg">Result</h3>
                    <p className="text-muted-foreground mb-4">{study.result}</p>
                    <div className="pt-4 border-t">
                      <p className="text-accent font-bold text-lg">{study.roi}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Makes Our Partnership Different
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                More than just a service provider—your long-term AI partner
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.author} delay={index * 100}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
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

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <CardContent className="pt-16 pb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Schedule a free consultation to discuss your AI automation needs and discover how
                  we can help you scale.
                </p>
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
