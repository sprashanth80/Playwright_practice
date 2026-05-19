import { Utils } from "../pages/utils";
import { Demoqa_buttons } from "../pages/demoqa_buttons";
import { test, expect } from "@playwright/test";
import { Demoqa_textbox } from "../pages/demoqa_textbox";
import { Demoqa_drag_drop } from "../pages/demoqa_drag_drop";
import { Upload } from "../pages/upload";
import { Demoqa_calendar } from "../pages/demoqa_calendar";
import { Demoqa_menu } from "../pages/demoqa_menu";

test.beforeAll (async() => {
    console.log("This will run before all tests");
})

test.afterAll (async() => {
    console.log("This will run after all tests");
})

test.beforeEach (async() => {
    console.log("This will run before each test");
} )

test.afterEach (async() => {
    console.log("This will run after each test");
} )

test('Title: Click Actions', async ({ page}) => {
    const utils = new Utils(page);
    const demoqa_buttons = new Demoqa_buttons(page);
    await utils.navigateToUrl('https://demoqa.com/buttons');
    await page.pause();
    await demoqa_buttons.click_actions();
    await page.pause();
}
);

test('Title: Textbox Actions', async ({ page}) => {
    const utils = new Utils(page);
    const demoqa_textbox = new Demoqa_textbox(page);
    await utils.navigateToUrl('https://demoqa.com/text-box');
    await page.pause();
    await demoqa_textbox.fill_form('Prashanth Sasanakota', 'test@test.com', 'Bangalore', 'Bangalore');
    await page.pause();
});



test('Title: Drag and Drop Actions', async ({ page}) => {
    const utils = new Utils(page);
    const demoqa_drag_drop = new Demoqa_drag_drop(page);
    await utils.navigateToUrl('https://demoqa.com/droppable');
    await page.pause();
    await demoqa_drag_drop.drag_and_drop();
    await page.pause();
});

test('Title: Upload Actions', async ({ page}) => {
    const utils = new Utils(page);
    const upload = new Upload(page);
    await utils.navigateToUrl('https://demoqa.com/upload-download');
    await page.pause();
    await upload.upload_file('test_data/demoqa_drag_drop.ts');
    await page.pause();
    await upload.download_file();
    await page.pause();
});

test('Title: Demo QA Calendar - Enter Date', async ({ page}) => {
    const utils = new Utils(page);
    const demoqa_calendar = new Demoqa_calendar(page);
    await utils.navigateToUrl('https://demoqa.com/date-picker');
    await page.pause();
    await demoqa_calendar.enter_date('05/10/2027');
    await page.pause();
}
);

test('Title: Demo QA Menu - Hover and Click Operations', async ({ page}) => {
    const utils = new Utils(page);
    const demoqa_menu = new Demoqa_menu(page);
    await utils.navigateToUrl('https://demoqa.com/menu');
    await page.pause();
    await demoqa_menu.menu_selection();
    await page.pause();     
});