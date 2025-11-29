import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage {
    constructor(page) {
        super(page);
        // Locator instances
        this.homeButton = this.page.locator("#nav-link-home");
        this.loginButton = this.page.locator("#nav-link-login");
        this.profileButton = this.page.locator("#nav-link-profile");
        this.newPostButton = this.page.locator("#nav-link-new-post");
        this.logoutButtonWithText = this.page.locator("#nav-link-logout");
    }

    async goToProfilePage() {
        await this.profileButton.click();
    }

    async goToNewPostPage() {
        await this.newPostButton.click();
    }

    async logout() {
        await this.logoutButtonWithoutText.click();
    }
}