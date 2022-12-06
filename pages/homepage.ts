import type { Page } from 'playwright';
import { isVisible } from '../framework/commonactions';

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
    }

}