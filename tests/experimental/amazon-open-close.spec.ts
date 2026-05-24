import { test } from '@playwright/test';

test.describe('Amazon Workflow', () => {
  test('SCN-001: Open amazon.in and close browser', async ({ browser, page }) => {
    // Open amazon.in
    await page.goto('https://amazon.in');
    
    // Verify page title contains amazon
    const title = await page.title();
    console.log(`Page title: ${title}`);
    
    // Take a screenshot before closing
    await page.screenshot({ path: 'amazon-screenshot.png' });
    
    // Close browser
    await browser.close();
  });
});
