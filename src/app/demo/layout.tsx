import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MotherLode CMI Demo — Confidential",
  description: "Restricted demo of MotherLode CMI.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
