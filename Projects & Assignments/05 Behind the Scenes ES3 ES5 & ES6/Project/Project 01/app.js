// var myName = 'Sherif';
let myName = 'Sherif';
let hobbies;

if (myName === 'Sherif') {
    hobbies = ['Sports', 'Coding']; //error
    // var hobbies = ['Sports', 'Coding']; //works everywhere as global var
    // let hobbies = ['Sports', 'Coding']; //error
    console.log(hobbies);
}

function greet() {
    // var age = 30;
    // var myName = 'ElGeziry';
    let age = 30;
    let myName = 'ElGeziry';
    console.log(myName, age, hobbies);
}

console.log(myName, hobbies);

greet();