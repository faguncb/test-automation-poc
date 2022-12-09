import type { Page, Locator } from 'playwright';
import { isVisible } from '../framework/commonactions';
import {expect} from "@playwright/test";

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://demo.dev.arcana.network');
    }

    async isLoginButtonVisible(): Promise<boolean> {
        return await isVisible(this.page, 'css=.google-button');
    }

    async goToLoginPage() {
        await this.page.click('css=.google-button');
        await this.page.getByText('We’ll email you a login link for a password-free sign in.');
    }

}
