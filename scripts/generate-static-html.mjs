import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

// ─── Setup ──────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;
if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Warning: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in environment/dotenv. Static HTML will only contain static pages.');
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}

// ─── Define Static Routes ────────────────────────────────
const staticRoutes = [
  {
    path: '/',
    title: 'A2B AI Technologies | AI Solutions That Scale Your Business',
    description: 'Transform your business with custom AI solutions. Automate operations, maximize ROI, and scale without increasing headcount. Enterprise-grade AI implementation partner.',
    h1: 'A2B AI Technologies'
  },
  {
    path: '/about',
    title: 'About A2B AI Technologies | Your Strategic AI Automation Partner',
    description: 'Meet the expert engineers and strategists at A2B AI Technologies. We build custom AI automation solutions that compound value over time. Founded 2020, serving businesses worldwide.',
    h1: 'About A2B AI Technologies'
  },
  {
    path: '/services',
    title: 'AI Automation Services by Industry | Custom Solutions | A2B AI Technologies',
    description: "Explore A2B's AI automation services across 21+ industries: real estate, healthcare, e-commerce, legal, HR, and more. Custom-built workflow automation, chatbots, and AI agents.",
    h1: 'AI Automation Services'
  },
  {
    path: '/pricing',
    title: 'Pricing & Plans | A2B AI Technologies',
    description: 'Transparent pricing for custom AI automation solutions. Choose from flexible plans designed to scale with your enterprise operations and ROI goals.',
    h1: 'Pricing & Plans'
  },
  {
    path: '/case-studies',
    title: 'Case Studies | A2B AI Technologies',
    description: 'Read how enterprise clients achieve 300%+ ROI with our custom AI automation solutions. Real success stories across healthcare, real estate, e-commerce, and more.',
    h1: 'Case Studies'
  },
  {
    path: '/contact',
    title: 'Contact Us | A2B AI Technologies',
    description: 'Get in touch with A2B AI Technologies. Schedule a consultation to discuss how custom AI automation can transform your business operations.',
    h1: 'Contact Us'
  },
  {
    path: '/blog',
    title: 'Blog & Insights | A2B AI Technologies',
    description: 'Latest insights on AI automation, workflow optimization, and enterprise technology trends from the experts at A2B AI Technologies.',
    h1: 'Blog & Insights'
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions | A2B AI Technologies',
    description: 'Find answers to common questions about our AI automation services, implementation process, pricing, and ongoing support.',
    h1: 'Frequently Asked Questions'
  },
  {
    path: '/resources',
    title: 'Resources | A2B AI Technologies',
    description: 'Explore our collection of resources, guides, and tools to help you understand and implement AI automation in your business.',
    h1: 'Resources'
  },
  {
    path: '/careers',
    title: 'Careers | A2B AI Technologies',
    description: 'Join our team of innovators and help shape the future of AI automation. Explore career opportunities at A2B AI Technologies.',
    h1: 'Careers'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | A2B AI Technologies',
    description: 'Read our privacy policy to understand how we collect, use, and protect your data at A2B AI Technologies.',
    h1: 'Privacy Policy'
  },
  {
    path: '/products',
    title: 'Products | A2B AI Technologies',
    description: 'Discover our suite of AI products designed to streamline operations and boost productivity.',
    h1: 'Our Products'
  }
];

// Add specific case studies manually based on prerender.tsx
const caseStudies = [
  "sacred-text-publishing",
  "medical-consultation",
  "imagegeneration",
  "reddit-to-youtube",
  "multimodal-ai",
  "visual-brand-intelligence",
  "seo-report-automation",
  "lexicon",
  "aether",
  "curio",
  "tech-stack"
].map(slug => ({
  path: `/case-studies/${slug}`,
  title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Case Study | A2B AI Technologies`,
  description: `Detailed case study on how we implemented AI automation for ${slug.replace(/-/g, ' ')}. Read about the challenges, solutions, and ROI.`,
  h1: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Case Study`
}));

const products = [
  "roastmysnap",
  "ztrike",
  "gitart"
].map(slug => ({
  path: `/products/${slug}`,
  title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | A2B AI Technologies`,
  description: `Learn more about our product ${slug.replace(/-/g, ' ')} and how it can help your business.`,
  h1: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
}));

const allStaticRoutes = [...staticRoutes, ...caseStudies, ...products];

// ─── Build HTML function ─────────────────────────────────
async function generateStaticHTML() {
  const distDir = resolve(__dirname, '../dist');
  const templatePath = resolve(distDir, 'index.html');
  
  if (!existsSync(templatePath)) {
    console.error('❌ Error: dist/index.html not found. Make sure to run `vite build` first.');
    process.exit(1);
  }

  const templateHTML = readFileSync(templatePath, 'utf-8');

  // Fetch blogs
  let blogRoutes = [];
  if (supabase) {
    try {
      const { data: blogs, error } = await supabase
        .from('blogs')
        .select('slug, title, description, content');

      if (error) {
        console.warn('⚠️ Warning: Failed to fetch blogs from Supabase:', error.message);
      } else if (blogs) {
        blogRoutes = blogs.map(blog => ({
          path: `/blog/${blog.slug}`,
          title: `${blog.title} | A2B AI Technologies`,
          description: blog.description || `Read our blog post about ${blog.title}`,
          h1: blog.title,
          content: blog.content ? blog.content.substring(0, 500) + '...' : ''
        }));
      }
    } catch (e) {
      console.warn('⚠️ Warning: Error querying Supabase:', e);
    }
  }

  const allRoutes = [...allStaticRoutes, ...blogRoutes];

  // Common Nav for crawlers
  const navHtml = `
    <nav>
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/services">Services</a> |
      <a href="/pricing">Pricing</a> |
      <a href="/case-studies">Case Studies</a> |
      <a href="/blog">Blog</a> |
      <a href="/contact">Contact</a>
    </nav>
  `;

  for (const route of allRoutes) {
    // Generate SEO HTML
    const seoContent = `
      <div style="padding: 2rem; font-family: sans-serif;">
        ${navHtml}
        <h1>${route.h1 || route.title}</h1>
        <p>${route.description}</p>
        ${route.content ? `<article>${route.content}</article>` : ''}
        <p><em>Enterprise-grade AI automation and integration services. Transform your business with custom AI solutions that automate operations, maximize ROI, and scale without increasing headcount.</em></p>
      </div>
    `;

    // Replace Title & Description in Head
    let modifiedHtml = templateHTML
      .replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
      .replace(/<meta\s+name="description"\s+content=".*?"\s*\/>/s, `<meta name="description" content="${route.description}" />`)
      .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/>/s, `<meta property="og:title" content="${route.title}" />`)
      .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/>/s, `<meta property="og:description" content="${route.description}" />`)
      .replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s, `<meta name="twitter:title" content="${route.title}" />`)
      .replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s, `<meta name="twitter:description" content="${route.description}" />`);

    // Inject SEO content into root (it will be replaced by React on load, but crawlers will see it)
    modifiedHtml = modifiedHtml.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${seoContent}</div>`);

    // Handle nested directories
    const routeDir = resolve(distDir, route.path.replace(/^\//, ''));
    if (!existsSync(routeDir)) {
      mkdirSync(routeDir, { recursive: true });
    }

    // Don't overwrite the main dist/index.html just yet, or maybe do it?
    // We should write to dist/<path>/index.html
    const outPath = resolve(routeDir, 'index.html');
    writeFileSync(outPath, modifiedHtml, 'utf-8');
    
    // Also overwrite the root dist/index.html if it's the home route '/'
    if (route.path === '/') {
      writeFileSync(templatePath, modifiedHtml, 'utf-8');
    }
  }

  console.log(`✅ Generated static HTML for ${allRoutes.length} routes.`);
}

generateStaticHTML();
