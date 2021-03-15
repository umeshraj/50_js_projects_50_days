const canvas = document.getElementById("canvas");
const colorEl = document.getElementById("color");
const sizeEl = document.getElementById("size");
const increaseEl = document.getElementById("increase");
const decreaseEl = document.getElementById("decrease");

const ctx = canvas.getContext("2d");
let isPressed = false;
let x, y;
let color = "black";
let size = 5;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x, y);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

increaseEl.addEventListener("click", () => {
  size += 5;
  size = size > 50 ? 50 : size;
  updateSizeOnScreen();
});

decreaseEl.addEventListener("click", () => {
  size -= 5;
  size = size <= 0 ? 5 : size;
  updateSizeOnScreen();
});
