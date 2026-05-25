import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "MotherLode CMI — Live Demo",
  description: "MotherLode CMI live demonstration. Confidential.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

// Read the static demo.html at build time and embed it.
// The HTML's inline JS hits /api/mines, /api/scan, /api/chat which are now Next.js API routes.
function readDemoHtml(): string {
  const file = path.join(process.cwd(), "src", "app", "demo", "_data", "demo-static.html");
  try {
    return fs.readFileSync(file, "utf8");
  } catch (e) {
    console.error("failed to read demo-static.html", e);
    return "<p>Demo not available.</p>";
  }
}

export default function DemoPage() {
  const html = readDemoHtml();
  // Extract just the body content to embed cleanly without nesting <html>/<body>
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const scriptsMatches = Array.from(html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi));
  const externalScripts = Array.from(
    html.matchAll(/<script\s+[^>]*src="([^"]+)"[^>]*><\/script>/gi)
  ).map((m) => m[1]);
  const externalStyles = Array.from(
    html.matchAll(/<link\s+[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*\/?>/gi)
  ).map((m) => m[1]);

  const bodyContent = bodyMatch ? bodyMatch[1] : html;
  const styleContent = styleMatch ? styleMatch[1] : "";
  const inlineScripts = scriptsMatches
    .filter((m) => !m[0].includes("src="))
    .map((m) => m[1])
    .join("\n");

  return (
    <>
      {/* External Leaflet CSS */}
      {externalStyles.map((href, i) => (
        <link key={i} rel="stylesheet" href={href} crossOrigin="" />
      ))}
      {/* Inline styles from the original demo */}
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      {/* Body markup */}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      {/* External scripts (Leaflet) - load synchronously before inline */}
      {externalScripts.map((src, i) => (
        // eslint-disable-next-line @next/next/no-sync-scripts
        <script key={`ext-${i}`} src={src} crossOrigin="" />
      ))}
      {/* Inline scripts (the demo logic) */}
      <script dangerouslySetInnerHTML={{ __html: inlineScripts }} />
    </>
  );
}
