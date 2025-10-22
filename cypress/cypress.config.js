const { defineConfig } = require("cypress");
const builder = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberpreprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuild = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const build = builder({
        plugins: [createEsbuild(config)]
      })
      on('file:preprocessor', build)
      addCucumberpreprocessor(on, config)
      return config
    },
    specPattern: "**/*.feature"
  },
});

