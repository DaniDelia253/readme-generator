// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require ('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                //project title
                type: 'input',
                name: 'title',
                message: 'What is the title of this project?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter the project title!');
                        return false
                    }
                }
            },
            {
                //description of the project
                type: 'input',
                name: 'description',
                message: 'Enter a description for your project:',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter your project description');
                        return false
                    }
                }
            },
            {
                // github repo to be linked in the description of the project
                type: 'input',
                name: 'projectRepo',
                message: 'Enter a link to the GitHub repository for this project:',
                validate: projectRepoInput => {
                    if (projectRepoInput) {
                        return true;
                    } else {
                        console.log("Please enter the link to your project's repo!");
                        return false
                    }
                }
            },
            {
                //installation instructions
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions for your project:',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log("Please enter your project's installation info!");
                        return false
                    }
                }
            },
            {
                //usage information
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for usage of the project:',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please provide usage instructions!');
                        return false
                    }
                }
            },
            {
                //choose a license from a list of options
                //will add a badge and description of the license
                type: 'list',
                name: 'license',
                message: 'Which license would you like to use?',
                choices: ['MIT License','Mozilla Public License 2.0','Apache License 2.0','Boost Software License 1.0','The Unlicense','GNU Affero General Public License v3.0 (GNU AGPLv3)','GNU General Public License v3.0 (GNU GPLv3)','GNU Lesser General Public License v3.0 (GNU LGPLv3)'],
                validate: licenseInput => {
                    if (licenseInput) {
                        return true;
                    } else {
                        console.log('Please choose a license!');
                        return false
                    }
                }
            },
            {
                //contribution guidelines
                type: 'input',
                name: 'contributing',
                message: 'Add contribution guidelines for other developers contributing to your project:',
                validate: contributingInput => {
                    if (contributingInput) {
                        return true;
                    } else {
                        console.log('Please enter contribution guidelnes!');
                        return false
                    }
                }
            },
            {
                //test instructions
                type: 'input',
                name: 'tests',
                message: 'Provide tests for your project:',
                default: 'No tests currently available'
            },
            {
                //github username for question section
                type: 'input',
                name: 'githubProfile',
                message: 'Enter your GitHub username:',
                validate: githubProfileInput => {
                    if (githubProfileInput) {
                        return true;
                    } else {
                        console.log('Please enter your project description');
                        return false
                    }
                }
            },
            {
                //email address for question section
                type: 'input',
                name: 'emailAddress',
                message: 'Enter your email address:',
                validate: emailAddressInput => {
                    if (emailAddressInput) {
                        return true;
                    } else {
                        console.log('Please enter your project description');
                        return false
                    }
                }
            }
        ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(generateMarkdown);
}

// Function call to initialize app
init();