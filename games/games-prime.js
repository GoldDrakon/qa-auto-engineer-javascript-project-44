import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';

function randomNumberRangePrime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function brainPrime() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 1; i <= 3; i += 1) {
        let randomNumber = randomNumberRangePrime(2, 100);
        let NumberMassive = [];
        for (let j = 2; j <= 100; j += 1) {
            if (randomNumber%j === 0) {
                NumberMassive.push(j);
            }
        }
        const answerPrime = readlineSync.question(`Question: ${randomNumber}  `);
        let correctAnswerPrime = "no";
        if (NumberMassive.length === 1) {
            correctAnswerPrime = "yes";
        }
        if ((answerPrime === "yes" && NumberMassive.length === 1) || (answerPrime === "no" && NumberMassive.length > 1)) {
            console.log('Correct!');
        } else {
            return console.log(`"${answerPrime}" is wrong answer ;(. Correct answer was "${correctAnswerPrime}".\n Let\'s try again, ${name}!`);
        };
        if (i === 3) {
            return console.log(`Congratulations, ${name}!`);
        }
    }
}

export {brainPrime};