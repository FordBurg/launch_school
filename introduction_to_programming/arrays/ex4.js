let before = [

  1,3,6,11,
  4,2,4,9,
  17,16,0,

];

let after = before.map((item) => {

  if(item % 2 === 0){
      return item = "even";
  }else{
      return item = "odd";

  }


});

console.log(after);