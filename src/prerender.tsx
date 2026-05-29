/**
 * Server-side prerender entry point.
 *
 * Called by vite-prerender-plugin at build time for each route.
 * Renders the React app to a static HTML string that gets injected
 * into the built index.html, so search-engine crawlers (and users
 * on slow connections) see real content immediately.
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppRoutes } from "./App";

// ── Routes to pre-render ────────────────────────────────────────
// Static pages (must match the routes defined in App.tsx)
const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/case-studies",
  "/case-studies/sacred-text-publishing",
  "/case-studies/medical-consultation",
  "/case-studies/imagegeneration",
  "/case-studies/reddit-to-youtube",
  "/case-studies/multimodal-ai",
  "/case-studies/visual-brand-intelligence",
  "/case-studies/seo-report-automation",
  "/case-studies/lexicon",
  "/case-studies/aether",
  "/case-studies/curio",
  "/case-studies/tech-stack",
  "/newsletters",
  "/contact",
  "/faq",
  "/resources",
  "/careers",
  "/blog",
  "/privacy",
  "/products",
  "/products/roastmysnap",
  "/products/ztrike",
  "/products/gitart",
];

// Dynamic blog slugs — these match what the sitemap generator produces.
// When new blog posts are added in Supabase, add their slugs here
// (or automate this list in the future via the generate-sitemap script).
const blogSlugs = [
  "built-a-system-that-does-500-in-the-time-i-used-to-do-5",
  "debugging-a-workflow-that-had-zero-error-logs-and-lost-1200",
  "learn-n8n-in-2026",
  "built-50-automations-that-clients-never-used",
  "n8n-v2-0",
  "i-wasted-6-months-building-automations-that-kept-breaking-here-s-what-actually-fixed-them",
];

const dynamicRoutes = blogSlugs.map((slug) => `/blog/${slug}`);

const allRoutes = [...staticRoutes, ...dynamicRoutes];

// ── Prerender function ──────────────────────────────────────────
// vite-prerender-plugin calls this for each URL. It receives a `data`
// object with `{ url }` and must return `{ html, links? }`.
export async function prerender(data: { url: string }) {
  const url = data?.url || "/";

  // Create a fresh QueryClient per render to avoid shared state
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 0, // No retries during prerender
      },
    },
  });

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  // On the first call (homepage), return all links to pre-render.
  // The plugin discovers new routes via the `links` property.
  return {
    html,
    links: new Set(allRoutes),
  };
}
