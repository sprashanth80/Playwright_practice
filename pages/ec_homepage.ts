import { Utils } from "./utils";
import { Locator, Page } from "@playwright/test";
export class Ec_homepage {
    page: Page;
    close_popup: Locator;
    admin_link: Locator;
    signout_link: Locator;
    epicor_sidebar_button: Locator;
    epicor_lists_link: Locator;
    constructor(page: Page) {
        this.page = page;
        this.close_popup = page.getByRole('dialog', { name: 'Incoming Message' }).getByRole('button');
        this.admin_link = page.locator('[title="My Account"]');
        this.signout_link = page.locator('[title="Sign Out"]');
        this.epicor_sidebar_button = page.locator('[id="menu-epicor-common-epicor"]');
        this.epicor_lists_link = page.getByRole('link', { name: 'Lists', exact: true });
    }
    public async close_popup_message() {
        await this.page.waitForTimeout(5000);
        if (await this.close_popup.isVisible()) {
            await this.close_popup.click();
        }
    }
    public async signout() {
        await this.admin_link.click();
        await this.signout_link.click();            
}
public async navigate_to_epicor_lists() {
    await this.epicor_sidebar_button.click();
    await this.epicor_lists_link.click();       
}
}