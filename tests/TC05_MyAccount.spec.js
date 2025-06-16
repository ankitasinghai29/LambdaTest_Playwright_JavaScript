import {test,expect} from '@playwright/test'
import {MyAccountPage} from '../Pages/MyAccountPage'

let myAccount;

test.beforeEach('Launching the website',async({page})=>{
    await page.goto('/');
    myAccount = new MyAccountPage(page);
})

test('validate user is able to get MyAccount Page After Login',async({page})=>{
    await myAccount.getMyAccountPage();
    await expect(page).toHaveTitle('My Account');
})

test('validate user is able to get edit account page',async({page})=>{
    await myAccount.getEditAccountPage();
    await expect(page).toHaveTitle('My Account Information');
})

test('validate user is able to get wishlist page',async({page})=>{
    await myAccount.getWishlistPage();
    await expect(page).toHaveTitle('My Wish List');
})

test('validate user is able to get Order history page',async({page})=>{
    await myAccount.getOrderHistoryPage();
    await expect(page).toHaveTitle('Order History');
})

test('validate user is able to get Address Book page',async({page})=>{
    await myAccount.getAddressBookPage();
    await expect(page).toHaveTitle('Address Book');
})

test.afterEach('Logout from application',async(page)=>{
    await myAccount.logoutFromApp();
})