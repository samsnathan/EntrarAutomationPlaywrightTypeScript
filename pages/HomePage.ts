import { Locator, Page} from "@playwright/test";


export class HomePage{
    readonly page: Page;
    readonly homePageTitleText: Locator;

constructor(page:Page){
    this.page = page;
    this.homePageTitleText = page.getByRole('link', { name: 'Class Diary' });

}

}