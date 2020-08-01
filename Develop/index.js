const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: "What is your project's name? (Required)",
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log("Please enter your project's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Please write a short description of your project.",
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GPL', 'Apache', 'BSD', 'LGPL', 'None']
        },
        {
            type: 'input',
            name: 'install',
            message: "What command should be run to install dependencies?",
        },
        {
            type: 'input',
            name: 'tests',
            message: "What command should be run to perform tests?",
        },
        {
            type: 'input',
            name: 'repo',
            message: "What does the user need to know about using the repo?",
        },
        {
            type: 'input',
            name: 'contributions',
            message: "What does the user need to know about contributing to the repo?",
        },

])};

const mockData = {
    github: 'taylornyquist',
    email: 'tnyquist@gmail.com',
    project: 'readme-generator',
    description: 'short description of my project',
    license: [ 'MIT' ],
    install: 'npm install inquirer',
    tests: 'node index.js',
    repo: 'things user needs to know about repo',
    contributions: 'open a pull request or email me'
  };

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

questions()
    .then(answers => {
        console.log(answers);
    })
    .catch(err => {
        console.log(err);
    });