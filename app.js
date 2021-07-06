const canvas = document.querySelector(".jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.querySelector(".jsRange");
const mode = document.querySelector(".jsMode");
const save = document.querySelector(".jsSave")

canvas.width = document.getElementsByClassName("jsCanvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("jsCanvas")[0].offsetHeight;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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
function onMouseClick(){
  if (filling === true) {
  ctx.fillStyle = ctx.strokeStyle
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}
}

function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", onMouseLeave);
  canvas.addEventListener("click", onMouseClick);
  canvas.addEventListener("contextmenu", handleCM);
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

function changeMode() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill"
  } else {
    filling = true;
    mode.innerText = "Draw"
  }
}

if(mode){
  mode.addEventListener("click", changeMode)
}

function saveImage(){
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS";
  link.click()
}

if(save){
  save.addEventListener("click", saveImage)
}