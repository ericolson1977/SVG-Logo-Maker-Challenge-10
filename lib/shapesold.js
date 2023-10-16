
function generateSvg(userData) {
    const { text, textcolor, shape, shapecolor } = userData;
    let shapeSvg;
    if (shape === 'circle') {
        shapeSvg = `<circle cx="150" cy="100" r="80" fill="${shapecolor}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;
    } else if (shape === 'square') {
        shapeSvg = `<rect x="90" y="40" width="120" height="120" fill="${shapecolor}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;
    } else if (shape === 'triangle') {
        shapeSvg = `<polygon points="150, 18 244, 182 56, 182" fill="${shapecolor}" />
                    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;
    } else {
        shapeSvg = '';
    }

    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shapeSvg} 
                </svg>`;
    return svg;
}
module.exports = generateSvg;