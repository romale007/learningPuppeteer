const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1024,
        height: 768,
        deviceScaleFactor: 1,
    })
    await page.goto('https://vk.com');
    await page.screenshot({path: 'example.png'});
    await browser.close()
