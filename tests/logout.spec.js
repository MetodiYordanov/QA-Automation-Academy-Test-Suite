import { test, expect } from "./fixtures/base.js";
import { HomePage } from "../pages/HomePage.js";
import { LoginPage } from "../pages/LoginPage.js";

test("Successful logout - big size browser window", async ( {page, testUser }) => {
    // Navigate to home page
    await page.goto("/posts/all");
    const homePage = new HomePage(page);
    // Going to Login page
    await homePage.goToLoginPage();
    const loginPage = new LoginPage(page);
    // Complete login flow
    await loginPage.completeLogin(testUser);
    // Wait for login success alert dialog to hide before making the logout
    const homePageAlert = await homePage.getAlertDialog();
    await expect(homePageAlert).toHaveCount(0);
    // Locate logout button and click it
    await homePage.logout();
    // Assert successful logout message
    const alertDialog = await loginPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Successful logout!");
    // Assert user is sent to login page
    await expect(page).toHaveURL("/users/login");
});

test("Successful logout - small size browser window", async ({ page, testUser }) => {
    // Set size of browser window to be smaller
    await page.setViewportSize({ width: 767, height: 1304 });
    // Navigate to home page
    await page.goto("/posts/all");
    const homePage = new HomePage(page);
    // Going to Login page
    await homePage.goToLoginPage();
    const loginPage = new LoginPage(page);
    // Complete login flow
    await loginPage.completeLogin(testUser);
    // Wait for login success alert dialog to hide before making the logout
    const homePageAlert = await homePage.getAlertDialog();
    await expect(homePageAlert).toHaveCount(0);
    // Open navigation bar
    await homePage.openNavigationBar();
    // Locate logout button and click it
    await homePage.logoutButtonWithText.click();
    // Assert successful logout message
    const alertDialog = await loginPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Successful logout!");
    // Assert user is sent to login page
    await expect(page).toHaveURL("/users/login");
});