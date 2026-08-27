# Playwright Automation Challenge

Automated End-to-end testing project using **Playwright with TypeScript** for the Automation Challenge.

## Prerequisites

Before running the project, make sure you have:

* **Node.js 20 or higher**
* **npm**
* **Git**

Check your installed versions:

```bash
node --version
npm --version
git --version
```

> Playwright 1.62.1 requires Node.js 20 or higher.

---

## 🚀 Project Setup

### 1. Clone the Repository

Clone the GitHub repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd playwright-automation
```

---

### 2. Install Dependencies

Install the project dependencies:

```bash
npm install
```

The project uses:

* **Playwright Test** – browser automation and test execution
* **csv-parse** – reading and parsing CSV test data
* **@types/node** – Node.js TypeScript type definitions

---

### 3. Install Playwright Browsers

Install the browsers required by Playwright:

```bash
npx playwright install
```

For Linux environments, if additional browser dependencies are required:

```bash
npx playwright install --with-deps
```

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

---

## 🤖 CAPTCHA Handling

The application may display a reCAPTCHA as an anti-bot security measure.

The automation **does not attempt to bypass or solve the CAPTCHA programmatically**.

When a CAPTCHA is detected:

1. The test detects the CAPTCHA.
2. The test pauses/waits for manual verification.
3. Complete the CAPTCHA manually in the browser.
4. Once the application allows submission, the test continues.
5. The form is submitted normally.

Run the test in headed mode:

```bash
npm run test:headed
```

If CAPTCHA verification is required, complete it manually before continuing the test.

> **Note:** CAPTCHA behavior may vary depending on the environment, browser session, network, and number of submissions.

---

## 📊 Test Data Processing

The automation reads the CSV file using `csv-parse`.

Each row contains:

| Field                            | Description                    |
| -------------------------------- | ------------------------------ |
| `employer_identification_number` | Employer identification number |
| `company_name`                   | Company name                   |
| `sector`                         | Company sector                 |
| `company_address`                | Company address                |
| `automation_tool`                | Automation tool used           |
| `annual_automation_saving`       | Annual automation savings      |
| `date_of_first_project`          | Date of the first project      |

The test processes each CSV record sequentially and fills the corresponding dynamic form fields.

---

## 🔍 Dynamic Field Handling

The challenge generates dynamic input IDs.

Instead of relying on the complete ID, the automation identifies fields using their stable ID prefixes.

For example:

```ts
input[id^="company_name_input_field_"]
```

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
Complete Test
```

---

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
```

---

## ⚠️ Troubleshooting

### `node: command not found`

Install Node.js 20 or higher and verify:

```bash
node --version
```

---

### Playwright browser is missing

Run:

```bash
npx playwright install
```

For Linux:

```bash
npx playwright install --with-deps
```

---

### CSV file cannot be found

Make sure the file exists at:

```text
test-data/challenge - data.csv
```

The filename and folder structure should match the test configuration.

---

### CAPTCHA prevents submission

Run the test in headed mode:

```bash
npm run test:headed
```

Complete the CAPTCHA manually when prompted.

The CAPTCHA is intentionally not bypassed or solved programmatically.

---

### Dynamic field not found

The challenge uses dynamically generated field IDs.

The automation uses ID prefixes such as:

```ts
input[id^="company_name_input_field_"]
```

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

---

## 📌 Notes

This project was created as part of a QA Automation assessment.

The automation focuses on:

* Maintainable Playwright locators
* Dynamic field handling
* Data-driven testing using CSV
* End-to-end workflow automation
* CAPTCHA-aware test execution
* Clear test structure and reusable helper functions
* Debugging and test reporting
