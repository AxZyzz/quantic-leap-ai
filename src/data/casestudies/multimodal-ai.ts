import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";
import type { CaseStudy } from "./types";
import ragImg from "../../assets/casestudy/rag/RAG.jpg";
import ragArcImg from "../../assets/casestudy/rag/RAG_ARC.jpg";

const multimodalAi: CaseStudy = {
  id: "multimodal-ai",
  sidebarTitle: "Multimodal AI Intake",
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
};

export default multimodalAi;
