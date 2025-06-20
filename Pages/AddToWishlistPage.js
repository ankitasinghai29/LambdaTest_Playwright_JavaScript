import {HeaderSectionPage} from './HeaderSectionPage'
import {MyAccountPage} from './MyAccountPage'
import { expect } from '@playwright/test';

exports.AddToWishlistPage = class AddToWishlistPage{

    //constructor with different paramenters options
    constructor(page,options={})
    {
        this.page = page;
        //if itemBrand is passed during object creation to the constructor then use that value otherwise null
        this.itemBrand = options.itemBrand ? options.itemBrand : "Null";
        //if itemName is passed during object creation to the constructor then use that value otherwise null
        this.itemName = options.itemName ? options.itemName : "Null";
        this.wishlistButton = '(//button[@title="Add to Wish List"]/i[2])[1]';
        this.itemBlocks = '//div[@id="entry_212439"]/div/div';
        this.itemImage = `(//img[@title="${this.itemName}"])[1]`;
        this.wishlistIcon = '//button[@title="Add to Wish List"]';
        this.successMsg = '//p[contains(text(),"Success")]';
        this.successWishlistModifyMsg = '//div[contains(text(),"Success")]';
        this.wishlistTable = '//table[@class="table table-hover border"]/tbody/tr';
        this.loginNotification = '#notification-box-top';
        this.header = new HeaderSectionPage(this.page);
        this.myAccount = new MyAccountPage(this.page);
    }

    async loginIntoApp()
    {
        await this.myAccount.loginIntoApp();
    }

    async clickOnWishlistIcon()
    {
        const random = Math.floor(Math.random() * 2) + 1;
        if(random==1)
        {
            await this.header.getItemUnderMegaMenu(this.itemBrand,this.itemName);
            await this.page.waitForTimeout(10000);
            await this.page.click(this.wishlistButton);
            await this.page.waitForTimeout(5000);
        }
        else
        {
            await this.header.getBrandItemsUnderMegaMenu(this.itemBrand);
            //identify the product on the page by searching its image entitled by itemName
            const matchedItemBlock = this.page.locator(this.itemBlocks)
                                                            .filter({
                                                                        has:this.page.locator(this.itemImage),
                                                                        hasText:this.itemName
                                                                    })
            await this.page.locator(this.itemImage).hover();
            await this.page.waitForTimeout(10000);
            await matchedItemBlock.locator(this.wishlistIcon).click();
        }
        
        await this.page.waitForTimeout(3000);  
    }

    async getSucessMessage()
    {
        await expect(this.page.locator(this.successMsg)).toBeVisible();
    }

    async removeItemFromWishlist()
    {
        await this.myAccount.getWishlistPage();
        const matchedRow = await this.page.locator(this.wishlistTable).filter({
                                                                                has:this.page.locator('td'),
                                                                                hasText: this.itemName
                                                                             })
        await matchedRow.locator('td a i').click();
        await expect(this.page.locator(this.successWishlistModifyMsg)).toBeVisible();
    }

    async gotoWishlistWithoutLogin()
    {
        await this.header.clickOnWishlistIcon();
        await expect(this.page).toHaveTitle('Account Login');
    }

    async getLoginNotification()
    {
        await expect(this.page.locator(this.loginNotification)).toBeVisible();
    }
}