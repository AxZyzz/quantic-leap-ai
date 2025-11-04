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
              <Card className="p-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
                    <p className="text-lg text-muted-foreground">
                      A2B operates on a carefully curated technology foundation that prioritizes agility, enterprise-grade reliability, and seamless scalability. Our architecture combines cutting-edge cloud services, proven development frameworks, and advanced AI capabilities to deliver solutions that are both innovative and production-ready. Every tool in our arsenal is chosen for its performance characteristics, ecosystem maturity, and ability to solve real-world business challenges. Whether you're deeply technical or new to the AI landscape, our infrastructure is engineered to deliver consistent results while remaining adaptable to your specific requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Cloud & Infrastructure</h3>
                    <p className="text-lg text-muted-foreground">
                      Our infrastructure backbone is built predominantly on <strong>Amazon Web Services (AWS)</strong>, providing enterprise-level security, global availability, and comprehensive service integration. AWS serves as our primary deployment environment for production workloads requiring maximum reliability and performance.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      Beyond AWS, our infrastructure team brings deep expertise across <strong>Azure</strong>, <strong>Google Cloud Platform (GCP)</strong>, and <strong>DigitalOcean</strong>. This multi-cloud proficiency allows us to architect solutions that align with your existing infrastructure, compliance frameworks, or specific regional requirements.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Supabase</strong>: An open-source backend ecosystem that powers our authentication layers and enables real-time data synchronization. This platform accelerates feature delivery while maintaining enterprise security standards.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>PostgreSQL</strong>: Our primary relational database system for structured data management. Its proven stability and advanced query capabilities make it ideal for complex business logic and transactional workflows.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Vector Storage Solutions</strong>: We deploy specialized vector databases including <strong>Pinecone</strong>, <strong>Weaviate</strong>, and <strong>Qdrant</strong> to enable sophisticated semantic search and contextual retrieval in AI applications. These systems are fundamental for solutions requiring nuanced understanding and similarity-based matching.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Development & Integration Architecture</h3>
                    <p className="text-lg text-muted-foreground">
                      Our engineering workflow is built around tools that enable rapid experimentation, intelligent process automation, and frictionless third-party connectivity.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Core Languages</strong>: <strong>Python</strong> drives our AI systems and backend services, while <strong>JavaScript/TypeScript</strong> powers interactive frontends and lightweight middleware. This combination delivers both computational flexibility and user experience excellence.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Collaborative Development Platforms</strong>: We harness <strong>Replit</strong>, <strong>Cursor</strong>, <strong>Lovable</strong>, and <strong>Bolt</strong> for synchronized development, AI-assisted code generation, and accelerated prototyping cycles.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Connectivity Ecosystem</strong>: Through our strategic partnership with <strong>n8n</strong>, we provide instant access to <strong>850+ pre-built integrations</strong> spanning major SaaS platforms, databases, webhooks, and APIs.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Conversational Voice Technology</strong>: <strong>ElevenLabs</strong> serves as our primary voice synthesis engine, with selective use of <strong>Retail AI</strong> solutions based on specific use case requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Artificial Intelligence Platform</h3>
                    <p className="text-lg text-muted-foreground">
                      A2B maintains a <strong>model-agnostic AI philosophy</strong>. Our systems are architected to interface with all leading large language model providers, allowing us to conduct comprehensive benchmarking and select optimal models based on your specific performance criteria, budget parameters, and business objectives.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Retrieval-Augmented Generation (RAG)</strong>: We implement sophisticated RAG pipelines that inject current, domain-specific context into LLM responses from your proprietary data sources. This architecture minimizes factual errors, eliminates hallucinations, and ensures AI outputs remain anchored to your actual knowledge repositories.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Embedding Strategy & Optimization</strong>: We conduct controlled experiments to identify optimal embedding approaches for your data. These mathematical representations enable AI systems to comprehend semantic relationships and execute meaningful comparisons across information sets.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Intelligent Agent Architecture</strong>: Our AI agents extend beyond conversational interfaces to perform active tasks—executing searches, generating summaries, orchestrating workflows, and triggering actions based on dynamic inputs. We build these using composable, reusable components for continuous enhancement.
                    </p>
                    <p className="text-lg text-muted-foreground mt-4">
                      <strong>Quality Assurance & Intelligent Routing</strong>: We maintain ongoing response quality monitoring through proprietary evaluation frameworks (including LLM-as-judge methodologies) and implement dynamic routing logic that directs each request to the most suitable model for optimal results.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </section>
        );

      case "resources":
        return (
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
              <Card className="p-8">
                <div className="space-y-8">
                  {/* Technical Support & Implementation Guide */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Technical Support & Implementation Guide</h3>
                    <p className="text-lg text-muted-foreground">
                      This resource is designed to assist technical teams, implementation partners, and decision-makers who are working directly with A2B systems. Below you'll find answers to frequently asked questions covering architecture, deployment, and operational considerations.
                    </p>
                  </div>

                  {/* AI Development & Implementation */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">AI Development & Implementation</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium mb-2">How do you maintain long-term stability in custom AI solutions?</h4>
                        <p className="text-lg text-muted-foreground">
                          Our systems are built using component-based architecture with version-controlled APIs and comprehensive documentation standards. Each module operates independently, allowing for isolated updates and minimizing technical complexity over time.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">What safeguards exist against AI-generated inaccuracies?</h4>
                        <p className="text-lg text-muted-foreground">
                          We deploy validation frameworks like RAGAS alongside manual quality reviews to identify incorrect outputs. Continuous monitoring tracks model behavior, and we maintain verification pipelines against known-accurate data. Response quality is improved through iterative prompt refinement and, when necessary, model fine-tuning based on evaluation metrics.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Is on-premises or private cloud deployment supported?</h4>
                        <p className="text-lg text-muted-foreground">
                          Yes, we accommodate deployments within your existing infrastructure through Virtual Private Cloud configurations or dedicated private environments. This requires Identity and Access Management setup and security credential provisioning. Note that self-hosted deployments include additional implementation costs compared to our fully-managed hosting option.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Do your solutions support international languages?</h4>
                        <p className="text-lg text-muted-foreground">
                          Certainly. We implement multilingual model configurations and localization frameworks tailored to your requirements, particularly valuable for global customer engagement and international documentation systems.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">What capabilities do you provide for context-enhanced AI responses?</h4>
                        <p className="text-lg text-muted-foreground">
                          We excel at building production-scale systems that combine language models with your proprietary data through vector-based retrieval, contextual filtering, and source-verified response generation. Our validation methodology measures accuracy, completeness, and factual alignment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Platform Operations & Deployment */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Platform Operations & Deployment</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium mb-2">What is your approach to system updates and releases?</h4>
                        <p className="text-lg text-muted-foreground">
                          We establish automated deployment pipelines through GitHub Actions or n8n workflow automation. Development and production environments remain strictly separated, with comprehensive testing protocols applied to all significant updates prior to live deployment.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">What does your infrastructure architecture look like?</h4>
                        <p className="text-lg text-muted-foreground">
                          We leverage containerization via Docker, infrastructure-as-code through Terraform, cloud platforms like Railway, and orchestration with Kubernetes for environment management. Security measures include end-to-end encryption, credential vaulting systems, and role-based access controls following minimum-privilege principles.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Support & Problem Resolution */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Diagnostic Support & Problem Resolution</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium mb-2">What should I do if AI outputs vary unexpectedly?</h4>
                        <p className="text-lg text-muted-foreground">
                          When encountering output inconsistency, forward relevant logs and sample inputs to our technical support team. Our systems include automatic retry logic, backup model failover, and circuit-breaker safeguards to handle intermittent issues.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">How are performance bottlenecks addressed?</h4>
                        <p className="text-lg text-muted-foreground">
                          When experiencing delayed responses, we conduct performance analysis using distributed tracing and asynchronous processing logs. Optimization strategies include response caching, input compression, and strategic model reselection.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technical Terminology Reference */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Technical Terminology Reference</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-medium mb-2">Large Language Model (LLM)</h4>
                        <p className="text-lg text-muted-foreground">
                          Advanced neural networks trained on extensive text datasets, capable of understanding and generating human-like language.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Retrieval-Augmented Generation (RAG)</h4>
                        <p className="text-lg text-muted-foreground">
                          An architectural pattern that enhances language model outputs by dynamically retrieving relevant information from external knowledge sources or vector stores to improve factual reliability.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Vector Database</h4>
                        <p className="text-lg text-muted-foreground">
                          Specialized storage systems designed for embedding vectors — mathematical representations of semantic meaning — enabling similarity-based search and contextual retrieval.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Embedding</h4>
                        <p className="text-lg text-muted-foreground">
                          A numerical vector representation that encodes the semantic properties of text or other data types.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Prompt Engineering</h4>
                        <p className="text-lg text-muted-foreground">
                          The systematic design of input instructions to guide language models toward desired output characteristics and behaviors.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Groundedness</h4>
                        <p className="text-lg text-muted-foreground">
                          A quality metric assessing how closely AI-generated content adheres to authoritative source materials or provided context.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Token Limit</h4>
                        <p className="text-lg text-muted-foreground">
                          The computational boundary defining the maximum amount of text (measured in tokens) that a model can process in a single request-response sequence.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Agent</h4>
                        <p className="text-lg text-muted-foreground">
                          An autonomous or semi-autonomous AI system designed to execute defined tasks such as information gathering, data classification, or conversational interaction.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Human-in-the-Loop (HITL)</h4>
                        <p className="text-lg text-muted-foreground">
                          A system design pattern where human operators validate, refine, or override AI-generated decisions and outputs.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">CI/CD</h4>
                        <p className="text-lg text-muted-foreground">
                          Automated software delivery pipelines that systematically test, validate, and deploy code changes to staging and production environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
