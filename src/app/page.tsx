export default function Home() {
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
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#platform" className="text-muted hover:text-text transition-colors">Platform</a>
            <a href="#flywheel" className="text-muted hover:text-text transition-colors">Data Flywheel</a>
            <a href="#team" className="text-muted hover:text-text transition-colors">Team</a>
            <a href="#contact" className="px-4 py-1.5 rounded border border-gold/40 text-gold hover:bg-gold/10 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden blueprint-bg particles">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
            MotherLode CMI
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
            Per-site critical-minerals intelligence across the entire mining-active United States.
          </h1>
          <p className="text-lg md:text-xl text-light max-w-3xl mx-auto leading-relaxed">
            MotherLode CMI integrates AI with comprehensive historical mining records, federal and state databases, and modern geological data to predict per-site critical-minerals content at fidelity not previously available, at speeds measured in hours instead of months.
          </p>
        </div>
      </section>

      {/* Quantified Savings strip */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-surface/40 via-surface2/40 to-surface/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">6 to 8 months</div>
              <div className="text-sm text-muted">Per-site analysis time using legacy methods</div>
            </div>
            <div className="md:border-x md:border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">Hours</div>
              <div className="text-sm text-muted">Per-site analysis time with MotherLode CMI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-muted">Of mining-active United States covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Resolves the per-site data gap that holds back domestic critical-minerals development.
          </h2>
          <p className="text-lg text-light leading-relaxed mb-6 max-w-4xl">
            Historical mining operations from 1850 through the late twentieth century assayed only the primary commodity: gold, copper, silver, lead. Critical minerals such as rare earth elements, cobalt, lithium, gallium, germanium, antimony, and tellurium were typically discarded with the tailings or never measured at all. Modern surveys reach roughly five percent of the country. The data exists. It has never been integrated.
          </p>
          <p className="text-lg text-light leading-relaxed max-w-4xl">
            The platform combines AI-driven extraction of legacy mining records, multi-spectral satellite analysis, era-specific recovery efficiency modeling, and cross-site pattern matching to produce per-site bycatch predictions with confidence intervals, directly usable by program managers, state geological surveys, and operators.
          </p>
        </div>
      </section>

      {/* Five Layers */}
      <section id="platform" className="py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Five integrated layers that turn historical mining data into actionable intelligence.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="National Critical Minerals Heatmap"
              body="Color-coded national map of every documented mineral extraction site, ranked by predicted critical-minerals content per category. Filterable by state, era, primary commodity, claim status, and regulatory framework."
            />
            <FeatureCard
              title="Bycatch Prediction Engine"
              body="Per-site predictive model with confidence intervals for rare earth elements, cobalt, lithium, nickel, gallium, germanium, antimony, tellurium, and other federally designated critical minerals."
            />
            <FeatureCard
              title="Grant-Ready Reports"
              body="One-click pre-formatted reports including site characterization, bycatch potential, reprocessing economics, ESG framework, regulatory pathway, and comparable-site case studies. Designed for direct submission alignment."
            />
            <FeatureCard
              title="Coordinator Dashboard"
              body="Single-pane view for program managers and state geological surveys. Tracks sites under evaluation, sites funded, sites in production, and outcomes per state. Cross-references domestic supply gap data to surface highest-priority opportunities."
            />
            <FeatureCard
              title="Reprocessing Pathway Integration"
              body="Tight integration with separately patent-pending mercury and heavy-metal sequestration technology, enabling end-to-end remediation-and-recovery pathway design for sites with legacy contamination."
            />
            <FeatureCard
              title="Cross-Cluster Novel Site Discovery"
              body="Geological signature matching identifies undiscovered analogs to historically productive clusters. Surfaces high-potential sites that are absent from existing databases. Patent pending."
            />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Speed, coverage, technical depth, patent protection, and a system that compounds with use.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <SmallCard
              title="Speed"
              body="Predictive intelligence per site in hours instead of months. Confidence intervals tighten as field outcomes feed back into the model."
            />
            <SmallCard
              title="Coverage"
              body="Where modern surveys reach roughly five percent of the country, MotherLode CMI's historical-record integration covers the entire mining-active United States."
            />
            <SmallCard
              title="Technical Depth"
              body="Multi-modal integration of historical assay records, geological signatures, era-specific recovery modeling, and modern satellite data. None of which exists in a single system today."
            />
            <SmallCard
              title="Patent Protected"
              body="U.S. Provisional Patent Application Filed. Multiple novel mechanisms protected, including AI-scored mineral reactivation potential, cross-era price arbitrage, integrated remediation-pathway generation, and cross-cluster discovery."
            />
            <SmallCard
              title="Compounds With Use"
              body="The system improves with every site evaluated. Partners benefit from a tool that becomes more accurate the more it is deployed across the network."
            />
          </div>
        </div>
      </section>

      {/* The Data Flywheel */}
      <section id="flywheel" className="py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-6">
            The Data Flywheel
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            A verification network that compounds the moat with every deployment.
          </h2>
          <p className="text-lg text-light leading-relaxed mb-10 max-w-4xl">
            Every operator who deploys MotherLode CMI on a site generates ground-truth data: actual assay results, observed recovery efficiencies, encountered contamination, real-world economics. Verified field outcomes feed back into the model, tightening confidence intervals per category, refining era-specific recovery functions, and improving cross-cluster signature matching.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FlywheelStep
              num="1"
              title="Verified field outcomes flow in"
              body="Operators contribute confirmed assay results, recovery efficiency, contamination encountered, and post-extraction economics through a verified-contributor framework."
            />
            <FlywheelStep
              num="2"
              title="The model tightens"
              body="Confidence intervals narrow. Recovery functions per era and per geological context recalibrate. Cross-cluster signature matching becomes more discriminating."
            />
            <FlywheelStep
              num="3"
              title="Every subsequent site benefits"
              body="The next operator evaluating a comparable site receives sharper predictions, better economics, and a stronger grant-ready report than the operator before them."
            />
          </div>
          <p className="text-base text-muted leading-relaxed mt-10 max-w-4xl">
            This is the data nobody else has. Federal databases hold the historical records. Modern surveys hold the contemporary geology. Operators hold the ground-truth. MotherLode CMI is the first system to integrate all three with a feedback loop that compounds across deployments.
          </p>
        </div>
      </section>

      {/* Beyond Known Sites */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-6">
            Beyond Known Sites
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Cross-cluster signature matching identifies sites no one has discovered yet.
          </h2>
          <p className="text-lg text-light leading-relaxed mb-6 max-w-4xl">
            The platform extracts geological, geochemical, and structural signatures from historically productive mining clusters. It then scans the broader mining-active landscape for areas that share those signatures but were never developed, never recorded, or never assayed for critical minerals.
          </p>
          <p className="text-lg text-light leading-relaxed mb-6 max-w-4xl">
            The result is a new class of opportunity: high-potential sites that are absent from federal databases, absent from state inventories, and absent from every commercial mining intelligence product on the market. They exist in the data, just not in anyone's index.
          </p>
          <p className="text-base text-muted leading-relaxed max-w-4xl">
            This capability is patent pending and is unique to MotherLode CMI.
          </p>
        </div>
      </section>

      {/* Team & Advisors */}
      <section id="team" className="py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Domain credibility paired with engineering execution.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Corey */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.06] transition-colors">
              <h3 className="text-2xl font-bold mb-1">Larry Corey Strange</h3>
              <div className="text-gold font-semibold text-sm mb-1">Founder and Chief Technology Officer</div>
              <div className="text-muted text-xs uppercase tracking-wider mb-4">Lucid Tech LLC</div>
              <p className="text-light text-base leading-relaxed mb-5">
                Twenty-plus year technology operator and inventor. Founder of Lucid Tech LLC and the Adaptive Compound Intelligence (ACI) framework. Lead architect of the MotherLode CMI platform.
              </p>

              <div className="mb-4">
                <h4 className="text-gold text-xs font-bold uppercase tracking-[0.18em] mb-2">Patents and Intellectual Property</h4>
                <ul className="space-y-1.5 text-sm text-light">
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Fourteen-plus U.S. utility patents filed across a twenty-year career</li>
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>MotherLode CMI, U.S. Provisional Patent Application Filed</li>
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>ACI Non-Provisional U.S. Utility Patent #19/680,696, filed 2026-05-18</li>
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>ACI Provisional Filing #63/987,765, filed 2026-02-21</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-gold text-xs font-bold uppercase tracking-[0.18em] mb-2">Operating Companies</h4>
                <ul className="space-y-1.5 text-sm text-light">
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Founder, AppStudioPro (twenty-person full-stack engineering organization)</li>
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Founder, Web Design Pros 365 (BBB Accredited, A rating)</li>
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Founder, Mobile Computer Specialists (Google 4.8 rating, BBB A+, Three Best Rated 2026 Top Three)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gold text-xs font-bold uppercase tracking-[0.18em] mb-2">Education and Recognition</h4>
                <ul className="space-y-1.5 text-sm text-light">
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Oxford University AI Program, Top 1% of cohort, completed 2026</li>
                  <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Seventeen years of continuous operating record across three companies</li>
                </ul>
              </div>
            </article>

            {/* Douglas */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="text-2xl font-bold mb-1">Douglas B. Chrisey, Ph.D.</h3>
              <div className="text-gold font-semibold text-sm mb-1">Jung Chair of Materials Engineering, Tulane University</div>
              <div className="text-muted text-xs mb-4">Co-owner, MotherLode CMI</div>
              <p className="text-light text-base leading-relaxed mb-4">
                Professor of Physics and Engineering Physics at Tulane University, with adjunct appointment in Biomedical Engineering. Career spans seventeen years at the U.S. Naval Research Laboratory as Head of the Laser Processing Section, Deputy Director of the North Dakota State University Center for Nanoscale Science and Engineering, and Full Professor of Materials Science and Biomedical Engineering at Rensselaer Polytechnic Institute.
              </p>
              <ul className="space-y-2 text-sm text-light mb-4">
                <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>B.S. Physics, State University of New York at Binghamton, 1983</li>
                <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Ph.D. Engineering Physics, University of Virginia, 1987</li>
                <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Former Head of Laser Processing, U.S. Naval Research Laboratory</li>
                <li className="flex gap-3"><span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>Jung Chair of Materials Engineering, Tulane University</li>
              </ul>
              <a
                href="https://scholar.google.com/citations?user=BB4LmmkAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
              >
                Google Scholar profile →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Built for the institutions advancing domestic critical-minerals supply.
          </h2>
          <p className="text-lg text-light leading-relaxed max-w-3xl mx-auto">
            We are actively engaging program managers, state geological surveys, university research partners, and operators advancing domestic critical-minerals supply.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            If your work touches the per-site critical-minerals gap, we welcome a discussion.
          </h2>
          <p className="text-lg text-light leading-relaxed mb-10 max-w-2xl mx-auto">
            For program inquiries, partnership conversations, and access requests, reach out directly.
          </p>
          <a
            href="mailto:info@motherlodecmi.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-gold to-copper text-ink font-semibold hover:opacity-90 transition-opacity"
          >
            info@motherlodecmi.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <div className="text-sm text-muted mb-2">
            MotherLode CMI is a product of <a href="https://lucidtechlabsllc.com" className="text-gold hover:underline">Lucid Tech LLC</a>.
          </div>
          <div className="text-xs text-muted">
            © {new Date().getFullYear()} Lucid Tech LLC. All rights reserved. U.S. Provisional Patent Application Filed.
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] transition-colors">
      <h3 className="text-lg font-bold mb-3 text-gold">{title}</h3>
      <p className="text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}

function SmallCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <h3 className="text-base font-bold mb-2 text-gold">{title}</h3>
      <p className="text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}

function FlywheelStep({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-gold/20 bg-gradient-to-b from-white/[0.04] to-transparent p-7">
      <div className="text-3xl font-bold text-gold mb-3">{num}</div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}
