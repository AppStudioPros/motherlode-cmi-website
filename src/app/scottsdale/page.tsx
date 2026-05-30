import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Provenance Sourcing Network · Built with Scottsdale Mint",
  description:
    "Partnership pitch page. The Provenance Sourcing Network is the upstream identification and curated sourcing engine that makes the Scottsdale Mint plus Hyperscale Data critical-minerals reserve operational. Private working document.",
  robots: { index: false, follow: false },
};

export default function ScottsdalePartnershipPage() {
  return (
    <main className="relative min-h-screen text-text">
      {/* ━━━━━━━━━━━━━━━━━ TOP BAR ━━━━━━━━━━━━━━━━━ */}
      <header className="sticky top-0 z-50 backdrop-blur bg-ink/80 border-b border-gold/15">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-gold to-copper flex items-center justify-center">
              <span className="text-ink font-bold text-sm">M</span>
            </div>
            <span className="font-semibold tracking-tight">MotherLode CMI</span>
            <span className="hidden sm:inline text-xs text-muted ml-2 pl-2 border-l border-white/15">
              Partnership Working Document
            </span>
          </a>
          <a
            href="#engagement"
            className="px-4 py-1.5 rounded border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm"
          >
            Engagement Structures
          </a>
        </nav>
      </header>

      {/* ━━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" aria-hidden />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Built with Scottsdale Mint &nbsp;·&nbsp; Proposal
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-7">
              The{" "}
              <span className="bg-gradient-to-r from-gold via-gold to-copper bg-clip-text text-transparent">
                Provenance Sourcing Network.
              </span>
              <br className="hidden md:block" /> Built with Scottsdale Mint.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-light max-w-3xl leading-relaxed mb-8">
              The upstream identification and curated sourcing engine that
              makes the Scottsdale Mint and Hyperscale Data critical-minerals
              reserve operational. Sovereign-tier. Provenance-grade.
              Compounding with every closed deal.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="border-l-2 border-gold/60 pl-5 max-w-3xl">
              <p className="text-base md:text-lg italic text-light/90 mb-2 leading-relaxed">
                &ldquo;Governments looking at critical minerals such as silver
                to shore up their supply chains, but institutions are
                increasingly recognizing it for monetary reasons as well.&rdquo;
              </p>
              <p className="text-xs text-muted tracking-wider uppercase">
                Josh Phair, President, Scottsdale Mint — April 2026 partnership
                announcement
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 2 · THE PROBLEM ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              The Problem
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The bottleneck is not extraction. It is{" "}
              <span className="text-gold">identification.</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              The bottleneck in United States domestic critical-minerals supply
              is not extraction, not refining capacity, not capital. It is the
              identification of legitimate, vetted, provenance-documented supply
              at the speed and scale sovereign-tier buyers require.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Sovereign buyers cannot announce intent",
                body: "Central banks, treasury reserves, and defense supply programs cannot publicly bid on metal without moving markets. They buy through proxies. Traceability collapses on the first hop.",
              },
              {
                title: "Critical-minerals bycatch is invisible upstream",
                body: "Mining operators assay only what they were originally permitted for. REE, gallium, germanium, antimony, tellurium content is rarely measured before metal enters the supply chain. The market never has a chance to price it.",
              },
              {
                title: "Refinery sourcing is tribal knowledge",
                body: "No integrated directory of vetted refiners. No standardized chain-of-custody attestation. Every relationship is point-to-point. Every deal is one-off.",
              },
              {
                title: "Provenance is assembled deal by deal",
                body: "No standard chain-of-custody documentation that survives counterparty change. Each new deal repeats the legal, KYC, and customs work from scratch. The friction tax is enormous and entirely fixable.",
              },
            ].map((item) => (
              <Reveal key={item.title} delay={120}>
                <div className="rounded-xl border border-white/10 bg-surface/40 p-6 h-full">
                  <h3 className="text-lg font-bold text-text mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 3 · THE FLIP ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              The New Method
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The flip:{" "}
              <span className="text-gold">information advantage</span> becomes{" "}
              <span className="text-gold">compounding advantage</span>.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              A subscription gives Scottsdale Mint information. Useful, but
              commoditizable. The Provenance Sourcing Network gives Scottsdale
              Mint first-look transaction rights on metal nobody else can
              identify, plus a structural advantage that gets sharper with every
              deal completed.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-surface/60 to-surface2/30 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted mb-4 font-semibold">
                    What exists today
                  </div>
                  <ul className="space-y-4 text-light">
                    <li className="flex gap-3">
                      <span className="text-muted">·</span>
                      <span className="text-sm leading-relaxed">Subscription reports, open to any buyer</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-muted">·</span>
                      <span className="text-sm leading-relaxed">Information advantage bounded by subscriber pool</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-muted">·</span>
                      <span className="text-sm leading-relaxed">Static report, deal-by-deal</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-muted">·</span>
                      <span className="text-sm leading-relaxed">Identity exposed end-to-end</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-muted">·</span>
                      <span className="text-sm leading-relaxed">Patent flywheel operates at half capacity</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 md:p-8 bg-gold/5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-gold mb-4 font-semibold">
                    What we build together
                  </div>
                  <ul className="space-y-4 text-text">
                    <li className="flex gap-3">
                      <span className="text-gold">→</span>
                      <span className="text-sm leading-relaxed font-medium">First-look transaction rights on metal nobody else can identify</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold">→</span>
                      <span className="text-sm leading-relaxed font-medium">Compounding advantage that gets sharper with every deal closed</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold">→</span>
                      <span className="text-sm leading-relaxed font-medium">Live data flywheel inside the Scottsdale reserve operation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold">→</span>
                      <span className="text-sm leading-relaxed font-medium">Sovereign-tier identity isolation, revealed only at bid acceptance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold">→</span>
                      <span className="text-sm leading-relaxed font-medium">The patent claim runs at full operational capacity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 4 · THE FLYWHEEL ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              The Flywheel
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
              Every deal makes the <span className="text-gold">next deal sharper.</span>
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              Five stages. Closed loop. The verified field outcome from every
              completed transaction returns to the model. Confidence intervals
              tighten. The next identification is more precise. The competitive
              gap widens, not narrows.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { n: "01", label: "Discover", body: "MotherLode CMI surfaces high-bycatch sites" },
              { n: "02", label: "Vet", body: "KYC, AML, OFAC, beneficial owner, chain-of-custody" },
              { n: "03", label: "Match", body: "Sovereign-tier buyer connects to qualified supply" },
              { n: "04", label: "Close", body: "Multi-language contract, customs, settlement" },
              { n: "05", label: "Learn", body: "Verified outcome feeds back into the model" },
            ].map((node, i) => (
              <Reveal key={node.n} delay={80 + i * 50}>
                <div className="relative rounded-xl border border-gold/25 bg-ink/40 p-5 h-full">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-3 font-semibold">
                    Step {node.n}
                  </div>
                  <div className="text-xl font-bold text-text mb-2">{node.label}</div>
                  <div className="text-xs text-muted leading-relaxed">{node.body}</div>
                  {i < 4 && (
                    <div
                      className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-gold/60"
                      aria-hidden
                    >
                      →
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={350}>
            <div className="mt-8 rounded-xl border border-gold/30 bg-gold/5 p-5 md:p-6 text-center">
              <p className="text-sm md:text-base text-light leading-relaxed">
                The loop closes from <span className="text-gold font-semibold">Step 05 back into Step 01</span>. Every closed deal compounds the data flywheel by an irreplicable margin. This is the operational embodiment of the patent claim in full.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 5 · 5 COMPONENTS ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              Phase 1 Build
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Five components. <span className="text-gold">Six months.</span>
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              Phase 1 is the minimum viable Provenance Sourcing Network that
              produces real sovereign-grade deal flow into Scottsdale Mint
              within three to six months of commitment. Components A through E
              build to working flywheel.
            </p>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                k: "A",
                title: "Discovery",
                status: "Live today",
                statusTone: "gold",
                body: "MotherLode CMI as it exists. Demo running. Provisional patent filed. Predicts per-site critical-minerals and precious-metals bycatch across mining-active United States. Feeds the supply funnel by surfacing operators with high-confidence sites.",
              },
              {
                k: "B",
                title: "Sourcing Pipeline",
                status: "Phase 1",
                statusTone: "muted",
                body: "Curated supply intake. KYC verified, AML attested, OFAC screened, chain-of-custody documented, beneficial owner verified, state precious-metals dealer license verified. Vetting is not optional. The network's value to Scottsdale depends on every listing being defensible under sovereign-tier scrutiny.",
              },
              {
                k: "C",
                title: "Buyer Tier with Auction Mechanics",
                status: "Phase 1",
                statusTone: "muted",
                body: "Three tiers. Sovereign and Treasury (identity isolated, category exposed). Mint Partners (Scottsdale, identity opt-in). Vetted Refiners (small regional and specialty, same vetting standard as supply). Sealed-bid forward purchase, Dutch auction variant, and direct negotiation channel. Identity revealed under NDA at bid acceptance only.",
              },
              {
                k: "D",
                title: "Closure Layer",
                status: "Phase 1",
                statusTone: "muted",
                body: "Multi-language contract automation, customs paperwork, AML and KYC attestation that travels with the deal, settlement rails. Closes the last-mile friction that turns sovereign-tier interest into actual completed transactions.",
              },
              {
                k: "E",
                title: "Behavioral Data Layer",
                status: "Phase 1",
                statusTone: "gold",
                body: "The compounding flywheel. Every closed deal returns verified field outcomes to the MotherLode model. Confidence intervals tighten. Site identification gets sharper. The competitive gap widens with every transaction. This is the patent claim in full.",
              },
            ].map((c, i) => (
              <Reveal key={c.k} delay={60 + i * 40}>
                <div className="rounded-xl border border-white/10 bg-surface/40 p-6 md:p-7 flex flex-col md:flex-row gap-5">
                  <div className="md:w-20 md:shrink-0">
                    <div className="text-4xl md:text-5xl font-bold text-gold">{c.k}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold text-text">{c.title}</h3>
                      <span
                        className={`text-[10px] uppercase tracking-[0.18em] font-bold px-2 py-0.5 rounded border ${
                          c.statusTone === "gold"
                            ? "border-gold/50 text-gold bg-gold/5"
                            : "border-white/15 text-muted"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-light leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 6 · OPPORTUNITIES ON CURRENT POSITIONS ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Opportunities to <span className="text-gold">compound</span> the positions Scottsdale already holds.
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              AI compounding processes applied to live Scottsdale commitments. Not a new bet. New leverage on positions already in motion.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Hyperscale Data partnership operational",
                body: "Turns the announcement into actual sovereign-grade deal flow. The Provenance Sourcing Network is how the rare-earth and precious-metals reserve commitment becomes weekly transactions instead of a press release.",
              },
              {
                title: "Casper Wyoming capacity expansion fed",
                body: "Active build phase. The Sourcing Network feeds the new refining capacity with curated, vetted, provenance-documented supply on the schedule the build requires.",
              },
              {
                title: "Domestic supply narrative documented",
                body: "Every deal carries U.S. origin documentation. The narrative Scottsdale already owns publicly becomes a hardened, audit-grade record on every transaction.",
              },
              {
                title: "Provenance for central bank clients",
                body: "Sovereign-tier identity isolation. Chain of custody attested at every step. The provenance documentation central banks need but cannot ask for publicly is built into the network natively.",
              },
              {
                title: "Diversification beyond refinery procurement",
                body: "Direct operator deal flow surfaced by MotherLode CMI. Not dependent on a small set of refinery relationships. Resilient to single-source disruption.",
              },
              {
                title: "Patent moat as a Scottsdale moat",
                body: "Patent posture extends to the operational network when Scottsdale is the named public-facing brand. Competitors entering after the partnership cannot replicate the data flywheel without infringing.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={80 + i * 30}>
                <div className="rounded-xl border border-gold/20 bg-gradient-to-br from-surface/40 to-surface/20 p-5 md:p-6 h-full">
                  <div className="flex gap-3 mb-2">
                    <span className="text-gold mt-1.5 text-xs">●</span>
                    <h3 className="text-base md:text-lg font-bold text-text leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed pl-5">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION · ENGAGEMENT STRUCTURES ━━━━━━━━━━━━━━━━━ */}
      <section id="engagement" className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              Engagement Structures
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Four structures. <span className="text-gold">Stackable.</span>
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              Each structure is independently configurable. Several are
              stackable. Scottsdale picks the depth that matches the commitment
              the Hyperscale partnership requires.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Deal-Flow Engagement",
                tag: "Most strategically interesting",
                body: "The patent-defensible play. MotherLode CMI becomes the upstream identification and curated sourcing funnel into Scottsdale Mint. The data flywheel runs at full operational capacity inside the Scottsdale reserve. Highest compound moat.",
              },
              {
                title: "Vertical Exclusivity",
                tag: "Highest exclusivity",
                body: "Scottsdale Mint receives exclusive MotherLode access for sovereign and central bank programs. Other Scottsdale verticals operate independently. Highest fee, highest moat, longest commitment.",
              },
              {
                title: "Strategic Partnership + Equity",
                tag: "Most permanent",
                body: "Capital and equity stake in MotherLode CMI. The most permanent commitment. Requires a valuation conversation. Aligns long-term incentive across both organizations.",
              },
              {
                title: "Co-Branded Sourcing Network",
                tag: "Public-facing",
                body: "Scottsdale as the public-facing brand on the network. MotherLode as the infrastructure provider. Highest marketing leverage. Most aggressive narrative posture.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={80 + i * 50}>
                <div className="rounded-xl border border-gold/25 bg-gradient-to-br from-surface/60 to-surface2/30 p-6 h-full">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-3 font-semibold">
                    {s.tag}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-text mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm text-light leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ FOOTER ━━━━━━━━━━━━━━━━━ */}
      <footer className="border-t border-white/5 bg-ink">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 text-center">
          <div className="text-xs text-muted leading-relaxed max-w-2xl mx-auto">
            Private working document. Prepared for Scottsdale Mint by Lucid Tech LLC and the MotherLode CMI team. Not intended for public distribution. Forward-looking statements are working assumptions, not commitments. Numbers in the impact calculator are model inputs only, calibrated after Hyperscale partnership scope is confirmed.
          </div>
          <div className="mt-4 text-[11px] text-muted">
            © 2026 Lucid Tech LLC · MotherLode CMI · motherlodecmi.com/scottsdale
          </div>
        </div>
      </footer>
    </main>
  );
}
