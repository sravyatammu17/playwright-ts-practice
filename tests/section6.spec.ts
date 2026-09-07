import { test, expect } from '@playwright/test';

test.describe('Section 6: Dynamic Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice');
  });

  test('delayed element appears without manual wait', async ({ page }) => {
    await expect(page.getByTestId('appears-later')).toBeVisible();
    await expect(page.getByTestId('appears-later')).toHaveText('I appeared after 2 seconds');
  });

  test('disappear button hides the delayed element', async ({ page }) => {
    await expect(page.getByTestId('appears-later')).toBeVisible();
    await page.getByTestId('disappear-btn').click();
    await expect(page.getByTestId('appears-later')).toBeHidden();
  });

  test('change text button updates the paragraph', async ({ page }) => {
    await expect(page.getByTestId('changing-text')).toHaveText('Original text');
    await page.getByTestId('change-text-btn').click();
    await expect(page.getByTestId('changing-text')).not.toHaveText('Original text'); // tighten once confirmed
  });

  test('counter increments correctly on each click', async ({ page }) => {
    await expect(page.getByTestId('counter-result')).toHaveText('Counter: 0');
    await page.getByTestId('increment-btn').click();
    await expect(page.getByTestId('counter-result')).toHaveText('Counter: 1');
    await page.getByTestId('increment-btn').click();
    await expect(page.getByTestId('counter-result')).toHaveText('Counter: 2');
  });

  test('load content button populates the list', async ({ page }) => {
    const list = page.getByTestId('injected-list');
    await page.getByTestId('load-content-btn').click();
    await expect(list.locator('li')).not.toHaveCount(0); // tighten count once confirmed
  });
});