import type { Page, Locator } from 'playwright';
import {expect} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly googleLogin: Locator;
    readonly googlePage: Locator;
    readonly twitchLogin: Locator;
    readonly twitchPage: Locator;
    readonly githubLogin: Locator;
    readonly githubPage: Locator;
    readonly discordLogin: Locator;
    readonly discordPage: Locator;

    constructor(page: Page){
        this.page = page;
        this.googleLogin = page.getByAltText('google logo');
        this.googlePage = page.getByTitle('Sign in with Google');
        this.twitchLogin = page.getByAltText('twitch logo');
        this.githubLogin = page.getByAltText('github logo');
        this.discordLogin = page.getByAltText('discord logo');
    }

    async userGoogleLogin(email:string, password:string) {
        await this.googleLogin.click();
        await expect(this.googlePage).toBeVisible({ timeout: 5000});
        await this.googlePage.locator('#email').fill(email);
        await this.googlePage.getByText('Next').click();
        await this.googlePage.locator('#password').fill(password);
        await this.googlePage.getByText('Next').click();
    }

}
