// calculator
import readlineSync from 'readline-sync';

const myGameEven = () => {
  const getRandomNumber = (param) => Math.floor(Math.random() * param);

  const askQuestion = () => {
    const expression = getRandomNumber(10);
    // проверка четности числа
    const isEven = (number) => (number % 2 === 0);

    const correctAnswer = isEven(expression);
    const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `).toLowerCase();

    if ((userAnswer === 'yes' && correctAnswer) || (userAnswer === 'no' && !correctAnswer)) {
      console.log('Correct!');
      return true;
    }
    console.log(`Incorrect. The correct answer is ${correctAnswer ? 'yes' : 'no'}.`);
    return false;
  };

  const playGame = () => {
    let score = 0;
    console.log('-----------------------🤖GAME EVEN🤖----------------------------');
    console.log('--Answer "yes" if the number is even, otherwise answer "no".---');
    for (let i = 0; i < 3; i += 1) {
      if (askQuestion()) {
        score += 1;
      }
    }

    console.log(`Game Over. Your score: ${score} out of 3`);
  };
  playGame();
};

export default myGameEven;
