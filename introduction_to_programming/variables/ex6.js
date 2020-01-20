const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);


//no error. bar is logged as it's defined as a const outside of the block.