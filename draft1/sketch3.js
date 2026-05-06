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

  let pageCloseAmount = p5.mouseX/p5.width;
  let topArcCoords = [x + w * 0.7, y + h * 0.4];
  let topArcStart = Math.PI;
  let topArcEnd = topArcStart + Math.PI * 0.5 * pageCloseAmount;

  let BottomArcCoords = [x + w * 0.7, y + h * 0.8];
  let BottomArcStart = Math.PI;
  let BottomArcEnd = BottomArcStart + Math.PI * 0.5 * pageCloseAmount;

  let arcSize = h * 0.4;

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
    topArcCoords[0], topArcCoords[1],
    arcSize, arcSize,
    topArcStart, topArcEnd
  );

  p5.arc(
    BottomArcCoords[0], BottomArcCoords[1],
    arcSize, arcSize,
    BottomArcStart, BottomArcEnd
  );
}




const drawing = (p5) => {
  p5.setup = () => {
    p5.createCanvas(600, 600); //(P5.width, P5.height)
    p5.strokeWeight(2);
    p5.noFill();
  };

  p5.draw = () => {
    p5.background(230, 230, 230);

    const grid = 4;
    const cellW = p5.width / grid;
    const cellH = p5.height / grid;

    for (let i = 0; i < grid * grid; i++) {
      let x = (i % grid) * cellW; //mod will repeat among 0 ~4
      let y = Math.floor(i / grid) * cellH; // ex if i=0~4 ->answers will be 0, 0.25, 0.5, 0.75 -> cellH = 0

      drawBook(p5, x, y, cellW, cellH);
    }
    
  };
};

new p5(drawing);