const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
    pageLoadTimeout: 100000,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
