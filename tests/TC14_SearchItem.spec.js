import { test,expect } from "@playwright/test";
import {HeaderSectionPage} from '../Pages/HeaderSectionPage'

let header;

test.beforeEach('launch app',async({page})=>{
    await page.goto('/');
})

test.skip('validate user is able search item',async({page})=>{
    header = new HeaderSectionPage(page);
    await header.searchProduct('Apple');
})

test('validate user is able to search item within category',async({page})=>{
    header = new HeaderSectionPage(page);
    await header.searchProduct({item:"Apple",category:"Desktops"});
    //await header.searchProduct({item:"Apple"});
    //await header.searchProduct({category:"Desktops"});
})