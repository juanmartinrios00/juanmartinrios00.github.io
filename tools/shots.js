// Saca capturas de los sitios del portfolio. Corre en GitHub Actions (ver .github/workflows/shots.yml).
const { chromium } = require("playwright");
const fs = require("fs");

const SITES = {
  pulso: "https://pulsoresearch.com",
  virasoro: "https://martinvirasoro.com",
  bloomsbury: "https://bloomsburyliving.com",
  catalfumo: "https://catalfumo.com",
  wildcat: "https://www.wildcat.club/",
  dentiqly: "https://dentiqly.com",
};

(async () => {
  fs.mkdirSync("shots/raw", { recursive: true });
  const browser = await chromium.launch();
  for (const [name, url] of Object.entries(SITES)) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(3000);
      // fuerza lazy-load scrolleando
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 250)); }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: `shots/raw/${name}-full.png`, fullPage: true });
      console.log("ok", name);
    } catch (e) {
      console.log("fail", name, e.message);
    }
    await page.close();
  }
  await browser.close();
})();
