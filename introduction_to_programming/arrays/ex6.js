let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

//use filter and map to find length of elements in an array and filter them to only shaow odd length elements.


function findOdds(arr){


  let howLong = arr.map(item => item.length);
  
  let filtered = howLong.filter(howLong => howLong % 2 >= 1);

  console.log(filtered);

}


console.log(findOdds(arr)); 