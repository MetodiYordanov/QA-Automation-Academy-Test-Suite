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
        this.logoutButtonWithoutText = this.page.locator("i").first();
        this.navBarToggler = this.page.locator(".navbar-toggler");
    }

    async goToLoginPage() {
        await this.loginButton.click();
    }

    async goToProfilePage() {
        await this.profileButton.click();
    }

    async goToNewPostPage() {
        await this.newPostButton.click();
    }

    async openNavigationBar() {
        await this.navBarToggler.click();
    }

    async logout() {
        await this.logoutButtonWithoutText.click();
    }
}