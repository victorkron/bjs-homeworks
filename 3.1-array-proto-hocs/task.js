'use strict';

function sleep(milliseconds)
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  //sleep(1000); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays (arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)){
    if (arr1.length == arr2.length) {
      return arr1.every( (number, index) => {
        return number == arr2[index];
      });
    } else {
    return false;
    }
  } else {
    console.log('Error: arr1, arr2 isn`t Array');
  }
}

function memorize (fn, limit) {
  let memory = new Array(limit);
  let auxiliaryIndex;
  return ((...args) => {
    if (memory.some( (number, index) => { auxiliaryIndex = index; return compareArrays(number.arr, args); })) {
      //sleep(500);
      return memory[auxiliaryIndex].result;
    } else {
      let res = fn(...args);
      memory.pop();
      memory.unshift({arr: args, result: res});
      return res;
    }
  });

}

let timeTestArr = [[1, 2, 3], [2, 5], [1, 2, 3], [2, 5], [7, 8, 13, 1], [2, 5]];
let mSum = memorize(sum, 5);


let label = 'abs';

function testCase (func) {
  console.time(label);
  for (var i = 0; i < 100; i++) {
      func(...timeTestArr);
  }
  console.timeEnd(label);
}
testCase(mSum);
testCase(sum);
