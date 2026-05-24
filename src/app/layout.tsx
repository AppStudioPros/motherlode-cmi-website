import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MotherLode CMI — Per-Site Critical Minerals Intelligence",
  description:
    "AI-powered per-site critical-minerals intelligence across the entire mining-active United States. Built for the institutions advancing domestic supply.",
  metadataBase: new URL("https://motherlodecmi.com"),
  openGraph: {
    title: "MotherLode CMI",
    description:
      "Per-site critical-minerals intelligence across the entire mining-active United States.",
    url: "https://motherlodecmi.com",
    siteName: "MotherLode CMI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MotherLode CMI",
    description:
      "Per-site critical-minerals intelligence across the entire mining-active United States.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full text-text">
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-blob ambient-blob-1"></div>
          <div className="ambient-blob ambient-blob-2"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
