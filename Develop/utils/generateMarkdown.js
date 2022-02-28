// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {

// };

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${answers.License}
  ${answers.Decription}
  ${answers.Installation}
  ${answers.Usage}
  ${answers.Contributing}
  ${answers.Tests}
  ${answers.Questions}
`;
}

module.exports = generateMarkdown;

//${
//   toc(
//     "# Installation\n\n# Usage\n\n# License\n\n# Contributing\n\n# Tests\n\n# Questions"
//   ).content
// }
