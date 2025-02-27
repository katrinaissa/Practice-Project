import { test } from '@playwright/test';
import { OktaLoginPage } from '../Import-Bank/Okta-Login';

test('Login - Okta Verify and Redeem via Bank', async ({ page }) => {
    await page.goto('https://test-product.dev.vgwgroup.net/game?customerId=kat_pyw0001'); 

    // Set browser to full screen
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Perform Okta login
    const loginPage = new OktaLoginPage(page);
    await loginPage.login('pay-test-user@vgw.co', 'mxr0ejx@xuh-VKY_hpq'); 

    //Wait until the button is visible
    await page.waitForSelector('.btn.btn-danger', { state: 'visible' });
    console.log('Redemption page is ready.');

    await page.close();
});
