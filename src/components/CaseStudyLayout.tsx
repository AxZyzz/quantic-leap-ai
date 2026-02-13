import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  FileText,
  Info,
  Laptop,
  Library,
  Lightbulb,
  Workflow,
  Menu,
} from "lucide-react";
import { Button } from "./ui/button";

interface NavItem {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  /** slug used as the URL segment, e.g. "jarvis" → /case-studies/jarvis */
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

/** Collect every leaf slug so we can validate URL params */
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

const NavItem = ({ item, currentSection, setCurrentSection }: NavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = currentSection === item.slug;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 px-2",
          isActive && "bg-accent/10 text-accent",
          hasChildren && "justify-between"
        )}
        onClick={() => {
          if (hasChildren) {
            setIsExpanded(!isExpanded);
          } else if (item.slug) {
            setCurrentSection(item.slug);
          }
        }}
      >
        <span className="flex items-center gap-2">
          {item.icon && <item.icon className="h-4 w-4" />}
          {item.title}
        </span>
        {hasChildren && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isExpanded && "rotate-180"
            )}
          />
        )}
      </Button>
      {hasChildren && isExpanded && (
        <div className="ml-4 mt-1 space-y-1 border-l pl-2">
          {item.children.map((child) => (
            <div key={child.title || child.slug}>
              {child.children ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 py-1 px-2 text-sm font-medium">
                    {child.title}
                  </div>
                  <div className="ml-2 space-y-1">
                    {child.children.map((subChild) => (
                      <Button
                        key={subChild.slug}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start px-2 text-sm",
                          currentSection === subChild.slug &&
                          "bg-accent/10 text-accent"
                        )}
                        onClick={() =>
                          subChild.slug && setCurrentSection(subChild.slug)
                        }
                      >
                        {subChild.title}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start px-2 text-sm",
                    currentSection === child.slug &&
                    "bg-accent/10 text-accent"
                  )}
                  onClick={() =>
                    child.slug && setCurrentSection(child.slug)
                  }
                >
                  {child.title}
                </Button>
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

  // Determine the current section from the URL param, defaulting to "introduction"
  const currentSection =
    section && ALL_SLUGS.includes(section) ? section : "introduction";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // When a sidebar item is clicked, navigate to the new URL
  const handleSetSection = (slug: string) => {
    if (slug === "introduction") {
      navigate("/case-studies", { replace: false });
    } else {
      navigate(`/case-studies/${slug}`, { replace: false });
    }
    setIsSidebarOpen(false); // Close sidebar on mobile
  };

  // Open the sidebar by default on mobile view when the page mounts
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

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  return (
    <div className="flex min-h-screen pt-16">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-accent text-accent-foreground p-3 rounded-full shadow-lg"
      >
        <Menu className="h-6 w-6" />
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
          "fixed inset-y-0 left-0 mt-16 w-64 border-r bg-background px-4 py-6 z-50",
          "transform transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="space-y-2">
          {navigation.map((item) => (
            <NavItem
              key={item.title}
              item={item}
              currentSection={currentSection}
              setCurrentSection={handleSetSection}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-64">
        <div className="container mx-auto px-4 md:px-8 py-6 md:py-8">{children(currentSection)}</div>
      </main>
    </div>
  );
};

export default CaseStudyLayout;