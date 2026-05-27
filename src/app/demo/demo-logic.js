// This file is the original demo's JS logic — loaded into a useEffect by DemoClient.tsx
// ============================================================
// MAP SETUP
// ============================================================
const MAPTILER_KEY = '0BmtzeAwpwMygWvhmjdq';
const map = L.map('map', {
  center: [39.85, -105.52],
  zoom: 10,
  zoomControl: true,
});

if (MAPTILER_KEY) {
  L.tileLayer(`https://api.maptiler.com/maps/streets-v2-dark/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`, {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: '\u00A9 MapTiler \u00A9 OpenStreetMap contributors',
    crossOrigin: true,
  }).addTo(map);
} else {
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '\u00A9 OpenStreetMap contributors \u00A9 CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);
}

let mines = [];
let activeMine = null;
let scanning = false;

const dataSection = document.getElementById('dataSection');
const mapWrap = document.getElementById('mapWrap');
const mapToggleBtn = document.getElementById('mapToggleBtn');

// Map toggle
function setMapCollapsed(collapsed) {
  if (collapsed) {
    mapWrap.classList.add('collapsed');
    mapToggleBtn.textContent = 'Expand Map';
  } else {
    mapWrap.classList.remove('collapsed');
    mapToggleBtn.textContent = 'Collapse Map';
    setTimeout(() => map.invalidateSize(), 550);
  }
}
mapToggleBtn.addEventListener('click', () => {
  setMapCollapsed(!mapWrap.classList.contains('collapsed'));
});

async function loadMines() {
  const res = await fetch('/api/mines');
  mines = await res.json();
  renderPins();
}

function pinColor(score) {
  if (score >= 80) return '#4ade80';
  if (score >= 60) return '#ffb547';
  return '#64748b';
}

function renderPins() {
  mines.forEach(mine => {
    const color = pinColor(mine.redig_potential_score);
    const icon = L.divIcon({
      className: 'pin',
      html: `<div style="width:18px;height:18px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 0 8px ${color};cursor:pointer;"></div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    });
    const marker = L.marker([mine.lat, mine.lng], { icon }).addTo(map);
    marker.bindTooltip(`${mine.name}<br/><small>Score ${mine.redig_potential_score}</small>`, {
      direction: 'top',
      offset: [0, -8],
    });
    marker.on('click', () => selectMine(mine));
  });
}

// ============================================================
// MINE SELECTION
// ============================================================
function selectMine(mine) {
  activeMine = mine;
  renderMineData(mine);
  dataSection.classList.add('active');
  // Smooth scroll to the data section
  setTimeout(() => {
    dataSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function renderMineData(mine) {
  const commodities = [
    `<span class="pill pill-primary">${mine.commodity_primary}</span>`,
    ...mine.commodities_secondary.map(c => `<span class="pill">${c}</span>`),
  ].join('');

  const critical = (mine.critical_minerals_bycatch || [])
    .map(c => `<span class="pill pill-critical">${c}</span>`).join('');

  const mercClass = `merc-${mine.mercury_risk}`;

  dataSection.innerHTML = `
    <!-- Header card -->
    <div class="mine-header-card">
      <div class="mine-header-main">
        <div class="mine-name">${mine.name}</div>
        <div class="mine-town">📍 ${mine.town}</div>
      </div>
      <div class="score-display">
        <div class="score-num">${mine.redig_potential_score}</div>
        <div class="score-meta">
          <span class="score-label">Redig Potential</span>
          <span class="score-of">out of 100</span>
          <div class="score-bar-mini"><div class="score-fill" style="width: ${mine.redig_potential_score}%"></div></div>
        </div>
      </div>
    </div>

    <!-- Base data card -->
    <div class="base-data-card">
      <div class="card-title">Base Data — Historical Record</div>
      <div class="data-grid">
        <div class="data-cell">
          <div class="data-cell-label">Commodities</div>
          <div class="commodity-pills">${commodities}</div>
        </div>
        ${critical ? `<div class="data-cell">
          <div class="data-cell-label">Predicted Critical-Minerals Bycatch</div>
          <div class="commodity-pills">${critical}</div>
        </div>` : ''}
        <div class="data-cell">
          <div class="data-cell-label">Operational Period</div>
          <div class="data-cell-value">${mine.operational_period}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Production Volume</div>
          <div class="data-cell-value">${mine.production_volume}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Era Recovery Method</div>
          <div class="data-cell-value">${mine.recovery_method_used}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Mercury Risk</div>
          <div class="data-cell-value ${mercClass}">${mine.mercury_risk.toUpperCase()}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Estimated Remaining Grade</div>
          <div class="data-cell-value">${mine.estimated_remaining_grade_low} to ${mine.estimated_remaining_grade_high}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Tailings Volume</div>
          <div class="data-cell-value">${mine.tailings_volume_estimate}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Geological Formation</div>
          <div class="data-cell-value">${mine.geological_formation}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Satellite Signature</div>
          <div class="data-cell-value">${mine.satellite_signature}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Claim Status</div>
          <div class="data-cell-value">${mine.claim_status}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Close Reason</div>
          <div class="data-cell-value">${mine.close_reason}</div>
        </div>
      </div>
    </div>

    <!-- Scan controls -->
    <div class="scan-card">
      <div class="card-title">Data Layers to Scan</div>
      <div class="scan-card-row">
        <div class="scan-checkboxes" id="checkboxes">
          ${[
            ['mrds', 'USGS MRDS'],
            ['blm', 'BLM LR2000 / MLRS'],
            ['ussbulletin', 'Historical USGS Bulletins'],
            ['sentinel', 'Sentinel-2 Spectroscopy'],
            ['statesurvey', 'State Geological Survey'],
            ['marketplace', 'Public Listings'],
            ['newspapers', 'Historical Newspapers'],
            ['superfund', 'EPA Superfund Registry'],
          ].map(([k, label]) => `
            <label class="checkbox-row checked" data-key="${k}">
              <input type="checkbox" checked /> ${label}
            </label>
          `).join('')}
        </div>
        <div class="scan-actions" id="scanActions">
          <div class="scan-next-hint" id="scanNextHint" aria-hidden="true">Next: scan this site</div>
          <button class="scan-btn pulse" id="scanBtn" aria-label="Scan for opportunities. Next recommended step.">⚡ Scan for Opportunities</button>
          <button class="clear-btn" id="clearBtn">↺ Clear & Restart</button>
        </div>
      </div>
    </div>

    <!-- Scan progress -->
    <div class="scan-progress" id="scanProgress">
      <div class="scan-progress-head">
        <div class="scan-progress-title">Scanning Integrated Data Layers</div>
        <div class="scan-progress-meter" id="scanProgressMeter" aria-live="polite">
          <span class="scan-progress-percent" id="scanProgressPercent">0%</span>
          <span class="scan-progress-label">Complete</span>
        </div>
      </div>
      <div class="scan-progress-bar"><div class="scan-progress-bar-fill" id="scanProgressBarFill"></div></div>
      <div id="scanLines"></div>
    </div>

    <!-- Result blocks -->
    <div class="result-block" id="forSaleBlock">
      <div class="result-title">For-Sale Status &amp; Ownership</div>
      <div class="result-body" id="forSaleBody"></div>
    </div>

    <div class="result-block" id="closeReasonBlock">
      <div class="result-title">Last-Known Close Data</div>
      <div class="result-body" id="closeReasonBody"></div>
    </div>

    <div class="result-block" id="opportunityBlock">
      <div class="result-title">Opportunity Assessment</div>
      <div class="result-body" id="opportunityBody"></div>
    </div>

    <div class="result-block" id="roiBlock">
      <div class="result-title">Estimated ROI &amp; Timeline</div>
      <div class="result-body" id="roiBody"></div>
    </div>

    <!-- Working indicator, shows while AI is generating result blocks. Hides when chat appears. -->
    <div class="working-indicator" id="workingIndicator" aria-live="polite">
      <span class="working-star" aria-hidden="true">✦</span>
      <span class="working-text" id="workingText">Working on data output</span>
      <span class="working-dots" aria-hidden="true"><span></span><span></span><span></span></span>
    </div>

    <!-- ACI Bot chat -->
    <div class="chat-block" id="chatBlock">
      <div class="chat-header chat-header-spotlight">
        <span class="chat-pulse chat-pulse-live" aria-hidden="true"></span>
        <span class="chat-live-chip" aria-label="Live">LIVE</span>
        <span class="chat-header-text">ACI Bot · Try it now! Ask about this site</span>
      </div>
      <div class="chat-messages" id="chatMessages"></div>
      <div class="chat-input-row">
        <input type="text" class="chat-input" id="chatInput" placeholder="Ask about ${mine.name}..." />
        <button class="chat-send" id="chatSend">→</button>
      </div>
    </div>
  `;

  // Wire checkbox toggle
  document.querySelectorAll('.checkbox-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.tagName !== 'INPUT') {
        const cb = row.querySelector('input');
        cb.checked = !cb.checked;
      }
      row.classList.toggle('checked', row.querySelector('input').checked);
    });
  });

  // Wire scan button. The heartbeat pulse + shimmer + 'Next:' hint all stop
  // on the first click; user got the message, no need to keep pulling their
  // eye to it after that.
  const scanBtn = document.getElementById('scanBtn');
  const scanActions = document.getElementById('scanActions');
  scanBtn.addEventListener('click', () => {
    scanBtn.classList.remove('pulse');
    if (scanActions) scanActions.classList.add('cta-fired');
    runScan();
  });

  // Wire clear button
  document.getElementById('clearBtn').addEventListener('click', clearAll);

  // Wire chat
  document.getElementById('chatSend').addEventListener('click', sendChat);
  document.getElementById('chatInput').addEventListener('keypress', e => {
    if (e.key === 'Enter') sendChat();
  });
}

// ============================================================
// CLEAR / RESTART
// ============================================================
function clearAll() {
  activeMine = null;
  dataSection.innerHTML = '';
  dataSection.classList.remove('active');
  setMapCollapsed(false);
  // Scroll back to map
  document.querySelector('.map-block').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// SCAN FLOW
// ============================================================
async function runScan() {
  if (scanning) return;
  const checkedLayers = Array.from(document.querySelectorAll('.checkbox-row input:checked'))
    .map(cb => cb.parentElement.dataset.key);

  if (checkedLayers.length === 0) {
    alert('Please select at least one data layer to scan.');
    return;
  }

  scanning = true;

  // Auto-collapse map when scan starts
  setMapCollapsed(true);

  // Hide previous results
  ['forSaleBlock', 'closeReasonBlock', 'opportunityBlock', 'roiBlock', 'chatBlock'].forEach(id => {
    document.getElementById(id).classList.remove('show');
  });
  hideWorkingIndicator();
  // Reset progress meter to 0% for a new scan
  updateScanProgress(0);
  const _meter = document.getElementById('scanProgressMeter');
  if (_meter) _meter.classList.remove('complete');

  const btn = document.getElementById('scanBtn');
  btn.disabled = true;
  btn.textContent = 'Scanning...';

  const progress = document.getElementById('scanProgress');
  const lines = document.getElementById('scanLines');
  progress.classList.add('active');
  lines.innerHTML = '';

  // Scroll progress into view
  setTimeout(() => {
    progress.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);

  const layerLabels = {
    mrds: 'USGS MRDS — historical mineral records',
    blm: 'BLM LR2000 / MLRS — current claim status',
    ussbulletin: 'Historical USGS Bulletins — OCR + extraction',
    sentinel: 'Sentinel-2 multispectral spectroscopy',
    statesurvey: 'Colorado Geological Survey records',
    marketplace: 'Public listing platforms (Realmo, Mountain Man Mining)',
    newspapers: 'Historical newspaper archives',
    superfund: 'EPA Superfund / RCRA contamination registry',
  };

  checkedLayers.forEach(k => {
    const div = document.createElement('div');
    div.className = 'scan-line';
    div.id = `scan-${k}`;
    div.innerHTML = `<span class="scan-pending"></span><span class="scan-line-text">${layerLabels[k]}</span>`;
    lines.appendChild(div);
  });

  try {
    const res = await fetch('/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mine_id: activeMine.id, layers: checkedLayers }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const eventLines = buffer.split('\n');
      buffer = eventLines.pop();
      for (const line of eventLines) {
        if (!line.startsWith('data: ')) continue;
        const data = JSON.parse(line.slice(6));
        handleScanEvent(data);
      }
    }
  } catch (err) {
    console.error(err);
    alert('Scan failed: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = '⚡ Scan for Opportunities';
    scanning = false;
  }
}

function handleScanEvent(evt) {
  if (evt.type === 'layer_start') {
    const row = document.getElementById(`scan-${evt.layer}`);
    if (row) {
      row.className = 'scan-line running';
      const txt = row.querySelector('.scan-line-text').textContent;
      row.innerHTML = `<span class="scan-spinner"></span><span class="scan-line-text">${txt} — querying...</span>`;
    }
  } else if (evt.type === 'layer_done') {
    const row = document.getElementById(`scan-${evt.layer}`);
    if (row) {
      row.className = 'scan-line done';
      const txt = row.querySelector('.scan-line-text').textContent.split(' — ')[0];
      row.innerHTML = `<span class="scan-check">✓</span><span class="scan-line-text">${txt} — ${evt.summary}</span>`;
    }
  } else if (evt.type === 'progress') {
    updateScanProgress(evt.value);
  } else if (evt.type === 'result') {
    showResult(evt.block, evt.body);
    showWorkingIndicator();
  } else if (evt.type === 'done') {
    hideWorkingIndicator();
    const chat = document.getElementById('chatBlock');
    chat.classList.add('show');
    setTimeout(() => chat.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 400);
    addBotMsg(`I have the data on **${activeMine.name}** loaded. What do you want to know about this site?`);

    // First-appearance input glow, draws the eye to where to actually type.
    // Fades in after the scroll lands, glows for 3s, then auto-removes.
    const input = document.getElementById('chatInput');
    if (input) {
      setTimeout(() => {
        input.classList.add('chat-input-spotlight');
        // Stop the glow the moment the user starts interacting
        const stopGlow = () => {
          input.classList.remove('chat-input-spotlight');
          input.removeEventListener('focus', stopGlow);
          input.removeEventListener('input', stopGlow);
        };
        input.addEventListener('focus', stopGlow, { once: true });
        input.addEventListener('input', stopGlow, { once: true });
        // Auto-remove after 3.5s if they don't interact
        setTimeout(stopGlow, 3500);
      }, 800);
    }
  }
}

// Live scan-progress counter, 0-100% with a smoothly ticking display.
// Server emits 'progress' events ~8x per layer, this updates the visible counter
// and the underlying progress bar fill. Animation handled by CSS transition.
function updateScanProgress(value) {
  const pct = Math.max(0, Math.min(100, Number(value) || 0));
  const display = Math.round(pct);
  const percentEl = document.getElementById('scanProgressPercent');
  const fillEl = document.getElementById('scanProgressBarFill');
  if (percentEl) percentEl.textContent = display + '%';
  if (fillEl) fillEl.style.width = pct + '%';
  if (pct >= 100) {
    const meter = document.getElementById('scanProgressMeter');
    if (meter) meter.classList.add('complete');
  }
}

// 'Working on data output' indicator, with cycling copy so users feel motion
// while the AI streams the rest of the blocks. Auto-hides on the 'done' event.
let workingCopyTimer = null;
const workingCopyPhases = [
  'Working on data output',
  'Cross-referencing scoring layers',
  'Compiling opportunity assessment',
  'Finalizing site report',
];
function showWorkingIndicator() {
  const el = document.getElementById('workingIndicator');
  if (!el || el.classList.contains('show')) return;
  el.classList.add('show');
  // Start copy cycling on a 4s loop
  let i = 0;
  const textEl = document.getElementById('workingText');
  if (workingCopyTimer) clearInterval(workingCopyTimer);
  workingCopyTimer = setInterval(() => {
    i = (i + 1) % workingCopyPhases.length;
    if (textEl) {
      textEl.style.opacity = '0';
      setTimeout(() => {
        textEl.textContent = workingCopyPhases[i];
        textEl.style.opacity = '1';
      }, 220);
    }
  }, 4000);
}
function hideWorkingIndicator() {
  const el = document.getElementById('workingIndicator');
  if (!el) return;
  el.classList.remove('show');
  if (workingCopyTimer) {
    clearInterval(workingCopyTimer);
    workingCopyTimer = null;
  }
  // Reset text for next scan
  const textEl = document.getElementById('workingText');
  if (textEl) textEl.textContent = workingCopyPhases[0];
}

function showResult(blockKey, body) {
  const map = {
    for_sale: ['forSaleBlock', 'forSaleBody'],
    close_reason: ['closeReasonBlock', 'closeReasonBody'],
    opportunity: ['opportunityBlock', 'opportunityBody'],
    roi: ['roiBlock', 'roiBody'],
  };
  const [blockId, bodyId] = map[blockKey] || [];
  if (blockId) {
    const block = document.getElementById(blockId);
    block.classList.add('show');
    document.getElementById(bodyId).innerHTML = body;
    // Auto-scroll to the new result
    setTimeout(() => {
      block.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }
}

// ============================================================
// CHAT
// ============================================================
async function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  addUserMsg(text);

  const messages = document.getElementById('chatMessages');
  const typing = document.createElement('div');
  typing.className = 'chat-typing';
  typing.textContent = 'ACI Bot is thinking...';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mine_id: activeMine.id, message: text }),
    });
    const data = await res.json();
    typing.remove();
    addBotMsg(data.reply);
  } catch (err) {
    typing.remove();
    addBotMsg('I had a momentary issue. Try asking again?');
  }
}

function addUserMsg(text) {
  const messages = document.getElementById('chatMessages');
  const m = document.createElement('div');
  m.className = 'msg msg-user';
  m.textContent = text;
  messages.appendChild(m);
  messages.scrollTop = messages.scrollHeight;
}

function addBotMsg(text) {
  const messages = document.getElementById('chatMessages');
  const m = document.createElement('div');
  m.className = 'msg msg-bot';
  m.innerHTML = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
  messages.appendChild(m);
  messages.scrollTop = messages.scrollHeight;
}

// ============================================================
// INIT
// ============================================================
loadMines();
/* file ends */
