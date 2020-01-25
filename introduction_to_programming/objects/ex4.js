//Create an array from the keys of object obj below, with all values converted to uppercase. Your implementation must not mutate obj.


let obj = {
  b: 2,
  a: 1,
  c: 3,
};


var result = Object.keys(obj);

for (let i = 0; i < result.length; i++) {
  result[i] = result[i].toUpperCase();
 }



console.log(result);

console.log(obj);