import readlineSync from 'readline-sync';

var name;
const helloName = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export { helloName };
export { name };
