import {test,expect} from '@playwright/test'
import {AddToCartPage} from '../Pages/AddToCartPage'

let addItem;

test.beforeEach('Login into app',async({page})=>{
    await page.goto('/');
})

test('validate user is able to add item in the cart',async({page})=>{
    addItem = new AddToCartPage(page,{itemBrand:'Apple',itemName:'iPod Shuffle'});
    await addItem.loginIntoApp();
    await addItem.clickOnCartIcon();
    await addItem.getSucessMessage();
    await addItem.checkProductQuantityInCart('x1');
})

test('validate user is able to update item quantity into cart',async({page})=>{
    addItem = new AddToCartPage(page,{itemName:'iPod Shuffle'});
    await addItem.loginIntoApp();
    await addItem.updateItemQuantityInCart('4');
})

test('validate user is able to delete item from cart',async({page})=>{
    addItem = new AddToCartPage(page,{itemName:'iPod Shuffle'});
    await addItem.loginIntoApp();
    await addItem.deleteItemFromCart();
})

test('validate user is ubable to get cart list without login',async({page})=>{
    addItem = new AddToCartPage(page);
    await addItem.clickOnCartWithoutLogin();
})

test('validate user is able to add item to cart from wishlist',async({page})=>{
    addItem = new AddToCartPage(page,{itemName:'iPod Touch'});
    await addItem.loginIntoApp();
    await addItem.addItemToCartFromWishllist();
    await addItem.getSucessMessage();
    await addItem.checkProductQuantityInCart('x1');
})