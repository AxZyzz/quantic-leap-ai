import type { LucideIcon } from "lucide-react";

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption: string;
  interactive?: boolean;
}

export interface CaseStudyCapability {
  title: string;
  description: string;
}

export interface CaseStudyPhase {
  title: string;
  trigger: string;
  capabilities: CaseStudyCapability[];
}

export interface CaseStudyResult {
  icon: LucideIcon;
  metric: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  sidebarTitle: string;
  industry: string;
  client: string;
  size: string;
  challenge: string;
  solution: string;
  details: Record<string, CaseStudyPhase>;
  images: CaseStudyImage[];
  technology: string[];
  results: CaseStudyResult[];
  roi: string;
  testimonial: string;
  conclusion: string;
  author: string;
}

export interface AutomationTemplate {
  id: string;
  sidebarTitle: string;
  title: string;
  subtitle: string;
  overview: string;
  downloadUrl: string;
  downloadLabel: string;
  images: { src: string; alt: string }[];
}
