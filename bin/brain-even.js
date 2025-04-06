import {name} from '../src/cli.js';
import readlineSync from 'readline-sync';

const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 1; i <= 3; i += 1) {
        let randomNumber = Math.round(Math.random()*1000);
        const answer = readlineSync.question(`Question: ${randomNumber}  `);
        if (randomNumber%2 === 0 && answer === 'yes' || randomNumber%2 !== 0 && answer === 'no') {
            console.log('Correct!');
        } else {
            return console.log('"yes" is wrong answer ;(. Correct answer was "no".');
        }
        if (i === 3) {
            return console.log(`Congratulations, ${name}!`);
        }
    }    
}

export default brainEven;