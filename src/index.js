const puppeteer = require('puppeteer');
const CENLEX_PAGE = "https://www.saes.cenlexz.ipn.mx/agenda/calendario.asp";

(async () => {
        const browser = await puppeteer.launch({
                headless: false
        });

        let page = await browser.newPage();
        await page.goto(CENLEX_PAGE, {
                waitUntil: ["load", "domcontentloaded", "networkidle0", "networkidle2"]
        });

        let rawFecha = await page.$eval("body > div > table > tbody > tr > td > div > p", p => p.innerHTML);

        let fecha = rawFecha.split("<br>", 1)[0];
        console.log(fecha);

})();