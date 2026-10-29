// Personaje: se dibuja con formas en grises y después se pasa por un dither 8x8,
// así queda ese look de pixel/halftone en blanco y negro.
// Para usar tu propia ilustración: poné un PNG transparente en img/personaje.png y
// cambiá USE_IMAGE a true. El dither se aplica igual.
const Character = (() => {
  const USE_IMAGE = false;
  const W = 220, H = 270;
  const INK = [17, 17, 17], PAPER = [243, 241, 234];

  const src = document.createElement("canvas");
  src.width = W; src.height = H;
  const g = src.getContext("2d", { willReadFrequently: true });

  let out, o, outData;
  const state = { eyes: "open", mouth: "smile", acc: "none", bob: 0 };

  const BAYER = [
    0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26,
    12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22,
    3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25,
    15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21,
  ].map((v) => (v + 0.5) / 64);

  const gray = (l, a = 1) => `rgba(${l * 255 | 0},${l * 255 | 0},${l * 255 | 0},${a})`;
  function radial(x, y, r0, x1, y1, r1, stops) {
    const gr = g.createRadialGradient(x, y, r0, x1, y1, r1);
    stops.forEach(([p, l]) => gr.addColorStop(p, gray(l)));
    return gr;
  }
  function ellipse(cx, cy, rx, ry, fill, rot = 0) {
    g.beginPath(); g.ellipse(cx, cy, rx, ry, rot, 0, Math.PI * 2); g.fillStyle = fill; g.fill();
  }

  let img = null;
  if (USE_IMAGE) { img = new Image(); img.src = "img/personaje.png"; img.onload = () => render(); }

  function draw() {
    g.clearRect(0, 0, W, H);
    if (img) { g.drawImage(img, 0, 0, W, H); return; }
    const b = state.bob;
    // hoodie
    g.beginPath();
    g.moveTo(18, H); g.bezierCurveTo(22, 214 + b, 60, 196 + b, 110, 196 + b);
    g.bezierCurveTo(160, 196 + b, 198, 214 + b, 202, H); g.closePath();
    g.fillStyle = radial(90, 200 + b, 10, 110, 240, 120, [[0, .62], [.6, .44], [1, .28]]); g.fill();
    // capucha alrededor del cuello
    ellipse(110, 202 + b, 48, 14, gray(.34));
    // cuello
    g.fillStyle = radial(110, 180, 2, 110, 190, 30, [[0, .82], [1, .58]]);
    g.fillRect(92, 165 + b, 36, 36);
    // auriculares en el cuello
    if (state.acc !== "headset") {
      g.lineWidth = 9; g.strokeStyle = gray(.16);
      g.beginPath(); g.ellipse(110, 196 + b, 46, 15, 0, Math.PI * .05, Math.PI * .95); g.stroke();
      ellipse(66, 196 + b, 10, 15, gray(.12)); ellipse(154, 196 + b, 10, 15, gray(.12));
      ellipse(63, 192 + b, 3, 5, gray(.45)); ellipse(151, 192 + b, 3, 5, gray(.45));
    }
    const hb = b * 0.6;
    // orejas
    ellipse(52, 116 + hb, 11, 16, radial(52, 112, 1, 52, 116, 16, [[0, .9], [1, .62]]));
    ellipse(168, 116 + hb, 11, 16, radial(168, 112, 1, 168, 116, 16, [[0, .9], [1, .62]]));
    // cabeza
    ellipse(110, 112 + hb, 58, 64, radial(92, 92 + hb, 6, 110, 115 + hb, 74, [[0, 1], [.55, .86], [1, .52]]));
    // pelo: jopo de costado
    g.beginPath();
    g.moveTo(52, 112 + hb);
    g.bezierCurveTo(42, 60 + hb, 78, 36 + hb, 118, 40 + hb);
    g.bezierCurveTo(158, 42 + hb, 176, 70 + hb, 168, 112 + hb);
    g.bezierCurveTo(164, 92 + hb, 154, 78 + hb, 140, 72 + hb);
    g.bezierCurveTo(118, 84 + hb, 86, 80 + hb, 70, 70 + hb);
    g.bezierCurveTo(60, 82 + hb, 56, 96 + hb, 52, 112 + hb);
    g.fillStyle = radial(100, 48 + hb, 4, 110, 70 + hb, 70, [[0, .42], [.45, .18], [1, .06]]); g.fill();
    // mechón
    g.beginPath(); g.moveTo(70, 70 + hb); g.bezierCurveTo(86, 86 + hb, 112, 86 + hb, 132, 70 + hb);
    g.bezierCurveTo(112, 78 + hb, 90, 78 + hb, 70, 70 + hb); g.fillStyle = gray(.18); g.fill();
    // cejas
    g.fillStyle = gray(.08);
    g.beginPath(); g.roundRect(74, 96 + hb, 22, 6, 3); g.fill();
    g.beginPath(); g.roundRect(124, 96 + hb, 22, 6, 3); g.fill();
    // ojos
    if (state.eyes === "open") {
      [[86, 122], [134, 122]].forEach(([x, y]) => {
        ellipse(x, y + hb, 9, 12.5, gray(.04));
        ellipse(x + 3, y - 5 + hb, 3.2, 3.6, gray(1));
      });
    } else {
      g.lineWidth = 4.5; g.strokeStyle = gray(.05); g.lineCap = "round";
      [[86, 124], [134, 124]].forEach(([x, y]) => {
        g.beginPath();
        if (state.eyes === "happy") g.arc(x, y + 4 + hb, 9, Math.PI * 1.15, Math.PI * 1.85);
        else { g.moveTo(x - 9, y + hb); g.quadraticCurveTo(x, y + 5 + hb, x + 9, y + hb); }
        g.stroke();
      });
    }
    // nariz
    ellipse(110, 140 + hb, 7, 5, gray(.74));
    // cachetes
    ellipse(72, 146 + hb, 11, 7, gray(.78, .7)); ellipse(148, 146 + hb, 11, 7, gray(.78, .7));
    // boca
    if (state.mouth === "open") {
      ellipse(110, 160 + hb, 15, 11, gray(.06));
      ellipse(110, 166 + hb, 9, 4, gray(.5));
    } else {
      g.lineWidth = 5; g.strokeStyle = gray(.06); g.lineCap = "round";
      g.beginPath(); g.moveTo(94, 155 + hb); g.quadraticCurveTo(110, 170 + hb, 126, 155 + hb); g.stroke();
    }
    accessory(hb);
  }

  function accessory(hb) {
    const a = state.acc;
    if (a === "glasses") {
      g.lineWidth = 4; g.strokeStyle = gray(.06);
      g.beginPath(); g.arc(86, 122 + hb, 17, 0, Math.PI * 2); g.stroke();
      g.beginPath(); g.arc(134, 122 + hb, 17, 0, Math.PI * 2); g.stroke();
      g.beginPath(); g.moveTo(103, 120 + hb); g.quadraticCurveTo(110, 115 + hb, 117, 120 + hb); g.stroke();
    }
    if (a === "headset") {
      g.lineWidth = 9; g.strokeStyle = gray(.15);
      g.beginPath(); g.arc(110, 108 + hb, 64, Math.PI * 1.02, Math.PI * 1.98); g.stroke();
      ellipse(48, 116 + hb, 12, 20, gray(.12)); ellipse(172, 116 + hb, 12, 20, gray(.12));
      g.lineWidth = 4; g.beginPath(); g.moveTo(48, 130 + hb); g.quadraticCurveTo(56, 168 + hb, 92, 166 + hb); g.stroke();
      ellipse(94, 166 + hb, 6, 5, gray(.1));
    }
    if (a === "cap") {
      g.beginPath(); g.ellipse(110, 70 + hb, 62, 40, 0, Math.PI, 0); g.fillStyle = radial(96, 42 + hb, 4, 110, 60, 70, [[0, .62], [1, .3]]); g.fill();
      g.beginPath(); g.ellipse(84, 72 + hb, 58, 12, -0.08, 0, Math.PI * 2); g.fillStyle = gray(.22); g.fill();
      ellipse(110, 32 + hb, 6, 4, gray(.2));
    }
    if (a === "cowboy") {
      g.beginPath(); g.ellipse(110, 70 + hb, 92, 18, 0, 0, Math.PI * 2); g.fillStyle = gray(.36); g.fill();
      g.beginPath(); g.moveTo(62, 70 + hb); g.bezierCurveTo(62, 10 + hb, 92, 22 + hb, 110, 30 + hb);
      g.bezierCurveTo(128, 22 + hb, 158, 10 + hb, 158, 70 + hb); g.closePath();
      g.fillStyle = radial(96, 34 + hb, 4, 110, 50, 60, [[0, .7], [1, .38]]); g.fill();
      g.fillStyle = gray(.12); g.fillRect(62, 58 + hb, 96, 9);
    }
    if (a === "beanie") {
      g.beginPath(); g.ellipse(110, 78 + hb, 62, 50, 0, Math.PI, 0); g.fillStyle = radial(96, 40 + hb, 4, 110, 60, 70, [[0, .55], [1, .22]]); g.fill();
      g.fillStyle = gray(.4); g.beginPath(); g.roundRect(46, 68 + hb, 128, 20, 8); g.fill();
      ellipse(110, 26 + hb, 12, 11, gray(.6));
    }
    if (a === "mate") {
      g.beginPath(); g.moveTo(140, 222); g.bezierCurveTo(134, 266, 196, 266, 190, 222); g.closePath();
      g.fillStyle = radial(156, 232, 2, 165, 240, 32, [[0, .92], [1, .62]]); g.fill();
      g.fillStyle = gray(.98); g.beginPath(); g.roundRect(136, 216, 58, 10, 4); g.fill();
      g.lineWidth = 5; g.strokeStyle = gray(.9); g.lineCap = "round";
      g.beginPath(); g.moveTo(176, 220); g.lineTo(192, 182); g.stroke();
      ellipse(146, 244, 15, 12, radial(142, 240, 1, 146, 244, 15, [[0, 1], [1, .78]]));
    }
  }

  function dither() {
    const d = g.getImageData(0, 0, W, H).data;
    const px = outData.data;
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4;
        if (d[i + 3] < 110) { px[i + 3] = 0; continue; }
        const l = (d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11) / 255;
        const c = l > BAYER[(y & 7) * 8 + (x & 7)] ? PAPER : INK;
        px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2]; px[i + 3] = 255;
      }
    }
    o.putImageData(outData, 0, 0);
  }

  function render() { draw(); dither(); }

  function mount(canvas) {
    out = canvas; out.width = W; out.height = H;
    o = out.getContext("2d");
    outData = o.createImageData(W, H);
    render();
    // respirar y parpadear
    let t = 0;
    setInterval(() => {
      t++;
      const nb = Math.round(Math.sin(t / 6) * 1.5);
      if (nb !== state.bob) { state.bob = nb; render(); }
    }, 120);
    (function blink() {
      setTimeout(() => {
        if (state.eyes === "open") { state.eyes = "closed"; render(); setTimeout(() => { state.eyes = "open"; render(); }, 130); }
        blink();
      }, 2500 + Math.random() * 3000);
    })();
  }

  function set(patch) { Object.assign(state, patch); if (out) render(); }

  return { mount, set, state };
})();
