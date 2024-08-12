# Wysa Automation
The following are the steps to set up and test the playwright tests for the following application https://www.saucedemo.com/
1. Create a folder named Wysa automation or with any name for that matter.
2. install the playwright framework and its supported browsers and the language which it asks in the installation steps using the `npm install playwright@latest` command
3. In the tests folder write an appropriate name for the test such as `Login.spec.js`
4. import all the required packages and write a test using the appropriate js syntax and a callback anonymous arrow function with the fixture defined.
5. using async await, find the locators and do the methods which are required in testing a login feature functionality.
6. To run the test use `npx playwright test Login.spec.js` for a headed mode and using the chromium browsers only use `npx playwright test Login.spec.js --project=chromium --headed`
7. To get the reports on the info of the test cases use the `npx playwright test show-report`
8. We can get a screenshot as well, this is an inbuilt functionality we get with playwright using `await page.screenshot({ path: 'screenshot.png', fullPage: true });` or `await page.screenshot({ path: 'screenshot.png' });` in your test code.
