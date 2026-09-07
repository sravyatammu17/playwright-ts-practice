import { test, expect } from '@playwright/test';

test.describe('Section 5: Locator Practice', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice');
  });

  test('practice every locator strategy', async ({ page }) => {
    await expect(page.locator('#locator-by-id')).toHaveText('Find me by id');
    await expect(page.locator('.locator-by-class')).toHaveText('Find me by class');

    await page.locator('[name="locator-name"]').fill('test value');
    await expect(page.locator('[name="locator-name"]')).toHaveValue('test value');

    await expect(page.getByTestId('locator-by-testid')).toHaveText('Find me by data-testid');
    await expect(page.locator('[aria-label="locator-by-aria"]')).toHaveText('Find me by aria-label');

    await page.getByPlaceholder('locator-by-placeholder').fill('placeholder test');
    await expect(page.getByPlaceholder('locator-by-placeholder')).toHaveValue('placeholder test');

    await expect(page.getByText('ExactTextTarget', { exact: true })).toBeVisible();
    await expect(page.getByText('PartialMatch')).toBeVisible();

    await expect(page.locator("[data-css='css-only-target']")).toBeVisible();

    await expect(
      page.locator("xpath=//div[@id='xpath-child-1']/following-sibling::div[1]")
    ).toContainText('child 2');
  });
});