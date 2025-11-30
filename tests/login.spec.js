import { test, expect } from "./fixtures/base.js";
import { HomePage } from "../pages/HomePage.js";
import { LoginPage } from "../pages/LoginPage.js";

// Steps to perform before execution of every test
test.beforeEach(async ({page}) => {
    // Navigate to home page
    await page.goto("/posts/all");
    const homePage = new HomePage(page);
    // Going to Login page
    await homePage.goToLoginPage();
});

test("Successful login - using username", async ({ page, testUser }) => {
    // Fill login form and submit it
    const loginPage = new LoginPage(page);
    await loginPage.enterUsernameOrEmail(testUser.username); // Fill username in username or email field
    await loginPage.enterPassword(testUser.password);
    await loginPage.submit();
    // Assert successful login message
    const alertDialog = await loginPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Successful login!");
    // Assert user goes back to home page
    await expect(page).toHaveURL("/posts/all");
});

test("Successful login - using email", async ({ page, testUser }) => {
    // Fill login form and submit it
    const loginPage = new LoginPage(page);
    await loginPage.enterUsernameOrEmail(testUser.email); // Fill email in username or email field
    await loginPage.enterPassword(testUser.password);
    await loginPage.submit();
    // Assert successful login message
    const alertDialog = await loginPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Successful login!");
    // Assert user goes back to home page
    await expect(page).toHaveURL("/posts/all");
});

test("Failed login - missed field", async ({ page, testUser }) => {
    // Fill login form by missing password
    const loginPage = new LoginPage(page);
    await loginPage.enterUsernameOrEmail(testUser.username); // Fill username in username or email field
    // Assert SignIn button is disabled
    await expect(loginPage.signInButton).toBeDisabled();
});

test("Failed login - wrong username/email or password", async ({ page, invalidUser }) => {
    // Fill login form and submit it
    const loginPage = new LoginPage(page);
    await loginPage.enterUsernameOrEmail(invalidUser.username); // Fill username in username or email field
    await loginPage.enterPassword(invalidUser.password); // Password of invalidUser is wrong
    await loginPage.submit();
    // Assert wrong username or password message
    const alertDialog = await loginPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Wrong username or password!");
});