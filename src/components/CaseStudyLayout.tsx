import { useEffect, useState } from "react";
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
  href?: string;
  children?: NavItem[];
  filter?: string;
}

const navigation: NavItem[] = [
  { title: "Introduction", icon: Info, href: "#introduction" },
  {
    title: "Case Studies",
    icon: FileText,
    children: [
      {
        title: "Our Works",
        children: [
          { title: "Sacred Text Publishing", href: "#sacred-text-publishing" },
          { title: "Medical Consultation", href: "#lifosys" },
          { title: "Image Generation", href: "#imagegeneration" },
          { title: "Reddit→YouTube", href: "#reddit-to-youtube" },
        ],
      },
    ],
  },
  {
    title: "Automation Templates",
    icon: Workflow,
    children: [
      { title: "JARVIS (Ultimate Assistant)", href: "#jarvis" },
      { title: "Lexicon (PDF Report)", href: "#lexicon" },
      { title: "Aether (Newsletter Creation)", href: "#aether" },
      { title: "Curio (RAG Pipeline)", href: "#curio" },
    ],
  },
  { title: "Technology Stack", icon: Laptop, href: "#tech-stack" },
  { title: "Resources", icon: Library, href: "#resources" },
];

interface NavItemProps {
  item: NavItem;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const NavItem = ({ item, currentSection, setCurrentSection }: NavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = currentSection === item.href?.replace("#", "");
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
          } else if (item.href) {
            setCurrentSection(item.href.replace("#", ""));
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
            <div key={child.title || child.href}>
              {child.children ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 py-1 px-2 text-sm font-medium">
                    {child.title}
                  </div>
                  <div className="ml-2 space-y-1">
                    {child.children.map((subChild) => (
                      <Button
                        key={subChild.href}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start px-2 text-sm",
                          currentSection === subChild.href?.replace("#", "") &&
                            "bg-accent/10 text-accent"
                        )}
                        onClick={() =>
                          subChild.href && setCurrentSection(subChild.href.replace("#", ""))
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
                    currentSection === child.href?.replace("#", "") &&
                      "bg-accent/10 text-accent"
                  )}
                  onClick={() =>
                    child.href && setCurrentSection(child.href.replace("#", ""))
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
  const [currentSection, setCurrentSection] = useState("introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Open the sidebar by default on mobile view when the page mounts
  useEffect(() => {
    // Use a MediaQuery to detect mobile width (< md breakpoint)
    const mq = window.matchMedia("(max-width: 767px)");
    if (mq.matches) {
      setIsSidebarOpen(true);
    }

    // Optional: auto-toggle if the user resizes the window
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsSidebarOpen(true);
      }
    };
    mq.addEventListener?.("change", handler);

    return () => mq.removeEventListener?.("change", handler);
  }, []);

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
              setCurrentSection={(section) => {
                setCurrentSection(section);
                setIsSidebarOpen(false); // Close sidebar on mobile when section changes
              }}
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