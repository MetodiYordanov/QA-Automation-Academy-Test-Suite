import { BasePage } from "./BasePage.js";

export class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        // Locator instances
        this.usernameInput = this.page.getByRole("textbox", { name: "Username" });
        this.emailInput = this.page.getByRole("textbox", { name: "email" });
        this.dateInput = this.page.getByPlaceholder("Birth date");
        this.passwordInput = this.page.getByRole("textbox", { name: "Password", exact: true });
        this.confirmPasswordInput = this.page.getByRole("textbox", { name: "Confirm Password", exact: true });
        this.publicInfoTextArea = this.page.getByRole("textbox", { name: "Public info" });
        this.signInButton = this.page.getByRole("button", { name: "Sign in" });
    }

    // ===== INPUTS ACTIONS =====
    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterDate(date) {
        const finalDate = date ?? this.generateRandomDate();
        await this.dateInput.fill(finalDate);
    }

    // Helper: random date between 18 and 60 years old
    generateRandomDate() {
        const today = new Date();

        // Maximum birth date = today - 18 years
        const maxDate = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
        );

        // Minimum birth date (60 years old)
        const minDate = new Date(
            today.getFullYear() - 60,
            today.getMonth(),
            today.getDate()
        );

        // Generate random date between minDate and maxDate
        const randomTime = minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());

        const randomDate = new Date(randomTime);

        // Convert to YYYY-MM-DD
        return randomDate.toISOString().split('T')[0];
    }

    async confirmPassword(password) {
        await this.confirmPasswordInput.fill(password);
    }

    async enterPublicInfo(publicInfo) {
        await this.publicInfoTextArea.fill(publicInfo);
    }

    // Function making the whole registration
    async completeRegistration(data) {
        // data object structure:
        // {
        //   username: "Test",
        //   email: "test@mail.com",
        //   birthDate: "1986-04-15",
        //   password: "Tester123",
        //   publicInfo: "SomeInfo",
        // }

        await this.enterUsername(data.username);
        await this.enterEmail(data.email);
        await this.enterDate(data.birthDate);
        await this.enterPassword(data.password);
        await this.confirmPassword(data.password);
        await this.enterPublicInfo(data.publicInfo);

        await this.submit();
    }
}