/* =========================================================
   TuneSpec — App (roteador hash + views)
   ========================================================= */

(function () {
  const app = document.getElementById("app");

  /* ---------- Marca ----------
     Ponto único de verdade da marca. Trocar a logo = trocar o arquivo
     em assets/img/logo.png (mesma proporção) — nada mais precisa mudar. */
  const BRAND_NAME = "TuneSpec";
  const LOGO_SRC = "assets/img/logo.png";

  /* ---------- Ícones (SVG inline, stroke minimalista) ---------- */
  const I = {
    engine:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h4l2-2h4v3h2v3h2v4h-2v3h-3l-2-2h-3l-2 2H6v-3H4v2H2v-8h2v2h2V9h1z"/></svg>',
    power:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
    torque:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>',
    weight:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l2 12H4z"/><circle cx="12" cy="5" r="2.5"/></svg>',
    fuel:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16"/><path d="M3 21h14"/><path d="M15 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-3-3"/><path d="M7 7h6v4H7z"/></svg>',
    speed:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 4-5"/><circle cx="12" cy="15" r="1.6"/></svg>',
    gearbox:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="5" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><path d="M5 7v10M12 7v10M19 7v5h-7"/></svg>',
    traction:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v5M12 15v5M4 12h5M15 12h5"/></svg>',
    price:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 6.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 1.8 2.7 5 3.3 5 1.6 5 3.7-2.2 3-5 3-5-1.1-5-3"/></svg>',
    accel:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h13"/><path d="m11 6 6 6-6 6"/><path d="M21 5v14"/></svg>',
    filter:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16l-6 8v6l-4 2v-8z"/></svg>',
    intake:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14c4 0 4-6 8-6s4 6 8 6"/><circle cx="19" cy="14" r="3"/><path d="M3 18h8"/></svg>',
    ecu:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
    exhaust:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8h10v8H2z"/><path d="M12 10h5v4h-5z"/><circle cx="20" cy="12" r="2"/></svg>',
    turbo:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="12" r="6"/><circle cx="11" cy="12" r="2"/><path d="M11 6c3 0 6-1 6-3M17 12h5v3"/></svg>',
    piston:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="7" rx="1"/><path d="M7 5h10M12 10v4"/><circle cx="12" cy="17" r="3"/></svg>',
    injector:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3h4v6h-4zM9 9h6l-1 8h-4zM12 17v4"/></svg>',
    clutch:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.6"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.5 6.5l2.8 2.8M14.7 14.7l2.8 2.8M17.5 6.5l-2.8 2.8M9.3 14.7l-2.8 2.8"/></svg>',
    cam:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4M18 12h4"/><ellipse cx="12" cy="12" rx="5" ry="6"/><circle cx="12" cy="10" r="1.6"/></svg>',
    headlight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 6c-5 0-8 3.2-8 6s3 6 8 6c3 0 5-2.5 5-6s-2-6-5-6z"/><path d="M18 8h4M18 12h4M18 16h4"/></svg>',
    taillight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="14" height="8" rx="3"/><path d="M7 8v8M11 8v8M20 10l2-1M20 14l2 1"/></svg>',
    wheel:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3.5 9.3 9.2 11M14.8 13l5.7 1.7M5.5 18.5 10 14M14 10l4.5-4.5"/></svg>',
    wing:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9c7-3 13-3 20 0l-2 3c-5-2-11-2-16 0z"/><path d="M6 12v5M18 12v5M4 17h4M16 17h4"/></svg>',
    bodykit:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15l2-5c.4-1 1-2 3-2h8c2 0 2.6 1 3 2l2 5v3h-2M3 15v3h2M3 15h18"/><circle cx="7.5" cy="17" r="1.8"/><circle cx="16.5" cy="17" r="1.8"/></svg>',
    coilover:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M12 19v3"/><path d="M7 6h10M8 18h8"/><path d="M8 6l8 2.5-8 2.5 8 2.5-8 2.5 8 2"/></svg>',
    seat:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3c-1.5 0-2 1-2 2.5L7 14c0 1.5 1 2 2.5 2H15c2 0 3 1 3 3v2"/><path d="M7 14c-2 0-3.5 1.5-3 4l.5 3"/><path d="M9 3h3c1.5 0 2 1 2 2.5V9c0 2-1 3-3 3"/></svg>',
    gauge:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m12 12 4-4M7 16.5h.01M6 12h.01M7.5 8h.01M16.5 16.5h.01"/></svg>',
    check:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5 5L20 6.5"/></svg>',
    like:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-8-4.6-8-10a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 5.4-8 10-8 10z"/></svg>',
    likeFill:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.5s-8-4.6-8-10a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 5.4-8 10-8 10z"/></svg>',
    comment:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H4l2.5-2.9A8 8 0 1 1 21 12z"/></svg>',
    share:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/></svg>',
    save:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-6-4.5L6 21z"/></svg>',
    saveFill:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12v18l-6-4.5L6 21z"/></svg>',
    photo:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m5 19 6-6 4 4 2-2 4 4"/></svg>',
    external:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4 10 14M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>',
    speaker:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="8" r="2.2"/><circle cx="12" cy="15.5" r="3.2"/></svg>',
    camera:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    scale:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 7l-4 8a4 4 0 0 0 8 0zM17 7l-4 8a4 4 0 0 0 8 0zM5 7h14"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor"/></svg>',
    whatsapp:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11.5a8 8 0 0 1-11.6 7.2L4 20l1.3-4.2A8 8 0 1 1 20 11.5z"/><path d="M9 9.5c0 4 5.5 5.5 5.5 5.5l1-1.5-2-1.5-1 .8c-1-.5-1.8-1.3-2.2-2.3l.7-1L9.5 8z"/></svg>',
    globe:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 5.7 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.7-4-9s1.5-6.4 4-9z"/></svg>',
  };

  /* Imagem do hero (cutaway técnico); se o arquivo não existir, a UI cai no carSVG. */
  function heroImg() {
    if (window.TS_IMG_DATA && window.TS_IMG_DATA["hero-cutaway"]) return window.TS_IMG_DATA["hero-cutaway"];
    return "assets/img/hero-cutaway.jpg";
  }

  /* ---------- Silhueta de carro (SVG) ---------- */
  function carSVG(hue, opts) {
    const o = opts || {};
    const glow = o.glow !== false;
    const accent = "hsl(" + hue + ", " + (hue === 0 || hue === 355 ? "92%" : "12%") + ", " + (hue === 0 || hue === 355 ? "44%" : "62%") + ")";
    const id = "g" + Math.random().toString(36).slice(2, 8);
    return (
      '<svg viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Silhueta de carro esportivo">' +
      '<defs>' +
      '<linearGradient id="' + id + 'b" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#3a3a3a"/><stop offset="0.5" stop-color="#1c1c1c"/><stop offset="1" stop-color="#0f0f0f"/>' +
      '</linearGradient>' +
      '<linearGradient id="' + id + 'w" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#3f4750" stop-opacity="0.95"/><stop offset="1" stop-color="#12161a"/>' +
      '</linearGradient>' +
      '<radialGradient id="' + id + 'f" cx="0.5" cy="0.5" r="0.5">' +
      '<stop offset="0" stop-color="#e10600" stop-opacity="0.35"/><stop offset="1" stop-color="#e10600" stop-opacity="0"/>' +
      '</radialGradient>' +
      '</defs>' +
      (glow ? '<ellipse cx="450" cy="278" rx="360" ry="26" fill="url(#' + id + 'f)"/>' : '') +
      /* carroceria */
      '<path d="M96 250 C96 232 108 226 132 222 C150 219 168 217 186 214 C222 172 286 138 372 130 C458 122 540 130 600 156 C640 150 690 152 728 164 C782 172 822 196 828 222 C846 226 852 234 852 244 C852 254 844 258 830 258 L96 258 C90 258 96 254 96 250 Z" fill="url(#' + id + 'b)" stroke="#484848" stroke-width="2"/>' +
      /* vidros */
      '<path d="M258 208 C284 172 330 150 390 145 C446 140 502 146 546 164 L536 206 Z" fill="url(#' + id + 'w)" opacity="0.9"/>' +
      '<path d="M560 168 C596 160 646 162 688 174 L676 206 L552 206 Z" fill="url(#' + id + 'w)" opacity="0.75"/>' +
      /* linha de cintura */
      '<path d="M186 214 C260 200 420 190 560 196 C640 199 720 208 790 220" stroke="#555" stroke-width="1.5" opacity="0.7"/>' +
      /* faróis / lanterna */
      '<path d="M818 224 L846 232 L844 242 L816 238 Z" fill="' + accent + '" opacity="0.95"/>' +
      '<path d="M100 240 L122 234 L124 244 L102 248 Z" fill="#e10600" opacity="0.9"/>' +
      /* soleira */
      '<path d="M230 258 L700 258" stroke="#000" stroke-width="6" opacity="0.6"/>' +
      /* rodas */
      '<circle cx="252" cy="252" r="42" fill="#0a0a0a" stroke="#3d3d3d" stroke-width="3"/>' +
      '<circle cx="252" cy="252" r="26" fill="#111" stroke="#666" stroke-width="2"/>' +
      '<circle cx="252" cy="252" r="6" fill="#444"/>' +
      '<path d="M252 230v14M252 260v14M230 252h14M260 252h14M237 237l10 10M257 257l10 10M267 237l-10 10M247 257l-10 10" stroke="#5a5a5a" stroke-width="2.4"/>' +
      '<circle cx="668" cy="252" r="42" fill="#0a0a0a" stroke="#3d3d3d" stroke-width="3"/>' +
      '<circle cx="668" cy="252" r="26" fill="#111" stroke="#666" stroke-width="2"/>' +
      '<circle cx="668" cy="252" r="6" fill="#444"/>' +
      '<path d="M668 230v14M668 260v14M646 252h14M676 252h14M653 237l10 10M673 257l10 10M683 237l-10 10M663 257l-10 10" stroke="#5a5a5a" stroke-width="2.4"/>' +
      /* reflexo de capô */
      '<path d="M300 148 C380 136 480 136 560 154" stroke="#7a7a7a" stroke-width="1.5" opacity="0.5"/>' +
      '</svg>'
    );
  }

  /* ---------- Estado ---------- */
  const state = {
    tab: "performance",
    aestheticCat: "farois",
    currentVehicle: null,
  };

  function storeKey(vehicleId) { return "tunespec-community-" + vehicleId; }

  function loadPosts(vehicle) {
    try {
      const raw = localStorage.getItem(storeKey(vehicle.id));
      if (raw) return JSON.parse(raw);
    } catch (e) { /* localStorage indisponível: usa seed */ }
    return TS.getSeedPosts(vehicle);
  }
  function savePosts(vehicle, posts) {
    try { localStorage.setItem(storeKey(vehicle.id), JSON.stringify(posts)); } catch (e) { /* ok */ }
  }

  /* ---------- Utilidades ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2400);
  }

  /* ---------- Catálogo visível no MVP ----------
     Lançamento: todo veículo presente em TS.models (data.js) entra no catálogo
     por padrão — são os 52 veículos com ficha técnica e foto reais.
     Para tirar um veículo específico do ar temporariamente (ex.: faltando
     revisão de dados), adicione "marca:id-do-modelo" em DRAFT_IDS abaixo.
     Não é preciso mexer em data.js para isso. */
  const DRAFT_IDS = new Set([
    // "chevrolet:camaro-ss",
  ]);

  function isEnabled(brandId, modelId) {
    const models = TS.models[brandId] || [];
    const exists = models.some((m) => m.id === modelId);
    if (!exists) return false;
    return !DRAFT_IDS.has(brandId + ":" + modelId);
  }
  function enabledVehicles() {
    const out = [];
    for (const brandId of Object.keys(TS.models)) {
      for (const m of TS.models[brandId]) {
        if (isEnabled(brandId, m.id)) out.push({ brandId, m });
      }
    }
    return out;
  }
  function mainVehicleHash() {
    const v = enabledVehicles()[0];
    return v ? "#/veiculo/" + v.brandId + "/" + v.m.id : "#/models";
  }

  function navbar(active) {
    return (
      '<header class="nav"><div class="container nav-inner">' +
      '<a class="logo" href="#/" aria-label="' + BRAND_NAME + '">' +
      '<img src="' + LOGO_SRC + '" alt="' + BRAND_NAME + '" class="logo-img" ' +
      'onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'logo-fallback\',textContent:\'' + BRAND_NAME + '\'}))"/>' +
      "</a>" +
      '<nav class="nav-links">' +
      '<a href="#/" class="' + (active === "home" ? "active" : "") + '">Home</a>' +
      '<a href="#/models" class="' + (active === "models" ? "active" : "") + '">Models</a>' +
      '<a href="#/products" class="' + (active === "products" ? "active" : "") + '">Products</a>' +
      '<a href="#/blog" class="' + (active === "blog" ? "active" : "") + '">Blog</a>' +
      '<a href="#/tools" class="' + (active === "tools" ? "active" : "") + '">Tools</a>' +
      "</nav>" +
      '<div class="nav-search">' +
      '<input type="search" id="global-search" class="nav-search-input" placeholder="Buscar seu carro…" autocomplete="off" aria-label="Buscar veículo"/>' +
      '<div id="search-dropdown" class="search-dropdown" hidden></div>' +
      "</div>" +
      '<button class="nav-cta" onclick="location.hash=\'#/models\'">Ver modelos</button>' +
      "</div></header>"
    );
  }

  /* ---------- Busca global de veículos ---------- */
  let searchIndexCache = null;
  function searchIndex() {
    if (searchIndexCache) return searchIndexCache;
    const out = [];
    for (const brandId of Object.keys(TS.models)) {
      const brand = TS.getBrand(brandId);
      for (const m of TS.models[brandId]) {
        if (!isEnabled(brandId, m.id)) continue;
        out.push({ brandId, brandName: brand ? brand.name : brandId, m, label: (brand ? brand.name : brandId) + " " + m.name });
      }
    }
    searchIndexCache = out;
    return out;
  }
  let globalSearchClickBound = false;
  function bindGlobalSearch(inputId, ddId) {
    inputId = inputId || "global-search";
    ddId = ddId || "search-dropdown";
    const input = document.getElementById(inputId);
    const dd = document.getElementById(ddId);
    if (!input || !dd) return;
    if (!globalSearchClickBound) {
      globalSearchClickBound = true;
      document.addEventListener("click", (e) => {
        document.querySelectorAll(".search-dropdown").forEach((curDd) => {
          const curInput = document.getElementById(curDd.id === "search-dropdown" ? "global-search" : "home-search");
          if (!curDd.hidden && !curDd.contains(e.target) && e.target !== curInput) curDd.hidden = true;
        });
      });
    }
    function renderResults(q) {
      const term = q.trim().toLowerCase();
      if (!term) { dd.hidden = true; dd.innerHTML = ""; return; }
      const hits = searchIndex()
        .filter((e) => e.label.toLowerCase().includes(term))
        .slice(0, 7);
      if (!hits.length) {
        dd.innerHTML = '<div class="search-empty">Nenhum veículo encontrado para "' + esc(q) + '"</div>';
        dd.hidden = false;
        return;
      }
      dd.innerHTML = hits
        .map(
          (e) =>
            '<a class="search-item" href="#/veiculo/' + e.brandId + "/" + e.m.id + '">' +
            '<span class="search-item-thumb">' + carSVG(e.m.hue, { glow: false }) + "</span>" +
            '<span class="search-item-text"><b>' + esc(e.m.name) + "</b><span>" + esc(e.brandName) + " · " + e.m.year + "</span></span>" +
            "</a>"
        )
        .join("");
      dd.hidden = false;
    }
    input.addEventListener("input", () => renderResults(input.value));
    input.addEventListener("focus", () => { if (input.value) renderResults(input.value); });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { dd.hidden = true; input.blur(); }
      if (e.key === "Enter") {
        const first = dd.querySelector(".search-item");
        if (first) { location.hash = first.getAttribute("href").replace("#", ""); dd.hidden = true; }
      }
    });
    dd.addEventListener("click", () => { dd.hidden = true; input.blur(); });
  }

  function footer() {
    return (
      "<footer><div class='container'>" +
      "<div class='footer-inner'>" +
      "<div><a class='logo' href='#/'><img src='" + LOGO_SRC + "' alt='" + BRAND_NAME + "' class='logo-img'/></a>" +
      "<p>A plataforma definitiva para quem quer entender, modificar e evoluir o próprio carro — com informação confiável e as melhores ofertas de parceiros.</p></div>" +
      "<div class='footer-links'>" +
      "<div><h5>Plataforma</h5><a href='#/models'>Models</a><a href='#/products'>Products</a><a href='#/tools'>Tools</a></div>" +
      "<div><h5>Conteúdo</h5><a href='#/blog'>Blog</a></div>" +
      "<div><h5>Empresa</h5><a href='#/'>Sobre</a><a href='#/'>Contato</a><a href='#/'>Termos</a></div>" +
      "</div></div>" +
      "<p class='trust-note'>Alguns produtos desta página são oferecidos por lojas parceiras (Mercado Livre, Shopee).</p>" +
      "<div class='footer-bottom'><span>© 2026 " + BRAND_NAME + ". Todos os direitos reservados.</span><span>Feito para entusiastas.</span></div>" +
      "</div></footer>"
    );
  }

  /* =========================================================
     HOME
     ========================================================= */
  function modelCard(brandId, m, opts) {
    opts = opts || {};
    const stock = TS.imgFor(brandId, m);
    const focus = opts.focus ? ' style="object-position:' + opts.focus + '"' : "";
    const photo = opts.photo
      ? '<img class="model-photo" src="' + opts.photo + '" alt="' + esc(opts.name || m.name) + '"' + focus + ' loading="lazy" onerror="this.onerror=function(){this.remove()};this.removeAttribute(\'style\');this.src=\'' + stock + '\'"/>'
      : '<img class="model-photo" src="' + stock + '" alt="' + esc(m.name) + '" loading="lazy" onerror="this.remove()"/>';
    const href = opts.href || "#/veiculo/" + brandId + "/" + m.id;
    return (
      '<a class="card model-card" href="' + href + '">' +
      (opts.owner ? '<div class="owner-chip">' + esc(opts.owner) + "</div>" : "") +
      '<div class="model-art' + (opts.photo ? " model-art--tall" : "") + '">' + carSVG(m.hue, { glow: false }) +
      photo +
      "</div>" +
      '<div class="model-body"><h3>' + esc(opts.name || m.name) + "</h3>" +
      '<div class="year">' + (opts.name ? m.name + " · " : "") + m.year + "</div>" +
      '<div class="model-specs">' +
      "<div><b>" + m.power + "</b><span>Potência</span></div>" +
      "<div><b>" + m.accel + "</b><span>0–100</span></div>" +
      "<div><b>" + m.engine.split(" ")[0] + "</b><span>Motor</span></div>" +
      "</div></div></a>"
    );
  }

  function renderHome() {
    const garage = (TS.garage || [])
      .map((g) => {
        const m = TS.mergedVehicle(g);
        return m ? modelCard(g.brandId, m, { owner: g.owner, name: g.name, photo: TS.garagePhoto(g), focus: g.focus, href: "#/garagem/" + g.slug }) : "";
      })
      .join("");

    const bestSellers = TS.productsCatalog.slice(0, 5);
    const topDeals = TS.productsCatalog.slice(5, 10);

    app.innerHTML =
      navbar("home") +
      "<main>" +

      /* ---------- HERO centralizado: só headline + subtexto + busca + CTA ---------- */
      '<section class="hero hero--centered"><div class="hero-bg"><div class="hero-grid"></div></div>' +
      '<div class="container hero-inner hero-inner--centered">' +
      '<div class="hero-eyebrow"><span class="dot"></span>Catálogo · Preparação · Marketplace</div>' +
      "<h1>O que você dirige?</h1>" +
      "<p>Encontre modificações, peças compatíveis e as melhores ofertas para o seu carro.</p>" +
      '<div class="hero-search"><span class="hero-search-icon">' + I.gauge + "</span>" +
      '<input type="search" id="home-search" placeholder="Digite marca ou modelo — ex: Gol, Civic, Onix…" autocomplete="off"/>' +
      '<div id="home-search-dropdown" class="search-dropdown search-dropdown--hero" hidden></div>' +
      "</div>" +
      '<a class="btn btn-red btn-lg hero-cta" href="#/models">Explorar modelos ' +
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
      "</div></section>" +

      '<section class="trust-strip"><div class="container trust-strip-inner">' +
      '<div class="trust-item">' + I.check + "<b>" + enabledVehicles().length + "</b><span>veículos mapeados</span></div>" +
      '<div class="trust-item">' + I.check + "<b>" + TS.brands.length + "</b><span>marcas no catálogo</span></div>" +
      '<div class="trust-item trust-item--badges"><span>Ofertas de</span>' +
      '<span class="mp-badge mp-badge--mercadolivre mp-badge--sm">Mercado Livre</span>' +
      '<span class="mp-badge mp-badge--shopee mp-badge--sm">Shopee</span></div>' +
      "</div></section>" +

      /* ---------- Mais vendidos ---------- */
      '<section class="section"><div class="container">' +
      '<div class="section-head"><div><div class="kicker">Populares</div>' +
      "<h2>Mais vendidos</h2><p>Os itens que mais saem entre os nossos parceiros.</p></div>" +
      '<a class="btn btn-ghost btn-sm" href="#/products">Ver todos</a></div>' +
      '<div class="mp-grid">' + bestSellers.map((p) => productCard(p)).join("") + "</div>" +
      "</div></section>" +

      /* ---------- Ofertas em destaque ---------- */
      '<section class="section" style="padding-top:0"><div class="container">' +
      '<div class="section-head"><div><div class="kicker">Selecionados</div>' +
      "<h2>Ofertas em destaque</h2><p>Uma seleção diferente, direto dos nossos parceiros.</p></div>" +
      '<a class="btn btn-ghost btn-sm" href="#/products">Ver todos</a></div>' +
      '<div class="mp-grid">' + topDeals.map((p) => productCard(p)).join("") + "</div>" +
      "</div></section>" +

      '<section class="section"><div class="container">' +
      '<div class="section-head"><div><div class="kicker">A equipe</div>' +
      "<h2>Nossa garagem</h2><p>Os carros de quem faz o " + BRAND_NAME + " acontecer.</p></div></div>" +
      '<div class="model-grid model-grid-solo">' + garage + "</div>" +
      "</div></section>" +

      '<section class="section" style="padding-top:0"><div class="container">' +
      '<div class="section-head"><div><div class="kicker">Como funciona</div>' +
      "<h2>Do carro original ao projeto ideal</h2></div></div>" +
      '<div class="steps">' +
      '<div class="card step"><div class="step-num">01</div><h3>Escolha seu carro</h3><p>Selecione marca e modelo. A plataforma carrega as especificações completas do seu veículo.</p></div>' +
      '<div class="card step"><div class="step-num">02</div><h3>Monte seu projeto</h3><p>Explore Stages de preparação e upgrades estéticos, ou use o <a href="#/tools/planejador">Planejador de Build</a> para gerar um projeto por objetivo e orçamento.</p></div>' +
      '<div class="card step"><div class="step-num">03</div><h3>Compre com confiança</h3><p>Cada peça leva direto à oferta real no Mercado Livre ou Shopee — sem intermediário.</p></div>' +
      "</div></div></section>" +
      "</main>" +
      footer();

    bindGlobalSearch("home-search", "home-search-dropdown");
  }

  /* =========================================================
     /models — catálogo de marcas (passo 1 do fluxo Brand → Models → Vehicle)
     ========================================================= */
  function renderModels() {
    const brandIds = Object.keys(TS.models)
      .filter((id) => (TS.models[id] || []).some((m) => isEnabled(id, m.id)))
      .sort((a, b) => (TS.getBrand(a).name || a).localeCompare(TS.getBrand(b).name || b));

    const brandCards = brandIds
      .map((brandId) => {
        const brand = TS.getBrand(brandId);
        const n = (TS.models[brandId] || []).filter((m) => isEnabled(brandId, m.id)).length;
        return (
          '<a class="brand-card" href="#/models/' + brandId + '">' +
          '<div class="brand-card-mono">' + esc(brand.mono) + "</div>" +
          "<h3>" + esc(brand.name) + "</h3>" +
          '<span class="brand-card-count">' + n + " modelo" + (n === 1 ? "" : "s") + "</span>" +
          "</a>"
        );
      })
      .join("");

    app.innerHTML =
      navbar("models") +
      "<main>" +
      '<div class="page-head"><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Home</a><span class="sep">/</span><span>Models</span></div>' +
      "<h1>Escolha a marca do seu carro</h1>" +
      '<p class="sub">' + brandIds.length + " marcas, de clássicos populares a esportivos importados. Selecione uma para ver os modelos.</p>" +
      "</div></div>" +
      '<section class="section" style="padding-top:44px"><div class="container">' +
      '<div class="brand-catalog">' + brandCards + "</div>" +
      "</div></section></main>" +
      footer();
  }

  /* =========================================================
     PÁGINA DA MARCA (passo 2: modelos de uma marca)
     ========================================================= */
  function renderBrand(brandId) {
    const brand = TS.getBrand(brandId);
    const models = (TS.models[brandId] || []).filter((m) => isEnabled(brandId, m.id));
    if (!brand || !models.length) return renderNotFound();

    const cards = models.map((m) => modelCard(brandId, m)).join("");

    app.innerHTML =
      navbar("models") +
      "<main>" +
      '<div class="page-head"><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Home</a><span class="sep">/</span><a href="#/models">Models</a><span class="sep">/</span><span>' + brand.name + "</span></div>" +
      "<h1>" + brand.name + "</h1>" +
      '<p class="sub">' + models.length + " modelo(s) mapeado(s) · Selecione o seu para ver specs, upgrades e comunidade.</p>" +
      "</div></div>" +
      '<section class="section" style="padding-top:44px"><div class="container">' +
      '<div class="model-grid model-grid-solo">' + cards + "</div>" +
      "</div></section></main>" +
      footer();
  }

  /* =========================================================
     /products — catálogo de produtos afiliados
     ========================================================= */
  const productsState = { query: "", category: "all", view: "grid", sort: "relevance", page: 1, perPage: 8 };

  function renderProducts() {
    const catOptions = TS.productCategories
      .map((c) => '<option value="' + c.id + '">' + esc(c.name) + "</option>")
      .join("");
    const catChips = ['<button class="cat-chip' + (productsState.category === "all" ? " active" : "") + '" data-cat="all">Todas</button>']
      .concat(
        TS.productCategories.map(
          (c) => '<button class="cat-chip' + (productsState.category === c.id ? " active" : "") + '" data-cat="' + c.id + '">' + esc(c.name) + "</button>"
        )
      )
      .join("");

    app.innerHTML =
      navbar("products") +
      "<main>" +
      '<div class="page-head"><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Home</a><span class="sep">/</span><span>Products</span></div>' +
      "<h1>Produtos</h1>" +
      '<p class="sub">' + TS.productsCatalog.length + " produtos de parceiros — filtre por categoria ou busque pelo nome.</p>" +
      "</div></div>" +
      '<section class="section" style="padding-top:36px"><div class="container">' +

      '<div class="products-toolbar">' +
      '<div class="products-search"><span class="hero-search-icon">' + I.gauge + "</span>" +
      '<input type="search" id="products-search" placeholder="Buscar produto…" autocomplete="off" value="' + esc(productsState.query) + '"/></div>' +
      '<select id="products-sort" class="products-sort">' +
      '<option value="relevance">Relevância</option>' +
      '<option value="name-asc">Nome (A–Z)</option>' +
      '<option value="name-desc">Nome (Z–A)</option>' +
      '<option value="category">Categoria</option>' +
      "</select>" +
      '<div class="products-view-toggle">' +
      '<button class="view-btn' + (productsState.view === "grid" ? " active" : "") + '" data-view="grid" aria-label="Grade">' + I.gauge + "</button>" +
      '<button class="view-btn' + (productsState.view === "list" ? " active" : "") + '" data-view="list" aria-label="Lista">' + I.gearbox + "</button>" +
      "</div></div>" +

      '<div class="cat-chips">' + catChips + "</div>" +

      '<div id="products-grid" class="mp-grid"></div>' +
      '<div id="products-pagination" class="pagination"></div>' +

      '<div class="products-related-guides"><div class="kicker">Guias relacionados</div>' +
      '<div class="guide-related-list">' +
      TS.articles.slice(0, 3).map((a) => '<a href="#/blog/' + a.slug + '">' + esc(a.title) + " " + I.accel + "</a>").join("") +
      "</div></div>" +
      "</div></section></main>" +
      footer();

    bindProducts();
  }

  function filteredSortedProducts() {
    const q = productsState.query.trim().toLowerCase();
    let list = TS.productsCatalog.filter((p) => {
      const matchesCat = productsState.category === "all" || p.category === productsState.category;
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || (p.desc || "").toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
    if (productsState.sort === "name-asc") list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
    else if (productsState.sort === "name-desc") list = list.slice().sort((a, b) => b.name.localeCompare(a.name));
    else if (productsState.sort === "category") list = list.slice().sort((a, b) => (a.category || "").localeCompare(b.category || ""));
    return list;
  }

  function renderProductsGrid() {
    const grid = document.getElementById("products-grid");
    const pag = document.getElementById("products-pagination");
    if (!grid) return;
    const list = filteredSortedProducts();
    const totalPages = Math.max(1, Math.ceil(list.length / productsState.perPage));
    productsState.page = Math.min(productsState.page, totalPages);
    const start = (productsState.page - 1) * productsState.perPage;
    const pageItems = list.slice(start, start + productsState.perPage);

    grid.className = productsState.view === "list" ? "mp-list" : "mp-grid";
    grid.innerHTML = pageItems.length
      ? pageItems.map((p) => productCard(p, { showCategory: true })).join("")
      : '<div class="card" style="padding:32px;text-align:center;grid-column:1/-1"><p>Nenhum produto encontrado para esse filtro.</p></div>';

    if (pag) {
      if (totalPages <= 1) { pag.innerHTML = ""; }
      else {
        let btns = "";
        for (let i = 1; i <= totalPages; i++) {
          btns += '<button class="page-btn' + (i === productsState.page ? " active" : "") + '" data-page="' + i + '">' + i + "</button>";
        }
        pag.innerHTML = btns;
      }
    }
  }

  function bindProducts() {
    const search = document.getElementById("products-search");
    const sort = document.getElementById("products-sort");
    if (search) search.addEventListener("input", () => { productsState.query = search.value; productsState.page = 1; renderProductsGrid(); });
    if (sort) { sort.value = productsState.sort; sort.addEventListener("change", () => { productsState.sort = sort.value; renderProductsGrid(); }); }

    document.querySelectorAll(".cat-chip").forEach((btn) =>
      btn.addEventListener("click", () => {
        productsState.category = btn.dataset.cat;
        productsState.page = 1;
        document.querySelectorAll(".cat-chip").forEach((b) => b.classList.toggle("active", b === btn));
        renderProductsGrid();
      })
    );
    document.querySelectorAll(".view-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        productsState.view = btn.dataset.view;
        document.querySelectorAll(".view-btn").forEach((b) => b.classList.toggle("active", b === btn));
        renderProductsGrid();
      })
    );
    const pag = document.getElementById("products-pagination");
    if (pag) pag.addEventListener("click", (e) => {
      const btn = e.target.closest(".page-btn");
      if (!btn) return;
      productsState.page = parseInt(btn.dataset.page, 10);
      renderProductsGrid();
      const grid = document.getElementById("products-grid");
      if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    renderProductsGrid();
  }

  /* =========================================================
     PÁGINA DO VEÍCULO
     ========================================================= */
  function renderVehicle(brandId, modelId, gEntry) {
    const brand = TS.getBrand(brandId);
    const base = TS.getVehicle(brandId, modelId);
    // garagem: sempre visível pela rota própria; catálogo: só se habilitado
    const visible = gEntry ? true : isEnabled(brandId, modelId);
    const vehicle = gEntry ? TS.mergedVehicle(gEntry) : base;
    if (!brand || !vehicle || !visible) return renderNotFound();
    state.brandId = brandId;
    state.currentVehicle = vehicle;

    const title = gEntry ? gEntry.name : vehicle.name;
    const meta = gEntry
      ? brand.name + " · " + base.name + " · " + vehicle.year
      : brand.name + " · " + vehicle.year;
    const photoSrc = gEntry ? TS.garagePhoto(gEntry) : TS.imgFor(brandId, vehicle);
    const photoStyle = gEntry && gEntry.focus ? ' style="object-position:' + gEntry.focus + '"' : "";

    if (state.tab !== "estetica") state.tab = "performance";

    app.innerHTML =
      navbar("models") +
      "<main>" +
      '<section class="vehicle-hero"><div class="vehicle-hero-bg"></div><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Home</a><span class="sep">/</span><a href="#/models">Models</a><span class="sep">/</span><span>' + esc(title) + "</span></div>" +
      '<div class="vehicle-title"><div>' +
      "<h1>" + esc(title) + "</h1>" +
      '<div class="meta">' + meta + "</div>" +
      "</div>" +
      '<div class="fipe-chip"><span>Preço médio FIPE</span><b>' + vehicle.fipe + "</b></div>" +
      "</div>" +
      (gEntry
        ? '<div class="vehicle-art vehicle-art--photo">' +
          '<img class="vehicle-photo" src="' + photoSrc + '" alt="' + esc(title) + '" onerror="this.remove()"/>' +
          "</div>"
        : '<div class="vehicle-art">' + carSVG(vehicle.hue) +
          '<img class="vehicle-photo" src="' + photoSrc + '" alt="' + esc(title) + '" onerror="this.remove()"/>' +
          "</div>") +
      /* spec-strip: TODAS as specs importantes vivem aqui agora (ficha técnica
         separada foi removida — item 4/5 do redesign de UX/conversão). */
      '<div class="spec-strip">' +
      "<div><b>" + vehicle.engine + "</b><span>Motor</span></div>" +
      "<div><b>" + vehicle.power + "</b><span>Potência</span></div>" +
      "<div><b>" + vehicle.torque + "</b><span>Torque</span></div>" +
      "<div><b>" + vehicle.accel + "</b><span>0–100 km/h</span></div>" +
      "<div><b>" + vehicle.gearbox.split(" ").slice(0, 2).join(" ") + "</b><span>Câmbio</span></div>" +
      "<div><b>" + vehicle.traction + "</b><span>Tração</span></div>" +
      "<div><b>" + vehicle.weight + "</b><span>Peso</span></div>" +
      "<div><b>" + vehicle.consumption + "</b><span>Consumo</span></div>" +
      "<div><b>" + vehicle.top + "</b><span>Vel. máxima</span></div>" +
      "<div><b>" + vehicle.year + "</b><span>Ano</span></div>" +
      "</div>" +
      '<p class="trust-microline">' + I.check + "Compatibilidade verificada por modelo</p>" +
      "</div></section>" +

      overviewBlock(vehicle) +

      '<div class="tabs"><div class="container tabs-inner">' +
      '<button class="tab' + (state.tab === "performance" ? " active" : "") + '" data-tab="performance">Performance</button>' +
      '<button class="tab' + (state.tab === "estetica" ? " active" : "") + '" data-tab="estetica">Estética</button>' +
      "</div></div>" +
      '<div class="container"><div id="tab-content" class="tab-panel">' +
      (state.tab === "performance" ? performanceHTML(vehicle) : aestheticHTML(vehicle)) +
      "</div></div>" +

      relatedBlock(brandId, vehicle) +
      "</main>" +
      footer();

    bindVehicleTabs(vehicle);
    bindUpgrades(vehicle);
  }

  /* ---------- Veículos e builds relacionados (SEO internal linking) ---------- */
  function relatedBlock(brandId, vehicle) {
    const brandModels = (TS.models[brandId] || [])
      .filter((m) => isEnabled(brandId, m.id) && m.id !== vehicle.id)
      .slice(0, 3);
    const relatedBuilds = (TS.garage || [])
      .filter((g) => g.brandId === brandId || TS.getVehicle(g.brandId, g.modelId)?.induction === vehicle.induction)
      .slice(0, 3);
    if (!brandModels.length && !relatedBuilds.length) return "";
    return (
      '<div class="container related-wrap">' +
      '<div class="related-block related-block--cta">' +
      '<a class="btn btn-ghost" href="#/tools/planejador/' + brandId + "/" + vehicle.id + '">Planejar build para o ' + esc(vehicle.name) + " " + I.accel + "</a>" +
      "</div>" +
      (brandModels.length
        ? '<div class="related-block"><div class="kicker">Veículos relacionados</div>' +
          '<div class="model-grid">' + brandModels.map((m) => modelCard(brandId, m)).join("") + "</div></div>"
        : "") +
      (relatedBuilds.length
        ? '<div class="related-block"><div class="kicker">Builds relacionados</div>' +
          '<div class="model-grid">' +
          relatedBuilds
            .map((g) => {
              const m = TS.mergedVehicle(g);
              return m ? modelCard(g.brandId, m, { owner: g.owner, name: g.name, photo: TS.garagePhoto(g), focus: g.focus, href: "#/garagem/" + g.slug }) : "";
            })
            .join("") +
          "</div></div>"
        : "") +
      "</div>"
    );
  }

  /* ---------- Bloco de build/preparação real (só existe para builds da garagem) ---------- */
  function overviewBlock(v) {
    if (!v.mods && !(v.build && v.build.length)) return "";
    return (
      '<div class="container">' +
      (v.mods
        ? '<div class="card info-card mods-card"><div class="ic">' + I.ecu + "</div>" +
          "<span>Preparação</span><b>" + esc(v.mods) + "</b></div>"
        : "") +
      (v.build && v.build.length
        ? '<div class="build-block"><div class="kicker">Build &amp; modificações</div>' +
          '<div class="build-grid">' +
          v.build.map((b) => '<div class="build-item">' + I.check + "<span>" + esc(b) + "</span></div>").join("") +
          "</div></div>"
        : "") +
      "</div>"
    );
  }

  /* ---------- Abas de nível superior: Performance | Estética ---------- */
  function bindVehicleTabs(v) {
    document.querySelectorAll(".tabs .tab").forEach((btn) =>
      btn.addEventListener("click", () => {
        if (state.tab === btn.dataset.tab) return;
        state.tab = btn.dataset.tab;
        renderTab(v);
      })
    );
  }

  function renderTab(v) {
    document.querySelectorAll(".tabs .tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === state.tab));
    const panel = document.getElementById("tab-content");
    if (panel) panel.innerHTML = state.tab === "performance" ? performanceHTML(v) : aestheticHTML(v);
    bindUpgrades(v);
  }

  /* ---------- CTA fixo global: "Encontrar peças para meu carro" ----------
     Injetado no final de toda rota (route()), não só na página do veículo.
     Em página de veículo: rola até as abas. Em qualquer outra página: leva ao catálogo. */
  function stickyFindPartsCTA() {
    const onVehiclePage = !!document.getElementById("tab-content");
    return (
      '<div class="sticky-cta"><div class="container sticky-cta-inner">' +
      '<span class="sticky-cta-text">' + I.check +
      (onVehiclePage ? "Peças compatíveis com o seu carro" : "Milhares de peças e acessórios") + "</span>" +
      '<button class="btn btn-red btn-sm" id="sticky-find-parts">Encontrar peças para meu carro</button>' +
      "</div></div>"
    );
  }
  function injectStickyCTA() {
    document.querySelectorAll(".sticky-cta").forEach((el) => el.remove());
    app.insertAdjacentHTML("beforeend", stickyFindPartsCTA());
    const btn = document.getElementById("sticky-find-parts");
    if (!btn) return;
    const onVehiclePage = !!document.getElementById("tab-content");
    btn.addEventListener("click", () => {
      if (onVehiclePage && state.currentVehicle) {
        state.tab = "performance";
        renderTab(state.currentVehicle);
        const tabs = document.querySelector(".tabs");
        if (tabs) tabs.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        location.hash = "#/models";
      }
    });
  }

  function performanceHTML(v) {
    const stages = TS.getPerformanceStages(v);
    return (
      '<div class="stage-list">' +
      stages
        .map((s, i) => {
          const badge = s.id.indexOf("stage") === 0 ? "S" + (i + 1) : s.id === "projeto-turbo" ? "TB" : "NA";
          const investLabel = ["Baixo", "Médio", "Alto", "Muito alto"][Math.min((s.levelIdx || 1) - 1, 3)] || "Médio";
          return (
            '<div class="card stage-card" data-stage="' + s.id + '">' +
            '<div class="stage-head">' +
            '<div class="stage-head-left">' +
            '<div class="stage-badge' + (s.levelIdx === 3 ? " lv3" : "") + '">' + badge + "</div>" +
            "<div><h3>" + s.title + '</h3><div class="desc">' + s.description + "</div></div></div>" +
            '<div class="stage-head-right">' +
            '<div class="stage-meta"><b>' + s.level + "</b><span>" + investLabel + " investimento · " + s.time + "</span></div>" +
            '<div class="chev"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></div>' +
            "</div></div>" +
            '<div class="stage-body">' +
            '<div class="stage-facts">' +
            '<div class="fact"><span>Objetivo</span><b>' + s.objective + "</b></div>" +
            '<div class="fact"><span>Investimento</span><b>' + investLabel + "</b></div>" +
            '<div class="fact"><span>Dificuldade</span><b>' + s.level + "</b></div>" +
            '<div class="fact"><span>Tempo médio</span><b>' + s.time + "</b></div>" +
            "</div>" +
            '<div class="subhead">Peças recomendadas</div>' +
            '<div class="mp-grid">' + s.parts.map((p) => productCard(p)).join("") + "</div>" +
            '<div class="subhead">Profissionais recomendados</div>' +
            '<div class="pro-grid">' + s.pros.map((id) => proCard(TS.getPro(id))).join("") + "</div>" +
            "</div></div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  /* ---------- Marketplace: rede, link e card de produto ----------
     Todo produto sempre tem um destino real: se a peça já tem link próprio
     (afiliado), ele é usado; senão, cai numa busca real no marketplace certo.
     Isso elimina o botão "Em breve" que existia antes. */
  function networkMeta(p) {
    let net = p.network;
    if (!net && p.link) net = /shopee/i.test(p.link) ? "shopee" : "mercadolivre";
    net = net === "shopee" ? "shopee" : "mercadolivre";
    return net === "shopee"
      ? { id: "shopee", label: "Shopee", short: "Shopee" }
      : { id: "mercadolivre", label: "Mercado Livre", short: "Mercado Livre" };
  }
  /* ---------- Parsers numéricos (compare / build planner) ---------- */
  function parsePrice(str) {
    if (!str) return null;
    const n = String(str).replace(/[^\d,]/g, "").replace(",", ".");
    const v = parseFloat(n);
    return isNaN(v) ? null : v;
  }
  function parseNum(str) {
    if (!str) return null;
    const n = String(str).replace(",", ".").match(/-?\d+(\.\d+)?/);
    return n ? parseFloat(n[0]) : null;
  }

  function marketplaceSearchUrl(networkId, query) {
    const q = encodeURIComponent(query);
    return networkId === "shopee"
      ? "https://shopee.com.br/search?keyword=" + q
      : "https://lista.mercadolivre.com.br/" + q.replace(/%20/g, "-");
  }

  /* ---------- Card de produto (afiliado) ----------
     Só os 4 elementos essenciais: imagem, título, badge de marketplace e CTA.
     Preço fica só na loja (evita preço desatualizado). opts.showCategory liga
     o chip de categoria — usado só na página /products. */
  function productCard(p, opts) {
    opts = opts || {};
    const net = networkMeta(p);
    const href = p.link || marketplaceSearchUrl(net.id, p.name);
    const catName = opts.showCategory && p.category ? (TS.productCategories.find((c) => c.id === p.category) || {}).name : null;
    return (
      '<article class="card mp-card">' +
      '<div class="mp-thumb mp-thumb--white">' +
      '<span class="mp-badge mp-badge--' + net.id + '">' + net.label + "</span>" +
      (I[p.icon] || I.gauge) +
      "</div>" +
      '<div class="mp-body">' +
      (catName ? '<span class="mp-cat-chip">' + esc(catName) + "</span>" : "") +
      "<h4 class=\"mp-title\">" + esc(p.name) + "</h4>" +
      '<a class="mp-cta mp-cta--' + net.id + '" href="' + esc(href) + '" target="_blank" rel="sponsored nofollow noopener" ' +
      'data-part="' + esc(p.name) + '" data-network="' + net.id + '">' +
      "Ver na " + net.short + " " + I.external + "</a>" +
      "</div></article>"
    );
  }

  function proCard(p) {
    if (!p) return "";
    const initials = p.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
    return (
      '<div class="card pro-card">' +
      '<div class="pro-top"><div class="pro-avatar">' + initials + "</div>" +
      "<div><h4>" + p.name + '</h4><div class="city">' + p.city + "</div></div></div>" +
      '<div class="pro-rating"><span class="stars">★★★★★</span><b>' + p.rating.toFixed(1) + "</b><span>(" + p.reviews + " avaliações)</span></div>" +
      '<div class="pro-tags">' + p.tags.map((t) => "<i>" + t + "</i>").join("") + "</div>" +
      '<div class="pro-links">' +
      "<span>" + I.instagram + p.instagram + "</span>" +
      "<span>" + I.whatsapp + p.whatsapp + "</span>" +
      "<span>" + I.globe + p.site + "</span>" +
      "</div>" +
      '<button class="btn btn-red btn-sm btn-block contact-pro" data-name="' + esc(p.name) + '">Entrar em contato</button>' +
      "</div>"
    );
  }

  function aestheticHTML(v) {
    const cats = TS.getAestheticCategories(v);
    const active = cats.find((c) => c.id === state.aestheticCat) || cats[0];
    return (
      '<div class="cat-pills" id="cat-pills">' +
      cats
        .map(
          (c) =>
            '<button class="cat-pill' + (c.id === active.id ? " active" : "") + '" data-cat="' + c.id + '">' +
            I[c.icon] + c.name + "</button>"
        )
        .join("") +
      "</div>" +
      '<div class="subhead">' + active.name + " · " + active.desc + "</div>" +
      '<div class="mp-grid">' + active.products.map((p) => productCard(p)).join("") + "</div>"
    );
  }

  function bindUpgrades(v) {
    document.querySelectorAll(".stage-head").forEach((h) =>
      h.addEventListener("click", () => h.closest(".stage-card").classList.toggle("open"))
    );

    const pills = document.getElementById("cat-pills");
    if (pills)
      pills.querySelectorAll(".cat-pill").forEach((b) =>
        b.addEventListener("click", () => {
          state.aestheticCat = b.dataset.cat;
          renderTab(v);
        })
      );

    document.querySelectorAll(".mp-cta").forEach((a) =>
      a.addEventListener("click", () => {
        // ponto único de rastreio de clique de afiliado (pronto para plugar analytics)
        if (window.plausible) window.plausible("affiliate_click", { props: { part: a.dataset.part, network: a.dataset.network } });
      })
    );
    document.querySelectorAll(".contact-pro").forEach((b) =>
      b.addEventListener("click", () => toast("Abrindo conversa com " + b.dataset.name + "…"))
    );
  }

  /* ---------- Aba Comunidade ---------- */
  function communityTab(v) {
    const posts = loadPosts(v);
    const top = posts.slice().sort((a, b) => b.likes - a.likes).slice(0, 4);
    return (
      '<div class="section-head"><div><div class="kicker">Comunidade</div>' +
      "<h2>Donos de " + v.name + "</h2>" +
      "<p>Experiências reais, projetos e dúvidas de quem tem o mesmo carro que você.</p></div>" +
      '<button class="btn btn-red btn-sm" id="new-post-btn">Criar post</button></div>' +
      '<div class="community-layout">' +
      "<div>" +
      '<div class="card composer"><div class="avatar red">EU</div>' +
      '<input id="composer-input" placeholder="Compartilhe algo com a comunidade do ' + v.name + '…"/></div>' +
      '<div id="post-list">' + posts.map(postCard).join("") + "</div>" +
      "</div>" +
      '<aside class="community-side">' +
      '<div class="card side-card"><h4>Sobre a comunidade</h4>' +
      '<div class="side-stats">' +
      '<div class="side-stat"><b>' + (1200 + posts.length * 37) + "</b><span>membros</span></div>" +
      '<div class="side-stat"><b>' + posts.length + "</b><span>posts</span></div>" +
      "</div></div>" +
      '<div class="card side-card"><h4>Em alta esta semana</h4><ul>' +
      top.map((p, i) => '<li><span class="rank">0' + (i + 1) + "</span><b>" + esc(p.title) + "</b></li>").join("") +
      "</ul></div>" +
      '<div class="card side-card"><h4>Regras rápidas</h4><ul>' +
      "<li>Respeite os outros membros.</li>" +
      "<li>Compartilhe custos e fornecedores reais.</li>" +
      "<li>Fotos do projeto são sempre bem-vindas.</li>" +
      "</ul></div>" +
      "</aside></div>"
    );
  }

  function postCard(p) {
    const photos =
      p.photos > 0
        ? '<div class="post-photos">' +
          Array.from({ length: Math.min(p.photos, 3) })
            .map(() => '<div class="post-photo">' + I.photo + "</div>")
            .join("") +
          "</div>"
        : "";
    return (
      '<div class="card post-card" data-post="' + p.id + '">' +
      '<div class="post-head"><div class="avatar">' + esc(p.avatar) + "</div>" +
      '<div class="who"><b>' + esc(p.author) + "</b><span>" + esc(p.time) + "</span></div>" +
      (p.flair ? '<span class="flair">' + esc(p.flair) + "</span>" : "") +
      "</div>" +
      "<h3>" + esc(p.title) + "</h3>" +
      '<div class="body">' + esc(p.body) + "</div>" +
      photos +
      '<div class="post-actions">' +
      '<button class="post-action act-like' + (p.liked ? " on" : "") + '">' + (p.liked ? I.likeFill : I.like) + '<span class="like-count">' + p.likes + "</span></button>" +
      '<button class="post-action act-comment">' + I.comment + p.comments.length + " comentários</button>" +
      '<button class="post-action act-share">' + I.share + "Compartilhar</button>" +
      '<button class="post-action act-save' + (p.saved ? " on-save" : "") + '">' + (p.saved ? I.saveFill : I.save) + (p.saved ? "Salvo" : "Salvar") + "</button>" +
      "</div>" +
      '<div class="comments">' +
      p.comments
        .map(
          (c) =>
            '<div class="comment"><div class="avatar">' + esc(c.avatar) + "</div>" +
            '<div class="comment-bubble"><div class="meta"><b>' + esc(c.author) + "</b>" + esc(c.time) + "</div>" +
            "<p>" + esc(c.body) + '</p><span class="c-likes">' + I.like + c.likes + "</span></div></div>"
        )
        .join("") +
      '<div class="comment-form"><input placeholder="Responder…"/><button>Enviar</button></div>' +
      "</div></div>"
    );
  }

  function bindCommunity(v) {
    const posts = loadPosts(v);

    function getPost(el) {
      const id = el.closest(".post-card").dataset.post;
      return posts.find((p) => p.id === id);
    }

    document.querySelectorAll(".act-like").forEach((b) =>
      b.addEventListener("click", () => {
        const p = getPost(b);
        p.liked = !p.liked;
        p.likes += p.liked ? 1 : -1;
        savePosts(v, posts);
        b.classList.toggle("on", p.liked);
        b.innerHTML = (p.liked ? I.likeFill : I.like) + '<span class="like-count">' + p.likes + "</span>";
      })
    );

    document.querySelectorAll(".act-comment").forEach((b) =>
      b.addEventListener("click", () => b.closest(".post-card").classList.toggle("show-comments"))
    );

    document.querySelectorAll(".act-share").forEach((b) =>
      b.addEventListener("click", () => {
        const p = getPost(b);
        const url = location.href.split("?")[0] + "?post=" + p.id;
        if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
        toast("Link do post copiado");
      })
    );

    document.querySelectorAll(".act-save").forEach((b) =>
      b.addEventListener("click", () => {
        const p = getPost(b);
        p.saved = !p.saved;
        savePosts(v, posts);
        b.classList.toggle("on-save", p.saved);
        b.innerHTML = (p.saved ? I.saveFill : I.save) + (p.saved ? "Salvo" : "Salvar");
        toast(p.saved ? "Post salvo" : "Post removido dos salvos");
      })
    );

    document.querySelectorAll(".comment-form").forEach((f) => {
      const input = f.querySelector("input");
      const send = () => {
        const text = input.value.trim();
        if (!text) return;
        const p = getPost(f);
        p.comments.push({ author: "você", avatar: "EU", time: "agora", body: text, likes: 0 });
        savePosts(v, posts);
        renderTab(v);
        toast("Comentário publicado");
      };
      f.querySelector("button").addEventListener("click", send);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") send(); });
    });

    const openModal = (prefill) => showPostModal(v, posts, prefill);
    const newBtn = document.getElementById("new-post-btn");
    if (newBtn) newBtn.addEventListener("click", () => openModal(""));
    const composer = document.getElementById("composer-input");
    if (composer)
      composer.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { openModal(composer.value); composer.value = ""; }
      });
    if (composer) composer.addEventListener("focus", () => { openModal(""); composer.blur(); });
  }

  function showPostModal(v, posts, prefillTitle) {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML =
      '<div class="modal"><h3>Novo post</h3>' +
      '<input id="np-title" placeholder="Título do post" value="' + esc(prefillTitle || "") + '"/>' +
      '<textarea id="np-body" rows="5" placeholder="Conte para a comunidade: dúvida, projeto, experiência…"></textarea>' +
      '<div class="modal-actions">' +
      '<button class="btn btn-ghost btn-sm" id="np-cancel">Cancelar</button>' +
      '<button class="btn btn-red btn-sm" id="np-publish">Publicar</button>' +
      "</div></div>";
    document.body.appendChild(backdrop);
    const title = backdrop.querySelector("#np-title");
    title.focus();

    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) backdrop.remove(); });
    backdrop.querySelector("#np-cancel").addEventListener("click", () => backdrop.remove());
    backdrop.querySelector("#np-publish").addEventListener("click", () => {
      const t = title.value.trim();
      const b = backdrop.querySelector("#np-body").value.trim();
      if (!t) { toast("Dê um título ao seu post"); return; }
      posts.unshift({
        id: "p" + Date.now(),
        author: "você", avatar: "EU", flair: "Novo",
        time: "agora", title: t, body: b || "…",
        photos: 0, likes: 0, saved: false, liked: false, comments: [],
      });
      savePosts(v, posts);
      backdrop.remove();
      renderTab(v);
      toast("Post publicado 🎉");
    });
  }

  /* =========================================================
     GUIAS (blog / conteúdo editorial)
     ========================================================= */
  /* =========================================================
     /blog — mescla Guias + Top 10 num único hub de conteúdo
     ========================================================= */
  const TOPLIST_COVER = { "acessorios-universais": "gauge", "upgrades-stage-1-mais-procurados": "ecu" };
  // Categoria de peça (artigos antigos) -> categoria de produto (novo /products), para linkar conteúdo->produto
  const PART_CAT_TO_PRODUCT_CAT = {
    ecu: "performance", escape: "performance", admissao: "performance", turbo: "performance",
    standalone: "performance", intercooler: "performance", combustivel: "performance",
    transmissao: "performance", internos: "performance", suspensao: "performance", freios: "performance",
    rodas: "tires", aero: "accessories", iluminacao: "lighting", envelopamento: "accessories",
    instrumentacao: "performance", cockpit: "interior", acessorios: "accessories", som: "audio",
  };

  function blogPosts() {
    const guides = TS.articles.map((a) => Object.assign({ type: "guide", badge: "Guia" }, a));
    const tops = TS.topLists.map((l) =>
      Object.assign({ type: "top10", badge: "Top 10", title: l.title, excerpt: l.intro, cover: TOPLIST_COVER[l.slug] || "gauge" }, l)
    );
    return guides.concat(tops);
  }

  function renderBlog() {
    const posts = blogPosts();
    const cards = posts
      .map(
        (p) =>
          '<a class="card guide-card" href="#/blog/' + p.slug + '">' +
          '<span class="guide-type-badge guide-type-badge--' + p.type + '">' + p.badge + "</span>" +
          '<div class="guide-cover">' + I[p.cover] + "</div>" +
          '<div class="guide-body"><h3>' + esc(p.title) + "</h3><p>" + esc(p.excerpt) + "</p>" +
          '<span class="guide-readmore">Ler ' + (p.type === "top10" ? "lista" : "guia") + " " + I.accel + "</span></div></a>"
      )
      .join("");
    app.innerHTML =
      navbar("blog") +
      "<main>" +
      '<div class="page-head"><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Home</a><span class="sep">/</span><span>Blog</span></div>' +
      "<h1>Blog</h1>" +
      '<p class="sub">Guias, comparativos e rankings Top 10 — conteúdo direto ao ponto para decidir com informação.</p>' +
      "</div></div>" +
      '<section class="section" style="padding-top:44px"><div class="container">' +
      '<div class="guide-grid">' + cards + "</div>" +
      "</div></section></main>" +
      footer();
  }

  function relatedProductsForCategories(categoryIds, limit) {
    const productCats = new Set(categoryIds.map((c) => PART_CAT_TO_PRODUCT_CAT[c]).filter(Boolean));
    if (!productCats.size) return [];
    return TS.productsCatalog.filter((p) => productCats.has(p.category)).slice(0, limit || 3);
  }

  function renderBlogDetail(slug) {
    const posts = blogPosts();
    const post = posts.find((p) => p.slug === slug);
    if (!post) return renderNotFound();
    const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

    let bodyHTML;
    if (post.type === "guide") {
      const relatedProducts = relatedProductsForCategories(post.relatedCategories || []);
      bodyHTML =
        '<div class="guide-article">' + post.body + "</div>" +
        (relatedProducts.length
          ? '<div class="guide-related-products"><div class="kicker">Produtos relacionados</div>' +
            '<div class="mp-grid">' + relatedProducts.map((p) => productCard(p)).join("") + "</div></div>"
          : "");
    } else {
      bodyHTML =
        '<div class="top10-list">' +
        post.items
          .slice(0, 10)
          .map((p, i) => '<div class="top10-row"><div class="top10-rank">' + (i + 1) + "</div>" + productCard(p) + "</div>")
          .join("") +
        "</div>";
    }

    app.innerHTML =
      navbar("blog") +
      "<main>" +
      '<div class="page-head"><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Home</a><span class="sep">/</span><a href="#/blog">Blog</a><span class="sep">/</span><span>' + esc(post.title) + "</span></div>" +
      '<span class="guide-type-badge guide-type-badge--' + post.type + '" style="margin-bottom:12px">' + post.badge + "</span>" +
      "<h1>" + esc(post.title) + "</h1>" +
      '<p class="sub">' + esc(post.excerpt) + "</p>" +
      "</div></div>" +
      '<section class="section" style="padding-top:44px"><div class="container container--narrow">' +
      bodyHTML +
      (related.length
        ? '<div class="guide-related"><div class="kicker">Leia também</div><div class="guide-related-list">' +
          related.map((r) => '<a href="#/blog/' + r.slug + '">' + esc(r.title) + " " + I.accel + "</a>").join("") +
          "</div></div>"
        : "") +
      '<div class="guide-related"><a class="btn btn-ghost btn-sm" href="#/products">Ver todos os produtos ' + I.accel + "</a></div>" +
      "</div></section></main>" +
      footer();
  }

  /* =========================================================
     CALCULADORAS
     ========================================================= */
  function calculatorsPanelHTML() {
    return (
      '<div class="tools-panel-head"><div class="kicker">Calculadoras</div>' +
      "<h2>Ferramentas rápidas</h2><p>Para o dia a dia de quem prepara o carro.</p></div>" +
      '<div class="calc-grid">' +

      '<div class="card calc-card">' +
      '<div class="section-head" style="margin-bottom:20px"><div><div class="kicker">Conversor</div>' +
      "<h2>cv ⇄ hp ⇄ kW</h2><p>Converta entre as unidades de potência mais usadas no Brasil, EUA e Europa.</p></div></div>" +
      '<div class="calc-tool">' +
      '<label>cv (métrico)<input type="number" id="calc-cv" placeholder="Ex: 150"/></label>' +
      '<label>hp (SAE)<input type="number" id="calc-hp" placeholder="Ex: 148"/></label>' +
      '<label>kW<input type="number" id="calc-kw" placeholder="Ex: 110"/></label>' +
      "</div></div>" +

      '<div class="card calc-card">' +
      '<div class="section-head" style="margin-bottom:20px"><div><div class="kicker">Estimativa</div>' +
      "<h2>Ganho estimado por Stage</h2><p>Informe a potência de fábrica e o estágio pretendido para uma faixa estimada — não substitui o dyno.</p></div></div>" +
      '<div class="calc-tool">' +
      '<label>Potência de fábrica (cv)<input type="number" id="calc-base-power" placeholder="Ex: 116"/></label>' +
      '<label>Estágio<select id="calc-stage">' +
      '<option value="0.15-0.25">Stage 1 (+15% a +25%)</option>' +
      '<option value="0.25-0.40">Stage 2 (+25% a +40%)</option>' +
      '<option value="0.40-0.70">Stage 3 (+40% a +70%)</option>' +
      "</select></label>" +
      '<div class="calc-result" id="calc-stage-result">Preencha a potência para ver a estimativa.</div>' +
      "</div></div>" +

      '<div class="card calc-card">' +
      '<div class="section-head" style="margin-bottom:20px"><div><div class="kicker">Fitment</div>' +
      "<h2>Calculadora de pneus</h2><p>Compare a medida original com uma nova e veja a diferença de diâmetro e de velocímetro.</p></div></div>" +
      '<div class="calc-tool calc-tool--tire">' +
      '<div class="calc-tire-col"><span class="calc-tire-label">Pneu original</span>' +
      '<div class="calc-tire-row"><input type="number" id="tire-a-w" placeholder="195" title="Largura (mm)"/><span>/</span>' +
      '<input type="number" id="tire-a-p" placeholder="65" title="Perfil (%)"/><span>R</span>' +
      '<input type="number" id="tire-a-r" placeholder="15" title="Aro (pol)"/></div></div>' +
      '<div class="calc-tire-col"><span class="calc-tire-label">Pneu novo</span>' +
      '<div class="calc-tire-row"><input type="number" id="tire-b-w" placeholder="205" title="Largura (mm)"/><span>/</span>' +
      '<input type="number" id="tire-b-p" placeholder="55" title="Perfil (%)"/><span>R</span>' +
      '<input type="number" id="tire-b-r" placeholder="16" title="Aro (pol)"/></div></div>' +
      '<div class="calc-result" id="calc-tire-result">Preencha as duas medidas para comparar.</div>' +
      "</div></div>" +

      '<div class="card calc-card">' +
      '<div class="section-head" style="margin-bottom:20px"><div><div class="kicker">Economia</div>' +
      "<h2>Consumo de combustível</h2><p>Km/l real a partir do que você rodou e abasteceu — e o custo por km.</p></div></div>" +
      '<div class="calc-tool">' +
      '<label>Km rodados desde o abastecimento<input type="number" id="calc-km" placeholder="Ex: 420"/></label>' +
      '<label>Litros abastecidos<input type="number" id="calc-liters" placeholder="Ex: 35"/></label>' +
      '<label>Preço do litro (opcional)<input type="number" step="0.01" id="calc-fuel-price" placeholder="Ex: 5.89"/></label>' +
      '<div class="calc-result" id="calc-fuel-result">Preencha km e litros para calcular.</div>' +
      "</div></div>" +

      "</div>"
    );
  }

  function bindCalculators() {
    const cv = document.getElementById("calc-cv");
    const hp = document.getElementById("calc-hp");
    const kw = document.getElementById("calc-kw");
    if (cv && hp && kw) {
      const fromCv = (v) => { hp.value = (v * 0.98632).toFixed(1); kw.value = (v * 0.7355).toFixed(1); };
      const fromHp = (v) => { cv.value = (v * 1.01387).toFixed(1); kw.value = (v * 0.7457).toFixed(1); };
      const fromKw = (v) => { cv.value = (v * 1.35962).toFixed(1); hp.value = (v * 1.34102).toFixed(1); };
      cv.addEventListener("input", () => { if (cv.value) fromCv(parseFloat(cv.value)); });
      hp.addEventListener("input", () => { if (hp.value) fromHp(parseFloat(hp.value)); });
      kw.addEventListener("input", () => { if (kw.value) fromKw(parseFloat(kw.value)); });
    }

    const basePower = document.getElementById("calc-base-power");
    const stageSel = document.getElementById("calc-stage");
    const result = document.getElementById("calc-stage-result");
    function updateStageEstimate() {
      const base = parseFloat(basePower.value);
      if (!base || base <= 0) { result.textContent = "Preencha a potência para ver a estimativa."; return; }
      const [lo, hi] = stageSel.value.split("-").map(Number);
      const min = Math.round(base * (1 + lo));
      const max = Math.round(base * (1 + hi));
      result.innerHTML = "Estimativa: <b>" + min + " – " + max + " cv</b> <span>(faixa aproximada, varia por carro e execução)</span>";
    }
    if (basePower && stageSel && result) {
      basePower.addEventListener("input", updateStageEstimate);
      stageSel.addEventListener("change", updateStageEstimate);
    }

    /* Calculadora de pneus */
    const tireIds = ["tire-a-w", "tire-a-p", "tire-a-r", "tire-b-w", "tire-b-p", "tire-b-r"];
    const tireEls = tireIds.map((id) => document.getElementById(id));
    const tireResult = document.getElementById("calc-tire-result");
    function tireDiameter(w, p, r) { return r * 25.4 + 2 * (w * (p / 100)); }
    function updateTire() {
      const [aw, ap, ar, bw, bp, br] = tireEls.map((el) => parseFloat(el && el.value));
      if (!aw || !ap || !ar || !bw || !bp || !br) { tireResult.textContent = "Preencha as duas medidas para comparar."; return; }
      const da = tireDiameter(aw, ap, ar);
      const db = tireDiameter(bw, bp, br);
      const diffPct = ((db - da) / da) * 100;
      const speedoAt100 = 100 * (db / da);
      tireResult.innerHTML =
        "Diâmetro: <b>" + da.toFixed(0) + " mm → " + db.toFixed(0) + " mm</b> (" + (diffPct >= 0 ? "+" : "") + diffPct.toFixed(1) + "%)" +
        '<span>Com o pneu novo, quando o velocímetro marcar 100 km/h a velocidade real será ~' + speedoAt100.toFixed(0) + " km/h.</span>";
    }
    if (tireEls.every(Boolean)) tireEls.forEach((el) => el.addEventListener("input", updateTire));

    /* Calculadora de consumo */
    const kmEl = document.getElementById("calc-km");
    const litersEl = document.getElementById("calc-liters");
    const fuelPriceEl = document.getElementById("calc-fuel-price");
    const fuelResult = document.getElementById("calc-fuel-result");
    function updateFuel() {
      const km = parseFloat(kmEl.value), liters = parseFloat(litersEl.value);
      if (!km || !liters) { fuelResult.textContent = "Preencha km e litros para calcular."; return; }
      const kml = km / liters;
      let extra = "";
      const price = parseFloat(fuelPriceEl.value);
      if (price) {
        const costPerKm = price / kml;
        extra = '<span>Custo aproximado: R$ ' + costPerKm.toFixed(2) + " por km.</span>";
      }
      fuelResult.innerHTML = "Consumo: <b>" + kml.toFixed(1) + " km/l</b>" + extra;
    }
    if (kmEl && litersEl && fuelResult) [kmEl, litersEl, fuelPriceEl].forEach((el) => el.addEventListener("input", updateFuel));
  }

  /* =========================================================
     COMPARADOR (/comparar · /compare)
     ========================================================= */
  function vehicleOptionsHTML(selectedKey) {
    return Object.keys(TS.models)
      .map((brandId) => {
        const brand = TS.getBrand(brandId);
        const opts = TS.models[brandId]
          .filter((m) => isEnabled(brandId, m.id))
          .map((m) => {
            const key = brandId + ":" + m.id;
            return '<option value="' + key + '"' + (key === selectedKey ? " selected" : "") + ">" + esc(m.name) + "</option>";
          })
          .join("");
        return '<optgroup label="' + esc(brand ? brand.name : brandId) + '">' + opts + "</optgroup>";
      })
      .join("");
  }

  const STAGE_GAIN = { stock: 0, stage1: 0.20, stage2: 0.32, stage3: 0.55 };
  const STAGE_LABEL = { stock: "De fábrica", stage1: "Stage 1", stage2: "Stage 2", stage3: "Stage 3" };

  function applyStage(vehicle, stageKey) {
    const gain = STAGE_GAIN[stageKey] || 0;
    const basePower = parseNum(vehicle.power) || 0;
    const baseAccel = parseNum(vehicle.accel) || 0;
    const newPower = Math.round(basePower * (1 + gain));
    // aproximação física: tempo de aceleração escala ~ raiz(potência antiga/nova) a peso constante
    const newAccel = gain > 0 && basePower > 0 ? +(baseAccel * Math.sqrt(basePower / newPower)).toFixed(1) : baseAccel;
    return { power: newPower + " cv", accel: newAccel + " s", gained: gain > 0 };
  }

  function comparePanelHTML(urlParts) {
    return (
      '<div class="tools-panel-head"><div class="kicker">Comparador</div>' +
      "<h2>Comparar veículos</h2><p>Compare specs lado a lado e veja o efeito de cada Stage em tempo real.</p></div>" +
      '<div class="compare-controls">' +
      '<label class="compare-select">Veículo A<select id="cmp-a"><option value="">Escolha um carro…</option>' + vehicleOptionsHTML(urlParts[0] && urlParts[1] ? urlParts[0] + ":" + urlParts[1] : "") + "</select></label>" +
      '<label class="compare-select">Veículo B<select id="cmp-b"><option value="">Escolha um carro…</option>' + vehicleOptionsHTML(urlParts[2] && urlParts[3] ? urlParts[2] + ":" + urlParts[3] : "") + "</select></label>" +
      '<label class="compare-select">Veículo C (opcional)<select id="cmp-c"><option value="">+ Adicionar terceiro</option>' + vehicleOptionsHTML(urlParts[4] && urlParts[5] ? urlParts[4] + ":" + urlParts[5] : "") + "</select></label>" +
      '<label class="compare-select compare-select--stage">Estágio aplicado<select id="cmp-stage">' +
      Object.keys(STAGE_LABEL).map((k) => '<option value="' + k + '">' + STAGE_LABEL[k] + "</option>").join("") +
      "</select></label>" +
      "</div>" +
      '<p class="calc-disclaimer">' + I.check + "Potência/aceleração por Stage são estimativas — variam por carro e execução, não substituem dyno.</p>" +
      '<div id="compare-table-wrap"></div>'
    );
  }

  function bindCompare() {
    const a = document.getElementById("cmp-a"), b = document.getElementById("cmp-b"), c = document.getElementById("cmp-c"), st = document.getElementById("cmp-stage");
    if (!a || !b) return;
    function update() { renderCompareTable([a.value, b.value, c.value], st.value); }
    [a, b, c, st].forEach((el) => el.addEventListener("change", update));
    update();
  }

  function renderCompareTable(keys, stageKey) {
    const wrap = document.getElementById("compare-table-wrap");
    if (!wrap) return;
    const cols = keys
      .filter(Boolean)
      .map((key) => {
        const [brandId, modelId] = key.split(":");
        const vehicle = TS.getVehicle(brandId, modelId);
        return vehicle ? { brandId, vehicle } : null;
      })
      .filter(Boolean);

    if (cols.length < 2) {
      wrap.innerHTML = '<div class="card" style="padding:32px;text-align:center"><p>Escolha pelo menos dois veículos para comparar.</p></div>';
      return;
    }

    const rows = [
      ["Motor", (v) => v.engine, false],
      ["Indução", (v) => (v.induction === "turbo" ? "Turbo" : v.induction === "diesel-turbo" ? "Diesel turbo" : v.induction === "hibrido" ? "Híbrido" : "Aspirado"), false],
      ["Potência", (v) => applyStage(v, stageKey).power, true],
      ["Torque", (v) => v.torque, false],
      ["0–100 km/h", (v) => applyStage(v, stageKey).accel, true],
      ["Vel. máxima", (v) => v.top, false],
      ["Câmbio", (v) => v.gearbox, false],
      ["Tração", (v) => v.traction, false],
      ["Peso", (v) => v.weight, false],
      ["Consumo", (v) => v.consumption, false],
      ["FIPE", (v) => v.fipe, false],
    ];

    wrap.innerHTML =
      '<div class="cmp-wrap"><table class="cmp tnum-table">' +
      "<thead><tr><th></th>" + cols.map((c) => "<th>" + esc(c.vehicle.name) + "</th>").join("") + "</tr></thead><tbody>" +
      rows
        .map(
          ([label, fn, highlight]) =>
            "<tr><th>" + label + "</th>" +
            cols.map((c) => "<td" + (highlight && stageKey !== "stock" ? ' class="cmp-changed"' : "") + ' data-col="' + esc(label) + '">' + esc(fn(c.vehicle)) + "</td>").join("") +
            "</tr>"
        )
        .join("") +
      "</tbody></table></div>" +
      '<div class="compare-cta-row">' +
      cols.map((c) => '<a class="btn btn-ghost btn-sm" href="#/veiculo/' + c.brandId + "/" + c.vehicle.id + '">Ver upgrades do ' + esc(c.vehicle.name) + "</a>").join("") +
      "</div>";
  }

  /* =========================================================
     PLANEJADOR DE BUILD (/planejador · /build-planner)
     ========================================================= */
  const BUILD_GOALS = [
    { id: "diaria", label: "Uso diário" },
    { id: "rua", label: "Rua" },
    { id: "turbo", label: "Turbo" },
    { id: "track", label: "Track Day" },
    { id: "drift", label: "Drift" },
    { id: "visual", label: "Visual" },
  ];
  const BUILD_BUDGETS = [
    { id: "2000", label: "R$ 2.000", value: 2000 },
    { id: "5000", label: "R$ 5.000", value: 5000 },
    { id: "10000", label: "R$ 10.000", value: 10000 },
    { id: "20000", label: "R$ 20.000", value: 20000 },
    { id: "50000+", label: "R$ 50.000+", value: 999999 },
  ];

  function generateBuild(vehicle, goalId, budget) {
    const stages = TS.getPerformanceStages(vehicle) || [];
    const aesthetic = TS.getAestheticCategories(vehicle) || [];
    let pool = [];
    if (goalId === "diaria") {
      pool = pool.concat((stages[0] && stages[0].parts) || []);
      const interior = aesthetic.find((c) => c.id === "interior");
      if (interior) pool = pool.concat(interior.products);
    } else if (goalId === "visual") {
      aesthetic.forEach((c) => (pool = pool.concat(c.products)));
    } else {
      // rua / turbo / track / drift: performance em primeiro lugar
      stages.forEach((s) => (pool = pool.concat(s.parts)));
      if (goalId === "track" || goalId === "drift") {
        const susp = aesthetic.find((c) => c.id === "suspensao");
        if (susp) pool = pool.concat(susp.products);
      }
      if (goalId === "rua") {
        const som = aesthetic.find((c) => c.id === "som");
        if (som) pool = pool.concat(som.products);
      }
    }
    const seen = new Set();
    pool = pool.filter((p) => { if (seen.has(p.name)) return false; seen.add(p.name); return true; });
    pool.sort((x, y) => (parsePrice(x.price) || 0) - (parsePrice(y.price) || 0));

    const items = [];
    let total = 0;
    for (const p of pool) {
      const price = parsePrice(p.price) || 0;
      if (items.length === 0 || total + price <= budget) { items.push(p); total += price; }
      if (total >= budget) break;
    }
    return { items, total, poolSize: pool.length };
  }

  function plannerPanelHTML(urlParts) {
    return (
      '<div class="tools-panel-head"><div class="kicker">Planejador</div>' +
      "<h2>Planejador de Build</h2><p>Escolha carro, objetivo e orçamento — a gente monta a lista de peças.</p></div>" +
      '<div class="planner-controls">' +
      '<label class="compare-select">Veículo<select id="bp-vehicle"><option value="">Escolha um carro…</option>' + vehicleOptionsHTML(urlParts[0] && urlParts[1] ? urlParts[0] + ":" + urlParts[1] : "") + "</select></label>" +
      '<label class="compare-select">Objetivo<select id="bp-goal">' +
      BUILD_GOALS.map((g) => '<option value="' + g.id + '">' + g.label + "</option>").join("") +
      "</select></label>" +
      '<label class="compare-select">Orçamento<select id="bp-budget">' +
      BUILD_BUDGETS.map((b) => '<option value="' + b.id + '">' + b.label + "</option>").join("") +
      "</select></label>" +
      "</div>" +
      '<div id="planner-result"></div>'
    );
  }

  function bindBuildPlanner() {
    const vSel = document.getElementById("bp-vehicle"), gSel = document.getElementById("bp-goal"), bSel = document.getElementById("bp-budget");
    if (!vSel) return;
    function update() { renderPlannerResult(vSel.value, gSel.value, bSel.value); }
    [vSel, gSel, bSel].forEach((el) => el.addEventListener("change", update));
    update();
  }

  function renderPlannerResult(key, goalId, budgetId) {
    const result = document.getElementById("planner-result");
    if (!result) return;
    if (!key) {
      result.innerHTML = '<div class="card" style="padding:32px;text-align:center"><p>Escolha um veículo para gerar o build.</p></div>';
      return;
    }
    const [brandId, modelId] = key.split(":");
    const vehicle = TS.getVehicle(brandId, modelId);
    const budget = (BUILD_BUDGETS.find((b) => b.id === budgetId) || BUILD_BUDGETS[1]).value;
    const goal = BUILD_GOALS.find((g) => g.id === goalId) || BUILD_GOALS[0];
    const { items, total, poolSize } = generateBuild(vehicle, goal.id, budget);

    if (!items.length) {
      result.innerHTML = '<div class="card" style="padding:32px;text-align:center"><p>Não há peças cadastradas para essa combinação ainda.</p></div>';
      return;
    }

    result.innerHTML =
      '<div class="planner-summary">' +
      '<div class="planner-summary-item"><span>Carro</span><b>' + esc(vehicle.name) + "</b></div>" +
      '<div class="planner-summary-item"><span>Objetivo</span><b>' + esc(goal.label) + "</b></div>" +
      '<div class="planner-summary-item"><span>Itens no plano</span><b>' + items.length + " de " + poolSize + "</b></div>" +
      '<div class="planner-summary-item planner-summary-item--total"><span>Total estimado</span><b class="tnum">R$ ' + total.toLocaleString("pt-BR") + "</b></div>" +
      "</div>" +
      '<div class="mp-grid">' + items.map((p) => productCard(p)).join("") + "</div>" +
      '<div class="planner-cta-row"><a class="btn btn-red" href="#/veiculo/' + brandId + "/" + modelId + '">Ver ficha completa do ' + esc(vehicle.name) + "</a></div>";
  }

  /* =========================================================
     /tools — mescla Calculadoras + Comparador + Planejador
     ========================================================= */
  const TOOLS_TABS = [
    { id: "calculadoras", label: "Calculadoras" },
    { id: "comparar", label: "Comparador" },
    { id: "planejador", label: "Planejador" },
  ];

  function renderTools(subview, urlParts) {
    subview = TOOLS_TABS.some((t) => t.id === subview) ? subview : "calculadoras";
    app.innerHTML =
      navbar("tools") +
      "<main>" +
      '<div class="page-head"><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Home</a><span class="sep">/</span><span>Tools</span></div>' +
      "<h1>Tools</h1>" +
      '<p class="sub">Calculadoras, comparador de veículos e planejador de build — tudo em um só lugar.</p>' +
      "</div></div>" +
      '<div class="tabs"><div class="container tabs-inner">' +
      TOOLS_TABS.map((t) => '<button class="tab' + (t.id === subview ? " active" : "") + '" data-tools-tab="' + t.id + '">' + t.label + "</button>").join("") +
      "</div></div>" +
      '<section class="section" style="padding-top:36px"><div class="container">' +
      '<div id="tools-panel"></div>' +
      "</div></section></main>" +
      footer();

    document.querySelectorAll("[data-tools-tab]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const tab = btn.dataset.toolsTab;
        document.querySelectorAll("[data-tools-tab]").forEach((b) => b.classList.toggle("active", b === btn));
        history.replaceState(null, "", "#/tools/" + tab);
        renderToolsPanel(tab, []);
      })
    );
    renderToolsPanel(subview, urlParts);
  }

  function renderToolsPanel(subview, urlParts) {
    const panel = document.getElementById("tools-panel");
    if (!panel) return;
    if (subview === "comparar") { panel.innerHTML = comparePanelHTML(urlParts); bindCompare(); }
    else if (subview === "planejador") { panel.innerHTML = plannerPanelHTML(urlParts); bindBuildPlanner(); }
    else { panel.innerHTML = calculatorsPanelHTML(); bindCalculators(); }
  }

  /* ---------- 404 ---------- */
  function renderNotFound() {
    app.innerHTML =
      navbar("") +
      '<main><div class="page-head"><div class="container">' +
      "<h1>Página não encontrada</h1>" +
      '<p class="sub" style="margin-bottom:28px">O veículo ou marca que você procura não está no catálogo ainda.</p>' +
      '<a class="btn btn-red" href="#/">Voltar ao início</a>' +
      "</div></div></main>" +
      footer();
  }

  /* ---------- Roteador ---------- */
  function route() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const parts = hash.split("?")[0].split("/").filter(Boolean);
    window.scrollTo(0, 0);

    if (parts.length === 0) renderHome();
    else if ((parts[0] === "models" || parts[0] === "marcas") && !parts[1]) renderModels();
    else if ((parts[0] === "models" || parts[0] === "marca") && parts[1]) renderBrand(parts[1]);
    else if (parts[0] === "products") renderProducts();
    else if (parts[0] === "garagem" && parts[1]) {
      const g = TS.garageBySlug(parts[1]);
      if (!g) renderNotFound();
      else { state.tab = "performance"; renderVehicle(g.brandId, g.modelId, g); }
    }
    else if (parts[0] === "veiculo" && parts[1] && parts[2]) {
      state.tab = "performance";
      renderVehicle(parts[1], parts[2], null);
    }
    // /blog (mescla Guias + Top 10) — rotas antigas viram alias, sem quebrar links já compartilhados
    else if (parts[0] === "blog" && !parts[1]) renderBlog();
    else if (parts[0] === "blog" && parts[1]) renderBlogDetail(parts[1]);
    else if (parts[0] === "guias" && !parts[1]) renderBlog();
    else if (parts[0] === "guia" && parts[1]) renderBlogDetail(parts[1]);
    else if ((parts[0] === "top10" || parts[0] === "top-10") && !parts[1]) renderBlog();
    else if ((parts[0] === "top10" || parts[0] === "top-10") && parts[1]) renderBlogDetail(parts[1]);
    // /tools (mescla Calculadoras + Comparador + Planejador) — rotas antigas viram alias
    else if (parts[0] === "tools") renderTools(parts[1], parts.slice(2));
    else if (parts[0] === "calculadoras" || parts[0] === "calculators") renderTools("calculadoras", []);
    else if (parts[0] === "comparar" || parts[0] === "compare") renderTools("comparar", parts.slice(1));
    else if (parts[0] === "planejador" || parts[0] === "build-planner") renderTools("planejador", parts.slice(1));
    // /projetos foi removida do produto — cai em 404 propositalmente
    else renderNotFound();

    injectStickyCTA();
    bindGlobalSearch();
  }

  window.addEventListener("hashchange", route);
  route();
})();
