import {test} from '../fixtures/common-fixture'
import { expect } from 'playwright/test';

test('Global Setup for Auto Login',async({page, loginPage,homePage, commonUtils}) =>{
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    //await loginPage.goToEntrar();
    await loginPage.loginEntrar(decryptedUserName, decryptedPassword);
    // await page.waitForURL('https://entrar.in/');


    // await expect(homePage.homeTitleText).toHaveText('ENTRAR');

    // await page.context().storageState({
    //     path: './authenticator/.auth/auth.json'
    // })
})