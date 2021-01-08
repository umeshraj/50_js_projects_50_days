const navEl = document.getElementById("nav");
const toggleEl = document.getElementById("toggle");

toggleEl.addEventListener("click", () => {
  navEl.classList.toggle("active");
});
