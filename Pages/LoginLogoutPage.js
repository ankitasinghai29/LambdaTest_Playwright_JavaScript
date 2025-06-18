import { HeaderSectionPage } from "./HeaderSectionPage";
import { expect } from "@playwright/test";

//This class is used to handle elements of the login web page
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
        this.logoutLink = '//a[contains(text(),"Logout")]';
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

    //performing click action on regiter link or contionue button under new customer available on login page
    async clickOnRegisterLink(){
        const header = new HeaderSectionPage(this.page);
        await header.clickOnLoginIcon();
        await this.page.waitForTimeout(3000);
        this.checkElementVisibilty(this.RegisterLink);
        this.checkElementVisibilty(this.continueButton);

        const random = Math.floor(Math.random() * 2) + 1;
        if(random==1)
        {
            await this.page.click(this.RegisterLink);
        }
        else
        {
            await this.page.click(this.continueButton);
        }
        await expect(this.page.locator(this.RegisterLink)).toHaveCSS('background-color', 'rgb(14, 186, 197)');
    }

    //check the visibility of the warning message on invalid action
    async getWarningMessage()
    {
        await this.checkElementVisibilty(this.warningMessage);
    }

    //logout from application
    async clickOnLogoutLink(){
        //this.page.locator(this.logoutLink).scrollIntoViewIfNeeded();
        await expect(this.page.locator(this.logoutLink)).toBeVisible();
        this.page.click(this.logoutLink);
    }
}