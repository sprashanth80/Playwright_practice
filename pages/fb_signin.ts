import { Locator, Page } from "@playwright/test";

export class Fb_signin {
    page: Page;
    emailaddress: Locator;
    password: Locator;
    loginbutton: Locator;
    forgottenpassword: Locator;
    createnewaccount: Locator;
        constructor(page) {
        this.page = page;
        this.emailaddress = page.locator('[name="email"]') 
        this.password = page.locator('[name="pass"]')
        this.loginbutton = page.getByRole('button', { name: 'Log in' })
        this.forgottenpassword = page.getByRole('link', { name: 'Forgotten password?' })
        this.createnewaccount = page.getByRole('link', { name: 'Create new account' }) 
      }
}