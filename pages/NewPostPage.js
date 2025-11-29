import { BasePage } from "./BasePage.js";

export class NewPostPage extends BasePage {
    constructor(page) {
        super(page);
        // Locator instances
        this.uploadImageInput = this.page.locator("input[type=file]").first();
        this.postCaptionInput = this.page.getByRole("textbox", { name: "Enter you post caption here" });
        this.privateOrPublicCheckbox = this.page.locator('label:has-text("Public")');
        this.createPostButton = this.page.getByRole("button", { name: "Create post" });
    }

    // Upload image method
    async uploadImage(imagePath) {
        await this.uploadImageInput.setInputFiles(imagePath);
    }

    async enterPostCaption(postCaption) {
        await this.postCaptionInput.fill(postCaption);
    }

    async setPostPrivate() {
        await this.privateOrPublicCheckbox.click();
    }

    async createPost() {
        await this.createPostButton.click();
    }
}