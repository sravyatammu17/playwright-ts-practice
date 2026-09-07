import { Page, expect } from '@playwright/test';
import { BasePage } from './Basepage';

export class PracticePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // ===== Section 1: Basic Form Elements =====
  async fillBasicForm(data: {
    name: string;
    password: string;
    email: string;
    phone: string;
    bio: string;
  }) {
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

  // ===== Section 2: Button Interactions =====
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

  // ===== Section 3: Checkboxes & Radio Buttons =====
  async checkCheckbox(name: string) {
    await this.page.getByRole('checkbox', { name }).check();
  }

  async uncheckCheckbox(name: string) {
    await this.page.getByRole('checkbox', { name }).uncheck();
  }

  async checkAllCheckboxes() {
    await this.page.getByRole('checkbox', { name: 'Select all checkboxes' }).check();
  }

  async selectRadio(name: string) {
    await this.page.getByRole('radio', { name }).check();
  }

  async checkRevealCheckbox() {
    await this.page.getByRole('checkbox', { name: 'Reveal checkbox' }).check();
  }

  // ===== Section 4: Dropdowns =====
  async selectStandardDropdown(value: string) {
    await this.page.getByRole('combobox', { name: 'Standard select' }).selectOption(value);
  }

  async selectMultipleOptions(values: string[]) {
    await this.page.getByRole('listbox', { name: 'Multi select' }).selectOption(values);
  }

  async openCustomDropdownAndSelect(optionTestId: string) {
    await this.page.getByRole('button', { name: 'Custom dropdown toggle' }).click();
    await this.page.getByTestId(optionTestId).click();
  }

  async selectDynamicDropdown(value: string) {
    await this.page.getByRole('combobox', { name: 'Dynamic options select' }).selectOption(value);
  }

  // ===== Section 6: Dynamic Content =====
  async clickDisappearButton() {
    await this.page.getByTestId('disappear-btn').click();
  }

  async clickChangeTextButton() {
    await this.page.getByTestId('change-text-btn').click();
  }

  async clickIncrementButton() {
    await this.page.getByTestId('increment-btn').click();
  }

  async clickLoadContentButton() {
    await this.page.getByTestId('load-content-btn').click();
  }

  getInjectedListItems() {
    return this.page.getByTestId('injected-list').locator('li');
  }

  // ===== Section 11: iFrame =====
  getIframe() {
    return this.page.frameLocator('[data-testid="practice-iframe"]');
  }

  async fillAndSubmitIframeForm(value: string) {
    const frame = this.getIframe();
    await frame.getByLabel('Inside iframe').fill(value);
    await frame.locator('#iframe-btn').click();
  }

  // ===== Section 12: Shadow DOM =====
  async fillAndSubmitShadowForm(value: string) {
    // No special scoping needed — Playwright pierces shadow DOM automatically
    await this.page.getByLabel('Shadow DOM input').fill(value);
    await this.page.getByRole('button', { name: 'Shadow Submit' }).click();
  }

  // ===== Section 13: Drag & Drop =====
  async dragSourceToDropZone() {
  const source = this.page.getByTestId('drag-source');
  const target = this.page.getByTestId('drop-zone');

  await source.dragTo(target);
}
}