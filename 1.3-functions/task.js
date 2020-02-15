'use strict';

function getSolutions(a, b, c) {
  let D = b**2 - (4 * a * c);
  let res;
  if (D < 0) {
    res = {
      D: D,
      roots: []
    }
  } else if (D == 0) {
    let x1 = - b / (2 * a);
    res = {
      D: D,
      roots: [x1]
    }
  } else {
    let x1 = (- b + Math.sqrt(D)) / (2 * a);
    let x2 = (- b - Math.sqrt(D)) / (2 * a);
    res = {
      D: D,
      roots: [x1, x2]
    }
  }

  return res;
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.roots.length == 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.roots.length == 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.roots.length == 2) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//--------------------------------------------------------------------------------------------------------------------------------

function getAverageScore(data) {
  let result = {};
  if (data != result){
    for (let key in data) {
      result[key] = getAverageMark(data[key]);
    }
    let auxiliary = [];
    for (let key in result) {
      auxiliary.push(result[key]);
    }
    result.average = getAverageMark(auxiliary);
  } else {
    result.average = 0;
  }

  return result;

}

function getAverageMark(marks) {
  let res;
  let sum = 0;
  for (let i of marks){
    sum += i;
  }
  if (marks.length == 0) {
    res = 0;
  } else {
    res = sum / marks.length;
  }

  return res;
}
console.log(getAverageScore({algebra: [3,4,5,4,5], russian: [3,4,2,4,3]}));

//--------------------------------------------------------------------------------------------------------------------------------

 function getPersonData(secretData) {
   let result = {};
   for (let key in secretData) {
    if (key == 'aaa') result.firstName = getDecodedValue(secretData[key]);
    if (key == 'bbb') result.lastName = getDecodedValue(secretData[key]);
   }
   return result;
 }

 function getDecodedValue(secret) {
   let str;
   if (secret == 1) {
    str = `Эмильо`;
   } else if (secret == 0) {
    str = `Родриго`;
  } else {
    console.log(`неправильно переданное значение`);
  }
  return str;
 }
 let o1 = {
   aaa: 0,
   bbb: 0
 }
 let o2 = {
   aaa: 0,
   bbb: 1
 }
 let o3 = {
   aaa: 1,
   bbb: 0
 }
 let o4 = {
   aaa: 1,
   bbb: 1
 }

 console.log(getPersonData(o1));
 console.log(getPersonData(o2));
 console.log(getPersonData(o3));
 console.log(getPersonData(o4));
