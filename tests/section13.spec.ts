import { test, expect } from '@playwright/test';

test.describe('Section 13: Drag & Drop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice');
  });

  test('dragging source onto drop zone updates the result', async ({ page }) => {
    await expect(page.getByTestId('drop-result')).toHaveText('Nothing dropped');

    const source = page.getByTestId('drag-source');
    const target = page.getByTestId('drop-zone');
    const sourceBox = await source.boundingBox();
    const targetBox = await target.boundingBox();
    if (!sourceBox || !targetBox) throw new Error('Could not get bounding boxes');

    await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2, { steps: 10 });
    await page.mouse.up();

    await expect(page.getByTestId('drop-result')).not.toHaveText('Nothing dropped'); // tighten once confirmed
  });
});