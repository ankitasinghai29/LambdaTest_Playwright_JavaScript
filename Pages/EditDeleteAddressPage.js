import { expect } from "@playwright/test";
import {MyAccountPage} from './MyAccountPage'

exports.EditDeleteAddressPage = class EditDeleteAddressPage{

    constructor(page)
    {
        this.page = page;
        this.addressRow = '//table[@class="table table-bordered table-hover"]/tbody/tr';
        this.editButton = '//a[text()="Edit"]';
        this.deleteButton = '//a[text()="Delete"]';
        this.addressCity = '#input-city';
        this.addressSate = '#input-zone';
        this.continueButton = '[value="Continue"]';
        this.successMsg = '//div[contains(text(),"successfully")]';
        this.warningMsg = '.text-danger';
        this.addressWarning = '//div[contains(text(),"Warning")]';
        this.pageVisibleTitle = 'Address Book Entries';
        this.myAccount;
    }

    async getAddressBookPage()
    {
        this.myAccount = new MyAccountPage(this.page);
        await this.myAccount.getAddressBookPage();
    }

    async searchAddress(searchValue)
    {
        await this.getAddressBookPage();
        const matchedrow = await this.page.locator(this.addressRow)
                                                  .filter({
                                                            has: this.page.locator('td'),
                                                            hasText: searchValue
                                                          });
        return matchedrow.locator('td');
    }

    async deleteAddress(searchValue)
    {
        const matchedRow = await this.searchAddress(searchValue);
        await matchedRow.locator(this.deleteButton).click();
        await expect(this.page.locator(this.successMsg)).toBeVisible();
    }

    async deleteAddressIfOnlyOneAvailable(searchValue)
    {
        const matchedRow = await this.searchAddress(searchValue);
        await matchedRow.locator(this.deleteButton).click();
        await expect(this.page.locator(this.addressWarning)).toBeVisible();
    }

    async editAddressWithValidData(searchValue)
    {
        const matchedRow = await this.searchAddress(searchValue);
        await matchedRow.locator(this.editButton).click();
        await this.page.locator(this.addressSate).selectOption('Madhya Pradesh');
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.successMsg)).toBeVisible();
    }

    async editAddressWithBlankField(searchValue)
    {
        const matchedRow = await this.searchAddress(searchValue);
        await matchedRow.locator(this.editButton).click();
        await this.page.locator(this.addressCity).clear();
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.warningMsg)).toBeVisible();
        await expect(this.page.getByText(this.pageVisibleTitle)).toBeVisible();
    }
}