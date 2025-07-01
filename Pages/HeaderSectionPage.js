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
        this.myOrderIcon = '//span[normalize-space()="My order"]';
        this.wishListIcon = '[aria-label="Wishlist"]';
        this.cartIcon = '(//div[@class="cart-icon"])[1]';
        this.megaMenu = '//span[normalize-space()="Mega Menu"]';
        this.compareIcon = '#entry_217823 a';
        this.searchBar = '(//input[@name="search"])[1]';
        this.searchButton = '//button[text()="Search"]';
        this.categoryDropDown = '(//div[@class="dropdown search-category"])[1]/button';
        this.categorySelect='//div[@class="dropdown-menu dropdown-menu-left show"]';
        this.searchPageCategoryDropDown = 'select[name="category_id"]';
        this.searchPageSearchButton = 'input#button-search';
        this.keywordField = '#input-search';
        this.shopByCategoryIcon = '#entry_217832 a';
        this.topCategoryList = '#widget-navbar-217841 ul li a div span';
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

    async clickOnMyOrder()
    {
        this.mouseHoverOnMyAccount();
        this.checkElementVisibilty(this.myOrderIcon);
        await this.page.click(this.myOrderIcon);
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

    async clickOnCompareIcon()
    {
        await this.page.click(this.compareIcon);
        
    }

    async searchProduct(options={})
    {
        let title="Search - ";
        let item = options.item ? options.item : "null";
        let category = options.category ? options.category : "null";
        if(item!="null")
        {
            await this.page.locator(this.searchBar).fill(item);
            title = title +item;
        }
        if(category!="null")
        {
            await this.page.locator(this.categoryDropDown).click();
            await this.page.locator(this.categorySelect).locator(`//a[text()="${category}"]`).click();
        }
        await this.page.click(this.searchButton);
        
        
        await expect(this.page).toHaveTitle(title);
    }

    async selectCategoryOnSearchPage(category)
    {
        await this.page.locator(this.searchPageCategoryDropDown).selectOption(category);
        await this.page.click(this.searchPageSearchButton);
    }

    async enterKeywordOnSearchPage(keyword)
    {
        await this.page.locator(this.keywordField).fill(keyword);
        await this.page.click(this.searchPageSearchButton);
        let title="Search - "+keyword;
        await expect(this.page).toHaveTitle(title);
    }

    async shopByCategory(category)
    {
        await this.page.click(this.shopByCategoryIcon);
        const element = await this.page.locator(this.topCategoryList).filter({
                                                                hasText: category
                                                             });
        await element.click();
        await expect(this.page).toHaveTitle(category);
    }

}