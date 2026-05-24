import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MotherLode CMI",
  description: "Privacy policy for MotherLode CMI.",
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted mb-12">Effective Date: May 24, 2026</p>

        <Section title="1. Overview">
          <p>
            This Privacy Policy describes how Lucid Tech LLC (&quot;Lucid Tech,&quot; &quot;we,&quot; or &quot;us&quot;) collects, uses, and protects information in connection with the MotherLode CMI website and Services. We are committed to handling information responsibly and proportionately to the institutional and research context in which the Services are used.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>
            We collect the following categories of information:
          </p>
          <ul>
            <li>Information you provide directly (name, organization, email, role, and any messages or inquiries you submit)</li>
            <li>Information you provide as part of a restricted demonstration (institutional affiliation, project context, and demonstration interactions)</li>
            <li>Information collected automatically when you visit the site (IP address, browser type, device information, referring URL, and pages viewed)</li>
            <li>Standard server logs maintained for security, performance, and abuse-prevention purposes</li>
          </ul>
        </Section>

        <Section title="3. How We Use Information">
          <p>
            We use the information to:
          </p>
          <ul>
            <li>Operate, maintain, and improve the Services</li>
            <li>Respond to inquiries and provide requested information</li>
            <li>Authenticate and authorize access to restricted demonstrations</li>
            <li>Detect, investigate, and prevent fraudulent, abusive, or unauthorized activity</li>
            <li>Comply with legal obligations and enforce our Terms of Service</li>
          </ul>
        </Section>

        <Section title="4. Information Sharing">
          <p>
            We do not sell personal information. We share information only with:
          </p>
          <ul>
            <li>Service providers acting on our behalf under contractual confidentiality obligations (hosting, analytics, email)</li>
            <li>Authorized institutional partners with whom you have a legitimate engagement</li>
            <li>Authorities when required by law or to protect rights, safety, or property</li>
          </ul>
        </Section>

        <Section title="5. Cookies and Analytics">
          <p>
            The site may use cookies and similar technologies to remember preferences, maintain sessions, and collect aggregated usage analytics. You can disable cookies in your browser, though some features may not function as intended.
          </p>
        </Section>

        <Section title="6. Data Security">
          <p>
            The Services are served over HTTPS with current TLS standards. Restricted-demonstration access is gated by credentials. We maintain administrative, technical, and physical safeguards designed to protect information against unauthorized access, loss, or alteration. No system is perfectly secure; we make commercially reasonable efforts to protect information.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We retain information for as long as needed to provide the Services, comply with legal obligations, resolve disputes, and enforce agreements. When information is no longer required, we take reasonable steps to delete or anonymize it.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or limit our use of information about you. To exercise these rights, contact us at the email below. We will respond consistent with applicable law.
          </p>
        </Section>

        <Section title="9. International Use">
          <p>
            The Services are operated from the United States. By using the Services from outside the United States, you understand that information may be transferred to, stored in, and processed in the United States.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top of this page reflects the most recent revision. Material changes will be reasonably communicated.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Privacy questions can be directed to <a href="mailto:info@webdesignpros365.com" className="text-gold hover:underline">info@webdesignpros365.com</a>.
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
      <div className="text-light text-base leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-gold [&_a]:hover:underline">
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
