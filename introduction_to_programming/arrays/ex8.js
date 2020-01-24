let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

//Write some code to extract the word 'mem' from the nested array arr.

let extracted = [];

for (let i=0; i< arr.length; i++){
  for (let j = 0; j < arr.length; j++) {
    extracted.push(arr[i][j]);
  }
}

let index = extracted.indexOf("mem");

if (index > -1) {

  extracted.splice(index, 1);
  
}

console.log(extracted);

//arr[1][2]; gets 'mem'. Index 2 of array 1.

