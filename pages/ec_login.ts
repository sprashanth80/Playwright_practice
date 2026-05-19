import { Locator, Page, Expect, expect } from '@playwright/test';
export class Ec_login {
    page: Page;
    username: Locator;
    password: Locator;
    signin_button: Locator;
    dashboard: Locator;
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[id="username"]')
        this.password = page.locator('[id="login"]')
        this.signin_button = page.getByRole('button', { name: 'Sign in' })
        this.dashboard = page.getByRole('heading', { name: 'Dashboard' })
        
    }
    public async login(username: string, password: string) {
        await expect.soft(this.username).not.toBeVisible();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signin_button.click();
        await expect(this.dashboard).toMatchAriaSnapshot
        await expect(this.dashboard).toHaveCount(1);
        let list = this.dashboard.locator('options');

    }
}
