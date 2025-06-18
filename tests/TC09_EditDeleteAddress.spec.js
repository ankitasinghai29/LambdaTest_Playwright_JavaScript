import {test,expect} from '@playwright/test'
import {EditDeleteAddressPage} from '../Pages/EditDeleteAddressPage'

let editDeleteAddress;

test.beforeEach('login into app',async({page})=>{
    await page.goto('/');
    editDeleteAddress = new EditDeleteAddressPage(page);
})

test('validate user is able to edit address',async({page})=>{
    await editDeleteAddress.editAddressWithValidData('Angus');
    await expect(page).toHaveTitle('Address Book');
})

test('validate user is unable to edit address with blank field',async({page})=>{
    await editDeleteAddress.editAddressWithBlankField('Angus');
})

test('validate user is able to delete the address',async({page})=>{
    await editDeleteAddress.deleteAddress('Angus');
    await expect(page).toHaveTitle('Address Book');
})


test('validate user is unable to delete address if only one available',async({page})=>{
    await editDeleteAddress.deleteAddressIfOnlyOneAvailable('Ankita');
})
