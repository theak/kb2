const $ = (q) => document.querySelectorAll(q);

function handleKeyDown(e) {
  var key = e.key;
  if (key === "Backspace") {
    console.log(3);
  } else if (key === " ") {
    console.log(2);
  } else if (key.length === 1) {
    console.log(1);
  }
}

var sounds = ["1.wav", "2.wav", "3.wav"];
var soundsets = ["mainsounds", "spacesounds", "backspacesounds"];

document.addEventListener("DOMContentLoaded", () => { 
  soundsets.forEach((soundSet, soundSetIndex) => {
    var set = document.getElementById(soundSet);
    sounds.forEach((sound, soundIndex) => {
      var tmpl = document.getElementById("radio").content.cloneNode(true);
      tmpl.querySelector("input").id = soundSetIndex + "_" + soundIndex;
      tmpl.querySelector("input").name = soundSetIndex;
      tmpl.querySelector("label").htmlFor = soundSetIndex + "_" + soundIndex;
      tmpl.querySelector("label").textContent = sound;
      set.appendChild(tmpl);
    });
  });
});