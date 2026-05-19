import { Utils } from "./utils";
import { Page, Locator } from "@playwright/test";
export class Demoqa_alerts {
    page: Page;
    utils: Utils;
    alert_button: Locator;
    alert_confirm_button: Locator;
    alert_prompt_button: Locator;
    constructor(page: Page) {
        this.page = page;
        this.utils = new Utils(page);
        this.alert_button = page.locator('[id="alertButton"]');
        this.alert_confirm_button = page.locator('[id="confirmButton"]');
        this.alert_prompt_button = page.locator('[id="promtButton"]');
    }
    public async clickAlertButton() {
        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        }); 
        await this.alert_button.click();
        await this.page.screenshot({ path: 'alert.png' });
    }
    public async clickAlertConfirmButton() {
        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.dismiss();
        }); 
        

        await this.alert_confirm_button.click();
    }
    public async clickAlertPromptButton() {
        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept("Accepted");
        }); 
        await this.alert_prompt_button.click();
    }
}