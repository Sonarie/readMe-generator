// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
var toc = require("markdown-toc");

// TODO: Create an array of questions for user input
// const questions = () => {

inquirer
  .prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "Description",
      message: "Please provide a description of your project.",
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "Please provide a table of contents",
    },
    {
      type: "input",
      name: "Intallation",
      message: "How will the user install your project?",
    },
    {
      type: "input",
      name: "Usage",
      message: "How will your project be used?",
    },
    {
      type: "input",
      name: "License",
      message: "Please provide the licensing information",
    },
    {
      type: "input",
      name: "Contributing",
      message: "Who is contributing to your project.",
    },
    {
      type: "input",
      name: "Tests",
      message: "Which tests you would like to include?",
    },
    {
      type: "input",
      name: "Questions",
      message: "Are there any FAQ's?",
    },
  ])

  // TODO: Create a function to write README file
  //function writeToFile(fileName, data) {}
  .then((answers) => {
    fs.writeFile(generateMarkdown(answers), "./utils/generateMarkdown.js"),
      then(
        fs.copyFileSync(
          generateMarkdown(answers),
          "./utils/generateMarkdown.js"
        )
      );
  })

  .catch((error) => {
    if (error.isTtyError) {
      console.log("Something went wrong, file not generated.");
    }
  });
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//questions()
