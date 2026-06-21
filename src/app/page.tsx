import { Reveal } from "@/components/Reveal";
import { MobileNav } from "@/components/MobileNav";

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
          <div className="hidden md:flex items-center gap-6 lg:gap-7 text-sm">
            <a href="#platform" className="text-muted hover:text-text transition-colors">Platform</a>
            <a href="/sourcing" className="text-muted hover:text-text transition-colors">Sourcing</a>
            <a href="/operators" className="text-muted hover:text-text transition-colors">Operators</a>
            <a href="/compliance" className="text-muted hover:text-text transition-colors">Compliance</a>
            <a href="#team" className="text-muted hover:text-text transition-colors">Team</a>
            <a href="#contact" className="px-4 py-1.5 rounded border border-gold/40 text-gold hover:bg-gold/10 transition-colors">Contact</a>
          </div>
          <MobileNav />
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden blueprint-bg particles">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 pt-16 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-28 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-6 md:mb-8">
            Patent Filed &mdash; Lucid Tech LLC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 md:mb-8">
            America has trillions in critical minerals sitting in abandoned mines.<br className="hidden md:block" /> We score every one of them.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-light max-w-3xl mx-auto leading-relaxed mb-4">
            MotherLode CMI uses AI to analyze every documented mine site in the United States &mdash; combining 175 years of historical mining records, satellite data, and modern recovery economics to tell you exactly what critical minerals are still in the ground, what they&rsquo;re worth, and what it would take to get them out.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-light max-w-3xl mx-auto leading-relaxed">
            One site analysis used to take a geologist six to eight months. We do it in hours. For every site in the country.
          </p>
        </div>
      </section>

      {/* Quantified Savings strip */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-surface/40 via-surface2/40 to-surface/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="pb-6 md:pb-0 border-b border-white/10 md:border-b-0">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">300K+</div>
              <div className="text-sm text-muted">Mine sites scored</div>
            </div>
            <div className="pb-6 md:pb-0 border-b border-white/10 md:border-b-0 md:border-x md:border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">Hours</div>
              <div className="text-sm text-muted">Per-site analysis vs. 6&ndash;8 months legacy</div>
            </div>
            <div className="pb-6 md:pb-0 border-b border-white/10 md:border-b-0">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">50+</div>
              <div className="text-sm text-muted">Critical minerals tracked per site</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-muted">Mining-active United States covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Entry Points — give each visitor type a door right after the hero stats */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-4">
              Who this is for
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Where to start, by who you are.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Reveal delay={0}><AudienceCard
              tag="Federal"
              title="Federal program managers"
              body="DOE, DOD, ARPA-E, state critical-minerals commissions. Compliance posture, methodology, and a sample site report on demand."
              ctaLabel="Compliance &amp; sample report"
              ctaHref="/compliance"
            /></Reveal>
            <Reveal delay={100}><AudienceCard
              tag="Operators"
              title="Operators with documented supply"
              body="Active mines, tailings reprocessors, industrial waste-stream operators. Request consideration for the vetted Sourcing Network alpha."
              ctaLabel="Operator intake"
              ctaHref="/operators"
            /></Reveal>
            <Reveal delay={200}><AudienceCard
              tag="Refiners"
              title="Refiners &amp; downstream processors"
              body="Regional, specialty, and international refiners building integrated feedstock pipelines under provenance documentation."
              ctaLabel="Sourcing Network"
              ctaHref="/sourcing"
            /></Reveal>
            <Reveal delay={300}><AudienceCard
              tag="Capital"
              title="Investors &amp; capital partners"
              body="Patent-protected platform, federal-aligned positioning, compounding data moat. Direct inquiries to the team."
              ctaLabel="Reach the team"
              ctaHref="mailto:info@webdesignpros365.com?subject=MotherLode%20CMI%20%E2%80%94%20Investor%20inquiry"
            /></Reveal>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            Resolves the per-site data gap that holds back domestic critical-minerals development.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-5 sm:mb-6 max-w-4xl">
            Historical mining operations from 1850 through the late twentieth century assayed only the primary commodity: gold, copper, silver, lead. Critical minerals such as rare earth elements, cobalt, lithium, gallium, germanium, antimony, and tellurium were typically discarded with the tailings or never measured at all. Modern surveys reach roughly five percent of the country. The data exists. It has never been integrated.
          </p>
          <p className="text-base sm:text-lg text-light leading-relaxed max-w-4xl">
            The platform combines AI-driven extraction of legacy mining records, multi-spectral satellite analysis, era-specific recovery efficiency modeling, and cross-site pattern matching to produce per-site bycatch predictions with confidence intervals, directly usable by program managers, state geological surveys, and operators.
          </p>
        </div>
      </section>

      {/* Five Layers */}
      <section id="platform" className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12 text-center">
            Five integrated layers that turn historical mining data into actionable intelligence.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={0}><FeatureCard
              title="National Critical Minerals Heatmap"
              body="Color-coded national map of every documented mineral extraction site, ranked by predicted critical-minerals content per category. Filterable by state, era, primary commodity, claim status, and regulatory framework."
            /></Reveal>
            <Reveal delay={80}><FeatureCard
              title="Bycatch Prediction Engine"
              body="Per-site predictive model with confidence intervals for rare earth elements, cobalt, lithium, nickel, gallium, germanium, antimony, tellurium, and other federally designated critical minerals."
            /></Reveal>
            <Reveal delay={160}><FeatureCard
              title="Grant-Ready Reports"
              body="One-click pre-formatted reports including site characterization, bycatch potential, reprocessing economics, ESG framework, regulatory pathway, and comparable-site case studies. Designed for direct submission alignment."
            /></Reveal>
            <Reveal delay={240}><FeatureCard
              title="Coordinator Dashboard"
              body="Single-pane view for program managers and state geological surveys. Tracks sites under evaluation, sites funded, sites in production, and outcomes per state. Cross-references domestic supply gap data to surface highest-priority opportunities."
            /></Reveal>
            <Reveal delay={320}><FeatureCard
              title="Reprocessing Pathway Integration"
              body="Tight integration with separately patent-pending mercury and heavy-metal sequestration technology, enabling end-to-end remediation-and-recovery pathway design for sites with legacy contamination."
            /></Reveal>
            <Reveal delay={400}><FeatureCard
              title="Cross-Cluster Novel Site Discovery"
              body="Geological signature matching identifies undiscovered analogs to historically productive clusters. Surfaces high-potential sites that are absent from existing databases. Patent pending."
            /></Reveal>
          </div>
        </div>
      </section>

      {/* Federal Alignment — V2 positioning: signals federal-cohort awareness without name-dropping awardees */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            Federal Alignment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            Aligned with the federal critical-minerals supply-chain build-out.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-5 sm:mb-6 max-w-4xl">
            U.S. critical-minerals policy is now actively funding the recovery of rare earth elements
            and other federally designated critical minerals from unconventional feedstocks &mdash; mine
            tailings, red mud, industrial scrap, and other waste streams the legacy assay record never
            measured.
          </p>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-4xl">
            MotherLode CMI is the upstream intelligence layer for that build-out. Per-site predictions
            with confidence intervals, sourced from an integrated corpus the federally funded cohort
            cannot assemble on its own, defensible under DOE and DOD program-manager scrutiny.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}><FederalCard
              title="Programs we track"
              items={[
                'DOE Office of Critical Minerals and Energy Innovation',
                'DOE Manufacturing Deployment Office',
                'DPA Title III critical-minerals awards',
                'ARPA-E adjacent funding mechanisms',
              ]}
            /></Reveal>
            <Reveal delay={120}><FederalCard
              title="What we contribute"
              items={[
                'Per-site intelligence on unconventional feedstocks',
                'Provenance-grade chain-of-custody framework',
                'DOE-defensible audit trail on every prediction',
                'Cross-cluster discovery of analog feedstock sites',
              ]}
            /></Reveal>
            <Reveal delay={240}><FederalCard
              title="Where the network goes next"
              items={[
                'Vetted-supply pipeline for federally funded operators',
                'Government data licensing API',
                'Investor due-diligence reports',
                'Sovereign-tier identity isolation (dormant, architected in)',
              ]}
            /></Reveal>
          </div>
          <p className="text-sm sm:text-base text-muted leading-relaxed mt-8 sm:mt-10 max-w-4xl">
            Inquiries from federal program managers and demonstration-facility awardees:{' '}
            <a href="#contact" className="text-gold hover:underline">please reach out directly</a>.
          </p>
        </div>
      </section>

      {/* Coverage at a Glance — visual answer to 'does this work across the whole country?' */}
      <section className="py-14 sm:py-20 md:py-24 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-4">
              Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              National scope, per-site precision.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <Reveal delay={0}><CoverageStat
              big="100%"
              label="Mining-active United States"
              sub="Every documented mineral extraction site, every state, every era from 1850 forward."
            /></Reveal>
            <Reveal delay={100}><CoverageStat
              big="8"
              label="Federally designated critical minerals"
              sub="REE, cobalt, lithium, gallium, germanium, antimony, tellurium, nickel."
            /></Reveal>
            <Reveal delay={200}><CoverageStat
              big="5"
              label="Era-specific recovery models"
              sub="From 19th-century stamp milling through modern flotation and leach circuits."
            /></Reveal>
            <Reveal delay={300}><CoverageStat
              big="12"
              label="Sites in active demo"
              sub="Live walkthroughs available on the demo. Production coverage scales nationwide."
            /></Reveal>
          </div>
        </div>
      </section>

      {/* Sample Output — worked example so visitors see what the platform actually produces */}
      <section className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            Sample Output
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            One site, three critical minerals, ranges instead of guesses.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-4xl">
            Below is the actual MotherLode CMI output for a single representative site from the live
            demo dataset. Every line is generated from the integrated corpus described above, with
            confidence bands carried through to the predicted values.
          </p>

          <Reveal delay={0}>
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm overflow-hidden">
              {/* Header bar */}
              <div className="px-6 sm:px-8 py-5 border-b border-white/10 bg-gold/5">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-gold mb-1">Site Report · Sample</div>
                    <h3 className="text-xl sm:text-2xl font-bold">Lamartine Mine</h3>
                    <div className="text-sm text-muted mt-1">Empire, Colorado · 39.7589, &minus;105.6783 · Operational 1869&ndash;1934</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted mb-1">Redig Potential</div>
                    <div className="text-3xl font-bold text-gold leading-none">82<span className="text-base text-muted font-normal"> / 100</span></div>
                  </div>
                </div>
              </div>

              {/* Predicted critical-minerals bycatch */}
              <div className="px-6 sm:px-8 py-6">
                <div className="text-xs uppercase tracking-[0.18em] text-gold mb-4">Predicted Critical-Minerals Bycatch</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="font-bold text-base">Germanium</div>
                      <div className="text-xs text-muted">Ge</div>
                    </div>
                    <div className="text-2xl font-bold text-gold mb-1">12&ndash;40 g/t</div>
                    <div className="text-xs text-muted mb-3">85% confidence band</div>
                    <div className="text-[13px] text-light leading-relaxed">
                      Sphalerite-hosted germanium consistent with the Front Range polymetallic belt. Historically discarded with zinc.
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="font-bold text-base">Gallium</div>
                      <div className="text-xs text-muted">Ga</div>
                    </div>
                    <div className="text-2xl font-bold text-gold mb-1">Trace</div>
                    <div className="text-xs text-muted mb-3">72% confidence band</div>
                    <div className="text-[13px] text-light leading-relaxed">
                      Associated with the sulfide ore body. Recoverable in the same flotation pathway used for the primary zinc concentrate.
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="font-bold text-base">Tellurium</div>
                      <div className="text-xs text-muted">Te</div>
                    </div>
                    <div className="text-2xl font-bold text-gold mb-1">Possible</div>
                    <div className="text-xs text-muted mb-3">61% confidence band</div>
                    <div className="text-[13px] text-light leading-relaxed">
                      Indicated by cross-cluster signature match with Central City tellurides; not directly assayed in historical records.
                    </div>
                  </div>
                </div>
              </div>

              {/* Source attribution row */}
              <div className="px-6 sm:px-8 py-5 border-t border-white/10 bg-white/[0.02]">
                <div className="text-xs uppercase tracking-[0.18em] text-gold mb-3">Sources Combined In This Prediction</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-light">
                  <li className="flex gap-2"><span className="text-gold">•</span>USGS Mineral Resources Data System (MRDS)</li>
                  <li className="flex gap-2"><span className="text-gold">•</span>Colorado Geological Survey historical assay records</li>
                  <li className="flex gap-2"><span className="text-gold">•</span>Front Range polymetallic-belt cluster signatures</li>
                  <li className="flex gap-2"><span className="text-gold">•</span>Sentinel-2 multi-spectral satellite analysis (modern era)</li>
                </ul>
              </div>

              {/* Footer CTA row */}
              <div className="px-6 sm:px-8 py-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-muted">
                  Sample output for partner conversations. Full reports include reprocessing economics, ESG framework, and regulatory pathway.
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/sample-report.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm font-semibold whitespace-nowrap"
                  >
                    📄 Download sample PDF
                  </a>
                  <a
                    href="/demo"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gold to-copper text-ink font-semibold hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
                  >
                    Try the live demo →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI Methodology — Doug's 'sizzle' note: explain the AI without giving away the moat */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            AI Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            How the AI layer activates the data corpus.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-4xl">
            The AI is the activation layer on top of the integrated data corpus. Each layer is
            patent-anchored, audit-trail-complete, and bound to a published methodology so partners
            can verify every prediction back to its source records.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={0}><AiMethodCard
              num="01"
              title="Extraction"
              body="Purpose-trained language models read century-old assay reports, drill logs, and state geological survey notes; convert unstructured text and tables into normalized assay records with per-field confidence scores."
            /></Reveal>
            <Reveal delay={120}><AiMethodCard
              num="02"
              title="Pattern Matching"
              body="A geological-signature embedding model places each documented site in a high-dimensional feature space. Cross-cluster analogs surface in seconds; novel-site discovery falls out of the same index."
            /></Reveal>
            <Reveal delay={240}><AiMethodCard
              num="03"
              title="Reasoning"
              body="A patent-anchored AI agent combines extracted assay data, cross-site signatures, era-specific recovery efficiency models, and modern multi-spectral signals into per-site predictions with confidence intervals."
            /></Reveal>
            <Reveal delay={360}><AiMethodCard
              num="04"
              title="Auditability"
              body="Every prediction traces back to its source records. The agent is methodology-bound and cannot cite sources it does not have. No hallucination, no drift, no black-box outputs that program managers cannot defend."
            /></Reveal>
          </div>
          <p className="text-sm sm:text-base text-muted leading-relaxed mt-8 sm:mt-10 max-w-4xl">
            The AI is the sizzle. The integrated data corpus and patent-anchored methodology are the
            steak. Both are required; neither is sufficient on its own.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12 text-center">
            Speed, coverage, technical depth, patent protection, and a system that compounds with use.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Reveal delay={0}><SmallCard
              title="Speed"
              body="Predictive intelligence per site in hours instead of months. Confidence intervals tighten as field outcomes feed back into the model."
            /></Reveal>
            <Reveal delay={80}><SmallCard
              title="Coverage"
              body="Where modern surveys reach roughly five percent of the country, MotherLode CMI's historical-record integration covers the entire mining-active United States."
            /></Reveal>
            <Reveal delay={160}><SmallCard
              title="Technical Depth"
              body="Multi-modal integration of historical assay records, geological signatures, era-specific recovery modeling, and modern satellite data. None of which exists in a single system today."
            /></Reveal>
            <Reveal delay={240}><SmallCard
              title="Patent Protected"
              body="U.S. Provisional Patent Application Filed. Multiple novel mechanisms protected, including AI-scored mineral reactivation potential, cross-era price arbitrage, integrated remediation-pathway generation, and cross-cluster discovery."
            /></Reveal>
            <Reveal delay={320}><SmallCard
              title="Compounds With Use"
              body="The system improves with every site evaluated. Partners benefit from a tool that becomes more accurate the more it is deployed across the network."
            /></Reveal>
          </div>
        </div>
      </section>

      {/* The Data Flywheel */}
      <section id="flywheel" className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            The Data Flywheel
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            A verification network that compounds the moat with every deployment.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-4xl">
            Every operator who deploys MotherLode CMI on a site generates ground-truth data: actual assay results, observed recovery efficiencies, encountered contamination, real-world economics. Verified field outcomes feed back into the model, tightening confidence intervals per category, refining era-specific recovery functions, and improving cross-cluster signature matching.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}><FlywheelStep
              num="1"
              title="Verified field outcomes flow in"
              body="Operators contribute confirmed assay results, recovery efficiency, contamination encountered, and post-extraction economics through a verified-contributor framework."
            /></Reveal>
            <Reveal delay={150}><FlywheelStep
              num="2"
              title="The model tightens"
              body="Confidence intervals narrow. Recovery functions per era and per geological context recalibrate. Cross-cluster signature matching becomes more discriminating."
            /></Reveal>
            <Reveal delay={300}><FlywheelStep
              num="3"
              title="Every subsequent site benefits"
              body="The next operator evaluating a comparable site receives sharper predictions, better economics, and a stronger grant-ready report than the operator before them."
            /></Reveal>
          </div>
          <p className="text-sm sm:text-base text-muted leading-relaxed mt-8 sm:mt-10 max-w-4xl">
            This is the data nobody else has. Federal databases hold the historical records. Modern surveys hold the contemporary geology. Operators hold the ground-truth. MotherLode CMI is the first system to integrate all three with a feedback loop that compounds across deployments.
          </p>
        </div>
      </section>

      {/* Beyond Known Sites */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            Beyond Known Sites
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            Cross-cluster signature matching identifies sites no one has discovered yet.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-5 sm:mb-6 max-w-4xl">
            The platform extracts geological, geochemical, and structural signatures from historically productive mining clusters. It then scans the broader mining-active landscape for areas that share those signatures but were never developed, never recorded, or never assayed for critical minerals.
          </p>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-5 sm:mb-6 max-w-4xl">
            The result is a new class of opportunity: high-potential sites that are absent from federal databases, absent from state inventories, and absent from every commercial mining intelligence product on the market. They exist in the data, just not in anyone's index.
          </p>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-4xl">
            This capability is patent pending and is unique to MotherLode CMI.
          </p>
        </div>
      </section>

      {/* Team & Advisors */}
      <section id="team" className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12 text-center">
            Domain credibility paired with engineering execution.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Corey */}
            <Reveal delay={0}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 hover:bg-white/[0.06] transition-colors">
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
            </Reveal>

            {/* Douglas */}
            <Reveal delay={150}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:bg-white/[0.05] transition-colors">
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            Built for the institutions advancing domestic critical-minerals supply.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed max-w-3xl mx-auto">
            We are actively engaging program managers, state geological surveys, university research partners, and operators advancing domestic critical-minerals supply.
          </p>
        </div>
      </section>

      {/* Federal Signals strip — lightweight institutional credibility band above the contact section */}
      <section className="py-10 sm:py-14 border-t border-gold/15 bg-gradient-to-r from-surface/30 via-surface2/30 to-surface/30">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-gold/80 mb-4">
            Federal programs we actively track
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-light">
            <span>DOE Office of Critical Minerals</span>
            <span className="text-gold/40">&middot;</span>
            <span>DOE Manufacturing Deployment Office</span>
            <span className="text-gold/40">&middot;</span>
            <span>DPA Title III critical-minerals awards</span>
            <span className="text-gold/40">&middot;</span>
            <span>ARPA-E adjacent funding mechanisms</span>
            <span className="text-gold/40">&middot;</span>
            <span>State critical-minerals commission RFPs</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            If your work touches the per-site critical-minerals gap, we welcome a discussion.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            For program inquiries, partnership conversations, and access requests, reach out directly.
          </p>
          <a
            href="mailto:info@webdesignpros365.com"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-gold to-copper text-ink font-semibold hover:opacity-90 transition-opacity break-all"
          >
            info@webdesignpros365.com
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
          <div className="text-xs text-muted mt-4 flex items-center justify-center gap-4">
            <a href="/terms" className="hover:text-gold transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="/disclosures" className="hover:text-gold transition-colors">Disclosures</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-7 hover:bg-white/[0.08] hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-lg font-bold mb-3 text-gold">{title}</h3>
      <p className="text-[15px] sm:text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}

function SmallCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="h-full rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6 hover:bg-white/[0.07] hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-base font-bold mb-2 text-gold">{title}</h3>
      <p className="text-[15px] sm:text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}

function FlywheelStep({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <article className="h-full rounded-2xl border border-gold/20 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-sm p-5 sm:p-7 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl font-bold text-gold mb-3">{num}</div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-[15px] sm:text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}

function AiMethodCard({ num, title, body }: { num: string; title: string; body: string }) {
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

function FederalCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-7 hover:bg-white/[0.07] hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-base font-bold mb-4 text-gold">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[14px] sm:text-sm text-light leading-relaxed">
            <span className="text-gold flex-shrink-0 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function AudienceCard({
  tag,
  title,
  body,
  ctaLabel,
  ctaHref,
}: {
  tag: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <a
      href={ctaHref}
      className="group h-full block rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 hover:bg-white/[0.08] hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-[10px] uppercase tracking-[0.18em] text-gold/80 font-mono mb-3">{tag}</div>
      <h3
        className="text-base sm:text-lg font-bold mb-3 leading-snug"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className="text-[14px] sm:text-sm text-light leading-relaxed mb-5"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:gap-2.5 transition-all">
        <span dangerouslySetInnerHTML={{ __html: ctaLabel }} />
        <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}

function CoverageStat({
  big,
  label,
  sub,
}: {
  big: string;
  label: string;
  sub: string;
}) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-7 hover:bg-white/[0.06] hover:border-gold/30 transition-all duration-300">
      <div className="text-4xl sm:text-5xl font-bold text-gold leading-none mb-3">{big}</div>
      <div className="text-sm sm:text-base font-bold text-text mb-2 leading-snug">{label}</div>
      <p className="text-[13px] sm:text-sm text-light leading-relaxed">{sub}</p>
    </article>
  );
}
