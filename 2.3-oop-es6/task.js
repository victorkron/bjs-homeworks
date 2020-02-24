'use strict';
class Weapon {
  constructor(object) {
    this.name = object.name;
    this.attack = object.attack;
    this.durability = object.durability;
    this.range = object.range;
    this._maxDurability = object.durability;
  }

  takeDamage(damage) {
    if ((this.durability < damage)) {
      this.durability = 0;
    } else {
      this.durability -= damage;
    }
  }

  getDamage() {
    let res;
    if(this.durability >= (0.3 * this._maxDurability)) {
      res = this.attack;
    } else  if (this.durability == 0){
      res = 0;
    } else {
      res = this.attack / 2;
    }

    return res;
  }

  isBroken() {
    let bool;
    if (this.durability > 0) {
      bool = false;
    } else if(this.durability == 0) {
      bool = true;
    } else {
      console.log("Error");
      bool = null;
    }
    return bool;
  }

}

class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3,
    })
  }
}

class Arm extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,
    })
  }
}

class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,
    })
  }
}


class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,
    })
  }
}

class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 8,
      durability: 300,
      range: 2,
    })
  }
}

class LongBow extends Weapon {
  constructor() {
    super({
      name: 'Длинный лук',
      attack: 15,
      durability: 200,
      range: 4,
    })
  }
}

class Axe extends Weapon {
  constructor() {
    super({
      name: 'Секира',
      attack: 27,
      durability: 800,
      range: 1,
    })
  }
}

class StormStaff extends Weapon {
  constructor() {
    super({
      name: 'Посох Бури',
      attack: 10,
      durability: 300,
      range: 3,
    })
  }
}


class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }

  getName() {
    return this.name;
  }

  addGrade (grade, subject) {
    let res;
    if (grade <= 5 && grade >= 1) {
      if (this.subjects[subject] == undefined) {
        grade = [grade];
        this.subjects[subject] = grade;
      } else {
        this.subjects[subject].push(grade);
      }
      res = 1;
    } else {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      res = 0;
    }
    return res;
  }

  getAverageBySubject (subject) {
    let keys = Object.keys(this.subjects);
    let bool = false;
    let res = 0;

    for (let variable of keys) {
      if (variable == subject) {
        bool = true;
      }
    }


    if (bool) {
      for (let i = 0; i < this.subjects[subject].length; i++) {
        res += this.subjects[subject][i];
      }
      res = res / this.subjects[subject].length;
    }

    return res;
  }

  getTotalAverage() {
    let keys = Object.keys(this.subjects);
    let res = [];
    for (let variable of keys) {
      res.push(this.getAverageBySubject(variable));
    }
    let intermediaRes = 0;
    for (let variable of res) {
      intermediaRes += variable;
    }
    let totalRes;
    if (res.length !== 0 ){
      totalRes = intermediaRes / res.length;
    } else {
      totalRes = 0;
    }

    return totalRes;
  }

}
/*
let student = new StudentLog('Harry Potter');
console.log(student);
student.addGrade(4, 'algebra');
student.addGrade(5, 'algebra');
console.log(student);
console.log(student.getAverageBySubject('algebra'));
console.log(student.getAverageBySubject('math'));
console.log(student);

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
*/


const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(2, 'algebra');
log.addGrade(2, 'algebra');
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75
