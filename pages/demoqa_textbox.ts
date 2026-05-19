import { Locator, Page } from '@playwright/test';
export class Demoqa_textbox {
    page: Page;
    fullname: Locator;
    email: Locator;
    currentaddress: Locator;
    permanentaddress: Locator;  
    submitbutton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.fullname = page.locator('[id="userName"]');
        this.email = page.locator('[id="userEmail"]');
        this.currentaddress = page.locator('[id="currentAddress"]');
        this.permanentaddress = page.locator('[id="permanentAddress"]');
        this.submitbutton = page.locator('[id="submit"]');
    }
    public async fill_form(fullname: string, email: string, currentaddress: string, permanentAddress: string) {
        await this.fullname.fill(fullname);
        await this.email.fill(email);
        await this.currentaddress.fill(currentaddress);
        await this.permanentaddress.fill(permanentAddress);
        await this.permanentaddress.clear();
        await this.fullname.click();
        await this.page.keyboard.press('Meta+a');
        await this.page.keyboard.press('Meta+c');
        await this.permanentaddress.click();
        await this.page.keyboard.press('Meta+v');
        await this.submitbutton.click();
    }
}