// const cursor = document.querySelector(".cursor");
// const canvasTag = document.querySelector("canvas.in");

// const moveCursor = function (x, y) {
//   cursor.style.left = x + "px";
//   cursor.style.top = y + "px";
// };
// const setupCanvas = function (canvas) {
//   const w = window.innerWidth;
//   const h = window.innerHeight;
//   const dpi = window.devicePixelRatio;

//   canvas.width = w * dpi;
//   canvas.height = h * dpi;
//   canvas.style.width = w + "px";
//   canvas.style.height = h + "px";

//   const context = canvas.getContext("2d");
//   context.scale(dpi, dpi);
//   context.fillStyle = "red";
//   context.strokeStyle = "red";
//   context.lineWidth = 80;
//   context.lineCap = "round";
//   context.lineJoin = "round";
// };

// const startToDraw = function (canvas) {
//   const context = canvas.getContext("2d");
//   context.fillStyle = "yellow";
// };
// const moveDraw = function (canvas, x, y) {
//   const context = canvas.getContext("2d");
//   context.lineTo(x, y);
//   context.stroke();
// };

// document.addEventListener("mousemove", (e) => {
//   moveCursor(e.pageX, e.pageY);
//   moveDraw(canvasTag, e.pageX, e.pageY);
// });
// document.addEventListener("mousedown", () => {
//   startToDraw(canvasTag);
// });

// setupCanvas(canvasTag);
