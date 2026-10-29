// Assets del portfolio anterior (thumbnails, banderas).
const ASSETS = "https://juanmartinrios.netlify.app/assets/";

// ---------- contenido ----------
// Para editar: cada texto tiene versión es / en.
const FEATURED = [
  {
    name: "Dentiqly",
    url: "https://dentiqly.com",
    thumb: "thumb-dentiqly.png",
    tags: ["TypeScript", "REST APIs", "React", "PostgreSQL"],
    es: [
      "Primero, Dentiqly, un SaaS para gestionar clínicas dentales que fundé con un socio.",
      "Hice el modelo de datos, las APIs REST en TypeScript y las interfaces. Turnos, pacientes, historias clínicas: todo lo que un consultorio usa todos los días tiene que andar rápido y no perder nada.",
    ],
    en: [
      "First up, Dentiqly, a SaaS for running dental clinics that I co-founded.",
      "I built the data model, the REST APIs in TypeScript and the interfaces. Appointments, patients, records: everything a clinic uses every day has to be fast and never lose a thing.",
    ],
    noteEs: "este es mío 🦷", noteEn: "this one's mine 🦷",
  },
  {
    name: "Diagnóstico de marca",
    url: null,
    thumb: null,
    client: "La Cocina de las Marcas",
    tags: ["React", "Node.js", "Express", "Data viz"],
    es: [
      "Después, una app de diagnóstico de marca para La Cocina de las Marcas.",
      "Respondés un cuestionario, la app calcula un puntaje y te muestra en gráficos dónde está parada tu marca. Hice el front en React, el back en Node y la lógica de scoring que une las dos puntas.",
    ],
    en: [
      "Next, a brand diagnostic app for La Cocina de las Marcas.",
      "You answer a questionnaire, the app scores it and shows you in charts where your brand stands. I built the React front, the Node back and the scoring logic that ties them together.",
    ],
    noteEs: "respondé y te puntúa", noteEn: "answer it, get a score",
  },
  {
    name: "Martín Virasoro",
    url: "https://martinvirasoro.com",
    thumb: "thumb-virasoro.png",
    tags: ["Diseño", "Desarrollo web", "Responsive"],
    es: [
      "Y por último, el sitio de Martín Virasoro.",
      "Lo diseñé y lo desarrollé de punta a punta, cuidando que se vea igual de bien en el celu que en una pantalla grande.",
    ],
    en: [
      "And finally, Martín Virasoro's website.",
      "I designed and built it end to end, making sure it looks just as good on a phone as on a big screen.",
    ],
    noteEs: "este quedó lindo", noteEn: "this one came out nice",
  },
];

const WORK = [
  { name: "Dentiqly", url: "https://dentiqly.com", thumb: "thumb-dentiqly.png", kind: { es: "SaaS · Cofundador", en: "SaaS · Co-founder" }, year: "2026" },
  { name: "Diagnóstico de marca", url: null, thumb: null, kind: { es: "App web · La Cocina de las Marcas", en: "Web app · La Cocina de las Marcas" }, year: "2025" },
  { name: "Pulso Research", url: "https://pulsoresearch.com", thumb: "thumb-pulso.png", kind: { es: "Sitio web", en: "Website" }, year: "" },
  { name: "Bloomsbury Living", url: "https://bloomsburyliving.com", thumb: "thumb-bloomsbury.png", kind: { es: "Sitio web", en: "Website" }, year: "" },
  { name: "Wildcat Club", url: "https://www.wildcat.club/", thumb: "thumb-wildcat.png", kind: { es: "Sitio web", en: "Website" }, year: "" },
  { name: "Catalfumo", url: "https://catalfumo.com", thumb: "thumb-catalfumo.png", kind: { es: "Sitio web", en: "Website" }, year: "" },
  { name: "Martín Virasoro", url: "https://martinvirasoro.com", thumb: "thumb-virasoro.png", kind: { es: "Sitio web", en: "Website" }, year: "" },
];

const STACK = [
  { title: "Frontend", es: "// donde más me divierto", en: "// where I have the most fun", items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { title: "Backend", es: "// APIs que no se caen", en: "// APIs that stay up", items: ["Node.js", "Express", "Python", "FastAPI", "Flask", "PHP"] },
  { title: "Datos", titleEn: "Data", es: "// todo empieza por el modelo", en: "// it all starts with the model", items: ["PostgreSQL", "MySQL", "SQL", "Pandas", "Power BI"] },
  { title: "Diseño y web", titleEn: "Design & web", es: "// ojo de diseñador, manos de dev", en: "// designer's eye, dev's hands", items: ["Figma", "WordPress", "WooCommerce", "Git", "REST APIs"] },
  { title: "IA y automatización", titleEn: "AI & automation", es: "// que las máquinas hagan lo aburrido", en: "// let machines do the boring bits", items: ["APIs de IA", "Integraciones", "Automatizaciones"], itemsEn: ["AI APIs", "Integrations", "Automations"] },
];

const LANGS = [
  { flag: "flag-es.svg", es: "Español", en: "Spanish", lvl: 5, lvlEs: "Nativo", lvlEn: "Native", hello: "¡Hola! ¿Tomamos un mate?" },
  { flag: "flag-us.svg", es: "Inglés", en: "English", lvl: 4, lvlEs: "Avanzado", lvlEn: "Advanced", hello: "Hi! Let's build something." },
  { flag: "flag-pt.svg", es: "Portugués", en: "Portuguese", lvl: 3, lvlEs: "Intermedio", lvlEn: "Intermediate", hello: "Oi! Tudo bem?" },
  { flag: "flag-it.svg", es: "Italiano", en: "Italian", lvl: 3, lvlEs: "Intermedio", lvlEn: "Intermediate", hello: "Ciao! Come va?" },
];

const EXP = [
  { year: "2026", es: { role: "Cofundador y developer", where: "Dentiqly", what: "Modelo de datos, APIs REST en TypeScript e interfaces de un SaaS para clínicas dentales." },
    en: { role: "Co-founder & developer", where: "Dentiqly", what: "Data model, TypeScript REST APIs and interfaces for a SaaS for dental clinics." } },
  { year: "2025", es: { role: "Full stack developer", where: "La Cocina de las Marcas", what: "App de diagnóstico de marca en React y Node (cuestionario, scoring y visualización), más mantenimiento web y desarrollos a medida." },
    en: { role: "Full stack developer", where: "La Cocina de las Marcas", what: "Brand diagnostic app in React and Node (questionnaire, scoring and charts), plus web maintenance and custom builds." } },
  { year: "2024", es: { role: "Formación en programación", where: "Estudio", what: "TypeScript, React, C++ y SQL, sin dejar de entregar proyectos." },
    en: { role: "Programming training", where: "Study", what: "TypeScript, React, C++ and SQL, while still shipping client projects." } },
  { year: "2022 →", es: { role: "Desarrollador web freelance", where: "Freelance", what: "E-commerce, sistemas de gestión y desarrollos a medida con JavaScript, PHP y MySQL." },
    en: { role: "Freelance web developer", where: "Freelance", what: "E-commerce, management systems and custom builds with JavaScript, PHP and MySQL." } },
];

const I18N = {
  es: {
    "nav.work": "Trabajo", "nav.stack": "Stack", "nav.exp": "Experiencia", "nav.contact": "Escribime",
    "hero.psst": "Psst. Agarrame y arrastrame.", "hero.hi": "Hola, soy Juan 👋 Scrolleá un poco.",
    "hero.title": "Hago apps web de<br>la base de datos<br><em>para arriba.</em>",
    "hero.intro": "Soy full stack developer en Buenos Aires. Arranco por el modelo de datos y las APIs y termino en la interfaz, que es donde más me divierto. Tengo ojo de diseño, así que lo que hago funciona y además se ve bien.",
    "hero.cta": "Hablemos", "hero.cv": "Bajá mi CV", "hero.open": "← buscando laburo, part o full time",
    "feat.eyebrow": "// Algunas cosas que hice", "feat.view": "Ver proyecto", "feat.private": "Es privado, pero te lo muestro en una call",
    "all.title": "Todo el trabajo", "all.note": "pasá el mouse, hay fotitos ↓",
    "stack.title": "Con qué laburo", "stack.note": "sí, también hago backend ✌️",
    "langs.title": "Idiomas que hablo", "langs.note": "hacé click en una tarjeta",
    "exp.title": "Por dónde anduve", "exp.note": "lo más nuevo arriba",
    "contact.eyebrow": "// ¿Tenés un proyecto o un puesto?", "contact.title": "Estoy buscando<br>mi próximo equipo.",
    "contact.text": "Si estás armando producto y necesitás a alguien que se banque el front, el back y los datos, escribime. Contesto rápido, lo prometo.",
    "contact.copy": "Escribime cuando quieras. Hacé click y se copia.", "contact.copied": "¡Copiado!",
    "footer.dress": "Vestime", "footer.trick": "Hacé un truco",
    "buddy.grab": ["¡Epa! Bajame despacio.", "Wiii", "Ojo con el mate 🧉"], "buddy.back": "Ah, volviste. ¿Querés ver todo de nuevo?",
    "buddy.trick": "¡Tadá!", "buddy.dress": "¿Me queda bien?",
  },
  en: {
    "nav.work": "Work", "nav.stack": "Stack", "nav.exp": "Experience", "nav.contact": "Get in touch",
    "hero.psst": "Psst. You can grab me.", "hero.hi": "Hi, I'm Juan 👋 Scroll a little.",
    "hero.title": "I build web apps<br>from the database<br><em>all the way up.</em>",
    "hero.intro": "I'm a full stack developer in Buenos Aires. I start with the data model and the APIs and end up in the interface, which is where I have the most fun. I've got an eye for design, so what I build works and looks good too.",
    "hero.cta": "Let's talk", "hero.cv": "Get my CV", "hero.open": "← open to work, part or full time",
    "feat.eyebrow": "// A few things I made", "feat.view": "View project", "feat.private": "It's private, happy to demo it on a call",
    "all.title": "All work", "all.note": "hover, there are pictures ↓",
    "stack.title": "What I work with", "stack.note": "yes, I do backend too ✌️",
    "langs.title": "Languages I speak", "langs.note": "click a card",
    "exp.title": "Where I've been", "exp.note": "newest first",
    "contact.eyebrow": "// Got a project or a role?", "contact.title": "I'm looking for<br>my next team.",
    "contact.text": "If you're building a product and need someone who can handle the front, the back and the data, write me. I answer fast, promise.",
    "contact.copy": "Write me anytime. Click and it's copied.", "contact.copied": "Copied!",
    "footer.dress": "Dress me up", "footer.trick": "Do a trick",
    "buddy.grab": ["Hey! Put me down gently.", "Wheee", "Careful with the mate 🧉"], "buddy.back": "Oh hi, you're back. Want the tour again?",
    "buddy.trick": "Ta-da!", "buddy.dress": "Does this suit me?",
  },
};

// ---------- idioma ----------
let lang = "es";
try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("es") ? "es" : "en"); } catch (e) {}
const t = (k) => I18N[lang][k];

function render() {
  document.documentElement.lang = lang;
  document.getElementById("lang").textContent = lang === "es" ? "EN" : "ES";
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));

  document.getElementById("featured").innerHTML = FEATURED.map((p, i) => `
    <article class="project reveal">
      <div>
        <p class="project__num">0${i + 1}.</p>
        <h3 class="project__title">${p.name}</h3>
        <div class="project__body">${p[lang].map((s) => `<p>${s}</p>`).join("")}</div>
        <div class="project__tags">${p.tags.map((x) => `<span class="tag">${x}</span>`).join("")}</div>
        ${p.url ? `<a class="btn" href="${p.url}" target="_blank" rel="noopener">${t("feat.view")} ↗</a>`
                : `<span class="note note--inline">${t("feat.private")}</span>`}
      </div>
      <a class="project__media" ${p.url ? `href="${p.url}" target="_blank" rel="noopener"` : ""}>
        ${p.thumb ? `<img src="${ASSETS + p.thumb}" alt="${p.name}" loading="lazy" onerror="this.remove()">` : placeholder(p)}
        <span class="note">${lang === "es" ? p.noteEs : p.noteEn}</span>
      </a>
    </article>`).join("");

  document.getElementById("worklist").innerHTML = WORK.map((w) => `
    <li><a ${w.url ? `href="${w.url}" target="_blank" rel="noopener"` : ""} data-thumb="${w.thumb || ""}">
      <span class="worklist__name">${w.name}</span>
      <span class="worklist__kind">${w.kind[lang]}</span>
      <span class="worklist__year">${w.year || ""}</span>
    </a></li>`).join("");

  document.getElementById("stackGrid").innerHTML = STACK.map((s) => `
    <div class="card reveal">
      <h3>${lang === "en" && s.titleEn ? s.titleEn : s.title}</h3>
      <p class="card__comment">${s[lang]}</p>
      <div class="chips">${(lang === "en" && s.itemsEn ? s.itemsEn : s.items).map((x) => `<span class="chip">${x}</span>`).join("")}</div>
    </div>`).join("");

  document.getElementById("langsGrid").innerHTML = LANGS.map((l, i) => `
    <button class="langcard reveal" data-i="${i}">
      <img class="langcard__flag" src="${ASSETS + l.flag}" alt="" onerror="this.style.visibility='hidden'">
      <p class="langcard__name">${l[lang]}</p>
      <p class="langcard__level">${lang === "es" ? l.lvlEs : l.lvlEn}</p>
      <div class="meter">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= l.lvl ? "on" : ""}"></i>`).join("")}</div>
      <p class="langcard__hello"></p>
    </button>`).join("");

  document.getElementById("timeline").innerHTML = EXP.map((e) => `
    <li class="reveal">
      <span class="timeline__year">${e.year}</span>
      <div><h3>${e[lang].role}</h3><p class="timeline__where">${e[lang].where}</p><p class="timeline__what">${e[lang].what}</p></div>
    </li>`).join("");

  observeReveals();
}

function placeholder(p) {
  return `<div style="height:100%;display:grid;place-items:center;background:var(--accent-2)">
    <div style="font-family:var(--display);font-weight:800;font-size:clamp(28px,4vw,48px);text-align:center;line-height:1">
      ${p.client || p.name}<br><span style="font-family:var(--hand);font-weight:700;color:var(--accent)">✓ 87/100</span></div></div>`;
}

document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});

// ---------- reveal ----------
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("in")), { threshold: 0.12 })
  : null;
function observeReveals() {
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
}

// ---------- toast ----------
const toast = document.getElementById("toast");
function say(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(say.t);
  say.t = setTimeout(() => toast.classList.remove("show"), 1800);
}

// ---------- personaje arrastrable ----------
const buddy = document.getElementById("buddy");
const note = document.getElementById("buddyNote");
let drag = null;
buddy.addEventListener("pointerdown", (e) => {
  buddy.setPointerCapture(e.pointerId);
  const r = buddy.getBoundingClientRect();
  drag = { dx: e.clientX - (r.left + r.width / 2), dy: e.clientY - (r.top + r.height / 2) };
  buddy.classList.add("dragging");
  const lines = t("buddy.grab");
  note.textContent = lines[Math.floor(Math.random() * lines.length)];
});
buddy.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const stage = buddy.parentElement.getBoundingClientRect();
  buddy.style.left = `${e.clientX - stage.left - drag.dx}px`;
  buddy.style.top = `${e.clientY - stage.top - drag.dy}px`;
});
buddy.addEventListener("pointerup", () => {
  drag = null;
  buddy.classList.remove("dragging");
});

// vuelve a su lugar si scrolleás de nuevo al hero
let leftHero = false;
addEventListener("scroll", () => {
  if (scrollY > innerHeight) leftHero = true;
  if (leftHero && scrollY < 40) {
    leftHero = false;
    buddy.style.left = buddy.style.top = "";
    note.textContent = t("buddy.back");
  }
}, { passive: true });

// ---------- truco y ropa ----------
document.getElementById("trick").addEventListener("click", () => {
  scrollTo({ top: 0 });
  buddy.classList.remove("flip");
  void buddy.offsetWidth;
  buddy.classList.add("flip");
  note.textContent = t("buddy.trick");
});
const HATS = ["🧢", "🎩", "👒", "🤠", "👑", ""];
let hatIdx = HATS.length - 1;
document.getElementById("dress").addEventListener("click", () => {
  scrollTo({ top: 0 });
  hatIdx = (hatIdx + 1) % HATS.length;
  document.getElementById("hat").textContent = HATS[hatIdx];
  note.textContent = t("buddy.dress");
});

// ---------- copiar mail ----------
document.getElementById("mail").addEventListener("click", async (e) => {
  const m = e.currentTarget.dataset.mail;
  try { await navigator.clipboard.writeText(m); say(t("contact.copied")); }
  catch (err) { location.href = `mailto:${m}`; }
});

// ---------- tarjetas de idioma ----------
document.getElementById("langsGrid").addEventListener("click", (e) => {
  const card = e.target.closest(".langcard");
  if (!card) return;
  card.classList.add("said");
  card.querySelector(".langcard__hello").textContent = LANGS[card.dataset.i].hello;
});

// ---------- preview de imágenes en la lista ----------
const peek = document.createElement("div");
peek.className = "worklist__peek";
peek.innerHTML = "<img alt=''>";
document.body.appendChild(peek);
const worklist = document.getElementById("worklist");
worklist.addEventListener("pointermove", (e) => {
  const a = e.target.closest("a");
  if (!a || !a.dataset.thumb || e.pointerType !== "mouse") return peek.classList.remove("show");
  peek.querySelector("img").src = ASSETS + a.dataset.thumb;
  peek.style.left = `${e.clientX + 24}px`;
  peek.style.top = `${e.clientY - 100}px`;
  peek.classList.add("show");
});
worklist.addEventListener("pointerleave", () => peek.classList.remove("show"));

document.getElementById("year").textContent = new Date().getFullYear();
render();
