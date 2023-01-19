import readlineSync from 'readline-sync';
import userNameFunc from './cli.js';

const questionFunction = () => Math.floor(Math.random() * 100);

const myGameEven = () => {
  const userName = userNameFunc();
  console.log('--------🤖Welcome to the GAME BRAIN-EVEN🤖-----------------');
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  console.log('-----------------🤖GAME BRAIN-EVEN🤖----------------------');
  // базовая логика играем в три раунда - спрашиваем пользователя 
  for (let i = 1; i <= 3; i += 1) {
    const roundGame = i;
    console.log(`Round = ${roundGame}`);
    const questionNumber = questionFunction();
    console.log(`Сomputer generated number 🤖 ${questionNumber}`);
    // Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.
    // неверный ответ
    // Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.

    const isEvenOrOdd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');
    // проверка четности числа

    console.log(`Number is 🤖 ${isEvenOrOdd(questionNumber)}`);
    // И ему нужно ответить yes, если число чётное, или no — если нечётное:
    // even - четный odd - нечетный
    const userAnswer = readlineSync.question('Your answer:');
    //  console.log(userAnswer);
    if (userAnswer === 'no' && (isEvenOrOdd(questionNumber) === 'Odd')) {
      console.log('Correct!❤️❤️❤️');
    } else if (userAnswer === 'yes' && (isEvenOrOdd(questionNumber) === 'Even')) {
      console.log('Correct!❤️❤️❤️');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was. Opposite- Try again ${userName}`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default myGameEven;
