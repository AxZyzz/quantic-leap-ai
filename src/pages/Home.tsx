import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { homePageSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { HeroCardCarousel } from "@/components/ui/HeroCardCarousel";
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


// import PartnersScroll from "@/components/PartnersScroll"; // Temporarily commented out
import FeaturesSection from "@/components/FeaturesSection";
import ToolsSection from "@/components/ToolsSection";
import ToolsMarquee from "@/components/ToolsMarquee";
import VideoTestimonials from "@/components/VideoTestimonials";

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
      industry: "Digital Marketing & SEO",
      link: "/case-studies/seo-report-automation",
      challenge: "A freelance SEO consultant spent 2-3 full working days per client each month manually pulling data from Google Search Console, building charts, writing insights, and formatting PDFs -- consuming 50% of his productive month.",
      result: "A fully automated weekly reporting system: data from GSC + GA4 merged, AI-generated insights written, and a polished PDF delivered to his inbox every Monday at 8 AM. Zero manual steps.",
      roi: "2-3 days per report reduced to under 30 seconds. 10 working days reclaimed every month, enabling new client acquisition without adding hours.",
    },
    {
      industry: "Religious & Educational Content",
      link: "/case-studies/sacred-text-publishing",
      challenge: "A religious organization needed to convert a 1,500-page sacred Gurmukhi text into thousands of animated social media videos. Manual production would take months; external video APIs would cost thousands of dollars.",
      result: "A fully automated pipeline using n8n, Gemini AI, and FFmpeg generates verse + explanation videos locally: each video in 1.5 minutes, at zero per-video cost, with AI-accurate Gurmukhi OCR and culturally appropriate styling.",
      roi: "100x efficiency: months of work reduced to hours. Zero ongoing costs. Unlimited scalability to any language, script, or religious text.",
    },
    {
      industry: "Healthcare & Medical Services",
      link: "/case-studies/medical-consultation",
      challenge: "A multi-hospital network was handling 100-200+ daily patient WhatsApp inquiries manually. Scaling to 2,000+ patients/day would require hiring a large operations team -- unsustainable and error-prone.",
      result: "A multilingual, multimodal WhatsApp system handling all consultation intake automatically: text, voice notes, and medical documents processed 24/7 with structured patient data delivered directly to doctors.",
      roi: "Zero staff for 100-200+ daily inquiries. Scales from 200 to 2,000+ patients/day with no additional headcount. Doctors receive clean, organized records instead of scattered chats.",
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
      <SEO
        title="A2B AI Technologies | AI Automation Solutions That Scale Your Business"
        description="Transform your business with custom AI automation solutions. We are an enterprise-grade AI agency and SaaS product company helping you automate operations and scale without increasing headcount."
        canonical="https://a2b.services"
        schema={homePageSchema}
      />
      {/* Hero Section */}
      <section className="relative lg:min-h-[90vh] pt-32 pb-16 flex items-center overflow-hidden bg-background">
        {/* Removed absolute background shader to place it in the grid instead */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="flex flex-col text-left">
              <ScrollReveal>
                <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold mb-6 leading-[1.1] tracking-tight">
                  Scale Without Increasing
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent block mt-2">
                    Headcount
                  </span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Automate operations, maximize ROI, and grow your business with custom AI solutions
                  built by expert engineers.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button variant="acrylic" size="lg" className="w-full sm:w-auto h-12 px-8 text-base" asChild>
                    <Link to="/contact">Let's Automate</Link>
                  </Button>
                  <Button variant="acrylicOutline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base" asChild>
                    <Link to="/case-studies">View Case Studies</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Scrolling Card Carousel */}
            <div className="hidden lg:block relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
              <HeroCardCarousel />
            </div>

          </div>
        </div>
      </section>

      {/* Tools Marquee - scrolling logos */}
      <ToolsMarquee />

      {/* Solutions Section */}
      <section className="py-20">
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
                          to="/case-studies"
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
                      <Link
                        to={study.link}
                        className="text-accent hover:text-accent/80 text-xs font-medium flex items-center gap-1 mt-1"
                      >
                        Full case <ArrowRight className="h-3 w-3" />
                      </Link>
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
      <section className="py-20">
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
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            </div>
          </ScrollReveal>

          {/* Video Testimonials */}
          <VideoTestimonials />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
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

          <ScrollReveal delay={300}>
            <div className="mt-16 flex justify-center px-4">
              <a
                href="https://www.trustpilot.com/review/a2b.services?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
              >
                <span>Review us on</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#00b67a] group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                <span className="font-semibold text-foreground">Trustpilot</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-8 pb-20">
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
