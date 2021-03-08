const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", rippleHandler);
});

function rippleHandler(e) {
  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  // add the span element
  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  this.appendChild(circle);
  // remove the added child after some time
  setTimeout(() => {
    circle.remove();
  }, 1000);
}
