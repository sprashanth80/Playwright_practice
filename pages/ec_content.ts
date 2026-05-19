import {page, Locator} from '@playwright/test';
export class Ec_content {
    page: Page;
    header: Locator;
    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('h1')


        getByRole('link', { name: ' Catalog' })
        locator('[data-ui-id="menu-magento-cms-cms-page"]')
        locator('[id="add"]')
//New Page details
Page title = getByRole('textbox', { name: 'Page Title *' })
Page type dropdown = getByLabel('notice-WUMX5AA')

