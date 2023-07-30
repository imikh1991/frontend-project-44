/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'jest';

const askQuestion = require('../src/games/calc.js');

describe('askQuestion function', () => {
  it('should generate the correct number of game questions and answers', () => {
    const { gameQuestions, correctGameAnswers } = askQuestion();

    // Check if the number of questions and answers match the roundsCount
    expect(gameQuestions.length).toBe(3);
    expect(correctGameAnswers.length).toBe(3);
  });

  it('should generate game questions in the correct format', () => {
    const { gameQuestions } = askQuestion();

    // Check if each question is in the format "num1 operator num2"
    // eslint-disable-next-line no-useless-escape
    const questionFormatRegex = /^\d+ [\+\-\*] \d+$/;
    gameQuestions.forEach((question) => {
      expect(question).toMatch(questionFormatRegex);
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
});
