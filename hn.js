const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 250
    });
    const page = await browser.newPage();
    await page.goto('http://xn----7sbbsba4a6bl8a0b.xn--p1ai/?type=555&subcat=16', {waitUntil: 'networkidle2'});

//  load – навигация считается завершенной (после события окончания загрузки).:
//  domcontentloaded – навигация считается завершенной (после события DOMContentLoaded):
//  networkidle0 – навигация считается завершенной, если в течение менее 500 мс отсутствуют активные подключения.
//  networkidle2 – навигация считается завершенной, если в течение менее 500 мс существует не более 2 активных сетевых подключений.

    await page.pdf({path: 'hn.pdf', format: 'A4'});

    await browser.close()
})()
