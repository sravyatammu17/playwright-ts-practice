// import { test, expect } from '@playwright/test';

// test.describe('Section 11: iFrame', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('/practice');
//   });

//   test('can type into and submit a form inside an iframe', async ({ page }) => {
//     const frame = page.frameLocator('[data-testid="practice-iframe"]');
//     await frame.getByLabel('Inside iframe').fill('hello from Playwright');
//     await frame.locator('#iframe-btn').click();
//     await expect(frame.locator('#iframe-result')).toHaveText('Iframe button clicked: hello from Playwright');
//   });
// });

import { test, expect } from '@playwright/test';
import { PracticePage } from './pages/PracticePage.js';

test.describe('Section 11: iFrame', () => {
  let practicePage: PracticePage;

  test.beforeEach(async ({ page }) => {
    practicePage = new PracticePage(page);
    await practicePage.goto();
  });

  test('can type into and submit a form inside an iframe', async ({ page }) => {
    await practicePage.fillAndSubmitIframeForm('hello from Playwright');

    const frame = practicePage.getIframe();
    await expect(frame.locator('#iframe-result')).toHaveText('Iframe button clicked: hello from Playwright');
  });
});