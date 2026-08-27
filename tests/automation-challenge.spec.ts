import { test, expect, Page } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

interface CompanyData {
  employer_identification_number: string;
  company_name: string;
  sector: string;
  company_address: string;
  automation_tool: string;
  annual_automation_saving: string;
  date_of_first_project: string;
}

const csvFile = fs.readFileSync(
  'test-data/challenge - data.csv',
  'utf-8'
);

const testData: CompanyData[] = parse(csvFile, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

// Handle reCAPTCHA manually
async function handleRecaptcha(page: Page): Promise<void> {
  const captcha = page.locator(
    'div.Popup:visible img[src*="ReCaptcha"]'
  );

  if (await captcha.count() === 0) {
    return;
  }

  console.log('⚠️ CAPTCHA DETECTED');

  // Locate the CAPTCHA widget's normal UI control
  const captchaButton = page.getByRole('button', {
    name: 'presentation'
  });

  if (await captchaButton.count() > 0) {
    await expect(captchaButton).toBeVisible();
    await captchaButton.click();

    console.log(
      'CAPTCHA opened. Please complete it manually.'
    );
  } else {
    console.log(
      'CAPTCHA detected. Please complete it manually.'
    );
  }

  // Wait for the application to allow submission
  const submitButton = page.getByRole('button', {
    name: /submit/i
  });

  await expect(submitButton).toBeEnabled({
    timeout: 120000
  });

  console.log('✅ CAPTCHA completed. Continuing...');
}

// Find dynamic fields
async function findDynamicField(
  page: Page,
  fieldPrefix: string
) {
  const field = page.locator(
    `input[id^="${fieldPrefix}"]:visible`
  );

  await expect(field).toHaveCount(1, {
    timeout: 3000
  });

  await expect(field).toBeVisible({
    timeout: 3000
  });

  return field;
}

test('Automation Challenge Submission Testing', async ({ page }) => {
  test.setTimeout(230000); // 3 minutes 50 seconds


  // =========================
  // LOGIN
  // =========================

  await page.goto(
    'https://www.theautomationchallenge.com/'
  );

  await page.getByRole('button', {
    name: 'SIGN UP OR LOGIN'
  }).click();

  await page.getByRole('button', {
    name: 'OR LOGIN',
    exact: true
  }).click();

  const email = page.getByRole('textbox', {
    name: 'Email'
  });

  await expect(email).toBeVisible();
  await email.fill('gladysveloso17@gmail.com');

  const password = page.getByRole('textbox', {
    name: 'Password'
  });

  await expect(password).toBeVisible();
  await password.fill('123456');

  await page.getByRole('button', {
    name: 'LOG IN'
  }).click();

  // =========================
  // START CHALLENGE
  // =========================

  await page.getByRole('button', {
    name: 'Start'
  }).click();

  // =========================
  // PROCESS CSV
  // =========================

  for (const data of testData) {

    console.log(
      `Submitting: ${data.company_name}`
    );

    // -------------------------
    // Find CURRENT dynamic fields
    // -------------------------

    const companyName = await findDynamicField(
      page,
      'company_name_input_field_'
    );

    const companyAddress = await findDynamicField(
      page,
      'address_input_field_'
    );

    const employerId = await findDynamicField(
      page,
      'ein_input_field_'
    );

    const sector = await findDynamicField(
      page,
      'sector_input_field_'
    );

    const automationTool = await findDynamicField(
      page,
      'automation_tool_input_field_'
    );

    const annualSaving = await findDynamicField(
      page,
      'annual_saving_input_field_'
    );

    const firstProjectDate = await findDynamicField(
      page,
      'date_input_field_'
    );

    // -------------------------
    // Fill CSV data
    // -------------------------

    await employerId.fill(
      data.employer_identification_number
    );

    await companyName.fill(
      data.company_name
    );

    await sector.fill(
      data.sector
    );

    await companyAddress.fill(
      data.company_address
    );

    await automationTool.fill(
      data.automation_tool
    );

    await annualSaving.fill(
      data.annual_automation_saving
    );

    await firstProjectDate.fill(
      data.date_of_first_project
    );

    console.log(
      `Filled: ${data.company_name}`
    );

  // -------------------------
  // Handle reCAPTCHA
  // -------------------------

  await handleRecaptcha(page);

  // -------------------------
  // Submit
  // -------------------------

  const submitButton = page.getByRole('button', {
    name: /submit/i
  });

  await expect(submitButton).toBeVisible();
  await expect(submitButton).toBeEnabled();

  await submitButton.click();

  // -------------------------
  // SUCCESSFUL
  // -------------------------

  console.log(
    `Completed: ${data.company_name}`
  );
  }
});
