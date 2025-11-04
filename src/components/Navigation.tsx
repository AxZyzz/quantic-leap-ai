import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/#pricing") {
      return location.pathname === "/" && location.hash === "#pricing";
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

  const renderNavLink = (link: { name: string; path: string }) => {
    if (link.name === "Pricing") {
      return (
        <button
          key={link.path}
          onClick={handlePricingClick}
          className={`text-sm font-medium transition-colors hover:text-accent ${
            isActive(link.path) ? "text-accent" : "text-foreground"
          }`}
        >
          {link.name}
        </button>
      );
    }
    return (
      <Link
        key={link.path}
        to={link.path}
        onClick={handleNavClick}
        className={`text-sm font-medium transition-colors hover:text-accent ${
          isActive(link.path) ? "text-accent" : "text-foreground"
        }`}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              A2B
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(renderNavLink)}
            <ThemeToggle />
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Book Discovery Call</Link>
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
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map(renderNavLink)}
              <Button variant="hero" size="default" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Discovery Call
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;