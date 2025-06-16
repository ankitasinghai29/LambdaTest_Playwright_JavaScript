//import loginData from '../TestData/UserData.json'
import {LoginLogoutPage} from '../Pages/LoginLogoutPage.js'
import {test,expect} from '@playwright/test'
require('dotenv').config();

let login;

test.beforeEach('Launching the website',async({page})=>{
    await page.goto('/');
    login = new LoginLogoutPage(page);
})


test('Validate user is able to login into app with valid credential',async({page})=>{
    //we save credential in .env file so to access its data use - process.env.VARIABLENAME
    const username = process.env.USER;
    const password = process.env.PASSWORD;
   await login.getLoginIntoApp(username,password);
   await expect(page).toHaveTitle('My Account');
})

test.fail('validate user is unable to login into app with blank credential fields',async({page})=>{
    await login.getLoginIntoApp();
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})

test.fail('Validate user is unable to login into app with invalid username',async({page})=>{
    const username = Math.random().toString(36).substring(2, 12);
    await login.getLoginIntoApp(username,process.env.PASSWORD);
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})

test.fail('Validate user is unable to login into app with invalid password',async({page})=>{
    const password = Math.random().toString(36).substring(2, 12);
    await login.getLoginIntoApp(process.env.USER,password);
    await login.getWarningMessage();
    await expect(page).toHaveTitle('My Account');
})

test.afterEach('Logout from application',async(page)=>{
    await login.clickOnLogoutLink();
})

