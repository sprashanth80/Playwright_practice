import { test, Locator, Page } from "@playwright/test";   
export class Demoqa_menu{
    page: Page;
    main_item2: Locator;
    sub_sub_list: Locator;
    sub_sub_item2: Locator
    constructor(page: Page) {
        this.page = page;
        this.main_item2 = page.getByRole('link', { name: 'Main Item 2' });
        this.sub_sub_list = page.getByRole('link', { name: 'SUB SUB LIST »' });
        this.sub_sub_item2 = page.getByRole('link', { name: 'Sub Sub Item 2' });
    }
    public async menu_selection() {
        await this.main_item2.hover();
        await this.sub_sub_list.hover();
        await this.sub_sub_item2.click();
    }
}