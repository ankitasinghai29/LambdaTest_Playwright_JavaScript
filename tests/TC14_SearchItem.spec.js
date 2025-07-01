import { test,expect } from "@playwright/test";
import {HeaderSectionPage} from '../Pages/HeaderSectionPage'
import { he } from "@faker-js/faker";

let header;

test.beforeEach('launch app',async({page})=>{
    await page.goto('/');
})

test('validate user is able to search item with specified category',async({page})=>{
    header = new HeaderSectionPage(page);
    await header.searchProduct({item:"Apple",category:"Desktops"});
    //await header.searchProduct({item:"Apple"});
    //await header.searchProduct({category:"Desktops"});
})

test('validate user is able to search item then select category on result page',async({page})=>{
    header = new HeaderSectionPage(page);
    await header.searchProduct({item:"Apple"});
    await header.selectCategoryOnSearchPage('Desktops');
})

test('validate user is able to give keyword from search result page',async({page})=>{
    header = new HeaderSectionPage(page);
    await header.searchProduct({category:"Desktops"});
    await header.enterKeywordOnSearchPage('HTC');
})

test('validate user is able to shop product by top category menu',async({page})=>{
     header = new HeaderSectionPage(page);
     await header.shopByCategory('Software');
})