#!/usr/bin/env node
import userNameFunc from './cli.js';
// import userNameFunc from './cli.js';
// import readlineSync from 'readline-sync';
// import myGameEven from './brain-even.js';
// import myGameCalc from './brain-calc.js';
// import myGameGsd from './brain-gcd.js';
// import myGameProgress from './brain-progression.js';
// import myGamePrime from './brain-prime.js';
// import quadraticEquations from './quadraticEquations.js';

const brainGames = () => {
  const text = 'Welcome to the Brain Games!';
  console.log(text);
  userNameFunc();
};
brainGames();
export default brainGames;
// };

// Вызов функции
// showGreeting();
// userNameFunc();
// const userAnswer = readlineSync.question('Game:');
// перепишем логику под автотесты
/*
switch (userAnswer) {
  case '1':
    myGameEven();
    break;
  case '2':
    myGameCalc();
    break;
  case '3':
    myGameGsd();
    break;
  case '4':
    myGameProgress();
    break;
  case '5':
    myGamePrime();
    break;
  default:
    // console.log('You must choose one game - try again!');
}

*/
// (задать вопрос, получить ответ, сравнить ответ и т.д.).
//  Эту логику можно вынести в одно место и переиспользовать
// внутри конкретных игр для устранения дублирования кода.

// quadraticEquations();
