const generateSitemap = async () => {
  const baseUrl = "https://tactics-digital-agency.vercel.app/"; // Replace with your actual domain
  const pages = [
    { path: "/", lastModified: new Date() },
    { path: "/about", lastModified: new Date() },
    { path: "/blog", lastModified: new Date() },
    { path: "/contact", lastModified: new Date() },
    // Add more paths as needed
  ];

  const sitemapEntries = pages
    .map(({ path, lastModified }) => {
      return `
          <url>
            <loc>${baseUrl}${path}</loc>
            <lastmod>${lastModified.toISOString()}</lastmod>
          </url>
        `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
      ${sitemapEntries}
    </urlset>`;
};

export default async function sitemap(req, res) {
  try {
    const sitemap = await generateSitemap(); // Generate the sitemap
    res.setHeader("Content-Type", "application/xml"); // Set the response header to XML
    res.write(sitemap); // Write the sitemap content
    res.end(); // End the response
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Internal Server Error"); // Handle errors
  }
}
