export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "A2B - Enterprise AI Automation Solutions",
  "description": "Transform your enterprise with secure, scalable AI automation. Custom workflow orchestration, cloud integration, and ROI-driven implementation for industry leaders.",
  "url": "https://a2b.services",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://a2b.services/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise AI Automation Services",
  "provider": {
    "@type": "Organization",
    "name": "A2B Services"
  },
  "serviceType": ["AI Automation", "System Integration", "Workflow Orchestration"],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Automation Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom AI Workflow Development",
          "description": "Tailored AI automation workflows for enterprise needs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Integration Services",
          "description": "Secure integration with AWS, Azure, and GCP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Implementation Consulting",
          "description": "Strategic AI adoption and automation consulting"
        }
      }
    ]
  }
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact A2B Services",
  "description": "Get in touch with A2B Services for enterprise AI automation solutions",
  "mainEntity": {
    "@type": "Organization",
    "name": "A2B Services",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9446447169",
      "contactType": "sales",
      "email": "a2b.business.official@gmail.com",
      "areaServed": "Worldwide"
    }
  }
};

export const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Enterprise AI Automation Case Study",
  "author": {
    "@type": "Organization",
    "name": "A2B Services"
  },
  "publisher": {
    "@type": "Organization",
    "name": "A2B Services",
    "logo": {
      "@type": "ImageObject",
      "url": "https://a2b.services/logo.png"
    }
  }
};