# Playwright Automation Challenge

<<<<<<< HEAD
Automated End-to-end testing project using **Playwright with TypeScript** for the Automation Challenge.

## Prerequisites

Before running the project, make sure you have:
=======
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
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

* **Node.js 20 or higher**
* **npm**
* **Git**

<<<<<<< HEAD
Check your installed versions:
=======
Verify the installation:
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

```bash
node --version
npm --version
git --version
```

<<<<<<< HEAD
> Playwright 1.62.1 requires Node.js 20 or higher.

---

## 🚀 Project Setup
=======
> `npx` is included with npm and is used to run Playwright commands.

---

## 🚀 Setup
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

### 1. Clone the Repository

Clone the GitHub repository:

```bash
<<<<<<< HEAD
git clone <repository-url>
```

Navigate to the project directory:
=======
git clone <https://github.com/gladysfaithveloso-web/playwright-automation.git>
```

Navigate to the project:
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

```bash
cd playwright-automation
```

<<<<<<< HEAD
---

### 2. Install Dependencies

Install the project dependencies:
=======
### 2. Install Dependencies

Install the dependencies defined in `package.json`:
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

```bash
npm install
```

<<<<<<< HEAD
The project uses:

* **Playwright Test** – browser automation and test execution
* **csv-parse** – reading and parsing CSV test data
* **@types/node** – Node.js TypeScript type definitions

---

### 3. Install Playwright Browsers

Install the browsers required by Playwright:
=======
The project uses the following main dependencies:

```text
@playwright/test
@types/node
csv-parse
```

### 3. Install Playwright Browsers

Install the browser binaries required by Playwright:
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

```bash
npx playwright install
```

<<<<<<< HEAD
For Linux environments, if additional browser dependencies are required:
=======
For Linux environments where browser system dependencies are required:
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

```bash
npx playwright install --with-deps
```

---

<<<<<<< HEAD
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

### Test Files

**`tests/automation-challenge.spec.ts`**

Contains the Playwright automation test, including:

* Login
* Starting the challenge
* Reading CSV data
* Locating dynamic form fields
* Filling company information
* CAPTCHA handling
* Form submission
* Validation of the workflow

### Test Data

**`test-data/challenge - data.csv`**

Contains the company records used by the automation test.

The test reads the CSV dynamically and processes each record sequentially.

---

## ▶️ Running the Tests

### Run normally

```bash
npm test
```

### Run with the browser visible

Recommended when manually interacting with CAPTCHA:

```bash
npm run test:headed
```

### Run in debug mode

```bash
npm run test:debug
```

### Run a specific test file

```bash
npx playwright test tests/automation-challenge.spec.ts
```
=======
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
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

---

## 🤖 CAPTCHA Handling

<<<<<<< HEAD
The application may display a reCAPTCHA as an anti-bot security measure.

The automation **does not attempt to bypass or solve the CAPTCHA programmatically**.

When a CAPTCHA is detected:

1. The test detects the CAPTCHA.
2. The test pauses/waits for manual verification.
3. Complete the CAPTCHA manually in the browser.
4. Once the application allows submission, the test continues.
5. The form is submitted normally.
=======
The application may display a reCAPTCHA before allowing the form to be submitted.

The automation does **not attempt to solve or bypass the CAPTCHA**.

When a CAPTCHA is detected, the script:

1. Detects the CAPTCHA popup.
2. Opens the CAPTCHA widget.
3. Allows the user to complete the CAPTCHA manually.
4. Waits for the application's **Submit** button to become enabled.
5. Continues with the automated submission.

Because CAPTCHA verification is designed to prevent automated interaction, manual verification is required during test execution.
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

Run the test in headed mode:

```bash
<<<<<<< HEAD
npm run test:headed
```

If CAPTCHA verification is required, complete it manually before continuing the test.

> **Note:** CAPTCHA behavior may vary depending on the environment, browser session, network, and number of submissions.

---

## 📊 Test Data Processing

The automation reads the CSV file using `csv-parse`.

Each row contains:
=======
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
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

| Field                            | Description                    |
| -------------------------------- | ------------------------------ |
| `employer_identification_number` | Employer identification number |
| `company_name`                   | Company name                   |
| `sector`                         | Company sector                 |
| `company_address`                | Company address                |
| `automation_tool`                | Automation tool used           |
| `annual_automation_saving`       | Annual automation savings      |
| `date_of_first_project`          | Date of the first project      |

<<<<<<< HEAD
The test processes each CSV record sequentially and fills the corresponding dynamic form fields.
=======
The test reads the CSV and processes each company record sequentially.
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

---

## 🔍 Dynamic Field Handling

<<<<<<< HEAD
The challenge generates dynamic input IDs.

Instead of relying on the complete ID, the automation identifies fields using their stable ID prefixes.
=======
The challenge uses dynamically generated input IDs.

The automation therefore uses stable ID prefixes rather than relying on the complete dynamic ID.
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

For example:

```ts
input[id^="company_name_input_field_"]
```

<<<<<<< HEAD
This allows the test to locate the current field even when the dynamically generated portion of the ID changes.

---

## 🧪 Test Execution Flow

The automation follows this workflow:

```text
Clone Repository
       ↓
Install Dependencies
       ↓
Install Playwright Browsers
       ↓
Launch Application
       ↓
Login
       ↓
Start Challenge
       ↓
Read CSV Test Data
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
=======
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
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270
Complete Test
```

---

<<<<<<< HEAD
## 🛠️ Available NPM Commands

The project includes the following commands:

```bash
# Run all tests
npm test

# Run tests with browser visible
npm run test:headed

# Run tests in debug mode
npm run test:debug
```

---

## 📸 Test Results and Debugging

Playwright automatically generates test artifacts when a test fails.

Check:

```text
test-results/
```

Depending on the Playwright configuration, this may contain:

* Screenshots
* Error context
* Traces
* Other debugging artifacts

For additional debugging, run:

```bash
npm run test:debug
=======
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
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270
```

---

<<<<<<< HEAD
## ⚠️ Troubleshooting

### `node: command not found`

Install Node.js 20 or higher and verify:

```bash
node --version
```

---

=======
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

>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270
### Playwright browser is missing

Run:

```bash
npx playwright install
```

For Linux:

```bash
npx playwright install --with-deps
```

<<<<<<< HEAD
---

### CSV file cannot be found

Make sure the file exists at:
=======
### CSV file cannot be found

Verify that the file exists at:
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

```text
test-data/challenge - data.csv
```

<<<<<<< HEAD
The filename and folder structure should match the test configuration.

---

=======
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270
### CAPTCHA prevents submission

Run the test in headed mode:

```bash
<<<<<<< HEAD
npm run test:headed
=======
npx playwright test --headed
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270
```

Complete the CAPTCHA manually when prompted.

<<<<<<< HEAD
The CAPTCHA is intentionally not bypassed or solved programmatically.

---

### Dynamic field not found

The challenge uses dynamically generated field IDs.

The automation uses ID prefixes such as:
=======
### Dynamic field cannot be found

The challenge uses dynamic IDs. Verify that the stable ID prefix has not changed.

For example:
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

```ts
input[id^="company_name_input_field_"]
```

<<<<<<< HEAD
If the application's DOM structure changes, inspect the current field IDs and update the locator accordingly.

---

## 🔐 Credentials

Credentials required by the challenge should **not be committed to the repository**.

For a production implementation, credentials should be supplied through environment variables or another secure credential-management mechanism.

Example:

```text
.env
```

The `.env` file should be added to `.gitignore`:

```text
.env
```

---

## 📦 Dependencies

The project intentionally keeps dependencies minimal.

### Development Dependencies

```json
"devDependencies": {
  "@playwright/test": "^1.62.1",
  "@types/node": "^26.4.0"
}
```

### Runtime Dependencies

```json
"dependencies": {
  "csv-parse": "^7.0.2"
}
```

---

## 👩‍💻 Author

**Gladys Faith Veloso**

QA Engineer | Automation Testing
=======
### Test artifacts

When configured, Playwright stores test results and debugging artifacts in:

```text
test-results/
```

These artifacts can be used to investigate failed test executions.
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270

---

## 📌 Notes

<<<<<<< HEAD
This project was created as part of a QA Automation assessment.

The automation focuses on:

* Maintainable Playwright locators
* Dynamic field handling
* Data-driven testing using CSV
* End-to-end workflow automation
* CAPTCHA-aware test execution
* Clear test structure and reusable helper functions
* Debugging and test reporting
=======
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
>>>>>>> 2a49b43ebb0c6288dd98022d791dbb26a21a7270
