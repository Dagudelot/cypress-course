const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.utest.com/",
    // pageLoadTimeout: 30000,
    // watchForFileChanges: false,
    // retries: { "openMode": 1, "runMode": 0 },
    viewportHeight: 1000,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
