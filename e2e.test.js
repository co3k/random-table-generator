const playwright = require('playwright');

let browser;

beforeAll(async () => {
  browser = await playwright.chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

describe('E2E test', () => {
  let context;
  let page;

  beforeAll(async () => {
    context = await browser.newContext();
    page = await context.newPage('http://localhost:1234/');
  });

  test('ファーストビューはボタンしか表示されない', async () => {
    expect((await page.$$('.gacha-button')).length).toBe(1);
    expect((await page.$$('.random-table li')).length).toBe(0);
  });

  test('ボタンを押下するとリストが表示される', async () => {
    await page.click('.gacha-button');
    await page.waitFor('.random-table li');
    expect((await page.$$('.random-table li')).length).toBe(30);
  });

  test('ボタンを押下するたびにリストの中身が変化する', async () => {
    await page.click('.gacha-button');

    await page.waitFor('.random-table li');
    const a = await page.$$eval('.random-table li', lis => lis.map((e) => e.textContent));

    await page.click('.gacha-button');
    await page.waitFor((beforeFirstText) => document.querySelector('.random-table li:first-child').textContent !== beforeFirstText, {}, a[0]);

    const b = await page.$$eval('.random-table li', lis => lis.map((e) => e.textContent));

    const diff = a.filter((v, k) => v !== b[k]);
    expect(diff.length).toBe(30);
  });
});
