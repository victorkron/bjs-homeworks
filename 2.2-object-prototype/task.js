function getAnimalSound(animal) {
    'use strict';
    // код для задачи №1 писать здесь
    let animalSound;
    if (animal == undefined) { animalSound = null; }
    else { animalSound = animal.sound; }
    return animalSound;
}

function getAverageMark(marks) {
    'use strict';
    // код для задачи №2 писать здесь
    let averageMark = 0;
    if (marks.length != 0) {
      for (let variable of marks) {
        averageMark += Number(variable);
      }
      averageMark = Math.round(averageMark / marks.length);
    }
    else {

    }
    return averageMark;
}

function checkBirthday(birthday) {
    'use strict';
    // код для задачи №3 писать здесь
    let now = new Date();
    birthday = new Date(birthday);

    let diff = now - birthday;

    let age = (diff / ((1000 * 60 * 60 * 24 * (365 * 4 + 1)) / 4));

    let verdict = Boolean(Math.floor(age / 18));
    return verdict;
}
