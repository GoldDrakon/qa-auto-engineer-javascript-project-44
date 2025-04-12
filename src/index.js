import readlineSync from 'readline-sync';
import { helloName } from './cli.js';
import brainEven from '../games/games-even.js';
import brainPrime from '../games/games-prime.js';
import brainCalc from '../games/games-calc.js';
import brainGcd from '../games/games-gcd.js';
import brainProgression from '../games/games-progression.js';

const choiceGames = () => {
  console.log('What kind of game do you want to play?');
  const games = ' 1 - Checking for parity\n 2 - Calculator\n 3 - NOD\n 4 - Arithmetic progression\n 5 - Is it a prime number?';
  const indexAnswer = readlineSync.question(`${games}\n Answer: `);
  switch (indexAnswer) {
    case '1' || 'Checking for parity':
      brainEven();
      break;
    case '2' || 'Calculator':
      brainCalc();
      break;
    case '3' || 'NOD':
      brainGcd();
      break;
    case '4' || 'Arithmetic progression':
      brainProgression();
      break;
    case '5' || 'Is it a prime number?':
      brainPrime();
      break;
    default:
      return console.log('Good bye!');
  }
  const indexAnswerSecond = readlineSync.question('Let\'s have another game? "yes" or "no"  ');
  if (indexAnswerSecond === 'yes') {
    choiceGames();
  } else {
    return console.log('Good bye!');
  }
  return console.log("we'll wait");
};
helloName();
choiceGames();
