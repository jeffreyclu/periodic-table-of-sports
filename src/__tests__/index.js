const puppeteer = require("puppeteer");
const reactPinpoint = require("react-pinpoint");

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  page = await browser.newPage();
  const url = "http://localhost:3000";
  const rootId = "#root";
  await reactPinpoint.recordTest(page, url, rootId);
})

afterEach(async () => {
  const slowRenders = await reactPinpoint.reportTestResults(page, 1);
  console.log('Slow renders:', slowRenders);
  await browser.close();
})

test("checkbox should be checkable", async () => {
  await page.click("#ProFilter");

  const result = await page.evaluate(() => {
    const proFilter = document.querySelector('#ProFilter');
    return proFilter.checked;
  })

  expect(result).toBe(true);
})
