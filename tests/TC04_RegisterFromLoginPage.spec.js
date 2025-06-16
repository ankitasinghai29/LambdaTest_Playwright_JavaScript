import {LoginLogoutPage} from '../Pages/LoginLogoutPage.js'
import {test,expect} from '@playwright/test'

let login;

test.beforeEach('Launching the website',async({page})=>{
    await page.goto('/');
    login = new LoginLogoutPage(page);
})

test('validate user is able to redirect to register page from login page',async({page})=>{
    await login.clickOnRegisterLink();
    await expect(page).toHaveTitle('Register Account');
})