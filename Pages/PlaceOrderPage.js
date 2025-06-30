import {MyAccountPage} from './MyAccountPage'
import {HeaderSectionPage} from './HeaderSectionPage'
import { expect } from '@playwright/test'

exports.PlaceOrderPage = class PlaceOrderPage{
    constructor(page)
    {
        this.page = page;
        this.checkoutButtonOnPopUp = '(//div[@id="entry_217849"]/div/a)[2]';
        //this.checkoutButtonOnPage = '//a[text()="Checkout"]';
        this.existingAddressRadioButton = '(//label[text()="I want to use an existing address"])[1]';
        this.newAddressRadioButton = '(//label[text()="I want to use a new address"])[1]';
        this.addressDropDown = '//select[@name="address_id"]';
        this.termsConditionCheckbox = '(//label[text()="I have read and agree to the "])[2]';
        this.continueButton = '//button[normalize-space()="Continue"]';
        this.confirmOrderButton = 'button[id="button-confirm"]';
        this.continueShoppingButton = '//a[text()="Continue"]';

        //locators of new address
        this.firstName = '#input-payment-firstname';
        this.lastName = '#input-payment-lastname';
        this.address = '#input-payment-address-1';
        this.city = '#input-payment-city';
        this.country = '#input-payment-country';
        this.state = '#input-payment-zone';

        //if have different shipping and billing address
        this.differentShippingAddressCheckBox = '//label[contains(text(),"delivery")]';
        this.shippingAddressDropDown = '//select[@name="shipping[address_id]"]';

        //if item is out of stock or not available
        this.notAvailableMsg = '//div[contains(text(),"not available")]';

        //if empty cart list
        this.emptyCartListMsg = 'Your shopping cart is empty!';
        this.emptyCartMsgOnPage = '(//p[text()="Your shopping cart is empty!"])[1]';

        this.myAccount = new MyAccountPage(this.page);
        this.header = new HeaderSectionPage(this.page);

    }

    async loginIntoApp() {
        await this.myAccount.loginIntoApp();
    }

    async checkoutProcess()
    {
       await this.page.check(this.termsConditionCheckbox);
       await this.page.click(this.continueButton);
       await expect(this.page).toHaveTitle('Confirm Order');
       await this.page.click(this.confirmOrderButton);
       await expect(this.page).toHaveTitle('Your order has been placed!');
       await this.page.click(this.continueShoppingButton);
       await expect(this.page).toHaveTitle('Your Store');
    }

    async placeOrderOnExistingAddress()
    {
       await this.header.clickOnCartIcon();
       await this.page.click(this.checkoutButtonOnPopUp);
       await expect(this.page).toHaveTitle('Checkout');
       await this.page.check(this.existingAddressRadioButton);
       await this.page.selectOption(this.addressDropDown,{index:1});
       await this.checkoutProcess();
    }

    async placeOrderOnNewAddress()
    {
       await this.header.clickOnCartIcon();
       await this.page.click(this.checkoutButtonOnPopUp);
       await expect(this.page).toHaveTitle('Checkout');
       await this.page.click(this.newAddressRadioButton);
       await this.enterNewAddressDetails();
       await this.checkoutProcess();
    }

    async enterNewAddressDetails()
    {
        await this.page.fill(this.firstName,'Bhavika');
        await this.page.fill(this.lastName,'Jain');
        await this.page.fill(this.address,'Marathalli');
        await this.page.fill(this.city,'Chennai');
        await this.page.locator(this.country).selectOption('India');
        await this.page.locator(this.state).selectOption('Tamil Nadu');
    }

    async placeOrderOnDifferentShippingAndBillingAddress()
    {
       await this.header.clickOnCartIcon();
       await this.page.click(this.checkoutButtonOnPopUp);
       await expect(this.page).toHaveTitle('Checkout');
       await this.page.check(this.existingAddressRadioButton);
       //select billing address
       await this.page.selectOption(this.addressDropDown,{index:1});
       //click on different address checkbox
       await this.page.uncheck(this.differentShippingAddressCheckBox);
       //select different shipping address
       await this.page.selectOption(this.shippingAddressDropDown,{index:2});
       await this.checkoutProcess();
    }

    async placeOrderOutOfStock()
    {
       await this.header.clickOnCartIcon();
       await this.page.click(this.checkoutButtonOnPopUp);
       await expect(this.page).toHaveTitle('Shopping Cart');
       await expect(this.page.locator(this.notAvailableMsg)).toBeVisible();
       await expect(this.page).toHaveTitle('Checkout');
    }

    async placeOrderWithEmptyCart()
    {
       await this.header.clickOnCartIcon();
       await expect(this.page.getByText(this.emptyCartListMsg)).toBeVisible();
       await this.page.click(this.checkoutButtonOnPopUp);
       await expect(this.page).toHaveTitle('Shopping Cart');
       await expect(this.page.locator(this.emptyCartMsgOnPage)).toBeVisible();
       await expect(this.page).toHaveTitle('Checkout');
    }
}