import { test, expect } from "./fixtures/base.js";
import { HomePage } from "../pages/HomePage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { RegistrationPage } from "../pages/RegistrationPage.js";
import { validUsers, invalidUsers } from "../test-data/userData.js";

test.beforeEach(async ({page}) => {
    // Navigate to home page
    await page.goto("/posts/all");
    const homePage = new HomePage(page);
    // Going to Register page
    await homePage.goToLoginPage();
    const loginPage = new LoginPage(page);
    await loginPage.goToRegisterPage();
});

test("Successful registration", async ({ page, newUser }) => {
    // Make the registration
    const registrationPage = new RegistrationPage(page);
    await registrationPage.completeRegistration(newUser);
    // Assert successful register message
    const alertDialog = await registrationPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Successful register!");
});

test("Failed registration - missed username", async ({ page, newUser }) => {
    // Make the registration without enter username
    const registrationPage = new RegistrationPage(page);
    await registrationPage.usernameInput.click();
    await registrationPage.enterEmail(newUser.email);
    await registrationPage.enterDate(newUser.birthDate);
    await registrationPage.enterPassword(newUser.password);
    await registrationPage.confirmPassword(newUser.password);
    await registrationPage.enterPublicInfo(newUser.publicInfo);
    // Assert field is required label appears
    await expect(registrationPage.requiredFieldSpan).toBeVisible();
    // Assert Sign In button is disabled
    await expect(registrationPage.signInButton).toBeDisabled();
});

// Tests checking Sign In button is disabled if a field in the form does not match requirements. Using data from userData.js file.
invalidUsers.forEach((userData) => {
    test(`Failed register: ${userData.publicInfo}`, async ({page}) => {
        // Make the registration
        const registrationPage = new RegistrationPage(page);
        await registrationPage.enterUsername(userData.username);
        await registrationPage.enterEmail(userData.email);
        await registrationPage.enterDate(userData.birthDate);
        await registrationPage.enterPassword(userData.password);
        await registrationPage.confirmPassword(userData.password);
        await registrationPage.enterPublicInfo(userData.publicInfo);
        // Assert Sign In button is disabled
        await expect(registrationPage.signInButton).toBeDisabled();
    });
});

test("Failed registration - username taken", async ({ page, newUser }) => {
    // Make the registration
    const registrationPage = new RegistrationPage(page);
    await registrationPage.enterUsername(validUsers[0].username); // Enter username of first user in validUsers array
    await registrationPage.enterEmail(newUser.email);
    await registrationPage.enterDate(newUser.birthDate);
    await registrationPage.enterPassword(newUser.password);
    await registrationPage.confirmPassword(newUser.password);
    await registrationPage.enterPublicInfo(newUser.publicInfo);
    await registrationPage.submit();
    // Assert username taken message
    const alertDialog = await registrationPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Username taken");
});

test("Failed registration - email taken", async ({ page, newUser }) => {
    // Make the registration
    const registrationPage = new RegistrationPage(page);
    await registrationPage.enterUsername(newUser.username); 
    await registrationPage.enterEmail(validUsers[0].email); // Enter email of first user in validUsers array
    await registrationPage.enterDate(newUser.birthDate);
    await registrationPage.enterPassword(newUser.password);
    await registrationPage.confirmPassword(newUser.password);
    await registrationPage.enterPublicInfo(newUser.publicInfo);
    await registrationPage.submit();
    // Assert email taken message
    const alertDialog = await registrationPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Email taken");
});