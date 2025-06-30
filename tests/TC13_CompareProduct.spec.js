import {test,expect} from '@playwright/test'
import {CompareProductPage} from '../Pages/CompareProductPage'

let compare;

test.beforeEach('Login into app',async({page})=>{
    await page.goto('/');
})

test('validate user is able to compare products after login into app',async({page})=>{
    compare = new CompareProductPage(page,{itemBrand:['Apple','Apple'],itemName:['iPod Touch','iPod Shuffle']});
    await compare.loginIntoApp();
    await compare.compareItems();
})

test('validate user is able to compare products without login',async({page})=>{
    compare = new CompareProductPage(page,{itemBrand:['Apple','Apple'],itemName:['iPod Touch','iPod Shuffle']});
    await compare.compareItems();
})

test('validate user is unable to compare products without selecting them',async({page})=>{
     compare = new CompareProductPage(page);
     await compare.compareItemsWithoutSelectingItem();
})

test('validate user is able to add product to cart from comparison page',async({page})=>{
    compare = new CompareProductPage(page,{itemBrand:['Apple','Apple'],itemName:['iPod Touch','iPod Shuffle']});
    await compare.loginIntoApp();
    await compare.addToCartFromComparisonPage('iPod Touch');
})