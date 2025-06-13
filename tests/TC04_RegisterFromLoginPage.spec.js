import {LoginLogoutPage} from '../Pages/LoginLogoutPage.js'
import {test,expect} from '@playwright/test'

test('validate user is able to redirect to register page from login page',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const login = new LoginLogoutPage(page);
    await login.clickOnRegisterLink();
    await expect(page).toHaveTitle('Register Account');
})