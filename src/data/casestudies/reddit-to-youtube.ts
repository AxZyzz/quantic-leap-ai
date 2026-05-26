import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";
import type { CaseStudy } from "./types";
import redYtImg from "../../assets/casestudy/reddit_youtube/red_yt.jpg";
import redYtN8nImg from "../../assets/casestudy/reddit_youtube/red_yt_N8N.jpg";

const redditToYoutube: CaseStudy = {
  id: "reddit-to-youtube",
  sidebarTitle: "Reddit→YouTube",
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
};

export default redditToYoutube;
