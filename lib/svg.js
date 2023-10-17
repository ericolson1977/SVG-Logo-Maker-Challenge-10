//The class SVG is a container for the text and shapes.
class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }
    //This method concatenates the user's selected shape and text and returns the complete SVG string.
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
    // They textY parameter allows for he variation in the vertical placement of the text from shape to shape. 
    setText(text, textColor, textY = 125) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = `<text x="150" y="${textY}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
    setShape(shape) {
        this.shape = shape.render();
    }
}

module.exports = { SVG }