import { PlaywrightTestConfig } from '@playwright/test';

export const defaultViewport = {
  width: 1280,
  height: 720,
}
const config: PlaywrightTestConfig = {
  reporter: [
    ['list'],
  ],
  timeout: 60 * 1000 * 2,
  retries: 0,
  expect:  {
    timeout: 30000,
  },
  repeatEach: 10,
  use: {
    headless: true,
    viewport: defaultViewport,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    trace: "retain-on-failure",
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
  ],
  webServer: {
    command: 'node app.js',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: false,
  },
}

export default config;
