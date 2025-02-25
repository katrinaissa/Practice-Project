import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ParaBank/);
});

test('navigate to ParaBank', async ({ page, browser }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Wait for the page to load
  await page.waitForLoadState('domcontentloaded');

  // Expect the main content to be visible
  await expect(page.locator('#mainPanel')).toBeVisible();
  
  await browser.close();
});