import { test, expect } from '@playwright/test';

test.describe('Section 12: Shadow DOM', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice');
  });

  test('can type into and submit a form inside shadow DOM', async ({ page }) => {
    await page.getByLabel('Shadow DOM input').fill('hello from shadow DOM');
    await page.getByRole('button', { name: 'Shadow Submit' }).click();
    await expect(page.locator('#shadow-result')).not.toBeEmpty(); // tighten once confirmed
  });
});