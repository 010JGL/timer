// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments

// node timer1.js 10 3 5 15 9

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

const list = process.argv.slice(2);                     // get the node values

const alarmClock = function() {
  
  if (list.length === 0) {                           /// if the input has no value, returns nothing
    return '';
  }

  for (let i of list) {                           // every number in the list
    const delay = Number(i);                       //convert to number

    if (delay > 0 && !isNaN(delay)) {             // if ou delay is over 0 or not NOT A NUMBER > continue
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay * 1000);                           // delay are in seconds, our input wants ms so *1000
    }
  }
};

alarmClock();                                     // call it