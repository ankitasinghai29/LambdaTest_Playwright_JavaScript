import {test,expect} from '@playwright/test'
import {AddToWishlistPage} from '../Pages/AddToWishlistPage'

 let addItem;

test.beforeEach('Login into app',async({page})=>{
    await page.goto('/');
})

test('validate user is able to add item to the wishlist',async({page})=>{
    addItem = new AddToWishlistPage(page,{itemBrand:'Apple',itemName:'iPod Shuffle'});
    await addItem.loginIntoApp();
    await addItem.clickOnWishlistIcon();
    await addItem.getSucessMessage();
})

test('validate user is able to remove item from wishlist from item page',async({page})=>{
    addItem = new AddToWishlistPage(page,{itemName:'iPod Shuffle'});
    await addItem.removeItemFromWishlist();
   
})

test.fail('validate user is unable to see wishlist without login',async({page})=>{
     addItem = new AddToWishlistPage(page);
     await addItem.gotoWishlistWithoutLogin();
     await expect(page).toHaveTitle('My Wish List');
})

test('validate user is unable to add item to the wishlist',async({page})=>{
    addItem = new AddToWishlistPage(page,{itemBrand:'Apple',itemName:'iPod Shuffle'});
    await addItem.clickOnWishlistIcon();
    await addItem.getLoginNotification();
})