"use client";

import { useEffect, useState, useRef } from "react";

interface Commodity {
  symbol: string;
  label: string;
  unit: string;
  base: number;
  decimals: number;
}

const COMMODITIES: Commodity[] = [
  { symbol: "XAU", label: "Gold", unit: "oz", base: 3327.40, decimals: 2 },
  { symbol: "XAG", label: "Silver", unit: "oz", base: 36.82, decimals: 2 },
  { symbol: "HG", label: "Copper", unit: "lb", base: 4.67, decimals: 3 },
  { symbol: "XPT", label: "Platinum", unit: "oz", base: 1042.50, decimals: 2 },
  { symbol: "XPD", label: "Palladium", unit: "oz", base: 1118.00, decimals: 2 },
  { symbol: "COBT", label: "Cobalt", unit: "lb", base: 12.84, decimals: 3 },
  { symbol: "LI", label: "Lithium", unit: "kg", base: 10.20, decimals: 2 },
  { symbol: "ZN", label: "Zinc", unit: "lb", base: 1.32, decimals: 3 },
  { symbol: "PB", label: "Lead", unit: "lb", base: 0.97, decimals: 3 },
  { symbol: "MO", label: "Molybdenum", unit: "lb", base: 18.45, decimals: 2 },
];

function useLivePrices() {
  const [prices, setPrices] = useState(() =>
    COMMODITIES.map((c) => ({ ...c, price: c.base, change: 0, pct: 0 }))
  );
  const prev = useRef(prices.map((p) => p.base));

  useEffect(() => {
    const tick = () => {
      setPrices((cur) =>
        cur.map((c, i) => {
          const drift = (Math.random() - 0.495) * c.base * 0.0008;
          const price = Math.max(c.base * 0.85, c.price + drift);
          const change = price - prev.current[i];
          const pct = (change / prev.current[i]) * 100;
          prev.current[i] = price;
          return { ...c, price, change, pct };
        })
      );
    };
    const id = setInterval(tick, 2800);
    return () => clearInterval(id);
  }, []);

  return prices;
}

export function CommodityTicker() {
  const prices = useLivePrices();
  // Duplicate for seamless scroll
  const items = [...prices, ...prices];

  return (
    <div className="w-full overflow-hidden border-b border-gold/15 bg-ink/90 backdrop-blur-sm" style={{ height: "32px" }}>
      <div className="flex items-center h-full" style={{ animation: "ticker-scroll 60s linear infinite" }}>
        {items.map((c, i) => (
          <div key={i} className="flex items-center gap-1.5 px-5 whitespace-nowrap flex-shrink-0">
            <span className="text-gold/60 text-[10px] font-mono font-bold tracking-widest">{c.symbol}</span>
            <span className="text-white/70 text-[10px]">{c.label}</span>
            <span className="text-white text-[11px] font-mono font-semibold">
              ${c.price.toFixed(c.decimals)}
            </span>
            <span
              className="text-[10px] font-mono"
              style={{ color: c.change >= 0 ? "#4ade80" : "#f87171" }}
            >
              {c.change >= 0 ? "▲" : "▼"}{Math.abs(c.pct).toFixed(2)}%
            </span>
            <span className="text-white/20 text-[10px] ml-2">·</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
