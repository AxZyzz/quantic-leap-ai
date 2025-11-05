import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
  noindex?: boolean;
}

const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "A2B - Enterprise AI Automation Solutions",
  "url": "https://a2b.services",
  "logo": "https://a2b.services/logo.png",
  "description": "Enterprise-grade AI automation and integration services for secure, scalable workflow orchestration across cloud platforms.",
  "sameAs": [
    "https://www.linkedin.com/company/a2b-services",
    "https://twitter.com/a2b_services"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9446447169",
    "contactType": "sales",
    "email": "a2b.business.official@gmail.com",
    "areaServed": "Worldwide"
  },
  "offers": {
    "@type": "AggregateOffer",
    "highPrice": "50000",
    "lowPrice": "5000",
    "priceCurrency": "USD",
    "offerCount": "5"
  }
}

export default function SEO({ 
  title = "A2B - Enterprise AI Automation & Integration Solutions",
  description = "Transform your enterprise with secure, scalable AI automation. Custom workflow orchestration, cloud integration, and ROI-driven implementation for industry leaders.",
  canonical = "https://a2b.services",
  ogImage = "/og/default-banner.jpg",
  schema = defaultSchema,
  noindex = false
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="A2B Services" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}