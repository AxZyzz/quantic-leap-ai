import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";
import type { CaseStudy } from "./types";
import sacredTextImg1 from "../../assets/casestudy/SacredTextPublishing/image1.webp";
import sacredTextImg2 from "../../assets/casestudy/SacredTextPublishing/img2.webp";

const sacredTextPublishing: CaseStudy = {
  id: "sacred-text-publishing",
  sidebarTitle: "Sacred Text Publishing",
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
    { src: sacredTextImg1, alt: "Architecture Diagram", caption: "System Architecture Overview" },
    { src: sacredTextImg2, alt: "Workflow Diagram", caption: "n8n Workflow Implementation" }
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

The modular architecture means the client now owns a complete video production system that works for any religious text, any language (including complex scripts like Gurmukhi, Arabic, Sanskrit, or Hebrew), and any visual style. By providing the custom workflow template, A2B AI Technologies empowered the client with a sustainable, expandable content generation capability that grows with their mission.`,
  testimonial: "The organization's feedback was unequivocal: they were 'amazed' by the system's capability and the astronomical time savings. What once seemed like an insurmountable challenge—bringing sacred 1,500-page texts to social media—is now as simple as uploading a PDF and pressing a button. The automation enables them to focus on their core mission: sharing spiritual wisdom with future generations, while the AI handles the creative production at scale.",
  conclusion: "This system represents the future of religious and educational content creation: intelligent, automated, culturally sensitive, and infinitely scalable.",
  author: "Organization Director",
};

export default sacredTextPublishing;
