import { Locator, Page } from "@playwright/test";
export class Demoqa_buttons {
    page: Page;
    doubleclickme: Locator;
    rightclickme: Locator;
    clickme: Locator;
    constructor(page: Page) {
        this.page = page
        this.doubleclickme = page.locator('[id="doubleClickBtn"]')
        this.rightclickme = page.locator('[id="rightClickBtn"]')
        this.clickme = page.getByRole('button', { name: 'Click Me', exact: true })  
}
public async click_actions() {
    await this.doubleclickme.dblclick();
    await this.rightclickme.click({ button: 'right' });
    await this.clickme.click();
}
}