import fs from 'node:fs/promises'
import path from 'path'
import { test } from '@playwright/test'

test('Updating json file',async()=>{
    const filePath = path.join(__dirname, '../TestData', 'User.json');
    //const directoryPath = path.join(__dirname, '../TestData');
    //const filePath = path.join(directoryPath, 'User.json');

    const data = await fs.readFile(filePath, 'utf-8');
    let jsonData = JSON.parse(data);
    jsonData.email  = 'abc@gmail.com';
    const updatedData = await JSON.stringify(jsonData, null, 2);
    await fs.writeFile(filePath, updatedData, 'utf-8');
    console.log('JSON file updated successfully.');
})