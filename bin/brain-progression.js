#!/usr/bin/env node
// progression with missing item hidden by '..'
import readlineSync from 'readline-sync';

const myGameProgress = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const askQuestion = () => {
    let num1 = getRandomNumber(2, 10);
    const step = getRandomNumber(2, 10);
    const length = getRandomNumber(5, 20);
    const hiddenPosition = getRandomNumber(2, length);
    const progression = [];
    let correctAnswer = 0;

    for (let i = 0; i < length; i += 1) {
      progression.push(num1);
      num1 += step;
      if (i === hiddenPosition) {
        correctAnswer = progression[i];
        progression[i] = '..';
      }
    }

    const expression = progression.join(' ');
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
    console.log('-----------------🤖GAME PROGRESS🤖----------------------');
    console.log('----------progression----------');
    for (let i = 0; i < 3; i += 1) {
      if (askQuestion()) {
        score += 1;
      }
    }

    console.log(`Game Over. Your score: ${score} out of 3`);
  };
  playGame();
};

export default myGameProgress;
