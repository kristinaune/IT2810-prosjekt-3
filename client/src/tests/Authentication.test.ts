import puppeteer from 'puppeteer';
import api from '../utilities/api';

describe('Register new user, log in and log out', () => {
  test('Register user', async () => {
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
    await page.goto('http://localhost:3000/register');

    await page.type('#email', 'testing@email.com');
    await page.type('#name', 'Test Testing');
    await page.click('#root > div.App > main > div > form > button');

    await page.waitForSelector('#nameInfo');

    expect(await page.$eval('#nameInfo', (e) => e.innerHTML)).toBe(
      '<b>Name:</b> Test Testing'
    );

    expect(await page.$eval('#emailInfo', (e) => e.innerHTML)).toBe(
      '<b>Email:</b> testing@email.com'
    );

    await browser.close();
  });

  test('Login user', async () => {
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
    await page.goto('http://localhost:3000/login');

    await page.type('#email', 'testing@email.com');
    await page.click('#root > .App > main > .authContainer > .button');

    await page.waitForSelector('#nameInfo');

    expect(await page.$eval('#nameInfo', (e) => e.innerHTML)).toBe(
      '<b>Name:</b> Test Testing'
    );

    expect(await page.$eval('#emailInfo', (e) => e.innerHTML)).toBe(
      '<b>Email:</b> testing@email.com'
    );

    await browser.close();
  });

  /**
   * TEARDOWN
   * Deletes the test user from database
   */
  afterAll(async () => {
    await api.delete('users/deleteUser/testing@email.com');
  });
});
