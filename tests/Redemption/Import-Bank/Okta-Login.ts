import { Page } from '@playwright/test';

export class OktaLoginPage {
    readonly page: Page;
    readonly usernameField;
    readonly nextButton;
    readonly passwordField;
    readonly verifyButton;
    readonly redeemButton

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#input28'); // Okta username field
        this.nextButton = page.locator('[value="Next"]');
        this.passwordField = page.locator('#input61'); // Okta password field
        this.verifyButton = page.locator('[value="Verify"]');
        this.redeemButton = page.locator('.btn.btn-danger'); //Redeem button
    }

    async login(username: string, password: string) 
    {
        // Fill in username
        await this.usernameField.fill(username);
        await this.nextButton.click();

        // Fill in password
        await this.passwordField.fill(password);
        await this.verifyButton.click();
    }

}
