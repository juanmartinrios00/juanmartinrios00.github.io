// Personaje: la ilustración de Juan. Queda quieta salvo la boca, que se mueve mientras se escribe el globo.
// El parpadeo y el saludo quedan disponibles poniendo ANIMATED en true.
// Se pinta en un canvas y se pasa por un dither 8x8 en blanco y negro (estilo "pixel").
// Con style: "color" se ve la ilustración original.
const Character = (() => {
  const ANIMATED = false;
  const FRAMES = ANIMATED ? { base: "juan-base", blink: "juan-blink", wave: "juan-wave", talk: "juan-talk" } : { base: "juan-base", talk: "juan-talk" };
  const SIZE = { color: 640, pixel: 440, mono: 640 };
  const INK = [17, 17, 17], PAPER = [243, 241, 234];

  const BAYER = [
    0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26,
    12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22,
    3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25,
    15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21,
  ].map((v) => (v + 0.5) / 64);

  const imgs = {}, cache = {};
  const state = { eyes: "open", mouth: "smile", waving: false, style: "pixel" };
  let out, o, ready = false;

  // procesa un fotograma en el estilo pedido y lo guarda
  function processed(frame, style) {
    const key = frame + style;
    if (cache[key]) return cache[key];
    const s = SIZE[style], c = document.createElement("canvas");
    c.width = c.height = s;
    const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(imgs[frame], 0, 0, s, s);
    if (style === "pixel") {
      const id = g.getImageData(0, 0, s, s), d = id.data;
      const solid = (x, y) => x >= 0 && y >= 0 && x < s && y < s && d[(y * s + x) * 4 + 3] >= 110;
      const edge = new Uint8Array(s * s);
      for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
        if (solid(x, y) && (!solid(x - 1, y) || !solid(x + 1, y) || !solid(x, y - 1) || !solid(x, y + 1))) edge[y * s + x] = 1;
      }
      for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
        const i = (y * s + x) * 4;
        if (d[i + 3] < 110) { d[i + 3] = 0; continue; }
        let l = (d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11) / 255;
        // levanta los negros para que la remera se lea sobre fondos oscuros
        l = Math.min(1, 0.14 + l * 0.98);
        const col = edge[y * s + x] ? PAPER : l > BAYER[(y & 7) * 8 + (x & 7)] ? PAPER : INK;
        d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255;
      }
      g.putImageData(id, 0, 0);
    } else if (style === "mono") {
      // blanco y negro liso, sin dither: para el avatar chico, donde el pixel no deja ver la cara
      const id = g.getImageData(0, 0, s, s), d = id.data;
      for (let i = 0; i < d.length; i += 4) {
        const l = Math.min(255, Math.max(0, ((d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11) - 128) * 1.15 + 140));
        d[i] = d[i + 1] = d[i + 2] = l;
      }
      g.putImageData(id, 0, 0);
    }
    return (cache[key] = c);
  }

  function frameName() {
    if (!ANIMATED) return state.mouth === "open" ? "talk" : "base";
    if (state.waving) return "wave";
    if (state.eyes !== "open") return "blink";
    if (state.mouth === "open") return "talk";
    return "base";
  }

  function render() {
    if (!ready || !out) return;
    const s = SIZE[state.style];
    if (out.width !== s) { out.width = out.height = s; }
    o.clearRect(0, 0, s, s);
    o.drawImage(processed(frameName(), state.style), 0, 0);
    out.style.imageRendering = state.style === "pixel" ? "pixelated" : "auto";
  }

  function load(src) {
    return Object.entries(FRAMES).map(([k, n]) => new Promise((res) => {
      const im = new Image();
      im.onload = () => { imgs[k] = im; res(); };
      im.onerror = res;
      im.src = src(n);
    }));
  }

  function mount(canvas, src) {
    out = canvas; o = out.getContext("2d");
    out.width = out.height = SIZE.color;
    Promise.all(load(src)).then(() => {
      ready = Object.keys(imgs).length === Object.keys(FRAMES).length;
      render();
      wave(1600);
    });
    if (!ANIMATED || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (function blink() {
      setTimeout(() => {
        if (state.eyes === "open" && state.mouth !== "open" && !state.waving) {
          state.eyes = "closed"; render();
          setTimeout(() => { state.eyes = "open"; render(); }, 120);
        }
        blink();
      }, 4000 + Math.random() * 2000);
    })();
  }

  let waveTimer;
  function wave(ms = 1200) {
    if (!ANIMATED) return;
    state.waving = true; render();
    clearTimeout(waveTimer);
    waveTimer = setTimeout(() => { state.waving = false; render(); }, ms);
  }

  function set(patch) { Object.assign(state, patch); render(); }

  return { mount, set, wave, state };
})();
