import type { Page, Locator } from 'playwright';
import { isVisible } from '../framework/commonactions';
import {expect} from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly popUp: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popUp = page.getByTitle('We’ll email you a login link for a password-free sign in.');
    }

    async open() {
        await this.page.goto('https://demo.dev.arcana.network');
    }

    async isLoginButtonVisible(): Promise<boolean> {
        return await isVisible(this.page, 'css=.google-button');
    }

    async goToLoginPage() {
        await this.page.click('css=.google-button');
        await expect(this.popUp).toBeVisible();
    }

}