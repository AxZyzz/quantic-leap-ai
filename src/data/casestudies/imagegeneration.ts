import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";
import type { CaseStudy } from "./types";
import imageGenErImg from "../../assets/casestudy/imagegeneration/image_er.jpg";
import imageGenN8nImg from "../../assets/casestudy/imagegeneration/image_n8n.jpg";

const imagegeneration: CaseStudy = {
  id: "imagegeneration",
  sidebarTitle: "Image Generation",
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
        { title: "High-precision camera logic breakdown", description: "Lens compression, framing rhythm, angle behavior, bloom, contrast physics" },
        { title: "Lighting identity analysis", description: "Warm sunset hues, side-lit highlights, retro glow falloff" },
        { title: "Texture & material fingerprinting", description: "Wood varnish details, fabric tension, micro-scratches, oil-sheen physics" },
        { title: "Imperfection pattern capture", description: "Analog dust, chromatic fringe, bloom leaks, atmospheric haze" },
        { title: "Brand Visual DNA Library", description: "Each extracted style is stored in Supabase as structured text linked to the image filename, creating a permanent repository of the brand's aesthetic DNA." }
      ]
    },
    phase2: {
      title: "Phase 2: Object Recognition for Context Matching",
      trigger: "When a user submits a prompt, the system automatically scans the entire stored dataset.",
      capabilities: [
        { title: "Semantic Content Analysis", description: "Finds the closest matching reference image and extracts its semantic content" },
        { title: "Best-Aligned Style Selection", description: "Returns the best-aligned style description ensuring every new output matches the correct style segment, not a random generic one." },
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
        { title: "Alpha-Prompt Engineering", description: "The system merges all elements into a single Alpha-Prompt, built by an advanced prompt-engineering agent inside n8n." },
        {
          title: "Multi-Model Generation",
          description: `The Alpha-Prompt is sent simultaneously to multiple models:
- Google Gemini 2.5 Flash Image
- Imagen 4
- Nano Banana Pro
- Ideogram V3
- Grok Imagine`
        },
        { title: "Consistent Brand Identity", description: "Each model returns a variation with the same brand identity preserved" },
        { title: "Automated Asset Delivery", description: "The best output(s) are uploaded to Google Drive, ready for delivery" }
      ]
    }
  },
  images: [
    { src: imageGenErImg, alt: "Architecture Flow Diagram", caption: "System Architecture & Data Flow" },
    { src: imageGenN8nImg, alt: "n8n Workflow Diagram", caption: "n8n Workflow Implementation" }
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
};

export default imagegeneration;
