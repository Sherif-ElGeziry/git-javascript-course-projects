const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
// movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userchosenKeyName = 'level';

const person = {
    'first name': 'Sherif',
    age: 28,
    hobbies: ['Sports', 'Coding'],
    [userchosenKeyName]: '...',
    greet: function () {
        alert('Hi there!');
    },
    1.5: 'hello'
};

// person.age = 29;
delete person.age; //removes age entirely
// person.age = null; //setting value to null maybe wanna use again later but age still in object
// person.age = undefined; //have no use for it later but age still in object
person.isAdmin = true;

const keyName = 'first name';

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);
// person.greet();