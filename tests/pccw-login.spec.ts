import { test, expect } from '@playwright/test';

test('Login to Practice Automation', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle(/Test Login | Practice Test Automation/);
    await page.waitForLoadState(); 

    //enter credentials and click submit
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: /submit/i }).click();

    //wait for page to load upon logging in
    await page.waitForLoadState(); 
    await expect(page).toHaveTitle(/Logged In Successfully/);
});
