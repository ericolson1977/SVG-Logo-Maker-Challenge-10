const { Triangle, Circle, Square } = require('./shapes');
const { SVG } = require('./svg');

// This function generates the logo based on the 'answers" object. It sets the text and text color. It sets the y coordinate according to shape selected. It sets shape and shape color according to selections. Finally, it returns a complete SVG markup by calling the render method. 
function generateSvg(answers) {
    const svg = new SVG();
    const textY = answers.shape === 'triangle' ? 150 : 125;
    svg.setText(answers.text, answers.textcolor, textY);
    if (answers.shape === 'circle') {
        const circle = new Circle();
        circle.setColor(answers.shapecolor);
        svg.setShape(circle);
    } else if (answers.shape === 'square') {
        const square = new Square();
        square.setColor(answers.shapecolor);
        svg.setShape(square);
    } else if (answers.shape === 'triangle') {
        const triangle = new Triangle();
        triangle.setColor(answers.shapecolor);
        svg.setShape(triangle);
    }
    return svg.render();
}

module.exports = { generateSvg }