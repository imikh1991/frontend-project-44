// prime number
import readlineSync from 'readline-sync';

const myGamePrime = () => {
  const getRandomNumber = (param) => Math.floor(Math.random() * param);

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const askQuestion = () => {
    const expression = getRandomNumber(100);
    const correctAnswer = isPrime(expression);

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
    console.log('----------------------🤖GAME PRIME🤖----------------------------');
    console.log('-Answer "yes" if given number is prime. Otherwise answer "no".-');
    for (let i = 0; i < 3; i += 1) {
      if (askQuestion()) {
        score += 1;
      }
    }

    console.log(`Game Over. Your score: ${score} out of 3`);
  };
  playGame();
};

export default myGamePrime;
