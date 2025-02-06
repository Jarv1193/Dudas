const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 969,
            height: 791
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('https://www.nike.com/mx/');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#nav-search-icon'),
            targetPage.locator('::-p-xpath(//*[@id=\\"nav-search-icon\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 22.39996337890625,
                y: 23,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#gn-search-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"gn-search-input\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 128.71249389648438,
                y: 13,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#gn-search-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"gn-search-input\\"])')
        ])
            .setTimeout(timeout)
            .fill('jordan');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(1) h1'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"visual-search-products\\"]/li[1]/a/figure/div[2]/div[1]/h1)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 50.399993896484375,
                y: 14,
              },
            });
        await Promise.all(promises);
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
