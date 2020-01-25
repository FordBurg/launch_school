//Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));

function allMatches(words,reg) {

  let result = words.filter(value => reg.test(value));

  console.log(result);

}


