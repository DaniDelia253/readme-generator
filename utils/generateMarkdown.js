// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('inputting data into md file')
  return `
  # ${data.title}

  license badge
  
  ## Description 
  
  To see the github repository for this project, check out [the VSCode repository]*****REPO LINK HERE*).
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  
  
  
  ## Usage 
  
  
  
  ## License
  
  
  
  ## Contributing
  
  
  
  ## Tests
  
  
  
  ## Questions
  
  Feel free to reach out! 
  
  * [Visit my GitHub Profile](https://github.com/DaniDelia253)
  * [Send me an Email](mailto:danidavis321@gmail.com)
`;
}

module.exports = generateMarkdown;
