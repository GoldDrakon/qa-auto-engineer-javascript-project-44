import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';
import getRandomNumber from '../src/getRandomNumber.js';

function brainPrime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const name = userName();
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber(2, 100);
    const NumberMassive = [];
    for (let j = 2; j <= 100; j += 1) {
      if (randomNumber % j === 0) {
        NumberMassive.push(j);
      }
    }
    const answerPrime = readlineSync.question(`Question: ${randomNumber}  `);
    let correctAnswerPrime = 'no';
    if (NumberMassive.length === 1) {
      correctAnswerPrime = 'yes';
    }
    if ((answerPrime === 'yes' && NumberMassive.length === 1) || (answerPrime === 'no' && NumberMassive.length > 1)) {
      console.log('Correct!');
    } else {
      return console.log(`"${answerPrime}" is wrong answer ;(. Correct answer was "${correctAnswerPrime}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default brainPrime;
