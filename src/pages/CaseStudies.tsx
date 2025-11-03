import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      id: "sacred-text-publishing",
      industry: "Religious & Educational Content",
      client: "Sacred Text Publishing",
      size: "1,500-page Religious Text",
      challenge:
        "Transform the complete 1,500-page Sri Guru Granth Sahib—a sacred Gurmukhi text—into engaging social media videos. Each sentence needed dual videos: verse (original Gurmukhi) and explanation (meaning), requiring thousands of unique animated videos. Manual creation would take months/years, and external video APIs would cost thousands.",
      solution:
        "Delivered a fully automated, zero-cost-per-video solution using n8n workflow orchestration, Gemini AI for intelligent OCR, and custom Python-based video generation with FFmpeg. The system processes PDFs, extracts content with AI precision, and generates professionally animated videos with culturally appropriate styling—all running locally with no recurring API costs.",
      technology: [
        "Gemini AI OCR",
        "n8n Workflow Automation",
        "Python Video Generation",
        "FFmpeg Animation",
        "Google Sheets Integration",
      ],
      results: [
        { icon: Clock, metric: "100x faster", label: "Reduced processing from months to hours" },
        { icon: TrendingUp, metric: "1.5 min", label: "Per video generation time" },
        { icon: DollarSign, metric: "Zero Cost", label: "Per video after initial setup" },
        { icon: Users, metric: "Unlimited", label: "Scalability for any text" },
      ],
      testimonial:
        "What once seemed like an insurmountable challenge—bringing sacred 1,500-page texts to social media—is now as simple as uploading a PDF and pressing a button. The automation enables us to focus on our core mission: sharing spiritual wisdom with future generations.",
      author: "Organization Director",
    }
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
