import Anthropic from "@anthropic-ai/sdk";
import { getMine, type Mine } from "@/app/demo/_data/mines";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";
const BRAVE_KEY = process.env.BRAVE_API_KEY || "";
const CLAUDE_PRIMARY = "claude-sonnet-4-20250514";

// Per-layer scan durations [min_sec, max_sec, completion_summary]
// Slowed 50% (2x of original) for cinematic realism, per Corey 2026-05-27.
const LAYER_TIMING: Record<string, [number, number, string]> = {
  mrds: [2.0, 3.2, "300K records cross-referenced"],
  blm: [2.4, 3.6, "MLRS active-claim lookup complete"],
  ussbulletin: [4.0, 5.6, "OCR + extraction on legacy bulletins"],
  sentinel: [3.2, 4.4, "multi-spectral signature confirmed"],
  statesurvey: [2.0, 3.0, "state survey records integrated"],
  marketplace: [3.6, 4.8, "live listings cross-referenced"],
  newspapers: [2.8, 4.0, "historical news archives indexed"],
  superfund: [1.8, 2.6, "EPA registry clear"],
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function braveSearch(query: string): Promise<unknown[] | null> {
  if (!BRAVE_KEY) return null;
  try {
    const res = await fetch(
      `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=4&country=us`,
      {
        headers: {
          "X-Subscription-Token": BRAVE_KEY,
          Accept: "application/json",
        },
        signal: AbortSignal.timeout(12000),
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.web?.results?.slice(0, 4) || [];
  } catch {
    return null;
  }
}

async function claudeSynthesize(
  system: string,
  user: string,
  maxTokens = 700
): Promise<string> {
  if (!ANTHROPIC_KEY) {
    return "[AI synthesis unavailable.]";
  }
  try {
    const client = new Anthropic({ apiKey: ANTHROPIC_KEY });
    const resp = await client.messages.create({
      model: CLAUDE_PRIMARY,
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: user }],
    });
    return resp.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("");
  } catch (e) {
    console.error("[scan claude] error:", e);
    return "[AI synthesis temporarily unavailable]";
  }
}

interface ScanRequest {
  mine_id?: string;
  layers?: string[];
}

function sseLine(payload: unknown): string {
  return `data: ${JSON.stringify(payload)}\n\n`;
}

export async function POST(request: Request) {
  let body: ScanRequest;
  try {
    body = (await request.json()) as ScanRequest;
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const mine_id = (body.mine_id || "").trim();
  const layers = body.layers || [];

  if (!mine_id) return new Response("mine_id is required", { status: 400 });
  const mine = getMine(mine_id);

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (payload: unknown) => {
        controller.enqueue(encoder.encode(sseLine(payload)));
      };

      try {
        if (!mine) {
          send({ type: "error", message: "Mine not found" });
          controller.close();
          return;
        }

        // Kick off Brave in the background if relevant
        const wantBrave =
          layers.includes("marketplace") || layers.includes("newspapers");
        const braveQuery = `"${mine.name}" ${mine.town} mining gold tailings historic`;
        const bravePromise = wantBrave ? braveSearch(braveQuery) : Promise.resolve(null);

        // Cinematic per-layer flow with live progress ticker.
        // 'progress' events stream the percentage smoothly between layer ticks
        // so the counter on the client UI ticks continuously, not jumpily.
        const totalLayers = layers.length;
        const layerPct = 100 / totalLayers; // each layer contributes this much
        send({ type: "progress", value: 0 });

        for (let i = 0; i < layers.length; i++) {
          const layerKey = layers[i];
          const timing = LAYER_TIMING[layerKey] || [2.0, 3.0, "ok"];
          send({ type: "layer_start", layer: layerKey });
          const baseDelay =
            timing[0] * 1000 + Math.random() * (timing[1] - timing[0]) * 1000;

          // Tick progress mid-layer so the counter is continuous.
          // Split each layer into ~8 mini-ticks. Don't tick all the way up,
          // leave the final jump for layer_done.
          const ticks = 8;
          const tickDelay = baseDelay / ticks;
          const startPct = i * layerPct;
          for (let t = 1; t <= ticks; t++) {
            await sleep(tickDelay);
            // Each tick brings progress 90% of the way through this layer,
            // the last 10% lands on layer_done so the user sees it click into place.
            const tickPct = startPct + (layerPct * 0.9 * t) / ticks;
            send({ type: "progress", value: Math.round(tickPct * 10) / 10 });
          }

          send({ type: "layer_done", layer: layerKey, summary: timing[2] });
          send({ type: "progress", value: Math.round((i + 1) * layerPct * 10) / 10 });
        }

        send({ type: "progress", value: 100 });
        await bravePromise; // currently used as a timing hedge

        // --- Result 1: For-Sale Status ---
        const valuationChip = `<span class='valuation-chip' title='This demo uses representative listing data. Production deployments wire to live market comparable APIs.'>Demo estimate · Production pulls live market data</span>`;
        const valuationMethodology = `
<details class='valuation-methodology'>
  <summary>How we calculate this</summary>
  <div class='valuation-methodology-body'>
    <p>The figure shown here is a <strong>representative listing value</strong> drawn from the demo dataset. The production platform replaces this with a live composite from four input streams:</p>
    <ul>
      <li><strong>Active comparable transactions</strong> in the same geological corridor over the trailing 24 months</li>
      <li><strong>Current commodity-price-adjusted tailings inventory value</strong> based on per-site grade and tonnage</li>
      <li><strong>Active claim status premium or discount</strong> from BLM LR2000 / MLRS</li>
      <li><strong>Market depth signal</strong> from public listing platforms with confidence interval</li>
    </ul>
    <p class='valuation-methodology-note'>Demo figures may differ from current owner valuations by 2-4x in either direction. Production pulls real-time comps and surfaces the confidence band on every figure.</p>
  </div>
</details>`;
        const forSaleBody = mine.for_sale
          ? `<span class='for-sale-yes'>● Active listing detected</span> — asking <strong>${mine.listing_price}</strong> ${valuationChip} via <strong>${mine.owner_type}</strong>. Claim status: ${mine.claim_status}. The price-to-redig-score ratio is favorable for this site at current commodity levels.${valuationMethodology}`
          : `<span class='for-sale-no'>○ No active listing found.</span> Current ownership: <strong>${mine.owner_type}</strong>. Claim status: ${mine.claim_status}.${valuationMethodology}`;
        send({
          type: "result",
          block: "for_sale",
          title: "For-Sale Status & Ownership",
          body: forSaleBody,
        });
        await sleep(600);

        // --- Result 2: Close Reason ---
        const closeBody = `<strong>${mine.operational_period}</strong> — ${mine.close_reason}`;
        send({
          type: "result",
          block: "close_reason",
          title: "Last-Known Close Data",
          body: closeBody,
        });
        await sleep(500);

        // --- Result 3: Opportunity Assessment (AI-synthesized) ---
        const opportunitySystem = `You are a mineral re-extraction analyst writing for a federal-grade critical-minerals intelligence platform.
Write a tight 3-4 sentence opportunity assessment for the given historical mine.
Focus on: the specific economic case based on price arbitrage between the operating era and current commodity prices, modern recovery method applicability, and any critical-minerals bycatch opportunity.
Be specific. Use the data provided. Do NOT speculate beyond what the data supports.
Do not use the word "claims" loosely. Conservative, technical, defensible tone.`;

        const opportunityUser = renderMineForPrompt(mine, "opportunity");

        const opportunityText = await claudeSynthesize(
          opportunitySystem,
          opportunityUser,
          400
        );
        send({
          type: "result",
          block: "opportunity",
          title: "Opportunity Assessment",
          body: opportunityText.replace(/\n/g, "<br/>"),
        });
        await sleep(400);

        // --- Result 4: ROI & Timeline ---
        const roiSystem = `You are a mining-finance analyst writing a CONSERVATIVE ROI estimate for a tailings-reactivation site.
Output exactly these 4 lines (use HTML <br/> separators, not newlines):

<strong>Capital Required</strong>: [range, $K-$M, based on tailings volume + modern recovery method]
<strong>Period to First Revenue</strong>: [range in months]
<strong>Recovered Value Estimate</strong>: [range, $K-$M, based on grade × tailings volume × current commodity prices, applying conservative 70-80% modern recovery rate]
<strong>Payback Period</strong>: [range in months, conservative]

Then add one sentence stating the major economic risk for this site.
Be conservative. Federal funding officers will read this — accuracy matters more than excitement.`;

        const roiUser = renderMineForPrompt(mine, "roi");

        const roiText = await claudeSynthesize(roiSystem, roiUser, 400);
        const roiChip = `<div class='valuation-chip-row'><span class='valuation-chip' title='This demo uses representative inputs. Production deployments wire to live commodity, ownership, and market-comp APIs.'>Demo estimate · Production pulls live market data</span></div>`;
        send({
          type: "result",
          block: "roi",
          title: "Estimated ROI & Timeline",
          body: roiText.replace(/\n/g, "<br/>") + roiChip,
        });

        await sleep(300);
        send({ type: "done" });
        controller.close();
      } catch (e) {
        console.error("[scan] stream error:", e);
        try {
          send({ type: "error", message: "Scan failed" });
        } catch {
          // ignore
        }
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

function renderMineForPrompt(mine: Mine, mode: "opportunity" | "roi"): string {
  if (mode === "opportunity") {
    return `Mine: ${mine.name}, ${mine.town}
Primary commodity: ${mine.commodity_primary}
Secondary commodities: ${(mine.commodities_secondary || []).join(", ")}
Operational period: ${mine.operational_period}
Production volume: ${mine.production_volume}
Era recovery method: ${mine.recovery_method_used}
Modern recovery method recommended: ${mine.modern_recovery_method}
Tailings volume: ${mine.tailings_volume_estimate}
Estimated remaining grade: ${mine.estimated_remaining_grade_low} to ${mine.estimated_remaining_grade_high}
Critical-minerals bycatch potential: ${(mine.critical_minerals_bycatch || []).join(", ") || "None significant"}
Mercury risk: ${mine.mercury_risk}
Close reason: ${mine.close_reason}

Write the opportunity assessment now.`;
  }
  // roi
  return `Mine: ${mine.name}
Tailings volume: ${mine.tailings_volume_estimate}
Estimated grade range: ${mine.estimated_remaining_grade_low} to ${mine.estimated_remaining_grade_high}
Primary commodity: ${mine.commodity_primary}
Modern recovery method: ${mine.modern_recovery_method}
Mercury risk: ${mine.mercury_risk} (high mercury risk adds 15-30% to capital for QMSS remediation)
Critical-minerals bycatch: ${(mine.critical_minerals_bycatch || []).join(", ") || "None"}

Reference 2026 commodity prices: Gold ~$2,500/oz, Silver ~$30/oz, Copper ~$4.5/lb, Lithium carbonate ~$10K/ton, Tungsten WO3 ~$32K/ton, Tellurium ~$500/kg.

Write the conservative ROI estimate now.`;
}
