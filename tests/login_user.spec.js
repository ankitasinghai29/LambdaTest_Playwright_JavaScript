import test from "@playwright/test";
//require('dotenv').config();


test('Login Test',async({page})=>{
 await page.goto("https://www.facebook.com/");
 console.log("USERNAME:"+`${process.env.USER}`);
 console.log("PASSWORD:"+ `${process.env.PASSWORD}`);
 await page.locator('#email').fill(`${process.env.USER}`);
 await page.locator('#pass').fill(`${process.env.PASSWORD}`);

});