import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = userName();
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 1000);
    const answer = readlineSync.question(`Question: ${randomNumber}  `);
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      let correctAnswer = 'no';
      if (randomNumber % 2 === 0) {
        correctAnswer = 'yes';
      }
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default brainEven;
