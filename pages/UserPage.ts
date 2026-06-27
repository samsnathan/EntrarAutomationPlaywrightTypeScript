import { Locator, Page} from '@playwright/test';


export class UserPage{
    readonly page: Page;
    readonly userMenuButton: Locator;
    readonly logoutButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.userMenuButton = page.locator('.user-profile-img');
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    async logout(){
        this.userMenuButton.click();
        this.logoutButton.click();
    }
}


