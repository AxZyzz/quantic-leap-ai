import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";
import type { CaseStudy } from "./types";
import medicalConsultationArchitecture from "../../assets/solution/medical_consultation_architecture.png";

const medicalConsultation: CaseStudy = {
  id: "medical-consultation",
  sidebarTitle: "Medical Consultation",
  industry: "Healthcare & Medical Services",
  client: "AI-Powered WhatsApp Medical Consultation Automation System",
  size: "Multi-Hospital Network",
  challenge: `A leading healthcare provider operating multiple hospitals across a major Indian region faced a critical challenge: patients needed a frictionless system to access medical consultation services. Their existing process required users to install apps or navigate complex websites—barriers that significantly reduced engagement, especially among the general population who prefer simple WhatsApp-based communication.

Managing 100–200+ daily inquiries manually was time-consuming and unsustainable. Scaling to 500–2000 daily inquiries would require a large team. Medical documents, voice notes, and text messages arrived scattered across channels, leading to manual data entry and inconsistent records.`,
  solution: `A2B built a multilingual, multimodal WhatsApp automation system powered by n8n, Gemini AI, and WhatsApp Business API, enabling patients to start consultations instantly through text, voice, or document uploads. The solution handles 100–200+ daily inquiries automatically, manages medical documents, collects structured patient information, and logs everything into a centralized database—without any manual staff involvement.`,
  details: {
    phase1: {
      title: "Phase 1: Multi-Modal Input Processing",
      trigger: "Incoming message via WhatsApp webhook triggers the system to classify user input intelligently.",
      capabilities: [
        { title: "Text Message Processing", description: "Text messages are sent directly to the AI agent for natural conversation flow and data collection." },
        { title: "Voice Message Transcription", description: "Voice messages are downloaded from WhatsApp, transcribed to text using Gemini's audio API, and fed to the AI agent. Supports multilingual speech (English + Malayalam) enabling elderly users and patients with limited literacy to interact naturally." },
        { title: "Document Upload & Management", description: "Prescriptions, lab reports, PDFs, images, and scans trigger a dedicated document pipeline for storage, tracking, and patient record updates." }
      ]
    },
    phase2: {
      title: "Phase 2: Conversational AI Agent with Bilingual Support",
      trigger: "AI agent powered by Gemini manages the consultation intake and patient data collection.",
      capabilities: [
        { title: "Multilingual Support (English & Malayalam)", description: "Patients choose their language at the start—AI maintains it throughout the conversation, ensuring accessibility for all demographics in Kerala." },
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
        { title: "Contextual Memory & Safety", description: "The system retains the last 20 messages to maintain natural, contextual conversations. The AI never gives medical advice—it only guides, collects data, clarifies queries, and prepares patient information for doctors." },
        { title: "Real-Time Database Updates", description: "Every key step updates Google Sheets, automatically building a complete CRM with patient demographics, document links, service selection, hospital choice, consultation status, and timestamps." }
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
        { title: "Intelligent Response System", description: "Based on conversation progress, professional WhatsApp messages are automatically sent in the patient's chosen language, confirming collected details, providing next steps, acknowledging documents, and offering hospital guidance." },
        { title: "Zero Manual Admin Work", description: "The automation eliminates manual data collection, document organization, transcription, database entry, and follow-up messages. 100–200+ inquiries are handled daily with zero operators." }
      ]
    }
  },
  images: [
    {
      src: medicalConsultationArchitecture,
      alt: "System Architecture Flowchart",
      caption: "System Architecture & Data Flow: Multimodal WhatsApp Consultation Pipeline",
      interactive: true
    }
  ],
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
};

export default medicalConsultation;
