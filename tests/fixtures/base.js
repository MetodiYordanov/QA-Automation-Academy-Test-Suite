import { test as base } from "@playwright/test";
import { RegistrationPage } from "../../pages/RegistrationPage.js";

// Fixture providing test user data
export const test = base.extend({
    testUser: async ({}, use) => {
        const user = {
            username: "MnogoGotin",
            email: "mnogo.gotin@mail.com",
            birthDate: "1986-04-15",
            password: "mnogoGotin123",
            publicInfo: "MnogoGotin is the best",
        };
        await use(user);
    },

    invalidUser: async ({}, use) => {
        const invalid = {
            username: "MnogoGotin",
            email: "mnogo.gotin@mail.com",
            birthDate:"2003-07-19",
            password: "not-a-pass",
            publicInfo: "Invalid user",
        };
        await use(invalid);
    },

    newUser: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        const randomUsernameLetters = Math.random().toString(36).replace(/[^a-z]/gi, '').slice(0, 5); // Generate 5 random letters for username
        const randomUsernameNumber = Math.floor(Math.random() * 1000); // Generate random numbers for username
        const usernameConst = `${randomUsernameLetters}${randomUsernameNumber}`;
        const userData = {
            username: usernameConst,
            email: `${usernameConst.toLowerCase()}@mail.com`,
            birthDate: `${registrationPage.generateRandomDate()}`,
            password: "testUser123",
            publicInfo: "Generated user",
        };
        await use(userData);
    },
});

export { expect } from "@playwright/test";