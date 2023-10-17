const color = require('color-name');
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

//This is a function to validate use input as a recognizable color.
function validColor(input) {
    if (hexColorRegex.test(input)) {
        return true;
    }
    if (color[input.toLowerCase()]) {
        return true;
    }
    return false;
}
// This is an array of questions to bbe used by the inquirer prompts. 
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

module.exports = { questions }