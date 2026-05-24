import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclosures — MotherLode CMI",
  description: "Disclosures regarding the MotherLode CMI platform and outputs.",
};

export default function DisclosuresPage() {
  return (
    <main className="relative min-h-screen text-text">
      <header className="sticky top-0 z-50 backdrop-blur bg-ink/70 border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-gold to-copper flex items-center justify-center">
              <span className="text-ink font-bold text-sm">M</span>
            </div>
            <span className="font-semibold tracking-tight">MotherLode CMI</span>
          </Link>
          <Link href="/" className="text-sm text-muted hover:text-text transition-colors">← Back to home</Link>
        </nav>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-sm text-muted uppercase tracking-wider mb-4">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Disclosures</h1>
        <p className="text-muted mb-12">Effective Date: May 24, 2026</p>

        <Section title="Forward-Looking Statements">
          <p>
            Material on this site may include forward-looking statements regarding the capabilities, roadmap, partnerships, and commercial outcomes of the MotherLode CMI platform. Forward-looking statements reflect current expectations and assumptions and are not guarantees of future results. Actual outcomes may differ materially.
          </p>
        </Section>

        <Section title="Intellectual Property and Patents">
          <p>
            One or more U.S. provisional patent applications have been filed in connection with the MotherLode CMI platform and its constituent methods. References to &quot;patent pending&quot; or &quot;patent protected&quot; relate to those applications and to additional applications that may be filed. Provisional applications do not themselves constitute issued patents and remain subject to the standard U.S. examination process.
          </p>
        </Section>

        <Section title="Outputs Are Informational">
          <p>
            Predictions, confidence intervals, reports, dashboards, and other outputs of the platform are decision-support information. They are not professional engineering, geological, environmental, legal, financial, or regulatory advice. Decisions based on the outputs are the responsibility of the user and should be validated against on-site data, professional judgment, and applicable regulations.
          </p>
        </Section>

        <Section title="Demonstration Material">
          <p>
            Restricted demonstrations may display synthetic, illustrative, or partial data intended to communicate platform capability. Demonstration outputs do not represent final commercial deliverables and should not be relied upon for operational decisions.
          </p>
        </Section>

        <Section title="No Solicitation of Investment">
          <p>
            Nothing on this site constitutes an offer to sell, or a solicitation of an offer to buy, securities or other investment products. Any future investment opportunity will be conducted through appropriate channels and subject to applicable securities laws.
          </p>
        </Section>

        <Section title="Affiliations">
          <p>
            Named team members and advisors are listed in their individual or institutional capacity as identified. Listing of a person or institution does not constitute an endorsement by that institution unless expressly stated. Where institutional roles or appointments are referenced, the platform itself is operated by Lucid Tech LLC.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions regarding these disclosures can be directed to <a href="mailto:info@webdesignpros365.com" className="text-gold hover:underline">info@webdesignpros365.com</a>.
          </p>
        </Section>
      </article>

      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-gold">{title}</h2>
      <div className="text-light text-base leading-relaxed space-y-4 [&_a]:text-gold [&_a]:hover:underline">
        {children}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <div className="text-sm text-muted mb-2">
          MotherLode CMI is a product of <a href="https://lucidtechlabsllc.com" className="text-gold hover:underline">Lucid Tech LLC</a>.
        </div>
        <div className="text-xs text-muted">
          © {new Date().getFullYear()} Lucid Tech LLC. All rights reserved. U.S. Provisional Patent Application Filed.
        </div>
        <div className="text-xs text-muted mt-4 flex items-center justify-center gap-4">
          <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/disclosures" className="hover:text-gold transition-colors">Disclosures</Link>
        </div>
      </div>
    </footer>
  );
}
