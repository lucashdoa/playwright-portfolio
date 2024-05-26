import { test, expect } from '@playwright/test';
import { DynamicTablePage } from '../pageobjects/dynamic-table.page';

test.beforeEach(async ({ page }) => {
  await page.goto("https://qaplayground.dev/apps/dynamic-table/");
})

test.describe("Dynamic Table", () => {
  test("Find the Spider-Man in a table that changes the order of rows and assert his real name", async ({ page }) => {
    const dynamicTable = new DynamicTablePage(page);
    const expectedRealName = "Peter Parker";
    const actualRealName = await dynamicTable.getRealName("Spider-Man");

    expect(actualRealName).toEqual(expectedRealName);
  })
})