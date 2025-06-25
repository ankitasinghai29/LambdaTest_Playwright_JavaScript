import { HeaderSectionPage } from './HeaderSectionPage'
import { MyAccountPage } from './MyAccountPage'
import { expect } from '@playwright/test'

exports.AddToCartPage = class AddToCartPage {

    constructor(page, options = {}) {
        this.page = page;
        //if itemBrand is passed during object creation to the constructor then use that value otherwise null
        this.itemBrand = options.itemBrand ? options.itemBrand : "Null";
        //if itemName is passed during object creation to the constructor then use that value otherwise null
        this.itemName = options.itemName ? options.itemName : "Null";
        this.itemBlocks = '//div[@id="entry_212439"]/div/div';
        this.itemImage = `(//img[@title="${this.itemName}"])[1]`;
        this.cartIcon = '//button[@title="Add to Cart"]/i';
        this.successMsg = '//p[contains(text(),"Success")]';
        this.editCartButton = '(//div[@id="entry_217849"]/div/a)[1]';
        this.cartListTable = 'table[class="table"] tbody tr';
        this.editCartListTable = 'table[class="table table-bordered"] tbody tr ';
        this.quantityInput = '(//input[@class="form-control"])[1]';
        this.updateButton = '//button[@title="Update"]';
        this.deleteButton = '//button[@class="btn btn-danger"]';
        this.successCartModifyMsg = '//div[contains(text(),"Success")]';
        this.emptyListMsg = 'Your shopping cart is empty!';
        this.wishlistTable = '//table[@class="table table-hover border"]/tbody/tr';
        this.myAccount = new MyAccountPage(this.page);
        this.header = new HeaderSectionPage(this.page);
    }

    async loginIntoApp() {
        await this.myAccount.loginIntoApp();
    }


    async clickOnCartIcon() {
        await this.header.getBrandItemsUnderMegaMenu(this.itemBrand);
        //identify the product on the page by searching its image entitled by itemName
        const matchedItemBlock = this.page.locator(this.itemBlocks)
            .filter({
                has: this.page.locator(this.itemImage),
                hasText: this.itemName
            })
        await this.page.locator(this.itemImage).hover();
        await this.page.waitForTimeout(10000);
        await matchedItemBlock.locator(this.cartIcon).click();
        
        await this.page.waitForTimeout(3000);  
    }

    
    async getSucessMessage()
    {
        await expect(this.page.locator(this.successMsg)).toBeVisible();
    }

    
    async getCartItem(cartTable)
    {
        const matchedRow = await this.page.locator(cartTable).filter({
                                                                                has:this.page.locator('td'),
                                                                                hasText: this.itemName
                                                                             });  
        return matchedRow;
    }

    async checkProductQuantityInCart(quantity)
    {
        await this.header.clickOnCartIcon();
        const item = await this.getCartItem(this.cartListTable);
        await expect(item.locator('td').nth(2)).toHaveText(quantity);
    }

    async updateItemQuantityInCart(quantity)
    {
        await this.header.clickOnCartIcon();
        await this.page.click(this.editCartButton);
        await expect(this.page).toHaveTitle('Shopping Cart');
        const item = await this.getCartItem(this.editCartListTable);
        const quantityBox = await item.locator('td').nth(3);
        await quantityBox.locator(this.quantityInput).fill(quantity);
        await quantityBox.locator(this.updateButton).click();
        await expect(this.page.locator(this.successCartModifyMsg)).toBeVisible();
    }

    async deleteItemFromCart()
    {
        await this.header.clickOnCartIcon();
        await this.page.click(this.editCartButton);
        await expect(this.page).toHaveTitle('Shopping Cart');
        const item = await this.getCartItem(this.editCartListTable);
        const quantityBox = await item.locator('td').nth(3);
        await quantityBox.locator(this.deleteButton).click();
    }

    async clickOnCartWithoutLogin()
    {
        await this.header.clickOnCartIcon();
        await expect(this.page.getByText(this.emptyListMsg)).toBeVisible();
    }

    async addItemToCartFromWishllist()
    {
        await this.header.clickOnWishlistIcon();
        //fetching matched item row from wishlist table
        const item = await this.getCartItem(this.wishlistTable);
        await item.locator('td button i').click();
        
    }

}