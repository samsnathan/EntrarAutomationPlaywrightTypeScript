import { Locator, Page } from "playwright";

export class LoginPage{
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    
    constructor(page:Page){
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })

    }

    async goToEntrar(){
        await this.page.goto('https://entrar.in/login/login');
        // console.log('goToEntrar()')
    }

    async loginEntrar(username:string, password:string){
        // console.log('loginEntrar - '+ username)
        // console.log('loginEntrar - '+ password)

        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click(); 
    }
}
