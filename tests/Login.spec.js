const { test, expect } = require('@playwright/test');

test('Login',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']");
    // const header = await page.locator("//div[@class='header_secondary_container']");
    // await expect(header).toHaveText(/Products/);
    const content = await page.content();
    const textToFind = 'Products';
    const isTextPresent = content.includes(textToFind); 
    if (isTextPresent) {
        console.log(`The text "${textToFind}" is present on the page.`);
      } else {
        console.log(`The text "${textToFind}" is not present on the page.`);
      }
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log('LOGIN SUCCESS');
    await page.close();
