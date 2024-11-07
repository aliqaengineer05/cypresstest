const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com", // Set the base URL for the tests
    specPattern: "cypress/e2e/**/*.spec.js", // Update this to point to the correct folder
    setupNodeEvents(on, config) {
      // Implement Node event listeners here if needed
    },
    video: true,  // Enable video recording of test runs
    screenshotsFolder: "cypress/screenshots",  // Folder for storing failed test screenshots
    videosFolder: "cypress/videos",  // Folder for storing test videos
    supportFile: false,  // Disable the support file if not needed
    //experimentalSessionAndOrigin: true,  // Enable session caching support
    // defaultCommandTimeout: 10000, // Global timeout for commands like `cy.get()`
    // pageLoadTimeout: 60000, // Timeout for waiting for the page to load
    // requestTimeout: 5000, // Timeout for requests like `cy.request()`
    // responseTimeout: 30000, // Timeout for HTTP responses
    // retries: {
    //   runMode: 2, // Number of retries for failed tests in run mode
    //   openMode: 0, // Number of retries when running tests in open mode
    // }
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": true,
      "html": true,
      "json": true
    }
  },

 
  
});
