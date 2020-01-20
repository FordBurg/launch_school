

function multiply(left, right){

  let result = left * right;
  console.log(`${left} * ${right} = ${result}`);


}

function inputNumber(question){

  let rlSync = require('readline-sync');
  return rlSync.question(question);

}

let first = inputNumber('Enter a number... ');
let second = inputNumber('Enter another number... ');

multiply(first, second);

