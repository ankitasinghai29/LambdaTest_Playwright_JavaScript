import { HeaderSectionPage } from "./HeaderSectionPage";
import { expect } from "@playwright/test";

exports.LoginLogoutPage = class LoginLogoutPage{
    constructor(page)
    {
        this.page = page;
        this.usernameField = '#input-email';
        this.passwordField = '//input[@id="input-password"]';
        this.loginButton = '//input[@value="Login"]';
        this.warningMessage = '(//div[contains(@class,"alert")])[3]';
        this.RegisterLink = '(//a[normalize-space()="Register"])[2]';
        this.continueButton = '//a[normalize-space()="Continue"]';
    }

    //checking the visibility of element (genralize function)
    async checkElementVisibilty(element){
        await expect(this.page.locator(element)).toBeVisible();
    } 

    //performing login into the application
    async getLoginIntoApp(username,password){
        const header = new HeaderSectionPage(this.page);
        await header.clickOnLoginIcon();
        await this.page.waitForTimeout(3000);
        this.checkElementVisibilty(this.usernameField);
        this.checkElementVisibilty(this.passwordField);
        this.checkElementVisibilty(this.loginButton);
        await this.page.fill(this.usernameField,username);
        await this.page.fill(this.passwordField,password);
        await this.page.click(this.loginButton);
    }

    //performing click action on regiter link available on login page
    async clickOnRegisterLink(){
        this.checkElementVisibilty(this.RegisterLink);
        await this.page.click(this.RegisterLink);
    }

    //performing click action on contionue button under new customer available on login page
    async clickOnRegisterLink(){
        this.checkElementVisibilty(this.continueButton);
        await this.page.click(this.continueButton);
    }

    async getWarningMessage()
    {
        await this.checkElementVisibilty(this.warningMessage);
    }
}