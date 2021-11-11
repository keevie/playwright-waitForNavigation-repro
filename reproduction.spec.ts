import { test, expect, Page } from "@playwright/test";

test.describe.serial('does some tests', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    for (let i=0;i<5;i++) {
      const newCtx = await browser.newContext();
      await newCtx.newPage();
    }
  })

  test.afterAll(async () => {
    await page.close();
  })

  test('does a thing', async () => {
    await page.goto('localhost:3000/one')
    const resultUrl = new URL(page.url());
    expect(resultUrl.pathname.split('/').slice(-1)[0]).not.toEqual('exit');
  })

  test('does an instant thing', async() => {
    const resultUrl = new URL(page.url());
    expect(resultUrl.pathname.split('/').slice(-1)[0]).not.toEqual('exit');
  })

  test('clicks on the page', async() => {
    await page.click('body')
  })

  test('does another thing',  async () => {
    const resultUrl = new URL(page.url());
    expect(resultUrl.pathname.split('/').slice(-1)[0]).toEqual('one');
  })

})
