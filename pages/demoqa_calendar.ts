import { Page, Locator } from "@playwright/test";
export class Demoqa_calendar {
    page:Page;
    date_input: Locator;
    constructor(page:Page) {
        this.page = page;
        this.date_input = page.locator('[id="datePickerMonthYearInput"]');
    }
    public async enter_date(date: string) {
        await this.date_input.click();
        await this.date_input.press('Control+A');
        await this.date_input.press('Backspace');
        await this.date_input.fill(date);
    }
}