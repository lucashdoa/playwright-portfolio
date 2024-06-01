import { test, expect } from '@playwright/test';
import { VerifyAccountPage } from '../pageobjects/verify-account.page';

test.beforeEach(async ({ page }) => {
  await page.goto("https://qaplayground.dev/apps/verify-account/");
})

test.describe("Verify Your Account", () => {
  test("Enter valid code by pressing the key-up button or typing number and assert success message", async ({ page }) => {
    const verifyAccountPage = new VerifyAccountPage(page);
    const expectedSuccessMessage = "Success"
    const confirmationCode = await verifyAccountPage.getConfirmationCode();
    await verifyAccountPage.insertConfirmationCode(confirmationCode!);
    const successMessage = await verifyAccountPage.getSuccessMessage();

    expect(successMessage).toEqual(expectedSuccessMessage);
  })
})