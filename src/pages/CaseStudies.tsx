import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      id: "insurance-automation",
      industry: "Insurance",
      client: "Regional Insurance Provider",
      size: "500-1000 employees",
      challenge:
        "Manual claims processing was taking 5-7 days per claim, leading to customer dissatisfaction and high operational costs. The team was overwhelmed with repetitive data entry and document verification tasks.",
      solution:
        "We implemented an AI-powered claims processing system that automatically extracts data from documents, validates information against policy rules, and routes claims for approval. The system uses OCR for document reading, NLP for understanding claim details, and ML models trained on historical claims data.",
      technology: [
        "Computer Vision (OCR)",
        "Natural Language Processing",
        "Machine Learning Classification",
        "Workflow Automation",
        "API Integrations",
      ],
      results: [
        { icon: Clock, metric: "95% faster", label: "Processing time reduced from 5-7 days to 2 hours" },
        { icon: TrendingUp, metric: "300% ROI", label: "Return on investment in 6 months" },
        { icon: Users, metric: "95% accuracy", label: "Automated decision accuracy rate" },
        { icon: DollarSign, metric: "$1.2M saved", label: "Annual operational cost savings" },
      ],
      testimonial:
        "The automation has been transformative. Our team can now focus on complex cases while routine claims are processed automatically. Customer satisfaction scores increased by 40%.",
      author: "Director of Operations",
    },
    {
      id: "ecommerce-support",
      industry: "E-commerce",
      client: "Direct-to-Consumer Brand",
      size: "100-250 employees",
      challenge:
        "Customer support team was overwhelmed with 10,000+ monthly inquiries, 80% of which were repetitive questions about orders, returns, and product information. Response times were 24-48 hours, impacting customer satisfaction.",
      solution:
        "We deployed a custom AI agent that handles common customer queries through chat, email, and social media. The agent integrates with their order management system, providing real-time order status, processing returns, and answering product questions with human handoff for complex issues.",
      technology: [
        "Large Language Models (LLM)",
        "Multi-channel Integration",
        "CRM Integration",
        "Sentiment Analysis",
        "Knowledge Base Management",
      ],
      results: [
        { icon: TrendingUp, metric: "85%", label: "Of queries handled automatically" },
        { icon: Clock, metric: "40% faster", label: "Average response time improvement" },
        { icon: DollarSign, metric: "$2M/year", label: "Support cost savings" },
        { icon: Users, metric: "92%", label: "Customer satisfaction score" },
      ],
      testimonial:
        "Our AI agent has become an essential team member. It handles the volume we could never afford to staff for, and customers love the instant responses.",
      author: "Head of Customer Experience",
    },
    {
      id: "healthcare-data",
      industry: "Healthcare",
      client: "Multi-Location Medical Practice",
      size: "250-500 employees",
      challenge:
        "Patient data was scattered across 5 different systems with no unified view. Doctors spent hours manually reviewing records, and administrative staff struggled to coordinate care across locations.",
      solution:
        "We built a unified data system that aggregates patient information from all sources, provides AI-powered insights for treatment recommendations, and automates appointment scheduling and care coordination. The system maintains HIPAA compliance while providing real-time analytics.",
      technology: [
        "Healthcare Data Integration (HL7/FHIR)",
        "Predictive Analytics",
        "Secure Data Pipeline",
        "Real-time Dashboard",
        "Compliance Management",
      ],
      results: [
        { icon: TrendingUp, metric: "50%", label: "Improvement in patient outcomes" },
        { icon: Clock, metric: "3 hours/day", label: "Time saved per physician" },
        { icon: Users, metric: "99.9%", label: "Data accuracy and consistency" },
        { icon: DollarSign, metric: "$800K", label: "Annual efficiency savings" },
      ],
      testimonial:
        "Having all patient data in one place with intelligent insights has revolutionized our practice. We're providing better care in less time.",
      author: "Chief Medical Officer",
    },
    {
      id: "manufacturing-optimization",
      industry: "Manufacturing",
      client: "Industrial Equipment Manufacturer",
      size: "1000+ employees",
      challenge:
        "Production line inefficiencies were causing 15% downtime, quality control was inconsistent, and maintenance was reactive rather than preventive, leading to unexpected failures and costly repairs.",
      solution:
        "We implemented an AI-powered process optimization system with predictive maintenance capabilities. IoT sensors monitor equipment health in real-time, ML models predict failures before they occur, and process mining identifies bottlenecks and optimization opportunities.",
      technology: [
        "IoT Integration",
        "Predictive Maintenance ML",
        "Process Mining",
        "Real-time Monitoring",
        "Anomaly Detection",
      ],
      results: [
        { icon: TrendingUp, metric: "35%", label: "Reduction in downtime" },
        { icon: DollarSign, metric: "$3.5M", label: "Annual savings from prevented failures" },
        { icon: Clock, metric: "60%", label: "Faster issue resolution" },
        { icon: Users, metric: "25%", label: "Increase in production throughput" },
      ],
      testimonial:
        "The predictive maintenance alone has paid for the entire system. We're catching issues before they become problems and our production efficiency has never been better.",
      author: "VP of Operations",
    },
    {
      id: "finance-compliance",
      industry: "Financial Services",
      client: "Regional Bank",
      size: "500-1000 employees",
      challenge:
        "Manual compliance checks were time-consuming and error-prone, with regulatory reporting taking weeks. The risk of non-compliance fines was high, and the compliance team was overwhelmed.",
      solution:
        "We developed an automated compliance monitoring system that continuously scans transactions for regulatory violations, generates required reports automatically, and provides real-time risk assessments. The system stays updated with changing regulations.",
      technology: [
        "Automated Rule Engines",
        "Real-time Transaction Monitoring",
        "Report Generation",
        "Risk Scoring Models",
        "Regulatory Database Integration",
      ],
      results: [
        { icon: Clock, metric: "90%", label: "Faster regulatory reporting" },
        { icon: TrendingUp, metric: "99.5%", label: "Compliance accuracy rate" },
        { icon: DollarSign, metric: "$1.8M", label: "Annual compliance cost reduction" },
        { icon: Users, metric: "Zero", label: "Compliance violations since deployment" },
      ],
      testimonial:
        "We sleep better at night knowing our compliance is automated and accurate. What used to take weeks now happens in real-time.",
      author: "Chief Compliance Officer",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Real Businesses. Real Results.
              </h1>
              <p className="text-xl text-muted-foreground">
                See how we've helped companies across industries automate operations, reduce costs,
                and achieve measurable ROI through custom AI solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20 max-w-6xl mx-auto">
            {studies.map((study, index) => (
              <ScrollReveal key={study.id}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{study.industry}</Badge>
                        <Badge variant="outline">{study.size}</Badge>
                      </div>
                      <h2 className="text-3xl font-bold mb-2">{study.client}</h2>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Challenge */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-destructive">
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-accent">The Solution</h3>
                        <p className="text-muted-foreground mb-4">{study.solution}</p>
                        <div className="flex flex-wrap gap-2">
                          {study.technology.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-6">The Results</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {study.results.map((result) => (
                            <div
                              key={result.label}
                              className="text-center p-4 bg-muted/50 rounded-lg"
                            >
                              <result.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                              <div className="text-2xl font-bold mb-1">{result.metric}</div>
                              <div className="text-xs text-muted-foreground">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-accent">
                        <p className="text-lg italic mb-3">"{study.testimonial}"</p>
                        <p className="text-sm text-muted-foreground">— {study.author}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a free consultation to discuss how we can help you achieve similar results
                for your business.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
