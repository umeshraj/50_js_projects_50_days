const screens = document.querySelectorAll(".screen");
const start_btn = document.getElementById("start-btn");
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");

// globals
let selected_insect = {};

start_btn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

choose_insect_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classList.add("up");

    // add new insect to screen
    setTimeout(createInsect, 1000);
    // startGame();
  });
});
