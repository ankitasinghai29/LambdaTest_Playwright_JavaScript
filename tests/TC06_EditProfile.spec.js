import {test,expect} from '@playwright/test'
import {EditProfilePage} from '../Pages/EditProfilePage'

test('Validate user is able to get valid information on edit profile page',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const editProfile = new EditProfilePage(page);
    await editProfile.checkUserInformation();
    await expect(page).toHaveTitle('My Account Information');
})