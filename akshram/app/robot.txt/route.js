// app/robots.txt/route.js
export const dynamic = "force-static";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://akhsharam-playschool.vercel.app/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: { "Content-Type": "text/plain" },
  });
}
