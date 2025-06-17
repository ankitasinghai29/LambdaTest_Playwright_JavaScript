import {test,expect} from '@playwright/test'
import {ForgotPasswordPage} from '../Pages/ForgotPasswordPage'

let forgotPassword;

test.beforeEach('Launching the website',async({page})=>{
    await page.goto('/');
    forgotPassword = new ForgotPasswordPage(page);
})

test('validate user is able to perform forgot password with valid email',async({page})=>{
    await forgotPassword.getforgotPasswordLinkWithValidEmail('anki123@gmail.com');
    await expect(page).toHaveTitle('Account Login');
})

test.fail('validate user is unable to perform forgot password with invalid email',async({page})=>{
    await forgotPassword.getforgotPasswordLinkWithValidEmail('ankigmail.com');
    await expect(page).toHaveTitle('Account Login');
})