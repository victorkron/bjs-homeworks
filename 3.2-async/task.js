class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock (str, func, number) {
    if (!number) {
      console.error('Error');
      return undefined;
    } else {
      for (var variable in this.alarmCollection) {
        if (this.alarmCollection[variable].id == number) {
          console.error('Error');
          return undefined;
        }
      }
      //let arr = str.split(':');
      //arr = arr.map(number => Number(number));

      this.alarmCollection.push({
        id: number,
        time: str,
        callback: func,
      });
    }
  }// addClock

  removeClock (id) {
    let res;
    let arr = [];
    arr = this.alarmCollection.filter(number => number.id == id);
    if (arr.length !== 0) {
      this.alarmCollection = this.alarmCollection.filter(number => number.id !== id);
      res = true;
    } else {
      res = false;
    }
    return res;
  }

  getCurrentFormattedTime() {
    let str;
    let hours = (new Date()).getHours();
    if (hours < 10) hours = `0${hours}`;
    let minutes = (new Date()).getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    return `${hours}:${minutes}`;
  }




  start () {
      this.timerId = setInterval ( () => {
        for (var variable in this.alarmCollection) {
          if (this.getCurrentFormattedTime() == this.alarmCollection[variable].time) {
            this.alarmCollection[variable].callback();
          }
        }
      } , 1000 * 1);
  }

  stop() {
    for (var variable in this.alarmCollection) {
      if (this.alarmCollection[variable].time !== undefined) {
        this.alarmCollection[variable].time = null;
        clearInterval(this.timerId);

      }
    }
    this.timerId = null;
  }

  printAlarms () {
    this.alarmCollection.forEach((item, i) => {
      console.log(item);
    });
    console.log(this);
  }

  clearAlarms () {
    this.alarmCollection = [];
    this.timerId = null;
  }
}// class AlarmClock

function wakeUp () {
  console.log('Вставай');
}
function wakeUp2 () {
  console.log('Вставай.СейчасЖе');
}
//let testAlarm = new AlarmClock();
//testAlarm.addClock(testAlarm.getCurrentFormattedTime(), wakeUp, 1);
//testAlarm.addClock(testAlarm.getCurrentFormattedTime(), wakeUp2, 2);



//testAlarm.printAlarms();

//setTimeout(() => { testAlarm.stop(); }, 3000);
//setTimeout(() => { testAlarm.printAlarms(); }, 4000);
//setTimeout(() => { testAlarm.clearAlarms(); }, 5000);
//setTimeout(() => { testAlarm.printAlarms(); }, 6000);
