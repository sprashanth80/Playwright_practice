import {test} from '@playwright/test';
import { Utils } from '../pages/utils';
import { Demoqa_alerts } from '../pages/demoqa_alerts';
test('Title: Demoqa Alerts Test', async ({ page }) => {
    const demoqa_alerts = new Demoqa_alerts(page);
    const utils = new Utils(page);      
    await demoqa_alerts.utils.navigateToUrl("https://demoqa.com/alerts");
    await page.pause();
    await demoqa_alerts.clickAlertButton();
    await page.pause();
    await demoqa_alerts.clickAlertConfirmButton();
    await page.pause();
    await demoqa_alerts.clickAlertPromptButton();
    await page.pause();
});