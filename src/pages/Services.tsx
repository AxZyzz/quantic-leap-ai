import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import {
  Workflow,
  Brain,
  Database,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "workflow",
      icon: Workflow,
      title: "AI Workflow Automation",
      subtitle: "Transform manual processes into intelligent automated systems",
      description:
        "Eliminate repetitive tasks and streamline operations with custom workflow automation. Our AI-powered solutions learn from your processes and continuously optimize for efficiency, accuracy, and speed.",
      features: [
        "Process mining and optimization",
        "Document processing and OCR",
        "Automated data entry and validation",
        "Intelligent routing and approvals",
        "Custom business rule engines",
        "Integration with existing systems",
      ],
      useCases: [
        "Insurance claims processing",
        "Invoice and expense management",
        "Customer onboarding workflows",
        "Compliance and audit automation",
      ],
      outcomes: [
        "70-90% reduction in processing time",
        "95%+ accuracy rates",
        "Significant cost savings",
        "Improved employee satisfaction",
      ],
    },
    {
      id: "agents",
      icon: Brain,
      title: "Custom AI Agents",
      subtitle: "Deploy intelligent agents that work 24/7 for your business",
      description:
        "Create specialized AI agents that handle complex tasks, make decisions, and learn from interactions. From customer service to data analysis, our agents integrate seamlessly into your operations.",
      features: [
        "Natural language processing",
        "Multi-channel deployment",
        "Context-aware responses",
        "Learning and adaptation",
        "Human handoff protocols",
        "Performance analytics",
      ],
      useCases: [
        "Customer support automation",
        "Sales qualification and lead scoring",
        "Data analysis and reporting",
        "Content generation and curation",
      ],
      outcomes: [
        "85% reduction in response time",
        "40-60% cost savings",
        "24/7 availability",
        "Scalable without headcount increase",
      ],
    },
    {
      id: "data",
      icon: Database,
      title: "Intelligent Data Systems",
      subtitle: "Turn raw data into actionable insights with AI",
      description:
        "Build comprehensive data systems that collect, analyze, and act on information automatically. Our solutions provide real-time insights and predictive analytics to drive better decisions.",
      features: [
        "Data integration and ETL",
        "Real-time analytics dashboards",
        "Predictive modeling",
        "Anomaly detection",
        "Automated reporting",
        "Data quality management",
      ],
      useCases: [
        "Customer behavior analysis",
        "Inventory optimization",
        "Fraud detection",
        "Predictive maintenance",
      ],
      outcomes: [
        "360-degree data visibility",
        "50% faster decision-making",
        "Improved forecasting accuracy",
        "Risk mitigation",
      ],
    },
    {
      id: "optimization",
      icon: TrendingUp,
      title: "Process Mining & Optimization",
      subtitle: "Discover hidden inefficiencies and optimization opportunities",
      description:
        "Use AI-powered process mining to visualize, analyze, and optimize your business processes. Identify bottlenecks, reduce costs, and improve overall operational efficiency.",
      features: [
        "Process discovery and mapping",
        "Bottleneck identification",
        "Root cause analysis",
        "Simulation and modeling",
        "Continuous monitoring",
        "Optimization recommendations",
      ],
      useCases: [
        "Supply chain optimization",
        "Manufacturing process improvement",
        "Service delivery enhancement",
        "Resource allocation optimization",
      ],
      outcomes: [
        "20-40% efficiency improvement",
        "Reduced operational costs",
        "Better resource utilization",
        "Data-driven decision making",
      ],
    },
    {
      id: "consulting",
      icon: Target,
      title: "AI Strategy & Consulting",
      subtitle: "Expert guidance for your AI transformation journey",
      description:
        "Get strategic guidance on AI implementation from experts who understand both technology and business. We help you build a roadmap that aligns with your goals and delivers measurable ROI.",
      features: [
        "AI readiness assessment",
        "Technology stack evaluation",
        "ROI analysis and projections",
        "Implementation roadmap",
        "Vendor evaluation",
        "Change management support",
      ],
      useCases: [
        "Digital transformation planning",
        "AI capability building",
        "Technology selection",
        "Team upskilling and training",
      ],
      outcomes: [
        "Clear AI strategy",
        "Reduced implementation risk",
        "Faster time to value",
        "Better investment decisions",
      ],
    },
    {
      id: "integration",
      icon: Zap,
      title: "System Integration Services",
      subtitle: "Connect AI solutions with your existing tech stack",
      description:
        "Seamlessly integrate AI capabilities into your current systems without disruption. We ensure smooth data flow and unified operations across all your business tools.",
      features: [
        "API development and integration",
        "Legacy system modernization",
        "Cloud migration support",
        "Custom connector development",
        "Data synchronization",
        "Testing and validation",
      ],
      useCases: [
        "CRM and ERP integration",
        "Multi-system data consolidation",
        "Third-party service connections",
        "Hybrid cloud deployments",
      ],
      outcomes: [
        "Unified data architecture",
        "Improved system interoperability",
        "Reduced manual data entry",
        "Enhanced operational visibility",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Solutions Built For You</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive services to automate, optimize, and scale your business operations
                with enterprise-grade AI implementations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={service.id}>
                <div id={service.id} className="scroll-mt-24">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-lg mb-6">
                        <service.icon className="h-10 w-10 text-accent" />
                      </div>
                      <h2 className="text-4xl font-bold mb-3">{service.title}</h2>
                      <p className="text-xl text-accent mb-6">{service.subtitle}</p>
                      <p className="text-lg text-muted-foreground mb-8">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Key Capabilities</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button variant="hero" size="lg" asChild>
                        <Link to="/contact">
                          Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Info Cards */}
                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <Card>
                        <CardContent className="pt-6">
                          <h3 className="font-semibold mb-4 flex items-center">
                            <Target className="h-5 w-5 text-accent mr-2" />
                            Common Use Cases
                          </h3>
                          <ul className="space-y-2">
                            {service.useCases.map((useCase) => (
                              <li key={useCase} className="text-sm text-muted-foreground">
                                • {useCase}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold mb-4 flex items-center">
                            <TrendingUp className="h-5 w-5 text-accent mr-2" />
                            Expected Outcomes
                          </h3>
                          <ul className="space-y-2">
                            {service.outcomes.map((outcome) => (
                              <li key={outcome} className="text-sm">
                                • {outcome}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <CardContent className="pt-12 pb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Schedule a free consultation to discuss your specific needs and learn how our AI
                  solutions can transform your business.
                </p>
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link to="/contact">Book Your Discovery Call</Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
