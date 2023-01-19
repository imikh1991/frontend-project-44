/* var readlineSync = require('readline-sync');
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!'); */
import readlineSync from 'readline-sync';

const userNameFunc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
};
// eslint-disable-next-line import/prefer-default-export
export default userNameFunc;
