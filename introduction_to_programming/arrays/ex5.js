let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInt(array){

  let newArray =array.filter(item => Number.isInteger(item));
  return newArray;
}

let newArray = removeNonInt(array);

console.log(newArray);

