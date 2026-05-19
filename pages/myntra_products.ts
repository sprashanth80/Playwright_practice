import { Page, Locator } from '@playwright/test';
export class Myntra_products {
    page: Page;
    product: Locator;
    constructor(page: Page) {
        this.page = page;       
        this.product = page.locator('[class="product-price"]');
    }
    public async openProduct(index: number) {
        const newpagePromise = this.page.waitForEvent('popup');
        await this.product.nth(index).click();
        const newPage = await newpagePromise;
        return newPage;
    }
}