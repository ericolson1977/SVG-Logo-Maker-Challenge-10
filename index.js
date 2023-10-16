const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./shapes.js');

const questions = [
    {
        type: 'input',
        message: 'Enter text for the logo. (Must be no longer than 3 characters.)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a text color',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'Select a shape for the logo',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter a shape color',
        name: 'shapecolor',
    },
];


function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const svg = generateSvg(answers);
        fs.writeFile('logo.svg', svg, function(error) {
            if (error) {
                console.log(error);
            } else {
                console.log('Generated logo.svg');
            }
        })
    });
};


init();