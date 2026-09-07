import { test, expect } from '@playwright/test';

test.describe('Section 7: Waits & Synchronisation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice');
  });

  test('spinner label remains static text', async ({ page }) => {
    await expect(page.getByTestId('spinner')).toHaveText('Loading spinner...');
  });

  test('delayed text eventually appears', async ({ page }) => {
    await expect(page.getByTestId('delayed-text')).toHaveText('Waiting...');
    await expect(page.getByTestId('delayed-text')).not.toHaveText('Waiting...', { timeout: 10000 });
  });

  // Progress bar and AJAX button not yet inspected — pending
});