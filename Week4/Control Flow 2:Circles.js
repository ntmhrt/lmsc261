const drawing = p5 => {
    p5.setup = () => { 
        p5.createCanvas(600, 600); 
    }

   p5.draw = () => {
        p5.background(230, 200, 120)

        for (let circle = 0; circle < 26; circle++) {
            let posOffsetX = 50; 
            let posScaleX = (500/26) * circle; 
            let posOffsetY = 50; 
            let posScaleY = (500/26) * circle; 
            let radius = 10;
			if (circle % 2 == 0) {
				radius = 15;
			}
            
		

 p5.noStroke();
 if (circle % 2 == 0) {
 p5.fill(150, 250, 150);
} else {
 p5.fill(300, 120, 200);
}

p5.circle(posOffsetX + posScaleX, 300, radius); 
p5.circle(300, posOffsetY + posScaleY, radius); 
       
    }
}
}

new p5(drawing); 