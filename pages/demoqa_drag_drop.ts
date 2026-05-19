import {Page, Locator} from '@playwright/test';
export class Demoqa_drag_drop {
    page: Page;
    source: Locator;
    target: Locator;
    constructor(page: Page) {
        this.page = page;
        this.source = page.locator('[id="draggable"]')
        this.target = page.locator('[id="simpleDropContainer"] [id="droppable"]')
    }
    public async drag_and_drop() {
        await this.source.dragTo(this.target);
    }
}