import { Page, Locator } from "@playwright/test";
export class Myntra_product_detailpage {
    page: Page;
    product: Locator;
    size_s: Locator;
    size_l: Locator;
    add_to_bag: Locator;
    constructor(page: Page) {
        this.page = page;
        this.product = page.locator('[class="pdp-name"]');
        this.size_s = page.getByRole('button', { name: 'S', exact: true });
        this.size_l = page.getByRole('button', { name: 'L', exact: true });
        this.add_to_bag = page.getByRole('button', { name: 'ADD TO BAG' }); 
    }
    public async selectSizeAndAddToBag(size: string) {
        if (size === 'S') {
            await this.size_s.click();
        } else if (size === 'L') {
            await this.size_l.click();
        }
        //await this.page.pause();
       // await this.add_to_bag.click();
    }
}
