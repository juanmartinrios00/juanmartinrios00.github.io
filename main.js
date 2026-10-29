// ---------- contenido ----------
// Cada texto tiene versión es / en. Lo que va entre **asteriscos** se resalta en el globo.

const PROJECTS = [
  {
    name: "Dentiqly", url: "https://dentiqly.com", domain: "dentiqly.com",
    bg: "#0c2347", fg: "#f3f1ea", hl: "#6f9bff",
    steps: [
      { d: "dentiqly-d0", m: "dentiqly-m0",
        es: "Primero, **Dentiqly**. Un SaaS para clínicas dentales que cofundé.",
        en: "First up, **Dentiqly**. A SaaS for dental clinics that I co-founded." },
      { d: "dentiqly-d2", m: "dentiqly-m2",
        es: "Hice el **modelo de datos**, las APIs en TypeScript y todo el panel.",
        en: "I built the **data model**, the TypeScript APIs and the whole dashboard." },
      { d: "dentiqly-d1", m: "dentiqly-m1",
        es: "Cada diente tiene su historia en un **odontograma interactivo**.",
        en: "Every tooth has its own history in an **interactive odontogram**." },
      { d: "dentiqly-d5", m: "dentiqly-m0",
        es: "Y los turnos se confirman solos por **WhatsApp**. Chau ausentes.",
        en: "And appointments confirm themselves over **WhatsApp**. Bye no-shows." },
    ],
  },
  {
    name: "Pulso Research", url: "https://pulsoresearch.com", domain: "pulsoresearch.com",
    bg: "#e2ff3d", fg: "#111", hl: "#5a5f00", light: true,
    steps: [
      { d: "pulso-d0", m: "pulso-m0",
        es: "Después, **Pulso Research**, una consultora de opinión pública.",
        en: "Next, **Pulso Research**, a public opinion consultancy." },
      { d: "pulso-d2", m: "pulso-m2",
        es: "Sus servicios van en una lista con **“Leer más”** que se despliega.",
        en: "Their services sit in a list with **“Read more”** panels that unfold." },
      { d: "pulso-d4", m: "pulso-m1",
        es: "Esta me encanta: **Medir, Interpretar, Orientar** se arma mientras scrolleás.",
        en: "My favourite bit: **Measure, Interpret, Guide** builds itself as you scroll." },
      { d: "pulso-d7", m: "pulso-m2",
        es: "Y cada indicador tiene su lugar: **RCP, Brújula Social y Pulso Consumo**.",
        en: "Each index gets its own spot: **RCP, Brújula Social and Pulso Consumo**." },
    ],
  },
  {
    name: "Martín Virasoro", url: "https://martinvirasoro.com", domain: "martinvirasoro.com",
    bg: "#24443a", fg: "#f3f1ea", hl: "#d9b26a",
    steps: [
      { d: "virasoro-d0", m: "virasoro-m0",
        es: "Este es de **Martín Virasoro**, autor y creador del Método RAM.",
        en: "This one is for **Martín Virasoro**, author and creator of the RAM Method." },
      { d: "virasoro-d1", m: "virasoro-m1",
        es: "Tiene **tienda propia**: libros, audiolibros y hasta su juego 365.",
        en: "It has **its own shop**: books, audiobooks, even his 365 game." },
      { d: "virasoro-d2", m: "virasoro-m2",
        es: "Cursos, podcast y retiros, **cada cosa con su página**.",
        en: "Courses, podcast and retreats, **each with its own page**." },
      { d: "virasoro-d5", m: "virasoro-m0",
        es: "Y abajo, su **Instagram** y el newsletter para no perderse nada.",
        en: "At the bottom, his **Instagram** and the newsletter so you miss nothing." },
    ],
  },
  {
    name: "Wildcat Club", url: "https://www.wildcat.club/", domain: "wildcat.club",
    bg: "#e9dfcf", fg: "#1c2a26", hl: "#a8673b", light: true,
    steps: [
      { d: "wildcat-d0", m: "wildcat-m0",
        es: "Último: **Wildcat Club**, seis residencias de lujo en Austin, Texas. Yeehaw.",
        en: "Last one: **Wildcat Club**, six luxury homes in Austin, Texas. Yeehaw." },
      { d: "wildcat-d1", m: "wildcat-m1",
        es: "Un **masterplan** en 3D para ver dónde cae cada casa en la montaña.",
        en: "A 3D **masterplan** shows where each house sits on the mountain." },
      { d: "wildcat-d2", m: "wildcat-m2",
        es: "Y las seis casas en un **slider**, con su arquitecto y los metros.",
        en: "And all six homes in a **slider**, with architect and square feet." },
    ],
  },
];

const WORK = [
  { name: "Dentiqly", img: "dentiqly-d0", url: "https://dentiqly.com", es: "SaaS · Cofundador", en: "SaaS · Co-founder", big: true },
  { name: "Pulso Research", img: "pulso-d0", url: "https://pulsoresearch.com", es: "Consultora", en: "Consultancy", big: true },
  { name: "Martín Virasoro", img: "virasoro-d0", url: "https://martinvirasoro.com", es: "Autor y tienda", en: "Author & shop" },
  { name: "Wildcat Club", img: "wildcat-d0", url: "https://www.wildcat.club/", es: "Real estate", en: "Real estate" },
  { name: "Bloomsbury Living", img: "bloomsbury-d0", url: "https://bloomsburyliving.com", es: "Real estate", en: "Real estate" },
  { name: "Catalfumo", img: "catalfumo-d0", url: "https://catalfumo.com", es: "Desarrolladora", en: "Developer" },
  { name: "Diagnóstico de marca", fake: true, es: "React + Node · La Cocina de las Marcas", en: "React + Node · La Cocina de las Marcas", big: true },
];

const STACK = [
  { es: "Frontend", en: "Frontend", noteEs: "Donde más me divierto.", noteEn: "Where I have the most fun.",
    items: [["React", "react"], ["TypeScript", "typescript"], ["JavaScript", "javascript"], ["HTML5", "html5"], ["CSS3", "css3"]] },
  { es: "Backend", en: "Backend", noteEs: "APIs que no se caen.", noteEn: "APIs that stay up.",
    items: [["Node.js", "nodedotjs"], ["Express", "express"], ["Python", "python"], ["FastAPI", "fastapi"], ["Flask", "flask"], ["PHP", "php"]] },
  { es: "Datos", en: "Data", noteEs: "Todo empieza por el modelo.", noteEn: "It all starts with the model.",
    items: [["PostgreSQL", "postgresql"], ["MySQL", "mysql"], ["SQL", "db"], ["Pandas", "pandas"], ["Power BI", "chart"]] },
  { es: "Diseño y web", en: "Design & web", noteEs: "Ojo de diseño, manos de dev.", noteEn: "Designer's eye, dev's hands.",
    items: [["Figma", "figma"], ["Framer", "framer"], ["WordPress", "wordpress"], ["Elementor", "elementor"], ["WooCommerce", "woocommerce"], ["Git", "git"]] },
  { es: "IA y automatización", en: "AI & automation", noteEs: "Que las máquinas hagan lo aburrido.", noteEn: "Let machines do the boring bits.",
    items: [["APIs de IA", "spark", "AI APIs"], ["Integraciones", "plug", "Integrations"], ["Automatizaciones", "bolt", "Automations"], ["REST APIs", "api"]] },
];

const LANGS = [
  { flag: "ar", es: "Español", en: "Spanish", lvl: 5, lvlEs: "Nativo", lvlEn: "Native", hello: "¡Hola! ¿Tomamos unos mates?" },
  { flag: "us", es: "Inglés", en: "English", lvl: 4, lvlEs: "Avanzado · C1 Cambridge", lvlEn: "Advanced · C1 Cambridge", hello: "Hi! Let's build **something cool**." },
  { flag: "br", es: "Portugués", en: "Portuguese", lvl: 3, lvlEs: "Intermedio", lvlEn: "Intermediate", hello: "Oi! **Tudo bem**?" },
  { flag: "it", es: "Italiano", en: "Italian", lvl: 3, lvlEs: "Intermedio", lvlEn: "Intermediate", hello: "Ciao! **Come va**?" },
];

const EXP = [
  { year: "2026 →", where: "Dentiqly", es: ["Cofundador y full stack developer", "SaaS para consultorios odontológicos. Diseñé el esquema en PostgreSQL, las APIs REST en Node, Express y TypeScript (auth, validación, roles) y las interfaces en React."],
    en: ["Co-founder & full stack developer", "SaaS for dental practices. I designed the PostgreSQL schema, the REST APIs in Node, Express and TypeScript (auth, validation, roles) and the React interfaces."] },
  { year: "2025 – 2026", where: "La Cocina de las Marcas", es: ["Full stack developer", "En un equipo de dos devs, hice una app de diagnóstico de marca: cuestionario multi-paso, scoring en Node y un gráfico diamante con métricas de Branding y Naming. Pasó de herramienta interna a producto para clientes."],
    en: ["Full stack developer", "In a two-dev team, I built a brand diagnostic app: multi-step questionnaire, scoring in Node and a diamond chart with Branding and Naming metrics. It grew from an internal tool into a product for clients."] },
  { year: "2024 →", where: { es: "UTN", en: "UTN" }, es: ["Tecnicatura Universitaria en Programación", "Universidad Tecnológica Nacional, en curso."],
    en: ["Associate degree in Programming", "Universidad Tecnológica Nacional, in progress."] },
  { year: "2023 →", where: "Freelance", es: ["Web developer", "E-commerce, sistemas de gestión y sitios a medida con WordPress, WooCommerce, Framer, PHP y MySQL. Integraciones con APIs y automatizaciones para clientes."],
    en: ["Web developer", "E-commerce, management systems and custom sites with WordPress, WooCommerce, Framer, PHP and MySQL. API integrations and automations for clients."] },
];

const T = {
  es: {
    role: "Full stack developer · Buscando laburo", cta: "Contratame",
    title: "<b>Busco equipo<br>para construir</b><br><i>cosas que andan.</i>",
    about: "Soy full stack developer en Buenos Aires y busco *sumarme a un equipo de producto*, part time o full time. Desde 2023 hice webs, tiendas y sistemas para clientes, y cofundé un SaaS. Me gusta trabajar de la base de datos a la interfaz, aprender rápido y que lo que hago se vea tan bien como funciona.",
    "stack.title": "Mi stack", "stack.count": "Lo que uso todos los días",
    "langs.title": "Idiomas", "langs.count": "4 idiomas",
    "exp.title": "Experiencia", "exp.count": "Lo más nuevo arriba",
    "work.title": "Todo el trabajo", view: "Ver proyecto",
    "contact.title": "¿Buscás un dev?", "contact.sub": "Disponibilidad inmediata para sumarme a tu equipo, part time o full time, remoto o híbrido.",
    copied: "¡Copiado!", projects: "proyectos", available: "Disponible para trabajar",
    say: {
      hero: "Hola, soy **Juan** y estoy buscando laburo. Bajá que te muestro qué sé hacer.",
      stack: "Sí, también hago **backend**. Pasá el mouse por los logos.",
      langs: "Hablo **4 idiomas**. Tocá uno y te saludo.",
      exp: "Laburando y estudiando en la **UTN** al mismo tiempo.",
      work: "Todo esto lo hice yo. Imaginate en **tu equipo**.",
      contact: "Si llegaste hasta acá, **contratame** jaja.",
      copy: "Mandame un mail y te contesto en el día. **Click** y se copia.",
      grab: ["¡Epa! **Bajame** despacio.", "Wiii, ¡estoy **volando**!", "¡Ey! Que me **despeinás**."],
    },
  },
  en: {
    role: "Full stack developer · Open to work", cta: "Hire me",
    title: "<b>Looking for<br>a team to build</b><br><i>things that work.</i>",
    about: "I'm a full stack developer in Buenos Aires looking to *join a product team*, part time or full time. Since 2023 I've built websites, shops and systems for clients, and co-founded a SaaS. I like working from the database to the interface, learning fast, and making things look as good as they work.",
    "stack.title": "My stack", "stack.count": "What I use every day",
    "langs.title": "Languages", "langs.count": "4 languages",
    "exp.title": "Experience", "exp.count": "Newest first",
    "work.title": "All work", view: "View project",
    "contact.title": "Need a dev?", "contact.sub": "Available right away to join your team, part time or full time, remote or hybrid.",
    copied: "Copied!", projects: "projects", available: "Open to work",
    say: {
      hero: "Hi, I'm **Juan** and I'm looking for work. Scroll down to see what I can do.",
      stack: "Yes, I do **backend** too. Hover the logos.",
      langs: "I speak **4 languages**. Tap one and I'll say hi.",
      exp: "Working and studying at **UTN** at the same time.",
      work: "I built all of this. Picture me on **your team**.",
      contact: "Made it this far? Go on, **hire me**.",
      copy: "Email me and I'll reply the same day. **Click** to copy.",
      grab: ["Hey! Put me **down** gently.", "Wheee, I'm **flying**!", "Hey! You're messing up my **hair**."],
    },
  },
};

// íconos que no son marcas
const GENERIC = {
  db: '<path fill="#336791" d="M12 2C7 2 3 3.6 3 5.5v13C3 20.4 7 22 12 22s9-1.6 9-3.5v-13C21 3.6 17 2 12 2Zm0 2c4.4 0 7 1.3 7 1.5S16.4 7 12 7 5 5.7 5 5.5 7.6 4 12 4Zm7 14.5c0 .2-2.6 1.5-7 1.5s-7-1.3-7-1.5v-2.7c1.6.8 4.2 1.2 7 1.2s5.4-.4 7-1.2v2.7Zm0-5c0 .2-2.6 1.5-7 1.5s-7-1.3-7-1.5v-2.7C6.6 11.6 9.2 12 12 12s5.4-.4 7-1.2v2.7Z"/>',
  chart: '<g fill="#F2C811"><rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></g>',
  spark: '<path fill="#2f56f0" d="M12 2l2.2 6.3L20.5 10l-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-1.7L12 2Zm7 13l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1 1-2.6Z"/>',
  plug: '<path fill="#111" d="M9 2v5H7v4a5 5 0 0 0 4 4.9V22h2v-6.1A5 5 0 0 0 17 11V7h-2V2h-2v5h-2V2H9Z"/>',
  bolt: '<path fill="#FF6B00" d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  api: '<path fill="#111" d="M8 5 1 12l7 7 1.4-1.4L3.8 12l5.6-5.6L8 5Zm8 0-1.4 1.4 5.6 5.6-5.6 5.6L16 19l7-7-7-7Z"/>',
};
function icon(key) {
  if (GENERIC[key]) return `<svg viewBox="0 0 24 24" aria-hidden="true">${GENERIC[key]}</svg>`;
  const i = ICONS[key];
  const fill = ["000000", "150458"].includes(i.hex) ? "111111" : i.hex;
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#${fill}" d="${i.d}"/></svg>`;
}

const FLAGS = {
  ar: '<svg viewBox="0 0 9 6"><rect width="9" height="6" fill="#74ACDF"/><rect y="2" width="9" height="2" fill="#fff"/><circle cx="4.5" cy="3" r=".7" fill="#F6B40E"/></svg>',
  us: '<svg viewBox="0 0 19 10"><rect width="19" height="10" fill="#B22234"/><g fill="#fff"><rect y="0.77" width="19" height="0.77"/><rect y="2.31" width="19" height="0.77"/><rect y="3.85" width="19" height="0.77"/><rect y="5.38" width="19" height="0.77"/><rect y="6.92" width="19" height="0.77"/><rect y="8.46" width="19" height="0.77"/></g><rect width="7.6" height="5.38" fill="#3C3B6E"/></svg>',
  br: '<svg viewBox="0 0 10 7"><rect width="10" height="7" fill="#009C3B"/><path d="M5 .8 9.2 3.5 5 6.2.8 3.5Z" fill="#FFDF00"/><circle cx="5" cy="3.5" r="1.5" fill="#002776"/></svg>',
  it: '<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>',
};

const IMG_BASE = "img/";
const img = (n) => (window.IMG_DATA && window.IMG_DATA[n]) || `${IMG_BASE}${n}.jpg`;

// ---------- idioma ----------
let lang = "es";
try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("es") ? "es" : "en"); } catch (e) {}
const t = (k) => T[lang][k];
const $ = (s) => document.querySelector(s);

// ---------- render ----------
function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));

  // sobre mí: una palabra por span para pintarlas con el scroll
  $("#aboutText").innerHTML = t("about")
    .replace(/[^\s*]+/g, (w) => `<span>${w}</span>`)
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  $("#projects").innerHTML = PROJECTS.map((p, i) => `
    <section class="proj${i % 2 ? " proj--flip" : ""}${p.light ? " proj--light" : ""}" style="--bg:${p.bg};--fg:${p.fg};--hl:${p.hl}">
      <div class="proj__sticky">
        <div class="proj__head">
          <h2 class="proj__title">${p.name}</h2>
          <a class="pill" href="${p.url}" target="_blank" rel="noopener">${t("view")} <span aria-hidden="true">→</span></a>
        </div>
        <div class="proj__stage">
          <div class="mock-browser">
            <div class="mock-browser__bar"><i></i><i></i><i></i><span class="mock-browser__url">${p.domain}</span></div>
            <div class="mock-browser__screen">${uniq(p.steps.map((s) => s.d)).map((d, k) => `<img class="shot${k ? "" : " on"}" data-shot="${d}" src="${img(d)}" alt="${p.name}, captura ${k + 1}" ${k ? 'loading="lazy"' : ""}>`).join("")}</div>
          </div>
          <div class="mock-phone"><div class="mock-phone__screen">${uniq(p.steps.map((s) => s.m)).map((m, k) => `<img class="shot${k ? "" : " on"}" data-shot="${m}" src="${img(m)}" alt="" ${k ? 'loading="lazy"' : ""}>`).join("")}</div></div>
        </div>
      </div>
      <div class="proj__steps">${p.steps.map((s, k) => `<div data-scene="step" data-p="${i}" data-s="${k}"></div>`).join("")}</div>
    </section>`).join("");

  $("#stackList").innerHTML = STACK.map((g, gi) => `
    <div class="stack__row">
      <div><h3>${g[lang]}</h3><p>${lang === "es" ? g.noteEs : g.noteEn}</p></div>
      <div class="stack__items">${g.items.map(([name, key, nameEn]) => `<button class="tech" data-g="${gi}">${icon(key)}<span>${lang === "en" && nameEn ? nameEn : name}</span></button>`).join("")}</div>
    </div>`).join("");

  $("#langList").innerHTML = LANGS.map((l, i) => `
    <button class="lang" data-i="${i}">
      ${FLAGS[l.flag]}
      <p class="lang__name">${l[lang]}</p>
      <p class="lang__lvl">${lang === "es" ? l.lvlEs : l.lvlEn}</p>
      <div class="meter">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= l.lvl ? "on" : ""}"></i>`).join("")}</div>
    </button>`).join("");

  $("#expList").innerHTML = EXP.map((e) => `
    <li>
      <span class="exp__year">${e.year}</span>
      <div><h3>${e[lang][0]}</h3><p class="exp__where">${typeof e.where === "string" ? e.where : e.where[lang]}</p></div>
      <p class="exp__what">${e[lang][1]}</p>
    </li>`).join("");

  $("#workCount").textContent = `${WORK.length} ${t("projects")}`;
  $("#workGrid").innerHTML = WORK.map((w) => `
    <a class="card${w.big ? " big" : ""}" ${w.url ? `href="${w.url}" target="_blank" rel="noopener"` : ""}>
      <div class="card__img">${w.fake
        ? `<div class="card__fake"><img class="card__logo" src="${IMG_BASE}lacocina-logo.png" alt="La Cocina de las Marcas" onerror="this.replaceWith(Object.assign(document.createElement('b'), { textContent: 'La Cocina de las Marcas' }))"></div>`
        : `<img src="${img(w.img)}" alt="${w.name}" loading="lazy">`}</div>
      <div class="card__meta"><span>${w.name}</span><span>${w[lang]}</span></div>
    </a>`).join("");

  scenes = [...document.querySelectorAll("[data-scene]")];
  current = null;
  onScroll();
}
const uniq = (a) => [...new Set(a)];

// ---------- personaje y globo ----------
const buddy = $("#buddy"), bubble = $("#bubble"), bubbleText = $("#bubbleText");
Character.mount($("#buddyCanvas"), (n) => (window.IMG_DATA && window.IMG_DATA[n]) || `${IMG_BASE}${n}.webp`);
let typing = null, mouthTimer = null;

function say(text) {
  clearInterval(typing); clearInterval(mouthTimer);
  if (!text) { bubble.classList.remove("show"); Character.set({ mouth: "smile" }); return; }
  const parts = text.split(/(\*\*[^*]+\*\*)/).filter(Boolean);
  bubbleText.innerHTML = parts.map((p) => {
    const hl = p.startsWith("**");
    const chars = [...p.replace(/\*\*/g, "")].map((c) => `<span class="g">${c}</span>`).join("");
    return hl ? `<mark>${chars}</mark>` : chars;
  }).join("");
  bubble.classList.add("show");
  const spans = bubbleText.querySelectorAll(".g");
  let i = 0;
  mouthTimer = setInterval(() => Character.set({ mouth: Character.state.mouth === "open" ? "smile" : "open" }), 110);
  typing = setInterval(() => {
    for (let k = 0; k < 2 && i < spans.length; k++, i++) spans[i].classList.remove("g");
    if (i >= spans.length) { clearInterval(typing); clearInterval(mouthTimer); Character.set({ mouth: "smile" }); }
  }, 32);
}

function place(pos) {
  buddy.classList.remove("pos-left", "pos-right", "pos-avatar");
  buddy.classList.add(`pos-${pos}`);
}

// ---------- escenas ----------
let scenes = [], current = null;
function sceneKey(el) { return el.dataset.scene === "step" ? `step-${el.dataset.p}-${el.dataset.s}` : el.dataset.scene; }

function enter(el) {
  const s = el.dataset.scene, S = t("say");
  document.documentElement.style.setProperty("--hl", "var(--blue)");
  if (s === "hero") { place("right"); say(S.hero); Character.wave(1400); }
  else if (s === "about") { place("left"); say(""); }
  else if (s === "step") {
    const p = PROJECTS[+el.dataset.p], step = p.steps[+el.dataset.s];
    document.documentElement.style.setProperty("--hl", p.hl);
    place(+el.dataset.p % 2 ? "right" : "left");
    say(step[lang]);
    const proj = el.closest(".proj");
    proj.querySelectorAll(".shot").forEach((im) => im.classList.toggle("on", im.dataset.shot === step.d || im.dataset.shot === step.m));
  } else if (s === "contact") { place("right"); say(S.contact); Character.wave(1400); }
  else { place("avatar"); say(S[s]); }
}

function onScroll() {
  const mid = innerHeight * 0.55;
  let hit = null;
  for (const el of scenes) {
    const r = el.getBoundingClientRect();
    if (r.top <= mid && r.bottom > mid) hit = el;
  }
  if (hit && sceneKey(hit) !== current) { current = sceneKey(hit); enter(hit); }

  // texto de "sobre mí"
  const about = $("#about"), words = about.querySelectorAll(".about__text span");
  const r = about.getBoundingClientRect();
  const prog = Math.min(1, Math.max(0, (-r.top + innerHeight * 0.3) / (r.height - innerHeight)));
  const n = Math.round(prog * words.length * 1.1);
  words.forEach((w, i) => w.classList.toggle("on", i < n));
}
let ticking = false;
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; onScroll(); }); } }, { passive: true });
addEventListener("resize", onScroll);

// ---------- agarrar al personaje ----------
const canvas = $("#buddyCanvas");
let hold = null;
canvas.addEventListener("pointerdown", (e) => {
  canvas.setPointerCapture(e.pointerId);
  hold = { x: e.clientX, y: e.clientY };
  buddy.classList.add("held");
  canvas.style.transition = "none";
  Character.set({ waving: true });
  const g = t("say").grab; say(g[Math.floor(Math.random() * g.length)]);
});
canvas.addEventListener("pointermove", (e) => {
  if (!hold) return;
  const dx = e.clientX - hold.x, dy = e.clientY - hold.y;
  canvas.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.max(-25, Math.min(25, dx / 8))}deg)`;
});
const drop = () => {
  if (!hold) return;
  hold = null; buddy.classList.remove("held");
  canvas.style.transition = "transform .6s cubic-bezier(.3, 1.6, .5, 1)";
  canvas.style.transform = "";
  Character.set({ waving: false });
};
canvas.addEventListener("pointerup", drop);
canvas.addEventListener("pointercancel", drop);

// ---------- interacciones de las secciones ----------
document.addEventListener("pointerover", (e) => {
  const tech = e.target.closest(".tech");
  if (tech && tech !== lastTech) {
    lastTech = tech;
    const g = STACK[tech.dataset.g];
    say(`**${tech.textContent.trim()}**. ${lang === "es" ? g.noteEs : g.noteEn}`);
  }
});
let lastTech = null;
document.addEventListener("click", (e) => {
  const l = e.target.closest(".lang");
  if (l) { say(LANGS[l.dataset.i].hello); Character.wave(1200); }
});

const mail = $("#mail");
mail.addEventListener("mouseenter", () => say(t("say").copy));
mail.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(mail.dataset.mail); toast(t("copied")); say(`**${t("copied")}**`); }
  catch (err) { const r = document.createRange(); r.selectNodeContents(mail); getSelection().removeAllRanges(); getSelection().addRange(r); }
});

function toast(msg) {
  const el = $("#toast"); el.textContent = msg; el.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 1600);
}

document.querySelectorAll("[data-lang]").forEach((b) => (b.innerHTML = FLAGS[b.dataset.lang === "es" ? "ar" : "us"]));
document.querySelector(".langswitch").addEventListener("click", (e) => {
  const b = e.target.closest("[data-lang]");
  if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});

$("#year").textContent = new Date().getFullYear();
render();
