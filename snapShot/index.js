// memory leak in JS detected by meteor team

// import {writeSnapShot} from './heapShotTaker';

const writeSnapShot = require('./snapShot/heapShotTaker');

let theThing = null;

const replaceThing = function () {
  const originalThing = theThing;
  let unused = function () {
    if (originalThing)
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log(someMessage);
    }
  };

  writeSnapShot();
};

setInterval(replaceThing, 1000);
