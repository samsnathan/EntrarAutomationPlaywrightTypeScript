import {test} from '../fixtures/common-fixture'
import { expect } from 'playwright/test';

test('Global Setup for Auto Login',async({page, loginPage,homePage, commonUtils,userPage}) =>{
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.goToEntrar();
    await loginPage.loginEntrar(decryptedUserName, decryptedPassword);
    
    
    await page.waitForURL('https://entrar.in/');
    await(page.waitForTimeout(10000))
    await expect(homePage.homePageTitleText).toHaveText('Class Diary');



    await page.context().storageState({
         path: './authenticator/.auth/auth.json'
     })
    
    //await userPage.logout();

     //await expect(page.getByRole('heading', { name: 'DELHI PUBLIC SCHOOL -' })).toHaveText('DELHI PUBLIC SCHOOL -');
    //getByRole('heading', { name: 'DELHI PUBLIC SCHOOL -' })

})