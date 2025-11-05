import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { WebGLShader } from "@/components/ui/web-gl-shader";
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
// import PartnersScroll from "@/components/PartnersScroll"; // Temporarily commented out
import FeaturesSection from "@/components/FeaturesSection";
import ToolsSection from "@/components/ToolsSection";

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
      industry: "financial services",
      challenge: "This firm was lossing 17-20% of their potential clients while onboarding",
      result: "Onboarding time dropped by 60%, cutting the process from an hour to 20 minutes. The firm now saves 1–2% per client in admin costs, improves client retention by 10–15%.",
      roi: "achieves roughly 200% ROI over 3–4 years from efficiency gains alone.",
    },
    {
      industry: "Religious & Educational Content",
      challenge: "I need 1,500-page PDFs converted to animated videos, and the standard approach costs a fortune.",
      result: " A fully automated system built in 2 days that cut costs from $5,000+ to $700, eliminated $650/month fees, and processed each PDF in just 2 hours instead of 3 weeks.",
      roi: "700% cost savings and zero recurring expenses long-term automation at no ongoing cost.",
    },
    {
      industry: "Healthcare",
      challenge: "The startup needed an automated WhatsApp system to collect patient details and reports.",
      result: "Built a seamless WhatsApp workflow that handled data, reports, and visit requests automatically.",
      roi: "Cut manual work by 70% and boosted efficiency with zero recurring cost.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Using A2B for my automations in n8n was the best decision I have ever taken. They delivered my project timely and also I got priority feedbacks whenever needed.",
      author: "Siddhant Gupta",
      role: "Backend Engineer",
      company: "EdwanceAI",
      rating: 5,
    },
    {
      quote:
        "A2B transformed our operations completely. What used to take our team days now happens automatically in hours.",
      author: "Sarah Johnson",
      role: "COO",
      company: "TechCorp",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background/80">
          <WebGLShader />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight mix-blend-difference">
                Scale Without Increasing
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mix-blend-normal">
                  {" "}
                  Headcount
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto mix-blend-difference">
                Automate operations, maximize ROI, and grow your business with custom AI solutions
                built by expert engineers.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="acrylic" size="lg" asChild>
                  <Link to="/contact">Let's Automate</Link>
                </Button>
                <Button variant="acrylicOutline" size="lg" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </ScrollReveal>
            {/* Commented out temporarily - Trusted by Brands section
            <ScrollReveal delay={300}>
              <p className="text-sm text-muted-foreground mt-8 mix-blend-difference">
                Trusted by category leaders across industries
              </p>
            </ScrollReveal>
            */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-4 pb-6">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <solution.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1">{solution.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3">{solution.description}</p>
                        <Link
                          to="/services"
                          className="inline-flex items-center text-accent hover:underline mt-1 text-sm font-medium"
                        >
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Temporarily commented out
      <PartnersScroll />
      */}

      {/* Features Section */}
      <FeaturesSection />

      {/* Tools Integration Section */}
      <ToolsSection />

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
                    <div className="flex justify-between items-start">
                      <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                        {study.industry}
                      </div>
                      {(study.industry === "financial services" || study.industry === "Religious & Educational Content") && (
                        <a 
                          href="https://www.linkedin.com/posts/rahul-v-k_%F0%9D%90%93%F0%9D%90%A1%F0%9D%90%A2%F0%9D%90%AC-%F0%9D%90%9C%F0%9D%90%A5%F0%9D%90%A2%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-%F0%9D%90%A3%F0%9D%90%AE%F0%9D%90%AC%F0%9D%90%AD-%F0%9D%90%A9%F0%9D%90%9A%F0%9D%90%A2%F0%9D%90%9D-%F0%9D%90%A6%F0%9D%90%9E-activity-7375086404386807808-gVcy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0RNokBO_aQUDwWXD6sGmbeS1CMusGKIEI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                          </svg>
                        </a>
                      )}
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
