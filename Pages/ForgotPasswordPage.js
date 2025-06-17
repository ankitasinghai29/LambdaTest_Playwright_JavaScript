import { expect} from '@playwright/test'
import {HeaderSectionPage} from './HeaderSectionPage'

exports.ForgotPasswordPage = class ForgotPasswordPage{

    constructor(page)
    {
        this.page = page;
        this.forgotPasswordLink = '//a[text()="Forgotten Password"]';
        this.emailField = '#input-email';
        this.continueButton = '//button[text()="Continue"]';
        this.confirmMsg = '//div[contains(text(),"confirmation link")]';
        this.warningMsg = '//div[contains(text(),"Warning")]';
    }

    async getForgotPasswordPage()
    {
        const header = new HeaderSectionPage(this.page);
        await header.clickOnLoginIcon();
        await expect(this.page.locator(this.forgotPasswordLink)).toBeVisible();
        await this.page.click(this.forgotPasswordLink);
        await expect(this.page).toHaveTitle('Forgot Your Password?');
    }

    async getforgotPasswordLinkWithValidEmail(email)
    {
        await this.getForgotPasswordPage();
        await this.page.fill(this.emailField,email);
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.confirmMsg)).toBeVisible();
    }

    async getforgotPasswordLinkWithInvalidEmail(email)
    {
        await this.getForgotPasswordPage();
        await this.page.fill(this.emailField,email);
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.warningMsgMsg)).toBeVisible();
    }

}