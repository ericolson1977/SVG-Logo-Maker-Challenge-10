const inquirer = require('inquirer');
const fs = require('fs');
const { questions } = require('./lib/questions');
const { generateSvg } = require('./lib/generatesvg');

// This fuction starts the command line prompts, this also grabs the data from the generateSvg function and finally creates the logo.svg file.
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const svg = generateSvg(answers);
            fs.writeFile('logo.svg', svg, function (error) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Generated logo.svg');
                }
            })
        });
};

// Calling the init function.
init();