import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight, FileText, Workflow, Laptop, Library } from "lucide-react";
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
import imageGenErImg from "../assets/casestudy/imagegeneration/image_er.jpg";
import imageGenN8nImg from "../assets/casestudy/imagegeneration/image_n8n.jpg";
import redYtImg from "../assets/casestudy/reddit_youtube/red_yt.jpg";
import redYtN8nImg from "../assets/casestudy/reddit_youtube/red_yt_N8N.jpg";
import ragImg from "../assets/casestudy/rag/RAG.jpg";
import ragArcImg from "../assets/casestudy/rag/RAG_ARC.jpg";
import visualBrandImg1 from "../assets/casestudy/Visual Brand/image 1.jpeg";
import visualBrandImg2 from "../assets/casestudy/Visual Brand/image 2.jpeg";
import visualBrandImg3 from "../assets/casestudy/Visual Brand/image 3.jpeg";
import visualBrandImg4 from "../assets/casestudy/Visual Brand/image 4.jpeg";
import visualBrandImg5 from "../assets/casestudy/Visual Brand/image 5.jpeg";
import visualBrandImg6 from "../assets/casestudy/Visual Brand/image 6.jpeg";

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
            id: "medical-consultation",
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
        },
        {
            id: "imagegeneration",
            industry: "Creative & Brand Design",
            client: "AI-Powered Brand-Style Image Generation System",
            size: "Premium Creative Agency",
            challenge: `A fast-growing creative brand needed a way to generate unlimited on-brand images without manually crafting style prompts for every request. Their design team had built a signature visual identity across 15+ reference images but replicating that same cinematography, lighting language, and texture identity was inconsistent and time-consuming.

They wanted a solution that could learn the brand's style, store it, and automatically apply it to any new user-generated prompt—all while maintaining aesthetic consistency, camera logic, and the brand's "old-money, luxury, retro" vibe.`,
            solution: `Our team built a fully automated style-extraction and image-generation engine powered by n8n, Gemini AI, Supabase, and multi-model image generation APIs, delivering 100% consistent brand-style images on demand.`,
            details: {
                phase1: {
                    title: "Phase 1: Perfect Style Extraction",
                    trigger: "System ingests 15+ reference images and performs deep cinematic style extraction using Gemini's multimodal capabilities.",
                    capabilities: [
                        {
                            title: "High-precision camera logic breakdown",
                            description: "Lens compression, framing rhythm, angle behavior, bloom, contrast physics"
                        },
                        {
                            title: "Lighting identity analysis",
                            description: "Warm sunset hues, side-lit highlights, retro glow falloff"
                        },
                        {
                            title: "Texture & material fingerprinting",
                            description: "Wood varnish details, fabric tension, micro-scratches, oil-sheen physics"
                        },
                        {
                            title: "Imperfection pattern capture",
                            description: "Analog dust, chromatic fringe, bloom leaks, atmospheric haze"
                        },
                        {
                            title: "Brand Visual DNA Library",
                            description: "Each extracted style is stored in Supabase as structured text linked to the image filename, creating a permanent repository of the brand's aesthetic DNA."
                        }
                    ]
                },
                phase2: {
                    title: "Phase 2: Object Recognition for Context Matching",
                    trigger: "When a user submits a prompt, the system automatically scans the entire stored dataset.",
                    capabilities: [
                        {
                            title: "Semantic Content Analysis",
                            description: "Finds the closest matching reference image and extracts its semantic content"
                        },
                        {
                            title: "Best-Aligned Style Selection",
                            description: "Returns the best-aligned style description ensuring every new output matches the correct style segment, not a random generic one."
                        },
                        {
                            title: "Intelligent Matching Technology",
                            description: `The model uses:
- Gemini semantic vision analysis
- Supabase database lookup
- A reasoning layer that selects the single best reference match (not multiple)`
                        }
                    ]
                },
                phase3: {
                    title: "Phase 3: Final Image Generation Engine",
                    trigger: "Once the system has compiled user prompt, matching style, aesthetic motifs, imperfection profile, camera DNA, and lighting rules.",
                    capabilities: [
                        {
                            title: "Alpha-Prompt Engineering",
                            description: "The system merges all elements into a single Alpha-Prompt, built by an advanced prompt-engineering agent inside n8n."
                        },
                        {
                            title: "Multi-Model Generation",
                            description: `The Alpha-Prompt is sent simultaneously to multiple models:
- Google Gemini 2.5 Flash Image
- Imagen 4
- Nano Banana Pro
- Ideogram V3
- Grok Imagine`
                        },
                        {
                            title: "Consistent Brand Identity",
                            description: "Each model returns a variation with the same brand identity preserved"
                        },
                        {
                            title: "Automated Asset Delivery",
                            description: "The best output(s) are uploaded to Google Drive, ready for delivery"
                        }
                    ]
                }
            },
            images: [
                {
                    src: imageGenErImg,
                    alt: "Architecture Flow Diagram",
                    caption: "System Architecture & Data Flow"
                },
                {
                    src: imageGenN8nImg,
                    alt: "n8n Workflow Diagram",
                    caption: "n8n Workflow Implementation"
                }
            ],
            technology: [
                "n8n Workflow Orchestration",
                "Google Gemini (Vision + Text)",
                "Supabase Database",
                "Imagen / Ideogram / Grok / Nano Banana",
                "Google Drive Integration",
                "Multi-Model APIs"
            ],
            results: [
                { icon: Clock, metric: "Zero manual prompts", label: "Fully automated style embedding" },
                { icon: TrendingUp, metric: "100% consistent", label: "Brand identity across all images" },
                { icon: DollarSign, metric: "Unlimited scale", label: "1000+ images/day possible" },
                { icon: Users, metric: "Unified language", label: "Entire catalog looks handcrafted" },
            ],
            roi: `This system transforms a brand's scattered visual identity into a centralized, automated engine capable of generating endless on-brand images with perfect cinematic consistency.

**Quantifiable Impact:**

- **Zero Manual Effort:** Style extraction and camera logic are handled completely automatically
- **Perfect Consistency:** Every output carries the same "old-money, generational wealth, retro luxury" aesthetic
- **Unlimited Scalability:** Teams can generate 1000+ images/day with zero additional cost or design effort
- **Unified Brand Language:** Style extraction and motif consistency ensure the brand's entire catalog looks handcrafted by one creative director
- **Multi-Model Robustness:** If one model fails or delays, parallel pipelines guarantee delivery

The system eliminates guesswork, reduces design load to zero, and guarantees the brand's aesthetic DNA is preserved across every asset—no matter who uses the tool.`,
            testimonial: "This system transforms brand image generation from a bottleneck into an infinite-capacity automation engine, preserving creative vision while enabling unlimited production at zero additional cost.",
            conclusion: "This system eliminates guesswork, reduces design load to zero, and guarantees the brand's aesthetic DNA is preserved across every asset—no matter who uses the tool.",
            author: "Creative Direction Team",
        }
        ,
        {
            id: "reddit-to-youtube",
            industry: "Media & Content Automation",
            client: "Reddit-to-YouTube Automation Case Study",
            size: "Social Media Media Brand",
            challenge: `A content-focused media brand approached A2B with a simple goal and a messy process: They wanted to turn high-performing Reddit posts into faceless YouTube videos with talking avatars—on repeat, every day—without hiring scriptwriters, editors, or video staff.

Manually, this meant copying Reddit content, writing a script, recording audio, creating a video, and uploading it. One video could take 1–2 hours — scaling was impossible.`,
            solution: `A2B built a fully automated n8n-based workflow that converts a single Telegram message containing a Reddit link into a ready-to-publish YouTube video. It generates a script, voice-over, avatar video, uploads it to YouTube, and sends the final link back to Telegram.`,
            details: {
                phase1: {
                    title: "Phase 1: Telegram Trigger & Text Extraction",
                    trigger: "Telegram message with Reddit link triggers the workflow.",
                    capabilities: [
                        { title: "Link Parsing & JSON", description: "Extracts link, subreddit, postId, and optional user opinion via Edit Fields and Gemini parsing." }
                    ]
                },
                phase2: {
                    title: "Phase 2: Reddit Data Extraction",
                    trigger: "Reddit API nodes fetch post and comment threads.",
                    capabilities: [
                        { title: "Recursive Comment Flattening", description: "Custom JS flattens threads and returns cleaned comments_data payload." }
                    ]
                },
                phase3: {
                    title: "Phase 3: Script Generation (Gemini)",
                    trigger: "AI agent produces a concise script and title.",
                    capabilities: [
                        { title: "Structured Output Parser", description: "Produces clean JSON with script and title ready for TTS." }
                    ]
                },
                phase4: {
                    title: "Phase 4: Avatar Video Creation (ElevenLabs + HeyGen)",
                    trigger: "TTS -> upload audio -> HeyGen render -> fetch video.",
                    capabilities: [
                        { title: "Automated TTS", description: "ElevenLabs generates natural voice-over." },
                        { title: "Avatar Render", description: "HeyGen creates 720p talking-head video; workflow waits then downloads result." }
                    ]
                },
                phase5: {
                    title: "Phase 5: YouTube Upload & Notification",
                    trigger: "Upload video to YouTube and notify via Telegram.",
                    capabilities: [
                        { title: "Auto Upload", description: "YouTube node uploads video with AI-generated title." },
                        { title: "Notification", description: "Telegram notifies user with published link." }
                    ]
                }
            },
            images: [
                { src: redYtImg, alt: "Architecture Diagram", caption: "System Architecture & Data Flow" },
                { src: redYtN8nImg, alt: "n8n Workflow Diagram", caption: "n8n Workflow Implementation" }
            ],
            technology: ["n8n", "Telegram Bot API", "Google Gemini", "Reddit API", "ElevenLabs", "HeyGen", "YouTube API"],
            results: [
                { icon: Clock, metric: "Zero manual steps", label: "End-to-end automation" },
                { icon: TrendingUp, metric: "Dozens/day", label: "High-volume output" },
                { icon: DollarSign, metric: "Zero marginal cost", label: "No editors or VO artists" },
                { icon: Users, metric: "One-interface", label: "Telegram control" }
            ],
            roi: `Zero marginal costs per video, dozens of videos possible daily, consistent brand voice, single-interface control via Telegram, easily extendable to other languages and channels.`,
            testimonial: "A complete autopilot content engine replacing manual script, TTS, render and upload steps.",
            conclusion: "Converts Reddit threads into fully-produced YouTube avatar videos with a single Telegram message.",
            author: "Automation Team"
        },
        {
            id: "multimodal-ai",
            industry: "Enterprise Knowledge Management",
            client: "Multimodal AI Intake and Knowledge Agent",
            size: "Enterprise Integration",
            challenge: `Many teams receive customer questions and assets (voice notes, images, PDFs, spreadsheets) through messaging channels like WhatsApp, but lack an automated, consistent way to parse the content, extract structured information, index it for search, and answer follow-ups with context. Manual handling is slow, error-prone, and doesn't scale.`,
            solution: `This n8n workflow automates end-to-end multimodal intake and retrieval: accepts messages from WhatsApp (text, audio, image, document), routes media by type, uses OpenAI multimodal APIs to transcribe audio and analyze images, extracts document content, normalises prompts, generates embeddings, and stores them in a vector index. A LangChain-style Knowledge Base Agent with short-term memory retrieves context and answers user queries via WhatsApp.`,
            details: {
                phase1: {
                    title: "Solution Overview: Multimodal Intake",
                    trigger: "WhatsApp message ingestion with automatic media type detection and routing.",
                    capabilities: [
                        { title: "WhatsApp Trigger & Route Types", description: "Receives webhook, inspects message type (text/audio/image/document), and routes to appropriate processing branch." },
                        { title: "Media Download Pipeline", description: "Gets WhatsApp media URLs and downloads raw bytes for audio, images, and documents." },
                        { title: "Type-Specific Processing", description: "OpenAI audio translate for voicemail, image analyze for visual content, and native extractors (PDF/XLS/XLSX) for documents." },
                        { title: "Unified Prompt Mapping", description: "Standardizes all input types into a canonical JSON prompt sent to the Knowledge Base Agent." }
                    ]
                },
                phase2: {
                    title: "Key Components & Data Flow",
                    trigger: "Structured extraction and embedding generation for vector storage.",
                    capabilities: [
                        { title: "Document Type Routing & Extraction", description: "Switch node routes documents by mime type; specialized extractors handle PDF, XLS, XLSX, JSON, CSV with output mapped to unified JSON schema." },
                        { title: "Embeddings & Vector Storage", description: "OpenAI embeddings are generated and stored in MongoDB Atlas vector collection (data_index) for semantic retrieval." },
                        { title: "Knowledge Base Agent (LangChain)", description: "Receives unified prompt, consults vector store via productDocs tool, references short-term memory buffer, and uses gpt-4o-mini to compose context-aware answers." },
                        { title: "Short-Term Memory (memoryBufferWindow)", description: "Conversation history keyed per WhatsApp user ID enables agent to reference recent messages within the session." }
                    ]
                },
                phase3: {
                    title: "Data Flow (Step-by-Step)",
                    trigger: "End-to-end message processing from WhatsApp ingestion to response delivery.",
                    capabilities: [
                        { title: "Steps 1–3: Ingestion & Media Download", description: "User sends WhatsApp message → Trigger + Route Types → Download media bytes if needed." },
                        { title: "Steps 4–6: Content Extraction", description: "Audio → OpenAI translate → text; Image → analyze → description; Document → type-route → extractor → structured data." },
                        { title: "Step 7: Unified Prompt", description: "All branches converge into single JSON: text (standardised), metadata (mime type, caption, sender ID)." },
                        { title: "Steps 8–10: Retrieval & Response", description: "Agent queries vector store (MongoDB), generates answer using gpt-4o-mini with memory context, sends WhatsApp reply." }
                    ]
                }
            },
            images: [
                { src: ragArcImg, alt: "Solution Overview Diagram", caption: "Multimodal Intake Architecture" },
                { src: ragImg, alt: "Data Flow Diagram", caption: "End-to-End Data Processing Flow" }
            ],
            technology: [
                "n8n Workflow Automation",
                "WhatsApp Business API",
                "OpenAI Multimodal APIs",
                "LangChain Knowledge Base Agent",
                "MongoDB Atlas Vector Search",
                "Supabase Vector Store",
                "Simple Memory Buffer"
            ],
            results: [
                { icon: Clock, metric: "Real-time", label: "Instant multimodal intake & answers" },
                { icon: TrendingUp, metric: "Scalable", label: "Vector DB grows with knowledge" },
                { icon: DollarSign, metric: "Cost-efficient", label: "Batch embeddings reduce compute" },
                { icon: Users, metric: "Context-aware", label: "Short-term memory for coherence" }
            ],
            roi: `Eliminates manual document parsing and Q&A triage. Enables field teams, support staff, and knowledge workers to submit assets via WhatsApp and receive instant, contextual answers. Searchable knowledge base built automatically from user submissions. Reduces support response time by 80%+ and enables 24/7 instant answer capability.`,
            testimonial: "A production-ready multimodal intake engine that transforms unstructured WhatsApp submissions into searchable, context-aware knowledge on demand.",
            conclusion: "Converts WhatsApp messages (text, audio, images, documents) into indexed, queryable knowledge with context-aware AI-powered answers.",
            author: "Enterprise Integration Team"
        },
        {
            id: "visual-brand-intelligence",
            industry: "Visual Brand Intelligence",
            client: "Visual Brand Intelligence: The AI-Powered Image Generation & Compliance Suite",
            size: "Enterprise Visual OS",
            challenge: `For high-end brands (think "Old Money," luxury, and generational wealth), "close enough" isn't an option. Manually crafting prompts that maintain consistent lighting, lens physics, and material textures across hundreds of assets is a full-time job. 

Furthermore, once an image is generated, verifying it against strict brand guidelines—HEX codes, font styles, and logo placement—usually requires a human designer's eyes. Scaling this process manually is a recipe for burnout and brand dilution.`,
            solution: `A2B engineered a massive, modular n8n ecosystem that acts as a Virtual Creative Director. The workflow takes a raw concept and runs it through a gauntlet of specialized AI agents to ensure the final output isn't just a "pretty picture," but a brand-compliant asset.`,
            details: {
                phase1: {
                    title: "Phase 1: The \"Mega Prompt\" Engine",
                    trigger: "A webhook or chat message initiates the request.",
                    capabilities: [
                        {
                            title: "Style Fetching",
                            description: "An AI agent queries the Supabase \"Style Vault\" to find the closest aesthetic match (e.g., \"Editorial Flash\" or \"35mm Retro\")."
                        },
                        {
                            title: "Physics Injection",
                            description: "The \"Alpha Prompt\" node wraps the user's idea in technical language—lens compression, lighting falloff, and \"imperfection systems\" (dust, grain, noise) to force photorealism."
                        }
                    ]
                },
                phase2: {
                    title: "Phase 2: High-Fidelity Generation",
                    trigger: "Engineered prompt ready for rendering.",
                    capabilities: [
                        {
                            title: "The Render",
                            description: "The workflow sends the engineered prompt to the Nano Banana Pro model."
                        },
                        {
                            title: "Consistency Check",
                            description: "The system ensures the output adheres to the \"Old Money\" global theme—American retro wealth, quiet intimacy, and Architectural Digest-level quality."
                        }
                    ]
                },
                phase3: {
                    title: "Phase 3: The Automated Quality Checker",
                    trigger: "Generated image passed for audit.",
                    capabilities: [
                        {
                            title: "Visual Audit",
                            description: "The generated image is passed to a \"Brand Compliance Officer\" powered by Gemini."
                        },
                        {
                            title: "Rule Comparison",
                            description: "It compares the image's dominant colors and styles against the official Brand Guidelines stored in Supabase."
                        },
                        {
                            title: "Pass/Fail",
                            description: "The system returns a compliance score. If it's a \"Fail,\" it generates a specific instruction to fix the asset—no vague notes, no back-and-forth."
                        }
                    ]
                },
                phase4: {
                    title: "Phase 4: Advanced Segmentation (SAM & Qwen)",
                    trigger: "Brand-compliant image ready for final editing.",
                    capabilities: [
                        {
                            title: "Object Cutting",
                            description: "Using the SAM (Segment Anything) node, the workflow isolates specific subjects from their backgrounds with precision."
                        },
                        {
                            title: "Precision Masking",
                            description: "The Qwen node handles complex spatial reasoning to ensure that when subjects are placed in new environments, lighting and shadows integrate seamlessly."
                        }
                    ]
                }
            },
            images: [
                { src: visualBrandImg1, alt: "Visual Brand Image 1", caption: "AI-Powered Generation Asset 1" },
                { src: visualBrandImg2, alt: "Visual Brand Image 2", caption: "AI-Powered Generation Asset 2" },
                { src: visualBrandImg3, alt: "Visual Brand Image 3", caption: "AI-Powered Generation Asset 3" },
                { src: visualBrandImg4, alt: "Visual Brand Image 4", caption: "Brand Compliance Audit" },
                { src: visualBrandImg5, alt: "Visual Brand Image 5", caption: "Advanced Segmentation Result" },
                { src: visualBrandImg6, alt: "Visual Brand Image 6", caption: "Final Brand-Ready Export" }
            ],
            technology: ["n8n", "Google Gemini 2.0 Pro", "Nano Banana Pro", "Supabase", "SAM (Segment Anything)", "Qwen"],
            results: [
                { icon: Clock, metric: "100% Accuracy", label: "Technical camera/lighting physics" },
                { icon: TrendingUp, metric: "Auto-Audit", label: "Instant brand-safety checks" },
                { icon: DollarSign, metric: "Surgical Edit", label: "Automated subject isolation" },
                { icon: Users, metric: "Infinite Scale", label: "100+ assets in minutes" }
            ],
            roi: `A complete visual autopilot. By moving from "guessing" to "engineering" images, brands save hundreds of hours in creative direction and revision cycles. It ensures that every single pixel published—whether for a social post or an enterprise report—feels intentionally crafted and perfectly on-brand.`,
            testimonial: "It transforms brand image generation from a bottleneck into an infinite-capacity automation engine, preserving creative vision while enabling unlimited production at zero additional cost.",
            conclusion: "Visual Brand Intelligence represents the pinnacle of brand-consistent AI image generation, combining artistic soul with technical precision.",
            author: "A2B AI Team"
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
                    <section className="space-y-10 animate-fade-in">
                        {/* Hero Banner */}
                        <div className="cs-hero-gradient rounded-2xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.08),transparent_60%)]" />
                            <div className="relative z-10">
                                <Badge variant="outline" className="cs-badge-tech mb-4">
                                    Documentation Portal
                                </Badge>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 cs-gradient-text">
                                    Welcome to A2B
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                                    A2B Automation Agency was founded with the vision of empowering startups and businesses
                                    to move seamlessly. Our mission is to simplify complexity through automation, AI-driven
                                    systems, and intelligent workflows.
                                </p>
                                <p className="text-base text-muted-foreground/80 mt-4 max-w-2xl">
                                    At A2B, we believe that automation isn't just about efficiency — it's about creating
                                    space for innovation, creativity, and scaling what truly matters.
                                </p>
                            </div>
                        </div>

                        {/* Quick Start Cards */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="cs-glass-card rounded-xl p-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                        <FileText className="h-5 w-5 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Explore Case Studies</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Dive into real-world implementations — from sacred text video generation to
                                        AI-powered medical consultation systems.
                                    </p>
                                </div>
                                <div className="cs-glass-card rounded-xl p-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                        <Workflow className="h-5 w-5 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Automation Templates</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Download ready-to-use n8n workflow templates for AI assistants,
                                        research pipelines, and newsletter creation.
                                    </p>
                                </div>
                                <div className="cs-glass-card rounded-xl p-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                        <Laptop className="h-5 w-5 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Technology Stack</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Explore our curated technology foundation — from cloud infrastructure
                                        to AI platforms and integration architecture.
                                    </p>
                                </div>
                                <div className="cs-glass-card rounded-xl p-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                        <Library className="h-5 w-5 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Resources & FAQ</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Technical support guides, implementation tips, and a glossary
                                        of AI terminology to help you navigate our ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="cs-section-divider" />

                        {/* Navigation Guide */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Navigating the Documentation</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our documentation is structured for clarity and action. Each major category expands into
                                detailed subtopics like "Workflow Automation," "AI Integrations," "Dashboards & Analytics,"
                                and "Implementation Guides." Use the sidebar to explore each section.
                            </p>
                        </div>

                        {/* Who This Is For */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Who This Is For</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Founders and business owners who want to automate operations and scale faster",
                                    "Developers building automation pipelines or integrating APIs",
                                    "Operations teams aiming to reduce manual workload and errors",
                                    "Agencies or startups exploring AI-powered workflows"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                                        <span className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        </span>
                                        <span className="text-sm text-muted-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cs-section-divider" />

                        {/* How to Work With Us */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">How to Work With Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To collaborate with A2B, visit our Contact Page and share your project goals, workflow challenges,
                                and requirements. The more details you provide, the better we can design an automation solution
                                tailored to your business.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                A2B currently works through custom automation partnerships, designed to fit projects of varying
                                scales — from one-time setup systems to full enterprise integrations.
                            </p>
                        </div>

                        {/* Documentation Tips */}
                        <div className="cs-glass-card rounded-xl p-6">
                            <h2 className="text-xl font-bold mb-4">📚 Documentation Tips</h2>
                            <p className="text-sm text-muted-foreground mb-4">
                                Each page in our documentation is concise, visual, and actionable. You'll find:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    "Step-by-step guides with real examples",
                                    "Visual diagrams of workflows and systems",
                                    "AI prompt templates for automation building",
                                    "Short demo videos where relevant"
                                ].map((tip, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <ArrowRight className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                                        <span>{tip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feedback */}
                        <div className="text-center py-6">
                            <p className="text-muted-foreground">
                                We're always improving — both our systems and our documentation.{" "}
                                <Link to="/contact" className="text-accent hover:underline font-medium">
                                    Share your feedback →
                                </Link>
                            </p>
                        </div>
                    </section>
                );

            case "sacred-text-publishing":
                const currentStudy = studies.find(study => study.id === currentSection);
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            {currentStudy && (
                                <div className="space-y-8">
                                    {/* Hero Header */}
                                    <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(260_80%_55%/0.06),transparent_50%)]" />
                                        <div className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="cs-badge-tech">{currentStudy.industry}</span>
                                                <span className="cs-badge-tech">{currentStudy.size}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{currentStudy.client}</h2>
                                        </div>
                                    </div>

                                    {/* Challenge Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-destructive" />
                                            The Challenge
                                        </h3>
                                        <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base leading-relaxed pl-5">
                                            {currentStudy.challenge}
                                        </p>
                                    </div>

                                    <div className="cs-section-divider" />

                                    {/* Solution Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-accent" />
                                            The Solution
                                        </h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-5">
                                            {currentStudy.solution}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pl-5">
                                            {currentStudy.technology.map((tech) => (
                                                <span key={tech} className="cs-badge-tech text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Architecture Image Viewer (for medical-consultation only) */}
                                    {currentStudy.id === "medical-consultation" && (
                                        <div className="cs-image-container">
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
                                                className="relative aspect-square w-full max-w-2xl mx-auto bg-black/5 overflow-hidden"
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

                                    {/* Primary Image */}
                                    {currentStudy.images && currentStudy.images[0] && (
                                        <div className="cs-image-container">
                                            <img
                                                src={currentStudy.images[0].src}
                                                alt={currentStudy.images[0].alt}
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                                                {currentStudy.images[0].caption}
                                            </p>
                                        </div>
                                    )}

                                    {/* Implementation Details (Phases) */}
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-bold">Implementation Details</h3>
                                        {Object.values(currentStudy.details).map((phase: any, index) => (
                                            <div key={index} className="cs-phase-block pb-6">
                                                <div className="cs-phase-number">{index + 1}</div>
                                                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    <span className="font-medium text-foreground/80">Trigger:</span> {phase.trigger}
                                                </p>
                                                <div className="space-y-3">
                                                    {phase.capabilities.map((capability: any, capIndex: number) => (
                                                        <div key={capIndex} className="cs-capability-card">
                                                            <h5 className="text-sm md:text-base font-semibold mb-2">{capability.title}</h5>
                                                            <div className="text-muted-foreground text-sm leading-relaxed">
                                                                {capability.description.includes('-') ? (
                                                                    <div dangerouslySetInnerHTML={{
                                                                        __html: capability.description.split('\n').map((line: string) => {
                                                                            const text = line.trim();
                                                                            const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                                            if (text.startsWith('-')) {
                                                                                return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                                            }
                                                                            return `<p class="mb-2">${convertBold(text)}</p>`;
                                                                        }).join('')
                                                                    }} />
                                                                ) : (
                                                                    <p>{capability.description}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Secondary Image */}
                                    {currentStudy.images && currentStudy.images[1] && (
                                        <div className="cs-image-container">
                                            <img
                                                src={currentStudy.images[1].src}
                                                alt={currentStudy.images[1].alt}
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                                                {currentStudy.images[1].caption}
                                            </p>
                                        </div>
                                    )}

                                    <div className="cs-section-divider" />

                                    {/* Key Metrics */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                                            {currentStudy.results.map((result, i) => (
                                                <div
                                                    key={result.label}
                                                    className="cs-metric-card text-center p-4 md:p-5 rounded-xl"
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                >
                                                    <result.icon className="h-6 w-6 md:h-7 md:w-7 text-accent mx-auto mb-3" />
                                                    <div className="text-xl md:text-2xl font-bold mb-1 cs-gradient-text">
                                                        {result.metric}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ROI Section */}
                                    <div className="cs-glass-card rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4">Return on Investment</h3>
                                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{
                                            __html: currentStudy.roi.split('\n').map(line => {
                                                const text = line.trim();
                                                const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                if (text.startsWith('-')) {
                                                    return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                }
                                                return `<p class="mb-2">${convertBold(text)}</p>`;
                                            }).join('')
                                        }} />
                                    </div>

                                    {/* Testimonial */}
                                    <div className="cs-testimonial">
                                        <p className="text-base md:text-lg italic mb-3 pl-6">{currentStudy.testimonial}</p>
                                        <p className="text-xs md:text-sm text-muted-foreground pl-6">— {currentStudy.author}</p>
                                    </div>

                                    {/* Conclusion */}
                                    <div className="text-center py-4">
                                        <p className="text-base md:text-lg font-medium cs-gradient-text inline-block">
                                            {currentStudy.conclusion}
                                        </p>
                                    </div>

                                    {/* LinkedIn Link */}
                                    {(currentStudy.id === "financial-services" || currentStudy.id === "sacred-text-publishing") && (
                                        <div className="text-center">
                                            <a
                                                href="https://www.linkedin.com/posts/rahul-v-k_%F0%9D%90%93%F0%9D%90%A1%F0%9D%90%A2%F0%9D%90%AC-%F0%9D%90%9C%F0%9D%90%A5%F0%9D%90%A2%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-%F0%9D%90%A3%F0%9D%90%AE%F0%9D%90%AC%F0%9D%90%AD-%F0%9D%90%A9%F0%9D%90%9A%F0%9D%90%A2%F0%9D%90%9D-%F0%9D%90%A6%F0%9D%90%9E-activity-7375086404386807808-gVcy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0RNokBO_aQUDwWXD6sGmbeS1CMusGKIEI"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 cs-badge-tech px-4 py-2 hover:bg-accent/20 transition-colors"
                                            >
                                                <span>View on LinkedIn</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            )}
                        </ScrollReveal>
                    </section>
                );

            case "medical-consultation":
                const lifosysStudy = studies.find(study => study.id === "medical-consultation");
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            {lifosysStudy && (
                                <div className="space-y-8">
                                    {/* Hero Header */}
                                    <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(260_80%_55%/0.06),transparent_50%)]" />
                                        <div className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="cs-badge-tech">{lifosysStudy.industry}</span>
                                                <span className="cs-badge-tech">{lifosysStudy.size}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{lifosysStudy.client}</h2>
                                        </div>
                                    </div>


                                    {/* Challenge */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-destructive" />
                                            The Challenge
                                        </h3>
                                        <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base leading-relaxed pl-5">
                                            {lifosysStudy.challenge}
                                        </p>
                                    </div>

                                    <div className="cs-section-divider" />

                                    {/* Solution */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-accent" />
                                            The Solution
                                        </h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-5">{lifosysStudy.solution}</p>
                                        <div className="flex flex-wrap gap-2 pl-5">
                                            {lifosysStudy.technology.map((tech) => (
                                                <span key={tech} className="cs-badge-tech text-xs">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Architecture Image Viewer */}
                                    <div className="cs-image-container">
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
                                            className="relative aspect-square w-full max-w-2xl mx-auto bg-black/5 overflow-hidden"
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

                                    {/* Implementation Details (Phases) */}
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-bold">Implementation Details</h3>
                                        {Object.values(lifosysStudy.details).map((phase: any, index) => (
                                            <div key={index} className="cs-phase-block pb-6">
                                                <div className="cs-phase-number">{index + 1}</div>
                                                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    <span className="font-medium text-foreground/80">Trigger:</span> {phase.trigger}
                                                </p>
                                                <div className="space-y-3">
                                                    {phase.capabilities.map((capability: any, capIndex: number) => (
                                                        <div key={capIndex} className="cs-capability-card">
                                                            <h5 className="text-sm md:text-base font-semibold mb-2">{capability.title}</h5>
                                                            <div className="text-muted-foreground text-sm leading-relaxed">
                                                                {capability.description.includes('-') ? (
                                                                    <div dangerouslySetInnerHTML={{
                                                                        __html: capability.description.split('\n').map((line: string) => {
                                                                            const text = line.trim();
                                                                            const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                                            if (text.startsWith('-')) {
                                                                                return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                                            }
                                                                            return `<p class="mb-2">${convertBold(text)}</p>`;
                                                                        }).join('')
                                                                    }} />
                                                                ) : (
                                                                    <p>{capability.description}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="cs-section-divider" />

                                    {/* Key Metrics */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                                            {lifosysStudy.results.map((result, i) => (
                                                <div key={result.label} className="cs-metric-card text-center p-4 md:p-5 rounded-xl">
                                                    <result.icon className="h-6 w-6 md:h-7 md:w-7 text-accent mx-auto mb-3" />
                                                    <div className="text-xl md:text-2xl font-bold mb-1 cs-gradient-text">{result.metric}</div>
                                                    <div className="text-xs text-muted-foreground">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ROI */}
                                    <div className="cs-glass-card rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4">Return on Investment</h3>
                                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{
                                            __html: lifosysStudy.roi.split('\n').map(line => {
                                                const text = line.trim();
                                                const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                if (text.startsWith('-')) {
                                                    return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                }
                                                return `<p class="mb-2">${convertBold(text)}</p>`;
                                            }).join('')
                                        }} />
                                    </div>

                                    {/* Testimonial */}
                                    <div className="cs-testimonial">
                                        <p className="text-base md:text-lg italic mb-3 pl-6">{lifosysStudy.testimonial}</p>
                                        <p className="text-xs md:text-sm text-muted-foreground pl-6">— {lifosysStudy.author}</p>
                                    </div>

                                    {/* Conclusion */}
                                    <div className="text-center py-4">
                                        <p className="text-base md:text-lg font-medium cs-gradient-text inline-block">
                                            {lifosysStudy.conclusion}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </ScrollReveal>
                    </section>
                );

            case "imagegeneration":
                const imageGenStudy = studies.find(study => study.id === "imagegeneration");
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            {imageGenStudy && (
                                <div className="space-y-8">
                                    {/* Hero Header */}
                                    <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(260_80%_55%/0.06),transparent_50%)]" />
                                        <div className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="cs-badge-tech">{imageGenStudy.industry}</span>
                                                <span className="cs-badge-tech">{imageGenStudy.size}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{imageGenStudy.client}</h2>
                                        </div>
                                    </div>

                                    {/* Challenge Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-destructive" />
                                            The Challenge
                                        </h3>
                                        <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base leading-relaxed pl-5">
                                            {imageGenStudy.challenge}
                                        </p>
                                    </div>

                                    <div className="cs-section-divider" />

                                    {/* Solution Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-accent" />
                                            The Solution
                                        </h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-5">
                                            {imageGenStudy.solution}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pl-5">
                                            {imageGenStudy.technology.map((tech) => (
                                                <span key={tech} className="cs-badge-tech text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Primary Image */}
                                    {imageGenStudy.images && imageGenStudy.images[0] && (
                                        <div className="cs-image-container">
                                            <img
                                                src={imageGenStudy.images[0].src}
                                                alt={imageGenStudy.images[0].alt}
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                                                {imageGenStudy.images[0].caption}
                                            </p>
                                        </div>
                                    )}

                                    {/* Implementation Details (Phases) */}
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-bold">Implementation Details</h3>
                                        {Object.values(imageGenStudy.details).map((phase: any, index) => (
                                            <div key={index} className="cs-phase-block pb-6">
                                                <div className="cs-phase-number">{index + 1}</div>
                                                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    <span className="font-medium text-foreground/80">Trigger:</span> {phase.trigger}
                                                </p>
                                                <div className="space-y-3">
                                                    {phase.capabilities.map((capability: any, capIndex: number) => (
                                                        <div key={capIndex} className="cs-capability-card">
                                                            <h5 className="text-sm md:text-base font-semibold mb-2">{capability.title}</h5>
                                                            <div className="text-muted-foreground text-sm leading-relaxed">
                                                                {capability.description.includes('-') ? (
                                                                    <div dangerouslySetInnerHTML={{
                                                                        __html: capability.description.split('\n').map((line: string) => {
                                                                            const text = line.trim();
                                                                            const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                                            if (text.startsWith('-')) {
                                                                                return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                                            }
                                                                            return `<p class="mb-2">${convertBold(text)}</p>`;
                                                                        }).join('')
                                                                    }} />
                                                                ) : (
                                                                    <p>{capability.description}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Secondary Image */}
                                    {imageGenStudy.images && imageGenStudy.images[1] && (
                                        <div className="cs-image-container">
                                            <img
                                                src={imageGenStudy.images[1].src}
                                                alt={imageGenStudy.images[1].alt}
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                                                {imageGenStudy.images[1].caption}
                                            </p>
                                        </div>
                                    )}

                                    <div className="cs-section-divider" />

                                    {/* Key Metrics */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                                            {imageGenStudy.results.map((result, i) => (
                                                <div
                                                    key={result.label}
                                                    className="cs-metric-card text-center p-4 md:p-5 rounded-xl"
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                >
                                                    <result.icon className="h-6 w-6 md:h-7 md:w-7 text-accent mx-auto mb-3" />
                                                    <div className="text-xl md:text-2xl font-bold mb-1 cs-gradient-text">
                                                        {result.metric}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ROI Section */}
                                    <div className="cs-glass-card rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4">Return on Investment</h3>
                                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{
                                            __html: imageGenStudy.roi.split('\n').map(line => {
                                                const text = line.trim();
                                                const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                if (text.startsWith('-')) {
                                                    return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                }
                                                return `<p class="mb-2">${convertBold(text)}</p>`;
                                            }).join('')
                                        }} />
                                    </div>

                                    {/* Testimonial */}
                                    <div className="cs-testimonial">
                                        <p className="text-base md:text-lg italic mb-3 pl-6">{imageGenStudy.testimonial}</p>
                                        <p className="text-xs md:text-sm text-muted-foreground pl-6">— {imageGenStudy.author}</p>
                                    </div>

                                    {/* Conclusion */}
                                    <div className="text-center py-4">
                                        <p className="text-base md:text-lg font-medium cs-gradient-text inline-block">
                                            {imageGenStudy.conclusion}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </ScrollReveal>
                    </section>
                );

            case "multimodal-ai":
                const multimodalStudy = studies.find(study => study.id === "multimodal-ai");
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            {multimodalStudy && (
                                <div className="space-y-8">
                                    {/* Hero Header */}
                                    <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(260_80%_55%/0.06),transparent_50%)]" />
                                        <div className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="cs-badge-tech">{multimodalStudy.industry}</span>
                                                <span className="cs-badge-tech">{multimodalStudy.size}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{multimodalStudy.client}</h2>
                                        </div>
                                    </div>

                                    {/* Challenge Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-destructive" />
                                            The Challenge
                                        </h3>
                                        <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base leading-relaxed pl-5">
                                            {multimodalStudy.challenge}
                                        </p>
                                    </div>

                                    <div className="cs-section-divider" />

                                    {/* Solution Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-accent" />
                                            The Solution
                                        </h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-5">
                                            {multimodalStudy.solution}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pl-5">
                                            {multimodalStudy.technology.map((tech) => (
                                                <span key={tech} className="cs-badge-tech text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Primary Image */}
                                    {multimodalStudy.images && multimodalStudy.images[0] && (
                                        <div className="cs-image-container">
                                            <img
                                                src={multimodalStudy.images[0].src}
                                                alt={multimodalStudy.images[0].alt}
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                                                {multimodalStudy.images[0].caption}
                                            </p>
                                        </div>
                                    )}

                                    {/* Implementation Details (Phases) */}
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-bold">Implementation Details</h3>
                                        {Object.values(multimodalStudy.details).map((phase: any, index) => (
                                            <div key={index} className="cs-phase-block pb-6">
                                                <div className="cs-phase-number">{index + 1}</div>
                                                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    <span className="font-medium text-foreground/80">Trigger:</span> {phase.trigger}
                                                </p>
                                                <div className="space-y-3">
                                                    {phase.capabilities.map((capability: any, capIndex: number) => (
                                                        <div key={capIndex} className="cs-capability-card">
                                                            <h5 className="text-sm md:text-base font-semibold mb-2">{capability.title}</h5>
                                                            <div className="text-muted-foreground text-sm leading-relaxed">
                                                                {capability.description.includes('-') ? (
                                                                    <div dangerouslySetInnerHTML={{
                                                                        __html: capability.description.split('\n').map((line: string) => {
                                                                            const text = line.trim();
                                                                            const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                                            if (text.startsWith('-')) {
                                                                                return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                                            }
                                                                            return `<p class="mb-2">${convertBold(text)}</p>`;
                                                                        }).join('')
                                                                    }} />
                                                                ) : (
                                                                    <p>{capability.description}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Secondary Image */}
                                    {multimodalStudy.images && multimodalStudy.images[1] && (
                                        <div className="cs-image-container">
                                            <img
                                                src={multimodalStudy.images[1].src}
                                                alt={multimodalStudy.images[1].alt}
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                                                {multimodalStudy.images[1].caption}
                                            </p>
                                        </div>
                                    )}

                                    <div className="cs-section-divider" />

                                    {/* Key Metrics */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                                            {multimodalStudy.results.map((result, i) => (
                                                <div
                                                    key={result.label}
                                                    className="cs-metric-card text-center p-4 md:p-5 rounded-xl"
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                >
                                                    <result.icon className="h-6 w-6 md:h-7 md:w-7 text-accent mx-auto mb-3" />
                                                    <div className="text-xl md:text-2xl font-bold mb-1 cs-gradient-text">
                                                        {result.metric}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ROI Section */}
                                    <div className="cs-glass-card rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4">Return on Investment</h3>
                                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{
                                            __html: multimodalStudy.roi.split('\n').map(line => {
                                                const text = line.trim();
                                                const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                if (text.startsWith('-')) {
                                                    return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                }
                                                return `<p class="mb-2">${convertBold(text)}</p>`;
                                            }).join('')
                                        }} />
                                    </div>

                                    {/* Testimonial */}
                                    <div className="cs-testimonial">
                                        <p className="text-base md:text-lg italic mb-3 pl-6">{multimodalStudy.testimonial}</p>
                                        <p className="text-xs md:text-sm text-muted-foreground pl-6">— {multimodalStudy.author}</p>
                                    </div>

                                    {/* Conclusion */}
                                    <div className="text-center py-4">
                                        <p className="text-base md:text-lg font-medium cs-gradient-text inline-block">
                                            {multimodalStudy.conclusion}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </ScrollReveal>
                    </section>
                );

            case "visual-brand-intelligence":
                const visualBrandStudy = studies.find(study => study.id === "visual-brand-intelligence");
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            {visualBrandStudy && (
                                <div className="space-y-8">
                                    {/* Hero Header */}
                                    <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(200_80%_55%/0.06),transparent_50%)]" />
                                        <div className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="cs-badge-tech">{visualBrandStudy.industry}</span>
                                                <span className="cs-badge-tech">{visualBrandStudy.size}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{visualBrandStudy.client}</h2>
                                        </div>
                                    </div>

                                    {/* Challenge Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-destructive" />
                                            The Challenge
                                        </h3>
                                        <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base leading-relaxed pl-5">
                                            {visualBrandStudy.challenge}
                                        </p>
                                    </div>

                                    <div className="cs-section-divider" />

                                    {/* Solution Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-accent" />
                                            The Solution
                                        </h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-5">
                                            {visualBrandStudy.solution}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pl-5">
                                            {visualBrandStudy.technology.map((tech) => (
                                                <span key={tech} className="cs-badge-tech text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Images Grid after Solution */}
                                    {visualBrandStudy.images && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {visualBrandStudy.images.slice(0, 4).map((img, idx) => (
                                                <div key={idx} className="cs-image-container group">
                                                    <img
                                                        src={img.src}
                                                        alt={img.alt}
                                                        className="w-full h-auto"
                                                    />
                                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <p className="text-xs text-white text-center font-medium">{img.caption}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Implementation Details (Phases) */}
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-bold">Implementation Details</h3>
                                        {Object.values(visualBrandStudy.details).map((phase: any, index) => (
                                            <div key={index} className="cs-phase-block pb-6">
                                                <div className="cs-phase-number">{index + 1}</div>
                                                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    <span className="font-medium text-foreground/80">Trigger:</span> {phase.trigger}
                                                </p>
                                                <div className="space-y-3">
                                                    {phase.capabilities.map((capability: any, capIndex: number) => (
                                                        <div key={capIndex} className="cs-capability-card">
                                                            <h5 className="text-sm md:text-base font-semibold mb-2">{capability.title}</h5>
                                                            <div className="text-muted-foreground text-sm leading-relaxed">
                                                                {capability.description.includes("-") ? (
                                                                    <div dangerouslySetInnerHTML={{
                                                                        __html: capability.description.split("\n").map((line: string) => {
                                                                            const text = line.trim();
                                                                            const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
                                                                            if (text.startsWith("-")) {
                                                                                return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                                            }
                                                                            return `<p class="mb-2">${convertBold(text)}</p>`;
                                                                        }).join("")
                                                                    }} />
                                                                ) : (
                                                                    <p>{capability.description}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Remaining Images */}
                                    {visualBrandStudy.images && visualBrandStudy.images.length > 4 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {visualBrandStudy.images.slice(4).map((img, idx) => (
                                                <div key={idx} className="cs-image-container group">
                                                    <img
                                                        src={img.src}
                                                        alt={img.alt}
                                                        className="w-full h-auto"
                                                    />
                                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <p className="text-xs text-white text-center font-medium">{img.caption}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="cs-section-divider" />

                                    {/* Key Metrics */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                                            {visualBrandStudy.results.map((result, i) => (
                                                <div
                                                    key={result.label}
                                                    className="cs-metric-card text-center p-4 md:p-5 rounded-xl"
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                >
                                                    <result.icon className="h-6 w-6 md:h-7 md:w-7 text-accent mx-auto mb-3" />
                                                    <div className="text-xl md:text-2xl font-bold mb-1 cs-gradient-text">
                                                        {result.metric}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ROI Section */}
                                    <div className="cs-glass-card rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4">Return on Investment</h3>
                                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{
                                            __html: visualBrandStudy.roi.split("\n").map(line => {
                                                const text = line.trim();
                                                const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
                                                if (text.startsWith("-")) {
                                                    return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                }
                                                return `<p class="mb-2">${convertBold(text)}</p>`;
                                            }).join("")
                                        }} />
                                    </div>

                                    {/* Testimonial */}
                                    <div className="cs-testimonial">
                                        <p className="text-base md:text-lg italic mb-3 pl-6">{visualBrandStudy.testimonial}</p>
                                        <p className="text-xs md:text-sm text-muted-foreground pl-6">— {visualBrandStudy.author}</p>
                                    </div>

                                    {/* Conclusion */}
                                    <div className="text-center py-4">
                                        <p className="text-base md:text-lg font-medium cs-gradient-text inline-block">
                                            {visualBrandStudy.conclusion}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </ScrollReveal>
                    </section>
                );

            case "jarvis":
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">JARVIS (Ultimate Assistant)</h2>
                                    <p className="text-muted-foreground">The most advanced personal AI agent</p>
                                </div>

                                <div className="cs-glass-card rounded-xl p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-4">Overview</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                        The Ultimate Assistant is a comprehensive AI agent designed to handle multiple
                                        tasks and workflows efficiently. It combines advanced natural language processing
                                        with powerful automation capabilities to serve as your personal AI assistant.
                                    </p>
                                    <Button asChild variant="outline" className="cs-badge-tech border-accent/20 hover:bg-accent/10 transition-colors">
                                        <a href={jarvisJsonUrl} download>
                                            Download JARVIS.json
                                        </a>
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="cs-image-container">
                                        <img src={jarvisImg1} alt="JARVIS screenshot 1" className="w-full h-auto" />
                                    </div>
                                    <div className="cs-image-container">
                                        <img src={jarvisImg2} alt="JARVIS screenshot 2" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                );

            case "reddit-to-youtube":
                const redditStudy = studies.find(study => study.id === "reddit-to-youtube");
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            {redditStudy && (
                                <div className="space-y-8">
                                    {/* Hero Header */}
                                    <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(340_80%_55%/0.06),transparent_50%)]" />
                                        <div className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="cs-badge-tech">{redditStudy.industry}</span>
                                                <span className="cs-badge-tech">{redditStudy.size}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{redditStudy.client}</h2>
                                        </div>
                                    </div>

                                    {/* Challenge Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-destructive" />
                                            The Challenge
                                        </h3>
                                        <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base leading-relaxed pl-5">
                                            {redditStudy.challenge}
                                        </p>
                                    </div>

                                    <div className="cs-section-divider" />

                                    {/* Solution Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-6 rounded-full bg-accent" />
                                            The Solution
                                        </h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-5">
                                            {redditStudy.solution}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pl-5">
                                            {redditStudy.technology.map((tech) => (
                                                <span key={tech} className="cs-badge-tech text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Primary Image */}
                                    {redditStudy.images && redditStudy.images[0] && (
                                        <div className="cs-image-container">
                                            <img
                                                src={redditStudy.images[0].src}
                                                alt={redditStudy.images[0].alt}
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                                                {redditStudy.images[0].caption}
                                            </p>
                                        </div>
                                    )}

                                    {/* Implementation Details (Phases) */}
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-bold">Implementation Details</h3>
                                        {Object.values(redditStudy.details).map((phase: any, index) => (
                                            <div key={index} className="cs-phase-block pb-6">
                                                <div className="cs-phase-number">{index + 1}</div>
                                                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    <span className="font-medium text-foreground/80">Trigger:</span> {phase.trigger}
                                                </p>
                                                <div className="space-y-3">
                                                    {phase.capabilities.map((capability: any, capIndex: number) => (
                                                        <div key={capIndex} className="cs-capability-card">
                                                            <h5 className="text-sm md:text-base font-semibold mb-2">{capability.title}</h5>
                                                            <div className="text-muted-foreground text-sm leading-relaxed">
                                                                {capability.description.includes('-') ? (
                                                                    <div dangerouslySetInnerHTML={{
                                                                        __html: capability.description.split('\n').map((line: string) => {
                                                                            const text = line.trim();
                                                                            const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                                            if (text.startsWith('-')) {
                                                                                return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                                            }
                                                                            return `<p class="mb-2">${convertBold(text)}</p>`;
                                                                        }).join('')
                                                                    }} />
                                                                ) : (
                                                                    <p>{capability.description}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Secondary Image */}
                                    {redditStudy.images && redditStudy.images[1] && (
                                        <div className="cs-image-container">
                                            <img
                                                src={redditStudy.images[1].src}
                                                alt={redditStudy.images[1].alt}
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                                                {redditStudy.images[1].caption}
                                            </p>
                                        </div>
                                    )}

                                    <div className="cs-section-divider" />

                                    {/* Key Metrics */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                                            {redditStudy.results.map((result, i) => (
                                                <div
                                                    key={result.label}
                                                    className="cs-metric-card text-center p-4 md:p-5 rounded-xl"
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                >
                                                    <result.icon className="h-6 w-6 md:h-7 md:w-7 text-accent mx-auto mb-3" />
                                                    <div className="text-xl md:text-2xl font-bold mb-1 cs-gradient-text">
                                                        {result.metric}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ROI Section */}
                                    <div className="cs-glass-card rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4">Return on Investment</h3>
                                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{
                                            __html: redditStudy.roi.split('\n').map(line => {
                                                const text = line.trim();
                                                const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                                if (text.startsWith('-')) {
                                                    return `<li class="ml-4 mb-1">${convertBold(text.substring(1).trim())}</li>`;
                                                }
                                                return `<p class="mb-2">${convertBold(text)}</p>`;
                                            }).join('')
                                        }} />
                                    </div>

                                    {/* Testimonial */}
                                    <div className="cs-testimonial">
                                        <p className="text-base md:text-lg italic mb-3 pl-6">{redditStudy.testimonial}</p>
                                        <p className="text-xs md:text-sm text-muted-foreground pl-6">— {redditStudy.author}</p>
                                    </div>

                                    {/* Conclusion */}
                                    <div className="text-center py-4">
                                        <p className="text-base md:text-lg font-medium cs-gradient-text inline-block">
                                            {redditStudy.conclusion}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </ScrollReveal>
                    </section>
                );

            case "lexicon":
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Lexicon (Deep Research PDF)</h2>
                                    <p className="text-muted-foreground">Comprehensive intelligence at your fingertips</p>
                                </div>

                                <div className="cs-glass-card rounded-xl p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-4">Overview</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                        Specialized agent for conducting in-depth research and generating comprehensive PDF reports.
                                        Engineered for high-accuracy data retrieval and professional document formatting.
                                    </p>
                                    <Button asChild variant="outline" className="cs-badge-tech border-accent/20 hover:bg-accent/10 transition-colors">
                                        <a href={lexiconJsonUrl} download>
                                            Download Deep_Research.json
                                        </a>
                                    </Button>
                                </div>

                                <div className="cs-image-container max-w-2xl mx-auto">
                                    <img src={lexiconImg} alt="Lexicon" className="w-full h-auto" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                );

            case "aether":
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Aether (Newsletter Creation)</h2>
                                    <p className="text-muted-foreground">Automated curation and distribution</p>
                                </div>

                                <div className="cs-glass-card rounded-xl p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-4">Overview</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                        AI-powered newsletter creation and distribution system.
                                        Handles everything from content discovery to audience-specific formatting and scheduling.
                                    </p>
                                    <Button asChild variant="outline" className="cs-badge-tech border-accent/20 hover:bg-accent/10 transition-colors">
                                        <a href={aetherJsonUrl} download>
                                            Download Newsletter_Automation.json
                                        </a>
                                    </Button>
                                </div>

                                <div className="cs-image-container max-w-2xl mx-auto">
                                    <img src={aetherImg} alt="Aether" className="w-full h-auto" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                );

            case "curio":
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Curio (RAG Pipeline)</h2>
                                    <p className="text-muted-foreground">Proprietary knowledge retrieval at scale</p>
                                </div>

                                <div className="cs-glass-card rounded-xl p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-4">Overview</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                        Retrieval-Augmented Generation pipeline for enhanced AI responses.
                                        Enables models to access and reason over your organization's entire private dataset securely.
                                    </p>
                                    <Button asChild variant="outline" className="cs-badge-tech border-accent/20 hover:bg-accent/10 transition-colors">
                                        <a href={curioJsonUrl} download>
                                            Download RAG_Pipeline.json
                                        </a>
                                    </Button>
                                </div>

                                <div className="cs-image-container max-w-2xl mx-auto">
                                    <img src={curioImg} alt="Curio" className="w-full h-auto" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                );

            case "tech-stack":
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                    <h2 className="text-3xl font-bold mb-4">Enterprise Technology Stack</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                        Our robust technology infrastructure is engineered for maximum reliability, scalability, and security, providing the foundation for mission-critical AI solutions.
                                    </p>
                                </div>

                                <div className="cs-glass-card rounded-2xl p-8 md:p-12">
                                    <div className="space-y-16">
                                        {/* Infrastructure Core */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">01</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">Infrastructure Core</h3>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                <div className="space-y-6">
                                                    <h4 className="text-xl font-semibold text-primary">Cloud Ecosystem</h4>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        Our infrastructure backbone is built predominantly on <strong>Amazon Web Services (AWS)</strong>, providing enterprise-level security, global availability, and comprehensive service integration.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="cs-badge-tech">AWS</span>
                                                        <span className="cs-badge-tech">Azure</span>
                                                        <span className="cs-badge-tech">GCP</span>
                                                        <span className="cs-badge-tech">DigitalOcean</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <h4 className="text-xl font-semibold text-primary">Backend & Storage</h4>
                                                    <div className="space-y-4">
                                                        <div className="cs-capability-card">
                                                            <strong className="text-foreground">Supabase & PostgreSQL</strong>
                                                            <p className="text-sm text-muted-foreground mt-1">Real-time synchronization and enterprise-grade relational data management.</p>
                                                        </div>
                                                        <div className="cs-capability-card">
                                                            <strong className="text-foreground">Vector Intelligence</strong>
                                                            <p className="text-sm text-muted-foreground mt-1">Specialized storage including Pinecone, Weaviate, and Qdrant for semantic search.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cs-section-divider" />

                                        {/* Development Architecture */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">02</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">Development Architecture</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="cs-capability-card">
                                                    <h4 className="text-lg font-semibold mb-3">Core Languages & IDEs</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                        A balanced stack of Python for AI/Backend and TypeScript for frontend, supported by AI-assisted development platforms.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="cs-badge-tech">Python</span>
                                                        <span className="cs-badge-tech">TypeScript</span>
                                                        <span className="cs-badge-tech">Replit</span>
                                                        <span className="cs-badge-tech">Cursor</span>
                                                    </div>
                                                </div>
                                                <div className="cs-capability-card">
                                                    <h4 className="text-lg font-semibold mb-3">Integration & Voice</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                        Strategic partnerships enabling 850+ pre-built integrations and industry-leading neural voice synthesis.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="cs-badge-tech">n8n</span>
                                                        <span className="cs-badge-tech">ElevenLabs</span>
                                                        <span className="cs-badge-tech">Voice AI</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cs-section-divider" />

                                        {/* AI Methodology */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">03</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">Artificial Intelligence Platform</h3>
                                            <div className="space-y-8">
                                                <div className="cs-glass-card border-none bg-accent/5 p-6 rounded-xl">
                                                    <p className="text-muted-foreground italic text-center">
                                                        "A2B maintains a <strong>model-agnostic philosophy</strong>, selection optimal LLMs based on performance, budget, and business objectives."
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-semibold flex items-center gap-2">
                                                            <span className="w-1.5 h-4 bg-accent rounded-full" />
                                                            RAG Pipeline
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            Sophisticated context injection architectures that minimize factual errors by anchoring responses to proprietary data.
                                                        </p>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-semibold flex items-center gap-2">
                                                            <span className="w-1.5 h-4 bg-accent rounded-full" />
                                                            Agent Orchestration
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            Autonomous agents performing active tasks—searching, summarizing, and triggering cross-system workflows.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                );

            case "resources":
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                    <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                        Technical support, implementation guides, and terminology reference for partners and decision-makers.
                                    </p>
                                </div>

                                <div className="cs-glass-card rounded-2xl p-8 md:p-12">
                                    <div className="space-y-16">
                                        {/* AI Development FAQ */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">01</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">AI Development & Implementation</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {[
                                                    {
                                                        q: "How do you maintain long-term stability?",
                                                        a: "Our systems use component-based architecture with versioned APIs and comprehensive documentation for isolated updates."
                                                    },
                                                    {
                                                        q: "What safeguards exist against inaccuracies?",
                                                        a: "Validation frameworks like RAGAS and manual reviews track model behavior, with verification against known-accurate data."
                                                    },
                                                    {
                                                        q: "Is on-premises deployment supported?",
                                                        a: "Yes, we support VPC configurations and dedicated private environments with standard IAM and security credentials."
                                                    },
                                                    {
                                                        q: "Do you support international languages?",
                                                        a: "Certainly. We implement multilingual model configurations and localization frameworks tailored to global engagement."
                                                    }
                                                ].map((faq, i) => (
                                                    <div key={i} className="cs-capability-card">
                                                        <h4 className="text-lg font-semibold mb-3 text-primary">{faq.q}</h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="cs-section-divider" />

                                        {/* Terminology Reference */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">02</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">Technical Terminology</h3>
                                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { label: "LLM", desc: "Large Language Models trained on extensive datasets." },
                                                    { label: "RAG", desc: "Retrieval-Augmented Generation for factual reliability." },
                                                    { label: "Vector DB", desc: "Similarity-based search for semantic meaning." },
                                                    { label: "Embeddings", desc: "Numerical representations of intent and context." },
                                                    { label: "HITL", desc: "Human-in-the-loop for verified decision making." },
                                                    { label: "CI/CD", desc: "Automated delivery and validation pipelines." }
                                                ].map((term, i) => (
                                                    <div key={i} className="cs-metric-card p-4">
                                                        <div className="text-accent font-bold mb-1">{term.label}</div>
                                                        <div className="text-xs text-muted-foreground">{term.desc}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
