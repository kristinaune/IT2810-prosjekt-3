import puppeteer from 'puppeteer';
import api from '../utilities/api';

describe('Register new user, log in and log out', () => {
  test('Register user', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('http://localhost:3000/');

    await page.setViewport({ width: 1536, height: 722 });

    await page.waitForSelector(
      '.App > .navbar > .nav-menu > li:nth-child(4) > .nav-links'
    );
    await page.click(
      '.App > .navbar > .nav-menu > li:nth-child(4) > .nav-links'
    );

    await page.waitForSelector('body > #root #toRegister');
    await page.click('body > #root #toRegister');

    await page.waitForSelector('.App #name');
    await page.click('.App #name');
    await page.type('.App #name', 'Test Testing');

    await page.waitForSelector('.App #email');
    await page.click('.App #email');
    await page.type('.App #email', 'testing@email.com');

    await page.waitForSelector(
      '.App > .authContainer > .form > form > .accountButton:nth-child(8)'
    );
    await page.click(
      '.App > .authContainer > .form > form > .accountButton:nth-child(8)'
    );

    await page.waitForSelector('#userInfo');

    expect(await page.$eval('#userInfo', (e) => e.innerHTML)).toBe(
      'Logged in as Test Testing with email: testing@email.com.'
    );

    await browser.close();
  });

  test('Login user', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.setViewport({ width: 1920, height: 1080 });

    await page.waitForSelector(
      '.App > .navbar > .nav-menu > li:nth-child(4) > .nav-links'
    );
    await page.click(
      '.App > .navbar > .nav-menu > li:nth-child(4) > .nav-links'
    );

    await page.waitForSelector('body > #root #toLogin');
    await page.click('body > #root #toLogin');

    await page.waitForSelector('.App #email');
    await page.click('.App #email');
    await page.type('.App #email', 'testing@email.com');

    await page.waitForSelector(
      '.App > .authContainer > .form > form > .accountButton:nth-child(5)'
    );
    await page.click(
      '.App > .authContainer > .form > form > .accountButton:nth-child(5)'
    );

    await page.waitForSelector('#userInfo');

    expect(await page.$eval('#userInfo', (e) => e.innerHTML)).toBe(
      'Logged in as Test Testing with email: testing@email.com.'
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
