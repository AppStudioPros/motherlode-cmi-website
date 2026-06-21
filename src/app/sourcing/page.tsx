import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "MotherLode Sourcing — Provenance-Grade Supply Network",
  description:
    "MotherLode Sourcing is the vetted, federally aligned, provenance-grade supply network for the U.S. critical-minerals supply chain build-out.",
  robots: { index: false, follow: false },
};

export default function SourcingPage() {
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
            <a href="/sourcing" className="text-gold transition-colors">Sourcing</a>
            <a href="/operators" className="text-muted hover:text-text transition-colors">Operators</a>
            <a href="/compliance" className="text-muted hover:text-text transition-colors">Compliance</a>
            <a href="/#team" className="text-muted hover:text-text transition-colors">Team</a>
            <a href="/#contact" className="px-4 py-1.5 rounded border border-gold/40 text-gold hover:bg-gold/10 transition-colors">Contact</a>
          </div>
          <MobileNav />
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden blueprint-bg particles">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-6 md:mb-8">
            MotherLode Sourcing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 md:mb-8">
            Provenance-grade supply for the federally funded critical-minerals supply chain.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-light max-w-3xl mx-auto leading-relaxed">
            A curated, vetted, federally aligned two-sided network connecting documented critical-minerals
            supply with funded buyers requiring provenance-grade chain of custody.
          </p>
        </div>
      </section>

      {/* What this is */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            What this is
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            Where the Marketplace meets federal-grade compliance.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-5 sm:mb-6 max-w-4xl mx-auto">
            The <a href="/marketplace" className="text-gold hover:underline">MotherLode Marketplace</a> connects buyers and sellers with scored listings and verified assays. MotherLode Sourcing is the elevated tier &mdash; purpose-built for the federally funded critical-minerals supply chain, where provenance documentation, compliance controls, and institutional-grade vetting are non-negotiable.
          </p>
          <p className="text-base sm:text-lg text-light leading-relaxed max-w-4xl mx-auto">
            Every listing is KYC verified, AML attested, OFAC screened, chain-of-custody documented, and
            beneficial-ownership traced. Identity isolation is built into the architecture from day one
            so sovereign-tier counterparties can participate when they choose to.
          </p>
        </div>
      </section>

      {/* Four components */}
      <section className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12 text-center">
            Four components, integrated into a single network.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={0}><ComponentCard
              num="01"
              title="Sourcing Pipeline"
              body="Curated supply intake with mandatory vetting: KYC + beneficial ownership verification, AML attestation, OFAC sanctions screening, state precious-metals dealer license verification (where applicable), and full chain-of-custody documentation. A funded-operator priority lane surfaces DOE, DOD, ARPA-E, and state critical-minerals awardees with expedited vetting and priority placement."
            /></Reveal>
            <Reveal delay={120}><ComponentCard
              num="02"
              title="Buyer Tier with Auction Mechanics"
              body="Tiered buyer registry with sealed-bid forward purchase and direct negotiation pathways. Phase 1 tiers: DOE-funded operators, DOE-cohort partners (federal labs, downstream processors), vetted refiners (regional, specialty, international). Sovereign-tier capability operational from day one in dormant state."
            /></Reveal>
            <Reveal delay={240}><ComponentCard
              num="03"
              title="Provenance Contracts"
              body="Multi-language closing layer with DOE-aware contract templates: US labor and origin attestations, DOE subcontract framework language, federal-funding traceability fields, AML/KYC attestation receipts, OFAC screening receipts, customs and export paperwork, settlement and escrow terms, hash-signed audit trail. English / Spanish / Mandarin / Portuguese / French / Arabic in Phase 1."
            /></Reveal>
            <Reveal delay={360}><ComponentCard
              num="04"
              title="Identity Isolation"
              body="Sovereign-grade buyer identity isolation built into the architecture from day one. Buyer category is exposed on bid posting; identity is revealed to seller only at acceptance under NDA terms baked into the contract package. Dormant in Phase 1; active when sovereign-tier counterparties participate."
            /></Reveal>
          </div>
        </div>
      </section>

      {/* Who Phase 1 serves */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            Phase 1 customer set
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            Federally funded operators, refiners, and program managers.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-4xl mx-auto">
            Phase 1 anchors on the federally funded U.S. critical-minerals supply chain &mdash; DOE
            Office of Critical Minerals awardees, their downstream operator and refiner partners, federal
            labs, and program managers running the funding mechanisms.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-7">
              <h3 className="text-lg font-bold mb-3 text-gold">Supply side</h3>
              <ul className="space-y-2 text-[15px] sm:text-sm text-light leading-relaxed">
                <li className="flex gap-2"><span className="text-gold flex-shrink-0">&bull;</span>DOE / DOD / ARPA-E awardees and their referred operators</li>
                <li className="flex gap-2"><span className="text-gold flex-shrink-0">&bull;</span>Operators with documented historical sites and credible bycatch potential</li>
                <li className="flex gap-2"><span className="text-gold flex-shrink-0">&bull;</span>Industrial waste-stream operators (tailings, red mud, e-waste, scrap)</li>
                <li className="flex gap-2"><span className="text-gold flex-shrink-0">&bull;</span>State precious-metals dealer-licensed counterparties</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-7">
              <h3 className="text-lg font-bold mb-3 text-gold">Buyer side</h3>
              <ul className="space-y-2 text-[15px] sm:text-sm text-light leading-relaxed">
                <li className="flex gap-2"><span className="text-gold flex-shrink-0">&bull;</span>DOE demonstration-facility awardees building feedstock pipelines</li>
                <li className="flex gap-2"><span className="text-gold flex-shrink-0">&bull;</span>Federal labs and downstream processors integrating supply</li>
                <li className="flex gap-2"><span className="text-gold flex-shrink-0">&bull;</span>Vetted regional and specialty refiners (REE, lithium, antimony, tellurium focus)</li>
                <li className="flex gap-2"><span className="text-gold flex-shrink-0">&bull;</span>Federal program managers (data-licensing tier, separate from transactional)</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Status + Contact */}
      <section className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            Status
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            In active customer development with the DOE demo-facility cohort.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
            Operator and refiner intake opens by request only during Phase 1 alpha. Federal program
            manager inquiries are welcome.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@webdesignpros365.com?subject=MotherLode%20Sourcing%20%E2%80%94%20Phase%201%20inquiry"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-gold to-copper text-ink font-semibold hover:opacity-90 transition-opacity break-all"
            >
              Phase 1 inquiry
            </a>
            <a
              href="/operators"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
            >
              For operators with documented supply &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <div className="text-sm text-muted mb-2">
            MotherLode Sourcing is a sub-product of MotherLode CMI, a product of{" "}
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

function ComponentCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-7 hover:bg-white/[0.07] hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-xs font-mono text-gold tracking-[0.18em]">{num}</span>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-[15px] sm:text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}
