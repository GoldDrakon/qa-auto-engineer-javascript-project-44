import readlineSync from 'readline-sync';

let name = '';
const helloName = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

function brainEven() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 1; i <= 3; i += 1) {
        let randomNumber = Math.round(Math.random() * 1000);
        const answer = readlineSync.question(`Question: ${randomNumber}  `);
        if (randomNumber % 2 === 0 && answer === 'yes' || randomNumber % 2 !== 0 && answer === 'no') {
            console.log('Correct!');
        } else {
            let correctAnswer = 'no';
            if (randomNumber % 2 === 0) {
                correctAnswer = 'yes';
            }
            return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let\'s try again, ${name}!`);
        };
        if (i === 3) {
            return console.log(`Congratulations, ${name}!`);
        }
    }
}

export {helloName, brainEven};
//helloName();
//brainEven();