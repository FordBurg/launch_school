/*Create a function that creates and returns a copy of an object. The function takes two arguments: the object to copy and an array of the keys that you want to copy. You can omit the array of keys, 
in which case you should copy all the keys of the object.


function copy(orig) {
  
  let cloned = Object.assign({}, orig);
  console.log(cloned);

}



let original = {

  name: "Bob",
  age: 22,
  score: 355

};

console.log(original);

copy(original);

*/

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    console.log(destinationObject);
  } else {
    console.log(Object.assign(destinationObject, sourceObject));
  }
}


let original = {

  name: "Bob",
  age: 22,
  score: 355

};

copyObj(original);
