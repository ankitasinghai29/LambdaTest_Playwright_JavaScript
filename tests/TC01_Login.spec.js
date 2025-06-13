//import loginData from '../TestData/UserData.json'
import {LoginLogoutPage} from '../Pages/LoginLogoutPage.js'
import {test,expect} from '@playwright/test'
require('dotenv').config();


test.only('Validate user is able to login into app with valid credential',async({page})=>{
    await page.goto('/');
    const login = new LoginLogoutPage(page);
    const username = process.env.USER;
    const password = process.env.PASSWORD;
   await login.getLoginIntoApp(username,password);
   await expect(page).toHaveTitle('My Account');
})

test.fail('validate user is unable to login into app with blank credential fields',async({page})=>{
    await page.goto('/');
    const login = new LoginLogoutPage(page);
    await login.getLoginIntoApp();
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})

test.fail('Validate user is unable to login into app with invalid username',async({page})=>{
    await page.goto('/');
    const login = new LoginLogoutPage(page);
    const username = Math.random().toString(36).substring(2, 12);
    await login.getLoginIntoApp(username,process.env.password);
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})

test.fail('Validate user is unable to login into app with invalid password',async({page})=>{
    await page.goto('/');
    const login = new LoginLogoutPage(page);
    const password = Math.random().toString(36).substring(2, 12);
    await login.getLoginIntoApp(process.env.username,password);
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})

