let bar = 1;
function foo(){
  let bar = 2;
}

foo();
console.log(bar);

//bar is 1 as defined in outer scope. foo doesnt affect output.