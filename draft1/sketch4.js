function drawBook(p5, x, y, w, h) {
  let leftBottomCoords = [x + w * 0.2, y + h * 0.8];
  let leftTopCoords = [x + w * 0.2, y + h * 0.4];
  let centerBottomCoords = [x + w * 0.5, y + h * 0.8];
  let centerTopCoords = [x + w * 0.5, y + h * 0.4];
  let rightBottomCoords = [x + w * 0.7, y + h * 0.6];
  let rightTopCoords = [x + w * 0.7, y + h * 0.2];

  p5.fill(0);
  p5.quad(
    leftTopCoords[0], leftTopCoords[1],
    centerTopCoords[0], centerTopCoords[1],
    centerBottomCoords[0], centerBottomCoords[1],
    leftBottomCoords[0], leftBottomCoords[1]
  );

  p5.noFill();

  let arcSize = h * 0.4; // arc hight
  let r = arcSize / 2; //determine arc radius

  let topArcCenter = [x + w * 0.7, y + h * 0.4];
  let bottomArcCenter = [x + w * 0.7, y + h * 0.8];

 
  let targetX = p5.constrain  // regulate the region each arc is drawn
  ( p5.mouseX, centerTopCoords[0], rightTopCoords[0]);

  // (cx, yx)  -> center coordinate of the circle
  // x distance = cx + r * cos(θ)　
  // cos(θ) = x , sin(θ) = y

  let cosValue = (targetX - topArcCenter[0]) / r; //　the ratio how much it is tild (ratio of distance between cx(topArcCenter) and target X) / r
  cosValue = p5.constrain(cosValue, -1, 1);  // possible cosValue

  // drawing circle from left to top 
  // acos -> fixed value between  0~π
  // TWO_PI -> 2π（whole circle）
  let topArcStart = Math.PI;
  let topArcEnd = p5.TWO_PI - Math.acos(cosValue);

  let bottomArcStart = Math.PI;
  let bottomArcEnd = p5.TWO_PI - Math.acos(cosValue);

  p5.line(
    leftBottomCoords[0], leftBottomCoords[1],
    leftTopCoords[0], leftTopCoords[1]
  );

  p5.line(
    leftBottomCoords[0], leftBottomCoords[1],
    centerBottomCoords[0], centerBottomCoords[1]
  );

  p5.line(
    leftTopCoords[0], leftTopCoords[1],
    centerTopCoords[0], centerTopCoords[1]
  );

  p5.line(
    centerBottomCoords[0], centerBottomCoords[1],
    centerTopCoords[0], centerTopCoords[1]
  );

  p5.line(
    rightTopCoords[0], rightTopCoords[1],
    rightBottomCoords[0], rightBottomCoords[1]
  );

  p5.arc(
    topArcCenter[0], topArcCenter[1],
    arcSize, arcSize,
    topArcStart, topArcEnd
  );

  p5.arc(
    bottomArcCenter[0], bottomArcCenter[1],
    arcSize, arcSize,
    bottomArcStart, bottomArcEnd
  );
}

const drawing = (p5) => {
  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.strokeWeight(2);
    p5.noFill();
  };

  p5.draw = () => {
    p5.background(230, 230, 230);

    const grid = 4;
    const cellW = p5.width / grid;
    const cellH = p5.height / grid;

    for (let i = 0; i < grid * grid; i++) {
      let x = (i % grid) * cellW;
      let y = Math.floor(i / grid) * cellH;

      drawBook(p5, x, y, cellW, cellH);
    }
  };
};

new p5(drawing);