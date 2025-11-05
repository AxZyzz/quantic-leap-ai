import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileText, HelpCircle, LibraryIcon } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Implementation Guides",
      icon: BookOpen,
      description: "Step-by-step guides for implementing AI solutions and automation workflows",
      comingSoon: true,
      links: [
        { title: "Getting Started with AI", comingSoon: true },
        { title: "Integration Best Practices", comingSoon: true },
        { title: "Security Guidelines", comingSoon: true },
      ],
    },
    {
      title: "Technical Documentation",
      icon: FileText,
      description: "Detailed technical documentation for developers and system architects",
      comingSoon: true,
      links: [
        { title: "API References", comingSoon: true },
        { title: "System Architecture", comingSoon: true },
        { title: "Configuration Guide", comingSoon: true },
      ],
    },
    {
      title: "Knowledge Base",
      icon: LibraryIcon,
      description: "Comprehensive articles and tutorials on AI implementation and best practices",
      comingSoon: true,
      links: [
        { title: "Best Practices", comingSoon: true },
        { title: "Use Cases", comingSoon: true },
        { title: "Common Issues", comingSoon: true },
      ],
    },
    {
      title: "Support Resources",
      icon: HelpCircle,
      description: "Get help and support for your AI implementation journey",
      links: [
        { title: "FAQ", path: "/faq" },
        { title: "Contact Support", path: "/contact" },
        { title: "Help Center", comingSoon: true },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Resources - A2B AI Implementation Guides & Documentation"
        description="Access comprehensive guides, documentation, and support resources for implementing A2B's AI solutions and automation workflows."
        canonical="https://a2b.services/resources"
      />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources</h1>
                <p className="text-xl text-muted-foreground">
                  Everything you need to successfully implement and manage your AI solutions
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourceCategories.map((category) => (
                <ScrollReveal key={category.title}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                    <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                      <category.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                      {category.comingSoon && (
                        <span className="text-sm px-2 py-1 bg-accent/10 text-accent rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-6">{category.description}</p>
                    <ul className="space-y-3">
                      {category.links.map((link) => (
                        <li key={link.title} className="flex items-center justify-between">
                          {link.path ? (
                            <Button variant="link" asChild className="p-0 h-auto">
                              <Link to={link.path} className="text-accent hover:underline">
                                {link.title}
                              </Link>
                            </Button>
                          ) : (
                            <span className="text-muted-foreground">{link.title}</span>
                          )}
                          {link.comingSoon && (
                            <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                              Coming Soon
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;