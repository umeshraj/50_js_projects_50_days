const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => {
    this.className = "";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

// function dragStart() {
//   console.log("drag");
// }

// function dragStart() {
//   console.log("drag");
// }

// function dragStart() {
//   console.log("drag");
// }

// function dragStart() {
//   console.log("drag");
// }
