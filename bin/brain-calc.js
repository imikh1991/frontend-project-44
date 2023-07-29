// calculator
import readlineSync from 'readline-sync';

const myGameCalc = () => {
  const getRandomNumber = (param) => Math.floor(Math.random() * param);

  const askQuestion = () => {
    const num1 = getRandomNumber(10);
    const num2 = getRandomNumber(20);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(operators.length)];

    const expression = `${num1} ${operator} ${num2}`;
    // eslint-disable-next-line no-eval
    const correctAnswer = eval(expression);
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
    console.log('-----------------🤖GAME CALCULATOR🤖----------------------');
    console.log('----------What is the result of the expression?----------');
    for (let i = 0; i < 3; i += 1) {
      if (askQuestion()) {
        score += 1;
      }
    }

    console.log(`Game Over. Your score: ${score} out of 3`);
  };
  playGame();
};

export default myGameCalc;
