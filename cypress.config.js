const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    viewportHeight:720,
    viewportWidth:1270,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
