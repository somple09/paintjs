const canvas = document.querySelector(".jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.querySelector(".jsRange");

canvas.width = document.getElementsByClassName("jsCanvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("jsCanvas")[0].offsetHeight;

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


function changeColor(event) {
  ctx.strokeStyle = event.target.style.backgroundColor;
}

Array.from(colors).forEach(color => 
  color.addEventListener("click", changeColor))


function changeSize(event) {
  ctx.lineWidth = event.target.value
}

if(range){
  range.addEventListener("input", changeSize)
}