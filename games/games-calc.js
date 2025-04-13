import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';
import getRandomNumber from '../src/getRandomNumber.js';

function brainCalc() {
  console.log('What is the result of the expression?');
  const operator = ['+', '-', '*'];
  const name = userName();
  for (let i = 1; i <= 3; i += 1) {
    const randomX = getRandomNumber(10, 20);
    const randomY = getRandomNumber(1, 10);
    const randomOperator = operator[getRandomNumber(0, 2)];
    let correctAnswerCalc;
    switch (randomOperator) {
      case '+':
        correctAnswerCalc = randomX + randomY;
        break;
      case '-':
        correctAnswerCalc = randomX - randomY;
        break;
      case '*':
        correctAnswerCalc = randomX * randomY;
        break;
      default:
        correctAnswerCalc = null;
    }
    const answerCalc = readlineSync.question(`Question: ${randomX} ${randomOperator} ${randomY}  `);
    if (answerCalc === correctAnswerCalc.toString()) {
      console.log('Correct!');
    } else {
      return console.log(`"${answerCalc}" is wrong answer ;(. Correct answer was "${correctAnswerCalc}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default brainCalc;
