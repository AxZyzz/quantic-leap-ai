import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Solutions: [
      { name: "Workflow Automation", path: "/services#workflow" },
      { name: "AI Agents", path: "/services#agents" },
      { name: "Data Systems", path: "/services#data" },
      { name: "Strategy & Consulting", path: "/services#consulting" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Contact", path: "/contact" },
    ],
    Resources: [
      { name: "Blog", path: "/blog" },
      { name: "Guides", path: "/resources" },
      { name: "FAQ", path: "/faq" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              A2B
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Your strategic AI partner for long-term growth. We build custom AI solutions that
              automate operations and maximize ROI.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} A2B. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
