#!/usr/bin/env node
// greatest common divisor
import readlineSync from 'readline-sync';

const myGameGsd = () => {
  const getRandomNumber = (param) => Math.floor(Math.random() * param);

  // recursive
  const resultGcd = (a, b) => {
    if (!b) {
      return a;
    }

    return resultGcd(b, a % b);
  };

  const askQuestion = () => {
    const num1 = getRandomNumber(10);
    const num2 = getRandomNumber(20);
    const expression = `${num1} ${num2}`;
    const correctAnswer = resultGcd(num1, num2);

    const userAnswer = parseInt(readlineSync.question(`Question: ${expression}\nYour answer:`), 10);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`Incorrect. The correct answer is ${correctAnswer}.`);
    return false;
  };

  const playGame = () => {
    let score = 0;
    console.log('-----------------🤖GAME GSD🤖----------------------');
    console.log('-Find the greatest common divisor of given numbers-');
    for (let i = 0; i < 3; i += 1) {
      if (askQuestion()) {
        score += 1;
      }
    }

    console.log(`Game Over. Your score: ${score} out of 3`);
  };
  playGame();
};

export default myGameGsd;
