import {test, expect} from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json'

test.use({storageState: {
    cookies: [],
    origins: []
}})

test('[Login] Verify that the user cannot log in with an invalid user name ',async({gotoUrl, loginPage, commonUtils})=>{
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginEntrar(loginModuleData['wrong-user-name'], password);
    await expect(loginPage.invalidCredentialsPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();

})

test('[Login] Verify that the user cannot log in with an invalid password ',async({gotoUrl, loginPage, commonUtils})=>{
    const userName = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginEntrar(userName, loginModuleData['wrong-password']);
    await expect(loginPage.invalidCredentialsPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();

})

test('[Login] Verify that the user cannot log in with both an invalid user name and password ',async({gotoUrl, loginPage, commonUtils})=>{
    await loginPage.loginEntrar(loginModuleData['wrong-user-name'], loginModuleData['wrong-password']);
    await expect(loginPage.invalidCredentialsPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();

})
