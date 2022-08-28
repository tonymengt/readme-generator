// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadme = require("./src/readme-template")
const {writeFile} = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "title",
        message: "what is the title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("please provide a title to your project!")
                return false;
            }
        }
        },
        {
            type: "input",
            name: "description",
            message: "please provide a description for your project."
        },
        {
            type: "confirm",
            name: "tableContentConfirm",
            message: "would you like to create a table of contents?",
            default: true
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "please provide instruction on how use your project."
        },
        {
            type: "list",
            name: "license",
            message: "please select the license right for your project.",
            choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0"]
        },
        {
            type: "input",
            name: "contributing",
            message: "please provide the names of any contributors to this project."
        },
        {
            type: "input",
            name: "test",
            message: "please provide test case for your project"
        },
        {
            type: "input",
            name: "username",
            message: "what is your GitHub username? (required)",
            validate: username => {
                if (username){
                    return true;
                } else {
                    console.log("please provide your github username!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "what is your email address? (required)",
            validate: email => {
                if (email){
                    return true;
                } else {
                    console.log("please provide your email address!")
                    return false;
                }
            }
        }
    ]);
};
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

questions()
    .then(questions => {
        return generateReadme(questions);
    })
    .then(output => {
        return writeFile(output);
    })
    .catch(err => {
        console.log(err);
    });
