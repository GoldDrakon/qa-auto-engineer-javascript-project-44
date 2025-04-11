import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';

function randomNumberRangeProgression(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function brainProgression() {
    console.log('What number is missing in the progression?');
    for (let i = 1; i <= 3; i += 1) {
        let randomLength = randomNumberRangeProgression(7, 12);
        let randomSumProgression = randomNumberRangeProgression(5, 10);
        let randomSecretNumberProgression = randomNumberRangeProgression(1, randomLength);
        let nextNumberProgression = randomNumberRangeProgression(10, 30);
        let progression = nextNumberProgression;
        let secretNumber = 0;
        for (let j = 1; j <= randomLength; j += 1) {
            nextNumberProgression += randomSumProgression;
            if (j === randomSecretNumberProgression) {
                secretNumber = nextNumberProgression;
                progression += ' ..';
            } else {
                progression += ' ' + nextNumberProgression;
            }
        }  
        const answerProgression = readlineSync.question(`Question: ${progression}  `);    
        if (parseInt(answerProgression) === secretNumber) {
            console.log('Correct!');
        } else {
            return console.log(`"${answerProgression}" is wrong answer ;(. Correct answer was "${secretNumber}".\n Let\'s try again, ${name}!`);
        };
        if (i === 3) {
            return console.log(`Congratulations, ${name}!`);
        }
    }
}

export {brainProgression};