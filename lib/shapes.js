// Class Shape establishes a base class for the shape options. 
class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}

// The following classes inherit properties from the Shape class. The render functions give specific dimensions and user selected colors for the various shapes.
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

module.exports = { Triangle, Circle, Square }