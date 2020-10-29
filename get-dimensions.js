const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    // slowMo: 250
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });
  console.log(dimensions);
  await browser.close();

})()

