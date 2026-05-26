import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logoWhite from "../assets/logo/a2blogowhite.png";
import logoBlack from "../assets/logo/a2blogoblack.png";

const serviceCategories = {
  "By Industry": [
    { id: "e-commerce", label: "E-Commerce" },
    { id: "real-estate", label: "Real Estate" },
    { id: "professional-services", label: "Professional Services" },
    { id: "healthcare", label: "Healthcare & Clinics" },
    { id: "manufacturing", label: "Manufacturing & Logistics" },
    { id: "education", label: "Education & EdTech" },
    { id: "finance", label: "Finance & Accounting" },
    { id: "hr", label: "HR & Recruitment" },
    { id: "hospitality", label: "Hospitality & Travel" },
    { id: "media", label: "Media & Content" },
    { id: "saas", label: "SaaS & Startups" },
    { id: "support", label: "Customer Support" },
  ],
  "By Platform": [
    { id: "whatsapp", label: "WhatsApp" },
    { id: "gmail", label: "Gmail & Email" },
    { id: "social", label: "Instagram & Facebook" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "youtube", label: "YouTube & Video" },
    { id: "workspace", label: "Google Workspace" },
    { id: "ai-productivity", label: "AI Productivity" },
    { id: "funnels", label: "Sales & Marketing Funnels" },
    { id: "payments", label: "Payments & Billing" },
    { id: "analytics", label: "Analytics & Reporting" },
  ],
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDark, setIsDark] = useState<boolean>(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));

    // Observe class changes on the root element so the logo updates when theme toggles
    const observer = new MutationObserver(() => update());
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    // set initial
    update();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when location changes, except for pricing
  useEffect(() => {
    if (!location.hash && window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  // Close dropdown when navigating
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    // { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/#pricing") {
      return location.pathname === "/" && location.hash === "#pricing";
    }
    if (path === "/services") {
      return location.pathname.startsWith("/services");
    }
    return location.pathname === path;
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handlePricingClick = () => {
    navigate('/pricing');
    setIsMobileMenuOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/services?category=${categoryId}`);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const renderNavLink = (link: { name: string; path: string }) => {
    if (link.name === "Pricing") {
      return (
        <button
          key={link.path}
          onClick={handlePricingClick}
          className={`text-sm font-medium transition-colors hover:text-accent ${isActive(link.path) ? "text-accent" : "text-foreground"
            }`}
        >
          {link.name}
        </button>
      );
    }

    // Services gets a dropdown on desktop
    if (link.name === "Services") {
      return (
        <div
          key={link.path}
          className="relative"
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
          ref={dropdownRef}
        >
          <Link
            to={link.path}
            onClick={handleNavClick}
            className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${isActive(link.path) ? "text-accent" : "text-foreground"
              }`}
          >
            {link.name}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
          </Link>

          {/* Mega Menu Dropdown */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${isServicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
          >
            <div className="bg-background border border-border/60 rounded-xl shadow-2xl p-6 min-w-[520px]">
              <div className="grid grid-cols-2 gap-8">
                {Object.entries(serviceCategories).map(([group, items]) => (
                  <div key={group}>
                    <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-3 px-2">
                      {group}
                    </h4>
                    <div className="space-y-0.5">
                      {items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleCategoryClick(item.id)}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-sm text-foreground/80 hover:text-accent hover:bg-accent/5 transition-all duration-150 flex items-center group"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="h-3 w-3 ml-auto opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-150" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border/40">
                <Link
                  to="/services"
                  onClick={() => setIsServicesOpen(false)}
                  className="text-xs font-medium text-accent hover:underline"
                >
                  View all services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={link.path}
        to={link.path}
        onClick={handleNavClick}
        className={`text-sm font-medium transition-colors hover:text-accent ${isActive(link.path) ? "text-accent" : "text-foreground"
          }`}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={isDark ? logoWhite : logoBlack}
              alt="A2B AI Technologies logo"
              className="h-8 w-auto rounded-sm"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              A2B
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(renderNavLink)}
            <ThemeToggle />
            <Button variant="acrylic" size="default" asChild>
              <Link to="/contact">Let's Automate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-x-0 top-[80px] bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out max-h-[calc(100vh-80px)] overflow-y-auto ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <div key={link.path} className="border-b border-muted">
                  {link.name === "Services" ? (
                    <div>
                      <div className="flex items-center justify-between py-3">
                        <Link
                          to="/services"
                          onClick={handleNavClick}
                          className={`text-sm font-medium transition-colors hover:text-accent ${isActive(link.path) ? "text-accent" : "text-foreground"}`}
                        >
                          Services
                        </Link>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="p-1 rounded-md hover:bg-muted/50 transition-colors"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      {/* Mobile accordion */}
                      <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[600px] pb-3" : "max-h-0"}`}>
                        {Object.entries(serviceCategories).map(([group, items]) => (
                          <div key={group} className="mb-3">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 mb-1">{group}</p>
                            {items.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => handleCategoryClick(item.id)}
                                className="w-full text-left px-4 py-1.5 text-sm text-foreground/70 hover:text-accent transition-colors"
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="py-3">
                      {renderNavLink(link)}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between py-4 mt-2">
                <ThemeToggle />
                <Button variant="acrylic" size="default" asChild>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Let's Automate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;