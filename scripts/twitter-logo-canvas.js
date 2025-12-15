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
ctx.moveTo(417.01, 94.98);
ctx.bezierCurveTo(393.43, 66.64, 334.12, 48.43, 288.94, 83.97);
ctx.bezierCurveTo(245.71, 114.81, 247.11, 166.14, 253.61, 182.89);
ctx.bezierCurveTo(170.18, 180.01, 101.34, 140.95, 53, 82);
ctx.bezierCurveTo(24.71, 129.59, 43.99, 185.22, 83, 211);
ctx.bezierCurveTo(66.66, 211.48, 48.78, 206.49, 39, 199);
ctx.bezierCurveTo(39.55, 247.76, 72.39, 285.63, 116, 295);
ctx.bezierCurveTo(110.89, 298.67, 86.05, 300.72, 73, 297);
ctx.bezierCurveTo(86.75, 341.61, 129.48, 364, 163, 364);
ctx.bezierCurveTo(123.9, 396.73, 69.16, 410.52, 21, 404);
ctx.bezierCurveTo(204.86, 521.78, 447.99, 396.38, 444, 159);
ctx.bezierCurveTo(465.26, 144.7, 485.35, 121.83, 490.92, 109.93);
ctx.bezierCurveTo(464.51, 121.12, 442.88, 124.94, 437.01, 124.01);
ctx.bezierCurveTo(456.75, 113.32, 475.32, 88.55, 478, 71);
ctx.bezierCurveTo(471.31, 79.66, 422.29, 95.38, 417, 94.97);
ctx.closePath();

ctx.fill();
ctx.restore();