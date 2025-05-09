import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';
import getRandomNumber from '../src/getRandomNumber.js';

function brainProgression() {
  console.log('What number is missing in the progression?');
  const name = userName();
  for (let i = 1; i <= 3; i += 1) {
    const randomLength = getRandomNumber(7, 12);
    const randomSumProgression = getRandomNumber(5, 10);
    const randomSecretNumberProgression = getRandomNumber(1, randomLength);
    let nextNumberProgression = getRandomNumber(10, 30);
    let progression = nextNumberProgression;
    let secretNumber = 0;
    for (let j = 1; j <= randomLength; j += 1) {
      nextNumberProgression += randomSumProgression;
      if (j === randomSecretNumberProgression) {
        secretNumber = nextNumberProgression;
        progression += ' ..';
      } else {
        progression += ` ${nextNumberProgression}`;
      }
    }
    const answerProgression = readlineSync.question(`Question: ${progression}  `);
    if (parseInt(answerProgression, 10) === secretNumber) {
      console.log('Correct!');
    } else {
      return console.log(`"${answerProgression}" is wrong answer ;(. Correct answer was "${secretNumber}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default brainProgression;
