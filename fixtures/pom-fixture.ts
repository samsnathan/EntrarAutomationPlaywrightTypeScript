import {test as baseTest} from "@playwright/test";
import { LoginPage} from '../pages/LoginPage';
import { HomePage } from "../pages/HomePage";
import { UserPage } from "../pages/UserPage";

type PomFixtureType = {
    loginPage: LoginPage;
    homePage: HomePage;
    userPage: UserPage;

}

export const test = baseTest.extend<PomFixtureType>({
    loginPage: async({page},use)=>{
        await use(new LoginPage(page));
    },

    homePage: async({page},use)=>{
        await use(new HomePage(page));
    },

    userPage: async({page},use)=>{
        await use(new UserPage(page));

    }

})