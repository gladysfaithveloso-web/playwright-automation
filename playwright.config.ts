import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 230000,

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  workers: 1,
});