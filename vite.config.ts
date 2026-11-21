import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from "fs";
import type { Plugin } from "vite";
import { ROUTE_META, SITE_URL } from "./client/src/lib/routeMeta";

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/**
 * Writes dist/public/<page>/index.html for every page in ROUTE_META, a copy of
 * the app shell with that page's title and share text. Vercel serves these
 * files ahead of the catch-all rewrite, so link previews and search engines
 * see the right text without running the app.
 */
function routeMetaPages(): Plugin {
  let outDir = "";
  return {
    name: "ucu-route-meta-pages",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const shellPath = path.join(outDir, "index.html");
      if (!fs.existsSync(shellPath)) return;
      const shell = fs.readFileSync(shellPath, "utf8");
      for (const [route, meta] of Object.entries(ROUTE_META)) {
        if (route === "/") continue;
        const title = escapeAttr(meta.title);
        const description = escapeAttr(meta.description);
        const setContent = (html: string, attr: string, value: string) =>
          html.replace(
            new RegExp(`(<meta ${attr} content=")[^"]*(")`),
            (_match, start, end) => start + value + end,
          );
        let html = shell.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
        html = setContent(html, 'name="description"', description);
        html = setContent(html, 'property="og:title"', title);
        html = setContent(html, 'property="og:description"', description);
        html = setContent(html, 'property="og:url"', SITE_URL + route);
        html = setContent(html, 'name="twitter:title"', title);
        html = setContent(html, 'name="twitter:description"', description);
        const dir = path.join(outDir, route);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), html);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    routeMetaPages(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
