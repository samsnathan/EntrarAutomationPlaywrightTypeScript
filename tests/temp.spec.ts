import {test} from '../fixtures/common-fixture';

//import CommonUtils from '../utils/CommonUtils';

test('Login Page',async({page, loginPage, commonUtils})=>{

    //const commonUtilsObj = new CommonUtils();
    //commonUtilsObj.encryptData("ssss")

    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.goToEntrar();
    await loginPage.loginEntrar(decryptedUserName,decryptedPassword);
    
    // console.log(await page.title());
    // console.log(process.env.BASE_URL);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.PASSWORD);


})
