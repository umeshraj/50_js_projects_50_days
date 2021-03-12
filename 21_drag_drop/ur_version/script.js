const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => {
    this.className = "";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}

function dragEnter() {
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragOver(e) {
  e.preventDefault();
}
