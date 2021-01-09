const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  // set initial value of counter
  counter.innerText = "0";
  updateCounter();

  const target = +counter.getAttribute("data-target");
  const incr = target / 10;
  let curVal = +counter.innerText;

  function updateCounter() {
    setTimeout((params) => {
      console.log("running timeout");
      if (curVal < target) {
        curVal += incr;
        counter.innerText = `${Math.ceil(curVal)}`;
        updateCounter();
      }
    }, 1000);
  }
});
