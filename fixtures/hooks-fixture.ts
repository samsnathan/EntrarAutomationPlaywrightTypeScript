import {test as baseTest} from './common-fixture';

type HooksFixtureType = {
    gotoUrl: [any];
    logout: [any];
}

export const test = baseTest.extend<HooksFixtureType>({
    gotoUrl: async ({ loginPage }, use: (r?: any) => Promise<void>) => {
        await loginPage.goToEntrar();
        await use();
    },
        
    logout: async ({ userPage }, use: (r?: any) => Promise<void>) => {
        await use();
        await userPage.logout();
        userPage.page.close();
    }
})

export { expect } from 'playwright/test';
