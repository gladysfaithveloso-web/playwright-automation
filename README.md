# Playwright Automation Challenge

Automated end-to-end testing solution built with **Playwright, Node.js, and TypeScript** for:

**https://www.theautomationchallenge.com/**

---

## 🧰 Framework & Technology

* **Framework:** Playwright
* **Runtime:** Node.js
* **Language:** TypeScript
* **Test Data:** CSV
* **CSV Parser:** `csv-parse`
* **Browser Automation:** Playwright

---

## 📋 Prerequisites

Before setting up the project, make sure the following are installed:

* **Node.js 20 or higher**
* **npm**
* **Git**

Verify the installation:

```bash
node --version
npm --version
git --version
```

> `npx` is included with npm and is used to run Playwright commands.

### 🔐 Account Requirement

Before running the automation, you must **sign up for an account using an existing email address** on the Automation Challenge website.

The automation does **not** create a new account. It assumes that an account has already been registered and that valid login credentials are available.

You will need:

* The email address used during registration
* The corresponding account password

> **Important:** Do not hardcode your credentials in the test script or commit them to the repository.

---

## 🚀 Setup

### 1. Clone the Repository

Clone the GitHub repository:

```bash
git clone https://github.com/gladysfaithveloso-web/playwright-automation.git
```

Navigate to the project:

```bash
cd playwright-automation
```

### 2. Install Dependencies

Install the dependencies defined in `package.json`:

```bash
npm install
```

The project intentionally uses a minimal dependency set:

```text
@playwright/test
@types/node
csv-parse
```

### 3. Install Playwright Browsers

Install the browser binaries required by Playwright:

```bash
npx playwright install
```

For Linux environments where browser system dependencies are required:

```bash
npx playwright install --with-deps
```

---

## ▶️ How to Run the Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests with the Browser Visible

Use headed mode when manual CAPTCHA verification is required:

```bash
npx playwright test --headed
```

### Run in Debug Mode

```bash
npx playwright test --debug
```

### Run the Automation Challenge Test

```bash
npx playwright test -g "Automation Challenge Submission Testing"
```

### Run the Automation Challenge with Browser Visible

For the complete challenge, including manual CAPTCHA verification:

```bash
TEST_EMAIL="email" TEST_PASSWORD="password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

Replace `email` and `password` with the credentials of the account you registered on the Automation Challenge website.

For example:

```bash
TEST_EMAIL="your-email@example.com" TEST_PASSWORD="your-password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

> **Note:** Credentials are supplied at runtime and are not stored in the source code.

---

## 🔐 Login Requirement

The automation **logs in before starting the challenge**.

A valid account must already exist before running the test.

The login flow is:

```text
Open Website
     ↓
SIGN UP OR LOGIN
     ↓
OR LOGIN
     ↓
Enter Email
     ↓
Enter Password
     ↓
LOG IN
     ↓
Start Challenge
     ↓
Begin Automation
```

The test verifies that the login fields are visible before entering the credentials.

The credentials are supplied through environment variables:

```bash
TEST_EMAIL="email" TEST_PASSWORD="password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

Credentials should **never be committed to the public repository**.

---

## 🤖 CAPTCHA Handling

The application may display a reCAPTCHA before allowing a form to be submitted.

The automation does **not attempt to solve, bypass, or defeat the CAPTCHA**.

When a CAPTCHA is detected, the script:

1. Detects the CAPTCHA.
2. Opens the CAPTCHA widget when available.
3. Allows the user to complete the CAPTCHA manually.
4. Waits for the application's **Submit** button to become enabled.
5. Continues with the automated submission.

Because CAPTCHA verification is specifically designed to prevent automated interaction, manual verification is required when the CAPTCHA is presented.

### Run with a Visible Browser

Use:

```bash
TEST_EMAIL="email" TEST_PASSWORD="password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

When the CAPTCHA appears:

1. Complete the CAPTCHA manually.
2. The automation waits for the application's submission state.
3. Once the **Submit** button becomes enabled, the test continues automatically.

> **CI Limitation:** GitHub Actions runs in a non-interactive environment, so manual CAPTCHA verification cannot be performed there. The complete CAPTCHA-dependent flow should therefore be executed locally in headed mode.

---

## 📊 Test Data

The test uses a CSV file as the source of test data:

```text
test-data/challenge - data.csv
```

Each record contains:

| Field                            | Description                    |
| -------------------------------- | ------------------------------ |
| `employer_identification_number` | Employer identification number |
| `company_name`                   | Company name                   |
| `sector`                         | Company sector                 |
| `company_address`                | Company address                |
| `automation_tool`                | Automation tool used           |
| `annual_automation_saving`       | Annual automation savings      |
| `date_of_first_project`          | Date of the first project      |

The test reads the CSV file and processes each company record sequentially.

---

## 🔍 Dynamic Field Handling

The challenge uses dynamically generated input IDs.

Instead of relying on the complete dynamic ID, the automation uses stable ID prefixes.

For example:

```ts
input[id^="company_name_input_field_"]
```

This allows the test to locate the current field even when the dynamically generated portion of the ID changes.

The same approach is used for the other company information fields.

A reusable helper function is used to reduce duplicate locator and validation logic.

---

## 🧪 Test Flow

The complete automation flow is:

```text
Open Website
     ↓
Login
     ↓
Start Challenge
     ↓
Read CSV Data
     ↓
Locate Dynamic Fields
     ↓
Fill Company Information
     ↓
Detect CAPTCHA
     ↓
Manual CAPTCHA Verification
     ↓
Wait for Submit to be Enabled
     ↓
Submit Form
     ↓
Process Next CSV Record
     ↓
Complete Test
```

---

## 📝 Code Documentation

The automation script contains comments explaining the key steps and logic.

Comments are provided for important areas such as:

* Login and authentication
* Starting the challenge
* Reading and processing CSV data
* Locating dynamic form fields
* Filling company information
* CAPTCHA detection and manual verification
* Form submission
* Processing multiple CSV records

The comments are intended to make the test easier to understand, maintain, and troubleshoot.

---

## 📁 Project Structure

```text
playwright-automation/
│
├── tests/
│   └── automation-challenge.spec.ts
│
├── test-data/
│   └── challenge - data.csv
│
├── test-results/
│
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

> `test-results/` is generated by Playwright when test artifacts are produced and does not need to contain source files.

---

## 📦 Dependencies

The project intentionally keeps the dependency list minimal.

### Development Dependencies

```json
"devDependencies": {
  "@playwright/test": "^1.62.1",
  "@types/node": "^26.4.0"
}
```

### Dependencies

```json
"dependencies": {
  "csv-parse": "^7.0.2"
}
```

No `dotenv` package is required.

Login credentials are supplied directly through environment variables when the test is executed.

---

## ⚠️ Assumptions Made During Development

The following assumptions were made while developing the automation:

1. **A valid account already exists.**
   The user must register an account using an existing email address before running the test.

2. **Valid login credentials are available.**
   The test requires valid credentials to access the challenge.

3. **The application is accessible.**
   The test assumes the Automation Challenge website is reachable and functioning normally.

4. **The CSV file follows the expected structure.**
   The test assumes `challenge - data.csv` contains the required column names and valid data.

5. **Dynamic field ID prefixes remain consistent.**
   The dynamically generated portion of the input IDs may change, but the stable field prefixes are assumed to remain consistent.

6. **CAPTCHA requires manual interaction.**
   CAPTCHA verification is intentionally handled manually and is not solved programmatically.

7. **The Submit button reflects the verification state.**
   After CAPTCHA completion, the test waits for the Submit button to become enabled before continuing.

8. **Records are processed sequentially.**
   Each CSV record is completed before the next record is processed.

9. **The application's UI structure remains reasonably stable.**
   Changes to button names, field attributes, or major DOM structures may require locator updates.

10. **The test is intended for the provided challenge environment.**
    The automation is designed around the current behavior and structure of the Automation Challenge website.

---

## 🛠️ Troubleshooting

### Playwright Browser Is Missing

Run:

```bash
npx playwright install
```

For Linux:

```bash
npx playwright install --with-deps
```

### Login Credentials Are Missing

Make sure credentials are provided when running the test:

```bash
TEST_EMAIL="email" TEST_PASSWORD="password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

Do not add the credentials directly to the TypeScript source code.

### CSV File Cannot Be Found

Verify that the file exists at:

```text
test-data/challenge - data.csv
```

Run the test from the project root directory:

```text
playwright-automation/
```

### CAPTCHA Prevents Submission

Run the test in headed mode:

```bash
TEST_EMAIL="email" TEST_PASSWORD="password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

Complete the CAPTCHA manually when prompted.

### Dynamic Field Cannot Be Found

The challenge uses dynamic IDs. Verify that the stable ID prefix has not changed.

For example:

```ts
input[id^="company_name_input_field_"]
```

### Browser Closes After the Test

This is normal Playwright behavior after a test finishes.

For debugging, use:

```bash
npx playwright test --debug
```

### Test Artifacts

Playwright can generate test results and debugging artifacts in:

```text
test-results/
```

These artifacts can be used to investigate failed test executions.

---

## 📌 Notes

This project was developed as a QA Automation assessment using **Playwright, TypeScript, and Node.js**.

The implementation focuses on:

* End-to-end test automation
* Data-driven testing using CSV
* Maintainable dynamic locators
* Reusable helper functions
* Manual CAPTCHA verification
* Secure runtime credential handling
* Clear code documentation
* Sequential processing of test records
* Playwright built-in waiting mechanisms
* Debuggable test execution

---

# ✅ Assessment Criteria

The automation was developed with the following assessment criteria in mind.

## 1. Functionality

The test automates the complete challenge workflow:

* Logs in before starting the challenge
* Starts the Automation Challenge
* Reads company records from the CSV test data
* Locates dynamically generated form fields
* Populates the required company information
* Detects the CAPTCHA
* Allows manual CAPTCHA verification
* Waits for the application to allow submission
* Submits each company record
* Continues processing the remaining records

The test processes the provided CSV records sequentially.

---

## 2. Performance

The test is configured with a maximum execution time of **3 minutes and 50 seconds**:

```ts
test.setTimeout(230000);
```

This keeps the configured test timeout within the required **4-minute limit**.

The automation avoids unnecessary fixed delays where possible and uses Playwright's built-in waiting mechanisms, such as:

```ts
await expect(locator).toBeVisible();

await expect(locator).toBeEnabled();
```

This allows Playwright to wait for the required application state instead of relying extensively on arbitrary delays.

> CAPTCHA verification is a manual step and can affect the actual execution time depending on how quickly the CAPTCHA is completed.

---

## 3. Code Quality

The code is structured using reusable helper functions to improve maintainability and readability.

For example:

```ts
async function findDynamicField(
  page: Page,
  fieldPrefix: string
) {
  const field = page.locator(
    `input[id^="${fieldPrefix}"]:visible`
  );

  await expect(field).toHaveCount(1);

  return field;
}
```

This avoids repeating the same locator and validation logic for every dynamic field.

The test is organized into clear sections:

* Test data setup
* Helper functions
* Login
* Challenge initialization
* CSV processing
* Dynamic field handling
* CAPTCHA handling
* Form submission

The implementation uses stable locator strategies where possible rather than depending on dynamically generated IDs or fixed element positions.

---

## 4. Documentation

The code includes comments around key steps and logic to make the automation easier to understand and maintain.

Examples include:

```ts
// LOGIN

// START CHALLENGE

// PROCESS CSV DATA

// Locate dynamic fields

// Fill form data

// Handle CAPTCHA manually

// Submit form
```

The README provides:

* Project prerequisites
* Existing account requirement
* Installation instructions
* Dependency information
* Playwright browser setup
* Test execution commands
* Runtime credential instructions
* CAPTCHA handling instructions
* Test data structure
* Project structure
* Troubleshooting information
* Development assumptions
* Assessment criteria

The goal is to make the project understandable and executable by another QA engineer without requiring additional setup guidance.

---

## 🔒 Security Note

Credentials are intentionally **not stored in the source code**.

Provide them only when running the test:

```bash
TEST_EMAIL="email" TEST_PASSWORD="password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

For CI/CD environments such as GitHub Actions, credentials should be configured using the platform's encrypted secrets.

**Never commit real passwords or credentials to the repository.**
