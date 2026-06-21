import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Marketplace — MotherLode CMI",
  description:
    "Scored mine claims, mineral rights, and industrial feedstock. Every listing carries a MotherLode Score. Free to list. Four percent at close.",
};

export default function MarketplacePage() {
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
            <a href="/marketplace" className="text-gold transition-colors">Marketplace</a>
            <a href="/sourcing" className="text-muted hover:text-text transition-colors">Sourcing</a>
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
            Marketplace
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            The first marketplace where every listing is scored before it goes live.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-light max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-14">
            Mine claims. Mineral rights. Industrial feedstock. Every listing carries a MotherLode Score — calculated from the same integrated dataset that powers the full platform. No guessing. No misrepresentation. No blind offers.
          </p>
        </div>
      </section>

      {/* Hero Stats Strip */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-surface/40 via-surface2/40 to-surface/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="pb-6 md:pb-0 border-b border-white/10 md:border-b-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-2">Free</div>
              <div className="text-sm text-muted">To list any asset</div>
            </div>
            <div className="pb-6 md:pb-0 border-b border-white/10 md:border-b-0 md:border-x md:border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-2">4%</div>
              <div className="text-sm text-muted">Commission at close only</div>
            </div>
            <div className="pb-6 md:pb-0 border-b border-white/10 md:border-b-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-2">Scored</div>
              <div className="text-sm text-muted">Every listing, before it goes live</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-2">Verified</div>
              <div className="text-sm text-muted">Assays, chain-of-custody, fraud screening</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 3-step */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-center">
            How it works.
          </h2>
          <p className="text-base sm:text-lg text-light text-center max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed">
            Every other mining marketplace is a listing board — asking price, a seller description, and no way to know if the site is worth what someone is asking. MotherLode Marketplace changes every part of that.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <article className="h-full rounded-2xl border border-gold/20 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-sm p-5 sm:p-7 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-bold text-gold mb-3">1</div>
                <h3 className="text-lg font-bold mb-3">List your asset</h3>
                <p className="text-[15px] sm:text-sm text-light leading-relaxed">Mine claim, mineral rights, or industrial feedstock. Free to list. The platform pulls public record data, generates a MotherLode Score, and produces a value estimate before the listing goes live.</p>
              </article>
            </Reveal>
            <Reveal delay={150}>
              <article className="h-full rounded-2xl border border-gold/20 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-sm p-5 sm:p-7 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-bold text-gold mb-3">2</div>
                <h3 className="text-lg font-bold mb-3">Buyers find you by score</h3>
                <p className="text-[15px] sm:text-sm text-light leading-relaxed">Buyers search and filter by MotherLode Score, commodity, state, price, and rework cost. Your asking price is benchmarked against the score — fairly priced listings surface first. Deal alerts notify matched buyers instantly.</p>
              </article>
            </Reveal>
            <Reveal delay={300}>
              <article className="h-full rounded-2xl border border-gold/20 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-sm p-5 sm:p-7 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-bold text-gold mb-3">3</div>
                <h3 className="text-lg font-bold mb-3">Close with confidence</h3>
                <p className="text-[15px] sm:text-sm text-light leading-relaxed">Verified assays, chain-of-custody documentation, comparable closed transactions, scam pattern screening, and a per-state tax calculator. Four percent commission at close — the marketplace earns when you earn.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What You Can Trade */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-center">
            Three asset classes. One scoring engine.
          </h2>
          <p className="text-base sm:text-lg text-light text-center max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed">
            Whether you are selling a forty-acre gold claim, leasing mineral rights on inherited land, or moving five hundred tons of REE-bearing tailings to a refiner — every listing carries a MotherLode Score calculated from the same integrated dataset.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <Card
                title="Mine Claims"
                body="Active claims, patented ground, and open BLM parcels. Each listing shows the MotherLode Score, bycatch predictions with confidence intervals, claim status, regulatory pathway, and estimated rework economics. Asking price benchmarked against the score on every listing."
              />
            </Reveal>
            <Reveal delay={100}>
              <Card
                title="Mineral Rights"
                body="Sell outright or lease with a defined royalty structure. The scoring engine evaluates mineral rights parcels the same way it evaluates mine claims — bycatch potential, commodity mix, era-specific recovery models, and current market value. Both sale and lease listings supported."
              />
            </Reveal>
            <Reveal delay={200}>
              <Card
                title="Industrial Feedstock"
                body="Tailings operators and site owners list available material by tonnage, mineral composition, purity grade, and delivery logistics. Refiners and processors search by the mineral they need, the volume they need, and the region they need it from. The marketplace connects supply to demand."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-center">
            What makes this different from every other listing board.
          </h2>
          <p className="text-base sm:text-lg text-light text-center max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed">
            Every other mining claim and mineral rights marketplace is a listing board. Asking price, a description the seller wrote, no verification, no valuation, no way to know if the site is worth what someone is asking. MotherLode Marketplace changes every part of that.
          </p>
          <div className="space-y-6">
            <Reveal delay={0}>
              <Feature
                title="Every listing carries a MotherLode Score"
                body="No listing goes live without a score. Bycatch potential, historical production, claim status, regulatory complexity, and modern recovery economics — calculated before a buyer asks a single question."
              />
            </Reveal>
            <Reveal delay={80}>
              <Feature
                title="Every asking price benchmarked against the score"
                body="A Score-85 site listed at eight thousand dollars is flagged as below market. A Score-42 site listed at forty-five thousand is flagged accordingly. Buyers see the value gap clearly. Sellers who price to the score transact faster."
              />
            </Reveal>
            <Reveal delay={160}>
              <Feature
                title="Verified assays with chain-of-custody documentation"
                body="Verified listings require original assay records and chain-of-custody documentation. The platform cross-references submitted documents against historical USGS records for the same site. Discrepancies are flagged before the listing goes live."
              />
            </Reveal>
            <Reveal delay={240}>
              <Feature
                title="Scam patterns flagged automatically"
                body="The refile-and-resell pattern, claims sold with misrepresented commodity history, and listings that duplicate previously recorded sites under new names. Flagged listings are held for review before buyer contact is permitted."
              />
            </Reveal>
            <Reveal delay={320}>
              <Feature
                title="Comparable closed transactions — not asking prices"
                body="Transaction history based on actual closes, not what people hoped to get. The first marketplace where you can see what similar sites actually sold for."
              />
            </Reveal>
            <Reveal delay={400}>
              <Feature
                title="Every closed transaction feeds the model"
                body="Verified outcomes — what the site yielded, what the rework cost, what the actual recovery rate was — flow back into the scoring engine. The marketplace makes the intelligence more accurate with every deal."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industrial Buyers & Sellers */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
            Industrial
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
            Built for volume. Built for compliance. Built for the supply chain.
          </h2>
          <p className="text-base sm:text-lg text-light max-w-4xl mb-10 sm:mb-14 leading-relaxed">
            The consumer marketplace connects individual buyers and sellers. The industrial layer connects operators, refiners, processors, and federal program participants at the scale the domestic supply chain requires.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={0}>
              <Card
                title="Offtake Agreements"
                body="Long-term supply contracts, not one-time sales. Refiners post what they need — mineral type, volume, purity, region. Operators with matching scored sites are surfaced automatically. The marketplace brokers the introduction and documents the agreement."
              />
            </Reveal>
            <Reveal delay={100}>
              <Card
                title="Request for Quotation Board"
                body="Buyers post demand signals: mineral, tonnage, grade, delivery window, target region. Operators with matching supply are notified. The RFQ board creates a live demand signal that tells the market exactly what minerals are needed right now."
              />
            </Reveal>
            <Reveal delay={200}>
              <Card
                title="Verified Industrial Buyers"
                body="Refiners, processors, and DOE or DOD awardees with verified credentials see enriched data — full bycatch breakdowns, recovery economics, and compliance-ready documentation. Verified buyer badge builds trust with serious sellers."
              />
            </Reveal>
            <Reveal delay={300}>
              <Card
                title="Federal Compliance Package"
                body="Per-site documentation formatted for DOE and DOD grant applications, DPA Title III submissions, and program-manager review. Provenance chain, assay history, chain-of-custody, and regulatory pathway — exportable in one click."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logistics & Pricing */}
      <section className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5">
                  Logistics
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  Total landed cost, not just material cost.
                </h2>
                <p className="text-base sm:text-lg text-light leading-relaxed mb-4">
                  Every industrial feedstock listing includes estimated shipping cost based on tonnage, origin, and destination. Hazmat classification flags for mercury-contaminated tailings. Nearest processing facility mapped.
                </p>
                <p className="text-base sm:text-lg text-light leading-relaxed">
                  Industrial buyers evaluate total landed cost before making contact. Sellers who provide logistics detail transact faster and at higher prices.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal delay={150}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5">
                  Price Index
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  The reference price for domestic secondary feedstock.
                </h2>
                <p className="text-base sm:text-lg text-light leading-relaxed mb-4">
                  Transaction prices tracked over time by mineral, region, and grade. The MotherLode Index becomes the pricing reference for domestic mine tailings and secondary mineral feedstock — a dataset that does not exist today.
                </p>
                <p className="text-base sm:text-lg text-light leading-relaxed">
                  As transaction volume grows, the index becomes a licensable data product and a standard reference for the industry.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Value Estimator */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <Reveal delay={0}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-center">
              Know what your site is worth before you list it.
            </h2>
            <p className="text-base sm:text-lg text-light text-center max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed">
              Every seller runs the value estimator before the listing goes live. Low, mid, and high scenario at current commodity prices. No account required.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <SmallCard
                title="Scored value range"
                body="Based on the site's public record, commodity mix, acreage, and current market prices. Three scenarios: conservative, mid-range, and optimistic."
              />
            </Reveal>
            <Reveal delay={100}>
              <SmallCard
                title="Per-state tax calculator"
                body="Federal capital gains, state severance tax, state income tax, depletion allowance, and the four percent marketplace commission. Net proceeds estimate before you set your asking price."
              />
            </Reveal>
            <Reveal delay={200}>
              <SmallCard
                title="Deal alert engine"
                body="Set your criteria and receive alerts when a matching listing goes live. Score range, commodity type, state, price ceiling. The search does what manual research cannot."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Two Listing Types */}
      <section className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-center">
            Two listing types. Both free to list.
          </h2>
          <p className="text-base sm:text-lg text-light text-center max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed">
            No listing fees. No monthly charges. Four percent commission at close only. Sellers keep the upside. The marketplace earns when you earn.
          </p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Reveal delay={0}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 hover:bg-white/[0.06] transition-colors">
                <h3 className="text-xl font-bold mb-1">Standard Listing</h3>
                <div className="text-gold text-sm font-medium mb-4">Any claim or mineral rights holder</div>
                <ul className="space-y-3 text-sm text-light">
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"></span>MotherLode Score displayed on listing</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"></span>Value estimate range generated at submission</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"></span>Asking price vs. score benchmark</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"></span>BLM and state claim status verified</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"></span>Basic site history from public record</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"></span>Per-state tax summary attached</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"></span>Buyer inquiry form</li>
                </ul>
                <p className="text-xs text-muted mt-5">No verified assay required. Score and value estimate reflect public record data only.</p>
              </article>
            </Reveal>
            <Reveal delay={150}>
              <article className="h-full rounded-2xl border border-gold/30 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8 hover:border-gold/50 transition-colors">
                <h3 className="text-xl font-bold mb-1">Verified Listing</h3>
                <div className="text-gold text-sm font-medium mb-4">Sellers with documented assay history</div>
                <ul className="space-y-3 text-sm text-light">
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>All Standard features included</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>Verified assay badge</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>Chain-of-custody documentation reviewed</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>Public record cross-reference completed</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>Priority placement in search results</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>Fraud pattern screening</li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>Full value estimate with confidence interval</li>
                </ul>
                <p className="text-xs text-muted mt-5">Verified listings transact at a materially higher rate and carry documentation that meets institutional buyer requirements.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Multi-Party Deals */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <Reveal delay={0}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-gold/30 text-gold bg-gold/5 mb-5 sm:mb-6">
              Deal Structuring
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
              Mining deals are never just buyer and seller.
            </h2>
            <p className="text-base sm:text-lg text-light leading-relaxed mb-5 max-w-4xl">
              A productive transaction often requires a claim owner, an operator, a refiner, and a logistics partner. The marketplace supports multi-party deal structuring around scored sites — bringing all parties into a single coordinated view with shared documentation and transparent economics.
            </p>
            <p className="text-base sm:text-lg text-light leading-relaxed max-w-4xl">
              Four percent commission on the completed deal. The marketplace earns when value is created, not before.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-14 sm:py-20 md:py-28 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12 text-center">
            Where to start, by who you are.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0}>
              <AudienceCard
                label="Sellers"
                title="Claim owners and landowners"
                body="List your mine claim or mineral rights for free. Get a MotherLode Score and value estimate before you set your price. Reach buyers who are searching by score, commodity, and region."
              />
            </Reveal>
            <Reveal delay={100}>
              <AudienceCard
                label="Buyers"
                title="Prospectors and operators"
                body="Search by MotherLode Score, commodity, state, estimated rework cost, and asking price. Set deal alerts. See comparable closed transactions. Know what a site is worth before you make an offer."
              />
            </Reveal>
            <Reveal delay={200}>
              <AudienceCard
                label="Refiners"
                title="Industrial processors"
                body="Search feedstock listings by mineral, volume, purity, and region. Post offtake requirements on the RFQ board. Get matched to scored supply with verified assays and logistics estimates."
              />
            </Reveal>
            <Reveal delay={300}>
              <AudienceCard
                label="Federal"
                title="Program participants"
                body="DOE and DOD awardees, DPA Title III participants, and state geological surveys. Access compliance-ready documentation and provenance-grade transaction records formatted for program reporting."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 sm:mb-6">
            The marketplace opens with the platform.
          </h2>
          <p className="text-base sm:text-lg text-light leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Early access for operators with documented supply and refiners building domestic feedstock pipelines. Reach the team directly.
          </p>
          <a
            href="mailto:marketplace@motherlodecmi.com"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-gold to-copper text-ink font-semibold hover:opacity-90 transition-opacity"
          >
            marketplace@motherlodecmi.com
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

/* ── Reusable Components ── */

function Card({ title, body }: { title: string; body: string }) {
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

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-300">
      <h3 className="text-base sm:text-lg font-bold mb-2">{title}</h3>
      <p className="text-[15px] sm:text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}

function AudienceCard({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 hover:bg-white/[0.08] hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
      <div className="text-gold text-xs font-bold uppercase tracking-[0.18em] mb-2">{label}</div>
      <h3 className="text-base font-bold mb-3">{title}</h3>
      <p className="text-[15px] sm:text-sm text-light leading-relaxed">{body}</p>
    </article>
  );
}
