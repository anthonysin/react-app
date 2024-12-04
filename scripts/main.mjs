import fs from 'fs';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('https://anthonysin.github.io/react-app/');
await page.setViewport({width: 1080, height: 1024});
await page.waitForNetworkIdle();
await page.screenshot({
    path: "desktop_screenshot.png"
});

await page.setViewport({width: 375, height: 800});
await page.waitForNetworkIdle();
await page.screenshot({
    path: "mobile_screenshot.png"
});

await page.setViewport({width: 785, height: 1024});
await page.waitForNetworkIdle();
await page.screenshot({
    path: "tablet_screenshot.png"
});

const options = {
    output: 'html'
};
const runnerResult = await lighthouse('https://anthonysin.github.io/react-app/', options, undefined, page);

const reportHtml = runnerResult.report;
fs.writeFileSync('auto_website_report.html', reportHtml);

await browser.close();