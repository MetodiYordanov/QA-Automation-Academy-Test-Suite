import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        // Locator instances
        this.usernameOrEmailInput = this.page.getByRole("textbox", { name: "Username or email" });
        this.passwordInput = this.page.getByRole("textbox", { name: "Password" });
        this.signInButton = this.page.getByRole("button", { name: "Sign in" });
        this.registerButton = this.page.getByRole('link', { name: 'Register' });
    }

    async enterUsernameOrEmail(usernameOrEmail) {
        await this.usernameOrEmailInput.fill(usernameOrEmail);
    }

    async goToRegisterPage() {
        await this.registerButton.click();
    }

    // Function to make the whole login
    async completeLogin(data) {
        // data object structure:
        // {
        //   username: "Test",
        //   email: "test@mail.com",
        //   birthDate: "1986-04-15",
        //   password: "Tester123",
        //   publicInfo: "SomeInfo",
        // }
        
        await this.enterUsernameOrEmail(data.username);
        await this.enterPassword(data.password);
        await this.submit();
    }
}