function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function startGame() {
  let start = 1;
  let end = 100;

  const computerNumber1 = getRandomNumber(start, end);
  let computerNumber2 = getRandomNumber(start, end);

  
  while(computerNumber1 !== computerNumber2) {

    console.log(`Компьютер 2: Пробую число ${computerNumber2}.`);

    if(computerNumber1 > computerNumber2) {
      console.log("Компьютер 1: Больше.");
      start = computerNumber2 + 1;
      computerNumber2 = getRandomNumber(start, end);

    } else {
      console.log("Компьютер 1: Меньше.");
      end = computerNumber2 - 1;
      computerNumber2 = getRandomNumber(start, end);
    }


  }

  console.log(`Компьютер 2: Пробую число ${computerNumber2}.`);
  console.log("Компьютер 1: Угадал!");
}

startGame();