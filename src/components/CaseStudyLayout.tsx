import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  FileText,
  Info,
  Laptop,
  Library,
  Workflow,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";

interface NavItem {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  slug?: string;
  children?: NavItem[];
  filter?: string;
}

const navigation: NavItem[] = [
  { title: "Introduction", icon: Info, slug: "introduction" },
  {
    title: "Case Studies",
    icon: FileText,
    children: [
      {
        title: "Our Works",
        children: [
          { title: "Sacred Text Publishing", slug: "sacred-text-publishing" },
          { title: "Medical Consultation", slug: "medical-consultation" },
          { title: "Image Generation", slug: "imagegeneration" },
          { title: "Visual Brand Intelligence", slug: "visual-brand-intelligence" },
          { title: "Reddit→YouTube", slug: "reddit-to-youtube" },
          { title: "Multimodal AI Intake", slug: "multimodal-ai" },
        ],
      },
    ],
  },
  {
    title: "Automation Templates",
    icon: Workflow,
    children: [
      { title: "JARVIS (Ultimate Assistant)", slug: "jarvis" },
      { title: "Lexicon (PDF Report)", slug: "lexicon" },
      { title: "Aether (Newsletter Creation)", slug: "aether" },
      { title: "Curio (RAG Pipeline)", slug: "curio" },
    ],
  },
  { title: "Technology Stack", icon: Laptop, slug: "tech-stack" },
  { title: "Resources", icon: Library, slug: "resources" },
];

function collectSlugs(items: NavItem[]): string[] {
  const slugs: string[] = [];
  for (const item of items) {
    if (item.slug) slugs.push(item.slug);
    if (item.children) slugs.push(...collectSlugs(item.children));
  }
  return slugs;
}

const ALL_SLUGS = collectSlugs(navigation);

interface NavItemProps {
  item: NavItem;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const NavItemComponent = ({ item, currentSection, setCurrentSection }: NavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = currentSection === item.slug;
  const hasChildren = item.children && item.children.length > 0;

  // Auto-expand parent when one of its children is active
  useEffect(() => {
    if (hasChildren) {
      const childSlugs = collectSlugs(item.children || []);
      if (childSlugs.includes(currentSection)) {
        setIsExpanded(true);
      }
    }
  }, [currentSection]);

  return (
    <div>
      <button
        className={cn(
          "w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-accent/15 text-accent shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          hasChildren && "font-semibold"
        )}
        onClick={() => {
          if (hasChildren) {
            setIsExpanded(!isExpanded);
          } else if (item.slug) {
            setCurrentSection(item.slug);
          }
        }}
      >
        <span className="flex items-center gap-2.5">
          {item.icon && (
            <item.icon className={cn(
              "h-4 w-4 flex-shrink-0",
              isActive ? "text-accent" : "text-muted-foreground"
            )} />
          )}
          <span className="text-left">{item.title}</span>
        </span>
        {hasChildren && (
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200",
              isExpanded && "rotate-180"
            )}
          />
        )}
        {isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r bg-accent" />
        )}
      </button>
      {hasChildren && isExpanded && (
        <div className="ml-3 mt-1 space-y-0.5 border-l border-border/40 pl-3">
          {item.children!.map((child) => (
            <div key={child.title || child.slug}>
              {child.children ? (
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 py-1.5 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {child.title}
                  </div>
                  <div className="space-y-0.5">
                    {child.children.map((subChild) => (
                      <button
                        key={subChild.slug}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200",
                          currentSection === subChild.slug
                            ? "bg-accent/10 text-accent font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        )}
                        onClick={() =>
                          subChild.slug && setCurrentSection(subChild.slug)
                        }
                      >
                        {subChild.title}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200",
                    currentSection === child.slug
                      ? "bg-accent/10 text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  )}
                  onClick={() =>
                    child.slug && setCurrentSection(child.slug)
                  }
                >
                  {child.title}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export interface CaseStudyLayoutProps {
  children: (currentSection: string) => React.ReactNode;
}

const CaseStudyLayout = ({ children }: CaseStudyLayoutProps) => {
  const { section } = useParams<{ section?: string }>();
  const navigate = useNavigate();

  const currentSection =
    section && ALL_SLUGS.includes(section) ? section : "introduction";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSetSection = (slug: string) => {
    if (slug === "introduction") {
      navigate("/case-studies", { replace: false });
    } else {
      navigate(`/case-studies/${slug}`, { replace: false });
    }
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    if (mq.matches) {
      setIsSidebarOpen(true);
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsSidebarOpen(true);
      }
    };
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  return (
    <div className="flex min-h-screen pt-16">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={cn(
          "md:hidden fixed bottom-4 right-4 z-50 p-3.5 rounded-full shadow-lg transition-all duration-300",
          isSidebarOpen
            ? "bg-destructive text-destructive-foreground rotate-0"
            : "bg-accent text-accent-foreground"
        )}
      >
        {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar Backdrop */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 mt-16 w-72 bg-background/95 backdrop-blur-md px-4 py-6 z-50",
          "border-r border-border/50",
          "transform transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          "overflow-y-auto",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="mb-6 px-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
            Documentation
          </h3>
          <div className="mt-2 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavItemComponent
              key={item.title}
              item={item}
              currentSection={currentSection}
              setCurrentSection={handleSetSection}
            />
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-8 px-2">
          <div className="h-px bg-gradient-to-r from-accent/20 to-transparent mb-4" />
          <p className="text-xs text-muted-foreground/50 leading-relaxed">
            A2B Automation Agency — Docs & Case Studies
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-72">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 max-w-5xl">
          {children(currentSection)}
        </div>
      </main>
    </div>
  );
};

export default CaseStudyLayout;