import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const Products = () => {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "A2B AI Technologies Products",
    description:
      "SaaS products built by A2B AI Technologies — AI-powered platforms for creative generation, automation, and more.",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.name,
        description: p.shortDescription,
        url: p.url,
        applicationCategory: p.category,
        operatingSystem: "Web",
        offers: p.pricing?.plans?.[0]
          ? {
            "@type": "Offer",
            price: p.pricing.plans[0].price.replace(/[^0-9]/g, ""),
            priceCurrency: "INR",
          }
          : undefined,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Products | A2B AI Technologies"
        description="Explore AI-powered products built by A2B AI Technologies. From creative image generation to intelligent automation — our SaaS products solve real problems."
        canonical="https://a2b.services/products"
        schema={productsSchema}
      />

      {/* Compact Hero */}
      <section className="pt-28 pb-10 lg:pt-32 lg:pb-12">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Our{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
              <p className="text-sm text-muted-foreground">
                AI-powered platforms we've built and shipped.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 100}>
                <Link
                  to={`/products/${product.slug}`}
                  className="product-card group block h-full"
                >
                  <div className="product-card-inner h-full flex flex-col items-center text-center">
                    {/* Large Logo */}
                    <div className="mb-4">
                      <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className="w-52 h-52 object-contain"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold group-hover:text-accent transition-colors mb-1">
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-accent font-medium mb-3">
                      {product.tagline}
                    </p>

                    {/* Short one-liner */}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
                      {product.category}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-4 pt-3 border-t border-border/40 w-full justify-center">
                      <span className="text-sm font-medium text-accent flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-muted-foreground hover:text-accent flex items-center gap-1 transition-colors"
                      >
                        Visit
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}

            {/* Coming Soon Placeholder */}
            <ScrollReveal delay={products.length * 100}>
              <div className="product-card-coming-soon h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-3">
                  <Sparkles className="h-6 w-6 text-muted-foreground/30" />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground/50 mb-1">
                  More Coming Soon
                </h3>
                <p className="text-xs text-muted-foreground/35">
                  New AI products in development.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Need a Custom SaaS Product?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                We build custom AI-powered SaaS products for businesses
              </p>
              <Button variant="acrylic" size="default" asChild>
                <Link to="/contact">Let's Build Together</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Products;
