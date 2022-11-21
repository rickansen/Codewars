// Solution 1: Yuck and Ugly code

function zero(a) {
  if (!a) {
    return 0;
  }
  let str = 0 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function one(a) {
  if (!a) {
    return 1;
  }
  let str = 1 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function two(a) {
  if (!a) {
    return 2;
  }
  let str = 2 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function three(a) {
  if (!a) {
    return 3;
  }
  let str = 3 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function four(a) {
  if (!a) {
    return 4;
  }
  let str = 4 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function five(a) {
  if (!a) {
    return 5;
  }
  let str = 5 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function six(a) {
  if (!a) {
    return 6;
  }
  let str = 6 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function seven(a) {
  if (!a) {
    return 7;
  }
  let str = 7 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function eight(a) {
  if (!a) {
    return 8;
  }
  let str = 8 + `${a}`.slice(0, 2);
  return evaluate(str);
}
function nine(a) {
  if (!a) {
    return 9;
  }
  let str = 9 + `${a}`.slice(0, 2);
  return evaluate(str);
}

function evaluate(x) {
  return Math.floor(eval(x));
}

const plus = (a) => `+${a}`;
const minus = (a) => `-${a}`;
const times = (a) => `*${a}`;
const dividedBy = (a) => `/${a}`;

// Test Cases

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
