import { expect } from 'playwright/test';
import {test} from '../fixtures/hooks-fixture';

//import { LoginPage} from '../pages/LoginPage';

//import CommonUtils from '../utils/CommonUtils';

// test.beforeEach('Before Each Hook',async({loginPage})=>{
//     await loginPage.goToEntrar();

// })
// test.afterEach('Before Each Hook',async({userPage})=>{
//     await userPage.logout();

// })

//test('Login Page 1',async({page, loginPage, userPage})=>{
test('Login Page 1',async({page,gotoUrl})=>{

    //const commonUtilsObj = new CommonUtils();
    //commonUtilsObj.encryptData("ssss")

    // const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    // const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    //await loginPage.goToEntrar();
    console.log(await page.title());

    //await userPage.logout()
    //console.log(await page.title());
    
    //await loginPage.loginEntrar(decryptedUserName,decryptedPassword);
    
    // console.log(await page.title());
    // console.log(process.env.BASE_URL);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.PASSWORD);


})

test('Login Page 2',async({page,gotoUrl})=>{
    await expect(page).toHaveTitle('School/College Management, Software & School/College ERP - Entrar');

})

test('Login Page 3',async({page,gotoUrl,logout})=>{
    await expect(page).toHaveTitle('School/College Management, Software & School/College ERP - Entrar');

})