import type { NextApiRequest, NextApiResponse } from "next";

const SITE_URL = "https://changtechs.com";

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/Services", priority: "0.9", changefreq: "weekly" },
  { url: "/About", priority: "0.8", changefreq: "monthly" },
  { url: "/Contact", priority: "0.8", changefreq: "monthly" },
  { url: "/Products", priority: "0.7", changefreq: "weekly" },
];

function generateSitemapXml(): string {
  const lastmod = new Date().toISOString().split("T")[0];

  const urlEntries = pages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`;
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const sitemap = generateSitemapXml();

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.status(200).send(sitemap);
}
