import {HeaderSectionPage} from './HeaderSectionPage'
import {LoginLogoutPage} from './LoginLogoutPage'
import loginData from '../TestData/UserData.json'
import { expect } from '@playwright/test';

//this class is used to handle elements of the my Account page
exports.MyAccountPage = class MyAccountPage {
    
    constructor(page)
    {
        this.page = page;
        this.myAccountLink = '//a[normalize-space()="My Account"]';
        this.editAccountIcon = '//a[normalize-space()="Edit your account information"]';
        this.editAccountLink = '//a[normalize-space()="Edit Account"]';
        this.changePasswordIcon = '//a[normalize-space()="Change your password"]';
        this.passwordLink = '//a[normalize-space()="Password"]';
        this.wishListIcon = '//a[normalize-space()="Modify your wish list"]';
        this.wishlistLink = '//a[normalize-space()="Wish List"]';
        this.orderHistoryIcon = '//a[normalize-space()="View your order history"]';
        this.orderHistoryLink = '//a[normalize-space()="Order History"]';
        this.addressBookIcon = '//a[normalize-space()="Modify your address book entries"]';
        this.addressBookLink = '//a[normalize-space()="Address Book"]';
        this.logoutLink = '(//a[normalize-space()="Logout"])[2]';
        this.login;
    }

    //Login into the application
    async loginIntoApp(){
        const username = loginData.username;
        const password = loginData.password;
        this.login = new LoginLogoutPage(this.page);
        await this.login.getLoginIntoApp(username,password);
    }

    //navigate to my account page after login
    async getMyAccountPage()
    {
        await this.loginIntoApp();
        await this.page.waitForTimeout(3000);
        await expect(this.page.locator(this.myAccountLink)).toBeVisible();
        await expect(this.page.locator(this.editAccountIcon)).toBeVisible();
        await expect(this.page.locator(this.editAccountLink)).toBeVisible();
        await expect(this.page.locator(this.changePasswordIcon)).toBeVisible();
        await expect(this.page.locator(this.passwordLink)).toBeVisible();
        await expect(this.page.locator(this.addressBookIcon)).toBeVisible();
        await expect(this.page.locator(this.addressBookLink)).toBeVisible();
        await expect(this.page.locator(this.wishListIcon)).toBeVisible();
        await expect(this.page.locator(this.wishlistLink)).toBeVisible();
        await expect(this.page.locator(this.orderHistoryIcon)).toBeVisible();
        await expect(this.page.locator(this.orderHistoryLink)).toBeVisible();
        await expect(this.page.locator(this.logoutLink)).toBeVisible();
        await expect(this.page.locator(this.myAccountLink)).toHaveCSS('background-color', 'rgb(14, 186, 197)');
    }

    //navigate to edit account page
    async getEditAccountPage() {
        await this.loginIntoApp();
        await this.page.waitForTimeout(3000);
        const random = Math.floor(Math.random() * 2) + 1;
        if(random==1)
        {
            await this.page.click(this.editAccountIcon);
        }
        else
        {
            await this.page.click(this.editAccountLink);
        }
        await expect(this.page.locator(this.editAccountLink)).toHaveCSS('background-color', 'rgb(14, 186, 197)');
    }

    //navigate to wishlist page
    async getWishlistPage() {
        await this.loginIntoApp();
        await this.page.waitForTimeout(3000);
        const random = Math.floor(Math.random() * 2) + 1;
        if(random==1)
        {
            await this.page.click(this.wishListIcon);
        }
        else
        {
            await this.page.click(this.wishlistLink);
        }
        await expect(this.page.locator(this.wishlistLink)).toHaveCSS('background-color', 'rgb(14, 186, 197)');
    }

    //navigate to order history page
    async getOrderHistoryPage() {
        await this.loginIntoApp();
        await this.page.waitForTimeout(3000);
        const random = Math.floor(Math.random() * 2) + 1;
        if(random==1)
        {
            await this.page.click(this.orderHistoryIcon);
        }
        else
        {
            await this.page.click(this.orderHistoryLink);
        }
        await expect(this.page.locator(this.orderHistoryLink)).toHaveCSS('background-color', 'rgb(14, 186, 197)');
    }

    //navigate to address book page
    async getAddressBookPage() {
        await this.loginIntoApp();
        await this.page.waitForTimeout(3000);
        const random = Math.floor(Math.random() * 2) + 1;
        console.log(random);
        if(random==1)
        {
            await this.page.click(this.addressBookIcon);
        }
        else
        {
            await this.page.click(this.addressBookLink);
        }
        await expect(this.page.locator(this.addressBookLink)).toHaveCSS('background-color', 'rgb(14, 186, 197)');

    }

    //navigate to change password page
    async getChangePasswordPage() {
        await this.loginIntoApp();
        await this.page.waitForTimeout(3000);
        const random = Math.floor(Math.random() * 2) + 1;
        console.log(random);
        if(random==1)
        {
            await this.page.click(this.changePasswordIcon);
        }
        else
        {
            await this.page.click(this.passwordLink);
        }
        await expect(this.page.locator(this.passwordLink)).toHaveCSS('background-color', 'rgb(14, 186, 197)');

    }

    async logoutFromApp(){
        await this.login.clickOnLogoutLink();
    }
}