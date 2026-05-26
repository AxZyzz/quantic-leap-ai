import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";
import type { CaseStudy } from "./types";
import seoFlowImg from "../../assets/casestudy/seoreport/flow_seo.webp";
import seoN8nImg from "../../assets/casestudy/seoreport/n8n_seo.webp";

const seoReportAutomation: CaseStudy = {
  id: "seo-report-automation",
  sidebarTitle: "SEO Report Automation",
  industry: "Digital Marketing & SEO",
  client: "Automated SEO Reporting System for Freelance Consultant",
  size: "Freelance SEO Consultant",
  challenge: `Melvin C V, a freelance digital marketing and n8n automation consultant based in Kochi, Kerala, faced a critical time-management challenge. For each of his clients, producing a single monthly SEO report consumed 2 to 3 full working days of manual effort.

The process involved logging into Google Search Console and Google Analytics, exporting data, cross-referencing metrics across platforms with different date formats and export structures, building charts, calculating month-over-month comparisons, writing interpretive insights, formatting everything into a professional PDF, and finally reviewing and sending it to the client.

For a consultant managing multiple clients, this meant reporting season consumed an unsustainable proportion of productive work hours — time that could have been invested in strategy, business development, or serving additional clients. The manual process also carried risks of human error in data entry, inconsistent report quality across months, and a hard scalability ceiling where more clients meant more days lost.`,
  solution: `A2B designed and built a comprehensive, end-to-end automated SEO reporting system using n8n as the core workflow orchestration platform. The solution integrates Google Search Console, Google Analytics 4, an AI language model (OpenAI GPT), a PDF rendering service (PDFLayer), and Gmail delivery — all triggered automatically on a weekly schedule.

The architecture was designed around three guiding principles: zero manual intervention after initial setup, consistent professional-grade output every time, and AI-powered intelligence that adds genuine analytical value beyond raw data. The result: a reporting process that previously consumed 2 to 3 working days was reduced to under 30 seconds.`,
  details: {
    phase1: {
      title: "Phase 1: Trigger & Parallel Data Collection",
      trigger: "n8n Scheduler fires every Monday at 8:00 AM automatically.",
      capabilities: [
        { title: "Dynamic Configuration", description: "A Configuration node sets all required variables: site URL, current month's date range, and previous month's date range. Dynamic date calculation ensures the report always covers the correct comparison window without any manual intervention." },
        { title: "10 Parallel API Streams", description: "The configuration fans out to ten parallel API calls simultaneously: GSC Overview (current & previous month), GSC Date Breakdown, GSC Queries (current & previous), GSC Pages (current & previous), GSC Devices, GSC Countries, and Google Analytics 4 (sessions, engagement rate, channel breakdown)." },
        { title: "Data Normalisation & Merge", description: "Each of the ten data streams passes through dedicated Split and Format nodes that extract, clean, and standardise the raw API response. All ten formatted streams are then merged into a single unified data payload via a 10-input Merge node." }
      ]
    },
    phase2: {
      title: "Phase 2: AI Analysis & Report Generation",
      trigger: "Merged data payload passed to AI engine and HTML renderer.",
      capabilities: [
        { title: "AI-Powered SEO Insights", description: "The merged data is passed to OpenAI GPT with a carefully engineered system prompt instructing it to act as a data-driven SEO insights analyst. The model produces 5 to 8 specific, actionable insight bullet points referencing actual metrics, identifying trends, highlighting anomalies, and recommending concrete next steps." },
        { title: "Professional HTML Report Assembly", description: "A custom JavaScript code node assembles the complete HTML report: KPI cards with month-over-month comparisons, AI insights section, Google Analytics channel tables, interactive performance trend charts (via QuickChart.io), top pages and keywords tables, device breakdowns, and geographic data." },
        { title: "PDF Conversion & Delivery", description: "The HTML is converted to a polished PDF via PDFLayer's API, then automatically sent via Gmail. Melvin receives a ready-to-share, client-quality SEO performance report in his inbox every Monday morning — without touching a single keyboard shortcut." }
      ]
    },
    phase3: {
      title: "Phase 3: Report Output & Content Structure",
      trigger: "Final PDF generated with all sections compiled.",
      capabilities: [
        { title: "KPI Summary Cards", description: "Four headline metrics — Clicks, Impressions, CTR, and Average Position — each displayed with month-over-month percentage change and directional arrows. Color-coded green/red indicators make performance status instantly legible." },
        { title: "Performance Trend Charts", description: "Two line charts — one for daily Impressions and one for daily Clicks — covering the full reporting period, rendered via QuickChart.io and embedded directly in the PDF." },
        { title: "Top Pages, Keywords & Geography", description: "Top 10 highest-traffic pages and search queries ranked by organic clicks with full performance metrics. Traffic breakdown by device type (mobile, desktop, tablet) and top 10 countries by organic click volume." }
      ]
    }
  },
  images: [
    { src: seoFlowImg, alt: "SEO Report Workflow Diagram", caption: "System Architecture & Data Flow" },
    { src: seoN8nImg, alt: "n8n Workflow Implementation", caption: "n8n Workflow Implementation" }
  ],
  technology: [
    "n8n Workflow Automation",
    "Google Search Console API",
    "Google Analytics 4 API",
    "OpenAI GPT",
    "QuickChart.io",
    "PDFLayer API",
    "Gmail (OAuth2)",
  ],
  results: [
    { icon: Clock, metric: "99% Time Saved", label: "2–3 days reduced to 30 seconds" },
    { icon: TrendingUp, metric: "Weekly Reports", label: "Upgraded from monthly to weekly" },
    { icon: DollarSign, metric: "100% Automated", label: "Zero manual steps required" },
    { icon: Users, metric: "10+ Data Streams", label: "GSC + GA4 merged automatically" },
  ],
  roi: `The results were immediate, measurable, and transformative. The workflow runs in production delivering professional SEO reports on schedule without a single manual step required.

**Quantified Results:**

- **Time per Report:** 2–3 working days → Under 30 seconds
- **Manual Steps Required:** 7+ distinct steps → Zero
- **Human Error Risk:** High (manual data entry) → Eliminated
- **Report Consistency:** Variable quality → 100% consistent
- **Reporting Frequency:** Monthly (resource-limited) → Weekly (automated)
- **AI Analysis:** None → 5–8 actionable insights per report
- **Scalability:** Linear time increase per client → Negligible marginal cost

**ROI Analysis:** Manual reporting consumed approximately 10 working days per month (2.5 days × 4 weekly reports) — that's 50% of a full working month. After automation, the same output requires 2 minutes of total machine time per month. 10 working days of productive capacity are reclaimed every single month, enabling new client acquisition, service expansion, and business growth.`,
  testimonial: `"Hi, I'm Melvin, a freelance digital marketing and n8n consultant based in Kochi, Kerala. I needed an AI automation workflow that could pull data from Google Search Console and Google Analytics to generate weekly SEO reports for my clients. I came across Rahul, CEO of A2B AI Technologies in Trivandrum, through Reddit. I quickly connected with him and explained my requirements. Rahul understood the project immediately, started work right away, and kept me updated with daily progress. I'm really impressed with his dedication, responsiveness, and attention to detail. Earlier, it used to take me 2 to 3 days to prepare a monthly SEO report. Now, it takes just minutes. That's a huge time saver. If you're looking to automate your workflows, I highly recommend Rahul. You won't be disappointed."`,
  conclusion: "This case study demonstrates what intelligent automation can achieve when applied to a well-defined, high-friction business problem. The automation didn't just save time — it changed the ceiling of what is achievable for a freelance consultant.",
  author: "Melvin C V, Freelance SEO & n8n Automation Consultant, Kochi, Kerala",
};

export default seoReportAutomation;
