// import { test, expect } from '@playwright/test';

// test('Section 1: fill and submit form with valid data', async ({ page }) => {
//   await page.goto('https://www.sreenidhirajakrishnan.com/practice');

//  let scroll = await page.locator('.practice-section').first()
//  await scroll.scrollIntoViewIfNeeded();

//   await page.getByPlaceholder('Enter your name').fill('John Doe');
//   await page.getByPlaceholder('Enter password').fill('Password123');
//   await page.getByPlaceholder('Enter email').fill('john.doe@example.com');
//   await page.getByPlaceholder('Enter phone').fill('9876543210');
//   await page.getByPlaceholder('Tell us about yourself').fill('This is a sample bio for testing.');

//   await page.getByLabel('Submit form').click();
// // await page.getByText('Form submitted successfully', { exact: true })
// await expect(page.getByTestId('form-result')).toHaveText('Form submitted successfully');
// //   await expect(page.getByText('Form submitted successfully')).toBeVisible(); 
// // or whatever the actual confirmation text turns out to be
// });
 

/// improved and corrected verson for the above code snippet is below

import { test, expect } from '@playwright/test';

test('Section 1: fill and submit form with valid data', async ({ page }) => {
  await page.goto('/practice');

  await expect(page.getByTestId('form-result')).toHaveText('Not submitted');

  await page.getByTestId('text-input').fill('John Doe');
  await page.getByTestId('password-input').fill('Password123');
  await page.getByTestId('email-input').fill('john.doe@example.com');
  await page.getByTestId('phone-input').fill('9876543210');
  await page.getByTestId('textarea-input').fill('This is a sample bio for testing.');

  await page.getByTestId('form-submit').click();

  await expect(page.getByTestId('form-result')).not.toHaveText('Not submitted');

  const resultText = await page.getByTestId('form-result').textContent();
 
});


test('Section 1: submit with empty fields shows success despite no data', async ({ page }) => {
  await page.goto('/practice');
  await expect(page.getByTestId('form-result')).toHaveText('Not submitted');
  await page.getByTestId('form-submit').click();
  await expect(page.getByTestId('form-result')).toHaveText('Form submitted successfully');

});

test('section 2: about buttons ', async ({ page }) => {
  await page.goto('/practice');

  await page.getByRole('button', { name: 'Single click button' }).click();
  await expect(page.getByTestId('single-click-result')).not.toHaveText('No click yet');

  await page.getByRole('button', { name: 'Double Click' }).dblclick();
  await expect(page.getByTestId('double-click-result')).not.toHaveText('Not double-clicked');

  await page.getByRole('button', { name: 'Right click button' }).click({ button: 'right' });
  await expect(page.getByTestId('right-click-result')).not.toHaveText('Not right-clicked');

//sec
await page.getByRole('button',{name:'Start delay'}).click();
await expect(page.getByTestId('delayed-enable-btn')).toBeEnabled();

//original lable 
await page.getByTestId('relabel-btn').click();
let relabelled = await page.getByTestId('relabel-btn').textContent();
console.log('Relabelled button text:', relabelled);

await expect(page.getByTestId('relabel-btn')).toHaveText('Clicked Label');
});
