const inquirer = require('inquirer');
const fs = require('fs');
const color = require('color-name');
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const generateSvg = require('./lib/shapesold.js');

//function to validate use input as a recognizable color
function validColor(input) {
    if (hexColorRegex.test(input)) {
        return true;
    }
    if (color[input.toLowerCase()]) {
        return true;
    }
    return false;
}
// array of questions 
const questions = [
    {
        type: 'input',
        message: 'Enter text for the logo. (Must be no longer than 3 characters.)',
        name: 'text',
        validate: function (input) {
            if (input.length > 3) {
                return "Text must be 3 characters or less.";
            } return true;
        }
    },
    {
        type: 'input',
        message: 'Enter a text color',
        name: 'textcolor',
        validate: function (input) {
            if (validColor(input)) {
                return true;
            } return "Must enter a valid color or hex color code.";
        }
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
        validate: function (input) {
            if (validColor(input)) {
                return true;
            } return "Must enter a valid color or hex color code.";
        }
    },
];

// fuction to start the command line question, this also grabs the data from the generateSvg function and finally creates the logo.svg file
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

// call the init function
init();