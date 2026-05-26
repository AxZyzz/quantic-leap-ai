import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Check,
  ArrowRight,
  Palette,
  Sticker,
  TrendingUp,
  Globe,
  CreditCard,
  MapPin,
  Zap,
  Bot,
  FileText,
  Clock,
  Users,
  Gift,
  Grid3x3,
  Calendar,
  GitBranch,
  Brush,
  Terminal,
  X,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Sticker,
  TrendingUp,
  Globe,
  CreditCard,
  MapPin,
  Zap,
  Bot,
  FileText,
  Clock,
  Users,
  Gift,
  Grid3x3,
  Calendar,
  GitBranch,
  Brush,
  Terminal,
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.fullDescription,
    url: product.url,
    applicationCategory: product.category,
    operatingSystem: "Web",
    image: product.logo,
    author: {
      "@type": "Organization",
      name: "A2B AI Technologies",
      url: "https://a2b.services",
    },
    offers: product.pricing?.plans?.[0]
      ? {
        "@type": "AggregateOffer",
        lowPrice: product.pricing.plans[0].price.replace(/[^0-9]/g, ""),
        highPrice: product.pricing.plans[product.pricing.plans.length - 1].price.replace(/[^0-9]/g, ""),
        priceCurrency: "INR",
        offerCount: product.pricing.plans.length,
      }
      : undefined,
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`${product.name} — ${product.tagline} | A2B AI Technologies`}
        description={product.shortDescription}
        canonical={`https://a2b.services/products/${product.slug}`}
        schema={productSchema}
      />

      {/* Back Link */}
      <div className="pt-24 pb-2">
        <div className="container mx-auto px-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Products
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center gap-5 mb-5">
                <img
                  src={product.logo}
                  alt={`${product.name} logo`}
                  className="w-45 h-40 object-contain"
                />
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold mb-1">
                    {product.name}
                  </h1>
                  <p className="text-base text-accent font-medium italic mb-1">
                    "{product.tagline}"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {product.category}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                {product.fullDescription}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-wrap gap-3">
                <Button variant="acrylic" size="default" asChild>
                  <a
                    href={product.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.ctaText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="acrylicOutline" size="default" asChild>
                  <Link to="/contact">Request a Demo</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {product.screenshots && product.screenshots.length > 0 && (
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    See It in Action
                  </h2>
                  <p className="text-muted-foreground">
                    Screenshots from the live product
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {product.screenshots.map((src, i) => (
                  <ScrollReveal key={src} delay={i * 100}>
                    <button
                      onClick={() => setLightboxImg(src)}
                      className="product-screenshot-card group"
                    >
                      <img
                        src={src}
                        alt={`${product.name} screenshot ${i + 1}`}
                        className="w-full h-auto object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="product-screenshot-overlay">
                        <span className="text-white text-xs font-medium">Click to expand</span>
                      </div>
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="product-lightbox"
          onClick={() => setLightboxImg(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          tabIndex={0}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="product-lightbox-close"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImg}
            alt={`${product.name} screenshot`}
            className="product-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Core Features
                </h2>
                <p className="text-muted-foreground">
                  Everything that makes {product.name} powerful
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 80}>
                  <div className="product-feature-card">
                    {(() => {
                      const IconComp = iconMap[feature.icon];
                      return IconComp ? (
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                          <IconComp className="h-5 w-5 text-accent" />
                        </div>
                      ) : null;
                    })()}
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  How It Works
                </h2>
                <p className="text-muted-foreground">
                  Three simple steps to get started
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.howItWorks.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 120}>
                  <div className="text-center">
                    <div className="product-step-number">{step.step}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {i < product.howItWorks.length - 1 && (
                      <div className="hidden md:flex justify-center mt-6">
                        <ArrowRight className="h-5 w-5 text-accent/40" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="product-cta-block">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to try {product.name}?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {product.shortDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="acrylic" size="lg" asChild>
                  <a
                    href={product.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.ctaText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="acrylicOutline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
