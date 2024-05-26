import { expect, type Locator, type Page } from '@playwright/test';

export class DynamicTablePage {
  // Elements
  readonly page: Page;
  readonly heroesTable: Locator;
  readonly heroRow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroesTable = page.locator('table');
  }

  // Methods
  async getRealName(hero: string) {
    const heroRow = this.page.locator(`text=${hero} >> xpath=../../../..`);
    const realName = heroRow.locator("td").nth(2).textContent().then((name) => name?.trim());

    return realName;
  }
}