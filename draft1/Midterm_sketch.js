const drawing = (p5) => {

  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.strokeWeight(2);
    p5.noFill();

    leftBottomCoords = [p5.width * 0.2, p5.height * 0.8];
    leftTopCoords = [p5.width * 0.2, p5.height * 0.4];
    centerBottomCoords = [p5.width * 0.5, p5.height * 0.8 ];
    centerTopCoords = [p5.width * 0.5, p5.height * 0.4 ];
    rightBottomCoords = [p5.width * 0.7, p5.height * 0.6 ];
    rightTopmCoords = [p5.width * 0.7, p5.height * 0.2 ];

    TopArcCoords = [p5.width * 0.7, p5.height * 0.4 ];
    TopArcStart = Math.PI;
    TopArcEnd = TopArcStart + Math.PI * 0.5

    BottomArcCoords =[p5.width * 0.7, p5.height * 0.8 ];
    BottomArcStart = Math.PI;
    BottomArcEnd = TopArcStart + Math.PI * 0.5
    arcSize = p5.height * 0.4;

  };

  p5.draw = () => {
    p5.background(230, 230, 230);

    p5.line(
      leftBottomCoords[0], leftBottomCoords[1],
      leftTopCoords[0],    leftTopCoords[1]
    );
    p5.line(
      leftBottomCoords[0], leftBottomCoords[1],
      centerBottomCoords[0], centerBottomCoords[1]
    )
    p5.line(
       leftTopCoords[0], leftTopCoords[1],
       centerTopCoords[0], centerTopCoords[1]
    )
    p5.line(
       centerBottomCoords[0], centerBottomCoords[1],
       centerTopCoords[0], centerTopCoords[1]
    )
    p5.line(
      rightTopmCoords[0], rightTopmCoords[1],
      rightBottomCoords[0], rightBottomCoords[1]
    )

    p5.arc(
        TopArcCoords[0], TopArcCoords[1],
        arcSize, arcSize,
        TopArcStart,
        TopArcEnd

    )
     p5.arc(
        BottomArcCoords[0], BottomArcCoords[1],
        arcSize, arcSize,
        TopArcStart,
        TopArcEnd
     )
  };
};

new p5(drawing);



