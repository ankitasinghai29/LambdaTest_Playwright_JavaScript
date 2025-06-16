import {test,expect} from '@playwright/test'
import {EditProfilePage} from '../Pages/EditProfilePage'

let editProfile;

test.beforeEach('Launching the website',async({page})=>{
    await page.goto('/');
    editProfile = new EditProfilePage(page);
})

test.skip('Validate user is able to get valid information on edit profile page',async({page})=>{
    await editProfile.checkUserInformation();
    await expect(page).toHaveTitle('My Account Information');
})

test.skip('validate user is able to edit profile',async({page})=>{
    await editProfile.editUserInformation();
    await expect(page).toHaveTitle('My Account');
})

test.fail('validate user is unable to edit profile by blank field',async({page})=>{
    await editProfile.fillFieldByBlank();
    await expect(page).toHaveTitle('My Account');
})

test('validate user is able to navigate to previous page using back button',async({page})=>{
    await editProfile.clickOnBackButton();
    await expect(page).toHaveTitle('My Account');
})

test.afterEach('Logout from application',async(page)=>{
    await editProfile.logoutFromApp();
})