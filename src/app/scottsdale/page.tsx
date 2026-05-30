import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "MLCMI · Lucid Tech · Scottsdale Mint Proposal Structures",
  description:
    "Discussion draft prepared for Scottsdale Mint review. The upstream identification layer that compounds the jurisdictional custody position Scottsdale is already building.",
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
              Discussion Draft for Scottsdale Mint Review
            </span>
          </a>
          <a
            href="#structures"
            className="px-4 py-1.5 rounded border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm"
          >
            Engagement Structures
          </a>
        </nav>
      </header>

      {/* ━━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" aria-hidden />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 pt-20 pb-12 md:pt-28 md:pb-16">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Discussion Draft &nbsp;&middot;&nbsp; Prepared for Scottsdale Mint Review
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl">
              MLCMI &nbsp;&middot;&nbsp; Lucid Tech &nbsp;&middot;&nbsp;{" "}
              <span className="bg-gradient-to-r from-gold via-gold to-copper bg-clip-text text-transparent">
                Scottsdale Mint Proposal Structures.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-light max-w-3xl leading-relaxed mb-8">
              A working document outlining how MotherLode CMI&rsquo;s upstream identification layer could compound the jurisdictional custody position Scottsdale Mint is already building across the Hyperscale Data partnership, the Casper expansion, and the Wyoming Reserve custody franchise.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="border-l-2 border-gold/60 pl-5 max-w-3xl">
              <p className="text-base md:text-lg italic text-light/90 mb-2 leading-relaxed">
                &ldquo;People are after the physical tangible metal and they want it in their jurisdiction. The more relevant issue is not who controls price screens, but who controls vault doors.&rdquo;
              </p>
              <p className="text-xs text-muted tracking-wider uppercase">
                Josh Phair, CEO Scottsdale Mint &mdash; January 2026
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 2 · WHAT SCOTTSDALE HAS ALREADY BUILT ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              What Scottsdale Has Already Built
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The strategic stack <span className="text-gold">is already in place.</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              Reading Scottsdale&rsquo;s public posture across 2024 through 2026 makes the shape of the strategy clear. Mint operations in Casper. The Wyoming Reserve Opportunity Zone Fund as the jurisdictional custody franchise. Wells Fargo selecting the Wyoming Reserve in March 2026 as the institutional validation. The Hyperscale Data partnership in April 2026 as the demand commitment. The Casper capacity expansion in build. The publicly stated thesis that physical jurisdictional custody, not paper exposure, is the structural play.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { year: "2022", title: "Casper Wyoming facility opens", body: "Manufacturing footprint established in a sound-money state." },
              { year: "2024", title: "Wyoming Reserve Opportunity Zone Fund structure", body: "Vault custody operation positioned in Casper under Opportunity Zone framework." },
              { year: "April 2026", title: "Hyperscale Data partnership announced", body: "Precious metals and rare earth treasury reserve commitment." },
              { year: "March 2026", title: "Wells Fargo selects Wyoming Reserve", body: "Institutional custody validation from a top-tier U.S. bank." },
              { year: "Ongoing", title: "Casper expansion in active build phase", body: "Refining and manufacturing capacity expanding for the sovereign-tier client base." },
              { year: "Public posture", title: "Physical jurisdictional custody thesis", body: "Phair's framework: control the vault doors, not the price screens." },
            ].map((item) => (
              <Reveal key={item.title} delay={60}>
                <div className="rounded-xl border border-white/10 bg-surface/40 p-5 h-full">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">{item.year}</div>
                  <h3 className="text-base font-bold text-text mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6 md:p-7 text-center">
              <p className="text-base md:text-lg text-light leading-relaxed">
                This document does not propose a strategic shift. It proposes <span className="text-gold font-semibold">upstream identification infrastructure</span> that compounds positions Scottsdale already holds.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 3 · WHERE WE FIT ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              Where MotherLode CMI Fits
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The upstream layer that <span className="text-gold">feeds the chain you are already building.</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              The Scottsdale stack covers manufacturing, custody, institutional validation, and commitment. The piece that no individual mint can build economically on its own is the upstream identification layer that surfaces US-origin, sovereign-grade, provenance-documented critical metals before they enter the open supply chain. That is the MotherLode CMI layer.
            </p>
          </Reveal>

          {/* THREE STACKS CHART */}
          <Reveal delay={140}>
            <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-surface/60 to-surface2/30 p-5 md:p-8 mb-10">
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4 text-center">
                The Three Stacks
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Stack 1: Current State */}
                <div className="rounded-xl bg-ink/40 border border-white/10 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold mb-3 text-center">
                    Current State
                  </div>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Refinery procurement",
                      "Sovereign client base via mint",
                      "Hyperscale Data partnership commitment",
                      "Wells Fargo Wyoming Reserve custody win",
                      "Casper expansion in build phase",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-light/85">
                        <span className="text-muted mt-0.5">·</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack 2: With Sourcing Network */}
                <div className="rounded-xl bg-gold/5 border border-gold/30 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-3 text-center">
                    + Sourcing Network Layer
                  </div>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Direct operator deal flow",
                      "First-look sovereign-tier deals",
                      "Hyperscale commitment operationalized",
                      "Vetted upstream supply pointed at Wyoming Reserve",
                      "Pre-qualified supply waiting for Casper",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-text">
                        <span className="text-gold mt-0.5">→</span>
                        <span className="leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack 3: Compounding Layer */}
                <div className="rounded-xl bg-gradient-to-br from-gold/10 to-copper/5 border border-gold/40 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-3 text-center">
                    Compounding Layer
                  </div>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Each deal documented to Wyoming Reserve audit standard",
                      "Each deal strengthens the custody narrative",
                      "Each deal makes the next deal sharper",
                      "Each US-origin deal hardens jurisdictional moat",
                      "Each deal validates the buildout investment",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-light">
                        <span className="text-gold mt-0.5">●</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-center">
                <p className="text-sm text-light/85 leading-relaxed">
                  Read the chart left to right. The left column is already in place. The middle column is what the network adds. The right column is what compounds with every closed transaction.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 4 · THE BIDDING WAR FRAMEWORK ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              The Bidding War Framework
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Reactive position versus <span className="text-gold">upstream position.</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="border-l-2 border-gold/60 pl-5 max-w-3xl mb-10">
              <p className="text-base italic text-light/90 mb-2 leading-relaxed">
                &ldquo;Every additional buyer forces prices higher not through speculation, but through scarcity.&rdquo;
              </p>
              <p className="text-xs text-muted tracking-wider uppercase">
                Phair framework, applied
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={120}>
              <div className="rounded-xl border border-white/15 bg-surface/40 p-6 h-full">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold mb-4">
                  Reactive Position
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug">Inside the bidding war</h3>
                <ul className="space-y-3 text-sm text-light/85 leading-relaxed">
                  <li className="flex gap-2"><span className="text-muted mt-0.5">·</span><span>Pay spot plus premium for whatever metal arrives at the refinery</span></li>
                  <li className="flex gap-2"><span className="text-muted mt-0.5">·</span><span>Compete with every other sovereign-tier buyer for the same supply</span></li>
                  <li className="flex gap-2"><span className="text-muted mt-0.5">·</span><span>Provenance assembled deal by deal, sometimes incomplete</span></li>
                  <li className="flex gap-2"><span className="text-muted mt-0.5">·</span><span>Refinery relationships limit the addressable pool</span></li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-xl border border-gold/40 bg-gradient-to-br from-gold/10 to-copper/5 p-6 h-full">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4">
                  Upstream Position
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug">Ahead of the bidding war</h3>
                <ul className="space-y-3 text-sm text-text leading-relaxed">
                  <li className="flex gap-2"><span className="text-gold mt-0.5">→</span><span className="font-medium">First-look on metal nobody else has identified</span></li>
                  <li className="flex gap-2"><span className="text-gold mt-0.5">→</span><span className="font-medium">Compete with fewer buyers because the metal has not entered the open market</span></li>
                  <li className="flex gap-2"><span className="text-gold mt-0.5">→</span><span className="font-medium">Provenance documentation built at identification, not at deal closing</span></li>
                  <li className="flex gap-2"><span className="text-gold mt-0.5">→</span><span className="font-medium">Direct operator network expands the addressable pool by orders of magnitude</span></li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="mt-8 rounded-xl border border-gold/30 bg-ink/40 p-6 md:p-7">
              <p className="text-base text-light leading-relaxed">
                The framework matters more than the number. Scottsdale&rsquo;s team can stress-test the numbers against their own deal book. What the upstream position structurally provides is a <span className="text-gold font-semibold">discount-to-spot plus a confidentiality premium</span> Scottsdale captures by being the first sovereign-tier buyer the operator sees. The mechanism is defensible at the operator level. The size of the capture is the team&rsquo;s to calibrate against their actual book.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 5 · DEAL ANATOMY ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              Deal Anatomy
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              One closed deal, <span className="text-gold">end to end.</span>
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              Showing one deal flow end to end with the verifiable checkpoints at every step is more honest than projecting volume. The diagram below is the canonical shape. Volume is a function of how many of these flows the partnership chooses to run in parallel.
            </p>
          </Reveal>

          <div className="space-y-3">
            {[
              { n: "01", title: "Site identified", who: "MotherLode CMI", body: "Per-site critical-minerals and precious-metals bycatch prediction surfaces a candidate site with documented historical assay records and modern field-signature confirmation." },
              { n: "02", title: "Operator vetted", who: "Network Vetting Standard", body: "KYC verified, AML attested, OFAC screened, beneficial owner background-checked, state precious-metals dealer license verified. Vetting is not optional." },
              { n: "03", title: "Provenance documented at identification", who: "Wyoming Reserve audit standard", body: "Chain-of-custody documentation assembled before deal initiation. Source, regulatory framework, prior owner history, assay validation. Documentation travels with the metal." },
              { n: "04", title: "Sovereign-tier buyer matched", who: "Scottsdale Mint", body: "Buyer identity isolated through the matching layer. Category exposed, identity revealed under NDA only at bid acceptance. Scottsdale Mint configured as a preferred or exclusive buyer per the engagement structure agreed." },
              { n: "05", title: "Transaction closed", who: "Closure Layer", body: "Multi-language contract automation, customs paperwork, AML and KYC attestation that travels with the deal, settlement rails. Last-mile friction eliminated." },
              { n: "06", title: "Physical metal lands", who: "Casper, Wyoming Reserve, or designated custody", body: "US-origin metal with full provenance documentation arrives at Scottsdale-designated custody. Wyoming Reserve narrative reinforced by another audit-grade record." },
              { n: "07", title: "Verified outcome returns to model", who: "Behavioral Data Layer", body: "Recovery outcome, assay confirmation, downstream processing notes feed back into MotherLode CMI. Confidence intervals tighten. Next identification is more precise." },
            ].map((step, i, arr) => (
              <Reveal key={step.n} delay={60 + i * 30}>
                <div className="relative rounded-xl border border-gold/20 bg-surface/40 p-5 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="md:w-32 md:shrink-0">
                    <div className="text-2xl md:text-3xl font-bold text-gold leading-none mb-1">{step.n}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold leading-tight">{step.who}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-text mb-2 leading-snug">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block absolute -bottom-2.5 left-12 text-gold/40 text-xs font-bold tracking-widest" aria-hidden>↓</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6 md:p-7 text-center">
              <p className="text-base md:text-lg text-light leading-relaxed">
                Step 07 closes the loop into Step 01. Every closed deal makes the next identification sharper. The competitive gap widens with each transaction. This is the structural mechanism, not a projection.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ SECTION 6 · DATA RETURN TO SCOTTSDALE ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              What the Network Returns
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The data that strengthens <span className="text-gold">every conversation Scottsdale is already having.</span>
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              The network does not just produce deal flow. Every transaction generates a defensible audit-grade record that strengthens Scottsdale&rsquo;s posture in adjacent conversations with sovereign clients, federal program offices, and the broader sound-money policy environment Scottsdale operates within.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "CFIUS and DOE narrative support",
                body: "Every closed deal carries documented U.S. origin, vetted operator, and audit-grade chain of custody. The record is exactly the shape Department of Energy NOFO submissions, DPA Title III conversations, and CFIUS supply-chain reviews require. Scottsdale gains audit-grade documentation it can present in those conversations without reverse-engineering it after the fact.",
              },
              {
                title: "Wyoming Reserve custody narrative compounding",
                body: "Every closed deal that lands physical metal under Wyoming Reserve custody is a published proof point. The custody narrative compounds with every transaction. Wells Fargo selecting Wyoming Reserve in March 2026 was institutional validation. Continued sovereign-tier deal flow becomes operational validation.",
              },
              {
                title: "Hyperscale partnership operationalization",
                body: "The April 2026 partnership announcement is currently a commitment. Sourcing Network deal flow turns the commitment into weekly transactions Hyperscale can point to. Their reserve commitment becomes a deployed reserve. Scottsdale becomes the operational engine behind the announcement.",
              },
              {
                title: "Sovereign client retention and acquisition",
                body: "Central bank and sovereign-tier clients increasingly demand provenance documentation that survives counterparty change. Every audit-grade record produced by the network strengthens Scottsdale&rsquo;s position with existing sovereign clients and lowers the friction of acquiring new ones in the same category.",
              },
              {
                title: "Federal program officer credibility",
                body: "Domestic critical-minerals identification with documented U.S. origin is what DOE NOFO, EPA orphan well, NETL CORE-CM, and adjacent federal program officers are looking to verify. The network produces the documentation in the format federal program officers can accept directly into their submission packages.",
              },
              {
                title: "Competitive defensibility against late entrants",
                body: "Patent posture extends to the operational network when Scottsdale is the named buyer of record. Competitors entering after the partnership cannot replicate the data flywheel without infringing on the underlying patent claim or building an entirely separate transactional layer at scale.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={60 + i * 30}>
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

      {/* ━━━━━━━━━━━━━━━━━ SECTION 7 · PHASE 1 BUILD ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              Phase 1 Build
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Five components. <span className="text-gold">Three to six months.</span>
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              Phase 1 is the minimum viable Provenance Sourcing Network that produces real sovereign-grade deal flow into Scottsdale Mint within three to six months of commitment. Components A through E build to a working flywheel. The Phase 1 build is the same regardless of which engagement structure Scottsdale chooses.
            </p>
          </Reveal>

          <div className="space-y-4">
            {[
              { k: "A", title: "Discovery", status: "Live today", tone: "gold", body: "MotherLode CMI as it exists. Demo running. Provisional patent filed. Predicts per-site critical-minerals and precious-metals bycatch across mining-active United States. Feeds the supply funnel by surfacing operators with high-confidence sites." },
              { k: "B", title: "Sourcing Pipeline", status: "Phase 1", tone: "muted", body: "Curated supply intake. KYC verified, AML attested, OFAC screened, chain-of-custody documented, beneficial owner verified, state precious-metals dealer license verified. Vetting is not optional. The network&rsquo;s value to Scottsdale depends on every listing being defensible under sovereign-tier scrutiny." },
              { k: "C", title: "Buyer Tier with Auction Mechanics", status: "Phase 1", tone: "muted", body: "Three tiers. Sovereign and Treasury (identity isolated, category exposed). Mint Partners (Scottsdale, identity opt-in). Vetted Refiners (small regional and specialty, same vetting standard as supply). Sealed-bid forward purchase, Dutch auction variant, and direct negotiation channel. Identity revealed under NDA at bid acceptance only." },
              { k: "D", title: "Closure Layer", status: "Phase 1", tone: "muted", body: "Multi-language contract automation, customs paperwork, AML and KYC attestation that travels with the deal, settlement rails. Closes the last-mile friction that turns sovereign-tier interest into actual completed transactions." },
              { k: "E", title: "Behavioral Data Layer", status: "Phase 1", tone: "gold", body: "The compounding mechanism. Every closed deal returns verified field outcomes to the MotherLode model. Confidence intervals tighten. Site identification gets sharper. The competitive gap widens with every transaction." },
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
                          c.tone === "gold"
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

      {/* ━━━━━━━━━━━━━━━━━ SECTION 8 · ENGAGEMENT STRUCTURES ━━━━━━━━━━━━━━━━━ */}
      <section id="structures" className="border-t border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
              Engagement Structures
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Four structures. <span className="text-gold">Stackable.</span>
            </h2>
            <p className="text-lg text-light leading-relaxed mb-10 max-w-3xl">
              Each structure is independently configurable. Several are stackable. Scottsdale picks the depth that matches the strategic alignment the team determines appropriate.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Deal-Flow Engagement", tag: "Most strategically interesting", body: "MotherLode CMI becomes the upstream identification and curated sourcing funnel into Scottsdale Mint. The data flywheel runs at full operational capacity behind the Scottsdale reserve and the Wyoming Reserve custody operation. Highest compound moat. Lowest dollar commitment for the structural value returned." },
              { title: "Vertical Exclusivity", tag: "Highest exclusivity", body: "Scottsdale Mint receives exclusive MotherLode access for sovereign and central bank programs. Other Scottsdale verticals operate independently. Highest fee, highest moat, longest commitment. The structure for the team that wants the lane locked." },
              { title: "Strategic Partnership and Equity", tag: "Most permanent", body: "Capital and equity stake in MotherLode CMI. The most permanent commitment. Requires a valuation conversation. Aligns long-term incentive across both organizations. The structure for the team that wants to own the upstream layer outright." },
              { title: "Co-Branded Sourcing Network", tag: "Public-facing", body: "Scottsdale as the public-facing brand on the network. MotherLode as the infrastructure provider. Highest marketing leverage. Most aggressive narrative posture. The structure for the team that wants to extend the Scottsdale brand into the upstream identification space." },
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

          <Reveal delay={400}>
            <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6 md:p-7 text-center">
              <p className="text-base md:text-lg text-light leading-relaxed">
                Phase 1 build is the same regardless of which structure Scottsdale chooses. The structure determines depth of strategic alignment. The build determines operational readiness. Both move in parallel.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ FOOTER / CLOSE ━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-16 md:py-24 text-center">
          <Reveal>
            <p className="text-base md:text-lg text-light italic leading-relaxed mb-6">
              &ldquo;This is why physical metal in the right jurisdiction really matters.&rdquo;
            </p>
            <p className="text-xs text-muted tracking-wider uppercase mb-10">
              Josh Phair, Scottsdale Mint &mdash; January 2026
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-base text-light/85 leading-relaxed max-w-2xl mx-auto">
              MotherLode CMI is the upstream identification layer that makes the right metal land in the right jurisdiction at the right time, with the documentation Scottsdale needs at every step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━ FOOTER ━━━━━━━━━━━━━━━━━ */}
      <footer className="border-t border-white/5 bg-ink">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 text-center">
          <div className="text-xs text-muted leading-relaxed max-w-2xl mx-auto">
            Discussion draft prepared for Scottsdale Mint review by Lucid Tech LLC and the MotherLode CMI team. Not intended for public distribution. Forward-looking statements are working assumptions. The frameworks above are structural mechanisms, not projections. Operational numbers, deal-flow velocity, and capture math are the Scottsdale team&rsquo;s to calibrate against their own book.
          </div>
          <div className="mt-4 text-[11px] text-muted">
            &copy; 2026 Lucid Tech LLC &middot; MotherLode CMI &middot; motherlodecmi.com/scottsdale
          </div>
        </div>
      </footer>
    </main>
  );
}
