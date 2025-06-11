import { expect } from '@playwright/test'
import {HeaderSectionPage} from './HeaderSectionPage'
import {faker} from '@faker-js/faker'
import fs from 'fs'
import path from 'path'

exports.RegisterUserPage = class RegisterUserPage{
    
    constructor(page)
    {
        this.page = page;
        this.continueButton = '[value="Continue"]';
        this.firstName = '#input-firstname';
        this.lastName = '#input-lastname';
        this.email = '#input-email';
        this.telephone = '#input-telephone';
        this.password = '#input-password';
        this.confirmPassword = '#input-confirm';
        this.privacyPolicy = '(//label[@class="custom-control-label"])[3]';
        this.warningMessage = '(//div[contains(.,"Warning")])[4]';
        this.mandatoryWarningMsg = '.text-danger';
    }

    //checking the visibility of element (genralize function)
    async checkElementVisibilty(){
        await expect(this.page.locator(this.firstName)).toBeVisible();
        await expect(this.page.locator(this.lastName)).toBeVisible();
        await expect(this.page.locator(this.email)).toBeVisible();
        await expect(this.page.locator(this.telephone)).toBeVisible();
        await expect(this.page.locator(this.password)).toBeVisible();
        await expect(this.page.locator(this.confirmPassword)).toBeVisible();
        await expect(this.page.locator(this.continueButton)).toBeVisible();
        await expect(this.page.locator(this.privacyPolicy)).toBeVisible();
    } 

    async generateRandomData()
    {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const telephone = faker.phone.number();
        const email = faker.internet.email();
        const password = Math.random().toString(36).slice(-8);
        return [firstName,lastName,telephone,email,password];
    }

    async fillRandomData(fname,lname,tele,email,pass)
    {
        await this.page.fill(this.firstName,fname);
        await this.page.fill(this.lastName,lname);
        await this.page.fill(this.telephone,tele);
        await this.page.fill(this.email,email);
        await this.page.fill(this.password,pass);
        await this.page.fill(this.confirmPassword,pass);
    }

    //Register new user with random data
    async registerNewUser()
    {
        const header = new HeaderSectionPage(this.page);
        await header.clickOnRegisterIcon();
        this.page.waitForTimeout(5000);
        this.checkElementVisibilty();
        const data = this.generateRandomData();
        this.fillRandomData(data[0],data[1],data[2],data[3],data[4]);
        await this.page.locator(this.privacyPolicy).check();
        await this.page.click(this.continueButton);

        const newUserData = {
                firstname: data[0],
                lastname: data[1],
                email: data[3],
                password: data[4],
                telephone: data[2]
            };
        
            const directoryPath = path.join(__dirname, '../TestData');
        
            const filePath = path.join(directoryPath, 'NewUser.json');
        
            const jsonData = JSON.stringify(newUserData, null, 2);
        
            fs.writeFileSync(filePath, jsonData);

    }

    async registerWithExistingUser()
    {
        const header = new HeaderSectionPage(this.page);
        await header.clickOnRegisterIcon();
        this.page.waitForTimeout(5000);
        const data = this.generateRandomData();
        this.fillRandomData(data[0],data[1],data[2],'anki123@gmail.com',data[4]);
        await this.page.locator(this.privacyPolicy).check();
        await this.page.click(this.continueButton);
        await expect(this.page.locator(this.warningMessage)).toBeVisible();
    }

    async registerWithoutCheckPolicy()
    {
        const header = new HeaderSectionPage(this.page);
        await header.clickOnRegisterIcon();
        this.page.waitForTimeout(5000);
        const data = this.generateRandomData();
        this.page.waitForTimeout(5000);
        this.fillRandomData(data[0],data[1],data[2],data[3],data[4]);
        this.page.waitForTimeout(5000);
        await this.page.click(this.continueButton);
        this.page.waitForTimeout(5000);
        await expect(this.page.locator(this.warningMessage)).toBeVisible();
    }

    async registerWithPartialData()
    {
        const header = new HeaderSectionPage(this.page);
        await header.clickOnRegisterIcon();
        this.page.waitForTimeout(5000);
        const data = await this.generateRandomData();
        console.log(data);
        await this.page.fill(this.firstName,data[0]);
        //await this.page.fill(this.lastName,data[1]);
        await this.page.fill(this.telephone,data[2]);
        //await this.page.fill(this.email,data[3]);
        await this.page.fill(this.password,data[4]);
        await this.page.fill(this.confirmPassword,data[4]);
        await this.page.locator(this.privacyPolicy).check();
        await this.page.click(this.continueButton);
        const noOfWarningMsg = this.page.locator(this.mandatoryWarningMsg);
        await expect(noOfWarningMsg).toHaveCount(2);
    }


}