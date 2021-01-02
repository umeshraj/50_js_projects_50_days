const insert = document.getElementById("insert");

window.addEventListener("keydown", (ev) => {
  const key = ev.key === " " ? "Space" : ev.key;

  insert.innerHTML = `
  <div class="key">${key} <small>event.key</small></div>
  <div class="key">${ev.keyCode} <small>event.keyCode</small></div>
  <div class="key">${ev.code} <small>event.code</small></div>

  `;
});
