const $ = (q) => document.querySelectorAll(q);

const getSound = (id) => document.getElementById("sound" + id);
function handleKeyPress(e) {
  var key = e.key;
  if (key === " ") {
    console.log(1);
    getSound(1).play();
  } else if (key.length === 1) {
    console.log(0);
    getSound(0).play();
  }
}

function handleKeyDown(e) {
  var key = e.key;
  if (key === "Backspace") {
    console.log(2);
    getSound(2).play();
  }
}

var sounds = ["1", "1_4800", "1_2800", "1_1600", "1_1200", "1_1000", "1_800", 
  "2", "2_4800"];
var soundsets = ["mainsounds", "spacesounds", "backspacesounds"];

const getWav = (sound) => "wav/" + sound + ".wav";

document.addEventListener("DOMContentLoaded", () => { 
  soundsets.forEach((soundSet, soundSetIndex) => {
    var set = document.getElementById(soundSet);
    sounds.forEach((sound, soundIndex) => {
      var tmpl = document.getElementById("radio").content.cloneNode(true);

      tmpl.querySelector("input").id = soundSetIndex + "_" + soundIndex;
      tmpl.querySelector("input").name = soundSetIndex;
      if (getSound(soundSetIndex).firstChild.src.endsWith(getWav(sound))) {
        tmpl.querySelector("input").checked = true;
      }
      tmpl.querySelector("input").onchange = () => {
        getSound(soundSetIndex).firstChild.src = getWav(sound);
        getSound(soundSetIndex).load();
      };
      tmpl.querySelector("label").htmlFor = soundSetIndex + "_" + soundIndex;
      tmpl.querySelector("label").textContent = sound;
      set.appendChild(tmpl);
    });
  });
});