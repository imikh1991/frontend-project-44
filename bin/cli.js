// Wait for user's response.
import readlineSync from 'readline-sync';

const userNameFunc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
// eslint-disable-next-line import/prefer-default-export
export default userNameFunc;
