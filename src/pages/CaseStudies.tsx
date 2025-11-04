import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import jarvisImg1 from "../assets/casestudy/JARVIS/jarvis-screenshot-1.png";
import jarvisImg2 from "../assets/casestudy/JARVIS/jarvis-screenshot-2.png";
const jarvisJsonUrl = new URL("../assets/casestudy/JARVIS/JARVIS.json", import.meta.url).href;
import lexiconImg from "../assets/casestudy/Lexicon/image.webp";
const lexiconJsonUrl = new URL("../assets/casestudy/Lexicon/Deep_Research.json", import.meta.url).href;
import aetherImg from "../assets/casestudy/Aether/Newsletters.webp";
const aetherJsonUrl = new URL("../assets/casestudy/Aether/Newsletter_Automation.json", import.meta.url).href;
import curioImg from "../assets/casestudy/Curio/image.webp";
const curioJsonUrl = new URL("../assets/casestudy/Curio/RAG_Pipeline.json", import.meta.url).href;

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

  const renderSection = (currentSection: string) => {
    switch (currentSection) {
      case "introduction":
        return (
          <section className="mb-16 space-y-8">
            <ScrollReveal>
              <h1 className="text-4xl font-bold mb-6">Introduction</h1>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Purpose & Vision</h2>
                  <p className="text-lg text-muted-foreground">
                    A2B Automation Agency was founded with the vision of empowering startups and businesses to move seamlessly. 
                    Our mission is to simplify complexity through automation, AI-driven systems, and intelligent workflows that 
                    enhance productivity, cut manual effort, and accelerate growth.
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">
                    At A2B, we believe that automation isn't just about efficiency - it's about creating space for innovation, 
                    creativity, and scaling what truly matters.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Intro Video</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    A short video showcasing A2B's story - how we turn repetitive business processes into intelligent, 
                    automated systems using AI tools, APIs, and workflow design. It explains our mission, approach, 
                    and how A2B helps teams scale faster and smarter through automation.
                  </p>
                  <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                    <iframe
                      src="https://www.youtube.com/embed/LZYPhrJFX2U"
                      className="w-full h-[500px] rounded-lg shadow-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
                  <p className="text-lg text-muted-foreground">
                    Welcome to A2B's Documentation Portal! This guide is your entry point to understanding 
                    our ecosystem - from our automation frameworks and AI integrations to the tools and 
                    workflows we use to deliver measurable results.
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">
                    Our goal is to make your journey with A2B smooth, transparent, and empowering whether 
                    you're here to explore services, integrate automation into your workflow, or collaborate 
                    on custom projects.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Navigating the Documentation</h2>
                  <p className="text-lg text-muted-foreground">
                    Our documentation is structured for clarity and action. Each major category expands into 
                    detailed subtopics like "Workflow Automation," "AI Integrations," "Dashboards & Analytics," 
                    and "Implementation Guides."
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">
                    Use the sidebar or top navigation to explore each section. If you're looking for something 
                    specific, use the search bar or activate our A2B Assistant (Command + K) - an AI-powered help 
                    tool that can answer questions, suggest solutions, or direct you to the right documentation instantly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Who This Is For</h2>
                  <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 ml-4">
                    <li>Founders and business owners who want to automate operations and scale faster</li>
                    <li>Developers building automation pipelines or integrating APIs</li>
                    <li>Operations teams aiming to reduce manual workload and errors</li>
                    <li>Agencies or startups exploring AI-powered workflows or automation consulting</li>
                  </ul>
                  <p className="text-lg text-muted-foreground mt-4">
                    Whether you're new to automation or looking to expand existing systems, this guide will help 
                    you understand what's possible and how A2B can help you get there.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">How to Work With Us</h2>
                  <p className="text-lg text-muted-foreground">
                    To collaborate with A2B, visit our Contact Page and share your project goals, workflow challenges, 
                    and requirements. The more details you provide, the better we can design an automation solution 
                    tailored to your business.
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">
                    A2B currently works through custom automation partnerships, designed to fit projects of varying 
                    scales - from one-time setup systems to full enterprise integrations. If you're exploring smaller 
                    setups or prototype-level automation, check out our Pricing Page for modular engagement options.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Documentation Tips</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Each page in our documentation is concise, visual, and actionable. You'll find:
                  </p>
                  <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 ml-4">
                    <li>Step-by-step guides with real examples</li>
                    <li>Visual diagrams of workflows and systems</li>
                    <li>AI prompt templates for automation building</li>
                    <li>Short demo videos where relevant</li>
                  </ul>
                  <p className="text-lg text-muted-foreground mt-4">
                    Use these as learning tools or direct implementation references to create your own intelligent automations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Feedback Welcome</h2>
                  <p className="text-lg text-muted-foreground">
                    We're always improving - both our systems and our documentation. If you find anything unclear or 
                    have ideas for improvement, please reach out via the feedback section or email.
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">
                    A2B is constantly evolving to reflect the latest in automation technology, AI agents, and workflow 
                    innovation - and your feedback helps us stay ahead.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>
        );

      case "sacred-text-publishing":
        return (
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-8">Our Works</h2>
              <div className="space-y-12">
                {studies.map((study) => (
                  <div key={study.id}>
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
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>
        );

      case "jarvis":
        return (
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">JARVIS (Ultimate Assistant)</h2>

              <Card className="p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-3">Overview</h3>
                <p className="text-muted-foreground mb-4">
                  The Ultimate Assistant is a comprehensive AI agent designed to handle multiple
                  tasks and workflows efficiently. It combines advanced natural language processing
                  with powerful automation capabilities to serve as your personal AI assistant.
                </p>

                <div className="mt-4">
                  <a
                    href={jarvisJsonUrl}
                    download
                    className="text-accent underline"
                  >
                    Download JARVIS.json
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Details & Images</h3>
                <p className="text-muted-foreground mb-4">
                  Images and additional assets for JARVIS are shown below. (If you have more
                  content or files to attach, I can add them here.)
                </p>

                {/* Placeholder for images/screenshots provided by the user */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img
                    src={jarvisImg1}
                    alt="JARVIS screenshot 1"
                    className="w-full rounded border"
                  />
                  <img
                    src={jarvisImg2}
                    alt="JARVIS screenshot 2"
                    className="w-full rounded border"
                  />
                </div>
              </Card>
            </ScrollReveal>
          </section>
        );

      case "lexicon":
        return (
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Lexicon (Deep Research PDF Report)</h2>

              <Card className="p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-3">Overview</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized agent for conducting in-depth research and generating comprehensive PDF reports.
                </p>

                <div className="mt-4">
                  <a href={lexiconJsonUrl} download className="text-accent underline">
                    Download Deep_Research.json
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Image & JSON</h3>
                <p className="text-muted-foreground mb-4">
                  Image and JSON for Lexicon are available below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src={lexiconImg} alt="Lexicon" className="w-full rounded border" />
                </div>
              </Card>
            </ScrollReveal>
          </section>
        );

      case "aether":
        return (
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Aether (Newsletter Creation)</h2>

              <Card className="p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-3">Overview</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered newsletter creation and distribution system.
                </p>

                <div className="mt-4">
                  <a href={aetherJsonUrl} download className="text-accent underline">
                    Download Newsletter_Automation.json
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Image & JSON</h3>
                <p className="text-muted-foreground mb-4">
                  Image and JSON for Aether are available below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src={aetherImg} alt="Aether" className="w-full rounded border" />
                </div>
              </Card>
            </ScrollReveal>
          </section>
        );

      case "curio":
        return (
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Curio (RAG Pipeline)</h2>

              <Card className="p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-3">Overview</h3>
                <p className="text-muted-foreground mb-4">
                  Retrieval-Augmented Generation pipeline for enhanced AI responses.
                </p>

                <div className="mt-4">
                  <a href={curioJsonUrl} download className="text-accent underline">
                    Download RAG_Pipeline.json
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Image & JSON</h3>
                <p className="text-muted-foreground mb-4">Image and JSON for Curio are available below.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src={curioImg} alt="Curio" className="w-full rounded border" />
                </div>
              </Card>
            </ScrollReveal>
          </section>
        );

      case "tech-stack":
        return (
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
              <Card className="p-6">
                <p className="text-muted-foreground">Technology stack content will be added here...</p>
              </Card>
            </ScrollReveal>
          </section>
        );

      case "resources":
        return (
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Resources</h2>
              <Card className="p-6">
                <p className="text-muted-foreground">Resources content will be added here...</p>
              </Card>
            </ScrollReveal>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <CaseStudyLayout>
      {(currentSection) => renderSection(currentSection)}
    </CaseStudyLayout>
  );
};

export default CaseStudies;
