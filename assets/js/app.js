/* =========================================================
   TuneSpec — App (roteador hash + views)
   ========================================================= */

(function () {
  const app = document.getElementById("app");

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
    tab: "informacoes",
    upgradeCat: "performance",
    aestheticCat: "farois",
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
     Os dados completos (todas as marcas/modelos) continuam em data.js
     e as fotos em assets/img/vehicles/ — aqui só se define o que a UI mostra. */
  const ENABLED = { mitsubishi: ["lancer-gt"] };

  function isEnabled(brandId, modelId) {
    return (ENABLED[brandId] || []).includes(modelId);
  }
  function enabledVehicles() {
    const out = [];
    for (const brandId of Object.keys(ENABLED)) {
      for (const m of TS.models[brandId] || []) {
        if (isEnabled(brandId, m.id)) out.push({ brandId, m });
      }
    }
    return out;
  }
  function mainVehicleHash() {
    const v = enabledVehicles()[0];
    return v ? "#/veiculo/" + v.brandId + "/" + v.m.id : "#/marcas";
  }

  function navbar(active) {
    return (
      '<header class="nav"><div class="container nav-inner">' +
      '<a class="logo" href="#/"><span class="logo-mark">TS</span>Tune<span>Spec</span></a>' +
      '<nav class="nav-links">' +
      '<a href="#/" class="' + (active === "home" ? "active" : "") + '">Início</a>' +
      '<a href="#/marcas" class="' + (active === "marcas" ? "active" : "") + '">Modelos</a>' +
      '</nav>' +
      '<button class="nav-cta" onclick="location.hash=\'' + mainVehicleHash() + '\'">Ver meu carro</button>' +
      "</div></header>"
    );
  }

  function footer() {
    return (
      "<footer><div class='container'>" +
      "<div class='footer-inner'>" +
      "<div><a class='logo' href='#/'><span class='logo-mark'>TS</span>Tune<span>Spec</span></a>" +
      "<p>A plataforma definitiva para quem quer entender, modificar e evoluir o próprio carro — com informação confiável, peças compatíveis e profissionais recomendados.</p></div>" +
      "<div class='footer-links'>" +
      "<div><h5>Plataforma</h5><a href='#/marcas'>Modelos</a><a href='#/marcas'>Upgrades</a></div>" +
      "<div><h5>Comunidade</h5><a href='#/marcas'>Posts</a><a href='#/marcas'>Profissionais</a></div>" +
      "<div><h5>Empresa</h5><a href='#/'>Sobre</a><a href='#/'>Contato</a><a href='#/'>Termos</a></div>" +
      "</div></div>" +
      "<div class='footer-bottom'><span>© 2026 TuneSpec. Todos os direitos reservados.</span><span>Feito para entusiastas.</span></div>" +
      "</div></footer>"
    );
  }

  /* =========================================================
     HOME
     ========================================================= */
  function modelCard(brandId, m) {
    return (
      '<a class="card model-card" href="#/veiculo/' + brandId + "/" + m.id + '">' +
      '<div class="model-art">' + carSVG(m.hue, { glow: false }) +
      '<img class="model-photo" src="' + TS.imgFor(brandId, m) + '" alt="' + esc(m.name) + '" loading="lazy" onerror="this.remove()"/>' +
      "</div>" +
      '<div class="model-body"><h3>' + m.name + "</h3>" +
      '<div class="year">' + m.year + "</div>" +
      '<div class="model-specs">' +
      "<div><b>" + m.power + "</b><span>Potência</span></div>" +
      "<div><b>" + m.accel + "</b><span>0–100</span></div>" +
      "<div><b>" + m.engine.split(" ")[0] + "</b><span>Motor</span></div>" +
      "</div></div></a>"
    );
  }

  function renderHome() {
    const models = enabledVehicles()
      .map(({ brandId, m }) => modelCard(brandId, m))
      .join("");

    app.innerHTML =
      navbar("home") +
      "<main>" +
      '<section class="hero"><div class="hero-bg"><div class="hero-grid"></div></div>' +
      '<div class="container hero-inner">' +
      '<div class="hero-eyebrow"><span class="dot"></span>Catálogo inteligente · Preparação · Comunidade</div>' +
      "<h1>Tudo o que seu carro <em>pode se tornar.</em></h1>" +
      "<p>Encontre modificações, projetos, peças compatíveis e profissionais recomendados para o seu veículo.</p>" +
      '<a class="btn btn-red" href="' + mainVehicleHash() + '">Ver meu carro ' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
      '<div class="hero-car">' +
      '<img class="hero-cutaway" src="' + heroImg() + '" alt="Cutaway técnico de um carro preparado com upgrades anotados" onerror="this.parentElement.classList.add(\'no-photo\');this.remove()"/>' +
      carSVG(355) + "</div>" +
      '<div class="hero-stats">' +
      '<div class="hero-stat"><b>' + enabledVehicles().length + '</b><span>modelo mapeado</span></div>' +
      '<div class="hero-stat"><b>5</b><span>níveis de preparação</span></div>' +
      '<div class="hero-stat"><b>6</b><span>oficinas parceiras</span></div>' +
      "</div></div></section>" +

      '<section class="section"><div class="container">' +
      '<div class="section-head"><div><div class="kicker">Comece aqui</div>' +
      "<h2>Modelo disponível</h2><p>Estamos começando pelo Lancer GT — specs completas, upgrades compatíveis e a comunidade do modelo. Mais carros em breve.</p></div></div>" +
      '<div class="model-grid model-grid-solo">' + models + "</div>" +
      "</div></section>" +

      '<section class="section" style="padding-top:0"><div class="container">' +
      '<div class="section-head"><div><div class="kicker">Como funciona</div>' +
      "<h2>Do carro original ao projeto ideal</h2></div></div>" +
      '<div class="steps">' +
      '<div class="card step"><div class="step-num">01</div><h3>Escolha seu carro</h3><p>Selecione marca e modelo. A plataforma carrega as especificações completas do seu veículo.</p></div>' +
      '<div class="card step"><div class="step-num">02</div><h3>Monte seu projeto</h3><p>Explore Stages de preparação e upgrades estéticos com peças compatíveis, preços reais e nível de dificuldade.</p></div>' +
      '<div class="card step"><div class="step-num">03</div><h3>Execute com confiança</h3><p>Encontre profissionais avaliados pela comunidade e aprenda com quem já fez o mesmo projeto.</p></div>' +
      "</div></div></section>" +
      "</main>" +
      footer();
  }

  /* =========================================================
     TODAS AS MARCAS
     ========================================================= */
  function renderBrands() {
    const models = enabledVehicles()
      .map(({ brandId, m }) => modelCard(brandId, m))
      .join("");

    app.innerHTML =
      navbar("marcas") +
      "<main>" +
      '<div class="page-head"><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Início</a><span class="sep">/</span><span>Modelos</span></div>' +
      "<h1>Selecione o modelo</h1>" +
      '<p class="sub">Estamos começando com um modelo — mais carros em breve.</p>' +
      "</div></div>" +
      '<section class="section" style="padding-top:44px"><div class="container">' +
      '<div class="model-grid model-grid-solo">' + models + "</div>" +
      "</div></section></main>" +
      footer();
  }

  /* =========================================================
     PÁGINA DA MARCA
     ========================================================= */
  function renderBrand(brandId) {
    const brand = TS.getBrand(brandId);
    const models = (TS.models[brandId] || []).filter((m) => isEnabled(brandId, m.id));
    if (!brand || !models.length) return renderNotFound();

    const cards = models.map((m) => modelCard(brandId, m)).join("");

    app.innerHTML =
      navbar("marcas") +
      "<main>" +
      '<div class="page-head"><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Início</a><span class="sep">/</span><a href="#/marcas">Modelos</a><span class="sep">/</span><span>' + brand.name + "</span></div>" +
      "<h1>" + brand.name + "</h1>" +
      '<p class="sub">' + models.length + " modelo(s) mapeado(s) · Selecione o seu para ver specs, upgrades e comunidade.</p>" +
      "</div></div>" +
      '<section class="section" style="padding-top:44px"><div class="container">' +
      '<div class="model-grid model-grid-solo">' + cards + "</div>" +
      "</div></section></main>" +
      footer();
  }

  /* =========================================================
     PÁGINA DO VEÍCULO
     ========================================================= */
  function renderVehicle(brandId, modelId) {
    const brand = TS.getBrand(brandId);
    const vehicle = TS.getVehicle(brandId, modelId);
    if (!brand || !vehicle || !isEnabled(brandId, modelId)) return renderNotFound();
    state.brandId = brandId;

    app.innerHTML =
      navbar("marcas") +
      "<main>" +
      '<section class="vehicle-hero"><div class="vehicle-hero-bg"></div><div class="container">' +
      '<div class="breadcrumb"><a href="#/">Início</a><span class="sep">/</span><a href="#/marcas">Modelos</a><span class="sep">/</span><span>' + vehicle.name + "</span></div>" +
      '<div class="vehicle-title"><div>' +
      "<h1>" + vehicle.name + "</h1>" +
      '<div class="meta">' + brand.name + " · " + vehicle.year + "</div>" +
      "</div>" +
      '<div class="fipe-chip"><span>Preço médio FIPE</span><b>' + vehicle.fipe + "</b></div>" +
      "</div>" +
      '<div class="vehicle-art">' + carSVG(vehicle.hue) +
      '<img class="vehicle-photo" src="' + TS.imgFor(brandId, vehicle) + '" alt="' + esc(vehicle.name) + '" onerror="this.remove()"/>' +
      "</div>" +
      '<div class="spec-strip">' +
      "<div><b>" + vehicle.engine + "</b><span>Motor</span></div>" +
      "<div><b>" + vehicle.power + "</b><span>Potência</span></div>" +
      "<div><b>" + vehicle.torque + "</b><span>Torque</span></div>" +
      "<div><b>" + vehicle.accel + "</b><span>0–100 km/h</span></div>" +
      "<div><b>" + vehicle.gearbox.split(" ").slice(0, 2).join(" ") + "</b><span>Câmbio</span></div>" +
      "<div><b>" + vehicle.year + "</b><span>Ano</span></div>" +
      "</div></div></section>" +

      '<div class="tabs"><div class="container tabs-inner">' +
      tabBtn("informacoes", "Informações") +
      tabBtn("pecas", "Peças") +
      "</div></div>" +

      '<div class="container"><div id="tab-panel" class="tab-panel"></div></div>' +
      "</main>" +
      footer();

    function tabBtn(id, label, count) {
      return (
        '<button class="tab' + (state.tab === id ? " active" : "") + '" data-tab="' + id + '">' +
        label + (count ? '<span class="count">' + count + "</span>" : "") + "</button>"
      );
    }

    document.querySelectorAll(".tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.tab = btn.dataset.tab;
        document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b === btn));
        renderTab(vehicle);
      });
    });

    renderTab(vehicle);
  }

  function renderTab(vehicle) {
    const panel = document.getElementById("tab-panel");
    if (state.tab === "pecas") { panel.innerHTML = partsTab(vehicle); bindParts(); }
    else panel.innerHTML = infoTab(vehicle);
    panel.classList.remove("tab-panel");
    void panel.offsetWidth;
    panel.classList.add("tab-panel");
  }

  /* ---------- Aba Peças ---------- */
  function partsTab(v) {
    const parts = TS.getParts(state.brandId, v);
    return (
      '<div class="section-head"><div><div class="kicker">Catálogo</div>' +
      "<h2>Peças para o " + v.name + "</h2>" +
      "<p>Peças compatíveis com o seu carro, com preço médio de referência.</p></div></div>" +
      (parts.length
        ? '<div class="part-grid">' + parts.map(partCard).join("") + "</div>"
        : '<div class="card" style="padding:32px;text-align:center"><p>Nenhuma peça cadastrada ainda — em breve.</p></div>')
    );
  }

  function bindParts() {
    document.querySelectorAll(".see-product").forEach((b) =>
      b.addEventListener("click", () => toast("Em breve: redirecionamento para Mercado Livre / Shopee"))
    );
  }

  /* ---------- Aba Informações ---------- */
  function infoTab(v) {
    const items = [
      ["engine", "Motor", v.engine],
      ["power", "Potência", v.power, true],
      ["torque", "Torque", v.torque],
      ["weight", "Peso", v.weight],
      ["fuel", "Consumo", v.consumption],
      ["accel", "0–100 km/h", v.accel, true],
      ["speed", "Velocidade máxima", v.top],
      ["gearbox", "Câmbio", v.gearbox],
      ["traction", "Tração", v.traction],
      ["price", "Preço FIPE", v.fipe],
    ];
    return (
      '<div class="section-head"><div><div class="kicker">Ficha técnica</div>' +
      "<h2>Especificações do " + v.name + "</h2>" +
      "<p>Os números que realmente importam, direto ao ponto.</p></div></div>" +
      '<div class="info-grid">' +
      items
        .map(
          (it) =>
            '<div class="card info-card' + (it[3] ? " highlight" : "") + '">' +
            '<div class="ic">' + I[it[0]] + "</div>" +
            "<span>" + it[1] + "</span><b>" + it[2] + "</b></div>"
        )
        .join("") +
      "</div>"
    );
  }

  /* ---------- Aba Upgrades ---------- */
  function upgradesTab(v) {
    return (
      '<div class="section-head"><div><div class="kicker">Preparação</div>' +
      "<h2>Upgrades para o " + v.name + "</h2>" +
      "<p>Projetos organizados por objetivo, com peças compatíveis e profissionais recomendados.</p></div></div>" +
      '<div class="seg" id="upgrade-seg">' +
      '<button data-cat="performance" class="' + (state.upgradeCat === "performance" ? "active" : "") + '">Performance</button>' +
      '<button data-cat="estetica" class="' + (state.upgradeCat === "estetica" ? "active" : "") + '">Estética</button>' +
      "</div>" +
      '<div id="upgrade-content">' +
      (state.upgradeCat === "performance" ? performanceHTML(v) : aestheticHTML(v)) +
      "</div>"
    );
  }

  function performanceHTML(v) {
    const stages = TS.getPerformanceStages(v);
    return (
      '<div class="stage-list">' +
      stages
        .map((s, i) => {
          const badge = s.id.indexOf("stage") === 0 ? "S" + (i + 1) : s.id === "projeto-turbo" ? "TB" : "NA";
          return (
            '<div class="card stage-card" data-stage="' + s.id + '">' +
            '<div class="stage-head">' +
            '<div class="stage-head-left">' +
            '<div class="stage-badge' + (s.levelIdx === 3 ? " lv3" : "") + '">' + badge + "</div>" +
            "<div><h3>" + s.title + '</h3><div class="desc">' + s.description + "</div></div></div>" +
            '<div class="stage-head-right">' +
            '<div class="stage-meta"><b>' + s.price + "</b><span>" + s.level + " · " + s.time + "</span></div>" +
            '<div class="chev"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></div>' +
            "</div></div>" +
            '<div class="stage-body">' +
            '<div class="stage-facts">' +
            '<div class="fact"><span>Objetivo</span><b>' + s.objective + "</b></div>" +
            '<div class="fact"><span>Faixa de preço</span><b>' + s.price + "</b></div>" +
            '<div class="fact"><span>Dificuldade</span><b>' + s.level + "</b></div>" +
            '<div class="fact"><span>Tempo médio</span><b>' + s.time + "</b></div>" +
            "</div>" +
            '<div class="subhead">Peças recomendadas</div>' +
            '<div class="part-grid">' + s.parts.map(partCard).join("") + "</div>" +
            '<div class="subhead">Profissionais recomendados</div>' +
            '<div class="pro-grid">' + s.pros.map((id) => proCard(TS.getPro(id))).join("") + "</div>" +
            "</div></div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function partCard(p) {
    return (
      '<div class="card part-card">' +
      '<div class="part-thumb">' + I[p.icon] + "</div>" +
      "<h4>" + p.name + "</h4><p>" + p.desc + "</p>" +
      (p.compat
        ? '<div class="part-compat">' + I.check + esc(p.compat) + "</div>"
        : "") +
      '<div class="part-foot">' +
      '<div class="price"><b>' + p.price + "</b><span>preço médio</span></div>" +
      '<button class="btn btn-ghost btn-sm see-product">Ver produto ' + I.external + "</button>" +
      "</div></div>"
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
      '<div class="part-grid">' + active.products.map(partCard).join("") + "</div>"
    );
  }

  function bindUpgrades(v) {
    const seg = document.getElementById("upgrade-seg");
    if (seg)
      seg.querySelectorAll("button").forEach((b) =>
        b.addEventListener("click", () => {
          state.upgradeCat = b.dataset.cat;
          renderTab(v);
        })
      );

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

    document.querySelectorAll(".see-product").forEach((b) =>
      b.addEventListener("click", () => toast("Em breve: redirecionamento para Mercado Livre / Shopee"))
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

    if (parts.length === 0) return renderHome();
    if (parts[0] === "marcas") return renderBrands();
    if (parts[0] === "marca" && parts[1]) return renderBrand(parts[1]);
    if (parts[0] === "veiculo" && parts[1] && parts[2]) {
      state.tab = "informacoes";
      return renderVehicle(parts[1], parts[2]);
    }
    renderNotFound();
  }

  window.addEventListener("hashchange", route);
  route();
})();
