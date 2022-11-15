class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

class Person {
    name = 'Sherif';

    constructor() {
        // super();
        this.age = 28;
        //this.greet = function() {...};
    }

    // greet = () => {
    //     console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
    // }

    greet() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
    }
}

// function Person() {
//     this.name = 'Sherif';
//     this.age = 28;
//     //this.greet = function() {...};
// }

// Person.prototype.greet = function () {
//     console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
// };

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

// Person.prototype.printAge = function () {
//     console.log(this.age);
// }

// Person.describe = function () {
//     console.log('Creating persons...');
// }

// console.dir(Person);

// const person = new Person;
// person.greet();
// person.printAge();
// console.log(person.length);
// console.log(person.toString());
// const person2 = new person.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

// const p = new Person;
// const p2 = new Person;
// p.greet();
// console.log(p);

// const btn = document.getElementById('btn');
// btn.addEventListener('click', p.greet.bind(p));

const course = {//New Object()
    title: 'JS',
    rating: 5
};

// console.log(course.__proto__);
// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function () {
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function () {
        console.log(this.progress);
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Sherif',
        writable: true
    }
});
// student.name = 'Sherif';

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 45,
    writable: false
});

student.printProgress();

console.log(student);

course.printRating();