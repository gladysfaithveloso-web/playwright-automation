## 📋 Prerequisites

Before setting up the project, make sure the following are installed:

* **Node.js 20 or higher**
* **npm**
* **Git**
* An **existing account** on [The Automation Challenge](https://www.theautomationchallenge.com/)

### 🔐 Account Requirement

Before running the automation, you must **sign up for an account using an existing email address** on the Automation Challenge website.

The test does **not** automate account registration. It assumes that the account already exists and can be used to log in.

You will need the following credentials:

* **Email address** used during registration
* **Password** associated with the account

> **Important:** Do not add your actual credentials to the source code or commit them to GitHub.

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
git clone https://github.com/gladysfaithveloso-web/playwright-automation.git
```

Navigate to the project:

```bash
cd playwright-automation
```

### 2. Install Dependencies

```bash
npm install
```

The project uses:

```text
@playwright/test
@types/node
csv-parse
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

For Linux environments where browser system dependencies are required:

```bash
npx playwright install --with-deps
```

---

## ▶️ How to Run the Automation

The login credentials are supplied through environment variables when starting the test. This avoids storing credentials directly in the source code.

### Run the Automation Challenge

Replace the email and password with the credentials of your existing account:

```bash
TEST_EMAIL="email" TEST_PASSWORD="password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

For example:

```bash
TEST_EMAIL="your-email@example.com" TEST_PASSWORD="your-password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

### What Happens When the Test Runs

The automation will:

1. Open the Automation Challenge website.
2. Open the login page.
3. Log in using the supplied credentials.
4. Start the challenge.
5. Read the company data from the CSV file.
6. Fill in each company's information.
7. Detect the CAPTCHA when required.
8. Allow the CAPTCHA to be completed manually.
9. Wait for the application to enable the **Submit** button.
10. Submit the record.
11. Continue with the next CSV record.

> **Note:** The `--headed` option is required for the manual CAPTCHA step because it allows you to see and interact with the browser.

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

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

The credentials are provided at runtime:

```bash
TEST_EMAIL="email" TEST_PASSWORD="password" npx playwright test -g "Automation Challenge Submission Testing" --headed
```

Credentials are intentionally not hardcoded in the test and should never be committed to the public repository.
