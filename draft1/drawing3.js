function drawJared(p5, x, y, width, height)
{
    let coord1 = [x + width * 0.425, y + height * 0.5];
    let coord2 = [x + width * 0.575, y + height * 0.5];
    let eyeRadius = width * 0.025;

    p5.circle(coord1[0], coord1[1], eyeRadius);
    p5.circle(coord2[0], coord2[1], eyeRadius);


    p5.noFill()
    let mouthRadius = width * 0.4;


    p5.arc(x + width * 0.5,
        y + height * 0.5,
        mouthRadius,
        mouthRadius,
        0.5,
        Math.PI - 0.5, 
        "CHORD");
} 

let xPos = 500;
let yPos = 0;

let xVel = 20;
let yVel = 22;

const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(230, 230, 230)

        let radius = p5.width * 0.4;

        xPos += xVel;
        yPos += yVel;

        if (yPos >= p5.height)
        {
            yVel = yVel * -1;
        } else if (yPos < 0)
        {
            yVel = yVel * -1;
        }


        if (xPos >= p5.width) {
            xVel = xVel * -1;
        } else if (xPos < 0) {
            xVel = xVel * -1;
        }

        p5.circle(xPos, 
            yPos, 
            100)

        p5.circle(xPos,
            yPos,
            100)


    }

}

new p5(drawing);
