#!/usr/bin/env node
import userNameFunc from '../src/cli.js';

const brainGames = () => {
  console.log(`node bin/brain-games.js
    Welcome to the Brain Games!`);
  userNameFunc();
};
brainGames();
export default brainGames;
