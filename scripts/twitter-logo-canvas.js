const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


// Twitter logo original size
const logoWidth = 512;
const logoHeight = 512;

// Desired display size (CSS)
const displaySize = 512;

// HiDPI scaling
const dpr = window.devicePixelRatio || 1;
canvas.width = displaySize * dpr;
canvas.height = displaySize * dpr;
ctx.scale(dpr, dpr);

// Centering
const scale = displaySize / logoWidth;
const offsetX = (displaySize - logoWidth * scale) / 2;
const offsetY = (displaySize - logoHeight * scale) / 2;

ctx.save();
ctx.translate(offsetX, offsetY);
ctx.scale(scale, scale);

// Draw Twitter logo
ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 0;

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

