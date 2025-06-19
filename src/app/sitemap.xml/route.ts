import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.labubuwallpaper.cn/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.labubuwallpaper.cn/#gallery</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.labubuwallpaper.cn/#download</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.labubuwallpaper.cn/#tutorial</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.labubuwallpaper.cn/#faq</loc>
    <priority>0.7</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 