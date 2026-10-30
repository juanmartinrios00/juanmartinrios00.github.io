// ---------- contenido ----------
// Cada texto tiene versión es / en. Lo que va entre **asteriscos** se resalta en el globo.

const PROJECTS = [
  {
    slug: "dentiqly", name: "Dentiqly", url: "https://dentiqly.com", domain: "dentiqly.com",
    bg: "#0045ff", fg: "#f3f1ea",
    steps: [
      { d: "dentiqly-d0", m: "dentiqly-m0",
        es: "**Dentiqly**: un SaaS de gestión para consultorios odontológicos que cofundé.",
        en: "**Dentiqly**: a management SaaS for dental practices that I co-founded." },
      { d: "dentiqly-d2", m: "dentiqly-m2",
        es: "Diseñé el **modelo de datos**, las APIs REST en TypeScript y el panel de gestión.",
        en: "I designed the **data model**, the TypeScript REST APIs and the management dashboard." },
      { d: "dentiqly-d1", m: "dentiqly-m1",
        es: "Incluye un **odontograma interactivo** con el historial de cada pieza dental.",
        en: "It includes an **interactive odontogram** with the history of every tooth." },
      { d: "dentiqly-d5", m: "dentiqly-m0",
        es: "Los pacientes reciben **recordatorios automáticos** por WhatsApp, lo que reduce las ausencias.",
        en: "Patients get **automatic reminders** over WhatsApp, which cuts no-shows." },
    ],
  },
  {
    slug: "pulso", name: "Pulso Research", url: "https://pulsoresearch.com", domain: "pulsoresearch.com",
    bg: "#e2ff3d", fg: "#111", hl: "#5a5f00", light: true,
    steps: [
      { d: "pulso-d0", m: "pulso-m0",
        es: "**Pulso Research**: el sitio de una consultora de opinión pública y estrategia.",
        en: "**Pulso Research**: the website for a public opinion and strategy consultancy." },
      { d: "pulso-d2", m: "pulso-m2",
        es: "Organicé los servicios en una lista con **paneles desplegables** para facilitar la lectura.",
        en: "I organised the services in a list with **expandable panels** to keep it easy to read." },
      { d: "pulso-d4", m: "pulso-m1",
        es: "La sección **Medir, Interpretar, Orientar** se anima a medida que el usuario avanza.",
        en: "The **Measure, Interpret, Guide** section animates as the visitor scrolls." },
      { d: "pulso-d7", m: "pulso-m2",
        es: "Cada indicador propio tiene su sección: **RCP, Brújula Social y Pulso Consumo**.",
        en: "Each of their indices has its own section: **RCP, Brújula Social and Pulso Consumo**." },
    ],
  },
  {
    slug: "virasoro", name: "Martín Virasoro", url: "https://martinvirasoro.com", domain: "martinvirasoro.com",
    bg: "#24443a", fg: "#f3f1ea", hl: "#d9b26a",
    steps: [
      { d: "virasoro-d0", m: "virasoro-m0",
        es: "**Martín Virasoro**: el sitio de un autor y creador del Método RAM.",
        en: "**Martín Virasoro**: the website for an author and creator of the RAM Method." },
      { d: "virasoro-d1", m: "virasoro-m1",
        es: "Incluye una **tienda online** con WooCommerce para libros, audiolibros y juegos.",
        en: "It includes an **online shop** built with WooCommerce for books, audiobooks and games." },
      { d: "virasoro-d2", m: "virasoro-m2",
        es: "Cursos, podcast y retiros, **cada línea con su propia página**.",
        en: "Courses, podcast and retreats, **each line with its own page**." },
      { d: "virasoro-d5", m: "virasoro-m0",
        es: "Al pie, integración con **Instagram** y suscripción al newsletter.",
        en: "In the footer, an **Instagram** feed and newsletter sign-up." },
    ],
  },
  {
    slug: "wildcat", name: "Wildcat Club", url: "https://www.wildcat.club/", domain: "wildcat.club",
    bg: "#e9dfcf", fg: "#1c2a26", hl: "#a8673b", light: true,
    steps: [
      { d: "wildcat-d0", m: "wildcat-m0",
        es: "**Wildcat Club**: seis residencias de lujo en Austin, Texas.",
        en: "**Wildcat Club**: six luxury residences in Austin, Texas." },
      { d: "wildcat-d1", m: "wildcat-m1",
        es: "Un **masterplan en 3D** muestra la ubicación de cada residencia.",
        en: "A **3D masterplan** shows where each residence sits." },
      { d: "wildcat-d2", m: "wildcat-m2",
        es: "Las seis residencias se presentan en un **slider** con arquitecto y superficie.",
        en: "All six residences are shown in a **slider** with architect and floor area." },
    ],
  },
];

const WORK = [
  { slug: "dentiqly", name: "Dentiqly", img: "dentiqly-d0", es: "SaaS · Cofundador", en: "SaaS · Co-founder", big: true },
  { slug: "pulso", name: "Pulso Research", img: "pulso-d0", es: "Consultora", en: "Consultancy", big: true },
  { slug: "virasoro", name: "Martín Virasoro", img: "virasoro-d0", es: "Autor y tienda", en: "Author & shop" },
  { slug: "wildcat", name: "Wildcat Club", img: "wildcat-d0", es: "Real estate", en: "Real estate" },
  { slug: "bloomsbury", name: "Bloomsbury Living", img: "bloomsbury-d0", es: "Real estate", en: "Real estate" },
  { slug: "catalfumo", name: "Catalfumo", img: "catalfumo-d0", es: "Desarrolladora", en: "Developer" },
  { slug: "diagnostico", name: "Diagnóstico de marca", fake: true, es: "React + Node · La Cocina de las Marcas", en: "React + Node · La Cocina de las Marcas", big: true },
];

const STACK = [
  { es: "Frontend", en: "Frontend",
    items: [["React", "react"], ["TypeScript", "typescript"], ["JavaScript", "javascript"], ["HTML5", "html5"], ["CSS3", "css3"]] },
  { es: "Backend", en: "Backend",
    items: [["Node.js", "nodedotjs"], ["Express", "express"], ["Python", "python"], ["FastAPI", "fastapi"], ["Flask", "flask"], ["PHP", "php"]] },
  { es: "Datos", en: "Data",
    items: [["PostgreSQL", "postgresql"], ["MySQL", "mysql"], ["SQL", "db"], ["Pandas", "pandas"], ["Power BI", "chart"]] },
  { es: "Diseño y web", en: "Design & web",
    items: [["Figma", "figma"], ["Framer", "framer"], ["WordPress", "wordpress"], ["Elementor", "elementor"], ["WooCommerce", "woocommerce"], ["Git", "git"]] },
  { es: "IA y automatización", en: "AI & automation",
    items: [["APIs de IA", "spark", "AI APIs"], ["Integraciones", "plug", "Integrations"], ["Automatizaciones", "bolt", "Automations"], ["REST APIs", "api"]] },
];

const LANGS = [
  { flag: "es", es: "Español", en: "Spanish", lvl: 5, lvlEs: "Nativo", lvlEn: "Native", hello: "¡Hola! **Encantado** de conocerte." },
  { flag: "us", es: "Inglés", en: "English", lvl: 4, lvlEs: "Avanzado · C1 Cambridge", lvlEn: "Advanced · C1 Cambridge", hello: "Hi! Nice to **meet you**." },
  { flag: "br", es: "Portugués", en: "Portuguese", lvl: 3, lvlEs: "Intermedio", lvlEn: "Intermediate", hello: "Olá! **Muito prazer**." },
  { flag: "it", es: "Italiano", en: "Italian", lvl: 3, lvlEs: "Intermedio", lvlEn: "Intermediate", hello: "Ciao! **Piacere** di conoscerti." },
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
    role: "Full stack developer", status: "En búsqueda de trabajo", cta: "Contacto",
    title: "<b>Busco equipo<br>para construir</b><br><i>productos reales.</i>",
    about: "Soy un desarrollador full stack en Buenos Aires y busco *sumarme a un equipo de producto*, part time o full time. Desde 2023 hice webs, tiendas y sistemas para clientes, y cofundé un SaaS. Me gusta trabajar de la base de datos a la interfaz, aprender rápido y que lo que hago se vea tan bien como funciona.",
    "stack.title": "Mi stack", "stack.count": "",
    "langs.title": "Idiomas", "langs.count": "4 idiomas",
    "exp.title": "Experiencia", "exp.count": "",
    "work.title": "Todo el trabajo", view: "Ver proyecto",
    d: { back: "Volver", role: "Rol", type: "Tipo", stack: "Stack", site: "Ver el sitio", did: "Qué hice", next: "Siguiente proyecto", shots: "Capturas" },
    "contact.title": "¿Buscás un desarrollador?", "contact.sub": "Disponibilidad inmediata para sumarme a tu equipo, part time o full time, remoto o híbrido.",
    copied: "¡Copiado!", projects: "proyectos", available: "Disponible para trabajar",
    say: {
      hero: "Hola, soy **Juan**, desarrollador full stack. Te muestro algunos de mis proyectos.",
      stack: "Las tecnologías con las que **trabajo** en front, back y datos.",
      langs: "Hablo **4 idiomas**. Seleccioná uno para ver un saludo.",
      exp: "Trabajo mientras curso la **Tecnicatura en Programación** en la UTN.",
      work: "Una selección de **proyectos** en los que trabajé.",
      contact: "Si mi perfil te interesa, **escribime**.",
      copy: "Respondo dentro del día. **Hacé click** para copiar el mail.",
    },
  },
  en: {
    role: "Full stack developer", status: "Open to work", cta: "Get in touch",
    title: "<b>Looking for<br>a team to build</b><br><i>things that work.</i>",
    about: "I'm a full stack developer in Buenos Aires looking to *join a product team*, part time or full time. Since 2023 I've built websites, shops and systems for clients, and co-founded a SaaS. I like working from the database to the interface, learning fast, and making things look as good as they work.",
    "stack.title": "My stack", "stack.count": "",
    "langs.title": "Languages", "langs.count": "4 languages",
    "exp.title": "Experience", "exp.count": "",
    "work.title": "All work", view: "View project",
    d: { back: "Back", role: "Role", type: "Type", stack: "Stack", site: "Visit the site", did: "What I did", next: "Next project", shots: "Screens" },
    "contact.title": "Looking for a developer?", "contact.sub": "Available right away to join your team, part time or full time, remote or hybrid.",
    copied: "Copied!", projects: "projects", available: "Open to work",
    say: {
      hero: "Hi, I'm **Juan**, a full stack developer. Here are some of my projects.",
      stack: "The technologies I **work with** across front end, back end and data.",
      langs: "I speak **4 languages**. Select one to see a greeting.",
      exp: "I work while studying **Programming** at UTN.",
      work: "A selection of **projects** I have worked on.",
      contact: "If my profile fits, **get in touch**.",
      copy: "I reply within a day. **Click** to copy the address.",
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
  es: '<svg viewBox="0 0 750 500"><rect width="750" height="500" fill="#AA151B"/><rect y="125" width="750" height="250" fill="#F1BF00"/></svg>',
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
    <section class="proj${i % 2 ? " proj--flip" : ""}${p.light ? " proj--light" : ""}" style="--bg:${p.bg};--fg:${p.fg}">
      <div class="proj__sticky">
        <div class="proj__head">
          <h2 class="proj__title">${p.name}</h2>
          <a class="pill" href="#${p.slug}">${t("view")} <span aria-hidden="true">→</span></a>
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
      <h3>${g[lang]}</h3>
      <div class="stack__items">${g.items.map(([name, key, nameEn]) => `<span class="tech" title="${lang === "en" && nameEn ? nameEn : name}" role="img" aria-label="${lang === "en" && nameEn ? nameEn : name}">${icon(key)}</span>`).join("")}</div>
    </div>`).join("");

  $("#langList").innerHTML = LANGS.map((l, i) => `
    <button class="lang" data-i="${i}">
      <span class="lang__flag">${FLAGS[l.flag]}</span>
      <span class="lang__name">${l[lang]}</span>
      <span class="lang__hello" aria-hidden="true">${l.hello.replace(/\*\*/g, "")}</span>
      <span class="lang__lvl">${lang === "es" ? l.lvlEs : l.lvlEn}<span class="meter">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= l.lvl ? "on" : ""}"></i>`).join("")}</span></span>
    </button>`).join("");

  $("#expList").innerHTML = EXP.map((e) => `
    <li>
      <span class="exp__year">${e.year}</span>
      <div><h3>${e[lang][0]}</h3><p class="exp__where">${typeof e.where === "string" ? e.where : e.where[lang]}</p></div>
      <p class="exp__what">${e[lang][1]}</p>
    </li>`).join("");

  $("#workCount").textContent = `${WORK.length} ${t("projects")}`;
  $("#workGrid").innerHTML = WORK.map((w) => `
    <a class="card${w.big ? " big" : ""}" href="#${w.slug}">
      <div class="card__img">${w.fake
        ? `<div class="card__fake"><img class="card__logo" src="${IMG_BASE}lacocina-logo.png" alt="La Cocina de las Marcas" onerror="this.replaceWith(Object.assign(document.createElement('b'), { textContent: 'La Cocina de las Marcas' }))"></div>`
        : `<img src="${img(w.img)}" alt="${w.name}" loading="lazy">`}</div>
      <div class="card__meta"><span>${w.name}</span><span>${w[lang]}</span></div>
    </a>`).join("");

  scenes = [...document.querySelectorAll("[data-scene]")];
  current = null;
  onScroll();
  route();
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
  mouthTimer = setInterval(() => Character.set({ mouth: Character.state.mouth === "open" ? "smile" : "open" }), 130);
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
  const root = document.documentElement.style;
  root.removeProperty("--hl"); root.removeProperty("--hlbg");
  if (s === "hero") { place("right"); say(S.hero); Character.wave(1400); }
  else if (s === "about") { place("left"); say(""); }
  else if (s === "step") {
    const p = PROJECTS[+el.dataset.p], step = p.steps[+el.dataset.s];
    if (p.hl) { root.setProperty("--hl", p.hl); root.setProperty("--hlbg", "transparent"); }
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
};
canvas.addEventListener("pointerup", drop);
canvas.addEventListener("pointercancel", drop);

// ---------- interacciones de las secciones ----------
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

document.querySelectorAll("[data-lang]").forEach((b) => (b.innerHTML = FLAGS[b.dataset.lang === "es" ? "es" : "us"]));
document.querySelector(".langswitch").addEventListener("click", (e) => {
  const b = e.target.closest("[data-lang]");
  if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});

// ---------- página de cada proyecto ----------
const detail = $("#detail");
const SLUGS = WORK.map((w) => w.slug);
let returnY = 0;

function route() {
  const slug = location.hash.slice(1);
  const d = DETAILS[slug];
  if (!d) {
    if (!detail.hidden) {
      detail.hidden = true; document.body.classList.remove("in-detail");
      scrollTo(0, returnY);
    }
    return;
  }
  if (detail.hidden) returnY = scrollY;
  const c = d[lang], L = t("d");
  const next = SLUGS[(SLUGS.indexOf(slug) + 1) % SLUGS.length];
  const meta = [[L.role, c.role], [L.type, c.kind], [L.stack, d.stack.join(", ")]];
  detail.style.cssText = `--bg:${d.bg};--fg:${d.fg};--hl:${d.hl}`;
  detail.innerHTML = `
    <header class="detail__head">
      <div class="detail__bar">
        <a class="pill" href="#trabajo"><span aria-hidden="true">←</span> ${L.back}</a>
        ${d.url ? `<a class="pill" href="${d.url}" target="_blank" rel="noopener">${L.site} <span aria-hidden="true">↗</span></a>` : ""}
      </div>
      <p class="detail__kind">${c.kind}${c.year ? ` · ${c.year}` : ""}</p>
      <h1 class="detail__title">${d.name}</h1>
      <p class="detail__lead">${c.lead}</p>
    </header>
    <div class="detail__body">
      <dl class="detail__meta">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
      <div class="detail__text">
        ${c.body.map((p) => `<p>${p}</p>`).join("")}
        <h2>${L.did}</h2>
        <ul>${c.did.map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>
      ${d.shots.length || d.phones.length ? `
      <h2 class="detail__h">${L.shots}</h2>
      <div class="detail__shots">
        ${d.shots.map((s) => `<figure class="mock-browser mock-browser--static"><div class="mock-browser__bar"><i></i><i></i><i></i><span class="mock-browser__url">${d.domain}</span></div><img src="${img(s)}" alt="${d.name}" loading="lazy"></figure>`).join("")}
      </div>
      ${d.phones.length ? `<div class="detail__phones">${d.phones.map((m) => `<figure class="mock-phone mock-phone--static"><div class="mock-phone__screen"><img src="${img(m)}" alt="${d.name}, versión celular" loading="lazy"></div></figure>`).join("")}</div>` : ""}` : `
      <div class="detail__logo">${$(".card__fake") ? $(".card__fake").innerHTML : `<b>${d.name}</b>`}</div>`}
      <a class="detail__next" href="#${next}"><span>${L.next}</span>${DETAILS[next].name} <span aria-hidden="true">→</span></a>
    </div>`;
  detail.hidden = false;
  document.body.classList.add("in-detail");
  detail.scrollTop = 0;
}
addEventListener("hashchange", route);
addEventListener("keydown", (e) => { if (e.key === "Escape" && !detail.hidden) location.hash = "trabajo"; });

// ---------- logos que aparecen al pasar el mouse por el hero ----------
const TRAIL = ["react", "typescript", "javascript", "nodedotjs", "python", "postgresql", "figma", "wordpress", "php", "mysql", "git", "html5", "css3", "express", "fastapi", "framer"];
const hero = $(".hero");
let lastDrop = null, trailIdx = 0;
if (matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  hero.addEventListener("pointermove", (e) => {
    if (e.target.closest(".buddy, .pill, .langswitch, .status")) return;
    // solo en la franja azul entre el nombre y el título, a la izquierda del personaje
    const r = hero.getBoundingClientRect();
    const top = $(".hero__top").getBoundingClientRect().bottom - r.top + 40;
    const bottom = $(".hero__title").getBoundingClientRect().top - r.top - 20;
    const right = Math.min(buddy.getBoundingClientRect().left, bubble.getBoundingClientRect().left) - r.left - 40;
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (y < top || y > bottom || x > right) return;
    if (lastDrop && Math.hypot(x - lastDrop.x, y - lastDrop.y) < 90) return;
    lastDrop = { x, y };
    const el = document.createElement("span");
    el.className = "trail";
    el.innerHTML = icon(TRAIL[trailIdx++ % TRAIL.length]);
    el.style.left = `${x}px`; el.style.top = `${y}px`;
    el.style.setProperty("--r", `${(Math.random() - 0.5) * 30}deg`);
    hero.appendChild(el);
    el.addEventListener("animationend", () => el.remove());
  });
  hero.addEventListener("pointerleave", () => (lastDrop = null));
}

$("#year").textContent = new Date().getFullYear();
render();
