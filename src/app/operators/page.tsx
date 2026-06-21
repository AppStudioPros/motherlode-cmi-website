import type { Metadata } from "next";
import { OperatorIntakeForm } from "@/components/OperatorIntakeForm";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "For Operators | MotherLode CMI",
  description:
    "Operators with documented sites and credible supply can join the vetted MotherLode network through a request-only intake.",
  robots: { index: false, follow: false },
};

export default function OperatorsPage() {
  return (
    <main className="relative min-h-screen text-text">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-ink/70 border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-gold to-copper flex items-center justify-center">
              <span className="text-ink font-bold text-sm">M</span>
            </div>
            <span className="font-semibold tracking-tight">MotherLode CMI</span>
          </a>
          <div className="hidden md:flex items-center gap-6 lg:gap-7 text-sm">
            <a href="/#platform" className="text-muted hover:text-text transition-colors">Platform</a>
            <a href="/marketplace" className="text-muted hover:text-text transition-colors">Marketplace</a>
            <a href="/sourcing" className="text-muted hover:text-text transition-colors">Sourcing</a>
            <a href="/operators" className="text-gold transition-colors">Operators</a>
            <a href="/compliance" className="text-muted hover:text-text transition-colors">Compliance</a>
            <a href="/#team" className="text-muted hover:text-text transition-colors">Team</a>
            <a href="/#contact" className="px-4 py-1.5 rounded border border-gold/40 text-gold hover:bg-gold/10 transition-colors">Contact</a>
          </div>
          <MobileNav />
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden blueprint-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            For Operators
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5 sm:mb-6">
            Operators with documented sites and credible supply.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-light max-w-3xl leading-relaxed">
            MotherLode Sourcing is in Phase 1 alpha. Operator intake is request-only during this phase.
            If your operation has documented historical or active critical-minerals supply, request
            consideration below.
          </p>
        </div>
      </section>

      {/* Vetting + What You Provide */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gold">What we vet</h2>
              <ul className="space-y-3 text-[15px] sm:text-base text-light leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-bold">01</span>
                  <span>KYC verification including entity and beneficial ownership.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-bold">02</span>
                  <span>AML attestation including source-of-funds and source-of-metal.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-bold">03</span>
                  <span>OFAC sanctions screening at onboarding and continuously thereafter.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-bold">04</span>
                  <span>Chain-of-custody documentation including assay records, geographic origin, and prior-owner history.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-bold">05</span>
                  <span>State precious-metals dealer license verification where applicable.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-bold">06</span>
                  <span>Beneficial owner background check.</span>
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gold">What you provide</h2>
              <ul className="space-y-3 text-[15px] sm:text-base text-light leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">&bull;</span>
                  <span>Site documentation: location, operational period, regulatory framework, current claim status.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">&bull;</span>
                  <span>Assay records, where available. Modern or historical both accepted.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">&bull;</span>
                  <span>Proof of operational status: active production, reclamation phase, tailings reprocessing, or active permitting.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">&bull;</span>
                  <span>Federal funding flag if applicable: DOE, DOD, ARPA-E, state critical-minerals commission. Award ID where known.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">&bull;</span>
                  <span>Beneficial ownership disclosure willingness under standard KYC framework.</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-muted leading-relaxed">
                Federally funded operators (DOE / DOD / ARPA-E / state critical-minerals awardees) receive
                priority vetting and priority surfacing during Phase 1 alpha.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 sm:py-20 md:py-24 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            Request consideration
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            Operator intake.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            We respond within five business days. Submissions are treated confidentially. No information
            is shared with third parties without your explicit consent.
          </p>
          <OperatorIntakeForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <div className="text-sm text-muted mb-2">
            MotherLode CMI is a product of{" "}
            <a href="https://lucidtechlabsllc.com" className="text-gold hover:underline">Lucid Tech LLC</a>.
          </div>
          <div className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Lucid Tech LLC. All rights reserved. U.S. Provisional Patent Application Filed.
          </div>
          <div className="text-xs text-muted mt-4 flex items-center justify-center gap-4">
            <a href="/terms" className="hover:text-gold transition-colors">Terms of Service</a>
            <span>&middot;</span>
            <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>&middot;</span>
            <a href="/disclosures" className="hover:text-gold transition-colors">Disclosures</a>
            <span>&middot;</span>
            <a href="/compliance" className="hover:text-gold transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
