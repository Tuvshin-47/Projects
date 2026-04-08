console.log("Guesss Game");

(function () {
  let input = prompt("Give me a number between 1 and 6");
  console.log(input);
  console.log(typeof input);
  let numberInput = parseInt(input);

  const randomNumber = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber); // computer generated дурын тоо 1-6 хооронд
  let tries = 3;

  while (numberInput !== randomNumber) {
    tries--;
    console.log(`Your try ${tries}`);
    input = prompt("Give me a number between 1 and 6");
    numberInput = parseInt(input);
    if (tries <= 0) {
      break;
    }
  }

  if (tries > 0) {
    console.log("You won");
  } else {
    console.log("You lost");
  }
})();
