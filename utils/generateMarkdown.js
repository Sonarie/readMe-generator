// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return `https://choosealicense.com/licenses/${license}/`;
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title}
    ${renderLicenseBadge(answers.License)}
    
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  ${renderLicenseLink(answers.License)}
  * [Questions](#questions)

  ## Description
  ${answers.Description}

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## Contributing
  ${answers.Contributing}

  ## Tests
  ${answers.Tests}

  ## License
  ${renderLicenseSection(answers.License)}

  ## Questions
  ${answers.Questions}
`;
}

module.exports = generateMarkdown;
