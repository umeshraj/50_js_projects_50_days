const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    randomSelect();
  }
});

function createTags(input) {
  const tagsArray = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  // add to DOM
  tagsEl.innerHTML = "";
  tagsArray.forEach((tag) => {
    const spanEl = document.createElement("span");
    spanEl.classList = "tag";
    spanEl.innerText = tag;
    tagsEl.appendChild(spanEl);
  });
}

function randomSelect() {
  // highlight random tags
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    // remove highlight after 500ms
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  // after animating X times, pick one
  setTimeout(() => {
    clearInterval(interval);
    // add extra delay before selecting final
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tagsEl = document.querySelectorAll(".tag");
  return tagsEl[Math.floor(Math.random() * tagsEl.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
