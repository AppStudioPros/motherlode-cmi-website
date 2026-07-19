import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Investor Overview — MotherLode CMI",
  description: "Investment thesis, market opportunity, and ARR model for MotherLode CMI — the critical minerals intelligence platform.",
};

const MOAT = [
  {
    title: "Data no single agency has assembled.",
    body: "300,000 documented US mine sites cross-referenced with historical assay records, current BLM claim status, modern commodity prices, era-specific recovery efficiency models, and federally designated critical minerals priority lists. A seasoned domain expert working by hand takes 6 to 8 months to research a single site using less than half these sources. MotherLode CMI produces a comparable result in hours across every site simultaneously.",
  },
  {
    title: "A flywheel that compounds with every transaction.",
    body: "Every completed transaction on the platform feeds verified real-world outcomes back into the scoring model. Confidence intervals tighten. Future identifications improve. Competitors entering later cannot replicate this without building an entirely separate transactional layer and waiting years for the outcome data we are already collecting.",
  },
  {
    title: "Patent-protected integration methodology.",
    body: "The provisional patent covers the integration approach as a system: AABOS AI-driven identification, confidence-scored site ranking, real-world outcome feedback, and model improvement. Not the individual data sources. The system that connects them. This is the defensible claim, and it covers the entire operational architecture.",
  },
  {
    title: "Federal alignment worth $570 million in active funding.",
    body: "The DOE has issued over $570 million in active funding opportunities for domestic critical minerals processing and supply chain intelligence as of Q2 2026. MotherLode CMI is the upstream intelligence layer for that build-out and the only platform that produces per-site analysis at scale with a defensible audit trail.",
  },
];

const REVENUE_STREAMS = [
  { label: "Consumer SaaS", desc: "Prospectors, small operators, investors. Free through $99/mo. Blended ARPU target $38/mo.", year1: "$84K", year2: "$547K", year3: "$2.0M" },
  { label: "Institutional Subscriptions", desc: "State geological surveys, federal program managers, DOE cohort members. ACV $15K-$75K.", year1: "$50K", year2: "$280K", year3: "$1.1M" },
  { label: "Marketplace Commissions", desc: "4% on verified claim transactions. Average claim $8K-$25K.", year1: "$18K", year2: "$105K", year3: "$400K" },
  { label: "Tailings Intelligence", desc: "Per-site reports ($500-$2,500) and operator subscriptions ($5K-$25K/yr).", year1: "$20K", year2: "$150K", year3: "$500K" },
  { label: "Sovereign Buyer Network", desc: "Invitation-only access for refiners, defense primes, sovereign buyers. $25K-$100K/yr + deal-flow percentage.", year1: "n/a", year2: "$50K", year3: "$375K" },
  { label: "Data Licensing", desc: "API and database access for national labs, state agencies, research institutions. ACV $25K-$150K.", year1: "n/a", year2: "$50K", year3: "$300K" },
  { label: "Royalty Tokenization", desc: "Structuring fees and valuation subscriptions on tokenized mine rework royalties.", year1: "n/a", year2: "n/a", year3: "$200K" },
];

const ARR = [
  { year: "Year 1", total: "$550K – $850K", note: "Foundation. Published research credibility, government relationships opening institutional doors, warm network, marketplace and industrial feedstock layer live." },
  { year: "Year 2", total: "$1.4M – $2.0M", note: "Distribution. Mountain Man partnership live, DOE cohort operators on platform, GrowthPilot content engine, first sovereign buyer, industrial offtake agreements active." },
  { year: "Year 3", total: "$4.5M – $8.0M", note: "Scale. Federal contract conversions, international data ingestion, royalty tokenization live, institutional base established, MotherLode Price Index licensable." },
];

const UPSIDE = [
  { trigger: "DOE national lab data licensing contract", impact: "$500K-$2M one-time + annual renewal" },
  { trigger: "Scottsdale Mint deal-flow agreement", impact: "0.5% on $50M+ annual sourced metal = $250K/yr baseline, growing" },
  { trigger: "State mandate for MotherLode CMI reports on CM grant applications", impact: "+50-100 institutional accounts overnight" },
  { trigger: "International expansion (Australia, Canada, South Africa)", impact: "Doubles TAM, same scoring engine" },
];

const GTM = [
  {
    label: "Industry network",
    body: "Direct relationships in the mining operator and refiner community. Five warm introductions produce two to three institutional accounts. That alone is $50K-$100K ARR from conversations that can start this month.",
  },
  {
    label: "Mountain Man Mining partnership",
    body: "Mountain Man Mining operates the leading US gold claim marketplace with 6,000-9,000 targeted monthly visitors. A revenue-share referral arrangement gives their buyers access to MotherLode Scores on any claim under evaluation. Both platforms benefit. No cold outreach required.",
  },
  {
    label: "GPAA and prospecting community",
    body: "The Gold Prospectors Association of America has chapters in every state and a national membership base of active prospectors. Educational content distributed through chapter communications and their publications reaches exactly the right consumer SaaS audience.",
  },
  {
    label: "Content engine via GrowthPilot",
    body: "Daily content about specific abandoned mine sites — scores, bycatch estimates, rework economics — builds SEO, community trust, and inbound demand over time. This is the low-cost acquisition engine that runs indefinitely once started.",
  },
  {
    label: "Reddit and prospecting forums",
    body: "r/Prospecting, r/geology, and related communities represent 200,000+ active prospectors. The strategy is value-first: post specific mine scores and data, not marketing. One data-driven post on a well-known abandoned mine drives hundreds of signups without a dollar spent.",
  },
  {
    label: "DOE NOFO application",
    body: "Full applications for the $569M in active DOE NOFOs are staggered. The platform is positioned as the intelligence infrastructure layer for funded operators, not a grant recipient. Being in the DOE conversation creates direct pipeline to every funded cohort member.",
  },
];

const LANDSCAPE = [
  { name: "Terra AI", raised: "$20M (Khosla + BHP)", what: "AI for new greenfield mineral discovery", gap: "Greenfield only. No rework economics, no abandoned mine scoring, no marketplace, no flywheel." },
  { name: "VerAI", raised: "Multiple rounds (Insight Partners)", what: "AI-driven mineral exploration", gap: "Exploration for new deposits. Different market, different data, no transactional layer." },
  { name: "Mountain Man Mining", raised: "Bootstrapped", what: "Static gold claim listings", gap: "No AI, no scoring, no bycatch intelligence, no chain-of-custody. Acquisition partner, not a competitor." },
  { name: "S&P Global Critical Minerals", raised: "Public company", what: "Commodity pricing and market intelligence", gap: "Macro-level. No per-site analysis, no rework economics, no US abandoned mine coverage." },
  { name: "DOE national labs", raised: "Federal funding", what: "Building AI mineral discovery from scratch", gap: "They are building what we already built. Licensing target, not a competitor." },
];

export default function InvestorPage() {
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
            <a href="/compliance" className="text-muted hover:text-text transition-colors">Compliance</a>
            <a href="/#contact" className="px-4 py-1.5 rounded border border-gold/40 text-gold hover:bg-gold/10 transition-colors">Contact</a>
          </div>
          <MobileNav />
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32 space-y-20 sm:space-y-28">

        {/* Header */}
        <Reveal>
          <div className="text-center">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
              Investor Overview — Confidential
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
              The intelligence layer for domestic critical minerals recovery.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-light leading-relaxed max-w-4xl mb-6">
              The United States is 100% import-reliant on 12 critical minerals. China controls processing for the majority of the rest. The domestic supply exists — in 300,000 documented abandoned mine sites across the mining-active United States. It is not missing. It is not identified at scale.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-light leading-relaxed max-w-4xl">
              MotherLode CMI is the first platform to cross-reference the complete historical US mining record with current claim status, modern commodity prices, critical minerals bycatch modeling, and era-specific recovery economics — per site, at scale, with a compounding data flywheel that no competitor can replicate by starting from scratch.
            </p>
          </div>
        </Reveal>

        {/* Investment Ask */}
        <Reveal>
          <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid rgba(248,171,32,0.35)' }}>
            <div className="px-6 sm:px-8 py-5 border-b" style={{ borderColor: 'rgba(248,171,32,0.2)', background: 'rgba(248,171,32,0.08)' }}>
              <p className="text-xs font-bold uppercase tracking-widest text-gold">Investment Ask</p>
            </div>
            <div className="px-6 sm:px-8 py-8 grid md:grid-cols-2 gap-10" style={{ background: 'rgba(248,171,32,0.03)' }}>

              {/* Left — the ask */}
              <div>
                <p className="text-3xl font-bold text-gold mb-1">$250,000 – $400,000</p>
                <p className="text-sm text-muted mb-4">$250,000 for 15% equity &nbsp;|&nbsp; $400,000 for 25% equity in the MotherLode CMI program</p>
                <p className="text-sm text-light mb-3">We have over 3,000 hours in build time and $300,000 invested into the platform so far. We are currently 85% complete to public launch.</p>
                <p className="text-sm text-light mb-6">Once funds are acquired we are live in 30 days or less.</p>

                <p className="text-sm font-semibold text-light mb-3">Use of funds</p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Software hardening and platform infrastructure",
                    "Expanding AABOS AI processing capacity",
                    "Secure server deployment and security software",
                    "Marketplace infrastructure build-out",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <span className="text-base text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold text-light mb-3">Projected ARR — base case including Marketplace and Industrial layer revenue (no government funding, grants, large-company alignments, or state mandates; marketing and grassroots social only)</p>
                <ul className="space-y-2">
                  {[
                    { label: "Year 1", value: "$550K – $850K", note: "Year one is typically a wash — firming up systems, software, and AABOS AI processing." },
                    { label: "Year 2", value: "$1.4M – $2.0M", note: "Distribution channels active, marketplace and industrial offtake agreements live." },
                    { label: "Year 3", value: "$4.5M – $8.0M", note: "Scale. If any government or institutional relationship aligns, ARR compounds materially." },
                  ].map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <span className="text-base text-muted leading-relaxed">
                        <span className="text-light font-semibold">{r.label}: {r.value}</span> — {r.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — ownership */}
              <div>
                <p className="text-sm font-semibold text-light mb-3">Ownership structure (post-investment)</p>
                <ul className="space-y-3 mb-6">
                  {[
                    { name: "Corey Strange", role: "Founder, AI and Software Engineer", pct: "35%" },
                    { name: "John Kennedy", role: "Co-Founder, Key System Manager", pct: "10%" },
                    { name: "Riley McAllister", role: "Co-Founder, Gold Mine Operator, Health and Safety Director — MLCMI Systems Director and Inventor", pct: "10%" },
                    { name: "Douglas B. Chrisey, Ph.D.", role: "Jung Chair of Materials Engineering, Tulane University — MLCMI System Admin", pct: "10%" },
                    { name: "Investor", role: "$250K for 15% or $400K for 25%", pct: "15–25%" },
                  ].map((member, i) => (
                    <li key={i} className="flex items-start justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                      <div>
                        <p className="text-sm font-semibold text-light">{member.name}</p>
                        <p className="text-xs text-muted leading-relaxed mt-0.5">{member.role}</p>
                      </div>
                      <span className="text-sm font-bold text-gold flex-shrink-0">{member.pct}</span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">Total</span>
                    <span className="text-sm font-bold text-gold">100%</span>
                  </li>
                </ul>
                <p className="text-base text-muted leading-relaxed mb-6">
                  This is a direct equity stake in the MotherLode CMI program. Questions about the structure or terms: <a href="mailto:info@webdesignpros365.com?subject=MotherLode%20CMI%20%E2%80%94%20Investment%20Inquiry" className="text-gold hover:underline">contact the team directly</a>.
                </p>
                <div className="rounded-xl px-5 py-4" style={{ background: 'rgba(248,171,32,0.06)', border: '1px solid rgba(248,171,32,0.15)' }}>
                  <p className="text-sm text-muted leading-relaxed">
                    <span className="font-semibold text-light">Investor return outlook:</span> Even at the lower conservative case, without any upside catalysts such as a DOE contract, state mandate, or international expansion, Year 3 projections support a <span className="text-gold font-semibold">10x return at $2.5 million on a $250,000 investment</span>, or a 6x return at $2.5 million on a $400,000 investment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* The moat */}
        <Reveal>
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
              The Moat
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-10 leading-tight">
              Four structural advantages that compound over time.
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {MOAT.map((m, i) => (
                <div key={i} className="rounded-2xl p-6 sm:p-8"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-xs font-bold uppercase tracking-widest text-gold mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 leading-snug">{m.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Market moment */}
        <Reveal>
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
              Market Moment
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
              The window is open. The federal funding is active.
            </h2>
            <p className="text-base sm:text-lg text-light leading-relaxed mb-10 max-w-4xl">
              The DOE has issued over $570 million in active funding opportunities for domestic critical minerals processing and supply chain intelligence as of Q2 2026. The DOI has issued executive directives accelerating domestic supply development. NSF has completed its Critical Minerals Challenge award cycle. The funded cohort needs intelligence infrastructure. MotherLode CMI is already built.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "$570M+", label: "Active DOE NOFOs for critical minerals (Q2 2026)" },
                { stat: "$409B", label: "Global critical minerals market size (2025)" },
                { stat: "12", label: "Critical minerals where US is 100% import-reliant" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl p-6 sm:p-7 text-center"
                  style={{ background: 'rgba(248,171,32,0.05)', border: '1px solid rgba(248,171,32,0.15)' }}>
                  <div className="text-3xl sm:text-4xl font-bold text-gold mb-3">{s.stat}</div>
                  <div className="text-base text-muted leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Revenue streams */}
        <Reveal>
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
              Revenue Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
              Seven revenue streams. Not a one-trick SaaS.
            </h2>
            <p className="text-light leading-relaxed mb-8 max-w-3xl">
              The consumer subscription is the acquisition engine. The institutional and federal tiers are the revenue. The marketplace and sovereign buyer network are the moat in motion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {ARR.map((a, i) => (
                <div key={i} className="rounded-2xl p-6 sm:p-7"
                  style={{ background: 'rgba(248,171,32,0.05)', border: '1px solid rgba(248,171,32,0.2)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-3">{a.year}</p>
                  <p className="text-xl sm:text-2xl font-bold text-gold mb-3">{a.total}</p>
                  <p className="text-base text-muted leading-relaxed">{a.note}</p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <table className="w-full min-w-[540px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Revenue stream</th>
                    <th className="text-right px-5 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Year 1</th>
                    <th className="text-right px-5 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Year 2</th>
                    <th className="text-right px-5 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  {REVENUE_STREAMS.map((r, i) => (
                    <tr key={i} style={{ borderBottom: i < REVENUE_STREAMS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <td className="px-5 py-5 pr-4">
                        <p className="font-semibold text-sm mb-1">{r.label}</p>
                        <p className="text-xs text-muted leading-relaxed">{r.desc}</p>
                      </td>
                      <td className="px-5 py-5 text-right text-sm font-mono whitespace-nowrap" style={{ color: r.year1 === "n/a" ? 'rgba(255,255,255,0.2)' : '#F8AB20' }}>{r.year1}</td>
                      <td className="px-5 py-5 text-right text-sm font-mono whitespace-nowrap" style={{ color: r.year2 === "n/a" ? 'rgba(255,255,255,0.2)' : '#F8AB20' }}>{r.year2}</td>
                      <td className="px-5 py-5 text-right text-sm font-mono whitespace-nowrap" style={{ color: r.year3 === "n/a" ? 'rgba(255,255,255,0.2)' : '#F8AB20' }}>{r.year3}</td>
                    </tr>
                  ))}
                  <tr style={{ background: 'rgba(248,171,32,0.06)', borderTop: '1px solid rgba(248,171,32,0.2)' }}>
                    <td className="px-5 py-5">
                      <p className="font-bold text-sm text-gold">Total ARR (range)</p>
                    </td>
                    <td className="px-5 py-5 text-right font-bold text-sm text-gold whitespace-nowrap">$550K–$850K</td>
                    <td className="px-5 py-5 text-right font-bold text-sm text-gold whitespace-nowrap">$1.4M–$2.0M</td>
                    <td className="px-5 py-5 text-right font-bold text-sm text-gold whitespace-nowrap">$4.5M–$8.0M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Upside catalysts */}
        <Reveal>
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
              Upside Catalysts
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
              Any one of these changes the trajectory entirely.
            </h2>
            <p className="text-light leading-relaxed mb-10 max-w-3xl">
              The base case gets to $4.5M–$8.0M ARR by Year 3. These are not included in that model. Each is a realistic near-term event given existing relationships and the federal landscape.
            </p>
            <div className="space-y-4">
              {UPSIDE.map((u, i) => (
                <div key={i} className="rounded-2xl px-6 sm:px-7 py-6 flex flex-col sm:flex-row sm:items-start gap-4"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex-1">
                    <p className="font-semibold text-base mb-1">{u.trigger}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-sm font-bold" style={{ color: '#F8AB20' }}>{u.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Competitive landscape */}
        <Reveal>
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
              Competitive Landscape
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
              Well-funded players in adjacent spaces. No direct competitor.
            </h2>
            <p className="text-light leading-relaxed mb-10 max-w-3xl">
              Every well-funded AI mining platform is doing greenfield exploration for new deposits. Nobody is doing abandoned mine rework intelligence with a transactional marketplace and a compounding data flywheel. The gap is real.
            </p>

            <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <table className="w-full min-w-[540px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Platform</th>
                    <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>What they do</th>
                    <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Why we are different</th>
                  </tr>
                </thead>
                <tbody>
                  {LANDSCAPE.map((l, i) => (
                    <tr key={i} style={{ borderBottom: i < LANDSCAPE.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <td className="px-5 py-5 align-top">
                        <p className="font-semibold text-sm">{l.name}</p>
                        <p className="text-xs text-gold mt-1">{l.raised}</p>
                      </td>
                      <td className="px-5 py-5 align-top text-sm text-muted leading-relaxed">{l.what}</td>
                      <td className="px-5 py-5 align-top text-sm text-muted leading-relaxed">{l.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* GTM */}
        <Reveal>
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
              Go-To-Market
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-10 leading-tight">
              Six distribution channels. Most already warm.
            </h2>
            <div className="space-y-4">
              {GTM.map((g, i) => (
                <div key={i} className="rounded-2xl px-6 sm:px-7 py-6"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-start gap-5">
                    <span className="text-xs font-bold text-gold/60 flex-shrink-0 mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-bold text-base mb-2">{g.label}</p>
                      <p className="text-base text-muted leading-relaxed">{g.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Team */}
        <Reveal>
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-8">
              Team
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-10 leading-tight">
              Domain credibility paired with engineering execution.
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">

              {/* Corey */}
              <div className="rounded-2xl p-6 flex flex-col"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="font-bold text-base mb-0.5">Corey Strange</p>
                <p className="text-gold text-xs font-medium mb-4">Founder and Chief Technology Officer, Lucid Tech LLC</p>
                <p className="text-muted text-xs leading-relaxed mb-4">
                  Twenty-plus year technology operator and inventor. Founder of Lucid Tech LLC and the Adaptive Compound Intelligence (ACI) framework. Lead architect of the MotherLode CMI platform.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-light mb-2">Patents and Intellectual Property</p>
                  <ul className="space-y-1">
                    {[
                      "Fourteen-plus U.S. utility patents filed across a twenty-year career",
                      "MotherLode CMI, U.S. Provisional Patent Application Filed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        <span className="text-xs text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-light mb-2">Operating Companies</p>
                  <ul className="space-y-1">
                    {[
                      "Founder, AppStudioPro (twenty-person full-stack engineering organization)",
                      "Founder, Web Design Pros 365 (BBB Accredited, A rating)",
                      "Founder, Mobile Computer Specialists (Google 4.8, BBB A+, Three Best Rated 2026)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        <span className="text-xs text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-light mb-2">Education and Recognition</p>
                  <ul className="space-y-1">
                    {[
                      "Oxford University AI Program, Top 1% of cohort, completed 2026",
                      "Seventeen years of continuous operating record across three companies",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        <span className="text-xs text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Doug */}
              <div className="rounded-2xl p-6 flex flex-col"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="font-bold text-base mb-0.5">Douglas B. Chrisey, Ph.D.</p>
                <p className="text-gold text-xs font-medium mb-4">Jung Chair of Materials Engineering, Tulane University — Co-owner, MotherLode CMI</p>
                <p className="text-muted text-xs leading-relaxed mb-4">
                  Professor of Physics and Engineering Physics at Tulane University, with adjunct appointment in Biomedical Engineering. Career spans seventeen years at the U.S. Naval Research Laboratory as Head of the Laser Processing Section, Deputy Director of the North Dakota State University Center for Nanoscale Science and Engineering, and Full Professor of Materials Science and Biomedical Engineering at Rensselaer Polytechnic Institute.
                </p>
                <div className="mt-auto">
                  <ul className="space-y-1 mb-5">
                    {[
                      "B.S. Physics, State University of New York at Binghamton, 1983",
                      "Ph.D. Engineering Physics, University of Virginia, 1987",
                      "Former Head of Laser Processing, U.S. Naval Research Laboratory",
                      "Jung Chair of Materials Engineering, Tulane University",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        <span className="text-xs text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://scholar.google.com/citations?user=BB4LmmkAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:underline"
                  >
                    Google Scholar profile →
                  </a>
                </div>
              </div>

              {/* Riley */}
              <div className="rounded-2xl p-6 flex flex-col"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="font-bold text-base mb-0.5">Riley McAllister</p>
                <p className="text-gold text-xs font-medium mb-4">Co-Founder, MLCMI Systems Director and Inventor</p>
                <p className="text-muted text-xs leading-relaxed mb-4">
                  Active gold mine operator and Health and Safety Director at Cross and Caribou Mines, Nederland, Colorado. Northern Arizona University graduate with career-long focus on mine operations, MSHA compliance, and field-level critical minerals extraction. On-site liaison with the Colorado School of Mines student program.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-light mb-2">Credentials and Operations</p>
                  <ul className="space-y-1">
                    {[
                      "General Mine Foreman and Health and Safety Director, Cross and Caribou Mines",
                      "MSHA-certified trainer and compliance officer",
                      "Perfect MSHA compliance record across three-plus years of documented operations",
                      "Certified oversight of crushing unit operations, ventilation systems, and site personnel",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        <span className="text-xs text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-light mb-2">Platform Role</p>
                  <ul className="space-y-1">
                    {[
                      "MLCMI Systems Director — ground-truth operator intelligence and site vetting authority",
                      "Inventor — proprietary field methodology integrated into the MotherLode CMI scoring engine",
                      "Colorado School of Mines academic partnership liaison",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        <span className="text-xs text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Contact */}
        <Reveal>
          <div className="rounded-2xl p-8 sm:p-10 text-center"
            style={{ background: 'rgba(248,171,32,0.05)', border: '1px solid rgba(248,171,32,0.2)' }}>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-6">
              Direct Inquiries
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4">
              If the numbers make sense to you, reach out directly.
            </h2>
            <p className="text-light leading-relaxed mb-8 max-w-xl mx-auto">
              We are not running a broad investor process. The right capital partner understands data moats, niche markets with institutional buyers, and the federal funding environment for domestic supply chain development.
            </p>
            <a href="mailto:info@webdesignpros365.com?subject=MotherLode%20CMI%20%E2%80%94%20Investor%20Inquiry"
              className="inline-block px-8 py-3.5 rounded bg-gold text-ink font-semibold text-base hover:opacity-90 transition-opacity">
              Contact the team
            </a>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>© 2026 MotherLode CMI — Lucid Tech LLC</span>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-gold transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-gold transition-colors">Terms</a>
            <a href="/compliance" className="hover:text-gold transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
