import {test,expect} from '@playwright/test'
import {PlaceOrderPage} from '../Pages/PlaceOrderPage'
import { pl } from '@faker-js/faker';

let placeOrder;

test.beforeEach('Login into app',async({page})=>{
    await page.goto('/');
})

test.skip('validate user is able to place order on existing address',async({page})=>{
    placeOrder = new PlaceOrderPage(page);
    await placeOrder.loginIntoApp();
    await placeOrder.placeOrderOnExistingAddress();
})

test.skip('validate user is able to place order on new address',async({page})=>{
    placeOrder = new PlaceOrderPage(page);
    await placeOrder.loginIntoApp();
    await placeOrder.placeOrderOnNewAddress();
})

test('validate user is able to place order on different shipping and billing address',async({page})=>{
    placeOrder = new PlaceOrderPage(page);
    await placeOrder.loginIntoApp();
    await placeOrder.placeOrderOnDifferentAddress();
})

