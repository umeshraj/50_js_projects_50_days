const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.getElementById("replay");

runAnimation();

function runAnimation() {
  const nextToLast = nums.length - 1;

  nums.forEach((num, idx) => {
    num.addEventListener("animationend", (e) => {
      if (e.animationName == "goIn" && idx != nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName == "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}
