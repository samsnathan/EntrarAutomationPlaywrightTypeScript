import { Locator, Page } from "playwright";

export class LoginPage{
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly invalidCredentialsPopup: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.invalidCredentialsPopup = page.getByText('Invalid Username or Password.');

    }

    async goToEntrar(){
        await this.page.goto('https://entrar.in/login/login');
    }

    async loginEntrar(username:string, password:string){
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click(); 
    }
}
