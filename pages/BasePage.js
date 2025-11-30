export class BasePage {
    constructor(page) {
        this.page = page;
    }

    // ===== INPUTS ACTIONS =====
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async submit() {
        await this.signInButton.click();
    }

    // Get dialog for successful or failed registration and login.
    async getAlertDialog() {
        await this.page.getByRole("alertdialog").waitFor({ state: "visible" });
        return this.page.getByRole("alertdialog");
    }
}