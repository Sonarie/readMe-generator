// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = () => {
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project.",
    },
    {
      type: "input",
      name: "intallation",
      message: "How will the user install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How will your project be used?",
    },
    {
      type: "input",
      name: "license",
      message: "Please provide the licensing information",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who is contributing to your project.",
    },
    {
      type: "input",
      name: "tests",
      message: "Which tests you would like to include?",
    },
    {
      type: "input",
      name: "questions",
      message: "Are there any FAQ's?",
    },
  ])};



function generateMarkdown(data){
  return`# ${data.title}
  ${badge}
  ${data.Description}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](*questions)
  ### Installation:
  Here is a step by step guide to installing this project
  ${data.installation}
  ### Usage: ${data.usage} 
  ### License:
  This project is licensed by:
  ${data.license}
  ## Contributing:
  ${data.contributing}
  ## Tests:
  ${data.tests}
  ## Questions:
  ${data.questions}

  `
}

questions()
.then(data) => writeFileAsync('generateMarkdown.js', generateMD(data))
.then(() => console.log('Sucessfully generated to README'))
.catch((err) => console.error(err));


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//questions()
