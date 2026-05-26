import sacredTextPublishing from "./sacred-text-publishing";
import medicalConsultation from "./medical-consultation";
import imagegeneration from "./imagegeneration";
import redditToYoutube from "./reddit-to-youtube";
import multimodalAi from "./multimodal-ai";
import visualBrandIntelligence from "./visual-brand-intelligence";
import seoReportAutomation from "./seo-report-automation";

export type { CaseStudy, AutomationTemplate } from "./types";
export { automationTemplates } from "./templates";

export const caseStudies = [
  sacredTextPublishing,
  medicalConsultation,
  imagegeneration,
  redditToYoutube,
  multimodalAi,
  visualBrandIntelligence,
  seoReportAutomation,
];
