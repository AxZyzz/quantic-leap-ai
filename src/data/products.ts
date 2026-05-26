export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  logo: string;
  url: string;
  shortDescription: string;
  fullDescription: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  howItWorks: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing?: {
    model: string;
    plans: {
      name: string;
      price: string;
      badge?: string;
      features: string[];
    }[];
  };
  screenshots?: string[];
  techStack: string[];
  targetAudience: string[];
  ctaText: string;
  ctaUrl: string;
}

export const products: Product[] = [
  {
    slug: "roastmysnap",
    name: "RoastMySnap",
    tagline: "Turn Your Face Into Art or Chaos",
    category: "AI-Powered Creative Image Generation Platform",
    logo: "/assets/product/roastmysnap/logopng.png",
    url: "https://roastmysnap.com",
    shortDescription:
      "Transform your selfie into 100+ viral AI memes, aesthetic photography & artistic caricatures. One-time credit purchase starting at ₹19. No subscriptions.",
    fullDescription:
      "RoastMySnap is an AI-powered meme and aesthetic photo generation platform built by A2B AI Technologies. Users upload a single selfie and our advanced neural networks transform it into 100+ creative styles — spanning high-fidelity professional photography, artistic caricatures, viral meme formats, cursed face effects, and WhatsApp/Telegram sticker packs. The platform features a dynamic trend system that tracks the latest viral AI trends from Instagram and Facebook, ensuring users always have access to the most relevant and shareable styles.",
    features: [
      {
        icon: "Palette",
        title: "100+ AI Styles",
        description:
          "Memes, aesthetic photography, caricatures, neural paintings, and more — all from a single selfie.",
      },
      {
        icon: "Sticker",
        title: "Sticker Pack Export",
        description:
          "Transparent background export optimized for WhatsApp & Telegram sticker creation.",
      },
      {
        icon: "TrendingUp",
        title: "Dynamic Trend System",
        description:
          "Real-time tracking of viral AI trends from Instagram & Facebook. New styles added regularly.",
      },
      {
        icon: "Globe",
        title: "Explore Gallery",
        description:
          "Public community gallery for sharing AI creations. Shared posts stay permanently.",
      },
      {
        icon: "CreditCard",
        title: "One-Time Payment",
        description:
          "Credits never expire. No subscriptions. Starting at just ₹19.",
      },
      {
        icon: "MapPin",
        title: "Made for India",
        description:
          "Priced for India with Razorpay payments. Accessible AI for everyone.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Upload",
        description:
          "Drop your image. High res, low res, kitchen lighting — doesn't matter.",
      },
      {
        step: 2,
        title: "AI Magic",
        description:
          "Our AI transforms your features into stunning digital assets using state-of-the-art neural networks.",
      },
      {
        step: 3,
        title: "Share",
        description:
          "Download as high-res photos or sticker packs. Go viral on every platform.",
      },
    ],
    pricing: {
      model: "One-Time Payment • Credits Never Expire • No Subscriptions",
      plans: [
        {
          name: "Starter Roast",
          price: "₹19",
          features: [
            "1 AI generation credit",
            "All standard Tier 1 trends",
            "24-hour gallery storage",
          ],
        },
        {
          name: "Roast Pack",
          price: "₹49",
          badge: "Most Popular",
          features: [
            "3 AI generation credits",
            "Tier 1 + Premium Tier 2 trends",
            "10-day gallery storage",
            "2 public Explore slots",
          ],
        },
        {
          name: "Grand Roast",
          price: "₹99",
          badge: "Best Value",
          features: [
            "8 AI generation credits",
            "Full access — All tiers",
            "30-day gallery storage",
            "4 public Explore slots",
            "Transparent sticker export",
          ],
        },
      ],
    },
    techStack: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Framer Motion",
      "Supabase",
      "Razorpay",
      "Cloudflare Pages",
      "GPT-Image-2",
    ],
    targetAudience: [
      "Gen Z & Millennials active on Instagram & WhatsApp",
      "Social media creators seeking viral content",
      "Group chat participants wanting personalized memes",
      "Creative users exploring AI art generation",
    ],
    screenshots: [
      "/assets/product/roastmysnap/roastex1.webp",
      "/assets/product/roastmysnap/roastex2.webp",
      "/assets/product/roastmysnap/roastex3.webp",
    ],
    ctaText: "Try RoastMySnap Free",
    ctaUrl: "https://roastmysnap.com",
  },
  {
    slug: "ztrike",
    name: "ZTRIKE",
    tagline: "SEO reports that write themselves.",
    category: "AI-Powered SEO Reporting Platform",
    logo: "/assets/product/ztrike/ztrikelogo.webp",
    url: "https://ztrike.live",
    shortDescription:
      "ZTRIKE connects to your client's GA4 and Search Console — then auto-generates white-label, AI-written PDF reports in under 3 minutes. No credit card required.",
    fullDescription:
      "Stop wasting hours copy-pasting data into report templates. ZTRIKE automatically pulls live performance data from Google Analytics 4 and Google Search Console, uses AI to write clear insights, and delivers a fully branded PDF — ready to send to your client in under 3 minutes. Built for agencies and freelancers who need polished deliverables without the manual grind.",
    features: [
      {
        icon: "Zap",
        title: "Automated Data Pull",
        description:
          "No spreadsheet exports. ZTRIKE connects directly to GA4 and Search Console and fetches the latest data every time you run a report.",
      },
      {
        icon: "Bot",
        title: "AI-Written Narrative",
        description:
          "Not just charts and numbers — ZTRIKE writes human-readable summaries and strategic insights for each section, like a real strategist.",
      },
      {
        icon: "FileText",
        title: "White-Label PDF Output",
        description:
          "Every report carries your agency's branding — logo, colors, client name. Professional documents, not generic tool exports.",
      },
      {
        icon: "Clock",
        title: "Under 3 Minutes",
        description:
          "From zero to finished PDF in under 3 minutes. Reclaim the hours your team spends every month building reports manually.",
      },
      {
        icon: "Users",
        title: "Multi-Client Ready",
        description:
          "Manage all your clients from one dashboard. Each client has its own connected accounts, branding settings, and report history.",
      },
      {
        icon: "Gift",
        title: "Free to Start",
        description:
          "No credit card. No commitment. Get started on the free plan and upgrade only when your agency is ready to scale.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Connect Once",
        description:
          "Link your client's Google Analytics 4 and Search Console accounts. One-time setup per client. ZTRIKE handles everything from there.",
      },
      {
        step: 2,
        title: "AI Writes the Report",
        description:
          "ZTRIKE pulls live data and writes plain-English summaries and insights for every section — no manual analysis, no copy-paste.",
      },
      {
        step: 3,
        title: "Deliver in Minutes",
        description:
          "Download a polished, branded PDF with your agency's logo and your client's name. Done in under 3 minutes, ready to send.",
      },
    ],
    pricing: {
      model: "Free Plan Available • No Credit Card Required",
      plans: [
        {
          name: "Free",
          price: "$0",
          features: [
            "1 client connection",
            "AI-written PDF reports",
            "White-label branding",
            "GA4 + Search Console",
          ],
        },
      ],
    },
    techStack: [
      "Next.js",
      "TypeScript",
      "Google Analytics API",
      "Search Console API",
      "OpenAI",
      "PDF Generation",
    ],
    targetAudience: [
      "Digital marketing agencies delivering monthly SEO reports to multiple clients",
      "Freelance SEO consultants who want polished, branded deliverables without the manual work",
      "Growth teams & startups needing quick performance visibility without building a reporting workflow",
    ],
    screenshots: [
      "/assets/product/ztrike/ex1.webp",
      "/assets/product/ztrike/ex2.webp",
      "/assets/product/ztrike/ex3.webp",
    ],
    ctaText: "Start Free at ZTRIKE",
    ctaUrl: "https://ztrike.live",
  },
  {
    slug: "gitart",
    name: "GitArt",
    tagline: "Paint your GitHub contribution graph.",
    category: "Developer Tool — GitHub Profile Customization",
    logo: "/assets/product/gitart/gitartlogo.webp",
    url: "https://gitart.netlify.app",
    shortDescription:
      "Turn your GitHub contribution graph into pixel art. Draw names, messages, symbols, or any pattern — then generate the exact Git commands to make it real.",
    fullDescription:
      "Your GitHub contribution graph is a 52×7 grid of green squares. GitArt gives you a visual editor to click and design any pattern on that grid — then handles all the technical work of generating the Git commits needed to produce that exact design on your real GitHub profile. Auto-generate via GitHub Actions or get a ready-to-run shell script. No account required, completely free.",
    features: [
      {
        icon: "Grid3x3",
        title: "Visual Grid Editor",
        description:
          "Click-to-draw interface on a real GitHub-style contribution grid. No coding required to design your pattern.",
      },
      {
        icon: "Calendar",
        title: "Year Selector",
        description:
          "Choose which year's contribution graph to paint. Pick a year before you joined GitHub for the cleanest result.",
      },
      {
        icon: "GitBranch",
        title: "Two Generation Modes",
        description:
          "Auto-generate with GitHub Actions (one-click, no local setup) or generate raw Git commands for full manual control.",
      },
      {
        icon: "Brush",
        title: "Custom Patterns",
        description:
          "Names, words, symbols, logos, pixel art. If it fits in the GitHub contribution grid, GitArt can generate it.",
      },
      {
        icon: "Terminal",
        title: "Instant Script Output",
        description:
          "Once your design is ready, GitArt produces complete, copy-paste-ready terminal commands — no manual scripting needed.",
      },
      {
        icon: "Gift",
        title: "Free to Use",
        description:
          "No account required. Open the tool, design your pattern, generate, done. Completely free.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Design Your Pattern",
        description:
          "Open the visual grid editor. Click squares to draw your name, a message, a logo, or any shape. Select the year you want it to appear on.",
      },
      {
        step: 2,
        title: "Generate the Commits",
        description:
          "Choose auto-generate via GitHub Actions, or get a ready-to-run shell script of backdated Git commit commands for your terminal.",
      },
      {
        step: 3,
        title: "Push and It's Live",
        description:
          "Follow the short setup steps, run the script, push to GitHub — and your contribution graph shows your design.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "GitHub Actions API",
      "Git",
      "Netlify",
    ],
    targetAudience: [
      "Developers who want their GitHub profile to stand out",
      "Students and job seekers building a memorable GitHub presence",
      "Designers and creatives who want to express something on their dev profile",
      "Anyone who thinks the contribution graph should be more than just commit history",
    ],
    screenshots: [
      "/assets/product/gitart/gitartex1.webp",
      "/assets/product/gitart/gitartex2.webp",
      "/assets/product/gitart/gitartex3.webp",
    ],
    ctaText: "Start Painting",
    ctaUrl: "https://gitart.netlify.app",
  },
];
