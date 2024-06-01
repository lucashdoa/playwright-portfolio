import { type Locator, type Page } from '@playwright/test';

export class VerifyAccountPage {
  // Elements
  readonly page: Page;
  readonly confirmationCodeParagraph: Locator;
  readonly codeInputList: Locator;
  readonly successMessageParagraph: Locator

  constructor(page: Page) {
    this.page = page;
    this.confirmationCodeParagraph = page.locator('.info');
    this.codeInputList = page.locator('.code');
    this.successMessageParagraph = page.locator('.info.success');
  }

  // Methods
  async getConfirmationCode() {
    const confirmationCode = this.confirmationCodeParagraph.textContent().then((confirmationCodeText) => {
      const code = confirmationCodeText?.replace("The confirmation code is ", "").trim().split("-");
      console.log(code);
      return code;
    })

    return confirmationCode;
  }

  async insertConfirmationCode(code: string[]){
    for(let i = 0; i < code.length; i++){
      await this.codeInputList.nth(i).press("ArrowUp");
      this.page.keyboard.type(code[i], {delay: 1000});
    }
  }

  async getSuccessMessage() {
    return this.successMessageParagraph.textContent();
  }
}