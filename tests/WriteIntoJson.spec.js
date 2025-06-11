import { test } from '@playwright/test'
import { dir } from 'console';
import fs from 'fs'
import path from 'path'
const { faker } = require('@faker-js/faker');

test('write data into json', async ({ page }) => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const password = Math.random().toString(36).slice(-8);

    const dataToWrite = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password
    };

    const directoryPath = path.join(__dirname, '../TestData');

    const filePath = path.join(directoryPath, 'User.json');

    const jsonData = JSON.stringify(dataToWrite, null, 2);

    fs.writeFileSync(filePath, jsonData);

    console.log(`Data written to ${filePath}`);
})