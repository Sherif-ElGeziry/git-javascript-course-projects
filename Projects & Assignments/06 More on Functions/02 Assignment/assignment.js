const myName = prompt('Enter your name:', '');
const GREET = prompt('Enter greeting: Hi or Hello', '');
let word;

const sayHello = name =>
  console.log(GREET + name);

const sayHelloTwo = () => {
  console.log(GREET + myName);
};

const sayHelloThree = (name, greeting = GREET !== 'Hi' || GREET !== 'Hello' ? 'Hi' : GREET) =>
  word = `${greeting} ${name}`;

sayHello(myName);
sayHelloTwo();
alert(sayHelloThree(myName));
alert(sayHelloThree(myName, GREET));

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const sum of strings) {
    if (!sum) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'hello',
  'hi',
  'hey',
  'hola'
);