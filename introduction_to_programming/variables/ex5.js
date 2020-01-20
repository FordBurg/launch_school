let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

//logs 'bar' as 'qux' is defined in a block and is out of scope.