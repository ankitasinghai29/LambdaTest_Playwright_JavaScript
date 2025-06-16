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
        this.myAccount;
    }

    //get Edit Account page
    async getEditAccountPage()
    {
        this.myAccount = new MyAccountPage(this.page);
        await this.myAccount.getEditAccountPage();

    }

    //Checking the user information visible on edit profile page
    async checkUserInformation()
    {
        await this.getEditAccountPage();
        await expect(this.page.locator(this.firstname)).toHaveValue(UserData.firstname);
        await expect(this.page.locator(this.lastname)).toHaveValue(UserData.lastname);
        await expect(this.page.locator(this.email)).toHaveValue(UserData.username);
        await expect(this.page.locator(this.telephone)).toHaveValue(UserData.telephone);
    }

    async editUserInformation(){
        await this.getEditAccountPage();
        let tele = '9889939495';
        await this.page.fill(this.telephone,tele);
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.successMessage)).toBeVisible();
    }

    async fillFieldByBlank()
    {
        await this.getEditAccountPage();
        await this.page.locator(this.telephone).clear();
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.warningMessage)).toBeVisible();
    }

    async clickOnBackButton()
    {
        await this.getEditAccountPage();
        await this.page.click(this.backButton);
    }

    async logoutFromApp()
    {
        await this.myAccount.logoutFromApp();
    }
}