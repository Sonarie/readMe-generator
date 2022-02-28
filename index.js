// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
      name: "Installation",
      message: "How will the user install your project?",
    },
    {
      type: "input",
      name: "Usage",
      message: "How will your project be used?",
    },
    {
      type: "list",
      name: "License",
      message: "Select a license",
      choices: ["mit", "mpl-2.0", "gpl-3.0", "None"],
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
    fs.writeFile("./README.md", generateMarkdown(answers), function () {
      console.log("file Written");
    });
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
