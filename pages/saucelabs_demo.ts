import { Locator, Page, Expect, expect } from "@playwright/test";
export class Saucelabs_demo {
    page: Page;
    username: Locator;
    password: Locator;
    login_button: Locator;
    products: Locator;
    add_prod1: Locator;
    add_prod2: Locator;
    add_prod3: Locator;
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[id="user-name"]');
        this.password = page.locator('[id="password"]');
        this.login_button = page.locator('[id="login-button"]');
        this.products = page.locator('[data-test="title"]');
        this.add_prod1 = page.locator('[id="add-to-cart-sauce-labs-backpack"]');
        this.add_prod2 = page.locator('[id="add-to-cart-sauce-labs-bike-light"]');
        this.add_prod3 = page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }
    public async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login_button.click();
    }
    public async add_products_to_cart() {   
        await expect(this.products).toBeVisible();
        await this.page.waitForTimeout(5000);  //explicit wait to ensure products page is landed loaded before clicking add to cart buttons
        await this.add_prod1.click();
        await this.add_prod2.click();
        await this.add_prod3.click();
    }
}