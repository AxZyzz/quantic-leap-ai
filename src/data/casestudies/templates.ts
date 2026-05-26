import type { AutomationTemplate } from "./types";
import jarvisImg1 from "../../assets/casestudy/JARVIS/jarvis-screenshot-1.png";
import jarvisImg2 from "../../assets/casestudy/JARVIS/jarvis-screenshot-2.png";
import lexiconImg from "../../assets/casestudy/Lexicon/image.webp";
import aetherImg from "../../assets/casestudy/Aether/Newsletters.webp";
import curioImg from "../../assets/casestudy/Curio/image.webp";

const jarvisJsonUrl = new URL("../../assets/casestudy/JARVIS/JARVIS.json", import.meta.url).href;
const lexiconJsonUrl = new URL("../../assets/casestudy/Lexicon/Deep_Research.json", import.meta.url).href;
const aetherJsonUrl = new URL("../../assets/casestudy/Aether/Newsletter_Automation.json", import.meta.url).href;
const curioJsonUrl = new URL("../../assets/casestudy/Curio/RAG_Pipeline.json", import.meta.url).href;

export const automationTemplates: AutomationTemplate[] = [
  {
    id: "jarvis",
    sidebarTitle: "JARVIS (Ultimate Assistant)",
    title: "JARVIS (Ultimate Assistant)",
    subtitle: "The most advanced personal AI agent",
    overview: "The Ultimate Assistant is a comprehensive AI agent designed to handle multiple tasks and workflows efficiently. It combines advanced natural language processing with powerful automation capabilities to serve as your personal AI assistant.",
    downloadUrl: jarvisJsonUrl,
    downloadLabel: "Download JARVIS.json",
    images: [
      { src: jarvisImg1, alt: "JARVIS screenshot 1" },
      { src: jarvisImg2, alt: "JARVIS screenshot 2" },
    ],
  },
  {
    id: "lexicon",
    sidebarTitle: "Lexicon (PDF Report)",
    title: "Lexicon (Deep Research PDF)",
    subtitle: "Comprehensive intelligence at your fingertips",
    overview: "Specialized agent for conducting in-depth research and generating comprehensive PDF reports. Engineered for high-accuracy data retrieval and professional document formatting.",
    downloadUrl: lexiconJsonUrl,
    downloadLabel: "Download Deep_Research.json",
    images: [{ src: lexiconImg, alt: "Lexicon" }],
  },
  {
    id: "aether",
    sidebarTitle: "Aether (Newsletter Creation)",
    title: "Aether (Newsletter Creation)",
    subtitle: "Automated curation and distribution",
    overview: "AI-powered newsletter creation and distribution system. Handles everything from content discovery to audience-specific formatting and scheduling.",
    downloadUrl: aetherJsonUrl,
    downloadLabel: "Download Newsletter_Automation.json",
    images: [{ src: aetherImg, alt: "Aether" }],
  },
  {
    id: "curio",
    sidebarTitle: "Curio (RAG Pipeline)",
    title: "Curio (RAG Pipeline)",
    subtitle: "Proprietary knowledge retrieval at scale",
    overview: "Retrieval-Augmented Generation pipeline for enhanced AI responses. Enables models to access and reason over your organization's entire private dataset securely.",
    downloadUrl: curioJsonUrl,
    downloadLabel: "Download RAG_Pipeline.json",
    images: [{ src: curioImg, alt: "Curio" }],
  },
];
