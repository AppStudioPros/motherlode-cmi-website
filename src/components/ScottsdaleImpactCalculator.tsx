"use client";

import { useState } from "react";

/**
 * Interactive impact calculator for the /scottsdale partnership page.
 *
 * Lets the visitor slide a "deals per month" slider and see the network
 * effect compound: monthly metal flow, captured bycatch value, annual
 * first-look transaction value, and the cumulative data-flywheel lead
 * over any competitor entering the market later.
 */
export default function ScottsdaleImpactCalculator() {
  const [dealsPerMonth, setDealsPerMonth] = useState(10);

  // Conservative working assumptions for the model. Numbers are
  // intentionally modest to keep the conversation defensible. Real
  // numbers slot in after the Phair conversation.
  const avgDealOz = 850; // average precious-metal-equivalent oz per deal
  const avgBycatchValuePerDealUSD = 142_000; // REE + minor-metal value per deal that traditional sourcing misses
  const avgFirstLookValuePerDealUSD = 386_000; // value of first-look transaction rights captured
  const flywheelLeadDaysPerDeal = 4.2; // each completed deal extends the data-lead over any future competitor by this many days

  const monthlyOz = dealsPerMonth * avgDealOz;
  const monthlyBycatchUSD = dealsPerMonth * avgBycatchValuePerDealUSD;
  const annualFirstLookUSD = dealsPerMonth * avgFirstLookValuePerDealUSD * 12;
  const flywheelLeadYears = (dealsPerMonth * flywheelLeadDaysPerDeal * 12) / 365;

  const fmt$ = (n: number) =>
    n >= 1_000_000_000
      ? `$${(n / 1_000_000_000).toFixed(2)}B`
      : n >= 1_000_000
      ? `$${(n / 1_000_000).toFixed(1)}M`
      : `$${(n / 1_000).toFixed(0)}K`;

  const fmtN = (n: number) => n.toLocaleString("en-US");

  return (
    <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-surface/80 to-surface2/60 p-6 md:p-10 backdrop-blur">
      <div className="mb-6 md:mb-8">
        <div className="text-xs uppercase tracking-[0.18em] text-gold mb-2 font-semibold">
          Interactive
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-text mb-2">
          The Imploded Impact, in Numbers Scottsdale Can Run On
        </h3>
        <p className="text-muted text-sm md:text-base leading-relaxed">
          Slide the dial. Every value below recalculates in real time. These
          are working assumptions only. Final numbers slot in after the
          Hyperscale partnership scope is confirmed.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline justify-between mb-3">
          <label htmlFor="deals-slider" className="text-sm uppercase tracking-wider text-muted font-semibold">
            Sovereign-grade deals closed per month
          </label>
          <div className="text-4xl md:text-5xl font-bold text-gold tabular-nums">
            {dealsPerMonth}
          </div>
        </div>
        <input
          id="deals-slider"
          type="range"
          min={1}
          max={50}
          value={dealsPerMonth}
          onChange={(e) => setDealsPerMonth(Number(e.target.value))}
          className="w-full h-2 bg-surface2 rounded-full appearance-none cursor-pointer accent-gold"
          style={{
            background: `linear-gradient(to right, #F8AB20 0%, #F8AB20 ${(dealsPerMonth / 50) * 100}%, #252132 ${(dealsPerMonth / 50) * 100}%, #252132 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-muted mt-2">
          <span>1 deal</span>
          <span>50 deals</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div className="rounded-xl bg-ink/60 border border-white/10 p-5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-2 font-semibold">
            Monthly Metal Flow
          </div>
          <div className="text-2xl md:text-3xl font-bold text-text tabular-nums">
            {fmtN(monthlyOz)} oz
          </div>
          <div className="text-xs text-muted mt-1.5 leading-relaxed">
            Precious-metal-equivalent ounces flowing through the network per month.
          </div>
        </div>

        <div className="rounded-xl bg-ink/60 border border-white/10 p-5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-2 font-semibold">
            Monthly Bycatch Captured
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gold tabular-nums">
            {fmt$(monthlyBycatchUSD)}
          </div>
          <div className="text-xs text-muted mt-1.5 leading-relaxed">
            REE plus minor-metal value Scottsdale captures that traditional sourcing leaves in the ground.
          </div>
        </div>

        <div className="rounded-xl bg-ink/60 border border-white/10 p-5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-2 font-semibold">
            Annual First-Look Transaction Value
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gold tabular-nums">
            {fmt$(annualFirstLookUSD)}
          </div>
          <div className="text-xs text-muted mt-1.5 leading-relaxed">
            Annualized value of metal Scottsdale gets first look on, before it touches the open supply chain.
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-gold/15 to-copper/10 border border-gold/40 p-5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2 font-semibold">
            Data Flywheel Lead, Year One
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gold tabular-nums">
            {flywheelLeadYears.toFixed(1)} years
          </div>
          <div className="text-xs text-light mt-1.5 leading-relaxed">
            How far ahead of any future competitor the model sits after one year at this deal velocity. Every closed deal makes the gap wider, not narrower.
          </div>
        </div>
      </div>

      <div className="mt-6 text-[11px] text-muted leading-relaxed border-t border-white/5 pt-4">
        Working assumptions used in this calculator. Average 850 oz precious-metal-equivalent per closed deal, $142K average bycatch capture per deal, $386K average first-look transaction value per deal, 4.2 days of irreplicable data-lead added per closed deal. Final numbers calibrated after Hyperscale partnership scope is confirmed.
      </div>
    </div>
  );
}
