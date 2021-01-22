const cups = document.querySelectorAll(".cup-small");
const percentage = document.getElementById("percentage");

updateBigCup();

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightCups(idx);
  });
});

function highlightCups(idx) {
  cups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = cups.length;

  const percent = (fullCups / totalCups) * 100;

  // update percentage text
  percentage.innerText = `${percent}%`;
  // update percentage height
  percentage.style.height = `${(fullCups / totalCups) * 250}px`;
}
