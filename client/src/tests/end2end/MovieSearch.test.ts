import puppeteer from 'puppeteer';

jest.setTimeout(10000);
describe('Search for a movie and filter ', () => {
  test('Search for one specific movie', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000');

    await page.setViewport({ width: 1440, height: 788 });

    await page.waitForSelector(
      '.App > #searchMovie > #searchContainer #searchField'
    );
    await page.click('.App > #searchMovie > #searchContainer #searchField');

    await page.type('.App #searchField', 'spider-man');

    await page.waitForSelector(
      '.App > #searchMovie > #searchContainer #searchButton'
    );
    await page.click('.App > #searchMovie > #searchContainer #searchButton');

    await page.waitForSelector(
      '.App > #searchMovie > section > .searchListMovieItem > .textInfo'
    );
    await page.click(
      '.App > #searchMovie > section > .searchListMovieItem > .textInfo'
    );

    await page.waitForSelector('#root #title');
    await page.click('#root #title');

    expect(await page.$eval('#title', (e) => e.innerHTML)).toBe(
      'Spider-Man: Into the Spider-Verse'
    );

    await page.waitForSelector('.closeButton');
    await page.click('.closeButton');

    await browser.close();
  });

  test('Filter movies', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000');

    await page.setViewport({ width: 1440, height: 788 });

    await page.waitForSelector(
      '.App > .navbar > .nav-menu > li:nth-child(2) > .nav-links'
    );
    await page.click(
      '.App > .navbar > .nav-menu > li:nth-child(2) > .nav-links'
    );

    await page.waitForSelector(
      '.App > .movies > .filterMovies > .filterButtons > .filterButton:nth-child(8)'
    );
    await page.click(
      '.App > .movies > .filterMovies > .filterButtons > .filterButton:nth-child(8)'
    );
    setTimeout(() => {}, 2000);
    await page.waitForSelector(
      '.App > .movies > .movieList > .movieItem:nth-child(1)'
    );
    await page.click('.App > .movies > .movieList > .movieItem:nth-child(1)');

    await page.waitForSelector('#root #title');
    await page.click('#root #title');

    expect(await page.$eval('#title', (e) => e.innerHTML)).toBe(
      'The Lord of the Rings: The Return of the King'
    );
    await browser.close();
  });
});
