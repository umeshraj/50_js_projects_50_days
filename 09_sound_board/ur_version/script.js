const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.innerText = sound;

  //   add event listener to each button
  btn.addEventListener("click", () => {
    // stop other sounds
    stopSounds();

    // play current sound
    document.getElementById(sound).play();
  });

  //   insert button into DOM
  document.getElementById("buttons").appendChild(btn);
});

// Stop playing all sounds
function stopSounds() {
  sounds.forEach((sound) => {
    const tmp = document.getElementById(sound);
    tmp.pause();
    tmp.currentTime = 0;
  });
}
