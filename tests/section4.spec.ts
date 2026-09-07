// tests/section4.spec.ts
import { test, expect } from './fixtures';

test.describe('Section 4: Dropdowns', () => {
  test('standard select, multi-select, custom dropdown, dynamic select', async ({ page, practicePage }) => {
    await practicePage.selectStandardDropdown('blue');
    await expect(page.getByRole('combobox', { name: 'Standard select' })).toHaveValue('blue');

    await practicePage.selectMultipleOptions(['java', 'python', 'csharp']);
    await expect(page.getByTestId('multi-select-result')).toHaveText('Selected: java, python, csharp');

    await practicePage.openCustomDropdownAndSelect('custom-option-beta');
    await expect(page.getByTestId('custom-dropdown-result')).toHaveText('Selected: Beta');

    await practicePage.selectDynamicDropdown('Playwright');
    await expect(page.getByTestId('dynamic-select-result')).toHaveText('Selected: Playwright');
  });
});

const dropdownColors = ['red', 'green', 'blue'];

test.describe('Section 4: Standard dropdown (data-driven)', () => {
  for (const color of dropdownColors) {
    test(`selecting "${color}" updates the dropdown and result text`, async ({ page, practicePage }) => {
      await practicePage.selectStandardDropdown(color);
      await expect(page.getByRole('combobox', { name: 'Standard select' })).toHaveValue(color);
      await expect(page.getByTestId('standard-select-result')).toHaveText(`Selected: ${color}`);
    });
  }
});