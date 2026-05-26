import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";
import type { CaseStudy } from "./types";
import visualBrandImg1 from "../../assets/casestudy/Visual Brand/image 1.jpeg";
import visualBrandImg2 from "../../assets/casestudy/Visual Brand/image 2.jpeg";
import visualBrandImg3 from "../../assets/casestudy/Visual Brand/image 3.jpeg";
import visualBrandImg4 from "../../assets/casestudy/Visual Brand/image 4.jpeg";
import visualBrandImg5 from "../../assets/casestudy/Visual Brand/image 5.jpeg";
import visualBrandImg6 from "../../assets/casestudy/Visual Brand/image 6.jpeg";

const visualBrandIntelligence: CaseStudy = {
  id: "visual-brand-intelligence",
  sidebarTitle: "Visual Brand Intelligence",
  industry: "Visual Brand Intelligence",
  client: "Visual Brand Intelligence: The AI-Powered Image Generation & Compliance Suite",
  size: "Enterprise Visual OS",
  challenge: `For high-end brands (think "Old Money," luxury, and generational wealth), "close enough" isn't an option. Manually crafting prompts that maintain consistent lighting, lens physics, and material textures across hundreds of assets is a full-time job. 

Furthermore, once an image is generated, verifying it against strict brand guidelines—HEX codes, font styles, and logo placement—usually requires a human designer's eyes. Scaling this process manually is a recipe for burnout and brand dilution.`,
  solution: `A2B engineered a massive, modular n8n ecosystem that acts as a Virtual Creative Director. The workflow takes a raw concept and runs it through a gauntlet of specialized AI agents to ensure the final output isn't just a "pretty picture," but a brand-compliant asset.`,
  details: {
    phase1: {
      title: 'Phase 1: The "Mega Prompt" Engine',
      trigger: "A webhook or chat message initiates the request.",
      capabilities: [
        { title: "Style Fetching", description: 'An AI agent queries the Supabase "Style Vault" to find the closest aesthetic match (e.g., "Editorial Flash" or "35mm Retro").' },
        { title: "Physics Injection", description: 'The "Alpha Prompt" node wraps the user\'s idea in technical language—lens compression, lighting falloff, and "imperfection systems" (dust, grain, noise) to force photorealism.' }
      ]
    },
    phase2: {
      title: "Phase 2: High-Fidelity Generation",
      trigger: "Engineered prompt ready for rendering.",
      capabilities: [
        { title: "The Render", description: "The workflow sends the engineered prompt to the Nano Banana Pro model." },
        { title: "Consistency Check", description: 'The system ensures the output adheres to the "Old Money" global theme—American retro wealth, quiet intimacy, and Architectural Digest-level quality.' }
      ]
    },
    phase3: {
      title: "Phase 3: The Automated Quality Checker",
      trigger: "Generated image passed for audit.",
      capabilities: [
        { title: "Visual Audit", description: 'The generated image is passed to a "Brand Compliance Officer" powered by Gemini.' },
        { title: "Rule Comparison", description: "It compares the image's dominant colors and styles against the official Brand Guidelines stored in Supabase." },
        { title: "Pass/Fail", description: 'The system returns a compliance score. If it\'s a "Fail," it generates a specific instruction to fix the asset—no vague notes, no back-and-forth.' }
      ]
    },
    phase4: {
      title: "Phase 4: Advanced Segmentation (SAM & Qwen)",
      trigger: "Brand-compliant image ready for final editing.",
      capabilities: [
        { title: "Object Cutting", description: "Using the SAM (Segment Anything) node, the workflow isolates specific subjects from their backgrounds with precision." },
        { title: "Precision Masking", description: "The Qwen node handles complex spatial reasoning to ensure that when subjects are placed in new environments, lighting and shadows integrate seamlessly." }
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
  author: "A2B AI Technologies"
};

export default visualBrandIntelligence;
