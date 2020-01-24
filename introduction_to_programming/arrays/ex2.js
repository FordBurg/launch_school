//log even values

let myArray = [1,3,6,11,4,2,4,9,17,16,0];

function logEven(array){

 array.forEach(function (item) {
   if (item ===0){
     return;
   }else if (item % 2 === 0){
    console.log(item);

   }
 });
   

}

logEven(myArray);