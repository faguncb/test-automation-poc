import type { Page, Locator } from 'playwright';

export class LoginPage {
    readonly page: Page;
    readonly googleLogin: Locator;
    readonly twitchLogin: Locator;
    readonly githubLogin: Locator;
    readonly discordLogin: Locator;

    constructor(page: Page){
        this.page = page;
        this.googleLogin = page.getByAltText('google logo');
        this.twitchLogin = page.getByAltText('twitch logo');
        this.githubLogin = page.getByAltText('github logo');
        this.discordLogin = page.getByAltText('discord logo');
    }

    async userGoogleLogin() {
        await this.googleLogin.click();
        await this.googleLogin.type('')

    }
}