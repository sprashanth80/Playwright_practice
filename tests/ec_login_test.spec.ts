import { Utils } from "../pages/utils";
import { test, expect } from "@playwright/test";
import { Ec_login } from "../pages/ec_login";
import { Ec_homepage } from "../pages/ec_homepage";
import { Ec_lists_page } from "../pages/ec_lists_page";

test('Title: EC Login', async ({ page }) => {
    const utils = new Utils(page);
    const ec_login = new Ec_login(page);
    const ec_homepage = new Ec_homepage(page);
    const ec_lists_page = new Ec_lists_page(page);
    await utils.navigateToUrl('http://testreleases-ecc-live.epicorcommerce.com/SiteAdmin/Login');
    await ec_login.login('admin', 'Violin1234!');
    await ec_homepage.close_popup_message();
    await ec_homepage.navigate_to_epicor_lists();
    await ec_lists_page.click_add_new_list();
    await page.pause();
    await ec_lists_page.fill_list_details('Test List', 'Fa', 'TEST_LIST', 'This is a test list', 'Test list description', true, 1);
    await page.pause();
    await ec_homepage.signout();     
});      