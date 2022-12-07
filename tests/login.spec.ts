import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/homepage';
import { LoginPage } from '../pages/loginpage';
import { SettingsPage } from '../pages/settingspage';
import { LogoutPage } from '../pages/logoutpage';

test('User can login and logout', async ({ page }) => {
    const homepage = new HomePage(page);

    await homepage.open();
    await homepage.goToLoginPage();
    await new LoginPage(page).userGoogleLogin(user.email, user.password);

    const isLoginButtonVisible = await homepage.isLoginButtonVisible();
    expect(isLoginButtonVisible).toBeTruthy();

});