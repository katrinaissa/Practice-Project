import { test, expect } from '@playwright/test';

test('Login Test - Verify Error Message for Invalid Credentials', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login'); // Open login page

    // Define selectors
    const emailId = page.locator('#input-email');
    const password = page.locator('#input-password');
    const loginBtn = page.locator("[value='Login']");
    const loginError = page.locator(".alert.alert-danger.alert-dismissible");

    // Perform actions
    await emailId.fill("pwtest@opencart.com");
    await password.fill("playwright@123");
    await loginBtn.click();

    // Verify error message is visible
    await expect(loginError).toBeVisible();
});
