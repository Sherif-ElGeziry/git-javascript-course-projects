function add(num1, num2) {
    return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

let perviousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    perviousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Coding'];

function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        console.log(multiplier);
        return amount * tax * multiplier;
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = 'Sherif';

function greetUser() {
    let name = 'Anna';
    console.log('Hi ' + name);
}

let name = 'Max';

userName = 'ElGeziry';

greetUser();

// function powerOf(x, n) {
//     let result = 1;

//     for (i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

function powerOf(x, n) {
    // if (n === 1) {
    //     return x;
    // }
    // return x * powerOf(x, n - 1);
    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); //2 * 2 * 2 = 8

const myself = {
    name: 'Sherif',
    friends: [
        {
            name: 'Mazen',
            friends: [
                {
                    name: 'Mohamed',
                    friends: [
                        {
                            name: 'Max'
                        },
                        {
                            name: 'Manuel'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Mahmoud'
        }
    ]
};

function getFriendNames(person) {
    const collectedNames = [];

    if (!person.friends) {
        return [];
    }

    for (const friend of person.friends) {
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendNames(friend));
    }

    return collectedNames;
}

console.log(getFriendNames(myself));