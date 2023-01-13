#!/usr/bin/env node

import { userNameFunc } from './cli.js';

const showGreeting = () => {
  // Внутри тела отступ 2 пробела для удобства чтения
  const text = 'Welcome to the Brain Games!';
  console.log(text);
};

// Вызов функции
showGreeting();
userNameFunc();
