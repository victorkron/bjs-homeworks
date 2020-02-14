function getResult(a,b,c){
   'use strict';
    // код для задачи №1 писать здесь
   let discriminant = b**2 - (4 * a * c);
   let result = [];
   if (discriminant < 0) {
     console.log("Hi");
   } else if (discriminant == 0) {
     let x = (- b + Math.sqrt(discriminant)) / (2 * a);
     result.push(x);
   } else {
     let x1 = (- b + Math.sqrt(discriminant)) / (2 * a);
     let x2 = (- b - Math.sqrt(discriminant)) / (2 * a);
     result.push(x1);
     result.push(x2);
   }
   return result;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
   if (marks.length > 5){
     console.log("Оценок слишком много!");
     marks.splice(5);
   }
   let sum = 0;
   for (let i = 0; i < marks.length; i++){
     sum += marks[i];
   }
   let res = 0;
   if (marks.length != 0) {
     res = sum / marks.length;
   } else {
     res = 0;
   }
    return res;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let yearsOld = (new Date()).getFullYear() - dateOfBirthday.getFullYear();
    let str = '';
    if (yearsOld >= 18) {
      str = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (yearsOld < 18 && yearsOld >= 0) {
      str = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
      str = `${name}, вы еще не родились...`;
    }
    return str;
}
