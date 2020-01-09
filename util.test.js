const puppeteer = require('puppeteer');
const { generateText, checkAndCreate } = require('./util');

// Unit Test Example
test('Should output name with age', () => {
  const text = generateText('Everton', 27);
  expect(text).toBe('Everton (27 years old)');
});
// Unit Test opositive test
test('Should output data-less tex', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
})

// Integration Test example
test('Should generate a valid text output', () => {
  const text = checkAndCreate('Everton', 27);
  expect(text).toBe('Everton (27 years old)');
})

// e2e Test
test('Should create an element with text and correct class', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['---windows-size=1920,1080']
  });

  const page = await browser.newPage();
  await page.goto(
    'file:///home/everton/projects/jsProjects/js-testing-introduction/index.html'
  );

  await page.click('input#name');
  await page.type('input#name', 'Everton');
  await page.click('input#age');
  await page.type('input#age', '27');
  await page.click('#btnAddUser');

  const finalText = await page.$eval('.user-item', element => element.textContent);
  expect(finalText).toBe('Everton (27 years old)');
}, 10000);