import { test, expect, Page } from "@playwright/test";

test.describe.serial('does some tests', () => {
  let page: Page;
  let newPage: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    const newCtx = await browser.newContext();
    newPage = await newCtx.newPage();
  })

  test.afterAll(async () => {
    await page.goto('localhost:3000/one')
    await page.waitForTimeout(1000)
    await page.evaluate(`console.log('hello')`)
    await page.close();
  })

  test('does a thing', async () => {
    await page.goto('localhost:3000/one')
    const resultUrl = new URL(page.url());
    expect(resultUrl.pathname.split('/').slice(-1)[0]).not.toEqual('exit');
  })

  test('does another thing',  async () => {
    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    const resultUrl = new URL(page.url());
    expect(resultUrl.pathname.split('/').slice(-1)[0]).toEqual('two');
  })

  test('does another thing in a new page',  async () => {
    await newPage.goto('localhost:3000/one');
  })
})