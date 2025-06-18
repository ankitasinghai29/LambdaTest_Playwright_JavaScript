import {test,expect} from '@playwright/test'
import {ChangePasswordPage} from '../Pages/ChangePasswordPage'

let changePassword;

test.beforeEach('login into the application',async({page})=>{
    await page.goto('/');
    changePassword = new ChangePasswordPage(page);
})

test('validate User is able to change password',async({page})=>{
    const pass = 'asinghai'
    await changePassword.changePasswordWithValidData(pass);
    await expect(page).toHaveTitle('My Account');
})

test('validate user is unable to change password with mismatched password & confirm password field',async({page})=>{
    const pass = 'ankitasinghai'
    await changePassword.changePasswordWithMismatchedData(pass);
    await expect(page).toHaveTitle('My Account');
})

test.fail('validate user is unable to change password with blank field',async({page})=>{
    await changePassword.changePasswordWithBlankPassword();
    await expect(page).toHaveTitle('My Account');
})

/*
test.afterEach('logout from app',async({page})=>{
    await changePassword.logoutFromApp();
})
*/