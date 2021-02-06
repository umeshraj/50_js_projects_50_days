const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const toggleEl = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hoursForClock = hours % 12;
  const ampm = hours >= 12 ? "PM" : "AM";

  // set time
  timeEl.innerHTML = `${hoursForClock}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  // set date
  dateEl.innerHTML = `${days[day]} ${months[month]} <span class="circle">${date}</span>`;

  // set arms of clock
  const hoursDeg = scale(hours, 0, 11, 0, 360);
  hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursDeg}deg)`;
  const minutesDeg = scale(minutes, 0, 59, 0, 360);
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutesDeg}deg)`;
  const secondsDeg = scale(seconds, 0, 59, 0, 360);
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);
