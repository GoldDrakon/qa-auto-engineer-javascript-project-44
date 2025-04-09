import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';

function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function brainCalc() {
    console.log('What is the result of the expression?');
    let operator = [ '+' , '-' , '*' ];
    for (let i = 1; i <= 3; i += 1) {
        let randomX = randomNumberRange(50, 100);
        let randomY = randomNumberRange(1, 50);
        let randomOperator = operator[randomNumberRange(0, 2)];
        const correctAnswerCalc = eval(randomX + randomOperator + randomY);
        const answerCalc = readlineSync.question(`Question: ${randomX} ${randomOperator} ${randomY}  `);
        if (answerCalc === correctAnswerCalc.toString()) {
            console.log('Correct!');
        } else {
            return console.log(`"${answerCalc}" is wrong answer ;(. Correct answer was "${correctAnswerCalc}".\n Let\'s try again, ${name}!`);
        };
        if (i === 3) {
            return console.log(`Congratulations, ${name}!`);
        }
    }
}

export {brainCalc};