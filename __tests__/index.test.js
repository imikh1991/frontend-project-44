import { describe, expect, it } from 'jest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
import readlineSync from 'readline-sync';
import { askQuestion } from '../src/games/calc.js';
import { getUserName } from '../src/index.js';
// const askQuestion = require('../src/games/calc.js');
describe('askQuestion function', () => {
  it('should generate the correct number of game questions and answers', () => {
    const { gameQuestions, correctGameAnswers } = askQuestion();

    expect(gameQuestions.length).toBe(3);
    expect(correctGameAnswers.length).toBe(3);
  });
});

it('should generate correct game answers', () => {
  const { gameQuestions, correctGameAnswers } = askQuestion();

  // Evaluate each question to get the expected correct answer
  const expectedCorrectAnswers = gameQuestions.map((expression) =>
  // eslint-disable-next-line no-eval, implicit-arrow-linebreak
    String(eval(expression)));

  expect(correctGameAnswers).toEqual(expectedCorrectAnswers);
});

it('user name is displayed', () => {
  readlineSync.question = jest.fn().mockReturnValueOnce('Elijah Swan');
  // Capture console.log output
  const consoleLogSpy = jest.spyOn(console, 'log');
  const result = getUserName();

  expect(result).toBe('Elijah Swan');
  // Expect console.log to have been called with the correct message
  expect(consoleLogSpy).toHaveBeenCalledWith('Hello, Elijah Swan!');
});
