const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

button.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 2500);
}

function getRandomMessage() {
  const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}
