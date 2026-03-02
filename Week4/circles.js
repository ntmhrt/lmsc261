/*
const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(800, 800);
    }

    p5.draw = () => {
        p5.background(238, 107, 102)

        for(let cir = 0; cir < 12; cir ++)
        {
            let xPos = 50 + p5.mouseX * cir;
            let offset = p5.width * 0.1;
            let scale  = ((p5.width * 0.8)/12) * cir

            let radius = 20;
            let newRadius = cir % 3 == 0
            if(newRadius){
                radius = 30 ;
            
            }
        p5.circle(offset + scale, 300, radius);
        p5.noStroke();
        p5.fill(216, 170, 185);
        }
     



        
    }
}

new p5(drawing); 

//

const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(230, 230, 230)

        let circ = 0;
        while(circ < 20){
            let xPos = 50 + (circ * 30)//scaling and offsetting 
        p5.fill(255)
        p5.noStroke()
        p5.circle(xPos,300,50)
        }
        
        
    }
}

new p5(drawing); 


*/



