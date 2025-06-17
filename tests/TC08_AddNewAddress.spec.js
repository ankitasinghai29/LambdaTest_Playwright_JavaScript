import {test,expect} from '@playwright/test'
import {AddNewAddressPage} from '../Pages/AddNewAddressPage'

let newAddress;

test.beforeEach('Launching the website',async({page})=>{
    await page.goto('/');
    newAddress = new AddNewAddressPage(page);
})

test('validate user is able to add new address',async({page})=>{
    await newAddress.addNewAddress();
    await expect(page).toHaveTitle('Address Book');
})

test.fail('validate user is unable to add new address with blank fields',async({page})=>{
    await newAddress.addNewAddressWithBlankField();
    //await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/address');
})

test.afterEach('Logout from application',async(page)=>{
    await newAddress.logoutFromApp();
})