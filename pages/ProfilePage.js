import { BasePage } from "./BasePage.js";

export class ProfilePage extends BasePage {
    constructor(page) {
        super(page);
        // Locator instances
        this.usernameHeading = this.page.locator("h2");
        this.allPostsButton = this.page.locator('label:has-text(" All ")');
        this.publicPostsButton = this.page.locator('label:has-text(" Public ")');
        this.privatePostsButton = this.page.locator('label:has-text(" Private ")');
        this.appPostsList = this.page.locator("app-post-list >> app-post");
        this.noPostsHeading = this.page.locator("h3");
        // Locators for created post elements
        this.postUsername = this.page.locator(".post-user");
        this.postTitle = this.page.locator(".post-title");
        this.deletePostButton = this.page.locator('label:has-text("Delete post")');
        this.deleteYesButton = this.page.getByRole("button", { name: "Yes" });
        this.deleteNoButton = this.page.getByRole("button", { name: "No" });
    }

    async seeAllPosts() {
        await this.allPostsButton.click();
    }

    async seePublicPosts() {
        await this.publicPostsButton.click();
    }

    async seePrivatePosts() {
        await this.privatePostsButton.click();
    }

    async getNumberOfPosts() {
        const numberPosts = await this.appPostsList.count();
        return numberPosts;
    }

    // Open exact post from the list. If no number is passed open the first post in the list
    async openPost(numberPost = 1) {
        const numberPosts = await this.getNumberOfPosts();
        let postToOpen;
        if (numberPost === 1) {
            postToOpen = this.appPostsList.first();
        }
        else if (numberPost === numberPosts) {
            postToOpen = this.appPostsList.last();
        }
        else if (numberPost > 1 && numberPost < numberPosts) {
            postToOpen = this.appPostsList.nth(numberPost - 1); // Subtract by 1 as the list counting starts from 0
        }
        await postToOpen.click();
    }

    // Delete post
    async deletePost() {
        await this.deletePostButton.click();
    }
}