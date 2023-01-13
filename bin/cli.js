


/* var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!'); */

import readlineSync from 'readline-sync';
const userName = () => {

    var userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');

}

export { userName }; 

