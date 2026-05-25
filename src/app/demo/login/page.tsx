import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "MotherLode CMI Demo Access — Lucid Tech LLC",
  description: "Restricted access to the MotherLode CMI demonstration.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen text-text z-10 flex flex-col bg-ink">
      <header className="border-b border-white/10 bg-ink/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-gold to-amber flex items-center justify-center">
              <span className="text-ink font-black text-sm tracking-wider">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight leading-none">MotherLode CMI</span>
              <span className="text-[10px] text-gold leading-none mt-0.5 uppercase tracking-widest">Demo · Restricted</span>
            </div>
          </a>
          <a href="/" className="text-sm text-muted hover:text-text transition-colors">← Public site</a>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-6">
              Restricted Access
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              MotherLode CMI Demonstration
            </h1>
            <p className="text-light leading-relaxed">
              Access is limited to invited partners. Enter the demo password provided by Lucid Tech to continue.
            </p>
          </div>

          <Suspense fallback={<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center text-muted text-sm">Loading…</div>}>
            <LoginForm />
          </Suspense>

          <div className="mt-8 text-center">
            <div className="text-xs text-muted leading-relaxed">
              For access inquiries, contact{" "}
              <a href="mailto:info@webdesignpros365.com" className="text-gold hover:underline">
                Lucid Tech LLC
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-ink/60">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
            Confidential · Lucid Tech LLC
          </div>
          <div className="text-xs text-muted">
            U.S. Provisional Patent Application Filed.
          </div>
        </div>
      </footer>
    </main>
  );
}
