//Solution 1: EH
function averageString(str) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return str
    .split(' ')
    .map((x) => numbers.indexOf(x))
    .every((x) => x >= 0)
    ? numbers[
        Math.floor(
          str
            .split(' ')
            .map((x) => numbers.indexOf(x))
            .reduce((a, b) => a + b) / str.split(' ').length
        )
      ]
    : 'n/a';
}

// Test Cases
console.log(averageString('zero nine five two'), 'four');
console.log(averageString('four six two three'), 'three');
console.log(averageString('one two three four five'), 'three');
console.log(averageString('five four'), 'four');
console.log(averageString('zero zero zero zero zero'), 'zero');
console.log(averageString('one one eight one'), 'two');
console.log(averageString(''), 'n/a');
console.log(averageString('eleven'), 'n/a');
console.log(averageString('axaq six'), 'n/a');
