const fs = require("fs");
const path = require("path");

const baseUrl = "https://yourusername.github.io"; // 🔹 Change to your GitHub Pages URL
const pagesDir = path.join(__dirname); // Root folder (where .html files are located)

// Function to recursively get all HTML files
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith(".html")) {
      results.push(filePath);
    }
  });

  return results;
}

// Build sitemap
function generateSitemap() {
  const files = getHtmlFiles(pagesDir);
  const urls = files.map(file => {
    const relativePath = path.relative(pagesDir, file).replace(/\\/g, "/");
    return `
  <url>
    <loc>${baseUrl}/${relativePath}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${relativePath === "index.html" ? "1.0" : "0.8"}</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  fs.writeFileSync("sitemap.xml", sitemap, "utf8");
  console.log("✅ sitemap.xml generated successfully!");
}

generateSitemap();
