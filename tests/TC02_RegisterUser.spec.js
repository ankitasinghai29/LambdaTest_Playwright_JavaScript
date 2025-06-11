import {test,expect} from '@playwright/test'
import {RegisterUserPage} from '../Pages/RegisterUserPage'

test('Validate user is able to register with valid data',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const register = new RegisterUserPage(page);
    await register.registerNewUser();
    await expect(page).toHaveTitle(' Your Account Has Been Created!');
})

test.fail('validate user is unable to register with existing email', async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const register = new RegisterUserPage(page);
    await register.registerWithExistingUser();
    await expect(page).toHaveTitle(' Your Account Has Been Created!');
})

test.fail('validate user is unable to register without clicking privacy policy', async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const register = new RegisterUserPage(page);
    await register.registerWithoutCheckPolicy();
    await expect(page).toHaveTitle(' Your Account Has Been Created!');
})

test.fail('validate user is unable to register with partial data', async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const register = new RegisterUserPage(page);
    await register.registerWithPartialData();
    await expect(page).toHaveTitle(' Your Account Has Been Created!');
})