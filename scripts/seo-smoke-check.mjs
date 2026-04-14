import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = "https://stiftelseguiden.se";
const outDir = resolve(process.cwd(), "out");

const routes = [
  "/",
  "/starta-stiftelse/",
  "/driva-stiftelse/",
  "/stiftelser/",
  "/stiftelser/aktiva-stiftelser/",
  "/juridik/",
  "/resurser/",
  "/resurser/ansokningsguide/",
  "/resurser/skatteoptimering/",
  "/resurser/stiftelseordlista/",
  "/resurser/tips-och-trix/",
  "/dokument/",
  "/verktyg/",
  "/kontakt/",
];

const schemaExpectations = {
  "/": ["WebPage"],
  "/starta-stiftelse/": ["WebPage", "BreadcrumbList"],
  "/stiftelser/": ["CollectionPage", "BreadcrumbList", "ItemList"],
  "/stiftelser/aktiva-stiftelser/": ["CollectionPage", "BreadcrumbList", "ItemList"],
  "/resurser/": ["CollectionPage", "BreadcrumbList", "ItemList"],
  "/dokument/": ["CollectionPage", "BreadcrumbList", "ItemList"],
  "/verktyg/": ["CollectionPage", "BreadcrumbList", "ItemList"],
  "/kontakt/": ["ContactPage", "BreadcrumbList", "FAQPage"],
};

const failures = [];

function fail(message) {
  failures.push(message);
}

function routeToHtmlPath(route) {
  return route === "/"
    ? resolve(outDir, "index.html")
    : resolve(outDir, route.slice(1), "index.html");
}

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function match(text, pattern, label) {
  const result = text.match(pattern);
  if (!result) fail(`Missing ${label}`);
  return result?.[1] ?? null;
}

function assertIncludes(text, value, label) {
  if (!text.includes(value)) {
    fail(`Expected ${label} to include: ${value}`);
  }
}

if (!existsSync(outDir)) {
  fail("Missing out/ build directory. Run `npm run build` first.");
}

for (const route of routes) {
  const htmlPath = routeToHtmlPath(route);
  if (!existsSync(htmlPath)) {
    fail(`Missing exported HTML for route ${route}: ${htmlPath}`);
    continue;
  }

  const html = readText(htmlPath);
  const expectedCanonical = new URL(route, `${siteUrl}/`).toString();
  const canonical = match(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i, `${route} canonical`);
  const ogUrl = match(html, /<meta[^>]+property="og:url"[^>]+content="([^"]+)"/i, `${route} og:url`);
  const title = match(html, /<title>(.*?)<\/title>/is, `${route} title`);
  const description = match(html, /<meta[^>]+name="description"[^>]+content="([^"]+)"/i, `${route} description`);
  const ogTitle = match(html, /<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i, `${route} og:title`);
  const twitterTitle = match(html, /<meta[^>]+name="twitter:title"[^>]+content="([^"]+)"/i, `${route} twitter:title`);
  const ogImage = match(html, /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i, `${route} og:image`);

  if (canonical && canonical !== expectedCanonical) {
    fail(`Canonical mismatch for ${route}: expected ${expectedCanonical}, got ${canonical}`);
  }

  if (ogUrl && ogUrl !== expectedCanonical) {
    fail(`og:url mismatch for ${route}: expected ${expectedCanonical}, got ${ogUrl}`);
  }

  if (route !== "/" && title === "StiftelseGuiden.se") {
    fail(`Title for ${route} should not fall back to the sitewide homepage title`);
  }

  if (!description || description.length < 50) {
    fail(`Description for ${route} is missing or too short`);
  }

  if (!ogTitle || !ogTitle.includes("StiftelseGuiden.se")) {
    fail(`og:title for ${route} should include the site name`);
  }

  if (!twitterTitle || !twitterTitle.includes("StiftelseGuiden.se")) {
    fail(`twitter:title for ${route} should include the site name`);
  }

  if (!ogImage || !ogImage.startsWith(`${siteUrl}/`)) {
    fail(`og:image for ${route} should be absolute and on the primary domain`);
  }

  const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gis)].map(
    (entry) => entry[1],
  );

  if (jsonLdMatches.length < 2) {
    fail(`Expected sitewide and page JSON-LD blocks for ${route}`);
  }

  for (const schemaType of schemaExpectations[route] ?? ["WebPage"]) {
    if (!jsonLdMatches.some((script) => script.includes(`"@type":"${schemaType}"`))) {
      fail(`Missing JSON-LD type ${schemaType} for ${route}`);
    }
  }
}

const robotsPath = resolve(outDir, "robots.txt");
if (!existsSync(robotsPath)) {
  fail("Missing out/robots.txt");
} else {
  const robots = readText(robotsPath);
  assertIncludes(robots, "User-Agent: *", "robots.txt");
  assertIncludes(robots, "Allow: /", "robots.txt");
  assertIncludes(robots, "Disallow: /api/", "robots.txt");
  assertIncludes(robots, "Disallow: /form.html", "robots.txt");
  assertIncludes(robots, `Sitemap: ${siteUrl}/sitemap.xml`, "robots.txt");
  if (robots.includes("/_next/")) {
    fail("robots.txt should not disallow /_next/");
  }
}

const sitemapPath = resolve(outDir, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fail("Missing out/sitemap.xml");
} else {
  const sitemap = readText(sitemapPath);
  const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((entry) => entry[1]);

  for (const route of routes) {
    const expectedUrl = new URL(route, `${siteUrl}/`).toString();
    if (!locs.includes(expectedUrl)) {
      fail(`Sitemap missing route ${expectedUrl}`);
    }
  }

  if (locs.length !== routes.length) {
    fail(`Sitemap route count mismatch: expected ${routes.length}, got ${locs.length}`);
  }
}

const redirectsPath = resolve(outDir, "_redirects");
if (!existsSync(redirectsPath)) {
  fail("Missing out/_redirects");
} else {
  const redirects = readText(redirectsPath);
  assertIncludes(
    redirects,
    "https://www.stiftelseguiden.se/* https://stiftelseguiden.se/:splat 301!",
    "_redirects",
  );
  if (/\/\*\s+\/index\.html\s+200/.test(redirects)) {
    fail("_redirects should not contain the old SPA catch-all rewrite");
  }
}

if (failures.length > 0) {
  console.error("SEO smoke test failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SEO smoke test passed for ${routes.length} routes.`);