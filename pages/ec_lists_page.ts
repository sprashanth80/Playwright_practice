import { Page, Locator } from "@playwright/test";
import { Utils } from "./utils";
export class Ec_lists_page {
    page: Page;
    utils: Utils;
    add_new_list_button: Locator;
    list_title_input: Locator;
    list_type_dropdown: Locator;
    list_code_input: Locator;
    list_notes_input: Locator;
    list_description_input: Locator;
    list_is_active_checkbox: Locator;
    list_priority_input: Locator;
    list_save_button: Locator;
    constructor(page: Page) {
        this.page = page;
        this.utils = new Utils(page);
        this.add_new_list_button = page.locator('[title="Add New List"]');
        this.list_title_input = page.locator('[id="title"]');
        this.list_type_dropdown = page.locator('[id="type"]')
        this.list_code_input = page.locator('[id="erp_code"]');
        this.list_notes_input = page.locator('[id="notes"]');
        this.list_description_input = page.locator('[id="description"]');
        this.list_is_active_checkbox = page.locator('[id="active"]');
        this.list_priority_input = page.locator('[id="priority"]');
        this.list_save_button = page.locator('[id="save"]');
    }
    public async click_add_new_list() {
        await this.add_new_list_button.click();
    }
    public async fill_list_details(title: string, type: string, code: string, notes: string, description: string, isActive: boolean, priority: number) {
        await this.list_title_input.fill(title);
        await this.list_type_dropdown.selectOption(type);
        await this.list_code_input.fill(code);
        await this.list_notes_input.fill(notes);
        await this.list_description_input.fill(description);
        if (isActive) {
            await this.list_is_active_checkbox.check();
        } else {
            await this.list_is_active_checkbox.uncheck();
        }
        await this.list_priority_input.fill(priority.toString());
        await this.list_save_button.click();
    }  

}