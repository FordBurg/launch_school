arr1 = [1,6,3,2];

arr2 = [-1,-6,-3,-2];

arr3 = [2,2];

function findBiggest(arr) {
  return Math.max.apply(Math, arr);
}



console.log(findBiggest(arr1));
console.log(findBiggest(arr2));
console.log(findBiggest(arr3));

