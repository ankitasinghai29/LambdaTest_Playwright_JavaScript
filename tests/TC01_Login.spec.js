import loginData from '../TestData/UserData.json'
import {LoginLogoutPage} from '../Pages/LoginLogoutPage.js'

import {test,expect} from '@playwright/test'

test('Validate user is able to login into app with valid credential',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const login = new LoginLogoutPage(page);
    await login.getLoginIntoApp(loginData.username,loginData.password);
    await expect(page).toHaveTitle('My Account');
})

test.fail('validate user is unable to login into app with blank credential fields',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const login = new LoginLogoutPage(page);
    await login.getLoginIntoApp();
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})

test.fail('Validate user is unable to login into app with invalid username',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const login = new LoginLogoutPage(page);
    const username = Math.random().toString(36).substring(2, 12);
    await login.getLoginIntoApp(username,loginData.password);
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})

test.fail('Validate user is unable to login into app with invalid password',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const login = new LoginLogoutPage(page);
    const password = Math.random().toString(36).substring(2, 12);
    await login.getLoginIntoApp(loginData.username,password);
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})