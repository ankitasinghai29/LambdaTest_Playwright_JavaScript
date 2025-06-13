import {expect} from '@playwright/test'
import UserData from '../TestData/UserData.json'
import {MyAccountPage} from '../Pages/MyAccountPage'

//This class is used to handle elements of the edit profile page
exports.EditProfilePage = class EditProfilePage {
    constructor(page)
    {
        this.page = page;
        this.firstname = '#input-firstname';
        this.lastname = '#input-lastname';
        this.email = '#input-email';
        this.telephone = '#input-telephone';
        this.continueButton = '//input[@value="Continue"]';
        this.backButton = '//a[normalize-space()="Back"]';
        this.successMessage = '//div[contains(text(),"Success")]';
        this.warningMessage = '.text-danger';
    }

    //Checking the user information visible on edit profile page
    async checkUserInformation()
    {
        const myAccount = new MyAccountPage(this.page);
        await myAccount.getEditAccountPage();

        await expect(this.page.locator(this.firstname)).toHaveValue(UserData.firstname);
        await expect(this.page.locator(this.lastname)).toHaveValue(UserData.lastname);
        await expect(this.page.locator(this.email)).toHaveValue(UserData.username);
        await expect(this.page.locator(this.telephone)).toHaveValue(UserData.telephone);
    }


}