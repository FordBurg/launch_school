function doSomething(string) {

  return string.split(" ").reverse().map((value) => value.length);
  
}


console.log(doSomething("Hello World"));

//converts into array of words, reverses it and maps to new array that contains length of the words