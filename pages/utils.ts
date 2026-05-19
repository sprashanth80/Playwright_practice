import { Page } from '@playwright/test';
export class Utils {
    page: Page;
constructor(page: Page) {
    this.page = page;       
}
public async navigateToUrl(url: string) {
    await this.page.goto(url);
}
public async pageReload() {
    await this.page.reload();       
}
public async navigateBack() {
    await this.page.goBack();           
}
public async navigateForward() {
    await this.page.goForward();            
}
}