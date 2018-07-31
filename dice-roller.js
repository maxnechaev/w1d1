var rand = String(process.argv.slice(2));
var min = 1;
var max = 6;

function diceRoller(rand) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(diceRoller());
