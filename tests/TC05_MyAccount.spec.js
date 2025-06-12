import {test,expect} from '@playwright/test'
import {MyAccountPage} from '../Pages/MyAccountPage'

test('validate user is able to get MyAccount Page After Login',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const myAccount = new MyAccountPage(page);
    await myAccount.getMyAccountPage();
    await expect(page).toHaveTitle('My Account');
})

test('validate user is able to get edit account page',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const myAccount = new MyAccountPage(page);
    await myAccount.getEditAccountPage();
    await expect(page).toHaveTitle('My Account Information');
})

test('validate user is able to get wishlist page',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const myAccount = new MyAccountPage(page);
    await myAccount.getWishlistPage();
    await expect(page).toHaveTitle('My Wish List');
})

test('validate user is able to get Order history page',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const myAccount = new MyAccountPage(page);
    await myAccount.getOrderHistoryPage();
    await expect(page).toHaveTitle('Order History');
})

test('validate user is able to get Address Book page',async({page})=>{
    await page.goto('/');
    await page.waitForTimeout(5000);
    const myAccount = new MyAccountPage(page);
    await myAccount.getAddressBookPage();
    await expect(page).toHaveTitle('Address Book');
})