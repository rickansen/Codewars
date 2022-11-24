// Solution: Lazy to refactor, do it one day 😂
function calculate(sum) {
  if (/[^\.0123456789\+\-\*\$]/.test(sum)) return '400: Bad request';
  if (+sum) return +sum;

  let num = sum.split(/[\+\-\*\$]/);
  let op = [...sum].filter((x) => /[\+\-\*\$]/.test(x));

  while (/[\*\$]/.test(op)) {
    let divMultIndex = op.findIndex((x) => /[\*\$]/.test(x));
    let divOrMult = op[divMultIndex] === '*' ? multiply : divide;

    if (divMultIndex === 0) {
      console.log(num.splice(0, 2, divOrMult(+num[0], +num[1])));
      console.log(op.splice(0, 1));
      continue;
    } else {
      console.log(
        num.splice(
          divMultIndex,
          2,
          divOrMult(+num[divMultIndex], +num[divMultIndex + 1])
        )
      );
      console.log(op.splice(divMultIndex, 1));
      continue;
    }
  }

  while (/[\+\-]/.test(op)) {
    let addSubIndex = op.findIndex((x) => /[\+\-]/.test(x));
    let addOrSub = op[addSubIndex] === '+' ? add : subtract;

    if (addSubIndex === 0) {
      num.splice(0, 2, addOrSub(+num[0], +num[1]));
      op.splice(0, 1);
    } else {
      num.splice(
        addSubIndex,
        2,
        addOrSub(+num[addSubIndex], +num[addSubIndex + 1])
      );
      op.splice(addSubIndex, 1);
    }
  }

  return num[0];
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

//Test Cases

console.log(calculate('1'), 1);
console.log(calculate('1.1'), 1.1);
console.log(calculate('1+1'), 2);
console.log(calculate('1-1'), 0);
console.log(calculate('2$2'), 1);
console.log(calculate('2*2'), 4);
console.log(calculate('1.1+1.9'), 3);
console.log(calculate('9$4'), 2.25);
console.log(calculate('1.5*3'), 4.5);
console.log(calculate('5-43.2'), -38.2);
console.log(calculate('5+5+5+5'), 20);
console.log(calculate('5-5-5-5'), -10);
console.log(calculate('5*5*5*5'), 625);
console.log(calculate('5$5$5$5'), 0.04);
console.log(calculate('1+1-1'), 1);
console.log(calculate('5*6$2+5-10'), 10);
console.log(calculate('1*1*1*1*1*1$1$1$1$1+1-1+9-1'), 9);
console.log(calculate('1000$2.5$5+5-5+6$6'), 81);
console.log(calculate('5*6$2&5-10'), '400: Bad request');
console.log(calculate('5/10'), '400: Bad request');
console.log(calculate('p'), '400: Bad request');
console.log(calculate('9^9'), '400: Bad request');
console.log(calculate('1+2-3$4*1+1$2*4*4-1+2$2'));
