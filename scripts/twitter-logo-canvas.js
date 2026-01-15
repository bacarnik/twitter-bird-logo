function drawTwitterBird(canvas) {
  const ctx = canvas.getContext("2d");

  const CSS_SIZE = 100;              // vizualna velikost (NE spremeni se)
  const DPR = window.devicePixelRatio || 1;

  // Nastavi dejansko ločljivost canvasa
  canvas.width = CSS_SIZE * DPR;
  canvas.height = CSS_SIZE * DPR;

  // CSS velikost ostane ista
  canvas.style.width = CSS_SIZE + "px";
  canvas.style.height = CSS_SIZE + "px";

  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.clearRect(0, 0, CSS_SIZE, CSS_SIZE);

  // Scale 512px logo → 100px CSS
  ctx.save();
  ctx.scale(CSS_SIZE / 512, CSS_SIZE / 512);

  ctx.fillStyle = "#1DA1F2";

  ctx.beginPath();
  ctx.moveTo(417, 95);
  ctx.bezierCurveTo(393, 67, 334, 48, 289, 84);
  ctx.bezierCurveTo(246, 115, 247, 166, 254, 183);
  ctx.bezierCurveTo(170, 180, 101, 141, 53, 82);
  ctx.bezierCurveTo(25, 130, 44, 185, 83, 211);
  ctx.bezierCurveTo(67, 211, 49, 206, 39, 199);
  ctx.bezierCurveTo(40, 248, 72, 286, 116, 295);
  ctx.bezierCurveTo(111, 299, 86, 301, 73, 297);
  ctx.bezierCurveTo(87, 342, 129, 364, 163, 364);
  ctx.bezierCurveTo(124, 397, 69, 411, 21, 404);
  ctx.bezierCurveTo(205, 522, 448, 396, 444, 159);
  ctx.bezierCurveTo(465, 145, 485, 122, 491, 110);
  ctx.bezierCurveTo(465, 121, 443, 125, 437, 124);
  ctx.bezierCurveTo(457, 113, 475, 89, 478, 71);
  ctx.bezierCurveTo(471, 80, 422, 95, 417, 95);
  ctx.closePath();

  ctx.fill();
  ctx.restore();
}
