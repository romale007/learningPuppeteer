const puppeteer = require('puppeteer');
// const fs = require('fs')

const URL = "https://nizhniy-novgorod.korablik.ru/personal/";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    ignoreHTTPSErrors: true

  });
  const page = await browser.newPage();
  // page.setViewport({
  //   width: 1920,
  //   heigth: 1080
  // })
  await page.goto(URL, {
    waitUntil: ['networkidle2', 'domcontentloaded'],
  });

    await page.type('input[name="USER_LOGIN"]', 'romale0817@rambler.ru');
    await page.type('input[name="USER_PASSWORD"]', 'bvcxZ');

    await page.$eval('button[class$="popup_submit_100"]', el => el.click());

  // await browser.close();

})()

