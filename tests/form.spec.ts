// // import { test, expect } from '@playwright/test';

// // test('Section 1: fill and submit form with valid data', async ({ page }) => {
// //   await page.goto('https://www.sreenidhirajakrishnan.com/practice');

// //  let scroll = await page.locator('.practice-section').first()
// //  await scroll.scrollIntoViewIfNeeded();

// //   await page.getByPlaceholder('Enter your name').fill('John Doe');
// //   await page.getByPlaceholder('Enter password').fill('Password123');
// //   await page.getByPlaceholder('Enter email').fill('john.doe@example.com');
// //   await page.getByPlaceholder('Enter phone').fill('9876543210');
// //   await page.getByPlaceholder('Tell us about yourself').fill('This is a sample bio for testing.');

// //   await page.getByLabel('Submit form').click();
// // // await page.getByText('Form submitted successfully', { exact: true })
// // await expect(page.getByTestId('form-result')).toHaveText('Form submitted successfully');
// // //   await expect(page.getByText('Form submitted successfully')).toBeVisible(); 
// // // or whatever the actual confirmation text turns out to be
// // });
 

// /// improved and corrected verson for the above code snippet is below

// import { test, expect } from '@playwright/test';

// test('Section 1: fill and submit form with valid data', async ({ page }) => {
//   await page.goto('/practice');

//   await expect(page.getByTestId('form-result')).toHaveText('Not submitted');

//   await page.getByTestId('text-input').fill('John Doe');
//   await page.getByTestId('password-input').fill('Password123');
//   await page.getByTestId('email-input').fill('john.doe@example.com');
//   await page.getByTestId('phone-input').fill('9876543210');
//   await page.getByTestId('textarea-input').fill('This is a sample bio for testing.');

//   await page.getByTestId('form-submit').click();

//   await expect(page.getByTestId('form-result')).not.toHaveText('Not submitted');

//   const resultText = await page.getByTestId('form-result').textContent();
 
// });


// test('Section 1: submit with empty fields shows success despite no data', async ({ page }) => {
//   await page.goto('/practice');
//   await expect(page.getByTestId('form-result')).toHaveText('Not submitted');
//   await page.getByTestId('form-submit').click();
//   await expect(page.getByTestId('form-result')).toHaveText('Form submitted successfully');

// });

// test('section 2: about buttons ', async ({ page }) => {
//   await page.goto('/practice');

//   await page.getByRole('button', { name: 'Single click button' }).click();
//   await expect(page.getByTestId('single-click-result')).not.toHaveText('No click yet');

//   await page.getByRole('button', { name: 'Double Click' }).dblclick();
//   await expect(page.getByTestId('double-click-result')).not.toHaveText('Not double-clicked');

//   await page.getByRole('button', { name: 'Right click button' }).click({ button: 'right' });
//   await expect(page.getByTestId('right-click-result')).not.toHaveText('Not right-clicked');

// //sec
// await page.getByRole('button',{name:'Start delay'}).click();
// await expect(page.getByTestId('delayed-enable-btn')).toBeEnabled();

// //original lable 
// await page.getByTestId('relabel-btn').click();
// let relabelled = await page.getByTestId('relabel-btn').textContent();
// console.log('Relabelled button text:', relabelled);

// await expect(page.getByTestId('relabel-btn')).toHaveText('Clicked Label');
// });

// test('section 3: checkboxes and radio buttons 1', async ({ page }) => {
//   await page.goto('/practice');

//   // Individual checkbox
//   await page.getByRole('checkbox', { name: 'Checkbox A' }).check();
//   await expect(page.getByRole('checkbox', { name: 'Checkbox A' })).toBeChecked();

//   // Select All checks everything
//   await page.getByRole('checkbox', { name: 'Select all checkboxes' }).check();
//   await expect(page.getByRole('checkbox', { name: 'Checkbox A' })).toBeChecked();
//   await expect(page.getByRole('checkbox', { name: 'Checkbox B' })).toBeChecked();
//   await expect(page.getByRole('checkbox', { name: 'Checkbox C' })).toBeChecked();

//   // Unchecking one un-checks Select All (verified tri-state behavior)
//   await page.getByRole('checkbox', { name: 'Checkbox B' }).uncheck();
//   await expect(page.getByRole('checkbox', { name: 'Select all checkboxes' })).not.toBeChecked();

//   // Radio group
//   await page.getByRole('radio', { name: 'Radio one' }).check();
//   await expect(page.getByRole('radio', { name: 'Radio one' })).toBeChecked();
//   await expect(page.getByTestId('radio-result')).toHaveText('Selected: one');

//   // Reveal checkbox — we'll add the real assertion once you confirm the hidden text
//   // Reveal checkbox — actually reveals a hidden text element
//   await page.getByRole('checkbox', { name: 'Reveal checkbox' }).check();
//   await expect(page.getByRole('checkbox', { name: 'Reveal checkbox' })).toBeChecked();
//   await expect(page.getByTestId('revealed-text')).toBeVisible();
//   await expect(page.getByTestId('revealed-text')).toHaveText('Hidden text is now visible!');
// });

// test('section 4: dropdown and selects', async ({page}) => {
//   await page.goto('/practice');

// });


// tests/section1.spec.ts
import { test, expect } from './fixtures';

const formTestCases = [
  { title: 'standard valid data', name: 'John Doe', email: 'john@example.com' },
  { title: 'name with special characters', name: "O'Brien-Smith", email: 'obrien@example.com' },
  { title: 'long bio text', name: 'Jane Doe', email: 'jane@example.com' },
];

test('fill and submit form with valid data', async ({ page, practicePage }) => {
  await test.step('Verify initial state', async () => {
    await expect(page.getByTestId('form-result')).toHaveText('Not submitted');
  });

  await test.step('Fill out the form', async () => {
    await practicePage.fillBasicForm({
      name: 'John Doe',
      password: 'Password123',
      email: 'john.doe@example.com',
      phone: '9876543210',
      bio: 'This is a sample bio for testing.',
    });
  });

  await test.step('Submit and verify success', async () => {
    await practicePage.submitForm();
    await expect(page.getByTestId('form-result')).toHaveText('Form submitted successfully');
  });
});