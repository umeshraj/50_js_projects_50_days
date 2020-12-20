const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progressBar = document.getElementById("progress-bar");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  // change circle to active
  updateCircles();
  // update prev/next
  updatePrevNext();
  // update progress bar
  updateProgressBar();
}

function updateCircles() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

function updatePrevNext() {
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

function updateProgressBar() {
  const width = ((currentActive - 1) / (circles.length - 1)) * 100;
  progressBar.style.width = width + "%";
}
