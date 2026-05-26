import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

// ─── Load .env ──────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// ─── Static pages ───────────────────────────────────────────
const staticPages = [
  { path: '/',             changefreq: 'weekly',  priority: '1.0' },
  { path: '/services',     changefreq: 'monthly', priority: '0.9' },
  { path: '/pricing',      changefreq: 'monthly', priority: '0.9' },
  { path: '/products',     changefreq: 'monthly', priority: '0.8' },
  { path: '/products/roastmysnap', changefreq: 'monthly', priority: '0.7' },
  { path: '/products/ztrike',     changefreq: 'monthly', priority: '0.7' },
  { path: '/products/gitart',     changefreq: 'monthly', priority: '0.7' },
  { path: '/case-studies',  changefreq: 'monthly', priority: '0.8' },
  { path: '/about',        changefreq: 'monthly', priority: '0.7' },
  { path: '/contact',      changefreq: 'monthly', priority: '0.8' },
  { path: '/blog',         changefreq: 'weekly',  priority: '0.8' },
  { path: '/faq',          changefreq: 'monthly', priority: '0.7' },
  { path: '/resources',    changefreq: 'monthly', priority: '0.6' },
  { path: '/careers',      changefreq: 'monthly', priority: '0.5' },
  { path: '/newsletters',  changefreq: 'monthly', priority: '0.4' },
  { path: '/privacy',      changefreq: 'yearly',  priority: '0.3' },
];

// ─── Build sitemap ──────────────────────────────────────────
async function generateSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const baseUrl = 'https://a2b.services';

  // Fetch all blog slugs from Supabase
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('slug, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Failed to fetch blogs:', error.message);
    process.exit(1);
  }

  // Build XML entries for static pages
  const staticEntries = staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);

  // Build XML entries for dynamic blog posts
  const blogEntries = (blogs || []).map(blog => {
    const lastmod = blog.created_at ? blog.created_at.slice(0, 10) : today;
    return `  <url>
    <loc>${baseUrl}/blog/${blog.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries.join('\n')}
${blogEntries.join('\n')}
</urlset>
`;

  const outputPath = resolve(__dirname, '../public/sitemap.xml');
  writeFileSync(outputPath, sitemap, 'utf-8');

  console.log(`✅ Sitemap generated: ${staticPages.length} static + ${blogEntries.length} blog posts`);
}

generateSitemap();
