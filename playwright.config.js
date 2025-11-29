// Root Playwright configuration for the suite repo (ESM)
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
   testDir: "tests/",
   // Parallel execution settings
   workers: 1, // Use 2 workers
   //retries: 1, // Retry failed tests once
   // Wether to run tests in parallel within the same file
   fullyParallel: true,
   // Timeout per test
   timeout: 30_000,
   use: {
    // Base URL - use relative paths in tests! 
    baseURL: "http://training.skillo-bg.com:4300",
    // Base options  
    headless: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
   },
   // Reporter
   reporter: [["html"]],
   // Cross-browser projects
   // projects: [
   //  { name: "chromium", use: { ...devices["Desktop Chrome"] } },
   //  { name: "firefox", use: { ...devices["Desktop Firefox"] } },
   //  { name: "webkit", use: { ...devices["Desktop Safari"] } },
   // ],
});