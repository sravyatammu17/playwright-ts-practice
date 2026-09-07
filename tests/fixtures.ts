// tests/fixtures.ts
import { test as base, expect } from '@playwright/test';
import { PracticePage } from './pages/PracticePage';

type MyFixtures = {
  practicePage: PracticePage;
};

export const test = base.extend<MyFixtures>({
  practicePage: async ({ page }, use) => {
    const practicePage = new PracticePage(page);
    await practicePage.goto();
    await use(practicePage);
  },
});

export { expect };