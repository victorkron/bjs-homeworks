
function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';

    let totalAmount;

    if (typeof percent == 'number' && typeof contribution == 'number' && typeof amount == 'number') {

      totalAmount = 0;
      let creditBody = amount - contribution;

      let term = date - (new Date());
      term = Math.floor(term / (1000 * 60 * 60 * 24 * 30));

      for (let i = 0; i < term; i++) {
        totalAmount += (creditBody) * ((percent / 100 / 12) + (percent / 100 / 12) / (((1 + (percent / 100 / 12)) ** term) - 1));
      }

      totalAmount = totalAmount.toFixed(2);

    } else if (Boolean(Number(percent)) && Boolean(Number(contribution)) && Boolean(Number(amount))) {
      percent = (Number(percent));
      contribution = Number(contribution);
      amount = (Number(amount));

      totalAmount = 0;
      let creditBody = amount - contribution;

      let term = date - (new Date());
      term = Math.floor(term / (1000 * 60 * 60 * 24 * 30));

      for (let i = 0; i < term; i++) {
        totalAmount += (creditBody) * ((percent / 100 / 12) + (percent / 100 / 12) / (((1 + (percent / 100 / 12)) ** term) - 1));
      }

      totalAmount = totalAmount.toFixed(2);

    } else {
      console.log(`Неправильно введены данные!`);
    }
    // код для задачи №1 писать здесь
    console.log(totalAmount);
    return Number(totalAmount);
}


function getGreeting(name = 'Аноним') {
    // код для задачи №2 писать здесь
    if (name == '') { name = 'Аноним'; }
    if (name == null) { name = 'Аноним'; }

    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}
