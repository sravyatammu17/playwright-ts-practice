import { Page, expect, } from '@playwright/test';
import { BasePage } from './Basepage.js';

export class PracticePage extends BasePage {
  constructor(page: Page) {
    super(page); // calls BasePage's constructor, sets up this.page
  }

  // ----- Section 1: Basic Form -----
  async fillBasicForm(data: { name: string; password: string; email: string; phone: string; bio: string }) {
    await this.page.getByTestId('text-input').fill(data.name);
    await this.page.getByTestId('password-input').fill(data.password);
    await this.page.getByTestId('email-input').fill(data.email);
    await this.page.getByTestId('phone-input').fill(data.phone);
    await this.page.getByTestId('textarea-input').fill(data.bio);
  }

  async submitForm() {
    await this.page.getByTestId('form-submit').click();
  }

  async getFormResultText() {
    return this.page.getByTestId('form-result').textContent();
  }

  // ----- Section 2: Buttons -----
  async clickSingleClickButton() {
    await this.page.getByRole('button', { name: 'Single click button' }).click();
  }

  async clickDoubleClickButton() {
    await this.page.getByRole('button', { name: 'Double Click' }).dblclick();
  }

  async clickRightClickButton() {
    await this.page.getByRole('button', { name: 'Right click button' }).click({ button: 'right' });
  }

  async startDelayTimerAndWaitForEnable() {
    await this.page.getByRole('button', { name: 'Start delay' }).click();
    await expect(this.page.getByTestId('delayed-enable-btn')).toBeEnabled();
  }

  async clickRelabelButton() {
    await this.page.getByTestId('relabel-btn').click();
  }

  // ----- Section 3: Checkboxes & Radio -----
  async checkAllCheckboxes() {
    await this.page.getByRole('checkbox', { name: 'Select all checkboxes' }).check();
  }

  async uncheckCheckbox(name: string) {
    await this.page.getByRole('checkbox', { name }).uncheck();
  }

  async selectRadio(name: string) {
    await this.page.getByRole('radio', { name }).check();
  }

  // ----- Section 11: iFrame -----
  getIframe() {
    return this.page.frameLocator('[data-testid="practice-iframe"]');
  }

  async fillAndSubmitIframeForm(value: string) {
    const frame = this.getIframe();
    await frame.getByLabel('Inside iframe').fill(value);
    await frame.locator('#iframe-btn').click();
  }
}