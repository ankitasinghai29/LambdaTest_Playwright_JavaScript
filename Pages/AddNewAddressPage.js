import { expect } from '@playwright/test'
import {MyAccountPage} from './MyAccountPage'
import {faker} from '@faker-js/faker'

exports.AddNewAddressPage = class AddNewAddressPage{
    constructor(page)
    {
        this.page = page;
        this.newButton = '//a[text()="New Address"]';
        this.firstname = '#input-firstname';
        this.lastname = '#input-lastname';
        this.address = '#input-address-1';
        this.city = '#input-city';
        this.postcode = '#input-postcode';
        this.country = '#input-country';
        this.state = '#input-zone';
        this.continueButton = '//input[@value="Continue"]';
        this.warningMsg = '.text-danger';
        this.pageVisibleTitle = 'Address Book Entries';
        this.myAccount;
    }

    //checking the visibility of element (genralize function)
    async checkElementVisibilty(){
        await expect(this.page.locator(this.firstname)).toBeVisible();
        await expect(this.page.locator(this.lastname)).toBeVisible();
        await expect(this.page.locator(this.address)).toBeVisible();
        await expect(this.page.locator(this.city)).toBeVisible();
        await expect(this.page.locator(this.postcode)).toBeVisible();
        await expect(this.page.locator(this.country)).toBeVisible();
        await expect(this.page.locator(this.state)).toBeVisible();
        await expect(this.page.locator(this.continueButton)).toBeVisible(); 
    } 

    async getAddressPage()
    {
        this.myAccount = new MyAccountPage(this.page);
        await this.myAccount.getAddressBookPage();
        await this.page.click(this.newButton);
    }

    async addNewAddress()
    {
        await this.getAddressPage();
        await this.checkElementVisibilty();
        const fname = faker.person.firstName();
        const lname = faker.person.lastName();
        const address = faker.location.street();
        const city = faker.location.city();
        const postcode = faker.location.zipCode();
        const country = 'India';
        const state = 'Karnataka';
        await this.page.fill(this.firstname,fname);
        await this.page.fill(this.lastname,lname);
        await this.page.fill(this.address,address);
        await this.page.fill(this.city,city);
        await this.page.fill(this.postcode,postcode);
        await this.page.locator(this.country).selectOption(country);
        await this.page.locator(this.state).selectOption(state);
        await this.page.click(this.continueButton);
    }

    async addNewAddressWithBlankField()
    {
        await this.getAddressPage();
        const fname = faker.person.firstName();
        const lname = faker.person.lastName();
        const address = faker.location.street();
        //const city = faker.location.city();
        const postcode = faker.location.zipCode();
        const country = 'India';
        const state = 'Karnataka';
        await this.page.fill(this.firstname,fname);
        await this.page.fill(this.lastname,lname);
        await this.page.fill(this.address,address);
        //await this.page.fill(this.city,city);
        await this.page.fill(this.postcode,postcode);
        await this.page.locator(this.country).selectOption(country);
        await this.page.locator(this.state).selectOption(state);
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.warningMsg)).toBeVisible();
        await expect(this.page.getByText(this.pageVisibleTitle)).toBeVisible();
    }

    async logoutFromApp()
    {
        await this.myAccount.logoutFromApp();
    }
}