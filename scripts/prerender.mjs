import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import sirv from "sirv";
import http from "node:http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  "/",
  "/about/",
  "/industries/",
  "/contact/",
  "/services/",
  "/general-services/",
  "/administrative-support/",
  "/healthcare/",
  "/marketing/",
  "/web-design/",
  "/3d-animation/",
  "/logistics/",
];

const distDir = path.resolve(__dirname, "..", "dist");
const port = 4173;
const baseUrl = `http://localhost:${port}`;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true});
}

async function startServer() {
  const serve = sirv(distDir, { dev: true, single: "index.html"});
  const server = http.createServer((req, res) => serve(req, res));
  await new Promise((resolve) => server.listen(port, resolve));
  return server;
}

function routeToFile(route) {
  if (route === "/") return path.join(distDir, "index.html");
  const clean = route.replace(/^\//, "");
  return path.join(distDir, clean, "index.html");
}

async function prerender() {
  if (!fs.existsSync(distDir)) {
    throw new Error("dist/ not found, Run `npm run build` first.");
  }
  
  const server = await startServer();
  const browser = await puppeteer.launch({ headless: "new"});

  try {
    const page = await browser.newPage();

    for (const route of routes) {
      const url = `${baseUrl}${route}`;
      console.log(`Prerendering: ${url}`);

      await page.goto(url, { waitUntil: "networkidle0" });

      const html = await page.content();
      
      const outFile = routeToFile(route);
      ensureDir(path.dirname(outFile));
      fs.writeFileSync(outFile, html, "utf-8");
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
