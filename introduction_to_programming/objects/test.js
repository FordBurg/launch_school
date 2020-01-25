/*let person = {
  name: "Adam",
  age: "36",
  hobbies: ["guitar", "trading"],

}

person.height = "5ft";

person['gender'] = "male";

delete person.age;

console.log(person);




let number = 20;

let newNumber = number + 1;

console.log(newNumber);

let object = {a:1, b:2, c:3};

object.c = object.c + 1;

console.log(object);



let bob = { name: "bob", age: 22};

let studentBob = Object.create(bob);
studentBob.year = "senior";

console.log(studentBob);


let person = {
  name: "Bob",
  age: 30,
  height: "6ft"
};

for (let prop in person){
  console.log(person[prop]);
}



let obj1 = {a:1, b:2};

let obj2 = Object.create(obj1);

obj2.c = 3;

obj2.d = 4;

for(let prop in obj2){
  if(obj2.hasOwnProperty(prop)){
    console.log(obj2[prop]);
  }
}



let person = {
  name: "Bob",
  age: 30,
  height: "6ft"
};


let personKeys = Object.keys(person);

console.log(personKeys);


personKeys.forEach(key => console.log(person[key]));



//methods - Object.values

let person = {

  name: "Bob",
  age: 30,
  height: "6ft"

};



let personValues = Object.values(person);


console.log(personValues);



//Object.entries

let person = {

  name: "Bob",
  age: 30,
  height: "6ft"

};


console.log(Object.entries(person));

*/

//merge two objects
let objA = {a: "foo"};

let objB = {b: "bar"};

console.log(Object.assign(objA, objB));
































































