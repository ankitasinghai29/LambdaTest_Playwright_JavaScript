import { expect } from "@playwright/test";

//This class is used to handle top header (Menu Bar) elements of the web page which is common to all pages
exports.HeaderSectionPage = class HeaderSectionPage{
    constructor(page)
    {
        this.page = page;
        this.myAccount = '(//a[normalize-space()="My account"])[2]';
        this.loginIcon = '(//a[normalize-space()="Login"])[1]';
        this.registerIcon = '//span[normalize-space()="Register"]';
        this.logoutIcon = '//span[normalize-space()="Logout"]';
        this.wishListIcon = '[aria-label="Wishlist"]';
        this.cartIcon = '(//div[@class="cart-icon"])[1]';
        this.megaMenu = '//span[normalize-space()="Mega Menu"]';
    }

    //checking the visibility of element (genralize function)
    async checkElementVisibilty(element){
        await expect(this.page.locator(element)).toBeVisible();
    } 

    //performing mouse hover on MyAccount icon
    async mouseHoverOnMyAccount()
    {
        this.checkElementVisibilty(this.myAccount);
        await this.page.locator(this.myAccount).hover();
    }

    //performing click action on login icon
    async clickOnLoginIcon(){
        this.mouseHoverOnMyAccount();
        //this.checkElementVisibilty(this.loginIcon);
        await this.page.click(this.loginIcon);
    }

    //performing click action on Register icon
    async clickOnRegisterIcon(){
        this.mouseHoverOnMyAccount();
        this.checkElementVisibilty(this.registerIcon);
        await this.page.click(this.registerIcon);
    }

    //performing click action on logout icon
    async clickOnLogoutIcon(){
        this.mouseHoverOnMyAccount();
        this.checkElementVisibilty(this.logoutIcon);
        await this.page.click(this.logoutIcon);
    }

    //performing click action on wishlist icon
    async clickOnWishlistIcon(){
        this.checkElementVisibilty(this.wishListIcon);
        await this.page.click(this.wishListIcon);
    }

    //performing click action on cart icon
    async clickOnCartIcon(){
        this.checkElementVisibilty(this.cartIcon);
        await this.page.click(this.cartIcon);
    }

    async getBrandItemsUnderMegaMenu(itemBrand)
    {
        await this.page.locator(this.megaMenu).hover();
        await this.page.waitForTimeout(3000);
        await this.page.click(`//a[@title="${itemBrand}"]`); //use ` instead of '
        await expect(this.page).toHaveTitle(itemBrand);
    }

    async getItemUnderMegaMenu(itemBrand,itemName)
    {
        await this.getBrandItemsUnderMegaMenu(itemBrand);
        await this.page.click(`//a[text()="${itemName}"]`);
        await expect(this.page).toHaveTitle(itemName);
    }


}