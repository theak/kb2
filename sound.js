function handleKeyDown(e) {
  var key = e.key;
  if (key === "Backspace" || key === " ") {
  	console.log(2);
  } else if (key.length === 1) {
  	console.log(1);
  }
}