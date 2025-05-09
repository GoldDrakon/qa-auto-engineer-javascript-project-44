import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';
import getRandomNumber from '../src/getRandomNumber.js';

function brainGcd() {
  console.log('Find the greatest common divisor of given numbers.');
  const name = userName();
  for (let i = 1; i <= 3; i += 1) {
    const randomX = getRandomNumber(1, 50);
    const randomY = getRandomNumber(1, 50);
    const correctAnswerGcdMassive = [];
    for (let y = 1; y <= 50; y += 1) {
      if (randomX % y === 0 && randomY % y === 0) {
        correctAnswerGcdMassive.push(y);
      }
    }
    const correctAnswerGcd = Math.max(...correctAnswerGcdMassive);
    const answerGcd = readlineSync.question(`Question: ${randomX} ${randomY}  `);
    if (parseInt(answerGcd, 10) === correctAnswerGcd) {
      console.log('Correct!');
    } else {
      return console.log(`"${answerGcd}" is wrong answer ;(. Correct answer was "${correctAnswerGcd}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default brainGcd;
