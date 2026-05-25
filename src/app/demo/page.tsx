import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { DemoClient } from "./DemoClient";

export const metadata: Metadata = {
  title: "MotherLode CMI — Live Demo",
  description: "MotherLode CMI live demonstration. Confidential.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

function readDemoLogic(): string {
  const file = path.join(process.cwd(), "src", "app", "demo", "demo-logic.js");
  try {
    return fs.readFileSync(file, "utf8");
  } catch (e) {
    console.error("[demo] failed to read demo-logic.js", e);
    return "";
  }
}

export default function DemoPage() {
  const demoLogic = readDemoLogic();
  return <DemoClient demoLogic={demoLogic} />;
}
