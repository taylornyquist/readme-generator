const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
        name: 'title',
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
        type: 'list',
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

];

const mockData = {
    github: 'taylornyquist',
    email: 'tnyquist@gmail.com',
    title: 'readme-generator',
    description: 'short description of my project',
    license: ['MIT'],
    install: 'npm install inquirer',
    tests: 'node index.js',
    repo: 'things user needs to know about repo',
    contributions: 'open a pull request or email me'
};

// function to write README file
function writeToFile(data) {
    console.log(data);
    fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
        if (err) throw err;
        console.log("Success! README.md has been created!");
    }
    )
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(data => {
            // console.log(data);
            writeToFile(data);
        });

};

// function call to initialize program
init();