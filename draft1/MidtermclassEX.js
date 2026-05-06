function drawDuck(p5, x, y, width, height) // modified with parameters
{
    let centerCoords = [x + width * 0.5, y + height * 0.5];
    let centerArcSize = width * 0.8;
    let centerArcStartAngle = 0.0;
    let centerArcEndAngle = centerArcStartAngle + Math.PI;

    // left line
    let leftCoords = [x + width * 0.1, y + height * 0.5];

    // right arc
    let rightArcCoords = [x + width * 0.7, y + height * 0.5];
    let rightArcSize = width * 0.4;
    let rightArcStartAngle = Math.PI;
    let rightArcEndAngle = rightArcStartAngle + Math.PI;

    let eyeCoords = [x + width * 0.75, y + height * 0.4];
    let eyeSize = width * 0.025;

    // draw bottom arc
    p5.noFill(); // p5 now exists, as it's passed as an argument. 
    p5.stroke(255)
    p5.arc(centerCoords[0],
        centerCoords[1],
        centerArcSize,
        centerArcSize,
        centerArcStartAngle,
        centerArcEndAngle);

    // draw left line
    p5.line(leftCoords[0], leftCoords[1], centerCoords[0], centerCoords[1])

    // draw right arc
    p5.arc(rightArcCoords[0],
        rightArcCoords[1],
        rightArcSize,
        rightArcSize,
        rightArcStartAngle,
        rightArcEndAngle);

    // draw eye
    p5.circle(eyeCoords[0], eyeCoords[1], eyeSize);
}

const drawing = p5 => {
    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(20)
        const numDrawings = 8;
        for (let i = 0; i < numDrawings; i++) {
            let size = p5.width / numDrawings;
            let xPos = size * i;

            drawDuck(p5, 
                xPos, 
                (p5.height * 0.5) - (size * 0.5), 
                size, 
                size);
        }
    }
}

new p5(drawing); 
