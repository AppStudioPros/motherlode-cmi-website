import type { Metadata } from "next";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Compliance & Regulatory Posture | MotherLode CMI",
  description:
    "MotherLode CMI's regulatory and compliance framework for federal program managers, sovereign-tier counterparties, and operators.",
};

export default function CompliancePage() {
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
            <a href="/operators" className="text-muted hover:text-text transition-colors">Operators</a>
            <a href="/compliance" className="text-gold transition-colors">Compliance</a>
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
            Compliance &amp; Regulatory Posture
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5 sm:mb-6">
            Regulatory framework and compliance posture.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-light max-w-3xl leading-relaxed">
            MotherLode CMI operates under a federal-procurement-aware compliance framework. This page
            summarizes our posture for federal program managers, sovereign-tier counterparties, operators,
            and partner organizations evaluating engagement with the platform.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 space-y-10 sm:space-y-12">
          <ComplianceSection title="FinCEN and the Bank Secrecy Act">
            MotherLode CMI&rsquo;s Sourcing Network, when activated, includes Money Services Business (MSB)
            analysis under FinCEN guidance. Specialist legal counsel is engaged to scope the MSB posture
            applicable to each operational configuration of the network. Bank Secrecy Act (BSA) compliance
            program elements &mdash; including a designated compliance officer, written policies and procedures,
            ongoing training, and independent review &mdash; will be operational at Phase 1 launch of the
            transactional layer.
          </ComplianceSection>

          <ComplianceSection title="State precious-metals dealer licensing">
            Several U.S. states require licensing for any party facilitating physical precious-metals
            transactions. Our state-by-state analysis is under way with specialist counsel. Where applicable,
            we obtain dealer licensing prior to facilitating physical metal transactions in or through that
            jurisdiction. Operators participating in the network are independently responsible for their own
            state dealer licensing posture and are vetted on that requirement during onboarding.
          </ComplianceSection>

          <ComplianceSection title="OFAC sanctions screening">
            All counterparties &mdash; both supply-side and buy-side &mdash; are screened against the OFAC Specially
            Designated Nationals and Blocked Persons (SDN) list, OFAC sectoral sanctions lists, and
            jurisdiction-specific blocked-party lists at onboarding and on a continuous basis thereafter.
            Screening is operational from Phase 1 of any transactional functionality. Hits are reviewed by
            the compliance officer and escalated where appropriate to OFAC under licensed disclosure
            mechanisms.
          </ComplianceSection>

          <ComplianceSection title="AML and Know-Your-Customer (KYC)">
            The Sourcing Network requires KYC verification on every supply-side and buy-side participant.
            Verification includes entity-level KYC, beneficial-ownership KYC under the Corporate
            Transparency Act framework, source-of-funds attestation, and source-of-metal attestation where
            applicable. Anti-Money-Laundering (AML) attestations are generated by the platform from
            documentary input and screening output, hash-signed, and stored with the closed-deal audit
            trail. The KYC/AML stack is operational from Phase 1.
          </ComplianceSection>

          <ComplianceSection title="Chain-of-custody and provenance documentation">
            Every supply-side listing on the Sourcing Network is accompanied by chain-of-custody
            documentation: assay results, geographic origin, regulatory framework, prior-owner history,
            and (where applicable) DOE / DOD / ARPA-E or state critical-minerals funding flags. Documents
            are hash-signed and bound to the listing&rsquo;s identity record. Sovereign-tier counterparties receive
            full chain-of-custody packages as part of every closed deal.
          </ComplianceSection>

          <ComplianceSection title="Federal contractor and subcontractor posture">
            Lucid Tech LLC operates within an active federal contracting partnership. MotherLode CMI&rsquo;s
            product architecture reflects federal-procurement-aware design from inception &mdash; including
            audit-trail-complete output, methodology binding (every prediction traces back to its source
            records), and provenance documentation suitable for direct submission alignment with DOE,
            DOD, and other federal program reporting requirements. Federal contractor and subcontractor
            compliance obligations are honored as a matter of standard operating procedure.
          </ComplianceSection>

          <ComplianceSection title="Patent posture and intellectual property integrity">
            A U.S. Provisional Patent Application has been filed covering MotherLode CMI&rsquo;s integrated
            architecture: AI-driven identification of per-site critical-minerals content, confidence-scored
            outputs, real-world outcome feedback into the model, and the integrated provenance
            documentation framework. Continuation filing analysis is in progress with patent counsel to
            cover the expanded scope of the standalone intelligence/verification authority and the
            Sourcing Network architecture. Intellectual property integrity is core to the platform&rsquo;s
            value to federal and sovereign-tier counterparties.
          </ComplianceSection>

          <ComplianceSection title="Data handling and privacy">
            Supply-side and buy-side counterparties remain in control of their data. The platform stores
            KYC and AML documentation under the minimum-necessary principle, hash-signs documents for
            audit-trail integrity, and discloses identity only as required for closed-deal documentation.
            The platform does not sell counterparty data. Aggregated and anonymized behavioral data may
            be used internally to tighten the model and may be made available under explicit subscription
            agreements to federal program managers and institutional research subscribers in Phase 2.
          </ComplianceSection>

          <ComplianceSection title="Specialist legal counsel and ongoing review">
            MotherLode CMI engages specialist legal counsel for FinCEN/BSA, state precious-metals
            dealer licensing, OFAC screening operational design, federal contractor compliance, patent
            posture, and Sourcing Network architectural compliance. The compliance program is subject to
            ongoing review and refinement as the platform scales and as customer-set composition evolves.
          </ComplianceSection>
        </div>
      </section>

      {/* Closing block */}
      <section className="py-14 sm:py-20 md:py-24 bg-surface/30 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-5 sm:mb-6">
            Full compliance program operational at Phase 1 launch.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
            Inquiries from regulatory counterparties, federal program managers, and sovereign-tier
            counsel are welcome. Specialist legal review is ongoing; this page reflects the current posture
            and will be updated as the compliance program is formalized.
          </p>
          <a
            href="mailto:info@webdesignpros365.com?subject=MotherLode%20CMI%20%E2%80%94%20Compliance%20inquiry"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-gold to-copper text-ink font-semibold hover:opacity-90 transition-opacity break-all"
          >
            Compliance inquiry
          </a>
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
          </div>
        </div>
      </footer>
    </main>
  );
}

function ComplianceSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-3 sm:mb-4 text-gold">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-light leading-relaxed">{children}</p>
    </section>
  );
}
