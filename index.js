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
            message: "what is the title of your project? (Required)",
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
            message: "please provide a description for your project. (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("please provide a description to your project!")
                    return false;
                }
            }
        },
        {
            type: "confrim",
            name: "installConfirm",
            message: "Would you like to include an 'Installation Instruction' section?",
            default: false
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?",
            when: ({installConfirm}) => {
                return (installConfirm ? true : false)
            }
        },
        {
            type: "confrim",
            name: "usageConfirm",
            message: "Would you like to include an 'Usage' section?",
            default: false
        },
        {
            type: "input",
            name: "usage",
            message: "please provide instruction on how use your project.",
            when: ({usageConfirm}) => {
                return (usageConfirm ? true : false)
            }
        },
        {
            type: "checkbox",
            name: "license",
            message: "please select the license right for your project.",
            choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0"]
        },
        {
            type: "confrim",
            name: "contributeConfirm",
            message: "Would you like to include an 'Contributors' section?",
            default: false
        },
        {
            type: "input",
            name: "contributors",
            message: "please provide the names of any contributors to this project.",
            when: ({contributeConfirm}) => {
                return (contributeConfirm ? true : false)
            }
        },
        {
            type: "confrim",
            name: "testConfirm",
            message: "Would you like to include an 'Test' section?",
            default: false
        },
        {
            type: "input",
            name: "test",
            message: "please provide test case for your project",
            when: ({testConfirm}) => {
                return (testConfirm ? true : false)
            }
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
