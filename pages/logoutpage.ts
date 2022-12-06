import type { Page } from 'playwright';
import { isVisible } from '../framework/commonactions';

export class LogoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async userIsLoggedOut(): Promise<boolean> {
        return isVisible(this.page, 'a[routerlink="/login"]');
    }
}

