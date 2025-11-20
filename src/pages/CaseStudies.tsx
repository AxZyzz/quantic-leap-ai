import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { useEffect, useRef, useState } from "react";
import lifosysImg from "../assets/solution/Lifosys_er.png";
import sacredTextImg1 from "../assets/casestudy/SacredTextPublishing/image1.webp";
import sacredTextImg2 from "../assets/casestudy/SacredTextPublishing/img2.webp";
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
      client: "Sacred Text Publishing | AI-Powered Religious Content Video Generator",
      size: "1,500-page Religious Text",
      challenge: `A religious content organization approached a2b with an ambitious mission: transform the complete 1,500-page Sri Guru Granth Sahib, a sacred Gurmukhi text into engaging social media videos for educational outreach to younger generations. Each sentence needed to be presented as both a verse video (original Gurmukhi text) and an explanation video (with meaning), creating thousands of unique animated videos.

The challenge was formidable. Manual video creation would require months or years of work. External video generation APIs like Veo or similar services would cost thousands of dollars for this volume. The client needed a solution that was fast, cost-effective, and maintained the sacred text's integrity while creating visually compelling content suitable for Instagram, YouTube, and other social platforms.`,
      solution: `a2b delivered a fully automated, zero cost per video solution using n8n workflow orchestration, Gemini AI for intelligent OCR, and custom Python based video generation with FFmpeg. The system processes the entire PDF, extracts and structures content with AI precision, and generates professionally animated videos with culturally appropriate visual styling all running locally with no recurring API costs. The modular architecture enables the client to process unlimited religious texts across any language or script.`,
      details: {
        phase1: {
          title: "Phase 1: Intelligent PDF Processing & Content Extraction",
          trigger: "Manual activation via n8n button trigger, allowing on-demand processing of any PDF document.",
          capabilities: [
            {
              title: "Google Sheets Naming System",
              description: "The workflow begins by checking a centralized Google Sheet that tracks video generation progress. This naming registry prevents file conflicts when processing multiple PDFs through the same workflow. Each time the system runs, it reads the current counter value, uses it for sequential file naming (e.g., \"verse_001\", \"explanation_001\"), and increments the counter for the next execution. This ensures every video across all processing sessions has a unique, organized identifier."
            },
            {
              title: "Gemini AI OCR with Gurmukhi Intelligence",
              description: "The system leverages Google's Gemini AI specifically for its superior understanding of Gurmukhi script and context. Unlike generic OCR tools, Gemini doesn't just extract text—it semantically understands the religious verses and their explanations, returning structured JSON that separates the original verse from its meaning. This intelligent extraction is critical for a 1,500-page religious text where accuracy and cultural sensitivity are paramount."
            },
            {
              title: "JavaScript Data Cleansing",
              description: "A Code node (JavaScript) receives Gemini's JSON output and performs specialized data cleaning. It strips formatting artifacts, normalizes Gurmukhi characters, validates structure, and prepares two distinct data payloads: one for verse videos and one for explanation videos. This preprocessing ensures downstream video generation receives perfectly formatted input."
            }
          ]
        },
        phase2: {
          title: "Phase 2: Dual-Path Video Generation System",
          trigger: "IF node routing that determines whether to generate a verse video or explanation video based on content type.",
          capabilities: [
            {
              title: "Verse Video Generator: Golden Divine Aesthetic",
              description: `When processing original Gurmukhi verses, the system creates videos with a distinctive golden glowing effect that reflects the sacred nature of the text. The Python script utilizes FFmpeg to:

- Render Gurmukhi text using locally installed fonts (ensuring proper script rendering)
- Apply a golden color scheme with animated glow effects
- Create smooth text animations optimized for social media viewing
- Generate MP4 files with platform-appropriate dimensions and quality

The golden aesthetic was specifically chosen to evoke reverence and align with cultural expectations for religious content presentation.`
            },
            {
              title: "Explanation Video Generator: Modern Clarity Design",
              description: `For explanation content (meanings and interpretations), the system generates a parallel video with a contrasting visual style:

- Black highlight treatment for enhanced readability
- Clean, modern typography suitable for educational content
- Same technical animation quality with different color psychology
- Maintains consistency in pacing and duration with verse videos`
            },
            {
              title: "Local Processing with Zero Recurring Costs",
              description: "Both video generators run entirely on local infrastructure using Python and FFmpeg—no external APIs, no per-video costs. The client can generate unlimited videos at effectively zero marginal cost after initial setup. Each video takes approximately 1-1.5 minutes to generate locally versus the months it would take manually or the prohibitive costs of using commercial video APIs."
            },
            {
              title: "Automated File Management",
              description: 'Generated videos are stored locally with systematic naming pulled from the Google Sheets counter. Files are organized as "verse_XXX.mp4" and "explanation_XXX.mp4" where XXX corresponds to the incremented sheet value, creating a perfectly organized library of thousands of videos.'
            }
          ]
        },
        phase3: {
          title: "Phase 3: Progress Tracking & Loop Management",
          trigger: "Completion of each video generation cycle.",
          capabilities: [
            {
              title: "Intelligent Counter Updates",
              description: "After both verse and explanation videos are generated, the workflow updates the Google Sheets counter automatically. This creates a persistent state that survives workflow restarts, enables batch processing of large PDFs in manageable chunks, and provides real-time progress tracking. The client can monitor exactly how many verses have been processed across all sessions."
            },
            {
              title: "Scalable Looping Architecture",
              description: `The system is designed to process the entire 1,500-page PDF systematically. The counter mechanism enables the workflow to:

- Resume processing from the exact point of any interruption
- Process PDFs in scheduled batches to manage system resources
- Scale to unlimited page counts without workflow modifications
- Handle multiple different religious texts through the same infrastructure`
            }
          ]
        }
      },
      images: [
        {
          src: sacredTextImg1,
          alt: "Architecture Diagram",
          caption: "System Architecture Overview"
        },
        {
          src: sacredTextImg2,
          alt: "Workflow Diagram",
          caption: "n8n Workflow Implementation"
        }
      ],
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
      roi: `This automation system functions as a tireless content production engine that transformed an impossible manual task into a push-button operation. The client can now convert any sacred text—regardless of length, language, or script—into thousands of professionally animated social media videos without hiring video editors, purchasing expensive software subscriptions, or spending months on manual production.

**Quantifiable Impact:**

- **Time Savings:** Reduced 1,500-page processing from months/years to hours
- **Cost Elimination:** Zero per-video costs vs. thousands of dollars for API-based solutions
- **100x Efficiency Multiplier:** What took days per video now takes 1-1.5 minutes
- **Cultural Preservation:** Makes sacred texts accessible to younger, social-media-native audiences
- **Unlimited Scalability:** Can process infinite texts with the same infrastructure

The modular architecture means the client now owns a complete video production system that works for any religious text, any language (including complex scripts like Gurmukhi, Arabic, Sanskrit, or Hebrew), and any visual style. By providing the custom workflow template, a2b.ai empowered the client with a sustainable, expandable content generation capability that grows with their mission.`,
      testimonial: "The organization's feedback was unequivocal: they were 'amazed' by the system's capability and the astronomical time savings. What once seemed like an insurmountable challenge—bringing sacred 1,500-page texts to social media—is now as simple as uploading a PDF and pressing a button. The automation enables them to focus on their core mission: sharing spiritual wisdom with future generations, while the AI handles the creative production at scale.",
      conclusion: "This system represents the future of religious and educational content creation: intelligent, automated, culturally sensitive, and infinitely scalable.",
      author: "Organization Director",
    },
    {
      id: "lifosys",
      industry: "Healthcare & Medical Services",
      client: " AI-Powered WhatsApp Medical Consultation Automation System",
      size: "Multi-Hospital Network",
      challenge: `A leading healthcare provider operating multiple hospitals across a major Indian region faced a critical challenge: patients needed a frictionless system to access medical consultation services. Their existing process required users to install apps or navigate complex websites—barriers that significantly reduced engagement, especially among the general population who prefer simple WhatsApp-based communication.

Managing 100–200+ daily inquiries manually was time-consuming and unsustainable. Scaling to 500–2000 daily inquiries would require a large team. Medical documents, voice notes, and text messages arrived scattered across channels, leading to manual data entry and inconsistent records.`,
      solution: `A2B built a multilingual, multimodal WhatsApp automation system powered by n8n, Gemini AI, and WhatsApp Business API, enabling patients to start consultations instantly through text, voice, or document uploads. The solution handles 100–200+ daily inquiries automatically, manages medical documents, collects structured patient information, and logs everything into a centralized database—without any manual staff involvement.`,
      details: {
        phase1: {
          title: "Phase 1: Multi-Modal Input Processing",
          trigger: "Incoming message via WhatsApp webhook triggers the system to classify user input intelligently.",
          capabilities: [
            {
              title: "Text Message Processing",
              description: "Text messages are sent directly to the AI agent for natural conversation flow and data collection."
            },
            {
              title: "Voice Message Transcription",
              description: "Voice messages are downloaded from WhatsApp, transcribed to text using Gemini's audio API, and fed to the AI agent. Supports multilingual speech (English + Malayalam) enabling elderly users and patients with limited literacy to interact naturally."
            },
            {
              title: "Document Upload & Management",
              description: "Prescriptions, lab reports, PDFs, images, and scans trigger a dedicated document pipeline for storage, tracking, and patient record updates."
            }
          ]
        },
        phase2: {
          title: "Phase 2: Conversational AI Agent with Bilingual Support",
          trigger: "AI agent powered by Gemini manages the consultation intake and patient data collection.",
          capabilities: [
            {
              title: "Multilingual Support (English & Malayalam)",
              description: "Patients choose their language at the start—AI maintains it throughout the conversation, ensuring accessibility for all demographics in Kerala."
            },
            {
              title: "Structured Data Collection",
              description: `The AI captures:
- Name, age, gender, location
- Symptoms & medical concerns
- Hospital preference (across Aster network)
- Type of service (free opinion, consultation, health checkups, support)
- Appointment preferences
- Document status`
            },
            {
              title: "Contextual Memory & Safety",
              description: "The system retains the last 20 messages to maintain natural, contextual conversations. The AI never gives medical advice—it only guides, collects data, clarifies queries, and prepares patient information for doctors."
            },
            {
              title: "Real-Time Database Updates",
              description: "Every key step updates Google Sheets, automatically building a complete CRM with patient demographics, document links, service selection, hospital choice, consultation status, and timestamps."
            }
          ]
        },
        phase3: {
          title: "Phase 3: Automated Document Management & Response Delivery",
          trigger: "When patients share medical documents or complete consultation intake.",
          capabilities: [
            {
              title: "Document Organization Pipeline",
              description: `When patients share medical documents:
- Files are downloaded from WhatsApp
- Uploaded to Google Drive in organized folders
- Drive links are generated for doctors
- Patient database (Google Sheets) is updated with file metadata
- Patient receives an acknowledgment message`
            },
            {
              title: "Intelligent Response System",
              description: "Based on conversation progress, professional WhatsApp messages are automatically sent in the patient's chosen language, confirming collected details, providing next steps, acknowledging documents, and offering hospital guidance."
            },
            {
              title: "Zero Manual Admin Work",
              description: "The automation eliminates manual data collection, document organization, transcription, database entry, and follow-up messages. 100–200+ inquiries are handled daily with zero operators."
            }
          ]
        }
      },
      images: [],
      technology: [
        "n8n Automation",
        "Gemini AI",
        "WhatsApp Business API",
        "Google Drive",
        "Google Sheets",
        "Audio Transcription",
        "Bilingual AI",
      ],
      results: [
        { icon: Clock, metric: "24/7", label: "Automated consultation intake" },
        { icon: TrendingUp, metric: "Zero Staff", label: "Required for 100-200+ daily inquiries" },
        { icon: DollarSign, metric: "Massive Scalability", label: "From 200 → 2000+ patients/day" },
        { icon: Users, metric: "100% Accessibility", label: "Multilingual, multimodal support" },
      ],
      roi: `This system eliminated the single biggest barrier to patient engagement: friction. WhatsApp is the highest adoption channel among Kerala patients. Patients can now start consultations instantly without downloading apps or navigating websites.

**Quantifiable Impact:**

- **Zero Manual Admin Work:** 100–200+ daily inquiries handled completely automatically
- **Massive Scalability:** System scales from 200 → 2000+ patients/day without hiring additional staff
- **Increased Patient Engagement:** WhatsApp-native experience removes all entry barriers
- **Multi-Modal Accessibility:** Elderly users send voice messages, patients with limited literacy can speak instead of type, all file formats supported
- **Clean Medical Data for Doctors:** Doctors receive complete, organized patient data instead of scattered WhatsApp chats
- **Future-Ready Infrastructure:** Built for easy upgrades to PostgreSQL, automated doctor notifications, appointment scheduling, payment workflows, and patient dashboards

The system transforms patient intake from a bottleneck into an infinite-capacity 24/7 operation, delivering better healthcare access while eliminating operational overhead.`,
      testimonial: "Our client now operates an intelligent, fully automated medical consultation system that scales effortlessly. Patients get instant access to healthcare through their preferred channel (WhatsApp), doctors receive perfectly organized patient data, and the hospital network can handle 10x more inquiries without hiring additional staff.",
      conclusion: "This represents the future of healthcare access in emerging markets: frictionless, multilingual, and infinitely scalable through intelligent automation.",
      author: "Healthcare Operations Team",
    }
  ];

  // Interactive viewer state for the Lifosys architecture image
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const [viewerScale, setViewerScale] = useState<number>(1);
  const MIN_SCALE = 0.2;
  const MAX_SCALE = 4;
  const prevBodyOverflow = useRef<string | null>(null);
  const panRef = useRef({ x: 0, y: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isPanningRef = useRef(false);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const lockBodyScroll = () => {
    try {
      prevBodyOverflow.current = document.body.style.overflow || "";
      document.body.style.overflow = "hidden";
    } catch (e) {
      // ignore (SSR or unavailable)
    }
  };

  const unlockBodyScroll = () => {
    try {
      if (prevBodyOverflow.current !== null) {
        document.body.style.overflow = prevBodyOverflow.current;
        prevBodyOverflow.current = null;
      } else {
        document.body.style.overflow = "";
      }
    } catch (e) {
      // ignore
    }
  };

  const handleViewerWheel = (e: React.WheelEvent) => {
    // Always prevent and stop propagation for wheel events captured on the viewer
    e.preventDefault();
    e.stopPropagation();
    const delta = -e.deltaY; // invert so wheel up -> zoom in
    // Reduced sensitivity: smaller increments per wheel tick
    const speed = e.shiftKey ? 0.008 : 0.002;
    setViewerScale((s) => {
      const next = s + delta * speed;
      return Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
    });
  };

  const handleViewerKey = (e: React.KeyboardEvent) => {
    if (e.key === "+" || e.key === "=") {
      // smaller keyboard increments
      setViewerScale((s) => Math.min(MAX_SCALE, s + 0.05));
    } else if (e.key === "-" || e.key === "_") {
      setViewerScale((s) => Math.max(MIN_SCALE, s - 0.05));
    } else if (e.key === "0") {
      setViewerScale(1);
    }
  };

  // Pointer drag handlers for pan
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!viewerRef.current) return;
    // left button only
    if (e.button !== 0) return;
    isPanningRef.current = true;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    panRef.current = { x: pan.x, y: pan.y };
    viewerRef.current.setPointerCapture?.(e.pointerId);
    e.preventDefault();
    e.stopPropagation();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPanningRef.current || !pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    const next = { x: panRef.current.x + dx, y: panRef.current.y + dy };
    setPan(next);
    e.preventDefault();
    e.stopPropagation();
  };

  const endPan = (e?: React.PointerEvent) => {
    if (!isPanningRef.current) return;
    isPanningRef.current = false;
    pointerStartRef.current = null;
    try {
      viewerRef.current?.releasePointerCapture?.((e && e.pointerId) || 0);
    } catch (err) {
      // ignore
    }
  };

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

                {/*
                        <div>
                          <h2 className="text-2xl font-semibold mb-3">Intro Video</h2>
                          <p className="text-lg text-muted-foreground mb-4">
                          A short video showcasing A2B's story - how we turn repetitive business processes into intelligent, 
                          automated systems using AI tools, APIs, and workflow design. It explains our mission, approach, 
                          and how A2B helps teams scale faster and smarter through automation.
                          </p> 
                          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                          <iframe
                            // src="https://www.youtube.com/embed/LZYPhrJFX2U"
                            // className="w-full h-[500px] rounded-lg shadow-lg"
                            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          </div>
                        </div>
                */}

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
        const currentStudy = studies.find(study => study.id === currentSection);
        return (
          <section className="mb-16">
            <ScrollReveal>
              <div className="space-y-12">
                {currentStudy && (
                  <div key={currentStudy.id}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6">
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{currentStudy.industry}</Badge>
                            <Badge variant="outline">{currentStudy.size}</Badge>
                          </div>
                          <h2 className="text-3xl font-bold mb-2">{currentStudy.client}</h2>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Challenge */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-destructive">
                              The Challenge
                            </h3>
                            <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base">{currentStudy.challenge}</p>
                          </div>

                          {/* Solution */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-accent">The Solution</h3>
                            <p className="text-muted-foreground mb-4 text-sm md:text-base">{currentStudy.solution}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {currentStudy.technology.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs md:text-sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            {/* Architecture Image Viewer */}
                            {currentStudy.id === "lifosys" && (
                              <div className="mb-8">
                                <div
                                  ref={viewerRef}
                                  tabIndex={0}
                                  onWheelCapture={handleViewerWheel}
                                  onKeyDown={handleViewerKey}
                                  onPointerEnter={() => { viewerRef.current?.focus?.({ preventScroll: true } as any); lockBodyScroll(); }}
                                  onPointerLeave={() => { viewerRef.current?.blur(); unlockBodyScroll(); }}
                                  onFocus={() => lockBodyScroll()}
                                  onBlur={() => unlockBodyScroll()}
                                  onPointerDown={handlePointerDown}
                                  onPointerMove={handlePointerMove}
                                  onPointerUp={endPan}
                                  onPointerCancel={endPan}
                                  className="relative aspect-square w-full max-w-2xl mx-auto bg-black/5 rounded-lg overflow-hidden border overscroll-contain"
                                  style={{ touchAction: "none", overscrollBehavior: 'contain' }}
                                >
                                  {lifosysImg ? (
                                    <img
                                      src={lifosysImg}
                                      alt="Architecture Diagram"
                                      className="absolute inset-0 m-auto w-full h-full object-contain cursor-grab"
                                      style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${viewerScale})`, transition: isPanningRef.current ? 'none' : "transform 0.06s ease-out", transformOrigin: "center center" }}
                                      draggable={false}
                                    />
                                  ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">No image available</div>
                                  )}

                                  <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-background/60 px-2 py-1 rounded">
                                    Wheel to zoom · + / - keys · 0 to reset
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Primary image (keep first image here) */}
                            {currentStudy.images && currentStudy.images[0] && (
                              <div className="mb-8">
                                <div className="mb-2">
                                  <img
                                    src={currentStudy.images[0].src}
                                    alt={currentStudy.images[0].alt}
                                    className="w-full h-auto rounded-lg shadow-lg mx-auto"
                                  />
                                </div>
                                <p className="text-xs md:text-sm text-center text-muted-foreground mt-2">{currentStudy.images[0].caption}</p>
                              </div>
                            )}

                            {/* Implementation Details */}
                            {Object.values(currentStudy.details).map((phase: any, index) => (
                              <div key={index} className="mb-8">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">{phase.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm md:text-base">Trigger: {phase.trigger}</p>
                                <div className="space-y-4 md:space-y-6">
                                  {phase.capabilities.map((capability: any, capIndex: number) => (
                                    <div key={capIndex} className="bg-muted/30 rounded-lg p-3 md:p-4">
                                      <h4 className="text-base md:text-lg font-medium mb-2">{capability.title}</h4>
                                      <div className="text-muted-foreground prose prose-sm md:prose-base max-w-none">
                                        {capability.description.includes('-') ? (
                                          <div className="text-sm md:text-base" dangerouslySetInnerHTML={{ 
                                            __html: capability.description.split('\n').map((line: string) => {
                                              const text = line.trim();
                                              const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                              if (text.startsWith('-')) {
                                                return `<li class=\"ml-4\">${convertBold(text.substring(1).trim())}</li>`;
                                              }
                                              return `<p>${convertBold(text)}</p>`;
                                            }).join('')
                                          }} />
                                        ) : (
                                          <p className="text-sm md:text-base">{capability.description}</p>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}

                            {/* Secondary image: place the second image below Phase 3 content */}
                            {currentStudy.images && currentStudy.images[1] && (
                              <div className="mb-8">
                                <div className="mb-2">
                                  <img
                                    src={currentStudy.images[1].src}
                                    alt={currentStudy.images[1].alt}
                                    className="w-full h-auto rounded-lg shadow-lg mx-auto"
                                  />
                                </div>
                                <p className="text-xs md:text-sm text-center text-muted-foreground mt-2">{currentStudy.images[1].caption}</p>
                              </div>
                            )}
                          </div>

                          {/* Results */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-6">Key Metrics</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                              {currentStudy.results.map((result) => (
                                <div
                                  key={result.label}
                                  className="text-center p-3 md:p-4 bg-muted/50 rounded-lg"
                                >
                                  <result.icon className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-2 md:mb-3" />
                                  <div className="text-xl md:text-2xl font-bold mb-1">{result.metric}</div>
                                  <div className="text-xs md:text-sm text-muted-foreground">{result.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* ROI Section */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Return on Investment</h3>
                            <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground">
                                                  <div className="text-sm md:text-base" dangerouslySetInnerHTML={{ 
                                                    __html: currentStudy.roi.split('\n').map(line => {
                                                      const text = line.trim();
                                                      // convert **bold** markdown to <strong>
                                                      const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                      if (text.startsWith('-')) {
                                                        return `<li class="ml-4">${convertBold(text.substring(1).trim())}</li>`;
                                                      }
                                                      return `<p>${convertBold(text)}</p>`;
                                                    }).join('')
                                                  }} />
                                                </div>
                          </div>

                          {/* Testimonial */}
                          <div className="bg-muted/50 p-4 md:p-6 rounded-lg border-l-4 border-accent mb-8">
                            <p className="text-base md:text-lg italic mb-3">{currentStudy.testimonial}</p>
                            <p className="text-xs md:text-sm text-muted-foreground">— {currentStudy.author}</p>
                          </div>

                          {/* Conclusion */}
                          <div className="text-base md:text-lg font-medium text-accent">
                            {currentStudy.conclusion}
                          </div>

                          {/* LinkedIn Link for specific cases */}
                          {(currentStudy.id === "financial-services" || currentStudy.id === "sacred-text-publishing") && (
                            <div className="mt-8 text-center">
                              <a
                                href="https://www.linkedin.com/posts/rahul-v-k_%F0%9D%90%93%F0%9D%90%A1%F0%9D%90%A2%F0%9D%90%AC-%F0%9D%90%9C%F0%9D%90%A5%F0%9D%90%A2%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-%F0%9D%90%A3%F0%9D%90%AE%F0%9D%90%AC%F0%9D%90%AD-%F0%9D%90%A9%F0%9D%90%9A%F0%9D%90%A2%F0%9D%90%9D-%F0%9D%90%A6%F0%9D%90%9E-activity-7375086404386807808-gVcy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0RNokBO_aQUDwWXD6sGmbeS1CMusGKIEI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-accent hover:text-accent/80"
                              >
                                <span className="mr-2">View on LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                              </a>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </section>
        );

      case "lifosys":
        const lifosysStudy = studies.find(study => study.id === "lifosys");
        return (
          <section className="mb-16">
            <ScrollReveal>
              <div className="space-y-12">
                {lifosysStudy && (
                  <div key={lifosysStudy.id}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8">
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{lifosysStudy.industry}</Badge>
                            <Badge variant="outline">{lifosysStudy.size}</Badge>
                          </div>
                          <h2 className="text-3xl font-bold mb-2">{lifosysStudy.client}</h2>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          {/* Challenge */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-destructive">
                              The Challenge
                            </h3>
                            <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base">{lifosysStudy.challenge}</p>
                          </div>

                          {/* Solution */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-accent">The Solution</h3>
                            <p className="text-muted-foreground mb-4 text-sm md:text-base">{lifosysStudy.solution}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {lifosysStudy.technology.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs md:text-sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            {/* Architecture Image Viewer */}
                            <div className="mb-8">
                              <div
                                ref={viewerRef}
                                tabIndex={0}
                                onWheelCapture={handleViewerWheel}
                                onKeyDown={handleViewerKey}
                                onPointerEnter={() => { viewerRef.current?.focus?.({ preventScroll: true } as any); lockBodyScroll(); }}
                                onPointerLeave={() => { viewerRef.current?.blur(); unlockBodyScroll(); }}
                                onFocus={() => lockBodyScroll()}
                                onBlur={() => unlockBodyScroll()}
                                onPointerDown={handlePointerDown}
                                onPointerMove={handlePointerMove}
                                onPointerUp={endPan}
                                onPointerCancel={endPan}
                                className="relative aspect-square w-full max-w-2xl mx-auto bg-black/5 rounded-lg overflow-hidden border overscroll-contain"
                                style={{ touchAction: "none", overscrollBehavior: 'contain' }}
                              >
                                {lifosysImg ? (
                                  <img
                                    src={lifosysImg}
                                    alt="Architecture Diagram"
                                    className="absolute inset-0 m-auto w-full h-full object-contain cursor-grab"
                                    style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${viewerScale})`, transition: isPanningRef.current ? 'none' : "transform 0.06s ease-out", transformOrigin: "center center" }}
                                    draggable={false}
                                  />
                                ) : (
                                  <div className="flex items-center justify-center h-full text-muted-foreground">No image available</div>
                                )}

                                <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-background/60 px-2 py-1 rounded">
                                  Wheel to zoom · + / - keys · 0 to reset
                                </div>
                              </div>
                            </div>

                            {/* Implementation Details */}
                            {Object.values(lifosysStudy.details).map((phase: any, index) => (
                              <div key={index} className="mb-8">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">{phase.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm md:text-base">Trigger: {phase.trigger}</p>
                                <div className="space-y-4 md:space-y-6">
                                  {phase.capabilities.map((capability: any, capIndex: number) => (
                                    <div key={capIndex} className="bg-muted/30 rounded-lg p-3 md:p-4">
                                      <h4 className="text-base md:text-lg font-medium mb-2">{capability.title}</h4>
                                      <div className="text-muted-foreground prose prose-sm md:prose-base max-w-none">
                                        {capability.description.includes('-') ? (
                                          <div className="text-sm md:text-base" dangerouslySetInnerHTML={{ 
                                            __html: capability.description.split('\n').map((line: string) => {
                                              const text = line.trim();
                                              const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                              if (text.startsWith('-')) {
                                                return `<li class=\"ml-4\">${convertBold(text.substring(1).trim())}</li>`;
                                              }
                                              return `<p>${convertBold(text)}</p>`;
                                            }).join('')
                                          }} />
                                        ) : (
                                          <p className="text-sm md:text-base">{capability.description}</p>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Results */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-6">Key Metrics</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                              {lifosysStudy.results.map((result) => (
                                <div
                                  key={result.label}
                                  className="text-center p-3 md:p-4 bg-muted/50 rounded-lg"
                                >
                                  <result.icon className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-2 md:mb-3" />
                                  <div className="text-xl md:text-2xl font-bold mb-1">{result.metric}</div>
                                  <div className="text-xs md:text-sm text-muted-foreground">{result.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* ROI Section */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Return on Investment</h3>
                            <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground">
                              <div className="text-sm md:text-base" dangerouslySetInnerHTML={{ 
                                __html: lifosysStudy.roi.split('\n').map(line => {
                                  const text = line.trim();
                                  const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                  if (text.startsWith('-')) {
                                    return `<li class="ml-4">${convertBold(text.substring(1).trim())}</li>`;
                                  }
                                  return `<p>${convertBold(text)}</p>`;
                                }).join('')
                              }} />
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="bg-muted/50 p-4 md:p-6 rounded-lg border-l-4 border-accent mb-8">
                            <p className="text-base md:text-lg italic mb-3">{lifosysStudy.testimonial}</p>
                            <p className="text-xs md:text-sm text-muted-foreground">— {lifosysStudy.author}</p>
                          </div>

                          {/* Conclusion */}
                          <div className="text-base md:text-lg font-medium text-accent">
                            {lifosysStudy.conclusion}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
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
              <h2 className="text-4xl font-bold mb-8 text-center">Technology Stack</h2>
              <Card className="p-10">
                <div className="space-y-16">
                  {/* Introduction */}
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-6 text-accent">Introduction</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A2B operates on a carefully curated technology foundation that prioritizes agility, enterprise-grade reliability, and seamless scalability. Our architecture combines cutting-edge cloud services, proven development frameworks, and advanced AI capabilities to deliver solutions that are both innovative and production-ready. Every tool in our arsenal is chosen for its performance characteristics, ecosystem maturity, and ability to solve real-world business challenges. Whether you're deeply technical or new to the AI landscape, our infrastructure is engineered to deliver consistent results while remaining adaptable to your specific requirements.
                    </p>
                  </div>

                  {/* Cloud & Infrastructure */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-1 bg-accent/20 rounded-full"></div>
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-2">
                        Cloud & Infrastructure
                      </h3>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-medium mb-4 text-primary">Cloud Platforms</h4>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            Our infrastructure backbone is built predominantly on <strong>Amazon Web Services (AWS)</strong>, providing enterprise-level security, global availability, and comprehensive service integration. AWS serves as our primary deployment environment for production workloads requiring maximum reliability and performance.
                          </p>
                          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                            Beyond AWS, our infrastructure team brings deep expertise across <strong>Azure</strong>, <strong>Google Cloud Platform (GCP)</strong>, and <strong>DigitalOcean</strong>. This multi-cloud proficiency allows us to architect solutions that align with your existing infrastructure, compliance frameworks, or specific regional requirements.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-medium mb-4 text-primary">Backend & Storage</h4>
                          <ul className="space-y-6">
                            <li>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Supabase</strong>: An open-source backend ecosystem that powers our authentication layers and enables real-time data synchronization. This platform accelerates feature delivery while maintaining enterprise security standards.
                              </p>
                            </li>
                            <li>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">PostgreSQL</strong>: Our primary relational database system for structured data management. Its proven stability and advanced query capabilities make it ideal for complex business logic and transactional workflows.
                              </p>
                            </li>
                            <li>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Vector Storage Solutions</strong>: We deploy specialized vector databases including <strong>Pinecone</strong>, <strong>Weaviate</strong>, and <strong>Qdrant</strong> to enable sophisticated semantic search and contextual retrieval in AI applications. These systems are fundamental for solutions requiring nuanced understanding and similarity-based matching.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Development & Integration */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-1 bg-accent/20 rounded-full"></div>
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-2">
                        Development & Integration Architecture
                      </h3>
                      
                      <div className="space-y-8">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Our engineering workflow is built around tools that enable rapid experimentation, intelligent process automation, and frictionless third-party connectivity.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h4 className="text-xl font-medium mb-4 text-primary">Core Technologies</h4>
                            <div className="space-y-6">
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Core Languages</strong>: <strong>Python</strong> drives our AI systems and backend services, while <strong>JavaScript/TypeScript</strong> powers interactive frontends and lightweight middleware.
                              </p>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Collaborative Platforms</strong>: We harness <strong>Replit</strong>, <strong>Cursor</strong>, <strong>Lovable</strong>, and <strong>Bolt</strong> for synchronized development and AI-assisted code generation.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="text-xl font-medium mb-4 text-primary">Integration & Voice</h4>
                            <div className="space-y-6">
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Connectivity Ecosystem</strong>: Through our strategic partnership with <strong>n8n</strong>, we provide instant access to <strong>850+ pre-built integrations</strong>.
                              </p>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Voice Technology</strong>: <strong>ElevenLabs</strong> serves as our primary voice synthesis engine, with selective use of <strong>Retail AI</strong> solutions based on specific use cases.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Platform */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-1 bg-accent/20 rounded-full"></div>
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-2">
                        Artificial Intelligence Platform
                      </h3>
                      
                      <div className="space-y-12">
                        {/* Philosophy & Overview */}
                        <div>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            A2B maintains a <strong className="text-foreground">model-agnostic AI philosophy</strong>. Our systems are architected to interface with all leading large language model providers, allowing us to conduct comprehensive benchmarking and select optimal models based on your specific performance criteria, budget parameters, and business objectives.
                          </p>
                        </div>

                        {/* Core AI Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-xl font-medium mb-4 text-primary">RAG Pipeline</h4>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Retrieval-Augmented Generation</strong>: We implement sophisticated RAG pipelines that inject current, domain-specific context into LLM responses from your proprietary data sources. This architecture minimizes factual errors and ensures AI outputs remain anchored to your knowledge repositories.
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="text-xl font-medium mb-4 text-primary">Embedding Strategy</h4>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                We conduct controlled experiments to identify optimal embedding approaches for your data. These mathematical representations enable AI systems to comprehend semantic relationships and execute meaningful comparisons across information sets.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-8">
                            <div>
                              <h4 className="text-xl font-medium mb-4 text-primary">Agent Architecture</h4>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                Our AI agents extend beyond conversational interfaces to perform active tasks—executing searches, generating summaries, orchestrating workflows, and triggering actions based on dynamic inputs. Built with composable, reusable components for continuous enhancement.
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="text-xl font-medium mb-4 text-primary">Quality Control</h4>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                We maintain ongoing response quality monitoring through proprietary evaluation frameworks (including LLM-as-judge methodologies) and implement dynamic routing logic that directs each request to the most suitable model for optimal results.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
              <h2 className="text-4xl font-bold mb-8 text-center">Additional Resources</h2>
              <Card className="p-10">
                <div className="space-y-16">
                  {/* Technical Support & Implementation Guide */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-1 bg-accent/20 rounded-full"></div>
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-semibold mb-6 text-accent">Technical Support & Implementation Guide</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        This resource is designed to assist technical teams, implementation partners, and decision-makers who are working directly with A2B systems. Below you'll find answers to frequently asked questions covering architecture, deployment, and operational considerations.
                      </p>
                    </div>
                  </div>

                  {/* AI Development & Implementation */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-1 bg-accent/20 rounded-full"></div>
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-semibold mb-8 text-accent">AI Development & Implementation</h3>
                      
                      <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-8">
                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">How do you maintain long-term stability in custom AI solutions?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Our systems are built using component-based architecture with version-controlled APIs and comprehensive documentation standards. Each module operates independently, allowing for isolated updates and minimizing technical complexity over time.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">What safeguards exist against AI-generated inaccuracies?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              We deploy validation frameworks like RAGAS alongside manual quality reviews to identify incorrect outputs. Continuous monitoring tracks model behavior, and we maintain verification pipelines against known-accurate data. Response quality is improved through iterative prompt refinement and, when necessary, model fine-tuning based on evaluation metrics.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Is on-premises or private cloud deployment supported?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Yes, we accommodate deployments within your existing infrastructure through Virtual Private Cloud configurations or dedicated private environments. This requires Identity and Access Management setup and security credential provisioning. Note that self-hosted deployments include additional implementation costs compared to our fully-managed hosting option.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Do your solutions support international languages?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Certainly. We implement multilingual model configurations and localization frameworks tailored to your requirements, particularly valuable for global customer engagement and international documentation systems.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">What capabilities do you provide for context-enhanced AI responses?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              We excel at building production-scale systems that combine language models with your proprietary data through vector-based retrieval, contextual filtering, and source-verified response generation. Our validation methodology measures accuracy, completeness, and factual alignment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Platform Operations & Deployment */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-1 bg-accent/20 rounded-full"></div>
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-semibold mb-8 text-accent">Platform Operations & Deployment</h3>
                      
                      <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-8">
                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">What is your approach to system updates and releases?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              We establish automated deployment pipelines through GitHub Actions or n8n workflow automation. Development and production environments remain strictly separated, with comprehensive testing protocols applied to all significant updates prior to live deployment.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">What does your infrastructure architecture look like?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              We leverage containerization via Docker, infrastructure-as-code through Terraform, cloud platforms like Railway, and orchestration with Kubernetes for environment management. Security measures include end-to-end encryption, credential vaulting systems, and role-based access controls following minimum-privilege principles.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Support & Problem Resolution */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-1 bg-accent/20 rounded-full"></div>
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-semibold mb-8 text-accent">Diagnostic Support & Problem Resolution</h3>
                      
                      <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-8">
                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">What should I do if AI outputs vary unexpectedly?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              When encountering output inconsistency, forward relevant logs and sample inputs to our technical support team. Our systems include automatic retry logic, backup model failover, and circuit-breaker safeguards to handle intermittent issues.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">How are performance bottlenecks addressed?</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              When experiencing delayed responses, we conduct performance analysis using distributed tracing and asynchronous processing logs. Optimization strategies include response caching, input compression, and strategic model reselection.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Terminology Reference */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-1 bg-accent/20 rounded-full"></div>
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-2xl font-semibold mb-8 text-accent">Technical Terminology Reference</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Large Language Model (LLM)</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Advanced neural networks trained on extensive text datasets, capable of understanding and generating human-like language.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Retrieval-Augmented Generation (RAG)</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              An architectural pattern that enhances language model outputs by dynamically retrieving relevant information from external knowledge sources or vector stores to improve factual reliability.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Vector Database</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Specialized storage systems designed for embedding vectors — mathematical representations of semantic meaning — enabling similarity-based search and contextual retrieval.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Embedding</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              A numerical vector representation that encodes the semantic properties of text or other data types.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Prompt Engineering</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              The systematic design of input instructions to guide language models toward desired output characteristics and behaviors.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Groundedness</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              A quality metric assessing how closely AI-generated content adheres to authoritative source materials or provided context.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Token Limit</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              The computational boundary defining the maximum amount of text (measured in tokens) that a model can process in a single request-response sequence.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Agent</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              An autonomous or semi-autonomous AI system designed to execute defined tasks such as information gathering, data classification, or conversational interaction.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">Human-in-the-Loop (HITL)</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              A system design pattern where human operators validate, refine, or override AI-generated decisions and outputs.
                            </p>
                          </div>

                          <div className="p-6 rounded-lg bg-muted/30">
                            <h4 className="text-xl font-medium mb-4 text-primary">CI/CD</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Automated software delivery pipelines that systematically test, validate, and deploy code changes to staging and production environments.
                            </p>
                          </div>
                        </div>
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
