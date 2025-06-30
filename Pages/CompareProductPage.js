import { expect } from '@playwright/test'
import { HeaderSectionPage } from './HeaderSectionPage'
import { MyAccountPage } from './MyAccountPage'
import { error } from 'console';

exports.CompareProductPage = class CompareProductPage {

    constructor(page, { itemBrand = [], itemName = [] } = {}) {
        this.page = page;
        //itemBrand and itemName are optional array if not passed then consider as empty array
        this.itemBrand = itemBrand;
        this.itemName = itemName;
        this.itemBlocks = '//div[@id="entry_212439"]/div/div';
        this.itemImage;  //pass according to the array value
        this.addToCompareIcon = '//button[@title="Compare this Product"]/i';
        this.successMsg = '//p[contains(text(),"Success")]';
        this.compareLink = '//a[contains(text(),"Product Compare")]';
        this.compareTable = '//table[@class="table table-responsive table-bordered"]/tbody';
        this.emptyComparisonListMsg = 'You have not chosen any products to compare.';
        this.addToCartButton = '//input[@value="Add to Cart"]';
        this.matchedColumn=0;
        this.myAccount = new MyAccountPage(this.page);
        this.header = new HeaderSectionPage(this.page);
        
    }

    async loginIntoApp() {
        await this.myAccount.loginIntoApp();
    }

    async addItemToCompare(itemBrand, itemName, itemImage) {
        await this.header.getBrandItemsUnderMegaMenu(itemBrand);
        //identify the product on the page by searching its image entitled by itemName
        const matchedItemBlock = this.page.locator(this.itemBlocks)
            .filter({
                has: this.page.locator(itemImage),
                hasText: itemName
            })
        await this.page.locator(itemImage).hover();
        await this.page.waitForTimeout(10000);
        await matchedItemBlock.locator(this.addToCompareIcon).click();
        await this.page.waitForTimeout(3000);
        await expect(this.page.locator(this.successMsg)).toBeVisible();
    }

    async compareItems(options={}) {
        for (let i = 0; i < this.itemName.length; i++) {
            this.itemImage = `(//img[@title="${this.itemName[i]}"])[1]`;
            await this.addItemToCompare(this.itemBrand[i], this.itemName[i], this.itemImage);
        }

        const random = Math.floor(Math.random() * 2) + 1;
        if (random == 1) {
            await this.page.click(this.compareLink);
        }
        else {
            await this.header.clickOnCompareIcon();
        }
        await expect(this.page).toHaveTitle('Product Comparison');

        const table = await this.page.locator(this.compareTable).nth(0).locator('tr').nth(0);
        let item = options.itemToAdd ? options.itemToAdd : "Null";
        for (let i = 0; i < this.itemName.length; i++) {
            const retriveText = await table.locator('td').nth(i + 1).locator('a').locator('strong').innerText();
            //const retriveText = await table.locator(this.tableTd).nth(i+1).locator(this.tableText).innerText();
            await expect(retriveText).toBe(this.itemName[i]);
            if(retriveText==item)
            {
                this.matchedColumn = i+1;
            }  
        }
        

    }

    async addToCartFromComparisonPage(item)
    {
        await this.compareItems({itemToAdd:item});
        const table2 = await this.page.locator(this.compareTable).nth(1).locator('tr').locator('td').nth(this.matchedColumn);
        console.log(table2);
        await table2.locator(this.addToCartButton).click();
        await expect(this.page.locator(this.successMsg)).toBeVisible();
    }

    
    async compareItemsWithoutSelectingItem()
    {
        await this.header.clickOnCompareIcon();
        await expect(this.page).toHaveTitle('Product Comparison');
        await expect(this.page.getByText(this.emptyComparisonListMsg)).toBeVisible();

    }
}
