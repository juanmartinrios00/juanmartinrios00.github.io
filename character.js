// Personaje: cuatro fotogramas de la ilustración de Juan (base, parpadeo, saludo, hablando).
// Se pinta en un canvas para poder cambiarle el estilo con "Vestime":
// color original, pixel (dither blanco y negro) o duotono.
const Character = (() => {
  const FRAMES = { base: "juan-base", blink: "juan-blink", wave: "juan-wave", talk: "juan-talk" };
  const STYLES = ["color", "pixel", "duo"];
  const SIZE = { color: 640, pixel: 240, duo: 320 };
  const INK = [17, 17, 17], PAPER = [243, 241, 234], NAVY = [20, 32, 92];

  const BAYER = [
    0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26,
    12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22,
    3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25,
    15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21,
  ].map((v) => (v + 0.5) / 64);

  const imgs = {}, cache = {};
  const state = { eyes: "open", mouth: "smile", waving: false, style: "color" };
  let out, o, ready = false;

  // procesa un fotograma en el estilo pedido y lo guarda
  function processed(frame, style) {
    const key = frame + style;
    if (cache[key]) return cache[key];
    const s = SIZE[style], c = document.createElement("canvas");
    c.width = c.height = s;
    const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(imgs[frame], 0, 0, s, s);
    if (style !== "color") {
      const id = g.getImageData(0, 0, s, s), d = id.data;
      for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
        const i = (y * s + x) * 4;
        if (d[i + 3] < 110) { d[i + 3] = 0; continue; }
        let l = (d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11) / 255;
        let col;
        if (style === "pixel") {
          l = Math.min(1, Math.max(0, (l - 0.12) * 1.35)); // más contraste para que la remera no quede plana
          col = l > BAYER[(y & 7) * 8 + (x & 7)] ? PAPER : INK;
        } else {
          col = NAVY.map((v, k) => v + (PAPER[k] - v) * Math.min(1, l * 1.25));
        }
        d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255;
      }
      g.putImageData(id, 0, 0);
    }
    return (cache[key] = c);
  }

  function frameName() {
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
    out.style.imageRendering = state.style === "color" ? "auto" : "pixelated";
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
      ready = Object.keys(imgs).length === 4;
      render();
      wave(1600);
    });
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    state.waving = true; render();
    clearTimeout(waveTimer);
    waveTimer = setTimeout(() => { state.waving = false; render(); }, ms);
  }

  function set(patch) { Object.assign(state, patch); render(); }
  function nextStyle() {
    state.style = STYLES[(STYLES.indexOf(state.style) + 1) % STYLES.length];
    render();
    return state.style;
  }

  return { mount, set, wave, nextStyle, state };
})();
