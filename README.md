# Playwright Automation Challenge

Automated end-to-end testing solution built with **Playwright and Node.js** for:

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

---

## 🚀 Setup

### 1. Clone the Repository

Clone the GitHub repository:

```bash
git clone <https://github.com/gladysfaithveloso-web/playwright-automation.git>
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

The project uses the following main dependencies:

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

### Run all tests

```bash
npx playwright test
```

### Run tests with the browser visible

Use headed mode when manual CAPTCHA verification is required:

```bash
npx playwright test --headed
```

### Run in debug mode

```bash
npx playwright test --debug
```

### Run the Automation Challenge test

```bash
npx playwright test -g "Automation Challenge Submission Testing"
```

### Run the Automation Challenge test with the browser visible

```bash
npx playwright test -g "Automation Challenge Submission Testing" --headed
```

---

## 🔐 Login Requirement

The automation logs in to the application before starting the challenge.

The automated flow is:

1. Open the Automation Challenge website.
2. Click **SIGN UP OR LOGIN**.
3. Select **OR LOGIN**.
4. Enter the login credentials.
5. Click **LOG IN**.
6. Click **Start** to begin the challenge.
7. Process the CSV test data.

> Valid credentials must be available before running the test. Credentials should not be committed to the repository.

For a production implementation, credentials should be stored using environment variables or a secure credential-management solution.

---

## 🤖 CAPTCHA Handling

The application may display a reCAPTCHA before allowing the form to be submitted.

The automation does **not attempt to solve or bypass the CAPTCHA**.

When a CAPTCHA is detected, the script:

1. Detects the CAPTCHA popup.
2. Opens the CAPTCHA widget.
3. Allows the user to complete the CAPTCHA manually.
4. Waits for the application's **Submit** button to become enabled.
5. Continues with the automated submission.

Because CAPTCHA verification is designed to prevent automated interaction, manual verification is required during test execution.

Run the test in headed mode:

```bash
npx playwright test --headed
```

Complete the CAPTCHA manually when prompted. The automation will continue once the application allows the submission to proceed.

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

The test reads the CSV and processes each company record sequentially.

---

## 🔍 Dynamic Field Handling

The challenge uses dynamically generated input IDs.

The automation therefore uses stable ID prefixes rather than relying on the complete dynamic ID.

For example:

```ts
input[id^="company_name_input_field_"]
```

This approach allows the test to locate the current field even when the dynamically generated portion of the ID changes.

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
Submit Form
     ↓
Process Next CSV Record
     ↓
Complete Test
```

---

## 📝 Code Documentation

The automation script includes comments explaining the key steps and logic.

Comments are provided for important areas such as:

* Login and authentication
* Starting the challenge
* Reading and processing CSV data
* Locating dynamic form fields
* Filling company information
* CAPTCHA detection and manual verification
* Form submission
* Processing multiple CSV records

The comments are intended to make the automation easier to understand, maintain, and troubleshoot.

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

---

## ⚠️ Assumptions Made During Development

The following assumptions were made while developing the automation:

1. **Valid login credentials are available.**
   The test requires a valid account to access the challenge.

2. **The application is accessible and available.**
   The test assumes the Automation Challenge website is reachable and functioning normally.

3. **The CSV file follows the expected structure.**
   The test assumes `challenge - data.csv` contains the required column names and valid data.

4. **Dynamic field ID prefixes remain consistent.**
   The dynamically generated portion of the input IDs may change, but the stable field prefixes are assumed to remain consistent.

5. **CAPTCHA requires manual interaction.**
   CAPTCHA verification is intentionally handled manually and is not automated.

6. **The Submit button reflects the application's verification state.**
   After manual CAPTCHA completion, the test waits for the Submit button to become enabled before continuing.

7. **Records are processed sequentially.**
   Each CSV record is completed before moving to the next record.

8. **The application's UI structure remains reasonably stable.**
   Changes to button names, field attributes, or major DOM structures may require locator updates.

9. **The test is intended for the provided challenge environment.**
   The automation is designed around the current behavior and structure of the Automation Challenge website and may require adjustments if the application changes.

---

## 🛠️ Troubleshooting

### Playwright browser is missing

Run:

```bash
npx playwright install
```

For Linux:

```bash
npx playwright install --with-deps
```

### CSV file cannot be found

Verify that the file exists at:

```text
test-data/challenge - data.csv
```

### CAPTCHA prevents submission

Run the test in headed mode:

```bash
npx playwright test --headed
```

Complete the CAPTCHA manually when prompted.

### Dynamic field cannot be found

The challenge uses dynamic IDs. Verify that the stable ID prefix has not changed.

For example:

```ts
input[id^="company_name_input_field_"]
```

### Test artifacts

When configured, Playwright stores test results and debugging artifacts in:

```text
test-results/
```

These artifacts can be used to investigate failed test executions.

---

## 📌 Notes

This project was developed as a QA Automation assessment using Playwright and Node.js.

The implementation focuses on:

* End-to-end test automation
* Data-driven testing using CSV
* Maintainable dynamic locators
* Reusable helper functions
* Manual CAPTCHA verification
* Clear code documentation
* Sequential processing of test records
* Debuggable test execution
