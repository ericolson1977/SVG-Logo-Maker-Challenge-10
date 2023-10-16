const inquirer = require('inquirer');
const fs = require('fs');


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

