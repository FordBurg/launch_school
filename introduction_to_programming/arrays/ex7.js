let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function findThree(num1,num2,num3){

  let together = numbers1.concat(numbers2,numbers3);

  together.forEach(element => {
    if(element === 3){
      console.log("true");
    }else{
      console.log("false");
    }
  });
 
}

findThree(numbers1, numbers2, numbers3);


//find 3

