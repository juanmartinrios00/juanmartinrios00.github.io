// Páginas de cada proyecto. Se abren con #slug (por ejemplo #pulso).
// shots: capturas de escritorio; phones: capturas de celular (nombres de img/ sin extensión).
const DETAILS = {
  dentiqly: {
    name: "Dentiqly", url: "https://dentiqly.com", domain: "dentiqly.com",
    bg: "#0045ff", fg: "#f3f1ea", hl: "#9fc0ff",
    shots: ["dentiqly-d0", "dentiqly-d2", "dentiqly-d1", "dentiqly-d5"], phones: ["dentiqly-m0", "dentiqly-m1", "dentiqly-m2"],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "REST APIs"],
    es: {
      kind: "SaaS · Salud", role: "Cofundador y full stack developer", year: "2026 →",
      lead: "Un SaaS para consultorios odontológicos: agenda online, historias clínicas, odontograma digital y recordatorios por WhatsApp, todo en un solo lugar.",
      body: [
        "Lo cofundé y participo en todo el ciclo: relevamiento con odontólogos, modelo de datos, backend, frontend y despliegue.",
        "El objetivo es que un consultorio deje el papel y los recordatorios manuales sin tener que aprender un sistema complejo.",
      ],
      did: [
        "Diseñé el esquema relacional en PostgreSQL para pacientes, turnos, tratamientos e historias clínicas, con índices y restricciones de integridad.",
        "Desarrollé las APIs REST en Node, Express y TypeScript, con autenticación, validación, manejo de errores y permisos por rol.",
        "Armé las interfaces en React con componentes reutilizables, estados de carga y error, y validación de formularios.",
        "Prioricé funcionalidades junto a profesionales según el impacto real en su día a día.",
      ],
    },
    en: {
      kind: "SaaS · Healthcare", role: "Co-founder & full stack developer", year: "2026 →",
      lead: "A SaaS for dental practices: online booking, clinical records, a digital odontogram and WhatsApp reminders, all in one place.",
      body: [
        "I co-founded it and work across the whole cycle: discovery with dentists, data model, backend, frontend and deployment.",
        "The goal is for a practice to drop paper and manual WhatsApp messages without learning a complicated system.",
      ],
      did: [
        "Designed the PostgreSQL relational schema for patients, appointments, treatments and records, with indexes and integrity constraints.",
        "Built the REST APIs in Node, Express and TypeScript, with authentication, validation, error handling and role-based access.",
        "Built the React interfaces with reusable components, loading and error states, and form validation.",
        "Prioritised features with practitioners based on real impact on their day.",
      ],
    },
  },
  pulso: {
    name: "Pulso Research", url: "https://pulsoresearch.com", domain: "pulsoresearch.com",
    bg: "#e2ff3d", fg: "#111111", hl: "#5a5f00",
    shots: ["pulso-d0", "pulso-d2", "pulso-d4", "pulso-d7"], phones: ["pulso-m0", "pulso-m1", "pulso-m2"],
    stack: ["WordPress", "Elementor", "Diseño responsive"],
    es: {
      kind: "Sitio web · Consultora", role: "Diseño y desarrollo web", year: "",
      lead: "El sitio de una consultora de opinión pública y estrategia: estudios cuantitativos y cualitativos, posicionamiento y campañas.",
      body: [
        "La consultora tiene varios productos propios (RCP, Brújula Social, Pulso Consumo), así que el objetivo fue ordenar el contenido para que se entienda rápido qué hacen y dónde encontrar cada cosa.",
      ],
      did: [
        "Una home con identidad propia: el amarillo de la marca, tipografía grande y una animación de Medir, Interpretar y Orientar que acompaña el scroll.",
        "Servicios organizados en paneles desplegables, para presentar mucha información sin saturar la pantalla.",
        "Una sección para cada indicador propio y otra con su presencia en medios.",
        "Contacto directo por mail, WhatsApp y X.",
      ],
    },
    en: {
      kind: "Website · Consultancy", role: "Web design & development", year: "",
      lead: "The website for a public opinion and strategy consultancy: quantitative and qualitative research, positioning and campaigns.",
      body: [
        "The consultancy has several products of its own (RCP, Brújula Social, Pulso Consumo), so the goal was to organise the content so visitors quickly understand what they do and where to find it.",
      ],
      did: [
        "A home page with a clear identity: the brand's yellow, large type and a Measure, Interpret, Guide animation that follows the scroll.",
        "Services organised in expandable panels, to present a lot of information without crowding the screen.",
        "A section for each of their own indices and another for their media presence.",
        "Direct contact by email, WhatsApp and X.",
      ],
    },
  },
  virasoro: {
    name: "Martín Virasoro", url: "https://martinvirasoro.com", domain: "martinvirasoro.com",
    bg: "#24443a", fg: "#f3f1ea", hl: "#d9b26a",
    shots: ["virasoro-d0", "virasoro-d1", "virasoro-d2", "virasoro-d5"], phones: ["virasoro-m0", "virasoro-m1", "virasoro-m2"],
    stack: ["WordPress", "Elementor", "WooCommerce"],
    es: {
      kind: "Sitio web · Tienda", role: "Diseño y desarrollo web", year: "",
      lead: "El sitio de Martín Virasoro, autor y creador del Método RAM: libros, audiolibros, cursos, podcast, charlas y retiros.",
      body: [
        "El objetivo era reunir toda su actividad en un solo sitio y, a la vez, vender sus productos sin intermediarios.",
      ],
      did: [
        "Tienda con WooCommerce para libros, audiolibros y su juego 365, con carrito y checkout.",
        "Una página para cada línea: cursos, podcast, orador y retiros.",
        "Home con su imagen bien presente y los próximos retiros destacados.",
        "Feed de Instagram y suscripción al newsletter al pie.",
      ],
    },
    en: {
      kind: "Website · Shop", role: "Web design & development", year: "",
      lead: "The website for Martín Virasoro, author and creator of the RAM Method: books, audiobooks, courses, podcast, talks and retreats.",
      body: [
        "He needed one place to show everything he does and also sell his products directly.",
      ],
      did: [
        "A WooCommerce shop for books, audiobooks and his 365 game, with cart and checkout.",
        "A page for each line of work: courses, podcast, speaking and retreats.",
        "A home page built around his image, with upcoming retreats up front.",
        "Instagram feed and newsletter sign-up in the footer.",
      ],
    },
  },
  wildcat: {
    name: "Wildcat Club", url: "https://www.wildcat.club/", domain: "wildcat.club",
    bg: "#e9dfcf", fg: "#1c2a26", hl: "#a8673b",
    shots: ["wildcat-d0", "wildcat-d1", "wildcat-d2"], phones: ["wildcat-m0", "wildcat-m1", "wildcat-m2"],
    stack: ["Diseño web", "Responsive"],
    es: {
      kind: "Sitio web · Real estate", role: "Diseño y desarrollo web", year: "",
      lead: "Seis residencias de lujo en Wildcat Mountain, West Lake Hills, Austin. Seis casas, una montaña.",
      body: [
        "Un sitio pensado para un producto que se elige por la imagen: fotografía protagonista, textos breves y la consulta siempre a un click.",
      ],
      did: [
        "Hero a pantalla completa con la arquitectura y el paisaje como protagonistas.",
        "Un masterplan en 3D para ubicar cada casa en la montaña.",
        "Slider con las seis residencias, su arquitecto y la superficie.",
        "Secciones de ubicación, proceso de obra y equipo, con “Inquire” siempre a mano.",
      ],
    },
    en: {
      kind: "Website · Real estate", role: "Web design & development", year: "",
      lead: "Six luxury residences on Wildcat Mountain, West Lake Hills, Austin. Six homes, one mountain.",
      body: [
        "A site built for a product chosen on looks: photography up front, short copy and enquiries always one click away.",
      ],
      did: [
        "Full-screen hero with the architecture and landscape front and centre.",
        "A 3D masterplan to place each home on the mountain.",
        "A slider with all six residences, their architect and square footage.",
        "Location, build process and team sections, with “Inquire” always at hand.",
      ],
    },
  },
  bloomsbury: {
    name: "Bloomsbury Living", url: "https://bloomsburyliving.com", domain: "bloomsburyliving.com",
    bg: "#14303d", fg: "#f3f1ea", hl: "#c9a46a",
    shots: ["bloomsbury-d0"], phones: [],
    stack: ["WordPress", "Elementor"],
    es: {
      kind: "Sitio web · Real estate", role: "Diseño y desarrollo web", year: "",
      lead: "Comunidades residenciales de lujo, con su desarrollo insignia en Chain Bridge Estates.",
      body: ["Un sitio elegante y sobrio para presentar residencias, amenities, seguridad, bienestar y ubicación."],
      did: [
        "Secciones para residencias, amenities, seguridad, bienestar y ubicación.",
        "Galería y videos del proyecto, con renders conceptuales.",
        "Brochure del proyecto embebido en el sitio.",
      ],
    },
    en: {
      kind: "Website · Real estate", role: "Web design & development", year: "",
      lead: "Luxury residential communities, with their flagship at Chain Bridge Estates.",
      body: ["An elegant, understated site to present residences, amenities, security, wellness and location."],
      did: [
        "Sections for residences, amenities, security, wellness and location.",
        "Project gallery and videos, with conceptual renderings.",
        "The project brochure embedded in the site.",
      ],
    },
  },
  catalfumo: {
    name: "Catalfumo", url: "https://catalfumo.com", domain: "catalfumo.com",
    bg: "#0a4d8c", fg: "#f3f1ea", hl: "#9fd0ff",
    shots: ["catalfumo-d0"], phones: [],
    stack: ["WordPress"],
    es: {
      kind: "Sitio web · Desarrolladora", role: "Desarrollo web", year: "",
      lead: "Catalfumo Companies, desarrolladora de Palm Beach con más de 45 años en desarrollo, construcción y gestión.",
      body: ["Un sitio institucional para mostrar su trayectoria y su portfolio de obras."],
      did: [
        "Portfolio de proyectos ordenado por categoría: gobierno, corporativo, educación e industrial.",
        "Secciones de quiénes son, servicios y novedades.",
        "Suscripción al newsletter.",
      ],
    },
    en: {
      kind: "Website · Developer", role: "Web development", year: "",
      lead: "Catalfumo Companies, a Palm Beach firm with over 45 years in development, construction and management.",
      body: ["A corporate site to show their track record and their portfolio of buildings."],
      did: [
        "Project portfolio organised by category: government, corporate, education and industrial.",
        "About, services and news sections.",
        "Newsletter sign-up.",
      ],
    },
  },
  diagnostico: {
    name: "Diagnóstico de marca", url: null, domain: null, logo: true,
    bg: "#2f56f0", fg: "#f3f1ea", hl: "#ffd84d",
    shots: [], phones: [],
    stack: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    es: {
      kind: "App web · La Cocina de las Marcas", role: "Full stack developer", year: "2025 – 2026",
      lead: "Una app que diagnostica una marca: respondés un cuestionario y te devuelve un gráfico diamante con métricas de Branding y Naming.",
      body: [
        "La hicimos en un equipo de dos developers. Empezó como herramienta interna de la agencia y terminó siendo un producto que les ofrecen a sus clientes.",
        "Es una aplicación privada, por lo que no tiene link público. Puedo mostrarla en una entrevista.",
      ],
      did: [
        "Frontend en React: cuestionario multi-paso, validaciones y la visualización de resultados.",
        "Endpoints en Node y Express para calcular los puntajes y toda la lógica del scoring.",
        "Base de datos en PostgreSQL para cuestionarios, respuestas y resultados históricos por cliente.",
        "La adaptamos para que la usen muchos clientes a la vez.",
      ],
    },
    en: {
      kind: "Web app · La Cocina de las Marcas", role: "Full stack developer", year: "2025 – 2026",
      lead: "An app that diagnoses a brand: you answer a questionnaire and get a diamond chart with Branding and Naming metrics.",
      body: [
        "We built it as a team of two developers. It started as an internal tool for the agency and became a product they offer to their clients.",
        "It is a private application, so there is no public link. I can demo it in an interview.",
      ],
      did: [
        "React frontend: multi-step questionnaire, validation and the results chart.",
        "Node and Express endpoints for scoring and all the business logic behind it.",
        "PostgreSQL database for questionnaires, answers and historical results per client.",
        "We adapted it so many clients can use it at once.",
      ],
    },
  },
};
