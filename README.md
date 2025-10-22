Installation:

Go to nodejs website to download the current file to use Cypress and follow the installation steps. To verify that nodejs has been installed, go to your terminal and type the command "node --version" and also type the node package command "npm --version"

Project setup:

1. Make a directory folder from your terminal, and once you're inside the directory you've created, type the npm initialize command "npm init" to start creating your project. Follow the prompts as you go along.

2. Once you completed creating your project setup, you can proceed by installing the tools that you will use for test automation. To install cypress type "npm install cypress".

3. To install the remaining tools enter these commands "npm install mocha", "npm install chai", "npm install @badeball/cypress-cucumber-preprocessor", "npm install @bahmutov/cypress-esbuild-preprocessor"

4. To run cypress.io enter "npx run cypress".

5. Once cypress is open you can follow the prompts to complete the setup process.

6. If you currently have VS Studio Code installed in your computer go to your terminal and type and enter "code" to launch the IDE.

Configurations:

1. Go to the configuration file and import the tools for 'cypress-cucumber-preprocessor' and 'cypress-esbuild-preprocessor'. You can also type this as follows "const createBuilder = require('cypress-esbuild-preprocessor')", and "const addCucumberpreprocessor = require('cypress-cucumber-preprocessor').addCucumberpreprocessorPlugin".

2. Now type the next tool for esbuild "const createEsbuildplugin = require('cypress-cucumber-preprocessor/esbuild').addEsbuildPlugin"

3. Go inside the setupNodeEvents and type "const build = createBuilder({ plugins: [createEsbuilderplugin(config)] })"

4. The next line of code you will use the file processor command by using the "on" function. Type the following; on('file:preprocessor')

5. Now type "addCucumberpreprocessor(on, config)". It is used to use all of the commands from the Gherkin feature file.

6. The next line of code, simply type "return config".

7. On the next line outside the closing braces, you need to select the specPattern, it is used to specify the location of the feature file in the root folder. Type the following command "specPattern: "**/*.feature" (the first asterik indicates the project folder, the second asterik indicates the root folder, "/" change directory, "the asterik after the foward slash indicates the feature folder containing the targeted feature file that will contain the Gherkin language")"

Setup and script commands:

1. In order to create custom script commands you will need to go to the project.json file.

2. Under the "script" section is where you can create the commands that you will use on your terminal. To select a browser in cypress, type the command "(type name of the comand here)" : "cypress open --e2e --browser (name of browser - either chrome, electron, or edge)" for instance "cypress:open:chrome": "cypress open --e2e --browser chrome"

3. On your terminal enter "npm run cypress:open:chrome", and it will execute the command to select a browser of your choosing.

4. To create a script command to execute test script step definitions without using a browser (or go headless), you will need to create a command similar to the previous version, but in this instance, you would have to type the cypress command to specify the location of the step definition file inside the features folder.

5. Go to the package.json file, and type this command as follows; "(enter name of the command here)": "cypress run --spec=cypress/features/* --e2e --browser chrome" (--spec "specify the location path from the root folder", /* "the location of all the step definition files that will be executed inside the features folder")

6. Once you completed that script command, try to use the command in your terminal by typing "npm run "name of the command you created" (example: npm run "cypress:run:chrome")".
