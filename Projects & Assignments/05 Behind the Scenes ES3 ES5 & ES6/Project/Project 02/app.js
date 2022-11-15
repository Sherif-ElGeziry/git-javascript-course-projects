function getName() {
  return prompt('Your name: ', '');
}

function greet() {
  const userName = getName();
  console.log('Hi There ' + userName);
}

greet();