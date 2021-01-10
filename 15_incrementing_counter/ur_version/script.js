const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  // set initial value of counter
  counter.innerText = "0";

  const updateCounter = () => {
    console.log("inside");
    // get target number
    const target = +counter.getAttribute("data-target");
    const incr = target / 10;

    let curVal = +counter.innerText;
    if (curVal < target) {
      curVal += incr;
      counter.innerText = `${Math.ceil(curVal)}`;
      setTimeout(updateCounter, 1000);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
