const task3Element = document.getElementById('task-3');
let userName1 = 'Sherif';
let userName2 = 'Hussein';
let userName3 = 'ElGeziry';
let result1;
let result2;

function greetings() {
    alert('Hello');
}

function user(userName1) {
    alert(userName1);
}

function fullName(userName1, userName2, userName3) {
    let result = `${userName1} ${userName2} ${userName3}`;
    return result;
}

result1 = greetings() + user(userName1);

task3Element.addEventListener('click', greetings);

result2 = fullName(userName1, userName2, userName3);

alert(result2);