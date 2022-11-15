const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberTwo = Math.random(); // produces random number between 0 (including) and 1 (excluding)

let numbers = [2, 34, 76, 88, 89, 69];

if (randomNumber > 0.7) {
    alert('The first step is bigger than 0.7!');
    console.log(randomNumber);
} else {
    alert('The first step is smaller or equal to 0.7!');
    console.log(randomNumber);
}

for (let i = numbers.length; i > 0;) {
    i--;
    console.log(numbers[i]);
}

for (let logEntry of numbers) {
    console.log(logEntry);
}

if (randomNumber > 0.7 && randomNumberTwo > 0.7) {
    alert('The two numbers are bigger than 0.7!');
    console.log(`1)${randomNumber}  2)${randomNumberTwo}`);
} else if (randomNumber < 0.2) {
    alert('Number one is less than 0.2');
    console.log(`1)${randomNumber}  2)${randomNumberTwo}`);
} else if (randomNumberTwo < 0.2) {
    alert('Number two is less than 0.2');
    console.log(`1)${randomNumber}  2)${randomNumberTwo}`);
} else {
    console.log(`1)${randomNumber}  2)${randomNumberTwo}`);
}