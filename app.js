const canvas = document.querySelector(".jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "black"
ctx.lineWidth = 2.5
let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  let x = event.offsetX;
  let y = event.offsetY;

  if (!painting) {
    ctx.moveTo(x, y);
    ctx.beginPath();
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
} 

function onMouseDown(event) {
  painting = true;
}
function onMouseUp(event) {
  painting = false;
}
function onMouseLeave(event) {
  stopPainting();
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp)
  canvas.addEventListener("mouseleave", onMouseLeave);
}