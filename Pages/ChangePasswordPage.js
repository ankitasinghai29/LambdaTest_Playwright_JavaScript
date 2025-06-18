import {expect} from '@playwright/test'
import {MyAccountPage} from './MyAccountPage'

exports.ChangePasswordPage = class ChangePasswordPage{

    constructor(page)
    {
        this.page = page;
        this.passwordField = '#input-password';
        this.confirmPasswordField = '#input-confirm';
        this.continueButton = '[value="Continue"]';
        this.successMsg = '//div[contains(text(),"Success")]';
        this.warningMsg = '.text-danger';
        this.myAccount;
    }

    async getChangePasswordPage()
    {
        this.myAccount = new MyAccountPage(this.page);
        await this.myAccount.getChangePasswordPage();
        await expect(this.page).toHaveTitle('Change Password');
    }

    async changePasswordWithValidData(password)
    {
        await this.getChangePasswordPage();
        await expect(this.page.locator(this.passwordField)).toBeVisible();
        await expect(this.page.locator(this.confirmPasswordField)).toBeVisible();
        await expect(this.page.locator(this.continueButton)).toBeVisible();
        await this.page.fill(this.passwordField,password);
        await this.page.fill(this.confirmPasswordField,password);
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.successMsg)).toBeVisible();
    }

    async changePasswordWithMismatchedData(password)
    {
        await this.getChangePasswordPage();
        await this.page.fill(this.passwordField,password);
        await this.page.fill(this.confirmPasswordField,'hello');
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.warningMsg)).toBeVisible();
    }

    async changePasswordWithBlankPassword()
    {
        await this.getChangePasswordPage();
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.warningMsg)).toBeVisible();
    }

    async logoutFromApp()
    {
        this.myAccount.logoutFromApp();
    }
}