import { test, expect } from "./fixtures/base.js";
import { HomePage } from "../pages/HomePage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { NewPostPage } from "../pages/NewPostPage.js";
import { ProfilePage } from "../pages/ProfilePage.js";

let usernameLogged;
test.beforeEach(async ({ page, testUser }) => {
    // Navigate to home page
    await page.goto("/posts/all");
    const homePage = new HomePage(page);
    // Complete login flow
    await homePage.goToLoginPage();
    const loginPage = new LoginPage(page);
    await loginPage.completeLogin(testUser);
    // Wait for login success alert dialog to hide before going to New post page
    const homePageAlert = await homePage.getAlertDialog();
    await expect(homePageAlert).toHaveCount(0);
    // Going to New post page
    await homePage.goToNewPostPage();
    // Set value for usernameLogged varaiable
    usernameLogged = testUser.username;
});

test("Successful made post - public", async ({page}) => {
    // Create unique post caption
    const uniqueCaption = `TestPost-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    // Create new post
    const newPostPage = new NewPostPage(page);
    await newPostPage.uploadImage("./test-data/test-image.jpg");
    await newPostPage.enterPostCaption(uniqueCaption);
    await newPostPage.createPost();
    // Assert post created message
    const alertDialog = await newPostPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Post created!");
    // Assert user is sent to Profile page
    const profilePage = new ProfilePage(page);
    await expect(profilePage.usernameHeading).toBeVisible();
    await expect(profilePage.usernameHeading).toHaveText(usernameLogged);
    await profilePage.seePublicPosts(); // Opens list of posts that are public
    const postsCount = await profilePage.getNumberOfPosts(); // Get posts count
    await profilePage.openPost(postsCount); // Opens last created post
    // Assert created post appears with correct title and creator
    await expect(profilePage.postUsername).toHaveText(usernameLogged);
    await expect(profilePage.postTitle).toHaveText(uniqueCaption);
});

test("Successful made post - private", async ({page}) => {
    // Create new post
    const newPostPage = new NewPostPage(page);
    await newPostPage.uploadImage("./test-data/test-image.jpg");
    await newPostPage.enterPostCaption("TestCaption");
    await newPostPage.setPostPrivate(); // Makes post to be private
    await newPostPage.createPost();
    // Assert post created message
    let alertDialog = await newPostPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Post created!");
    // Assert user is sent to Profile page
    const profilePage = new ProfilePage(page);
    await expect(profilePage.usernameHeading).toBeVisible();
    await expect(profilePage.usernameHeading).toHaveText(usernameLogged);
    await profilePage.seePrivatePosts(); // Opens list of posts that are private
    const postsCount = await profilePage.getNumberOfPosts(); // Get posts count
    await profilePage.openPost(postsCount); // Opens last created post
    // Assert created post appears in private posts list
    await expect(profilePage.postUsername).toHaveText(usernameLogged);
    await expect(profilePage.postTitle).toHaveText("TestCaption");
});

test("Failed post creation - image not uploaded", async ({page}) => {
    // Create new post without uploading image
    const newPostPage = new NewPostPage(page);
    await newPostPage.enterPostCaption("Test caption");
    await newPostPage.createPost();
    // Assert image not uploaded message
    const alertDialog = await newPostPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Please upload an image!");
});

test("Failed post creation - missing post caption", async ({page}) => {
    // Create new post without uploading image
    const newPostPage = new NewPostPage(page);
    await newPostPage.uploadImage("./test-data/test-image.jpg");
    await newPostPage.createPost();
    // Assert image not uploaded message
    const alertDialog = await newPostPage.getAlertDialog();
    await expect(alertDialog).toBeVisible(); // waits for alert to appear
    await expect(alertDialog).toHaveText("Please enter caption!");
});