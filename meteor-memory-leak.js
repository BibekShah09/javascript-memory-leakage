// memory leak in JS detected by meteor team

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
};

setInterval(replaceThing, 1000);
