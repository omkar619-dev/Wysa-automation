const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    // Expect a title "to contain" a substring.
    const pageTitle = await page.title();
    console.log('Page titel is'+pageTitle)
    await expect(page).toHaveTitle('Swag Labs');
    const pageURL = await page.url()
    console.log('Page url is'+pageURL);
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await page.close();
});

  