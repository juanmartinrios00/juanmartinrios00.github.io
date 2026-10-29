// Saca capturas de los sitios del portfolio. Corre en GitHub Actions (ver .github/workflows/shots.yml).
const { chromium, devices } = require("playwright");
const fs = require("fs");

const SITES = {
  pulso: "https://pulsoresearch.com",
  virasoro: "https://martinvirasoro.com",
  bloomsbury: "https://bloomsburyliving.com",
  catalfumo: "https://catalfumo.com",
  wildcat: "https://www.wildcat.club/",
  dentiqly: "https://dentiqly.com",
};

async function settle(page) {
  await page.waitForTimeout(2500);
  // cierra banners de cookies
  for (const label of ["Aceptar", "Accept", "Accept all", "OK"]) {
    const btn = page.getByRole("button", { name: label, exact: true }).first();
    if (await btn.isVisible().catch(() => false)) { await btn.click().catch(() => {}); break; }
  }
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 200)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);
}

(async () => {
  fs.mkdirSync("shots/raw", { recursive: true });
  const browser = await chromium.launch();
  for (const [name, url] of Object.entries(SITES)) {
    try {
      const desk = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await desk.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await settle(desk);
      const h = await desk.evaluate(() => document.body.scrollHeight);
      const step = 900, max = 8;
      for (let i = 0, y = 0; y < h && i < max; i++, y += step) {
        await desk.evaluate((y) => window.scrollTo(0, y), y);
        await desk.waitForTimeout(900);
        await desk.screenshot({ path: `shots/raw/${name}-d${i}.jpg`, type: "jpeg", quality: 80 });
      }
      await desk.close();
      const ctx = await browser.newContext({ ...devices["iPhone 13"] });
      const mob = await ctx.newPage();
      await mob.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await settle(mob);
      for (let i = 0; i < 3; i++) {
        await mob.evaluate((y) => window.scrollTo(0, y), i * 844);
        await mob.waitForTimeout(900);
        await mob.screenshot({ path: `shots/raw/${name}-m${i}.jpg`, type: "jpeg", quality: 80 });
      }
      await ctx.close();
      console.log("ok", name);
    } catch (e) {
      console.log("fail", name, e.message);
    }
  }
  await browser.close();
})();
