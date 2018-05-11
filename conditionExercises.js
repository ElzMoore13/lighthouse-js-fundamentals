var raining = true;
var cold = false;
var temperature = 21;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Grab your scarf!");
}
else {
  console.log("You could wear a short-sleeve");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe we should stay inside today...");
}