"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import "./demo.css";

// This component reproduces the original demo experience.
// We render the body markup as JSX, load Leaflet via next/script,
// and then execute the original demo logic in a useEffect after
// Leaflet has loaded and the DOM is mounted.
export function DemoClient({ demoLogic }: { demoLogic: string }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Remove the marketing-site ambient background overlay so the demo's
    // own dark theme isn't fighting with the homepage gold-glow.
    document.querySelectorAll(".ambient-bg").forEach((el) => el.remove());
    document.body.classList.add("demo-body-active");

    const tryStart = () => {
      if (typeof window === "undefined" || !(window as unknown as { L?: unknown }).L) {
        // Leaflet not loaded yet, retry in 100ms
        setTimeout(tryStart, 100);
        return;
      }
      try {
        // Execute the demo logic in the global window scope
        new Function(demoLogic)();
      } catch (e) {
        console.error("[demo] init failed:", e);
      }
    };
    tryStart();

    return () => {
      document.body.classList.remove("demo-body-active");
    };
  }, [demoLogic]);

  return (
    <>
      {/* Leaflet CSS (CDN) */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      {/* Leaflet JS (CDN) — loaded before our effect runs */}
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
        strategy="afterInteractive"
      />

      <div className="topbar">
        <div className="brand">
          <span className="brand-name">MotherLode CMI</span>
          <span className="brand-sub">Live Demo · Colorado Front Range</span>
        </div>
        <span className="badge"><span className="badge-dot"></span>Patent Filed · Confidential</span>
      </div>

      <div className="container">
        {/* HERO */}
        <div className="hero">
          <h1>
            Per-site <span className="accent">critical-minerals intelligence</span><br />
            across the entire mining-active United States.
          </h1>
          <p className="hero-sub">
            MotherLode CMI integrates AI with comprehensive historical mining records, federal and state databases, and modern geological data to predict per-site critical-minerals content at fidelity not previously available, at speeds measured in hours, not months.
          </p>
          <div className="hero-why">
            <span className="why-pill"><strong>~95%</strong> of mining-active U.S. land outside modern survey coverage</span>
            <span className="why-pill"><strong>100K+</strong> documented historical sites with no critical-minerals characterization</span>
            <span className="why-pill"><strong>$50K–$200K</strong> replaced per site in engineering pre-screen costs</span>
            <span className="why-pill"><strong>Patent Filed</strong> — proprietary AI-scored reactivation methodology</span>
          </div>
        </div>

        {/* DEMO DISCLAIMER */}
        <div className="demo-disclaimer" role="note" aria-label="Demonstration disclaimer">
          <span className="demo-disclaimer-label">Demonstration Notice</span>
          <p>
            This is a low-level demonstration. The data shown is representative, not production-grade.
            Final platform capabilities exceed what&apos;s visible here.
          </p>
        </div>

        {/* MAP BLOCK */}
        <div className="map-block">
          <div className="map-block-header">
            <div className="map-block-title">
              ⛏ Golden → Nederland Corridor
              <span className="map-block-sub">12 historically documented sites · Click any pin to load base data and run a scan</span>
            </div>
            <button className="map-toggle-btn" id="mapToggleBtn">Collapse Map</button>
          </div>
          <div className="map-wrap" id="mapWrap">
            <div id="map"></div>
            <div className="legend">
              <div className="legend-row"><span className="dot" style={{ background: "var(--green)" }}></span>Score 80-100 · High potential</div>
              <div className="legend-row"><span className="dot" style={{ background: "var(--accent)" }}></span>Score 60-79 · Medium</div>
              <div className="legend-row"><span className="dot" style={{ background: "var(--text-subtle)" }}></span>Score &lt;60 · Lower</div>
            </div>
          </div>
        </div>

        {/* DATA OUTPUT (renders after selection) */}
        <div className="data-section" id="dataSection"></div>

        <div className="footer-note">
          © 2026 Lucid Tech LLC · MotherLode CMI · Patent Filed · For evaluation purposes only.
        </div>
      </div>
    </>
  );
}
